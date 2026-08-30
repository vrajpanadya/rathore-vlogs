// import { Check, Film, Smartphone, Sparkles } from "lucide-react";
// import Reveal from "./Reveal";
// import { useSite } from "../lib/store";

// export default function About() {
//   const { data } = useSite();
//   const { about, links, hero } = data;

//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden bg-cream py-16 sm:py-24 lg:py-28"
//     >
//       {/* Background Effects */}
//       <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-blush/80 blur-3xl" />

//       <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-sand/80 blur-3xl" />

//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[120px]" />

//       <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:gap-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
//         {/* IMAGE SIDE */}
//         <Reveal>
//           <div className="relative mx-auto w-full max-w-[330px] sm:max-w-md">
//             {/* Decorative background frame */}
//             <div className="absolute -inset-3 rotate-3 rounded-[2.5rem] border border-brand/10 bg-gradient-to-br from-brand/10 via-white/40 to-gold/10 sm:-inset-4" />

//             {/* Main Image */}
//             <div className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-2 shadow-2xl shadow-plum/20 sm:rounded-[2.2rem]">
//               <div className="overflow-hidden rounded-[1.6rem] sm:rounded-[1.8rem]">
//                 <img
//                   src="/images/about-main.jpeg"
//                   alt="Kirti filming content"
//                   loading="lazy"
//                   decoding="async"
//                   className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                 />

//                 <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-60 sm:rounded-[1.8rem]" />
//               </div>
//             </div>

//             {/* Polaroid */}
//             <div className="absolute -bottom-6 -left-2 w-28 -rotate-6 rounded-2xl border border-white/70 bg-white p-2 pb-7 shadow-2xl shadow-plum/20 transition-all duration-500 hover:-rotate-2 hover:scale-105 sm:-bottom-8 sm:-left-10 sm:w-36 sm:p-2.5 sm:pb-8">
//               <img
//                 src="/images/about-small.jpeg"
//                 alt="Behind the scenes"
//                 loading="lazy"
//                 decoding="async"
//                 className="aspect-square w-full rounded-xl object-cover"
//               />

//               <p className="absolute bottom-2 left-0 right-0 text-center font-display text-[9px] italic text-ink/60 sm:text-[11px]">
//                 little moments ✨
//               </p>
//             </div>

//             {/* Sticker Badge */}
//             <div className="absolute -top-4 right-1 rotate-6 rounded-2xl border border-white/10 bg-ink px-4 py-2.5 text-center shadow-2xl shadow-plum/30 transition-transform duration-300 hover:rotate-3 sm:-top-6 sm:-right-6 sm:px-5 sm:py-3">
//               <p className="font-display text-xs font-semibold italic text-gold sm:text-sm">
//                 Rathore
//               </p>

//               <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-[10px]">
//                 Vlogs
//               </p>
//             </div>

//             {/* Floating Creator Chip */}
//             <div className="absolute -right-1 bottom-16 animate-float rounded-full border border-brand/15 bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-brand shadow-xl shadow-brand/10 backdrop-blur-xl sm:-right-8 sm:bottom-20 sm:px-4 sm:py-2 sm:text-xs">
//               📸 Creator since day one
//             </div>

//             {/* Small sparkle */}
//             <div className="absolute left-4 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white shadow-lg backdrop-blur-xl sm:left-6 sm:top-8 sm:h-10 sm:w-10">
//               <Sparkles className="h-4 w-4" />
//             </div>
//           </div>
//         </Reveal>

//         {/* TEXT SIDE */}
//         <div>
//           <Reveal>
//             <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand sm:text-sm sm:tracking-[0.25em]">
//               <span className="h-px w-8 bg-brand" />
//               About me
//             </p>

//             <h2 className="mt-4 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
//               Hi, I'm {hero.name.split(" ")[0]} — your new{" "}
//               <span className="relative italic text-brand">
//                 favourite creator
//                 <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-brand/15" />
//               </span>{" "}
//               😄
//             </h2>

//             <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink/65 sm:mt-6 sm:text-lg">
//               {about.bio}
//             </p>
//           </Reveal>

//           {/* Highlights */}
//           <Reveal delay={120}>
//             <ul className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-3.5">
//               {about.highlights.map((item) => (
//                 <li
//                   key={item}
//                   className="group flex items-start gap-3 rounded-2xl border border-ink/5 bg-white/60 p-3 text-ink/75 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/15 hover:bg-white hover:shadow-md sm:p-3.5"
//                 >
//                   <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand/10 transition-colors group-hover:bg-brand">
//                     <Check className="h-3.5 w-3.5 text-brand transition-colors group-hover:text-white" />
//                   </span>

//                   <span className="text-sm leading-relaxed sm:text-base">
//                     {item}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </Reveal>

//           {/* Stats */}
//           <Reveal delay={200}>
//             <div className="mt-8 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-4">
//               {about.stats.map((stat, index) => (
//                 <div
//                   key={`${stat.label}-${index}`}
//                   className="group relative overflow-hidden rounded-2xl border border-ink/5 bg-white/80 p-3 text-center shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/20 hover:shadow-xl hover:shadow-brand/10 sm:p-4"
//                 >
//                   <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-brand/10 blur-2xl transition-all duration-300 group-hover:bg-brand/20" />

//                   <p className="relative font-display text-2xl font-semibold text-ink transition-colors group-hover:text-brand sm:text-3xl">
//                     {stat.value}
//                   </p>

//                   <p className="relative mt-1 text-[9px] font-medium leading-snug text-ink/55 sm:text-[11px]">
//                     {stat.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </Reveal>

//           {/* CTA Buttons */}
//           <Reveal delay={280}>
//             <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
//               {/* YouTube */}
//               <a
//                 href={links.youtube}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-ink to-plum px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-plum/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-plum/30 sm:w-auto"
//               >
//                 <Film className="h-4 w-4 text-gold transition-transform duration-300 group-hover:scale-110" />
//                 Watch my vlogs
//               </a>

//               {/* Instagram */}
//               <a
//                 href={links.instagram}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand/15 bg-white px-6 py-3 text-sm font-semibold text-ink shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand hover:shadow-lg hover:shadow-brand/10 sm:w-auto"
//               >
//                 <Smartphone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
//                 See my reels
//               </a>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Check, Film, Smartphone, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { useSite } from "../lib/store";

export default function About() {
  const { data } = useSite();
  const { about, links, hero } = data;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cream py-16 sm:py-24 lg:py-28"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-blush/80 blur-3xl" />

      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-sand/80 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:gap-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* IMAGE SIDE */}
        <Reveal>
          <div className="relative mx-auto w-full max-w-[330px] sm:max-w-md">
            {/* Decorative background frame */}
            <div className="absolute -inset-3 rotate-3 rounded-[2.5rem] border border-brand/10 bg-gradient-to-br from-brand/10 via-white/40 to-gold/10 sm:-inset-4" />

            {/* Main Image */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-2 shadow-2xl shadow-plum/20 sm:rounded-[2.2rem]">
              <div className="overflow-hidden rounded-[1.6rem] sm:rounded-[1.8rem]">
                <img
                  src={about.images.main}
                  alt="Kirti filming content"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-60 sm:rounded-[1.8rem]" />
              </div>
            </div>

            {/* Small Floating Photo */}
            <div className="absolute -bottom-6 -left-2 w-28 -rotate-6 rounded-2xl border border-white/70 bg-white p-2 pb-7 shadow-2xl shadow-plum/20 transition-all duration-500 hover:-rotate-2 hover:scale-105 sm:-bottom-8 sm:-left-10 sm:w-36 sm:p-2.5 sm:pb-8">
              <img
                src={about.images.small}
                alt="Behind the scenes"
                loading="lazy"
                decoding="async"
                className="aspect-square w-full rounded-xl object-cover"
              />

              <p className="absolute bottom-2 left-0 right-0 text-center font-display text-[9px] italic text-ink/60 sm:text-[11px]">
                little moments ✨
              </p>
            </div>

            {/* Sticker Badge */}
            <div className="absolute -top-4 right-1 rotate-6 rounded-2xl border border-white/10 bg-ink px-4 py-2.5 text-center shadow-2xl shadow-plum/30 transition-transform duration-300 hover:rotate-3 sm:-top-6 sm:-right-6 sm:px-5 sm:py-3">
              <p className="font-display text-xs font-semibold italic text-gold sm:text-sm">
                Rathore
              </p>

              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-[10px]">
                Vlogs
              </p>
            </div>

            {/* Floating Creator Chip */}
            <div className="absolute -right-1 bottom-16 animate-float rounded-full border border-brand/15 bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-brand shadow-xl shadow-brand/10 backdrop-blur-xl sm:-right-8 sm:bottom-20 sm:px-4 sm:py-2 sm:text-xs">
              📸 Creator since day one
            </div>

            {/* Small sparkle */}
            <div className="absolute left-4 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white shadow-lg backdrop-blur-xl sm:left-6 sm:top-8 sm:h-10 sm:w-10">
              <Sparkles className="h-4 w-4" />
            </div>
          </div>
        </Reveal>

        {/* TEXT SIDE */}
        <div>
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand sm:text-sm sm:tracking-[0.25em]">
              <span className="h-px w-8 bg-brand" />
              About me
            </p>

            <h2 className="mt-4 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Hi, I'm {hero.name.split(" ")[0]} — your new{" "}
              <span className="relative italic text-brand">
                favourite creator
                <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-brand/15" />
              </span>{" "}
              😄
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink/65 sm:mt-6 sm:text-lg">
              {about.bio}
            </p>
          </Reveal>

          {/* Highlights */}
          <Reveal delay={120}>
            <ul className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-3.5">
              {about.highlights.map((item) => (
                <li
                  key={item}
                  className="group flex items-start gap-3 rounded-2xl border border-ink/5 bg-white/60 p-3 text-ink/75 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/15 hover:bg-white hover:shadow-md sm:p-3.5"
                >
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand/10 transition-colors group-hover:bg-brand">
                    <Check className="h-3.5 w-3.5 text-brand transition-colors group-hover:text-white" />
                  </span>

                  <span className="text-sm leading-relaxed sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Stats */}
          <Reveal delay={200}>
            <div className="mt-8 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-4">
              {about.stats.map((stat, index) => (
                <div
                  key={`${stat.label}-${index}`}
                  className="group relative overflow-hidden rounded-2xl border border-ink/5 bg-white/80 p-3 text-center shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/20 hover:shadow-xl hover:shadow-brand/10 sm:p-4"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-brand/10 blur-2xl transition-all duration-300 group-hover:bg-brand/20" />

                  <p className="relative font-display text-2xl font-semibold text-ink transition-colors group-hover:text-brand sm:text-3xl">
                    {stat.value}
                  </p>

                  <p className="relative mt-1 text-[9px] font-medium leading-snug text-ink/55 sm:text-[11px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={280}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={links.youtube}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-ink to-plum px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-plum/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-plum/30 sm:w-auto"
              >
                <Film className="h-4 w-4 text-gold transition-transform duration-300 group-hover:scale-110" />
                Watch my vlogs
              </a>

              <a
                href={links.instagram}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand/15 bg-white px-6 py-3 text-sm font-semibold text-ink shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand hover:shadow-lg hover:shadow-brand/10 sm:w-auto"
              >
                <Smartphone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
                See my reels
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}