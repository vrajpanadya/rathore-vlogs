import { ArrowUp, Heart, Lock, Sparkles } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "./icons";
import { NAV_LINKS } from "../data/site";
import { useSite } from "../lib/store";

export default function Footer() {
  const { data } = useSite();

  const firstName = data.hero.name.split(" ")[0];
  const lastName = data.hero.name.split(" ").slice(1).join(" ");

  return (
    <footer className="relative overflow-hidden bg-ink pt-14 text-white sm:pt-20">
      {/* Top Gradient Line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent" />

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-[360px] -translate-x-1/2 rounded-full bg-brand/10 blur-[100px] sm:h-56 sm:w-[500px] sm:blur-[120px]" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-plum-2/30 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-brand/10 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* =========================
            MAIN FOOTER
        ========================== */}
        <div className="grid gap-10 pb-12 sm:gap-12 sm:pb-14 md:grid-cols-[1.3fr_0.8fr_1fr] md:text-left lg:gap-16">

          {/* BRAND */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="group inline-flex items-center justify-center gap-2 md:justify-start"
            >
              <span className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {firstName}{" "}
                <span className="italic text-brand-2">
                  {lastName}
                </span>
              </span>

              <Sparkles className="h-4 w-4 text-gold transition-transform duration-500 group-hover:rotate-180 sm:h-5 sm:w-5" />
            </a>

            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/55 sm:mt-5 md:mx-0 md:text-[15px]">
              Vlogs on YouTube · Reels on Instagram — everyday life,
              unforgettable memories and happy moments one frame at a time.
            </p>

            {/* Social Buttons */}
            <div className="mt-5 flex items-center justify-center gap-3 sm:mt-6 md:justify-start">
              <a
                href={data.links.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-brand/30 sm:h-11 sm:w-11"
              >
                <InstagramIcon className="h-4 w-4 transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
              </a>

              <a
                href={data.links.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/30 sm:h-11 sm:w-11"
              >
                <YoutubeIcon className="h-4 w-4 transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-2 sm:tracking-[0.25em]">
              Quick Links
            </p>

            <nav className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 sm:mt-5 sm:gap-x-6 md:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center justify-center gap-2 text-[15px] font-medium text-white/55 transition-all duration-300 hover:translate-x-1 hover:text-white md:justify-start"
                >
                  <span className="h-1 w-1 rounded-full bg-brand opacity-0 transition-opacity group-hover:opacity-100" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* FOLLOW / CTA */}
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-2 sm:tracking-[0.25em]">
              Stay Connected
            </p>

            <p className="mt-4 text-sm leading-relaxed text-white/55 sm:mt-5 md:text-[15px]">
              Follow along for new reels, vlogs, stories and little moments
              from everyday life. ✨
            </p>

            <a
              href={data.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand/30 hover:brightness-110 sm:mt-6 sm:w-auto"
            >
              <InstagramIcon className="h-4 w-4 transition-transform group-hover:rotate-6" />
              Follow on Instagram
            </a>
          </div>
        </div>

        {/* =========================
            BOTTOM BAR
        ========================== */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-5 text-center text-[11px] text-white/35 sm:flex-row sm:py-6 sm:text-left sm:text-xs">

          <p className="max-w-sm leading-relaxed">
            © {new Date().getFullYear()} {data.hero.name} · Rathore Vlogs.
            All rights reserved.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-5 sm:justify-end">


            {/* Made With Love */}
            <p className="flex items-center gap-1.5">
              Made with
              <Heart className="h-3.5 w-3.5 fill-brand text-brand" />
              & chai ☕
            </p>

            {/* Back To Top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-white/50 transition-all duration-300 hover:border-brand/40 hover:bg-brand/10 hover:text-white sm:w-auto sm:px-3 sm:py-2"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}