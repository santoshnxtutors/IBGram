"use client";

import { useId, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Globe2, ChevronRight, Search, X, LocateFixed } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────
const COUNTRY_CITY_MAP: Record<string, { label: string; cities: string[] }> = {
  india: {
    label: "India 🇮🇳",
    cities: ["Gurugram", "Delhi", "Noida", "Mumbai", "Bengaluru", "Chennai", "Hyderabad", "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Surat"],
  },
  china: {
    label: "China 🇨🇳",
    cities: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu", "Hangzhou", "Wuhan", "Xi'an", "Tianjin", "Nanjing"],
  },
  usa: {
    label: "United States 🇺🇸",
    cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "San Francisco", "Seattle", "Boston", "Miami", "Dallas"],
  },
  australia: {
    label: "Australia 🇦🇺",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra", "Hobart", "Darwin", "Newcastle"],
  },
  uae: {
    label: "United Arab Emirates 🇦🇪",
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"],
  },
  singapore: {
    label: "Singapore 🇸🇬",
    cities: ["Central Region", "North Region", "East Region", "West Region", "North-East Region"],
  },
  uk: {
    label: "United Kingdom 🇬🇧",
    cities: ["London", "Manchester", "Birmingham", "Leeds", "Edinburgh", "Glasgow", "Liverpool", "Bristol", "Oxford", "Cambridge"],
  },
};

type DetectableLocation = {
  country: string;
  city: string;
  latitude: number;
  longitude: number;
};

type DetectionStatus = "idle" | "checking" | "detected" | "unavailable";

const DETECTABLE_LOCATIONS: DetectableLocation[] = [
  { country: "india", city: "Gurugram", latitude: 28.4595, longitude: 77.0266 },
  { country: "india", city: "Delhi", latitude: 28.6139, longitude: 77.209 },
  { country: "india", city: "Noida", latitude: 28.5355, longitude: 77.391 },
  { country: "india", city: "Mumbai", latitude: 19.076, longitude: 72.8777 },
  { country: "india", city: "Bengaluru", latitude: 12.9716, longitude: 77.5946 },
  { country: "india", city: "Chennai", latitude: 13.0827, longitude: 80.2707 },
  { country: "india", city: "Hyderabad", latitude: 17.385, longitude: 78.4867 },
  { country: "india", city: "Pune", latitude: 18.5204, longitude: 73.8567 },
  { country: "india", city: "Kolkata", latitude: 22.5726, longitude: 88.3639 },
  { country: "india", city: "Ahmedabad", latitude: 23.0225, longitude: 72.5714 },
  { country: "india", city: "Jaipur", latitude: 26.9124, longitude: 75.7873 },
  { country: "india", city: "Surat", latitude: 21.1702, longitude: 72.8311 },
  { country: "china", city: "Beijing", latitude: 39.9042, longitude: 116.4074 },
  { country: "china", city: "Shanghai", latitude: 31.2304, longitude: 121.4737 },
  { country: "china", city: "Guangzhou", latitude: 23.1291, longitude: 113.2644 },
  { country: "china", city: "Shenzhen", latitude: 22.5431, longitude: 114.0579 },
  { country: "china", city: "Chengdu", latitude: 30.5728, longitude: 104.0668 },
  { country: "china", city: "Hangzhou", latitude: 30.2741, longitude: 120.1551 },
  { country: "china", city: "Wuhan", latitude: 30.5928, longitude: 114.3055 },
  { country: "china", city: "Xi'an", latitude: 34.3416, longitude: 108.9398 },
  { country: "china", city: "Tianjin", latitude: 39.3434, longitude: 117.3616 },
  { country: "china", city: "Nanjing", latitude: 32.0603, longitude: 118.7969 },
  { country: "usa", city: "New York", latitude: 40.7128, longitude: -74.006 },
  { country: "usa", city: "Los Angeles", latitude: 34.0522, longitude: -118.2437 },
  { country: "usa", city: "Chicago", latitude: 41.8781, longitude: -87.6298 },
  { country: "usa", city: "Houston", latitude: 29.7604, longitude: -95.3698 },
  { country: "usa", city: "Phoenix", latitude: 33.4484, longitude: -112.074 },
  { country: "usa", city: "San Francisco", latitude: 37.7749, longitude: -122.4194 },
  { country: "usa", city: "Seattle", latitude: 47.6062, longitude: -122.3321 },
  { country: "usa", city: "Boston", latitude: 42.3601, longitude: -71.0589 },
  { country: "usa", city: "Miami", latitude: 25.7617, longitude: -80.1918 },
  { country: "usa", city: "Dallas", latitude: 32.7767, longitude: -96.797 },
  { country: "australia", city: "Sydney", latitude: -33.8688, longitude: 151.2093 },
  { country: "australia", city: "Melbourne", latitude: -37.8136, longitude: 144.9631 },
  { country: "australia", city: "Brisbane", latitude: -27.4698, longitude: 153.0251 },
  { country: "australia", city: "Perth", latitude: -31.9523, longitude: 115.8613 },
  { country: "australia", city: "Adelaide", latitude: -34.9285, longitude: 138.6007 },
  { country: "australia", city: "Gold Coast", latitude: -28.0167, longitude: 153.4 },
  { country: "australia", city: "Canberra", latitude: -35.2809, longitude: 149.13 },
  { country: "australia", city: "Hobart", latitude: -42.8821, longitude: 147.3272 },
  { country: "australia", city: "Darwin", latitude: -12.4634, longitude: 130.8456 },
  { country: "australia", city: "Newcastle", latitude: -32.9283, longitude: 151.7817 },
  { country: "uae", city: "Dubai", latitude: 25.2048, longitude: 55.2708 },
  { country: "uae", city: "Abu Dhabi", latitude: 24.4539, longitude: 54.3773 },
  { country: "uae", city: "Sharjah", latitude: 25.3463, longitude: 55.4209 },
  { country: "uae", city: "Ajman", latitude: 25.4052, longitude: 55.5136 },
  { country: "uae", city: "Ras Al Khaimah", latitude: 25.8007, longitude: 55.9762 },
  { country: "uae", city: "Fujairah", latitude: 25.1288, longitude: 56.3265 },
  { country: "uae", city: "Umm Al Quwain", latitude: 25.5647, longitude: 55.5552 },
  { country: "singapore", city: "Central Region", latitude: 1.3521, longitude: 103.8198 },
  { country: "singapore", city: "North Region", latitude: 1.4304, longitude: 103.8354 },
  { country: "singapore", city: "East Region", latitude: 1.3526, longitude: 103.9447 },
  { country: "singapore", city: "West Region", latitude: 1.3496, longitude: 103.7068 },
  { country: "singapore", city: "North-East Region", latitude: 1.3824, longitude: 103.8925 },
  { country: "uk", city: "London", latitude: 51.5074, longitude: -0.1278 },
  { country: "uk", city: "Manchester", latitude: 53.4808, longitude: -2.2426 },
  { country: "uk", city: "Birmingham", latitude: 52.4862, longitude: -1.8904 },
  { country: "uk", city: "Leeds", latitude: 53.8008, longitude: -1.5491 },
  { country: "uk", city: "Edinburgh", latitude: 55.9533, longitude: -3.1883 },
  { country: "uk", city: "Glasgow", latitude: 55.8642, longitude: -4.2518 },
  { country: "uk", city: "Liverpool", latitude: 53.4084, longitude: -2.9916 },
  { country: "uk", city: "Bristol", latitude: 51.4545, longitude: -2.5879 },
  { country: "uk", city: "Oxford", latitude: 51.752, longitude: -1.2577 },
  { country: "uk", city: "Cambridge", latitude: 52.2053, longitude: 0.1218 },
];

// ─── Searchable Combobox ──────────────────────────────────────────────────────
function SearchableSelect({
  placeholder,
  options,
  value,
  onChange,
  disabled = false,
  icon,
}: {
  placeholder: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}) {
  const listboxId = useId();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = useMemo(
    () => options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase())),
    [options, query]
  );

  const selected = options.find((o) => o.value === value);

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
            aria-label={`Search ${placeholder.toLowerCase()}`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            placeholder={`Search ${placeholder.toLowerCase()}...`}
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
          <Search className="size-4 text-muted-foreground/50 shrink-0" />
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
            {filtered.length === 0 ? (
              <div className="px-4 py-3 text-sm text-muted-foreground text-center">No results found</div>
            ) : (
              filtered.map((opt) => (
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
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
export function LocalizationModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [detectionStatus, setDetectionStatus] = useState<DetectionStatus>("idle");
  const [detectionMessage, setDetectionMessage] = useState("");

  const countryOptions = Object.entries(COUNTRY_CITY_MAP).map(([val, { label }]) => ({ value: val, label }));
  const cityOptions = country
    ? COUNTRY_CITY_MAP[country]?.cities.map((c) => ({ value: toCityValue(c), label: c })) ?? []
    : [];

  const syncSavedLocation = () => {
    const savedCountry = localStorage.getItem("ibgram_country") ?? "";
    const savedCity = localStorage.getItem("ibgram_city") ?? "";

    if (savedCountry && COUNTRY_CITY_MAP[savedCountry]) {
      setCountry(savedCountry);
      if (COUNTRY_CITY_MAP[savedCountry].cities.some((item) => toCityValue(item) === savedCity)) {
        setCity(savedCity);
      } else {
        setCity("");
      }
    }
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

  const saveLocation = (nextCountry: string, nextCity: string) => {
    localStorage.setItem("ibgram_country", nextCountry);
    localStorage.setItem("ibgram_city", nextCity);
    window.dispatchEvent(new Event("ibgram_location_updated"));
  };

  const handleSave = () => {
    if (country && city) {
      saveLocation(country, city);
      setOpen(false);
      // Note: no routing - city/country pages are future feature
    }
  };

  const handleAutoDetect = () => {
    if (!navigator.geolocation) {
      setDetectionStatus("unavailable");
      setDetectionMessage("Auto detection is not available in this browser. Please choose your country and city manually.");
      return;
    }

    setDetectionStatus("checking");
    setDetectionMessage("Detecting your nearest supported city...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const detectedLocation = findNearestSupportedLocation(position.coords.latitude, position.coords.longitude);

        if (!detectedLocation) {
          setDetectionStatus("unavailable");
          setDetectionMessage("We could not match your location to a supported city. Please choose it manually.");
          return;
        }

        const detectedCityValue = toCityValue(detectedLocation.city);

        setCountry(detectedLocation.country);
        setCity(detectedCityValue);
        saveLocation(detectedLocation.country, detectedCityValue);
        setDetectionStatus("detected");
        setDetectionMessage(`Detected nearest supported city: ${detectedLocation.city}. Preferences saved.`);
      },
      () => {
        setDetectionStatus("unavailable");
        setDetectionMessage("Location permission was blocked or timed out. Please choose your location manually.");
      },
      { enableHighAccuracy: false, maximumAge: 1000 * 60 * 30, timeout: 8000 },
    );
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[360px] bg-background/95 backdrop-blur-2xl border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-6 gap-4">
        <DialogHeader className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <DialogTitle className="text-xl font-black italic tracking-tighter text-[#f8f9fa]">select location</DialogTitle>
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
            Choose your country and city manually, or use browser location detection to save your nearest supported city.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          <SearchableSelect
            placeholder="Search country..."
            options={countryOptions}
            value={country}
            onChange={handleCountryChange}
            icon={<Globe2 className="size-4" />}
          />
          <SearchableSelect
            placeholder={country ? "Search city..." : "Select country first"}
            options={cityOptions}
            value={city}
            onChange={setCity}
            disabled={!country}
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
          disabled={!country || !city}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          Save Preferences <ChevronRight className="size-4 ml-2" />
        </Button>
      </DialogContent>
    </Dialog>
  );
}

function toCityValue(cityName: string): string {
  return cityName.toLowerCase().replace(/\s+/g, "-");
}

function findNearestSupportedLocation(latitude: number, longitude: number): DetectableLocation | undefined {
  return DETECTABLE_LOCATIONS.reduce<DetectableLocation | undefined>((nearest, location) => {
    if (!nearest) return location;

    const currentDistance = distanceInKm(latitude, longitude, location.latitude, location.longitude);
    const nearestDistance = distanceInKm(latitude, longitude, nearest.latitude, nearest.longitude);

    return currentDistance < nearestDistance ? location : nearest;
  }, undefined);
}

function distanceInKm(latA: number, lonA: number, latB: number, lonB: number): number {
  const earthRadiusKm = 6371;
  const deltaLat = toRadians(latB - latA);
  const deltaLon = toRadians(lonB - lonA);
  const startLat = toRadians(latA);
  const endLat = toRadians(latB);

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(startLat) * Math.cos(endLat) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}
