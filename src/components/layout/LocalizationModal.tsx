"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Globe2, ChevronRight, Search, X, LocateFixed } from "lucide-react";
import { DIAL_CODES } from "@/lib/payment-options";

// ─── Data ────────────────────────────────────────────────────────────────────
const regionName = new Intl.DisplayNames(["en"], { type: "region" });
const countryName = (code: string) => regionName.of(code.toUpperCase()) ?? code.toUpperCase();
const flag = (code: string) => String.fromCodePoint(...[...code.toUpperCase()].map((c) => 0x1f1a5 + c.charCodeAt(0)));

// City suggestions for the main markets. Any other city, in any country, can be typed in.
const CITY_SUGGESTIONS: Record<string, string[]> = {
  in: ["Gurugram", "Delhi", "Noida", "Mumbai", "Bengaluru", "Chennai", "Hyderabad", "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Surat"],
  cn: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu", "Hangzhou", "Wuhan", "Xi'an", "Tianjin", "Nanjing"],
  us: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "San Francisco", "Seattle", "Boston", "Miami", "Dallas"],
  au: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra", "Hobart", "Darwin", "Newcastle"],
  ae: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"],
  sg: ["Central Region", "North Region", "East Region", "West Region", "North-East Region"],
  gb: ["London", "Manchester", "Birmingham", "Leeds", "Edinburgh", "Glasgow", "Liverpool", "Bristol", "Oxford", "Cambridge"],
};

// Country keys saved by older versions of this modal (and CityHubLocationPrompt).
const LEGACY_COUNTRY_KEYS: Record<string, string> = { india: "in", china: "cn", usa: "us", australia: "au", uae: "ae", singapore: "sg", uk: "gb" };

// Main markets first, then every other country alphabetically.
const COUNTRY_OPTIONS = [
  ...Object.keys(CITY_SUGGESTIONS),
  ...Object.keys(DIAL_CODES)
    .map((code) => code.toLowerCase())
    .filter((code) => !(code in CITY_SUGGESTIONS))
    .sort((a, b) => countryName(a).localeCompare(countryName(b))),
].map((code) => ({ value: code, label: `${countryName(code)} ${flag(code)}` }));

type DetectionStatus = "idle" | "checking" | "detected" | "unavailable";
type DetectedPlace = { countryCode: string; city: string };

// ─── Saved location ──────────────────────────────────────────────────────────
function toCityValue(cityName: string): string {
  return cityName.trim().toLowerCase().replace(/\s+/g, "-");
}

/** "manual" = picked in this modal; silent auto-detection never overrides it. */
function saveLocation(countryCode: string, city: string, source: "auto" | "manual") {
  localStorage.setItem("ibgram_country", countryCode);
  localStorage.setItem("ibgram_city", toCityValue(city));
  localStorage.setItem("ibgram_city_label", city);
  localStorage.setItem("ibgram_location_source", source);
  window.dispatchEvent(new Event("ibgram_location_updated"));
}

/** Display name of the saved city ("New Delhi"): the exact name if it matches the saved slug, else the prettified slug. */
export function readSavedCityLabel(): string | null {
  const slug = localStorage.getItem("ibgram_city");
  if (!slug) return null;
  const label = localStorage.getItem("ibgram_city_label");
  if (label && toCityValue(label) === slug) return label;
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// ─── Detection ───────────────────────────────────────────────────────────────
/** BigDataCloud's free client endpoint: reverse-geocodes coordinates, or locates the visitor by IP when none are given. */
async function lookupBigDataCloud(coords?: GeolocationCoordinates): Promise<DetectedPlace | null> {
  const params = new URLSearchParams({ localityLanguage: "en" });
  if (coords) {
    params.set("latitude", String(coords.latitude));
    params.set("longitude", String(coords.longitude));
  }
  const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?${params}`, { cache: "no-store" });
  if (!res.ok) return null;
  const data = (await res.json()) as { countryCode?: string; city?: string; locality?: string; principalSubdivision?: string };
  const city = data.city || data.locality || data.principalSubdivision;
  return data.countryCode && city ? { countryCode: data.countryCode.toLowerCase(), city } : null;
}

async function lookupGeoJs(): Promise<DetectedPlace | null> {
  const res = await fetch("https://get.geojs.io/v1/ip/geo.json", { cache: "no-store" });
  if (!res.ok) return null;
  const data = (await res.json()) as { country_code?: string; city?: string; region?: string };
  const city = data.city || data.region;
  return data.country_code && city ? { countryCode: data.country_code.toLowerCase(), city } : null;
}

function getBrowserPosition(): Promise<GeolocationCoordinates> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not available"));
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => resolve(position.coords), reject, {
      maximumAge: 1000 * 60 * 30,
      timeout: 8000,
    });
  });
}

/** Silent detection that never prompts: precise location if already allowed, otherwise IP (two providers). */
async function detectPlace(): Promise<DetectedPlace | null> {
  const attempts: (() => Promise<DetectedPlace | null>)[] = [
    async () => {
      const permission = await navigator.permissions?.query({ name: "geolocation" });
      return permission?.state === "granted" ? lookupBigDataCloud(await getBrowserPosition()) : null;
    },
    lookupGeoJs,
    () => lookupBigDataCloud(),
  ];
  for (const attempt of attempts) {
    const place = await attempt().catch(() => null);
    if (place) return place;
  }
  return null;
}

// ─── Searchable Combobox ──────────────────────────────────────────────────────
function SearchableSelect({
  placeholder,
  options,
  value,
  onChange,
  disabled = false,
  allowCustom = false,
  icon,
}: {
  placeholder: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
  /** Also accept a typed value that is not in the list (used for cities). */
  allowCustom?: boolean;
  icon?: React.ReactNode;
}) {
  const listboxId = useId();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = useMemo(
    () => options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase())),
    [options, query]
  );

  const typed = query.trim();
  const customOption =
    allowCustom && typed && !options.some((o) => o.label.toLowerCase() === typed.toLowerCase()) ? typed : "";
  const selected = options.find((o) => o.value === value) ?? (allowCustom && value ? { value, label: value } : undefined);

  const handleSelect = (val: string) => {
    onChange(val);
    setQuery("");
    setOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
    setQuery("");
  };

  return (
    <div className="relative">
      {/* Trigger */}
      <div
        role="combobox"
        aria-label={placeholder}
        aria-controls={listboxId}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && setOpen((v) => !v)}
        onKeyDown={(event) => {
          if (disabled) return;
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen((value) => !value);
          }
          if (event.key === "Escape") {
            setOpen(false);
            setQuery("");
          }
        }}
        className={`flex items-center gap-3 h-12 px-4 rounded-xl border border-border/50 bg-muted/10 cursor-pointer transition-all ${
          disabled ? "opacity-30 cursor-not-allowed" : "hover:border-primary/50 hover:bg-muted/20"
        } ${open ? "border-primary ring-2 ring-primary/10" : ""}`}
      >
        <div className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
          {icon}
        </div>

        {open ? (
          <input
            autoFocus
            aria-label={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              // Keep typing keys (like space) away from the trigger's open/close shortcut.
              e.stopPropagation();
              if (e.key === "Escape") {
                setOpen(false);
                setQuery("");
              }
              if (e.key === "Enter") {
                e.preventDefault();
                const pick = filtered[0]?.value ?? customOption;
                if (pick) handleSelect(pick);
              }
            }}
            placeholder={placeholder}
            className="flex-1 bg-transparent outline-none text-sm font-medium text-foreground placeholder:text-muted-foreground"
          />
        ) : (
          <span className={`text-sm font-medium flex-1 ${selected ? "text-foreground" : "text-muted-foreground"}`}>
            {selected ? selected.label : placeholder}
          </span>
        )}
        <div className="flex items-center gap-1">
          {selected && !open && (
            <button
              type="button"
              onClick={handleClear}
              className="text-muted-foreground hover:text-foreground p-1"
              aria-label={`Clear ${placeholder.toLowerCase()}`}
            >
              <X className="size-3.5" />
            </button>
          )}
          <Search className="size-4 text-muted-foreground shrink-0" />
        </div>
      </div>

      {/* Dropdown */}
      {open && !disabled && (
        <>
          <div className="fixed inset-0 z-[99]" onClick={() => { setOpen(false); setQuery(""); }} />
          <div
            id={listboxId}
            role="listbox"
            className="absolute z-[100] mt-1 w-full max-h-52 overflow-y-auto rounded-xl border border-border bg-popover shadow-xl ring-1 ring-foreground/10"
          >
            {filtered.map((opt) => (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={value === opt.value}
                onClick={() => handleSelect(opt.value)}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-primary/10 hover:text-primary ${
                  value === opt.value ? "bg-primary/15 text-primary font-medium" : "text-foreground"
                }`}
              >
                {opt.label}
              </button>
            ))}
            {customOption && (
              <button
                type="button"
                role="option"
                aria-selected={false}
                onClick={() => handleSelect(customOption)}
                className="w-full text-left px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
              >
                Use &ldquo;{customOption}&rdquo;
              </button>
            )}
            {filtered.length === 0 && !customOption && (
              <div className="px-4 py-3 text-sm text-muted-foreground text-center">
                {allowCustom ? "Type your city name" : "No results found"}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
// Runs at most once per page load (LocalizationModal is mounted twice — desktop
// + mobile header — so guard against a double lookup).
let autoDetectAttempted = false;

export function LocalizationModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [detectionStatus, setDetectionStatus] = useState<DetectionStatus>("idle");
  const [detectionMessage, setDetectionMessage] = useState("");

  const cityOptions = (CITY_SUGGESTIONS[country] ?? []).map((c) => ({ value: c, label: c }));

  const syncSavedLocation = () => {
    const saved = localStorage.getItem("ibgram_country") ?? "";
    const savedCountry = LEGACY_COUNTRY_KEYS[saved] ?? saved;
    if (!COUNTRY_OPTIONS.some((option) => option.value === savedCountry)) return;
    setCountry(savedCountry);
    setCity(readSavedCityLabel() ?? "");
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) {
      syncSavedLocation();
      setDetectionStatus("idle");
      setDetectionMessage("");
    }

    setOpen(nextOpen);
  };

  const handleCountryChange = (val: string) => {
    setCountry(val);
    setCity(""); // reset city on country change
    setDetectionStatus("idle");
    setDetectionMessage("");
  };

  // Silent auto-detect once per browser session, for any country and city. A city picked manually is
  // always respected; an auto-detected one is refreshed each session so it stays current.
  useEffect(() => {
    if (autoDetectAttempted) return;
    autoDetectAttempted = true;
    if (localStorage.getItem("ibgram_location_source") === "manual" || sessionStorage.getItem("ibgram_location_detected")) return;

    // No cancel flag on purpose: this only writes storage and fires an event, which is safe after unmount,
    // and a cancel flag would drop the result under React Strict Mode's double effect run.
    void detectPlace().then((place) => {
      if (!place || localStorage.getItem("ibgram_location_source") === "manual") return;
      saveLocation(place.countryCode, place.city, "auto");
      sessionStorage.setItem("ibgram_location_detected", "1");
    });
  }, []);

  const handleSave = () => {
    if (country && city.trim()) {
      saveLocation(country, city.trim(), "manual");
      setOpen(false);
      // Note: no routing - city/country pages are future feature
    }
  };

  const handleAutoDetect = async () => {
    setDetectionStatus("checking");
    setDetectionMessage("Detecting your location...");

    // Ask for precise location; if it is blocked or unavailable, fall back to the IP lookup.
    const place = (await getBrowserPosition().then(lookupBigDataCloud).catch(() => null)) ?? (await detectPlace());
    if (!place) {
      setDetectionStatus("unavailable");
      setDetectionMessage("We could not detect your location. Please choose your country and city manually.");
      return;
    }

    setCountry(place.countryCode);
    setCity(place.city);
    saveLocation(place.countryCode, place.city, "auto");
    setDetectionStatus("detected");
    setDetectionMessage(`Detected ${place.city}, ${countryName(place.countryCode)}. Preferences saved.`);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[360px] bg-background/95 backdrop-blur-2xl border-border shadow-[0_12px_40px_rgba(19,37,74,0.16)] p-6 gap-4">
        <DialogHeader className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <DialogTitle className="text-xl font-black italic tracking-tighter text-foreground">select location</DialogTitle>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleAutoDetect}
              disabled={detectionStatus === "checking"}
              className="h-8 shrink-0 rounded-full border-primary/30 bg-primary/10 px-3 text-xs font-black text-primary hover:bg-primary/15"
            >
              <LocateFixed className="mr-1.5 size-3.5" />
              {detectionStatus === "checking" ? "Detecting" : "Auto detect"}
            </Button>
          </div>
          <DialogDescription className="sr-only">
            Choose any country and type or pick your city, or auto detect your location.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          <SearchableSelect
            placeholder="Search country..."
            options={COUNTRY_OPTIONS}
            value={country}
            onChange={handleCountryChange}
            icon={<Globe2 className="size-4" />}
          />
          <SearchableSelect
            placeholder={!country ? "Select country first" : cityOptions.length ? "Search or type your city..." : "Type your city..."}
            options={cityOptions}
            value={city}
            onChange={setCity}
            disabled={!country}
            allowCustom
            icon={<MapPin className="size-4" />}
          />
        </div>

        {detectionMessage ? (
          <p
            className={`text-xs font-medium leading-relaxed ${
              detectionStatus === "detected" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {detectionMessage}
          </p>
        ) : null}

        <Button
          onClick={handleSave}
          disabled={!country || !city.trim()}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          Save Preferences <ChevronRight className="size-4 ml-2" />
        </Button>
      </DialogContent>
    </Dialog>
  );
}
