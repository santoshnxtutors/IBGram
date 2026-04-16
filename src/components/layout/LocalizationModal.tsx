"use client";

import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Globe2, ChevronRight, Search, X } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────
const COUNTRY_CITY_MAP: Record<string, { label: string; cities: string[] }> = {
  india: {
    label: "India 🇮🇳",
    cities: ["Mumbai", "Delhi", "Bengaluru", "Chennai", "Hyderabad", "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Surat"],
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

// ─── Searchable Combobox ──────────────────────────────────────────────────────
function SearchableSelect({
  placeholder,
  options,
  value,
  onChange,
  disabled = false,
}: {
  placeholder: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
}) {
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
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => !disabled && setOpen((v) => !v)}
        className={`flex items-center justify-between h-12 px-3 rounded-xl border border-input bg-muted/20 cursor-pointer transition-colors ${
          disabled ? "opacity-40 cursor-not-allowed" : "hover:border-primary/50"
        } ${open ? "border-primary ring-2 ring-primary/20" : ""}`}
      >
        {open ? (
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            placeholder={`Search ${placeholder.toLowerCase()}...`}
            className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
          />
        ) : (
          <span className={`text-sm flex-1 ${selected ? "text-foreground" : "text-muted-foreground"}`}>
            {selected ? selected.label : placeholder}
          </span>
        )}
        <div className="flex items-center gap-1 ml-2">
          {selected && !open && (
            <button onClick={handleClear} className="text-muted-foreground hover:text-foreground">
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
          <div className="absolute z-[100] mt-1 w-full max-h-52 overflow-y-auto rounded-xl border border-border bg-popover shadow-xl ring-1 ring-foreground/10">
            {filtered.length === 0 ? (
              <div className="px-4 py-3 text-sm text-muted-foreground text-center">No results found</div>
            ) : (
              filtered.map((opt) => (
                <button
                  key={opt.value}
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

  const countryOptions = Object.entries(COUNTRY_CITY_MAP).map(([val, { label }]) => ({ value: val, label }));
  const cityOptions = country
    ? COUNTRY_CITY_MAP[country]?.cities.map((c) => ({ value: c.toLowerCase().replace(/\s+/g, "-"), label: c })) ?? []
    : [];

  const handleCountryChange = (val: string) => {
    setCountry(val);
    setCity(""); // reset city on country change
  };

  const handleSave = () => {
    if (country && city) {
      // Persist to localStorage so FloatingContactWidget can react
      localStorage.setItem("ibgram_country", country);
      localStorage.setItem("ibgram_city", city);
      // Notify all listeners instantly (same tab)
      window.dispatchEvent(new Event("ibgram_location_updated"));
      setOpen(false);
      // Note: no routing - city/country pages are future feature
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <div className="mx-auto size-12 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-4">
            <Globe2 className="size-6" />
          </div>
          <DialogTitle className="text-center text-2xl font-bold">Select Region</DialogTitle>
          <DialogDescription className="text-center">
            Choose your location to view region-specific tutors, curricula schedules, and in-person class availability.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-5 py-4">
          {/* Country */}
          <div className="space-y-2">
            <label className="text-sm font-semibold flex items-center gap-2">
              <Globe2 className="size-4 text-muted-foreground" /> Country
            </label>
            <SearchableSelect
              placeholder="Search & select country"
              options={countryOptions}
              value={country}
              onChange={handleCountryChange}
            />
          </div>

          {/* City */}
          <div className="space-y-2">
            <label className="text-sm font-semibold flex items-center gap-2">
              <MapPin className="size-4 text-muted-foreground" /> City
            </label>
            <SearchableSelect
              placeholder={country ? "Search & select city" : "Select country first"}
              options={cityOptions}
              value={city}
              onChange={setCity}
              disabled={!country}
            />
          </div>
        </div>

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

