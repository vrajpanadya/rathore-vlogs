import { Sparkles } from "lucide-react";
import { useSite } from "../lib/store";

export default function Marquee() {
  const { data } = useSite();

  const items = [...data.marquee, ...data.marquee];

  return (
    <div className="relative z-10 overflow-hidden bg-ink py-3 sm:py-4">
      {/* Top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-20 w-[70%] -translate-x-1/2 bg-brand/10 blur-3xl" />

      {/* Marquee Strip */}
      <div className="relative -rotate-[0.7deg] overflow-hidden border-y border-white/10 bg-gradient-to-r from-brand via-brand-2 to-brand py-3 shadow-2xl shadow-brand/20 sm:-rotate-1 sm:py-4">
        {/* Glass highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        {/* Soft overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black/[0.06]" />

        {/* Left Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-brand/90 to-transparent sm:w-24" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-brand/90 to-transparent sm:w-24" />

        {/* Moving Items */}
        <div className="group flex w-max animate-marquee items-center gap-5 sm:gap-8">
          {items.map((item, i) => (
            <div
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-5 sm:gap-8"
            >
              <span className="whitespace-nowrap font-display text-sm font-medium italic tracking-wide text-white/95 transition-colors duration-300 group-hover:text-white sm:text-lg">
                {item || "Create • Capture • Inspire"}
              </span>

              {/* Separator */}
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-white/15 bg-white/10 text-gold shadow-lg backdrop-blur-sm sm:h-8 sm:w-8">
                <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-12 w-2/3 -translate-x-1/2 bg-brand/5 blur-2xl" />
    </div>
  );
}