// // // // // import {
// // // // //   ArrowRight,
// // // // //   BadgeCheck,
// // // // //   Heart,
// // // // //   MessageCircle,
// // // // //   Play,
// // // // //   Send,
// // // // //   Sparkles,
// // // // // } from "lucide-react";

// // // // // import { InstagramIcon, YoutubeIcon } from "./icons";
// // // // // import { useSite } from "../lib/store";

// // // // // export default function Hero() {
// // // // //   const { data } = useSite();
// // // // //   const { hero, links } = data;

// // // // //   const words = hero.name.split(" ");
// // // // //   const first = words[0];
// // // // //   const rest = words.slice(1).join(" ");

// // // // //   const username = hero.badge.includes("@")
// // // // //     ? hero.badge.split("@")[1]
// // // // //     : "kirti_rathore0105";

// // // // //   return (
// // // // //     <section
// // // // //       id="home"
// // // // //       className="relative min-h-screen overflow-hidden bg-ink pb-16 pt-24 sm:pb-24 sm:pt-32 lg:flex lg:items-center lg:pb-28 lg:pt-36"
// // // // //     >
// // // // //       {/* =====================================
// // // // //           PREMIUM BACKGROUND
// // // // //       ====================================== */}
// // // // //       <div className="pointer-events-none absolute inset-0">
// // // // //         <div className="absolute -left-32 top-10 h-96 w-96 animate-blob rounded-full bg-brand/25 blur-[110px]" />

// // // // //         <div
// // // // //           className="absolute -right-24 top-1/3 h-[28rem] w-[28rem] animate-blob rounded-full bg-plum-2/80 blur-[120px]"
// // // // //           style={{ animationDelay: "-6s" }}
// // // // //         />

// // // // //         <div
// // // // //           className="absolute bottom-0 left-1/3 h-80 w-80 animate-blob rounded-full bg-gold/15 blur-[100px]"
// // // // //           style={{ animationDelay: "-11s" }}
// // // // //         />

// // // // //         {/* Center soft glow */}
// // // // //         <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[130px]" />
// // // // //       </div>

// // // // //       {/* Decorative Rings */}
// // // // //       <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full border border-white/5" />

// // // // //       <div className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full border border-white/5" />

// // // // //       <div className="pointer-events-none absolute -left-32 bottom-0 h-[25rem] w-[25rem] rounded-full border border-white/[0.03]" />

// // // // //       {/* Subtle dotted decoration */}
// // // // //       <div className="pointer-events-none absolute left-[8%] top-[22%] hidden grid-cols-4 gap-3 opacity-20 lg:grid">
// // // // //         {Array.from({ length: 16 }).map((_, i) => (
// // // // //           <span
// // // // //             key={i}
// // // // //             className="h-1 w-1 rounded-full bg-white"
// // // // //           />
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* =====================================
// // // // //           CONTENT
// // // // //       ====================================== */}
// // // // //       <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">

// // // // //         {/* =====================================
// // // // //             LEFT CONTENT
// // // // //         ====================================== */}
// // // // //         <div className="animate-fade-up text-center lg:text-left">

// // // // //           {/* Creator Badge */}
// // // // //           <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-medium tracking-wide text-white/80 shadow-lg shadow-black/10 backdrop-blur-xl">
// // // // //             <span className="relative flex h-2 w-2">
// // // // //               <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-brand-2" />
// // // // //               <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-2" />
// // // // //             </span>

// // // // //             {hero.badge}

// // // // //             <Sparkles className="h-3.5 w-3.5 text-gold" />
// // // // //           </div>

// // // // //           {/* Main Heading */}
// // // // //           <h1 className="mt-6 font-display text-[2.8rem] font-semibold leading-[1.03] tracking-tight text-white sm:mt-7 sm:text-6xl lg:text-[4.7rem]">
// // // // //             {first}{" "}

// // // // //             <span className="relative inline-block bg-gradient-to-r from-brand-2 via-brand to-gold bg-clip-text italic text-transparent">
// // // // //               {rest}

// // // // //               {/* underline */}
// // // // //               <span className="absolute -bottom-1 left-0 h-[4px] w-full rounded-full bg-gradient-to-r from-brand-2/20 via-brand/40 to-gold/20 blur-[1px]" />
// // // // //             </span>
// // // // //           </h1>

// // // // //           {/* Small creator headline */}
// // // // //           <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-white/35">
// // // // //             Creator • Vlogger • Storyteller
// // // // //           </p>

// // // // //           {/* Tagline */}
// // // // //           <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg lg:mx-0">
// // // // //             {hero.tagline}
// // // // //           </p>

// // // // //           {/* =====================================
// // // // //               CTA BUTTONS
// // // // //           ====================================== */}
// // // // //           <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">

// // // // //             {/* YouTube */}
// // // // //             <a
// // // // //               href={links.youtube}
// // // // //               target="_blank"
// // // // //               rel="noreferrer"
// // // // //               className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-brand to-brand-2 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand/40 hover:brightness-110 sm:w-auto"
// // // // //             >
// // // // //               {/* Shine */}
// // // // //               <span className="pointer-events-none absolute -left-full top-0 h-full w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover:left-[130%]" />

// // // // //               <YoutubeIcon className="relative h-5 w-5 transition-transform duration-300 group-hover:scale-110" />

// // // // //               <span className="relative">
// // // // //                 {hero.youtubeCta}
// // // // //               </span>

// // // // //               <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
// // // // //             </a>

// // // // //             {/* Instagram */}
// // // // //             <a
// // // // //               href={links.instagram}
// // // // //               target="_blank"
// // // // //               rel="noreferrer"
// // // // //               className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 text-sm font-semibold text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-2/50 hover:bg-brand/15 hover:shadow-xl hover:shadow-brand/10 sm:w-auto"
// // // // //             >
// // // // //               <InstagramIcon className="h-5 w-5 text-brand-2 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />

// // // // //               {hero.instagramCta}
// // // // //             </a>
// // // // //           </div>

// // // // //           {/* =====================================
// // // // //               SOCIAL PROOF
// // // // //           ====================================== */}
// // // // //           <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-4 text-sm text-white/60 backdrop-blur lg:justify-start">

// // // // //             <span className="inline-flex items-center gap-1.5">
// // // // //               <BadgeCheck className="h-4 w-4 text-gold" />
// // // // //               Daily vlogs
// // // // //             </span>

// // // // //             <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />

// // // // //             <span className="inline-flex items-center gap-1.5">
// // // // //               <BadgeCheck className="h-4 w-4 text-gold" />
// // // // //               Fun reels
// // // // //             </span>

// // // // //             <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />

// // // // //             <span className="inline-flex items-center gap-1.5">
// // // // //               <BadgeCheck className="h-4 w-4 text-gold" />
// // // // //               Real moments
// // // // //             </span>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* =====================================
// // // // //             RIGHT PHONE / REELS
// // // // //         ====================================== */}
// // // // //         <div
// // // // //           className="relative mx-auto w-full max-w-sm animate-fade-up lg:max-w-none"
// // // // //           style={{ animationDelay: "200ms" }}
// // // // //         >
// // // // //           <div className="relative mx-auto h-[500px] w-[240px] sm:h-[560px] sm:w-[268px]">

// // // // //             {/* Glow behind phone */}
// // // // //             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[70px]" />

// // // // //             {/* Rotated back plate */}
// // // // //             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[220px] -translate-x-1/2 -translate-y-1/2 rotate-6 rounded-[3rem] border border-white/5 bg-gradient-to-b from-brand/10 to-transparent" />

// // // // //             {/* ================= MAIN PHONE ================= */}
// // // // //             <div className="group absolute left-1/2 top-0 h-full w-[224px] -translate-x-1/2 overflow-hidden rounded-[2.6rem] border-[6px] border-white/10 bg-plum shadow-2xl shadow-black/70 transition-all duration-700 hover:-translate-y-2 hover:shadow-brand/20 sm:w-[248px]">

// // // // //               <img
// // // // //                 src="/images/main-photo.jpeg"
// // // // //                 alt="Instagram reels preview"
// // // // //                  loading="eager"
// // // // //                  decoding="async"
// // // // //                  fetchPriority="high"
// // // // //                 className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
// // // // //               />

// // // // //               {/* screen overlay */}
// // // // //               <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />

// // // // //               {/* Phone speaker / island */}
// // // // //               <div className="absolute left-1/2 top-3 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black/75 shadow-lg" />

// // // // //               {/* Story UI */}
// // // // //               <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent p-4 pt-11">

// // // // //                 <div className="flex items-center gap-2.5">

// // // // //                   {/* Avatar */}
// // // // //                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-gold via-brand to-brand-2 p-[2px]">
// // // // //                     <div className="flex h-full w-full items-center justify-center rounded-full bg-ink text-[11px] font-bold text-white">
// // // // //                       {first[0]}
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   <div className="leading-tight">
// // // // //                     <p className="text-[11px] font-semibold text-white">
// // // // //                       {username}
// // // // //                     </p>

// // // // //                     <p className="text-[9px] text-white/65">
// // // // //                       Reels · Original audio
// // // // //                     </p>
// // // // //                   </div>

// // // // //                   <span className="ml-auto text-[10px] font-medium tracking-[2px] text-white/80">
// // // // //                     •••
// // // // //                   </span>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Bottom UI */}
// // // // //               <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pb-5 pt-20">

// // // // //                 <div className="max-w-[150px] space-y-1.5">
// // // // //                   <p className="text-[11px] font-medium leading-snug text-white">
// // // // //                     POV: golden hour hits different ✨
// // // // //                   </p>

// // // // //                   <p className="flex items-center gap-1 text-[10px] text-white/65">
// // // // //                     <span className="font-semibold text-white">
// // // // //                       @{username}
// // // // //                     </span>

// // // // //                     · Just now
// // // // //                   </p>

// // // // //                   <div className="flex items-center gap-1 text-[9px] text-white/55">
// // // // //                     🎵 Original audio
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 {/* Reels actions */}
// // // // //                 <div className="flex flex-col gap-3.5 text-white">

// // // // //                   <span className="flex flex-col items-center gap-0.5">
// // // // //                     <Heart className="h-5 w-5 fill-brand-2 text-brand-2" />
// // // // //                     <span className="text-[9px] font-medium">
// // // // //                       128K
// // // // //                     </span>
// // // // //                   </span>

// // // // //                   <span className="flex flex-col items-center gap-0.5">
// // // // //                     <MessageCircle className="h-5 w-5" />
// // // // //                     <span className="text-[9px] font-medium">
// // // // //                       2.4K
// // // // //                     </span>
// // // // //                   </span>

// // // // //                   <span className="flex flex-col items-center gap-0.5">
// // // // //                     <Send className="h-5 w-5" />
// // // // //                     <span className="text-[9px] font-medium">
// // // // //                       Share
// // // // //                     </span>
// // // // //                   </span>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* phone inner border */}
// // // // //               <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] ring-1 ring-inset ring-white/10" />
// // // // //             </div>

// // // // //             {/* ================= LEFT FLOATING CARD ================= */}
// // // // //             <div className="group absolute -left-16 top-24 hidden w-28 animate-float overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/50 transition-all duration-500 hover:-rotate-3 hover:scale-105 lg:block">

// // // // //               <img
// // // // //                 src="/images/left-photo.PNG"
// // // // //                 alt="Vlogging setup"
// // // // //                  loading="lazy"
// // // // //                  decoding="async"
// // // // //                 className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-110"
// // // // //               />

// // // // //               <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-2 pt-8">
// // // // //                 <Play className="h-3.5 w-3.5 fill-white text-white" />

// // // // //                 <span className="text-[8px] font-semibold uppercase tracking-wider text-white">
// // // // //                   VLOG
// // // // //                 </span>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* ================= RIGHT FLOATING CARD ================= */}
// // // // //             <div className="group absolute -right-14 bottom-16 hidden w-28 animate-float-slow overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/50 transition-all duration-500 hover:rotate-3 hover:scale-105 lg:block">

// // // // //               <img
// // // // //                 src="/images/right-photo.jpeg"
// // // // //                 alt="Lifestyle reel"
// // // // //                  loading="lazy"
// // // // //                  decoding="async"
// // // // //                 className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-110"
// // // // //               />

// // // // //               <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-2 pt-8">

// // // // //                 <Heart className="h-3.5 w-3.5 fill-brand-2 text-brand-2" />

// // // // //                 <span className="text-[8px] font-semibold text-white">
// // // // //                   REELS
// // // // //                 </span>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* ================= FLOATING CHIPS ================= */}

// // // // //             <div className="absolute -right-2 top-8 animate-float rounded-2xl border border-white/10 bg-black/30 px-4 py-2.5 text-xs font-semibold text-white shadow-xl backdrop-blur-xl sm:-right-8">
// // // // //               <span className="mr-1.5">
// // // // //                 🎬
// // // // //               </span>
// // // // //               New vlog out now
// // // // //             </div>

// // // // //             <div
// // // // //               className="absolute -left-2 bottom-10 animate-float-slow rounded-2xl border border-white/10 bg-black/30 px-4 py-2.5 text-xs font-semibold text-white shadow-xl backdrop-blur-xl sm:-left-10"
// // // // //               style={{ animationDelay: "-3s" }}
// // // // //             >
// // // // //               ❤️ 128K+ likes on reels
// // // // //             </div>

// // // // //             {/* Creator chip */}
// // // // //             <div className="absolute -right-5 top-1/2 hidden translate-x-full rounded-2xl border border-white/10 bg-white/[0.07] px-3 py-2 shadow-lg backdrop-blur-xl xl:block">
// // // // //               <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
// // // // //                 Creator
// // // // //               </p>

// // // // //               <p className="mt-0.5 text-xs font-semibold text-white">
// // // // //                 Everyday stories ✦
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* =====================================
// // // // //           SCROLL HINT
// // // // //       ====================================== */}
// // // // //       <div className="relative mt-16 hidden justify-center lg:flex">

// // // // //         <a
// // // // //           href="#about"
// // // // //           aria-label="Scroll to about"
// // // // //           className="group flex flex-col items-center gap-2"
// // // // //         >
// // // // //           <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/25">
// // // // //             Scroll
// // // // //           </span>

// // // // //           <span className="flex h-11 w-11 animate-float items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 backdrop-blur transition-all duration-300 group-hover:border-brand/40 group-hover:bg-brand/10 group-hover:text-white">
// // // // //             <ArrowRight className="h-4 w-4 rotate-90" />
// // // // //           </span>
// // // // //         </a>
// // // // //       </div>
    
// // // // //     </section>
// // // // //   );
// // // // // }
// // // // import {
// // // //   ArrowRight,
// // // //   BadgeCheck,
// // // //   Heart,
// // // //   MessageCircle,
// // // //   Play,
// // // //   Send,
// // // //   Sparkles,
// // // // } from "lucide-react";

// // // // import { InstagramIcon, YoutubeIcon } from "./icons";
// // // // import { useSite } from "../lib/store";

// // // // export default function Hero() {
// // // //   const { data } = useSite();
// // // //   const { hero, links } = data;

// // // //   const words = hero.name.split(" ");
// // // //   const first = words[0];
// // // //   const rest = words.slice(1).join(" ");

// // // //   const username = hero.badge.includes("@")
// // // //     ? hero.badge.split("@")[1]
// // // //     : "kirti_rathore0105";

// // // //   return (
// // // //     <section
// // // //       id="home"
// // // //       className="relative min-h-screen overflow-hidden bg-ink pb-16 pt-24 sm:pb-20 sm:pt-28 lg:flex lg:items-center lg:pb-24 lg:pt-32"
// // // //     >
// // // //       {/* =====================================
// // // //           PREMIUM BACKGROUND
// // // //       ====================================== */}
// // // //       <div className="pointer-events-none absolute inset-0">
// // // //         <div className="absolute -left-36 top-8 h-[26rem] w-[26rem] animate-blob rounded-full bg-brand/20 blur-[120px]" />

// // // //         <div
// // // //           className="absolute -right-28 top-[28%] h-[30rem] w-[30rem] animate-blob rounded-full bg-plum-2/75 blur-[130px]"
// // // //           style={{ animationDelay: "-6s" }}
// // // //         />

// // // //         <div
// // // //           className="absolute bottom-[-5rem] left-[28%] h-80 w-80 animate-blob rounded-full bg-gold/12 blur-[110px]"
// // // //           style={{ animationDelay: "-11s" }}
// // // //         />

// // // //         <div className="absolute left-1/2 top-[46%] h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.045] blur-[140px]" />

// // // //         <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black/10" />
// // // //       </div>

// // // //       {/* Decorative Rings */}
// // // //       <div className="pointer-events-none absolute -right-44 -top-44 h-[36rem] w-[36rem] rounded-full border border-white/[0.045]" />
// // // //       <div className="pointer-events-none absolute -right-24 -top-24 h-[27rem] w-[27rem] rounded-full border border-white/[0.04]" />
// // // //       <div className="pointer-events-none absolute -left-36 bottom-[-4rem] h-[26rem] w-[26rem] rounded-full border border-white/[0.025]" />

// // // //       {/* Subtle dotted decoration */}
// // // //       <div className="pointer-events-none absolute left-[7%] top-[22%] hidden grid-cols-4 gap-3 opacity-[0.16] xl:grid">
// // // //         {Array.from({ length: 16 }).map((_, i) => (
// // // //           <span key={i} className="h-1 w-1 rounded-full bg-white" />
// // // //         ))}
// // // //       </div>

// // // //       {/* =====================================
// // // //           CONTENT
// // // //       ====================================== */}
// // // //       <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 xl:gap-14">
// // // //         {/* =====================================
// // // //             LEFT CONTENT
// // // //         ====================================== */}
// // // //         <div className="animate-fade-up text-center lg:text-left">
// // // //           {/* Creator Badge */}
// // // //           <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.035em] text-white/75 shadow-lg shadow-black/10 backdrop-blur-xl sm:px-4 sm:py-2 sm:text-xs">
// // // //             <span className="relative flex h-2 w-2">
// // // //               <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-brand-2" />
// // // //               <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-2" />
// // // //             </span>

// // // //             {hero.badge}

// // // //             <Sparkles className="h-3.5 w-3.5 text-gold" />
// // // //           </div>

// // // //           {/* Main Heading */}
// // // //           <h1 className="mt-6 font-display text-[3rem] font-semibold leading-[0.98] tracking-[-0.035em] text-white sm:mt-7 sm:text-[4rem] lg:text-[4.85rem] xl:text-[5.05rem]">
// // // //             {first}{" "}
// // // //             <span className="relative inline-block bg-gradient-to-r from-brand-2 via-brand to-gold bg-clip-text italic text-transparent">
// // // //               {rest}

// // // //               <span className="absolute -bottom-2 left-[3%] h-[4px] w-[94%] rounded-full bg-gradient-to-r from-brand-2/25 via-brand/55 to-gold/25 blur-[1px]" />
// // // //             </span>
// // // //           </h1>

// // // //           {/* Small creator headline */}
// // // //           <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
// // // //             <span className="hidden h-px w-8 bg-gradient-to-r from-brand-2 to-transparent sm:block" />
// // // //             <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/38 sm:text-xs">
// // // //               Creator • Vlogger • Storyteller
// // // //             </p>
// // // //           </div>

// // // //           {/* Tagline */}
// // // //           <p className="mx-auto mt-5 max-w-[34rem] text-[15px] leading-[1.8] text-white/72 sm:text-[17px] lg:mx-0 lg:max-w-[33rem]">
// // // //             {hero.tagline}
// // // //           </p>

// // // //           {/* =====================================
// // // //               CTA BUTTONS
// // // //           ====================================== */}
// // // //           <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:mt-9 lg:justify-start">
// // // //             {/* YouTube */}
// // // //             <a
// // // //               href={links.youtube}
// // // //               target="_blank"
// // // //               rel="noreferrer"
// // // //               className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full border border-white/5 bg-gradient-to-r from-red-500 via-brand to-brand-2 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(255,70,120,0.24)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(255,70,120,0.34)] hover:brightness-110 sm:w-auto"
// // // //             >
// // // //               <span className="pointer-events-none absolute -left-full top-0 h-full w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover:left-[130%]" />

// // // //               <YoutubeIcon className="relative h-5 w-5 transition-transform duration-300 group-hover:scale-110" />

// // // //               <span className="relative">{hero.youtubeCta}</span>

// // // //               <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
// // // //             </a>

// // // //             {/* Instagram */}
// // // //             <a
// // // //               href={links.instagram}
// // // //               target="_blank"
// // // //               rel="noreferrer"
// // // //               className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/[0.14] bg-white/[0.055] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-2/45 hover:bg-white/[0.09] hover:shadow-xl hover:shadow-brand/10 sm:w-auto"
// // // //             >
// // // //               <InstagramIcon className="h-5 w-5 text-brand-2 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
// // // //               {hero.instagramCta}
// // // //             </a>
// // // //           </div>

// // // //           {/* =====================================
// // // //               SOCIAL PROOF
// // // //           ====================================== */}
// // // //           <div className="mt-9 inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5 rounded-2xl border border-white/[0.07] bg-white/[0.035] px-4 py-3 text-[13px] font-medium text-white/58 shadow-lg shadow-black/5 backdrop-blur-xl sm:px-5 sm:py-3.5 sm:text-sm lg:justify-start">
// // // //             <span className="inline-flex items-center gap-1.5">
// // // //               <BadgeCheck className="h-4 w-4 text-gold" />
// // // //               Daily vlogs
// // // //             </span>

// // // //             <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

// // // //             <span className="inline-flex items-center gap-1.5">
// // // //               <BadgeCheck className="h-4 w-4 text-gold" />
// // // //               Fun reels
// // // //             </span>

// // // //             <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

// // // //             <span className="inline-flex items-center gap-1.5">
// // // //               <BadgeCheck className="h-4 w-4 text-gold" />
// // // //               Real moments
// // // //             </span>
// // // //           </div>
// // // //         </div>

// // // //         {/* =====================================
// // // //             RIGHT PHONE / REELS
// // // //         ====================================== */}
// // // //         <div
// // // //           className="relative mx-auto w-full max-w-sm animate-fade-up lg:max-w-none"
// // // //           style={{ animationDelay: "200ms" }}
// // // //         >
// // // //           <div className="relative mx-auto h-[510px] w-[250px] sm:h-[575px] sm:w-[282px] lg:h-[590px] lg:w-[290px]">
// // // //             {/* Glow behind phone */}
// // // //             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[455px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/22 blur-[78px] sm:h-[500px] sm:w-[320px]" />

// // // //             {/* Back plate */}
// // // //             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[490px] w-[228px] -translate-x-1/2 -translate-y-1/2 rotate-[5deg] rounded-[3rem] border border-white/[0.055] bg-gradient-to-b from-brand/10 via-plum-2/5 to-transparent sm:h-[545px] sm:w-[252px] lg:h-[560px] lg:w-[258px]" />

// // // //             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[455px] w-[212px] -translate-x-1/2 -translate-y-1/2 -rotate-[4deg] rounded-[2.8rem] border border-white/[0.035] sm:h-[510px] sm:w-[236px] lg:h-[528px] lg:w-[242px]" />

// // // //             {/* ================= MAIN PHONE ================= */}
// // // //             <div className="group absolute left-1/2 top-0 h-full w-[230px] -translate-x-1/2 overflow-hidden rounded-[2.7rem] border-[6px] border-white/[0.12] bg-plum shadow-[0_30px_75px_rgba(0,0,0,0.58)] transition-all duration-700 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_35px_90px_rgba(225,70,130,0.18)] sm:w-[255px] lg:w-[264px]">
// // // //               <img
// // // //                 src="/images/main-photo.jpeg"
// // // //                 alt="Instagram reels preview"
// // // //                 loading="eager"
// // // //                 decoding="async"
// // // //                 fetchPriority="high"
// // // //                 className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.045]"
// // // //               />

// // // //               {/* screen overlay */}
// // // //               <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />

// // // //               {/* Phone speaker / island */}
// // // //               <div className="absolute left-1/2 top-3 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black/80 shadow-lg sm:w-[5.5rem]" />

// // // //               {/* Story UI */}
// // // //               <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/75 via-black/20 to-transparent p-4 pt-11">
// // // //                 <div className="flex items-center gap-2.5">
// // // //                   {/* Avatar */}
// // // //                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-gold via-brand to-brand-2 p-[2px]">
// // // //                     <div className="flex h-full w-full items-center justify-center rounded-full bg-ink text-[11px] font-bold text-white">
// // // //                       {first[0]}
// // // //                     </div>
// // // //                   </div>

// // // //                   <div className="leading-tight">
// // // //                     <p className="text-[11px] font-semibold text-white">
// // // //                       {username}
// // // //                     </p>

// // // //                     <p className="text-[9px] text-white/65">
// // // //                       Reels · Original audio
// // // //                     </p>
// // // //                   </div>

// // // //                   <span className="ml-auto text-[10px] font-medium tracking-[2px] text-white/80">
// // // //                     •••
// // // //                   </span>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Bottom UI */}
// // // //               <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4 pb-5 pt-24">
// // // //                 <div className="max-w-[155px] space-y-1.5">
// // // //                   <p className="text-[11px] font-medium leading-snug text-white">
// // // //                     POV: golden hour hits different ✨
// // // //                   </p>

// // // //                   <p className="flex items-center gap-1 text-[10px] text-white/65">
// // // //                     <span className="font-semibold text-white">
// // // //                       @{username}
// // // //                     </span>
// // // //                     · Just now
// // // //                   </p>

// // // //                   <div className="flex items-center gap-1 text-[9px] text-white/55">
// // // //                     🎵 Original audio
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Reels actions */}
// // // //                 <div className="flex flex-col gap-3.5 text-white">
// // // //                   <span className="flex flex-col items-center gap-0.5">
// // // //                     <Heart className="h-5 w-5 fill-brand-2 text-brand-2" />
// // // //                     <span className="text-[9px] font-medium">128K</span>
// // // //                   </span>

// // // //                   <span className="flex flex-col items-center gap-0.5">
// // // //                     <MessageCircle className="h-5 w-5" />
// // // //                     <span className="text-[9px] font-medium">2.4K</span>
// // // //                   </span>

// // // //                   <span className="flex flex-col items-center gap-0.5">
// // // //                     <Send className="h-5 w-5" />
// // // //                     <span className="text-[9px] font-medium">Share</span>
// // // //                   </span>
// // // //                 </div>
// // // //               </div>

// // // //               {/* phone inner border */}
// // // //               <div className="pointer-events-none absolute inset-0 rounded-[2.3rem] ring-1 ring-inset ring-white/[0.12]" />
// // // //             </div>

// // // //             {/* ================= LEFT FLOATING CARD ================= */}
// // // //             <div className="group absolute -left-12 top-[7rem] hidden w-24 animate-float overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/45 transition-all duration-500 hover:-rotate-3 hover:scale-105 lg:block xl:-left-14 xl:w-28">
// // // //               <img
// // // //                 src="/images/left-photo.PNG"
// // // //                 alt="Vlogging setup"
// // // //                 loading="lazy"
// // // //                 decoding="async"
// // // //                 className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-110"
// // // //               />

// // // //               <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/85 to-transparent p-2 pt-8">
// // // //                 <Play className="h-3.5 w-3.5 fill-white text-white" />
// // // //                 <span className="text-[8px] font-semibold uppercase tracking-wider text-white">
// // // //                   VLOG
// // // //                 </span>
// // // //               </div>
// // // //             </div>

// // // //             {/* ================= RIGHT FLOATING CARD ================= */}
// // // //             <div className="group absolute -right-10 bottom-[5rem] hidden w-24 animate-float-slow overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/45 transition-all duration-500 hover:rotate-3 hover:scale-105 lg:block xl:-right-12 xl:w-28">
// // // //               <img
// // // //                 src="/images/right-photo.jpeg"
// // // //                 alt="Lifestyle reel"
// // // //                 loading="lazy"
// // // //                 decoding="async"
// // // //                 className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-110"
// // // //               />

// // // //               <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/85 to-transparent p-2 pt-8">
// // // //                 <Heart className="h-3.5 w-3.5 fill-brand-2 text-brand-2" />
// // // //                 <span className="text-[8px] font-semibold text-white">
// // // //                   REELS
// // // //                 </span>
// // // //               </div>
// // // //             </div>

// // // //             {/* ================= FLOATING CHIPS ================= */}
// // // //             <div className="absolute -right-3 top-10 animate-float rounded-2xl border border-white/[0.12] bg-black/35 px-3.5 py-2 text-[11px] font-semibold text-white shadow-xl shadow-black/20 backdrop-blur-xl sm:-right-7 sm:px-4 sm:py-2.5 sm:text-xs">
// // // //               <span className="mr-1.5">🎬</span>
// // // //               New vlog out now
// // // //             </div>

// // // //             <div
// // // //               className="absolute -left-3 bottom-8 animate-float-slow rounded-2xl border border-white/[0.12] bg-black/35 px-3.5 py-2 text-[11px] font-semibold text-white shadow-xl shadow-black/20 backdrop-blur-xl sm:-left-7 sm:px-4 sm:py-2.5 sm:text-xs"
// // // //               style={{ animationDelay: "-3s" }}
// // // //             >
// // // //               ❤️ 128K+ likes on reels
// // // //             </div>

// // // //             {/* Creator chip */}
// // // //             <div className="absolute -right-1 top-[47%] hidden translate-x-full rounded-2xl border border-white/10 bg-white/[0.075] px-3 py-2 shadow-xl shadow-black/10 backdrop-blur-xl xl:block">
// // // //               <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
// // // //                 Creator
// // // //               </p>

// // // //               <p className="mt-0.5 text-xs font-semibold text-white">
// // // //                 Everyday stories ✦
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* =====================================
// // // //           SCROLL HINT
// // // //       ====================================== */}
// // // //       <div className="absolute bottom-8 right-8 hidden xl:flex">
// // // //         <a
// // // //           href="#about"
// // // //           aria-label="Scroll to about"
// // // //           className="group flex flex-col items-center gap-2"
// // // //         >
// // // //           <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/25">
// // // //             Scroll
// // // //           </span>

// // // //           <span className="flex h-11 w-11 animate-float items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/50 shadow-lg shadow-black/10 backdrop-blur-xl transition-all duration-300 group-hover:border-brand/40 group-hover:bg-brand/10 group-hover:text-white">
// // // //             <ArrowRight className="h-4 w-4 rotate-90" />
// // // //           </span>
// // // //         </a>
// // // //       </div>

// // // //       {/* Hero to next section transition */}
// // // //       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-cream/[0.035]" />
// // // //     </section>
// // // //   );
// // // // }

// // // import {
// // //   ArrowRight,
// // //   BadgeCheck,
// // //   Heart,
// // //   MessageCircle,
// // //   Play,
// // //   Send,
// // //   Sparkles,
// // // } from "lucide-react";

// // // import { InstagramIcon, YoutubeIcon } from "./icons";
// // // import { useSite } from "../lib/store";

// // // export default function Hero() {
// // //   const { data } = useSite();
// // //   const { hero, links } = data;

// // //   const words = hero.name.split(" ");
// // //   const first = words[0];
// // //   const rest = words.slice(1).join(" ");

// // //   const username = hero.badge.includes("@")
// // //     ? hero.badge.split("@")[1]
// // //     : "kirti_rathore0105";

// // //   return (
// // //     <section
// // //       id="home"
// // //       className="relative min-h-screen overflow-hidden bg-ink pb-14 pt-24 sm:pb-20 sm:pt-28 lg:flex lg:items-center lg:pb-20 lg:pt-28"
// // //     >
// // //       {/* =========================
// // //           DRAMATIC BACKGROUND
// // //       ========================== */}
// // //       <div className="pointer-events-none absolute inset-0">
// // //         <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-[120px]" />
// // //         <div className="absolute -right-20 top-[20%] h-[34rem] w-[34rem] rounded-full bg-plum-2/80 blur-[135px]" />
// // //         <div className="absolute bottom-[-10rem] left-[25%] h-[26rem] w-[26rem] rounded-full bg-gold/12 blur-[120px]" />

// // //         <div className="absolute left-1/2 top-[45%] h-[520px] w-[880px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.045] blur-[150px]" />

// // //         <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black/10" />
// // //       </div>

// // //       {/* Giant ghost text */}
// // //       <div className="pointer-events-none absolute left-1/2 top-[47%] hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[10rem] font-semibold uppercase tracking-[-0.06em] text-white/[0.018] xl:block">
// // //         CREATOR
// // //       </div>

// // //       {/* Decorative rings */}
// // //       <div className="pointer-events-none absolute -right-52 -top-52 h-[42rem] w-[42rem] rounded-full border border-white/[0.045]" />
// // //       <div className="pointer-events-none absolute -right-36 -top-36 h-[34rem] w-[34rem] rounded-full border border-white/[0.035]" />
// // //       <div className="pointer-events-none absolute -left-40 bottom-[-8rem] h-[28rem] w-[28rem] rounded-full border border-white/[0.025]" />

// // //       <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-8 xl:gap-12">
// // //         {/* =========================
// // //             LEFT CONTENT
// // //         ========================== */}
// // //         <div className="animate-fade-up text-center lg:text-left">
// // //           {/* Badge */}
// // //           <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold tracking-[0.06em] text-white/80 shadow-xl shadow-black/10 backdrop-blur-xl sm:text-xs">
// // //             <span className="relative flex h-2 w-2">
// // //               <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-brand-2" />
// // //               <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-2" />
// // //             </span>

// // //             {hero.badge}

// // //             <Sparkles className="h-3.5 w-3.5 text-gold" />
// // //           </div>

// // //           {/* Main heading */}
// // //           <h1 className="mt-6 font-display text-[3.4rem] font-semibold leading-[0.9] tracking-[-0.055em] text-white sm:text-[4.6rem] lg:text-[5.6rem] xl:text-[6.1rem]">
// // //             <span className="block">{first}</span>

// // //             <span className="relative mt-1 inline-block bg-gradient-to-r from-brand-2 via-brand to-gold bg-clip-text italic text-transparent">
// // //               {rest}

// // //               <span className="absolute -bottom-2 left-[4%] h-[5px] w-[92%] rounded-full bg-gradient-to-r from-brand-2/20 via-brand/70 to-gold/20 shadow-[0_0_18px_rgba(255,95,145,0.18)]" />
// // //             </span>
// // //           </h1>

// // //           {/* Role */}
// // //           <div className="mt-7 flex items-center justify-center gap-3 lg:justify-start">
// // //             <span className="hidden h-px w-10 bg-gradient-to-r from-brand-2 to-transparent sm:block" />

// // //             <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 sm:text-xs">
// // //               Creator • Vlogger • Storyteller
// // //             </p>
// // //           </div>

// // //           {/* Tagline */}
// // //           <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.85] text-white/72 sm:text-lg lg:mx-0 lg:max-w-[34rem]">
// // //             {hero.tagline}
// // //           </p>

// // //           {/* CTA */}
// // //           <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
// // //             <a
// // //               href={links.youtube}
// // //               target="_blank"
// // //               rel="noreferrer"
// // //               className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-brand to-brand-2 px-7 py-4 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(255,70,120,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,70,120,0.38)] hover:brightness-110"
// // //             >
// // //               <span className="pointer-events-none absolute -left-full top-0 h-full w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover:left-[130%]" />

// // //               <YoutubeIcon className="relative h-5 w-5" />

// // //               <span className="relative">{hero.youtubeCta}</span>

// // //               <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
// // //             </a>

// // //             <a
// // //               href={links.instagram}
// // //               target="_blank"
// // //               rel="noreferrer"
// // //               className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/[0.14] bg-white/[0.055] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-2/45 hover:bg-white/[0.1]"
// // //             >
// // //               <InstagramIcon className="h-5 w-5 text-brand-2 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
// // //               {hero.instagramCta}
// // //             </a>
// // //           </div>

// // //           {/* Stronger social proof */}
// // //           <div className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-3 lg:max-w-[34rem]">
// // //             {[
// // //               ["Daily", "Vlogs"],
// // //               ["Fun", "Reels"],
// // //               ["Real", "Moments"],
// // //             ].map(([top, bottom]) => (
// // //               <div
// // //                 key={`${top}-${bottom}`}
// // //                 className="rounded-2xl border border-white/[0.075] bg-white/[0.04] px-3 py-3.5 text-center shadow-lg shadow-black/5 backdrop-blur-xl sm:px-4"
// // //               >
// // //                 <BadgeCheck className="mx-auto h-4 w-4 text-gold" />

// // //                 <p className="mt-2 text-sm font-semibold text-white sm:text-[15px]">
// // //                   {top}
// // //                 </p>

// // //                 <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/35 sm:text-[11px]">
// // //                   {bottom}
// // //                 </p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* =========================
// // //             RIGHT SHOWCASE
// // //         ========================== */}
// // //         <div
// // //           className="relative mx-auto w-full max-w-md animate-fade-up lg:max-w-none"
// // //           style={{ animationDelay: "180ms" }}
// // //         >
// // //           <div className="relative mx-auto h-[520px] w-[290px] sm:h-[610px] sm:w-[350px] lg:h-[630px] lg:w-[390px] xl:h-[650px] xl:w-[420px]">
// // //             {/* showcase glow */}
// // //             <div className="pointer-events-none absolute left-1/2 top-[48%] h-[500px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[85px] sm:h-[560px] sm:w-[380px]" />

// // //             {/* back shapes */}
// // //             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[245px] -translate-x-1/2 -translate-y-1/2 rotate-[8deg] rounded-[3.3rem] border border-white/[0.055] bg-gradient-to-b from-brand/12 via-white/[0.025] to-transparent sm:h-[575px] sm:w-[285px] lg:h-[590px] lg:w-[295px]" />

// // //             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[485px] w-[235px] -translate-x-1/2 -translate-y-1/2 -rotate-[6deg] rounded-[3.1rem] border border-white/[0.035] sm:h-[560px] sm:w-[275px] lg:h-[575px] lg:w-[285px]" />

// // //             {/* Main phone */}
// // //             <div className="group absolute left-1/2 top-0 h-full w-[238px] -translate-x-1/2 overflow-hidden rounded-[2.8rem] border-[6px] border-white/[0.13] bg-plum shadow-[0_35px_90px_rgba(0,0,0,0.62)] transition-all duration-700 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_40px_100px_rgba(225,70,130,0.2)] sm:w-[280px] lg:w-[292px] xl:w-[300px]">
// // //               <img
// // //                 src="/images/main-photo.jpeg"
// // //                 alt="Instagram reels preview"
// // //                 loading="eager"
// // //                 decoding="async"
// // //                 fetchPriority="high"
// // //                 className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.045]"
// // //               />

// // //               <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />

// // //               <div className="absolute left-1/2 top-3 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black/80 shadow-lg sm:w-24" />

// // //               {/* Story top */}
// // //               <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/75 via-black/20 to-transparent p-4 pt-11">
// // //                 <div className="flex items-center gap-2.5">
// // //                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-gold via-brand to-brand-2 p-[2px]">
// // //                     <div className="flex h-full w-full items-center justify-center rounded-full bg-ink text-[11px] font-bold text-white">
// // //                       {first[0]}
// // //                     </div>
// // //                   </div>

// // //                   <div className="leading-tight">
// // //                     <p className="text-[11px] font-semibold text-white">
// // //                       {username}
// // //                     </p>

// // //                     <p className="text-[9px] text-white/65">
// // //                       Reels · Original audio
// // //                     </p>
// // //                   </div>

// // //                   <span className="ml-auto text-[10px] font-medium tracking-[2px] text-white/80">
// // //                     •••
// // //                   </span>
// // //                 </div>
// // //               </div>

// // //               {/* bottom content */}
// // //               <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/85 via-black/35 to-transparent p-4 pb-5 pt-24">
// // //                 <div className="max-w-[165px] space-y-1.5">
// // //                   <p className="text-[11px] font-medium leading-snug text-white">
// // //                     POV: golden hour hits different ✨
// // //                   </p>

// // //                   <p className="flex items-center gap-1 text-[10px] text-white/65">
// // //                     <span className="font-semibold text-white">
// // //                       @{username}
// // //                     </span>
// // //                     · Just now
// // //                   </p>

// // //                   <div className="text-[9px] text-white/55">
// // //                     🎵 Original audio
// // //                   </div>
// // //                 </div>

// // //                 <div className="flex flex-col gap-3.5 text-white">
// // //                   <span className="flex flex-col items-center gap-0.5">
// // //                     <Heart className="h-5 w-5 fill-brand-2 text-brand-2" />
// // //                     <span className="text-[9px] font-medium">128K</span>
// // //                   </span>

// // //                   <span className="flex flex-col items-center gap-0.5">
// // //                     <MessageCircle className="h-5 w-5" />
// // //                     <span className="text-[9px] font-medium">2.4K</span>
// // //                   </span>

// // //                   <span className="flex flex-col items-center gap-0.5">
// // //                     <Send className="h-5 w-5" />
// // //                     <span className="text-[9px] font-medium">Share</span>
// // //                   </span>
// // //                 </div>
// // //               </div>

// // //               <div className="pointer-events-none absolute inset-0 rounded-[2.35rem] ring-1 ring-inset ring-white/[0.12]" />
// // //             </div>

// // //             {/* Left mini reel */}
// // //             <div className="group absolute -left-3 top-[8.5rem] hidden w-28 -rotate-6 animate-float overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/50 transition-all duration-500 hover:-rotate-2 hover:scale-105 sm:block lg:-left-5 xl:-left-8 xl:w-32">
// // //               <img
// // //                 src="/images/left-photo.PNG"
// // //                 alt="Vlogging setup"
// // //                 loading="lazy"
// // //                 decoding="async"
// // //                 className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-110"
// // //               />

// // //               <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/85 to-transparent p-2.5 pt-9">
// // //                 <Play className="h-3.5 w-3.5 fill-white text-white" />
// // //                 <span className="text-[8px] font-semibold uppercase tracking-wider text-white">
// // //                   VLOG
// // //                 </span>
// // //               </div>
// // //             </div>

// // //             {/* Right mini reel */}
// // //             <div className="group absolute -right-3 bottom-[5rem] hidden w-28 rotate-6 animate-float-slow overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/50 transition-all duration-500 hover:rotate-2 hover:scale-105 sm:block lg:-right-5 xl:-right-8 xl:w-32">
// // //               <img
// // //                 src="/images/right-photo.jpeg"
// // //                 alt="Lifestyle reel"
// // //                 loading="lazy"
// // //                 decoding="async"
// // //                 className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-110"
// // //               />

// // //               <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/85 to-transparent p-2.5 pt-9">
// // //                 <Heart className="h-3.5 w-3.5 fill-brand-2 text-brand-2" />
// // //                 <span className="text-[8px] font-semibold text-white">
// // //                   REELS
// // //                 </span>
// // //               </div>
// // //             </div>

// // //             {/* Top badge */}
// // //             <div className="absolute right-0 top-8 animate-float rounded-2xl border border-white/[0.12] bg-black/40 px-4 py-2.5 text-xs font-semibold text-white shadow-xl shadow-black/20 backdrop-blur-xl sm:-right-3 lg:-right-6">
// // //               🎬 New vlog out now
// // //             </div>

// // //             {/* Bottom badge */}
// // //             <div
// // //               className="absolute left-0 bottom-7 animate-float-slow rounded-2xl border border-white/[0.12] bg-black/40 px-4 py-2.5 text-xs font-semibold text-white shadow-xl shadow-black/20 backdrop-blur-xl sm:-left-2 lg:-left-6"
// // //               style={{ animationDelay: "-3s" }}
// // //             >
// // //               ❤️ 128K+ reel likes
// // //             </div>

// // //             {/* Side creator pill */}
// // //             <div className="absolute right-0 top-[48%] hidden translate-x-[105%] rounded-2xl border border-white/10 bg-white/[0.075] px-4 py-3 shadow-xl shadow-black/10 backdrop-blur-xl xl:block">
// // //               <p className="text-[9px] uppercase tracking-[0.22em] text-white/35">
// // //                 Creator
// // //               </p>
// // //               <p className="mt-1 text-xs font-semibold text-white">
// // //                 Everyday stories ✦
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Scroll hint */}
// // //       <div className="absolute bottom-8 right-8 hidden xl:flex">
// // //         <a
// // //           href="#about"
// // //           aria-label="Scroll to about"
// // //           className="group flex flex-col items-center gap-2"
// // //         >
// // //           <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/25">
// // //             Scroll
// // //           </span>

// // //           <span className="flex h-11 w-11 animate-float items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/50 backdrop-blur transition-all duration-300 group-hover:border-brand/40 group-hover:bg-brand/10 group-hover:text-white">
// // //             <ArrowRight className="h-4 w-4 rotate-90" />
// // //           </span>
// // //         </a>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // import {
// //   ArrowRight,
// //   BadgeCheck,
// //   Heart,
// //   MessageCircle,
// //   Play,
// //   Send,
// //   Sparkles,
// // } from "lucide-react";

// // import { InstagramIcon, YoutubeIcon } from "./icons";
// // import { useSite } from "../lib/store";

// // export default function Hero() {
// //   const { data } = useSite();
// //   const { hero, links } = data;

// //   const words = hero.name.split(" ");
// //   const first = words[0];
// //   const rest = words.slice(1).join(" ");

// //   const username = hero.badge.includes("@")
// //     ? hero.badge.split("@")[1]
// //     : "kirti_rathore0105";

// //   return (
// //     <section
// //       id="home"
// //       className="relative isolate min-h-screen overflow-hidden bg-ink pb-16 pt-24 sm:pb-20 sm:pt-28 lg:flex lg:items-center lg:pb-20 lg:pt-28"
// //     >
// //       {/* =========================
// //           CINEMATIC BACKGROUND
// //       ========================== */}
// //       <div className="pointer-events-none absolute inset-0 -z-20">
// //         <div className="absolute -left-40 top-[-3rem] h-[30rem] w-[30rem] rounded-full bg-brand/22 blur-[125px]" />
// //         <div className="absolute right-[-10rem] top-[10%] h-[38rem] w-[38rem] rounded-full bg-plum-2/80 blur-[145px]" />
// //         <div className="absolute bottom-[-13rem] left-[28%] h-[31rem] w-[31rem] rounded-full bg-gold/12 blur-[130px]" />
// //         <div className="absolute left-1/2 top-[44%] h-[34rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.045] blur-[150px]" />
// //       </div>

// //       {/* soft grid */}
// //       <div
// //         className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
// //         style={{
// //           backgroundImage:
// //             "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
// //           backgroundSize: "54px 54px",
// //           maskImage:
// //             "linear-gradient(to bottom, black, transparent 78%)",
// //           WebkitMaskImage:
// //             "linear-gradient(to bottom, black, transparent 78%)",
// //         }}
// //       />

// //       {/* huge editorial word */}
// //       <div className="pointer-events-none absolute left-1/2 top-[45%] -z-10 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[12rem] font-semibold uppercase leading-none tracking-[-0.07em] text-white/[0.017] xl:block">
// //         KIRTI
// //       </div>

// //       {/* rings */}
// //       <div className="pointer-events-none absolute -right-52 -top-52 -z-10 h-[42rem] w-[42rem] rounded-full border border-white/[0.045]" />
// //       <div className="pointer-events-none absolute -right-36 -top-36 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/[0.035]" />
// //       <div className="pointer-events-none absolute -left-44 bottom-[-8rem] -z-10 h-[29rem] w-[29rem] rounded-full border border-white/[0.025]" />

// //       {/* =========================
// //           MAIN LAYOUT
// //       ========================== */}
// //       <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 xl:gap-12">
// //         {/* =========================
// //             LEFT
// //         ========================== */}
// //         <div className="animate-fade-up text-center lg:text-left">
// //           {/* eyebrow */}
// //           <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold tracking-[0.07em] text-white/80 shadow-xl shadow-black/10 backdrop-blur-xl sm:text-xs">
// //             <span className="relative flex h-2 w-2">
// //               <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-brand-2" />
// //               <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-2" />
// //             </span>

// //             {hero.badge}

// //             <Sparkles className="h-3.5 w-3.5 text-gold" />
// //           </div>

// //           {/* headline */}
// //           <div className="mt-6">
// //             <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.36em] text-white/35 sm:text-xs">
// //               Creator • Vlogger • Storyteller
// //             </p>

// //             <h1 className="font-display text-[3.6rem] font-semibold leading-[0.86] tracking-[-0.055em] text-white sm:text-[4.8rem] lg:text-[5.7rem] xl:text-[6.25rem]">
// //               <span className="block">{first}</span>

// //               <span className="relative mt-2 inline-block bg-gradient-to-r from-brand-2 via-brand to-gold bg-clip-text italic text-transparent">
// //                 {rest}

// //                 <span className="absolute -bottom-2 left-[3%] h-[5px] w-[94%] rounded-full bg-gradient-to-r from-brand-2/20 via-brand/70 to-gold/20 shadow-[0_0_22px_rgba(255,95,145,0.2)]" />
// //               </span>
// //             </h1>
// //           </div>

// //           {/* tagline */}
// //           <p className="mx-auto mt-7 max-w-xl text-[15px] leading-[1.85] text-white/72 sm:text-lg lg:mx-0 lg:max-w-[34rem]">
// //             {hero.tagline}
// //           </p>

// //           {/* CTAs */}
// //           <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
// //             <a
// //               href={links.youtube}
// //               target="_blank"
// //               rel="noreferrer"
// //               className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-brand to-brand-2 px-7 py-4 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(255,70,120,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(255,70,120,0.4)] hover:brightness-110"
// //             >
// //               <span className="pointer-events-none absolute -left-full top-0 h-full w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover:left-[130%]" />

// //               <YoutubeIcon className="relative h-5 w-5" />
// //               <span className="relative">{hero.youtubeCta}</span>
// //               <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
// //             </a>

// //             <a
// //               href={links.instagram}
// //               target="_blank"
// //               rel="noreferrer"
// //               className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/[0.15] bg-white/[0.055] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-2/45 hover:bg-white/[0.1]"
// //             >
// //               <InstagramIcon className="h-5 w-5 text-brand-2 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
// //               {hero.instagramCta}
// //             </a>
// //           </div>

// //           {/* premium stat row */}
// //           <div className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-3 lg:max-w-[35rem]">
// //             {[
// //               ["Daily", "Vlogs"],
// //               ["Fun", "Reels"],
// //               ["Real", "Moments"],
// //             ].map(([top, bottom]) => (
// //               <div
// //                 key={`${top}-${bottom}`}
// //                 className="group relative overflow-hidden rounded-2xl border border-white/[0.075] bg-white/[0.045] px-3 py-3.5 text-center shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:bg-white/[0.065]"
// //               >
// //                 <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-brand-2/50 to-transparent" />

// //                 <BadgeCheck className="mx-auto h-4 w-4 text-gold" />

// //                 <p className="mt-2 text-sm font-semibold text-white sm:text-[15px]">
// //                   {top}
// //                 </p>

// //                 <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/35 sm:text-[11px]">
// //                   {bottom}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* =========================
// //             RIGHT EDITORIAL SHOWCASE
// //         ========================== */}
// //         <div
// //           className="relative mx-auto w-full max-w-lg animate-fade-up lg:max-w-none"
// //           style={{ animationDelay: "180ms" }}
// //         >
// //           <div className="relative mx-auto h-[540px] w-[300px] sm:h-[640px] sm:w-[390px] lg:h-[650px] lg:w-[430px] xl:h-[680px] xl:w-[470px]">
// //             {/* halo */}
// //             <div className="pointer-events-none absolute left-1/2 top-[48%] h-[510px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[90px] sm:h-[590px] sm:w-[400px]" />

// //             {/* luxury rings */}
// //             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.055] sm:h-[520px] sm:w-[520px]" />
// //             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/10 sm:h-[430px] sm:w-[430px]" />

// //             {/* gold arc */}
// //             <div className="pointer-events-none absolute left-[52%] top-[48%] h-[475px] w-[475px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10 sm:h-[560px] sm:w-[560px]" />

// //             {/* main portrait card */}
// //             <div className="group absolute left-1/2 top-2 h-[510px] w-[238px] -translate-x-1/2 overflow-hidden rounded-[2.8rem] border border-white/[0.13] bg-plum shadow-[0_35px_95px_rgba(0,0,0,0.62)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_45px_110px_rgba(225,70,130,0.22)] sm:h-[600px] sm:w-[290px] lg:h-[615px] lg:w-[300px] xl:h-[645px] xl:w-[310px]">
// //               <img
// //                 src="/images/main-photo.jpeg"
// //                 alt="Kirti Rathore creator portrait"
// //                 loading="eager"
// //                 decoding="async"
// //                 fetchPriority="high"
// //                 className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.045]"
// //               />

// //               <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/55" />

// //               {/* top profile */}
// //               <div className="absolute inset-x-0 top-0 p-4 sm:p-5">
// //                 <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/28 px-3 py-2 shadow-xl backdrop-blur-xl">
// //                   <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-gold via-brand to-brand-2 p-[2px]">
// //                     <div className="flex h-full w-full items-center justify-center rounded-full bg-ink text-[10px] font-bold text-white">
// //                       {first[0]}
// //                     </div>
// //                   </div>

// //                   <div className="leading-tight">
// //                     <p className="text-[10px] font-semibold text-white">
// //                       {username}
// //                     </p>
// //                     <p className="text-[8px] text-white/55">
// //                       creator diary
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* bottom reel-style info */}
// //               <div className="absolute inset-x-0 bottom-0 p-4 pb-5 sm:p-5 sm:pb-6">
// //                 <div className="flex items-end justify-between gap-4">
// //                   <div className="max-w-[165px] sm:max-w-[185px]">
// //                     <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
// //                       <Sparkles className="h-3 w-3 text-gold" />
// //                       Golden Hour
// //                     </div>

// //                     <p className="text-[12px] font-semibold leading-snug text-white sm:text-[13px]">
// //                       Little moments. Big memories. ✨
// //                     </p>

// //                     <p className="mt-1 text-[9px] text-white/55">
// //                       @{username} · just now
// //                     </p>
// //                   </div>

// //                   <div className="flex flex-col gap-3 text-white">
// //                     <span className="flex flex-col items-center gap-0.5">
// //                       <Heart className="h-5 w-5 fill-brand-2 text-brand-2" />
// //                       <span className="text-[8px] font-medium">128K</span>
// //                     </span>

// //                     <span className="flex flex-col items-center gap-0.5">
// //                       <MessageCircle className="h-5 w-5" />
// //                       <span className="text-[8px] font-medium">2.4K</span>
// //                     </span>

// //                     <span className="flex flex-col items-center gap-0.5">
// //                       <Send className="h-5 w-5" />
// //                       <span className="text-[8px] font-medium">Share</span>
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="pointer-events-none absolute inset-0 rounded-[2.8rem] ring-1 ring-inset ring-white/[0.12]" />
// //             </div>

// //             {/* left photo card */}
// //             <div className="group absolute -left-4 top-[7.5rem] hidden w-28 -rotate-[7deg] animate-float overflow-hidden rounded-[1.45rem] border border-white/10 bg-black shadow-[0_20px_55px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-rotate-2 hover:scale-105 sm:block lg:-left-1 xl:-left-7 xl:w-32">
// //               <img
// //                 src="/images/left-photo.PNG"
// //                 alt="Vlog preview"
// //                 loading="lazy"
// //                 decoding="async"
// //                 className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-110"
// //               />

// //               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-2.5 pt-10">
// //                 <div className="flex items-center justify-between">
// //                   <Play className="h-3.5 w-3.5 fill-white text-white" />
// //                   <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white">
// //                     VLOG
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* right photo card */}
// //             <div className="group absolute -right-4 bottom-[5.5rem] hidden w-28 rotate-[7deg] animate-float-slow overflow-hidden rounded-[1.45rem] border border-white/10 bg-black shadow-[0_20px_55px_rgba(0,0,0,0.5)] transition-all duration-500 hover:rotate-2 hover:scale-105 sm:block lg:-right-1 xl:-right-7 xl:w-32">
// //               <img
// //                 src="/images/right-photo.jpeg"
// //                 alt="Reel preview"
// //                 loading="lazy"
// //                 decoding="async"
// //                 className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-110"
// //               />

// //               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-2.5 pt-10">
// //                 <div className="flex items-center justify-between">
// //                   <Heart className="h-3.5 w-3.5 fill-brand-2 text-brand-2" />
// //                   <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white">
// //                     REELS
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>



// //             {/* tiny accent stars */}
// //             <span className="pointer-events-none absolute left-[7%] top-[8%] text-lg text-gold/45">
// //               ✦
// //             </span>
// //             <span className="pointer-events-none absolute right-[8%] bottom-[13%] text-xl text-brand-2/35">
// //               ✦
// //             </span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* bottom premium line */}
// //       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/35 to-transparent" />
// //     </section>
// //   );
// // }
// import {
//   ArrowRight,
//   BadgeCheck,
//   Heart,
//   MessageCircle,
//   Play,
//   Send,
//   Sparkles,
// } from "lucide-react";

// import { InstagramIcon, YoutubeIcon } from "./icons";
// import { useSite } from "../lib/store";

// export default function Hero() {
//   const { data } = useSite();
//   const { hero, links } = data;

//   const words = hero.name.split(" ");
//   const first = words[0];
//   const rest = words.slice(1).join(" ");

//   const username = hero.badge.includes("@")
//     ? hero.badge.split("@")[1]
//     : "kirti_rathore0105";

//   return (
//     <section
//       id="home"
//       className="relative isolate min-h-screen overflow-hidden bg-ink pb-16 pt-24 sm:pb-20 sm:pt-28 lg:flex lg:items-center lg:pb-20 lg:pt-28"
//     >
//       {/* =========================
//           CINEMATIC BACKGROUND
//       ========================== */}
//       <div className="pointer-events-none absolute inset-0 -z-20">
//         <div className="absolute -left-40 top-[-3rem] h-[30rem] w-[30rem] rounded-full bg-brand/22 blur-[125px]" />
//         <div className="absolute right-[-10rem] top-[10%] h-[38rem] w-[38rem] rounded-full bg-plum-2/80 blur-[145px]" />
//         <div className="absolute bottom-[-13rem] left-[28%] h-[31rem] w-[31rem] rounded-full bg-gold/12 blur-[130px]" />
//         <div className="absolute left-1/2 top-[44%] h-[34rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.045] blur-[150px]" />
//       </div>

//       {/* soft grid */}
//       <div
//         className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
//           backgroundSize: "54px 54px",
//           maskImage:
//             "linear-gradient(to bottom, black, transparent 78%)",
//           WebkitMaskImage:
//             "linear-gradient(to bottom, black, transparent 78%)",
//         }}
//       />

//       {/* huge editorial word */}
//       <div className="pointer-events-none absolute left-1/2 top-[45%] -z-10 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[12rem] font-semibold uppercase leading-none tracking-[-0.07em] text-white/[0.017] xl:block">
//         KIRTI
//       </div>

//       {/* rings */}
//       <div className="pointer-events-none absolute -right-52 -top-52 -z-10 h-[42rem] w-[42rem] rounded-full border border-white/[0.045]" />
//       <div className="pointer-events-none absolute -right-36 -top-36 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/[0.035]" />
//       <div className="pointer-events-none absolute -left-44 bottom-[-8rem] -z-10 h-[29rem] w-[29rem] rounded-full border border-white/[0.025]" />

//       {/* =========================
//           MAIN LAYOUT
//       ========================== */}
//       <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 xl:gap-12">
//         {/* =========================
//             LEFT
//         ========================== */}
//         <div className="animate-fade-up text-center lg:text-left">
//           {/* eyebrow */}
//           <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold tracking-[0.07em] text-white/80 shadow-xl shadow-black/10 backdrop-blur-xl sm:text-xs">
//             <span className="relative flex h-2 w-2">
//               <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-brand-2" />
//               <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-2" />
//             </span>

//             {hero.badge}

//             <Sparkles className="h-3.5 w-3.5 text-gold" />
//           </div>

//           {/* headline */}
//           <div className="mt-6">
//             <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.36em] text-white/35 sm:text-xs">
//               Creator • Vlogger • Storyteller
//             </p>

//             <h1 className="font-display text-[3.6rem] font-semibold leading-[0.86] tracking-[-0.055em] text-white sm:text-[4.8rem] lg:text-[5.7rem] xl:text-[6.25rem]">
//               <span className="block">{first}</span>

//               <span className="relative mt-2 inline-block bg-gradient-to-r from-brand-2 via-brand to-gold bg-clip-text italic text-transparent">
//                 {rest}

//                 <span className="absolute -bottom-2 left-[3%] h-[5px] w-[94%] rounded-full bg-gradient-to-r from-brand-2/20 via-brand/70 to-gold/20 shadow-[0_0_22px_rgba(255,95,145,0.2)]" />
//               </span>
//             </h1>
//           </div>

//           {/* tagline */}
//           <p className="mx-auto mt-7 max-w-xl text-[15px] leading-[1.85] text-white/72 sm:text-lg lg:mx-0 lg:max-w-[34rem]">
//             {hero.tagline}
//           </p>

//           {/* CTAs */}
//           <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
//             <a
//               href={links.youtube}
//               target="_blank"
//               rel="noreferrer"
//               className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-brand to-brand-2 px-7 py-4 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(255,70,120,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(255,70,120,0.4)] hover:brightness-110"
//             >
//               <span className="pointer-events-none absolute -left-full top-0 h-full w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover:left-[130%]" />

//               <YoutubeIcon className="relative h-5 w-5" />
//               <span className="relative">{hero.youtubeCta}</span>
//               <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </a>

//             <a
//               href={links.instagram}
//               target="_blank"
//               rel="noreferrer"
//               className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/[0.15] bg-white/[0.055] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-2/45 hover:bg-white/[0.1]"
//             >
//               <InstagramIcon className="h-5 w-5 text-brand-2 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
//               {hero.instagramCta}
//             </a>
//           </div>

//           {/* premium stat row */}
//           <div className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-3 lg:max-w-[35rem]">
//             {[
//               ["Daily", "Vlogs"],
//               ["Fun", "Reels"],
//               ["Real", "Moments"],
//             ].map(([top, bottom]) => (
//               <div
//                 key={`${top}-${bottom}`}
//                 className="group relative overflow-hidden rounded-2xl border border-white/[0.075] bg-white/[0.045] px-3 py-3.5 text-center shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:bg-white/[0.065]"
//               >
//                 <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-brand-2/50 to-transparent" />

//                 <BadgeCheck className="mx-auto h-4 w-4 text-gold" />

//                 <p className="mt-2 text-sm font-semibold text-white sm:text-[15px]">
//                   {top}
//                 </p>

//                 <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/35 sm:text-[11px]">
//                   {bottom}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* =========================
//             RIGHT EDITORIAL SHOWCASE
//         ========================== */}
//         <div
//           className="relative mx-auto w-full max-w-lg animate-fade-up lg:max-w-none"
//           style={{ animationDelay: "180ms" }}
//         >
//           <div className="relative mx-auto h-[540px] w-[300px] sm:h-[640px] sm:w-[390px] lg:h-[650px] lg:w-[430px] xl:h-[680px] xl:w-[470px]">
//             {/* halo */}
//             <div className="pointer-events-none absolute left-1/2 top-[48%] h-[510px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[90px] sm:h-[590px] sm:w-[400px]" />

//             {/* luxury rings */}
//             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.055] sm:h-[520px] sm:w-[520px]" />
//             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/10 sm:h-[430px] sm:w-[430px]" />

//             {/* gold arc */}
//             <div className="pointer-events-none absolute left-[52%] top-[48%] h-[475px] w-[475px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10 sm:h-[560px] sm:w-[560px]" />

//             {/* main portrait card */}
//             <div className="group absolute left-1/2 top-2 h-[510px] w-[238px] -translate-x-1/2 overflow-hidden rounded-[2.8rem] border border-white/[0.13] bg-plum shadow-[0_35px_95px_rgba(0,0,0,0.62)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_45px_110px_rgba(225,70,130,0.22)] sm:h-[600px] sm:w-[290px] lg:h-[615px] lg:w-[300px] xl:h-[645px] xl:w-[310px]">
//               <img
//                 src={hero.images.main}
//                 alt="Kirti Rathore creator portrait"
//                 loading="eager"
//                 decoding="async"
//                 fetchPriority="high"
//                 className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.045]"
//               />

//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/55" />

//               {/* top profile */}
//               <div className="absolute inset-x-0 top-0 p-4 sm:p-5">
//                 <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/28 px-3 py-2 shadow-xl backdrop-blur-xl">
//                   <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-gold via-brand to-brand-2 p-[2px]">
//                     <div className="flex h-full w-full items-center justify-center rounded-full bg-ink text-[10px] font-bold text-white">
//                       {first[0]}
//                     </div>
//                   </div>

//                   <div className="leading-tight">
//                     <p className="text-[10px] font-semibold text-white">
//                       {username}
//                     </p>
//                     <p className="text-[8px] text-white/55">
//                       creator diary
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* bottom reel-style info */}
//               <div className="absolute inset-x-0 bottom-0 p-4 pb-5 sm:p-5 sm:pb-6">
//                 <div className="flex items-end justify-between gap-4">
//                   <div className="max-w-[165px] sm:max-w-[185px]">
//                     <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
//                       <Sparkles className="h-3 w-3 text-gold" />
//                       Golden Hour
//                     </div>

//                     <p className="text-[12px] font-semibold leading-snug text-white sm:text-[13px]">
//                       Little moments. Big memories. ✨
//                     </p>

//                     <p className="mt-1 text-[9px] text-white/55">
//                       @{username} · just now
//                     </p>
//                   </div>

//                   <div className="flex flex-col gap-3 text-white">
//                     <span className="flex flex-col items-center gap-0.5">
//                       <Heart className="h-5 w-5 fill-brand-2 text-brand-2" />
//                       <span className="text-[8px] font-medium">128K</span>
//                     </span>

//                     <span className="flex flex-col items-center gap-0.5">
//                       <MessageCircle className="h-5 w-5" />
//                       <span className="text-[8px] font-medium">2.4K</span>
//                     </span>

//                     <span className="flex flex-col items-center gap-0.5">
//                       <Send className="h-5 w-5" />
//                       <span className="text-[8px] font-medium">Share</span>
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="pointer-events-none absolute inset-0 rounded-[2.8rem] ring-1 ring-inset ring-white/[0.12]" />
//             </div>

//             {/* left photo card */}
//             <div className="group absolute -left-4 top-[7.5rem] hidden w-28 -rotate-[7deg] animate-float overflow-hidden rounded-[1.45rem] border border-white/10 bg-black shadow-[0_20px_55px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-rotate-2 hover:scale-105 sm:block lg:-left-1 xl:-left-7 xl:w-32">
//               <img
//                 src={hero.images.left}
//                 alt="Vlog preview"
//                 loading="lazy"
//                 decoding="async"
//                 className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-2.5 pt-10">
//                 <div className="flex items-center justify-between">
//                   <Play className="h-3.5 w-3.5 fill-white text-white" />
//                   <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white">
//                     VLOG
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* right photo card */}
//             <div className="group absolute -right-4 bottom-[5.5rem] hidden w-28 rotate-[7deg] animate-float-slow overflow-hidden rounded-[1.45rem] border border-white/10 bg-black shadow-[0_20px_55px_rgba(0,0,0,0.5)] transition-all duration-500 hover:rotate-2 hover:scale-105 sm:block lg:-right-1 xl:-right-7 xl:w-32">
//               <img
//                 src={hero.images.right}
//                 alt="Reel preview"
//                 loading="lazy"
//                 decoding="async"
//                 className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-2.5 pt-10">
//                 <div className="flex items-center justify-between">
//                   <Heart className="h-3.5 w-3.5 fill-brand-2 text-brand-2" />
//                   <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white">
//                     REELS
//                   </span>
//                 </div>
//               </div>
//             </div>



//             {/* tiny accent stars */}
//             <span className="pointer-events-none absolute left-[7%] top-[8%] text-lg text-gold/45">
//               ✦
//             </span>
//             <span className="pointer-events-none absolute right-[8%] bottom-[13%] text-xl text-brand-2/35">
//               ✦
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* bottom premium line */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/35 to-transparent" />
//     </section>
//   );
// }
// import {
//   ArrowRight,
//   BadgeCheck,
//   Heart,
//   MessageCircle,
//   Play,
//   Send,
//   Sparkles,
// } from "lucide-react";

// import { InstagramIcon, YoutubeIcon } from "./icons";
// import { useSite } from "../lib/store";

// export default function Hero() {
//   const { data } = useSite();
//   const { hero, links } = data;

//   const words = hero.name.split(" ");
//   const first = words[0];
//   const rest = words.slice(1).join(" ");

//   const username = hero.badge.includes("@")
//     ? hero.badge.split("@")[1]
//     : "kirti_rathore0105";

//   return (
//     <section
//       id="home"
//       className="relative isolate min-h-screen overflow-hidden bg-ink pb-16 pt-24 sm:pb-20 sm:pt-28 lg:flex lg:items-center lg:pb-20 lg:pt-28"
//     >
//       {/* =========================
//           CINEMATIC BACKGROUND
//       ========================== */}
//       <div className="pointer-events-none absolute inset-0 -z-20">
//         <div className="absolute -left-40 top-[-3rem] h-[30rem] w-[30rem] rounded-full bg-brand/22 blur-[125px]" />
//         <div className="absolute right-[-10rem] top-[10%] h-[38rem] w-[38rem] rounded-full bg-plum-2/80 blur-[145px]" />
//         <div className="absolute bottom-[-13rem] left-[28%] h-[31rem] w-[31rem] rounded-full bg-gold/12 blur-[130px]" />
//         <div className="absolute left-1/2 top-[44%] h-[34rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.045] blur-[150px]" />
//       </div>

//       {/* soft grid */}
//       <div
//         className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
//           backgroundSize: "54px 54px",
//           maskImage:
//             "linear-gradient(to bottom, black, transparent 78%)",
//           WebkitMaskImage:
//             "linear-gradient(to bottom, black, transparent 78%)",
//         }}
//       />

//       {/* huge editorial word */}
//       <div className="pointer-events-none absolute left-1/2 top-[45%] -z-10 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[12rem] font-semibold uppercase leading-none tracking-[-0.07em] text-white/[0.017] xl:block">
//         KIRTI
//       </div>

//       {/* rings */}
//       <div className="pointer-events-none absolute -right-52 -top-52 -z-10 h-[42rem] w-[42rem] rounded-full border border-white/[0.045]" />
//       <div className="pointer-events-none absolute -right-36 -top-36 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/[0.035]" />
//       <div className="pointer-events-none absolute -left-44 bottom-[-8rem] -z-10 h-[29rem] w-[29rem] rounded-full border border-white/[0.025]" />

//       {/* =========================
//           MAIN LAYOUT
//       ========================== */}
//       <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 xl:gap-12">
//         {/* =========================
//             LEFT
//         ========================== */}
//         <div className="animate-fade-up text-center lg:text-left">
//           {/* eyebrow */}
//           <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold tracking-[0.07em] text-white/80 shadow-xl shadow-black/10 backdrop-blur-xl sm:text-xs">
//             <span className="relative flex h-2 w-2">
//               <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-brand-2" />
//               <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-2" />
//             </span>

//             {hero.badge}

//             <Sparkles className="h-3.5 w-3.5 text-gold" />
//           </div>

//           {/* headline */}
//           <div className="mt-6">
//             <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.36em] text-white/35 sm:text-xs">
//               Creator • Vlogger • Storyteller
//             </p>

//             <h1 className="font-display text-[3.6rem] font-semibold leading-[0.86] tracking-[-0.055em] text-white sm:text-[4.8rem] lg:text-[5.7rem] xl:text-[6.25rem]">
//               <span className="block">{first}</span>

//               <span className="relative mt-2 inline-block bg-gradient-to-r from-brand-2 via-brand to-gold bg-clip-text italic text-transparent">
//                 {rest}

//                 <span className="absolute -bottom-2 left-[3%] h-[5px] w-[94%] rounded-full bg-gradient-to-r from-brand-2/20 via-brand/70 to-gold/20 shadow-[0_0_22px_rgba(255,95,145,0.2)]" />
//               </span>
//             </h1>
//           </div>

//           {/* tagline */}
//           <p className="mx-auto mt-7 max-w-xl text-[15px] leading-[1.85] text-white/72 sm:text-lg lg:mx-0 lg:max-w-[34rem]">
//             {hero.tagline}
//           </p>

//           {/* CTAs */}
//           <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
//             <a
//               href={links.youtube}
//               target="_blank"
//               rel="noreferrer"
//               className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-brand to-brand-2 px-7 py-4 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(255,70,120,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(255,70,120,0.4)] hover:brightness-110"
//             >
//               <span className="pointer-events-none absolute -left-full top-0 h-full w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover:left-[130%]" />

//               <YoutubeIcon className="relative h-5 w-5" />
//               <span className="relative">{hero.youtubeCta}</span>
//               <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </a>

//             <a
//               href={links.instagram}
//               target="_blank"
//               rel="noreferrer"
//               className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/[0.15] bg-white/[0.055] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-2/45 hover:bg-white/[0.1]"
//             >
//               <InstagramIcon className="h-5 w-5 text-brand-2 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
//               {hero.instagramCta}
//             </a>
//           </div>

//           {/* premium stat row */}
//           <div className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-3 lg:max-w-[35rem]">
//             {[
//               ["Daily", "Vlogs"],
//               ["Fun", "Reels"],
//               ["Real", "Moments"],
//             ].map(([top, bottom]) => (
//               <div
//                 key={`${top}-${bottom}`}
//                 className="group relative overflow-hidden rounded-2xl border border-white/[0.075] bg-white/[0.045] px-3 py-3.5 text-center shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:bg-white/[0.065]"
//               >
//                 <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-brand-2/50 to-transparent" />

//                 <BadgeCheck className="mx-auto h-4 w-4 text-gold" />

//                 <p className="mt-2 text-sm font-semibold text-white sm:text-[15px]">
//                   {top}
//                 </p>

//                 <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/35 sm:text-[11px]">
//                   {bottom}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* =========================
//             RIGHT EDITORIAL SHOWCASE
//         ========================== */}
//         <div
//           className="relative mx-auto w-full max-w-lg animate-fade-up lg:max-w-none"
//           style={{ animationDelay: "180ms" }}
//         >
//           <div className="relative mx-auto h-[540px] w-[300px] sm:h-[640px] sm:w-[390px] lg:h-[650px] lg:w-[430px] xl:h-[680px] xl:w-[470px]">
//             {/* halo */}
//             <div className="pointer-events-none absolute left-1/2 top-[48%] h-[510px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[90px] sm:h-[590px] sm:w-[400px]" />

//             {/* luxury rings */}
//             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.055] sm:h-[520px] sm:w-[520px]" />
//             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/10 sm:h-[430px] sm:w-[430px]" />

//             {/* gold arc */}
//             <div className="pointer-events-none absolute left-[52%] top-[48%] h-[475px] w-[475px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10 sm:h-[560px] sm:w-[560px]" />

//             {/* main portrait card */}
//             <div className="group absolute left-1/2 top-2 h-[510px] w-[238px] -translate-x-1/2 overflow-hidden rounded-[2.8rem] border border-white/[0.13] bg-plum shadow-[0_35px_95px_rgba(0,0,0,0.62)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_45px_110px_rgba(225,70,130,0.22)] sm:h-[600px] sm:w-[290px] lg:h-[615px] lg:w-[300px] xl:h-[645px] xl:w-[310px]">
//               <img
//                 src={hero.images.main}
//                 alt="Kirti Rathore creator portrait"
//                 loading="eager"
//                 decoding="async"
//                 fetchPriority="high"
//                 className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.045]"
//               />

//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/55" />

//               {/* top profile */}
//               <div className="absolute inset-x-0 top-0 p-4 sm:p-5">
//                 <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/28 px-3 py-2 shadow-xl backdrop-blur-xl">
//                   <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-gold via-brand to-brand-2 p-[2px]">
//                     <img
//                       src={`https://unavatar.io/instagram/${username}`}
//                       alt={`${username} Instagram profile`}
//                       loading="eager"
//                       className="h-full w-full rounded-full object-cover"
//                       onError={(e) => {
//                         e.currentTarget.onerror = null;
//                         e.currentTarget.src = hero.images.main;
//                       }}
//                     />
//                   </div>

//                   <div className="leading-tight">
//                     <p className="text-[10px] font-semibold text-white">
//                       {username}
//                     </p>
//                     <p className="text-[8px] text-white/55">
//                       creator diary
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* bottom reel-style info */}
//               <div className="absolute inset-x-0 bottom-0 p-4 pb-5 sm:p-5 sm:pb-6">
//                 <div className="flex items-end justify-between gap-4">
//                   <div className="max-w-[165px] sm:max-w-[185px]">
//                     <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
//                       <Sparkles className="h-3 w-3 text-gold" />
//                       Golden Hour
//                     </div>

//                     <p className="text-[12px] font-semibold leading-snug text-white sm:text-[13px]">
//                       Little moments. Big memories. ✨
//                     </p>

//                     <p className="mt-1 text-[9px] text-white/55">
//                       @{username} · just now
//                     </p>
//                   </div>

//                   <div className="flex flex-col gap-3 text-white">
//                     <span className="flex flex-col items-center gap-0.5">
//                       <Heart className="h-5 w-5 fill-brand-2 text-brand-2" />
//                       <span className="text-[8px] font-medium">128K</span>
//                     </span>

//                     <span className="flex flex-col items-center gap-0.5">
//                       <MessageCircle className="h-5 w-5" />
//                       <span className="text-[8px] font-medium">2.4K</span>
//                     </span>

//                     <span className="flex flex-col items-center gap-0.5">
//                       <Send className="h-5 w-5" />
//                       <span className="text-[8px] font-medium">Share</span>
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="pointer-events-none absolute inset-0 rounded-[2.8rem] ring-1 ring-inset ring-white/[0.12]" />
//             </div>

//             {/* left photo card */}
//             <div className="group absolute -left-4 top-[7.5rem] hidden w-28 -rotate-[7deg] animate-float overflow-hidden rounded-[1.45rem] border border-white/10 bg-black shadow-[0_20px_55px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-rotate-2 hover:scale-105 sm:block lg:-left-1 xl:-left-7 xl:w-32">
//               <img
//                 src={hero.images.left}
//                 alt="Vlog preview"
//                 loading="lazy"
//                 decoding="async"
//                 className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-2.5 pt-10">
//                 <div className="flex items-center justify-between">
//                   <Play className="h-3.5 w-3.5 fill-white text-white" />
//                   <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white">
//                     VLOG
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* right photo card */}
//             <div className="group absolute -right-4 bottom-[5.5rem] hidden w-28 rotate-[7deg] animate-float-slow overflow-hidden rounded-[1.45rem] border border-white/10 bg-black shadow-[0_20px_55px_rgba(0,0,0,0.5)] transition-all duration-500 hover:rotate-2 hover:scale-105 sm:block lg:-right-1 xl:-right-7 xl:w-32">
//               <img
//                 src={hero.images.right}
//                 alt="Reel preview"
//                 loading="lazy"
//                 decoding="async"
//                 className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-2.5 pt-10">
//                 <div className="flex items-center justify-between">
//                   <Heart className="h-3.5 w-3.5 fill-brand-2 text-brand-2" />
//                   <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white">
//                     REELS
//                   </span>
//                 </div>
//               </div>
//             </div>



//             {/* tiny accent stars */}
//             <span className="pointer-events-none absolute left-[7%] top-[8%] text-lg text-gold/45">
//               ✦
//             </span>
//             <span className="pointer-events-none absolute right-[8%] bottom-[13%] text-xl text-brand-2/35">
//               ✦
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* bottom premium line */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/35 to-transparent" />
//     </section>
//   );
// }
// import { useEffect, useState } from "react";

// import {
//   ArrowRight,
//   BadgeCheck,
//   Heart,
//   MessageCircle,
//   Play,
//   Send,
//   Sparkles,
// } from "lucide-react";

// import { InstagramIcon, YoutubeIcon } from "./icons";
// import { useSite } from "../lib/store";

// export default function Hero() {
//   const { data } = useSite();
//   const { hero, links } = data;

//   const words = hero.name.split(" ");
//   const first = words[0];
//   const rest = words.slice(1).join(" ");

//   const username = hero.badge.includes("@")
//     ? hero.badge.split("@")[1]
//     : "kirti_rathore0105";

//   const [instagramDp, setInstagramDp] = useState("");

//   useEffect(() => {
//     let active = true;

//     const apiBase = (
//       import.meta.env.VITE_API_URL || "http://localhost:4000"
//     ).replace(/\/$/, "");

//     const loadInstagramDp = async () => {
//       try {
//         const response = await fetch(
//           `${apiBase}/api/instagram-profile?username=${encodeURIComponent(
//             username
//           )}`,
//           {
//             cache: "no-store",
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Instagram profile request failed");
//         }

//         const result = await response.json();

//         if (
//           active &&
//           result?.ok &&
//           typeof result.profilePicture === "string" &&
//           result.profilePicture
//         ) {
//           setInstagramDp(result.profilePicture);
//         }
//       } catch (error) {
//         console.error("Instagram DP fetch failed:", error);

//         if (active) {
//           setInstagramDp("");
//         }
//       }
//     };

//     loadInstagramDp();

//     const refreshTimer = window.setInterval(
//       loadInstagramDp,
//       30 * 60 * 1000
//     );

//     return () => {
//       active = false;
//       window.clearInterval(refreshTimer);
//     };
//   }, [username]);

//   return (
//     <section
//       id="home"
//       className="relative isolate min-h-screen overflow-hidden bg-ink pb-16 pt-24 sm:pb-20 sm:pt-28 lg:flex lg:items-center lg:pb-20 lg:pt-28"
//     >
//       {/* =========================
//           CINEMATIC BACKGROUND
//       ========================== */}
//       <div className="pointer-events-none absolute inset-0 -z-20">
//         <div className="absolute -left-40 top-[-3rem] h-[30rem] w-[30rem] rounded-full bg-brand/22 blur-[125px]" />
//         <div className="absolute right-[-10rem] top-[10%] h-[38rem] w-[38rem] rounded-full bg-plum-2/80 blur-[145px]" />
//         <div className="absolute bottom-[-13rem] left-[28%] h-[31rem] w-[31rem] rounded-full bg-gold/12 blur-[130px]" />
//         <div className="absolute left-1/2 top-[44%] h-[34rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.045] blur-[150px]" />
//       </div>

//       {/* soft grid */}
//       <div
//         className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
//           backgroundSize: "54px 54px",
//           maskImage:
//             "linear-gradient(to bottom, black, transparent 78%)",
//           WebkitMaskImage:
//             "linear-gradient(to bottom, black, transparent 78%)",
//         }}
//       />

//       {/* huge editorial word */}
//       <div className="pointer-events-none absolute left-1/2 top-[45%] -z-10 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[12rem] font-semibold uppercase leading-none tracking-[-0.07em] text-white/[0.017] xl:block">
//         KIRTI
//       </div>

//       {/* rings */}
//       <div className="pointer-events-none absolute -right-52 -top-52 -z-10 h-[42rem] w-[42rem] rounded-full border border-white/[0.045]" />
//       <div className="pointer-events-none absolute -right-36 -top-36 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/[0.035]" />
//       <div className="pointer-events-none absolute -left-44 bottom-[-8rem] -z-10 h-[29rem] w-[29rem] rounded-full border border-white/[0.025]" />

//       {/* =========================
//           MAIN LAYOUT
//       ========================== */}
//       <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 xl:gap-12">
//         {/* =========================
//             LEFT
//         ========================== */}
//         <div className="animate-fade-up text-center lg:text-left">
//           {/* eyebrow */}
//           <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold tracking-[0.07em] text-white/80 shadow-xl shadow-black/10 backdrop-blur-xl sm:text-xs">
//             <span className="relative flex h-2 w-2">
//               <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-brand-2" />
//               <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-2" />
//             </span>

//             {hero.badge}

//             <Sparkles className="h-3.5 w-3.5 text-gold" />
//           </div>

//           {/* headline */}
//           <div className="mt-6">
//             <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.36em] text-white/35 sm:text-xs">
//               Creator • Vlogger • Storyteller
//             </p>

//             <h1 className="font-display text-[3.6rem] font-semibold leading-[0.86] tracking-[-0.055em] text-white sm:text-[4.8rem] lg:text-[5.7rem] xl:text-[6.25rem]">
//               <span className="block">{first}</span>

//               <span className="relative mt-2 inline-block bg-gradient-to-r from-brand-2 via-brand to-gold bg-clip-text italic text-transparent">
//                 {rest}

//                 <span className="absolute -bottom-2 left-[3%] h-[5px] w-[94%] rounded-full bg-gradient-to-r from-brand-2/20 via-brand/70 to-gold/20 shadow-[0_0_22px_rgba(255,95,145,0.2)]" />
//               </span>
//             </h1>
//           </div>

//           {/* tagline */}
//           <p className="mx-auto mt-7 max-w-xl text-[15px] leading-[1.85] text-white/72 sm:text-lg lg:mx-0 lg:max-w-[34rem]">
//             {hero.tagline}
//           </p>

//           {/* CTAs */}
//           <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
//             <a
//               href={links.youtube}
//               target="_blank"
//               rel="noreferrer"
//               className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-brand to-brand-2 px-7 py-4 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(255,70,120,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(255,70,120,0.4)] hover:brightness-110"
//             >
//               <span className="pointer-events-none absolute -left-full top-0 h-full w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover:left-[130%]" />

//               <YoutubeIcon className="relative h-5 w-5" />
//               <span className="relative">{hero.youtubeCta}</span>
//               <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </a>

//             <a
//               href={links.instagram}
//               target="_blank"
//               rel="noreferrer"
//               className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/[0.15] bg-white/[0.055] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-2/45 hover:bg-white/[0.1]"
//             >
//               <InstagramIcon className="h-5 w-5 text-brand-2 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
//               {hero.instagramCta}
//             </a>
//           </div>

//           {/* premium stat row */}
//           <div className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-3 lg:max-w-[35rem]">
//             {[
//               ["Daily", "Vlogs"],
//               ["Fun", "Reels"],
//               ["Real", "Moments"],
//             ].map(([top, bottom]) => (
//               <div
//                 key={`${top}-${bottom}`}
//                 className="group relative overflow-hidden rounded-2xl border border-white/[0.075] bg-white/[0.045] px-3 py-3.5 text-center shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:bg-white/[0.065]"
//               >
//                 <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-brand-2/50 to-transparent" />

//                 <BadgeCheck className="mx-auto h-4 w-4 text-gold" />

//                 <p className="mt-2 text-sm font-semibold text-white sm:text-[15px]">
//                   {top}
//                 </p>

//                 <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/35 sm:text-[11px]">
//                   {bottom}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* =========================
//             RIGHT EDITORIAL SHOWCASE
//         ========================== */}
//         <div
//           className="relative mx-auto w-full max-w-lg animate-fade-up lg:max-w-none"
//           style={{ animationDelay: "180ms" }}
//         >
//           <div className="relative mx-auto h-[540px] w-[300px] sm:h-[640px] sm:w-[390px] lg:h-[650px] lg:w-[430px] xl:h-[680px] xl:w-[470px]">
//             {/* halo */}
//             <div className="pointer-events-none absolute left-1/2 top-[48%] h-[510px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[90px] sm:h-[590px] sm:w-[400px]" />

//             {/* luxury rings */}
//             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.055] sm:h-[520px] sm:w-[520px]" />
//             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/10 sm:h-[430px] sm:w-[430px]" />

//             {/* gold arc */}
//             <div className="pointer-events-none absolute left-[52%] top-[48%] h-[475px] w-[475px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10 sm:h-[560px] sm:w-[560px]" />

//             {/* main portrait card */}
//             <div className="group absolute left-1/2 top-2 h-[510px] w-[238px] -translate-x-1/2 overflow-hidden rounded-[2.8rem] border border-white/[0.13] bg-plum shadow-[0_35px_95px_rgba(0,0,0,0.62)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_45px_110px_rgba(225,70,130,0.22)] sm:h-[600px] sm:w-[290px] lg:h-[615px] lg:w-[300px] xl:h-[645px] xl:w-[310px]">
//               <img
//                 src={hero.images.main}
//                 alt="Kirti Rathore creator portrait"
//                 loading="eager"
//                 decoding="async"
//                 fetchPriority="high"
//                 className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.045]"
//               />

//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/55" />

//               {/* top profile */}
//               <div className="absolute inset-x-0 top-0 p-4 sm:p-5">
//                 <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/28 px-3 py-2 shadow-xl backdrop-blur-xl">
//                   <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-gold via-brand to-brand-2 p-[2px]">
//                     <div className="h-full w-full overflow-hidden rounded-full bg-ink">
//                       <img
//                         src={instagramDp || hero.images.main}
//                         alt={`${username} Instagram profile`}
//                         loading="eager"
//                         referrerPolicy="no-referrer"
//                         className="h-full w-full object-cover"
//                         onError={(e) => {
//                           e.currentTarget.onerror = null;
//                           e.currentTarget.src = hero.images.main;
//                         }}
//                       />
//                     </div>
//                   </div>

//                   <div className="leading-tight">
//                     <p className="text-[10px] font-semibold text-white">
//                       {username}
//                     </p>
//                     <p className="text-[8px] text-white/55">
//                       creator diary
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* bottom reel-style info */}
//               <div className="absolute inset-x-0 bottom-0 p-4 pb-5 sm:p-5 sm:pb-6">
//                 <div className="flex items-end justify-between gap-4">
//                   <div className="max-w-[165px] sm:max-w-[185px]">
//                     <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
//                       <Sparkles className="h-3 w-3 text-gold" />
//                       Golden Hour
//                     </div>

//                     <p className="text-[12px] font-semibold leading-snug text-white sm:text-[13px]">
//                       Little moments. Big memories. ✨
//                     </p>

//                     <p className="mt-1 text-[9px] text-white/55">
//                       @{username} · just now
//                     </p>
//                   </div>

//                   <div className="flex flex-col gap-3 text-white">
//                     <span className="flex flex-col items-center gap-0.5">
//                       <Heart className="h-5 w-5 fill-brand-2 text-brand-2" />
//                       <span className="text-[8px] font-medium">128K</span>
//                     </span>

//                     <span className="flex flex-col items-center gap-0.5">
//                       <MessageCircle className="h-5 w-5" />
//                       <span className="text-[8px] font-medium">2.4K</span>
//                     </span>

//                     <span className="flex flex-col items-center gap-0.5">
//                       <Send className="h-5 w-5" />
//                       <span className="text-[8px] font-medium">Share</span>
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="pointer-events-none absolute inset-0 rounded-[2.8rem] ring-1 ring-inset ring-white/[0.12]" />
//             </div>

//             {/* left photo card */}
//             <div className="group absolute -left-4 top-[7.5rem] hidden w-28 -rotate-[7deg] animate-float overflow-hidden rounded-[1.45rem] border border-white/10 bg-black shadow-[0_20px_55px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-rotate-2 hover:scale-105 sm:block lg:-left-1 xl:-left-7 xl:w-32">
//               <img
//                 src={hero.images.left}
//                 alt="Vlog preview"
//                 loading="lazy"
//                 decoding="async"
//                 className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-2.5 pt-10">
//                 <div className="flex items-center justify-between">
//                   <Play className="h-3.5 w-3.5 fill-white text-white" />
//                   <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white">
//                     VLOG
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* right photo card */}
//             <div className="group absolute -right-4 bottom-[5.5rem] hidden w-28 rotate-[7deg] animate-float-slow overflow-hidden rounded-[1.45rem] border border-white/10 bg-black shadow-[0_20px_55px_rgba(0,0,0,0.5)] transition-all duration-500 hover:rotate-2 hover:scale-105 sm:block lg:-right-1 xl:-right-7 xl:w-32">
//               <img
//                 src={hero.images.right}
//                 alt="Reel preview"
//                 loading="lazy"
//                 decoding="async"
//                 className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-2.5 pt-10">
//                 <div className="flex items-center justify-between">
//                   <Heart className="h-3.5 w-3.5 fill-brand-2 text-brand-2" />
//                   <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white">
//                     REELS
//                   </span>
//                 </div>
//               </div>
//             </div>



//             {/* tiny accent stars */}
//             <span className="pointer-events-none absolute left-[7%] top-[8%] text-lg text-gold/45">
//               ✦
//             </span>
//             <span className="pointer-events-none absolute right-[8%] bottom-[13%] text-xl text-brand-2/35">
//               ✦
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* bottom premium line */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/35 to-transparent" />
//     </section>
//   );
// }
import { useEffect, useState } from "react";

import {
  ArrowRight,
  BadgeCheck,
  Heart,
  MessageCircle,
  Play,
  Send,
  Sparkles,
} from "lucide-react";

import { InstagramIcon, YoutubeIcon } from "./icons";
import { useSite } from "../lib/store";

export default function Hero() {
  const { data } = useSite();
  const { hero, links } = data;

  const words = hero.name.split(" ");
  const first = words[0];
  const rest = words.slice(1).join(" ");

  const username = hero.badge.includes("@")
    ? hero.badge.split("@")[1]
    : "kirti_rathore0105";

  const API_URL = (
    import.meta.env.VITE_API_URL ||
    "http://localhost:4000"
  ).replace(/\/$/, "");

  const [instagramDp, setInstagramDp] =
    useState("");

  useEffect(() => {
    let active = true;

    const loadInstagramDp = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/instagram-profile?username=${encodeURIComponent(
            username
          )}`
        );

        if (!response.ok) return;

        const result = await response.json();

        if (
          active &&
          result.ok &&
          result.profilePicture
        ) {
          setInstagramDp(
            result.profilePicture
          );
        }
      } catch (error) {
        console.error(
          "Instagram DP fetch failed:",
          error
        );
      }
    };

    loadInstagramDp();

    const interval = window.setInterval(
      loadInstagramDp,
      30 * 60 * 1000
    );

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, [API_URL, username]);

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-ink pb-16 pt-24 sm:pb-20 sm:pt-28 lg:flex lg:items-center lg:pb-20 lg:pt-28"
    >
      {/* =========================
          CINEMATIC BACKGROUND
      ========================== */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute -left-40 top-[-3rem] h-[30rem] w-[30rem] rounded-full bg-brand/22 blur-[125px]" />
        <div className="absolute right-[-10rem] top-[10%] h-[38rem] w-[38rem] rounded-full bg-plum-2/80 blur-[145px]" />
        <div className="absolute bottom-[-13rem] left-[28%] h-[31rem] w-[31rem] rounded-full bg-gold/12 blur-[130px]" />
        <div className="absolute left-1/2 top-[44%] h-[34rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.045] blur-[150px]" />
      </div>

      {/* soft grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 78%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 78%)",
        }}
      />

      {/* huge editorial word */}
      <div className="pointer-events-none absolute left-1/2 top-[45%] -z-10 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[12rem] font-semibold uppercase leading-none tracking-[-0.07em] text-white/[0.017] xl:block">
        KIRTI
      </div>

      {/* rings */}
      <div className="pointer-events-none absolute -right-52 -top-52 -z-10 h-[42rem] w-[42rem] rounded-full border border-white/[0.045]" />
      <div className="pointer-events-none absolute -right-36 -top-36 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/[0.035]" />
      <div className="pointer-events-none absolute -left-44 bottom-[-8rem] -z-10 h-[29rem] w-[29rem] rounded-full border border-white/[0.025]" />

      {/* =========================
          MAIN LAYOUT
      ========================== */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 xl:gap-12">
        {/* =========================
            LEFT
        ========================== */}
        <div className="animate-fade-up text-center lg:text-left">
          {/* eyebrow */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold tracking-[0.07em] text-white/80 shadow-xl shadow-black/10 backdrop-blur-xl sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-brand-2" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-2" />
            </span>

            {hero.badge}

            <Sparkles className="h-3.5 w-3.5 text-gold" />
          </div>

          {/* headline */}
          <div className="mt-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.36em] text-white/35 sm:text-xs">
              Creator • Vlogger • Storyteller
            </p>

            <h1 className="font-display text-[3.6rem] font-semibold leading-[0.86] tracking-[-0.055em] text-white sm:text-[4.8rem] lg:text-[5.7rem] xl:text-[6.25rem]">
              <span className="block">{first}</span>

              <span className="relative mt-2 inline-block bg-gradient-to-r from-brand-2 via-brand to-gold bg-clip-text italic text-transparent">
                {rest}

                <span className="absolute -bottom-2 left-[3%] h-[5px] w-[94%] rounded-full bg-gradient-to-r from-brand-2/20 via-brand/70 to-gold/20 shadow-[0_0_22px_rgba(255,95,145,0.2)]" />
              </span>
            </h1>
          </div>

          {/* tagline */}
          <p className="mx-auto mt-7 max-w-xl text-[15px] leading-[1.85] text-white/72 sm:text-lg lg:mx-0 lg:max-w-[34rem]">
            {hero.tagline}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
            <a
              href={links.youtube}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-brand to-brand-2 px-7 py-4 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(255,70,120,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(255,70,120,0.4)] hover:brightness-110"
            >
              <span className="pointer-events-none absolute -left-full top-0 h-full w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover:left-[130%]" />

              <YoutubeIcon className="relative h-5 w-5" />
              <span className="relative">{hero.youtubeCta}</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/[0.15] bg-white/[0.055] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-2/45 hover:bg-white/[0.1]"
            >
              <InstagramIcon className="h-5 w-5 text-brand-2 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
              {hero.instagramCta}
            </a>
          </div>

          {/* premium stat row */}
          <div className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-3 lg:max-w-[35rem]">
            {[
              ["Daily", "Vlogs"],
              ["Fun", "Reels"],
              ["Real", "Moments"],
            ].map(([top, bottom]) => (
              <div
                key={`${top}-${bottom}`}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.075] bg-white/[0.045] px-3 py-3.5 text-center shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:bg-white/[0.065]"
              >
                <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-brand-2/50 to-transparent" />

                <BadgeCheck className="mx-auto h-4 w-4 text-gold" />

                <p className="mt-2 text-sm font-semibold text-white sm:text-[15px]">
                  {top}
                </p>

                <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/35 sm:text-[11px]">
                  {bottom}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            RIGHT EDITORIAL SHOWCASE
        ========================== */}
        <div
          className="relative mx-auto w-full max-w-lg animate-fade-up lg:max-w-none"
          style={{ animationDelay: "180ms" }}
        >
          <div className="relative mx-auto h-[540px] w-[300px] sm:h-[640px] sm:w-[390px] lg:h-[650px] lg:w-[430px] xl:h-[680px] xl:w-[470px]">
            {/* halo */}
            <div className="pointer-events-none absolute left-1/2 top-[48%] h-[510px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[90px] sm:h-[590px] sm:w-[400px]" />

            {/* luxury rings */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.055] sm:h-[520px] sm:w-[520px]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/10 sm:h-[430px] sm:w-[430px]" />

            {/* gold arc */}
            <div className="pointer-events-none absolute left-[52%] top-[48%] h-[475px] w-[475px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10 sm:h-[560px] sm:w-[560px]" />

            {/* main portrait card */}
            <div className="group absolute left-1/2 top-2 h-[510px] w-[238px] -translate-x-1/2 overflow-hidden rounded-[2.8rem] border border-white/[0.13] bg-plum shadow-[0_35px_95px_rgba(0,0,0,0.62)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_45px_110px_rgba(225,70,130,0.22)] sm:h-[600px] sm:w-[290px] lg:h-[615px] lg:w-[300px] xl:h-[645px] xl:w-[310px]">
              <img
                src={hero.images.main}
                alt="Kirti Rathore creator portrait"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.045]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/55" />

              {/* top profile */}
              <div className="absolute inset-x-0 top-0 p-4 sm:p-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/28 px-3 py-2 shadow-xl backdrop-blur-xl">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-gold via-brand to-brand-2 p-[2px]">
                    <div className="h-full w-full overflow-hidden rounded-full bg-ink">
                      <img
                        src={instagramDp || hero.images.main}
                        alt={`${username} Instagram profile`}
                        loading="eager"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = hero.images.main;
                        }}
                      />
                    </div>
                  </div>

                  <div className="leading-tight">
                    <p className="text-[10px] font-semibold text-white">
                      {username}
                    </p>
                    <p className="text-[8px] text-white/55">
                      creator diary
                    </p>
                  </div>
                </div>
              </div>

              {/* bottom reel-style info */}
              <div className="absolute inset-x-0 bottom-0 p-4 pb-5 sm:p-5 sm:pb-6">
                <div className="flex items-end justify-between gap-4">
                  <div className="max-w-[165px] sm:max-w-[185px]">
                    <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                      <Sparkles className="h-3 w-3 text-gold" />
                      Golden Hour
                    </div>

                    <p className="text-[12px] font-semibold leading-snug text-white sm:text-[13px]">
                      Little moments. Big memories. ✨
                    </p>

                    <p className="mt-1 text-[9px] text-white/55">
                      @{username} · just now
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 text-white">
                    <span className="flex flex-col items-center gap-0.5">
                      <Heart className="h-5 w-5 fill-brand-2 text-brand-2" />
                      <span className="text-[8px] font-medium">128K</span>
                    </span>

                    <span className="flex flex-col items-center gap-0.5">
                      <MessageCircle className="h-5 w-5" />
                      <span className="text-[8px] font-medium">2.4K</span>
                    </span>

                    <span className="flex flex-col items-center gap-0.5">
                      <Send className="h-5 w-5" />
                      <span className="text-[8px] font-medium">Share</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[2.8rem] ring-1 ring-inset ring-white/[0.12]" />
            </div>

            {/* left photo card */}
            <div className="group absolute -left-4 top-[7.5rem] hidden w-28 -rotate-[7deg] animate-float overflow-hidden rounded-[1.45rem] border border-white/10 bg-black shadow-[0_20px_55px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-rotate-2 hover:scale-105 sm:block lg:-left-1 xl:-left-7 xl:w-32">
              <img
                src={hero.images.left}
                alt="Vlog preview"
                loading="lazy"
                decoding="async"
                className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-2.5 pt-10">
                <div className="flex items-center justify-between">
                  <Play className="h-3.5 w-3.5 fill-white text-white" />
                  <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white">
                    VLOG
                  </span>
                </div>
              </div>
            </div>

            {/* right photo card */}
            <div className="group absolute -right-4 bottom-[5.5rem] hidden w-28 rotate-[7deg] animate-float-slow overflow-hidden rounded-[1.45rem] border border-white/10 bg-black shadow-[0_20px_55px_rgba(0,0,0,0.5)] transition-all duration-500 hover:rotate-2 hover:scale-105 sm:block lg:-right-1 xl:-right-7 xl:w-32">
              <img
                src={hero.images.right}
                alt="Reel preview"
                loading="lazy"
                decoding="async"
                className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-2.5 pt-10">
                <div className="flex items-center justify-between">
                  <Heart className="h-3.5 w-3.5 fill-brand-2 text-brand-2" />
                  <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white">
                    REELS
                  </span>
                </div>
              </div>
            </div>



            {/* tiny accent stars */}
            <span className="pointer-events-none absolute left-[7%] top-[8%] text-lg text-gold/45">
              ✦
            </span>
            <span className="pointer-events-none absolute right-[8%] bottom-[13%] text-xl text-brand-2/35">
              ✦
            </span>
          </div>
        </div>
      </div>

      {/* bottom premium line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/35 to-transparent" />
    </section>
  );
}
