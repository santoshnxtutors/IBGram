"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, LocateFixed, MapPin } from "lucide-react";
import { normalizeSlug } from "@/lib/seo/slug-utils";

export type CityHubSummary = {
  cityName: string;
  citySlug: string;
  stateName: string;
  latitude: number;
  longitude: number;
  canonicalPath: string;
};

const CITY_ALIASES: Record<string, string> = {
  bangalore: "bangalore",
  bengaluru: "bangalore",
  delhi: "delhi",
  "new-delhi": "delhi",
  gurgaon: "gurugram",
  gurugram: "gurugram",
  mumbai: "mumbai",
  noida: "noida",
};

type DetectionState = "idle" | "checking" | "matched" | "unavailable";

export function CityHubLocationPrompt({ cities }: { cities: CityHubSummary[] }) {
  const [detectedSlug, setDetectedSlug] = useState<string | undefined>();
  const [status, setStatus] = useState<DetectionState>("idle");

  const cityBySlug = useMemo(() => new Map(cities.map((city) => [city.citySlug, city])), [cities]);
  const detectedCity = detectedSlug ? cityBySlug.get(detectedSlug) : undefined;

  useEffect(() => {
    function syncSavedLocation() {
      const savedCity = window.localStorage.getItem("ibgram_city");
      if (!savedCity) return;

      const alias = CITY_ALIASES[normalizeSlug(savedCity)];
      if (alias && cityBySlug.has(alias)) {
        setDetectedSlug(alias);
        setStatus("matched");
      }
    }

    syncSavedLocation();
    window.addEventListener("ibgram_location_updated", syncSavedLocation);

    return () => window.removeEventListener("ibgram_location_updated", syncSavedLocation);
  }, [cityBySlug]);

  function detectNearestCity() {
    if (!navigator.geolocation) {
      setStatus("unavailable");
      return;
    }

    setStatus("checking");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const nearestCity = cities.reduce<CityHubSummary | undefined>((nearest, city) => {
          if (!nearest) return city;

          const currentDistance = distanceInKm(position.coords.latitude, position.coords.longitude, city.latitude, city.longitude);
          const nearestDistance = distanceInKm(position.coords.latitude, position.coords.longitude, nearest.latitude, nearest.longitude);

          return currentDistance < nearestDistance ? city : nearest;
        }, undefined);

        if (nearestCity) {
          setDetectedSlug(nearestCity.citySlug);
          setStatus("matched");
          window.localStorage.setItem("ibgram_country", "india");
          window.localStorage.setItem("ibgram_city", nearestCity.citySlug);
          window.dispatchEvent(new Event("ibgram_location_updated"));
        } else {
          setStatus("unavailable");
        }
      },
      () => setStatus("unavailable"),
      { enableHighAccuracy: false, maximumAge: 1000 * 60 * 30, timeout: 8000 },
    );
  }

  return (
    <div className="rounded-[2rem] border border-primary/20 bg-primary/10 p-5 md:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
            <MapPin className="size-3.5" />
            Location-aware city page
          </div>
          <p className="text-base font-semibold leading-relaxed text-foreground/90">
            {detectedCity
              ? `Your saved or detected location points to ${detectedCity.cityName}.`
              : "Use your saved location or browser location to jump to the closest available IB tutor city page."}
          </p>
          {status === "unavailable" ? (
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              Location detection was not available. You can still choose a city from the list below.
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-3 sm:min-w-60">
          {detectedCity ? (
            <Link
              href={detectedCity.canonicalPath}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-5 text-sm font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Open {detectedCity.cityName}
              <ArrowRight className="ml-2 size-4" />
            </Link>
          ) : null}
          <button
            type="button"
            onClick={detectNearestCity}
            disabled={status === "checking"}
            className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-background/60 px-5 text-sm font-black text-foreground transition-all hover:border-secondary/50 disabled:cursor-wait disabled:opacity-60"
          >
            <LocateFixed className="mr-2 size-4" />
            {status === "checking" ? "Detecting..." : "Detect nearest city"}
          </button>
        </div>
      </div>
    </div>
  );
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
