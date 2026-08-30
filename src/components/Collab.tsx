import {
  ArrowUpRight,
  BadgeCheck,
  HeartHandshake,
  Megaphone,
  Sparkles,
  Video,
} from "lucide-react";

import Reveal from "./Reveal";
import { InstagramIcon, YoutubeIcon } from "./icons";
import { useSite } from "../lib/store";

export default function Collab() {
  const { data } = useSite();

  const collaborationTypes = [
    {
      icon: <HeartHandshake className="h-5 w-5" />,
      title: "Brand Collaborations",
      text: "Creative partnerships that naturally fit my content and audience.",
    },
    {
      icon: <Video className="h-5 w-5" />,
      title: "Reels & Content",
      text: "Engaging lifestyle reels, product features and social content.",
    },
    {
      icon: <Megaphone className="h-5 w-5" />,
      title: "Promotions",
      text: "Shoutouts and authentic brand visibility across my platforms.",
    },
  ];

  return (
    <section
      id="collab"
      className="relative overflow-hidden bg-white pb-16 pt-2 sm:pb-24 sm:pt-4 lg:pb-28 lg:pt-6"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand/5 blur-[90px] sm:h-80 sm:w-80 sm:blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-[90px] sm:h-80 sm:w-80 sm:blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-plum via-plum-2 to-brand px-5 py-12 shadow-2xl shadow-plum/20 sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            {/* Decorations */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border border-white/10 sm:h-72 sm:w-72" />

            <div className="pointer-events-none absolute -left-12 -top-12 h-44 w-44 rounded-full border border-white/[0.06] sm:h-52 sm:w-52" />

            <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-white/10 sm:h-96 sm:w-96" />

            <div className="pointer-events-none absolute right-10 top-10 h-24 w-24 animate-float rounded-full bg-gold/20 blur-3xl sm:right-16 sm:h-32 sm:w-32" />

            <div
              className="pointer-events-none absolute bottom-12 left-10 h-20 w-20 animate-float-slow rounded-full bg-brand-2/25 blur-2xl sm:left-14 sm:h-28 sm:w-28"
              style={{ animationDelay: "-4s" }}
            />

            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-[90px] sm:h-[350px] sm:w-[600px] sm:blur-[100px]" />

            {/* Stars */}
            <span className="pointer-events-none absolute left-6 top-6 text-xl text-gold/40 sm:left-8 sm:top-8 sm:text-2xl">
              ✦
            </span>

            <span className="pointer-events-none absolute bottom-8 right-8 text-2xl text-white/20 sm:bottom-10 sm:right-10 sm:text-3xl">
              ✦
            </span>

            <span className="pointer-events-none absolute right-[25%] top-8 text-xs text-white/20 sm:top-10 sm:text-sm">
              ✦
            </span>

            <div className="relative">
              {/* Header */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur-xl sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Let's create together
                </div>

                <h2 className="mx-auto mt-5 max-w-3xl font-display text-[2.3rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Have an idea? Let's make
                  <span className="italic text-brand-2">
                    {" "}
                    something amazing
                  </span>
                  .
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/65 sm:mt-6 sm:text-base">
                  Open to meaningful brand partnerships, creative campaigns,
                  reels, product features and collaborations that connect with
                  my audience naturally. 💌
                </p>
              </div>

              {/* Collaboration Cards */}
              <div className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-3">
                {collaborationTypes.map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-white/10 bg-white/[0.07] p-4 text-left shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.12] hover:shadow-2xl sm:rounded-3xl sm:p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white sm:h-11 sm:w-11 sm:rounded-2xl">
                      {item.icon}
                    </div>

                    <h3 className="mt-3 font-display text-base font-semibold text-white sm:mt-4 sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-white/50">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Trust / Benefits */}
              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5 text-[11px] font-medium text-white/55 sm:mt-8 sm:gap-x-6 sm:gap-y-3 sm:text-xs">
                <span className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="h-4 w-4 text-gold" />
                  Authentic content
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />

                <span className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="h-4 w-4 text-gold" />
                  Creative storytelling
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />

                <span className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="h-4 w-4 text-gold" />
                  Audience-first approach
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <a
                  href={data.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:w-auto"
                >
                  <span className="pointer-events-none absolute -left-full top-0 h-full w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-brand/10 to-transparent transition-all duration-700 group-hover:left-[130%]" />

                  <InstagramIcon className="relative h-5 w-5 text-brand" />

                  <span className="relative">Let's collaborate</span>

                  <ArrowUpRight className="relative h-4 w-4 text-brand transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                </a>

                <a
                  href={data.links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/[0.08] px-7 py-3.5 text-sm font-semibold text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-400/50 hover:bg-white/15 sm:w-auto"
                >
                  <YoutubeIcon className="h-5 w-5 text-red-400 transition-transform duration-300 group-hover:scale-110" />

                  Visit YouTube

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Bottom note */}
              <p className="mt-5 text-center text-[9px] font-medium uppercase tracking-[0.12em] text-white/30 sm:mt-6 sm:text-[11px] sm:tracking-[0.15em]">
                Brand partnerships · Reels · Promotions · Creative projects
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}