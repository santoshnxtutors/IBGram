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
  icon,
}: {
  placeholder: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
  icon?: React.ReactNode;
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
            <button onClick={handleClear} className="text-muted-foreground hover:text-foreground p-1">
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
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[360px] bg-background/95 backdrop-blur-2xl border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-6 gap-4">
        <DialogHeader>
          <DialogTitle className="text-xl font-black italic tracking-tighter text-[#f8f9fa]">select location</DialogTitle>
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
