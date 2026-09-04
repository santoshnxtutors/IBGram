"use client";

interface Country {
  code: string;
  name: string;
}

const trustCountries: Country[] = [
  { code: "in", name: "India" },
  { code: "ae", name: "United Arab Emirates" },
  { code: "sg", name: "Singapore" },
  { code: "gb", name: "United Kingdom" },
  { code: "us", name: "United States" },
  { code: "ca", name: "Canada" },
  { code: "au", name: "Australia" },
  { code: "hk", name: "Hong Kong" },
  { code: "de", name: "Germany" },
  { code: "ch", name: "Switzerland" },
  { code: "qa", name: "Qatar" },
  { code: "sa", name: "Saudi Arabia" },
  { code: "my", name: "Malaysia" },
  { code: "jp", name: "Japan" },
  { code: "nl", name: "Netherlands" },
  { code: "nz", name: "New Zealand" },
  { code: "es", name: "Spain" },
  { code: "fr", name: "France" },
  { code: "kw", name: "Kuwait" },
  { code: "om", name: "Oman" },
  { code: "bh", name: "Bahrain" },
  { code: "za", name: "South Africa" },
  { code: "id", name: "Indonesia" },
  { code: "th", name: "Thailand" },
  { code: "ie", name: "Ireland" },
  { code: "se", name: "Sweden" },
  { code: "kr", name: "South Korea" },
];

export function HeroFlagSlider() {
  // Duplicate array for seamless infinite sliding
  const flags = [...trustCountries, ...trustCountries];

  return (
    <div 
      className="relative w-[136px] sm:w-[148px] h-10 overflow-hidden shrink-0 rounded-full [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]"
      aria-label="Countries represented"
    >
      <div className="flex items-center gap-2 animate-hero-flags-slide hover:[animation-play-state:paused] h-full will-change-transform">
        {flags.map((country, idx) => (
          <div
            key={`${country.code}-${idx}`}
            className="group relative size-8.5 sm:size-9 rounded-full border border-white/20 shadow-md bg-white/10 overflow-hidden shrink-0 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
            title={country.name}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/Countryflag/${country.code}.svg`}
              alt={`${country.name} flag`}
              className="w-full h-full object-cover rounded-full"
              width={36}
              height={36}
              loading="eager"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
