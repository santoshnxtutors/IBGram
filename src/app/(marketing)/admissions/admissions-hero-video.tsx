/* eslint-disable @next/next/no-img-element */
import { MobileHeroVideo } from "./mobile-hero-video";

export function AdmissionsHeroVideo() {
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-border/40 bg-background shadow-2xl shadow-black/20 sm:rounded-[2rem]">
      <div className="relative aspect-[16/11] sm:aspect-video">
        <img
          src="/Admission/home-poster.webp"
          alt=""
          width={960}
          height={540}
          decoding="async"
          fetchPriority="high"
          aria-hidden="true"
          className="h-full w-full object-cover object-center sm:hidden"
        />
        <video
          className="hidden h-full w-full object-cover object-center sm:block"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/Admission/home-poster.webp"
        >
          <source src="/Admission/home-optimized.mp4" type="video/mp4" />
        </video>
        <MobileHeroVideo />
      </div>
      <div className="absolute inset-x-0 bottom-0 rounded-b-[1.35rem] bg-[#0b0f17]/95 px-3 py-2.5 shadow-none sm:rounded-b-[1.75rem] sm:px-4 sm:py-3">
        <p className="text-[11px] font-semibold text-white/60 sm:text-xs">Application planning across</p>
        <p className="mt-0.5 text-xs font-black leading-5 text-white sm:text-sm">
          US / UK / Europe / Canada <span className="hidden sm:inline">/ Singapore / Australia</span>
        </p>
      </div>
    </div>
  );
}
