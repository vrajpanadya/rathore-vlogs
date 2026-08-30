// // // import { Film, Heart, Smartphone, Sparkles } from "lucide-react";
// // // import Reveal from "./Reveal";
// // // import { useSite } from "../lib/store";

// // // const icons: Record<string, React.ReactNode> = {
// // //   film: <Film className="h-5 w-5 sm:h-6 sm:w-6" />,
// // //   smartphone: <Smartphone className="h-5 w-5 sm:h-6 sm:w-6" />,
// // //   heart: <Heart className="h-5 w-5 sm:h-6 sm:w-6" />,
// // // };

// // // const gradients = [
// // //   "from-brand to-brand-2",
// // //   "from-gold to-brand",
// // //   "from-plum-2 to-brand",
// // // ];

// // // const numbers = ["01", "02", "03"];

// // // export default function Pillars() {
// // //   const { data } = useSite();

// // //   return (
// // //     <section className="relative overflow-hidden bg-white pb-8 pt-16 sm:pb-10 sm:pt-24 lg:pb-12 lg:pt-28">
// // //       {/* Background effects */}
// // //       <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand/5 blur-[100px]" />

// // //       <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-[100px]" />

// // //       <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush/40 blur-[120px]" />

// // //       <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
// // //         {/* Header */}
// // //         <Reveal>
// // //           <div className="mx-auto max-w-2xl text-center">
// // //             <div className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/10 bg-brand/5 px-4 py-2">
// // //               <Sparkles className="h-3.5 w-3.5 text-brand" />

// // //               <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand sm:text-xs sm:tracking-[0.25em]">
// // //                 What I create
// // //               </p>
// // //             </div>

// // //             <h2 className="mt-4 font-display text-[2.3rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
// // //               Three things{" "}
// // //               <span className="relative italic text-brand">
// // //                 I live for
// // //                 <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-brand/15" />
// // //               </span>
// // //             </h2>

// // //             <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink/55 sm:text-base">
// // //               A mix of laughter, style and everyday magic — this is what you'll
// // //               find across my Instagram and YouTube.
// // //             </p>
// // //           </div>
// // //         </Reveal>

// // //         {/* Cards */}
// // //         <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
// // //           {data.pillars.map((pillar, i) => (
// // //             <Reveal key={`${pillar.title}-${i}`} delay={i * 110}>
// // //               <div className="group relative h-full overflow-hidden rounded-[1.7rem] border border-brand/10 bg-gradient-to-br from-cream via-white to-blush/70 p-5 shadow-xl shadow-plum/10 transition-all duration-500 hover:-translate-y-2 hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/15 sm:rounded-3xl sm:p-8">
// // //                 {/* Top glow */}
// // //                 <div
// // //                   className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${
// // //                     gradients[i % gradients.length]
// // //                   } opacity-10 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-25`}
// // //                 />

// // //                 {/* Big background number */}
// // //                 <span className="pointer-events-none absolute right-5 top-4 font-display text-5xl font-semibold text-ink/[0.07] transition-all duration-500 group-hover:text-brand/[0.12] sm:right-7 sm:top-5 sm:text-6xl">
// // //                   {numbers[i % numbers.length]}
// // //                 </span>

// // //                 {/* Icon */}
// // //                 <div
// // //                   className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${
// // //                     gradients[i % gradients.length]
// // //                   } text-white shadow-lg shadow-brand/20 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-2xl`}
// // //                 >
// // //                   {icons[pillar.icon] || (
// // //                     <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
// // //                   )}
// // //                 </div>

// // //                 {/* Content */}
// // //                 <h3 className="relative mt-5 font-display text-xl font-bold text-plum transition-colors duration-300 group-hover:text-brand sm:mt-6 sm:text-2xl">
// // //                   {pillar.title}
// // //                 </h3>

// // //                 <p className="relative mt-2.5 text-sm leading-relaxed text-ink/70 sm:mt-3">
// // //                   {pillar.text}
// // //                 </p>

// // //                 {/* Bottom line */}
// // //                 <div className="relative mt-5 flex items-center gap-2 sm:mt-6">
// // //                   <div className="h-1 w-10 rounded-full bg-gradient-to-r from-brand to-gold transition-all duration-500 group-hover:w-20" />

// // //                   <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/35 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:text-[10px]">
// // //                     Explore
// // //                   </span>
// // //                 </div>

// // //                 {/* Inner border */}
// // //                 <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] ring-1 ring-inset ring-white/70 sm:rounded-3xl" />
// // //               </div>
// // //             </Reveal>
// // //           ))}
// // //         </div>

// // //         {/* Bottom small note */}
// // //         <Reveal delay={250}>
// // //           <div className="mt-9 flex justify-center sm:mt-12">
// // //             <div className="inline-flex items-center gap-2 rounded-full border border-ink/5 bg-cream px-4 py-2 text-[10px] font-medium text-ink/45 shadow-sm sm:text-xs">
// // //               <Sparkles className="h-3.5 w-3.5 text-gold" />
// // //               Creating little stories from everyday life
// // //             </div>
// // //           </div>
// // //         </Reveal>
// // //       </div>
// // //     </section>
// // //   );
// // // }
// //   import { Camera, Sparkles } from "lucide-react";
// //   import { InstagramIcon, YoutubeIcon } from "./icons";
// //   import Reveal from "./Reveal";
// //   import { useSite } from "../lib/store";

// //   const icons: Record<string, React.ReactNode> = {
// //     film: (
// //       <div className="flex h-full w-full items-center justify-center rounded-xl bg-red-600 text-white shadow-lg shadow-red-500/25 sm:rounded-2xl">
// //         <YoutubeIcon className="h-6 w-6 sm:h-7 sm:w-7" />
// //       </div>
// //     ),

// //     smartphone: (
// //       <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg shadow-pink-500/25 sm:rounded-2xl">
// //         <InstagramIcon className="h-6 w-6 sm:h-7 sm:w-7" />
// //       </div>
// //     ),

// //     heart: (
// //       <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-500/20 sm:rounded-2xl">
// //         <Camera className="h-6 w-6 sm:h-7 sm:w-7" />
// //       </div>
// //     ),
// //   };

// //   const numbers = ["01", "02", "03"];

// //   export default function Pillars() {
// //     const { data } = useSite();

// //     return (
// //       <section className="relative overflow-hidden bg-white pb-8 pt-16 sm:pb-10 sm:pt-24 lg:pb-12 lg:pt-28">
// //         {/* Background effects */}
// //         <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand/5 blur-[100px]" />

// //         <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-[100px]" />

// //         <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush/40 blur-[120px]" />

// //         <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
// //           {/* Header */}
// //           <Reveal>
// //             <div className="mx-auto max-w-2xl text-center">
// //               <div className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/10 bg-brand/5 px-4 py-2">
// //                 <Sparkles className="h-3.5 w-3.5 text-brand" />

// //                 <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand sm:text-xs sm:tracking-[0.25em]">
// //                   What I create
// //                 </p>
// //               </div>

// //               <h2 className="mt-4 font-display text-[2.3rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
// //                 Three things{" "}
// //                 <span className="relative italic text-brand">
// //                   I live for
// //                   <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-brand/15" />
// //                 </span>
// //               </h2>

// //               <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink/55 sm:text-base">
// //                 A mix of laughter, style and everyday magic — this is what you'll
// //                 find across my Instagram and YouTube.
// //               </p>
// //             </div>
// //           </Reveal>

// //           {/* Cards */}
// //           <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
// //             {data.pillars.map((pillar, i) => (
// //               <Reveal key={`${pillar.title}-${i}`} delay={i * 110}>
// //                 <div className="group relative h-full overflow-hidden rounded-[1.7rem] border border-brand/10 bg-gradient-to-br from-cream via-white to-blush/70 p-5 shadow-xl shadow-plum/10 transition-all duration-500 hover:-translate-y-2 hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/15 sm:rounded-3xl sm:p-8">
// //                   {/* Top glow */}
// //                   <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-brand/20" />

// //                   {/* Big background number */}
// //                   <span className="pointer-events-none absolute right-5 top-4 font-display text-5xl font-semibold text-ink/[0.07] transition-all duration-500 group-hover:text-brand/[0.12] sm:right-7 sm:top-5 sm:text-6xl">
// //                     {numbers[i % numbers.length]}
// //                   </span>

// //                   {/* Icon */}
// //                   <div className="relative h-12 w-12 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 sm:h-14 sm:w-14">
// //                     {icons[pillar.icon] || (
// //                       <div className="flex h-full w-full items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/20 sm:rounded-2xl">
// //                         <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
// //                       </div>
// //                     )}
// //                   </div>

// //                   {/* Content */}
// //                   <h3 className="relative mt-5 font-display text-xl font-bold text-plum transition-colors duration-300 group-hover:text-brand sm:mt-6 sm:text-2xl">
// //                     {pillar.title}
// //                   </h3>

// //                   <p className="relative mt-2.5 text-sm leading-relaxed text-ink/70 sm:mt-3">
// //                     {pillar.text}
// //                   </p>

// //                   {/* Bottom line */}
// //                   <div className="relative mt-5 flex items-center gap-2 sm:mt-6">
// //                     <div className="h-1 w-10 rounded-full bg-gradient-to-r from-brand to-gold transition-all duration-500 group-hover:w-20" />

// //                     <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/35 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:text-[10px]">
// //                       Explore
// //                     </span>
// //                   </div>

// //                   {/* Inner border */}
// //                   <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] ring-1 ring-inset ring-white/70 sm:rounded-3xl" />
// //                 </div>
// //               </Reveal>
// //             ))}
// //           </div>

// //           {/* Bottom note */}
// //           <Reveal delay={250}>
// //             <div className="mt-9 flex justify-center sm:mt-12">
// //               <div className="inline-flex items-center gap-2 rounded-full border border-ink/5 bg-cream px-4 py-2 text-[10px] font-medium text-ink/45 shadow-sm sm:text-xs">
// //                 <Sparkles className="h-3.5 w-3.5 text-gold" />
// //                 Creating little stories from everyday life
// //               </div>
// //             </div>
// //           </Reveal>
// //         </div>
// //       </section>
// //     );
// //   }
// import {
//   Camera,
//   Clapperboard,
//   Film,
//   Heart,
//   Image,
//   Mic2,
//   Music2,
//   Play,
//   Smartphone,
//   Smile,
//   Sparkles,
//   Star,
//   Video,
// } from "lucide-react";

// import { InstagramIcon, YoutubeIcon } from "./icons";
// import Reveal from "./Reveal";
// import { useSite } from "../lib/store";

// const iconBase =
//   "flex h-full w-full items-center justify-center rounded-xl text-white shadow-lg sm:rounded-2xl";

// const icons: Record<string, React.ReactNode> = {
//   /* YouTube */
//   youtube: (
//     <div className={`${iconBase} bg-red-600 shadow-red-500/25`}>
//       <YoutubeIcon className="h-6 w-6 sm:h-7 sm:w-7" />
//     </div>
//   ),

//   /* Instagram */
//   instagram: (
//     <div
//       className={`${iconBase} bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 shadow-pink-500/25`}
//     >
//       <InstagramIcon className="h-6 w-6 sm:h-7 sm:w-7" />
//     </div>
//   ),

//   /* Clapperboard */
//   clapperboard: (
//     <div
//       className={`${iconBase} bg-gradient-to-br from-slate-800 to-slate-950 shadow-black/20`}
//     >
//       <Clapperboard className="h-6 w-6 sm:h-7 sm:w-7" />
//     </div>
//   ),

//   /* Camera */
//   camera: (
//     <div
//       className={`${iconBase} bg-gradient-to-br from-amber-400 to-orange-500 shadow-orange-500/20`}
//     >
//       <Camera className="h-6 w-6 sm:h-7 sm:w-7" />
//     </div>
//   ),

//   /* Video */
//   video: (
//     <div
//       className={`${iconBase} bg-gradient-to-br from-violet-500 to-purple-700 shadow-purple-500/20`}
//     >
//       <Video className="h-6 w-6 sm:h-7 sm:w-7" />
//     </div>
//   ),

//   /* Play */
//   play: (
//     <div
//       className={`${iconBase} bg-gradient-to-br from-red-500 to-rose-600 shadow-red-500/20`}
//     >
//       <Play className="h-6 w-6 fill-white sm:h-7 sm:w-7" />
//     </div>
//   ),

//   /* Film */
//   film: (
//     <div
//       className={`${iconBase} bg-gradient-to-br from-indigo-500 to-purple-700 shadow-purple-500/20`}
//     >
//       <Film className="h-6 w-6 sm:h-7 sm:w-7" />
//     </div>
//   ),

//   /* Smartphone */
//   smartphone: (
//     <div
//       className={`${iconBase} bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/20`}
//     >
//       <Smartphone className="h-6 w-6 sm:h-7 sm:w-7" />
//     </div>
//   ),

//   /* Heart */
//   heart: (
//     <div
//       className={`${iconBase} bg-gradient-to-br from-pink-500 to-rose-600 shadow-pink-500/20`}
//     >
//       <Heart className="h-6 w-6 fill-white/20 sm:h-7 sm:w-7" />
//     </div>
//   ),

//   /* Sparkles */
//   sparkles: (
//     <div
//       className={`${iconBase} bg-gradient-to-br from-yellow-400 to-amber-500 shadow-amber-500/20`}
//     >
//       <Sparkles className="h-6 w-6 sm:h-7 sm:w-7" />
//     </div>
//   ),

//   /* Star */
//   star: (
//     <div
//       className={`${iconBase} bg-gradient-to-br from-yellow-400 to-orange-500 shadow-yellow-500/20`}
//     >
//       <Star className="h-6 w-6 fill-white/20 sm:h-7 sm:w-7" />
//     </div>
//   ),

//   /* Music */
//   music: (
//     <div
//       className={`${iconBase} bg-gradient-to-br from-fuchsia-500 to-purple-700 shadow-fuchsia-500/20`}
//     >
//       <Music2 className="h-6 w-6 sm:h-7 sm:w-7" />
//     </div>
//   ),

//   /* Microphone */
//   mic: (
//     <div
//       className={`${iconBase} bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-500/20`}
//     >
//       <Mic2 className="h-6 w-6 sm:h-7 sm:w-7" />
//     </div>
//   ),

//   /* Photo */
//   image: (
//     <div
//       className={`${iconBase} bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-500/20`}
//     >
//       <Image className="h-6 w-6 sm:h-7 sm:w-7" />
//     </div>
//   ),

//   /* Smile */
//   smile: (
//     <div
//       className={`${iconBase} bg-gradient-to-br from-orange-400 to-pink-500 shadow-orange-500/20`}
//     >
//       <Smile className="h-6 w-6 sm:h-7 sm:w-7" />
//     </div>
//   ),
// };

// const numbers = ["01", "02", "03"];

// export default function Pillars() {
//   const { data } = useSite();

//   return (
//     <section className="relative overflow-hidden bg-white pb-8 pt-16 sm:pb-10 sm:pt-24 lg:pb-12 lg:pt-28">
//       {/* Background effects */}
//       <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand/5 blur-[100px]" />

//       <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-[100px]" />

//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush/40 blur-[120px]" />

//       <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
//         {/* Header */}
//         <Reveal>
//           <div className="mx-auto max-w-2xl text-center">
//             <div className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/10 bg-brand/5 px-4 py-2">
//               <Sparkles className="h-3.5 w-3.5 text-brand" />

//               <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand sm:text-xs sm:tracking-[0.25em]">
//                 What I create
//               </p>
//             </div>

//             <h2 className="mt-4 font-display text-[2.3rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
//               Three things{" "}
//               <span className="relative italic text-brand">
//                 I live for
//                 <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-brand/15" />
//               </span>
//             </h2>

//             <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink/55 sm:text-base">
//               A mix of laughter, style and everyday magic — this is what you'll
//               find across my Instagram and YouTube.
//             </p>
//           </div>
//         </Reveal>

//         {/* Cards */}
//         <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
//           {data.pillars.map((pillar, i) => (
//             <Reveal key={`${pillar.title}-${i}`} delay={i * 110}>
//               <div className="group relative h-full overflow-hidden rounded-[1.7rem] border border-brand/10 bg-gradient-to-br from-cream via-white to-blush/70 p-5 shadow-xl shadow-plum/10 transition-all duration-500 hover:-translate-y-2 hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/15 sm:rounded-3xl sm:p-8">
//                 {/* Top glow */}
//                 <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-brand/20" />

//                 {/* Big number */}
//                 <span className="pointer-events-none absolute right-5 top-4 font-display text-5xl font-semibold text-ink/[0.07] transition-all duration-500 group-hover:text-brand/[0.12] sm:right-7 sm:top-5 sm:text-6xl">
//                   {numbers[i % numbers.length]}
//                 </span>

//                 {/* Icon */}
//                 <div className="relative h-12 w-12 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 sm:h-14 sm:w-14">
//                   {icons[pillar.icon] || (
//                     <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-lg shadow-brand/20 sm:rounded-2xl">
//                       <Sparkles className="h-6 w-6 sm:h-7 sm:w-7" />
//                     </div>
//                   )}
//                 </div>

//                 {/* Content */}
//                 <h3 className="relative mt-5 font-display text-xl font-bold text-plum transition-colors duration-300 group-hover:text-brand sm:mt-6 sm:text-2xl">
//                   {pillar.title}
//                 </h3>

//                 <p className="relative mt-2.5 text-sm leading-relaxed text-ink/70 sm:mt-3">
//                   {pillar.text}
//                 </p>

//                 {/* Bottom line */}
//                 <div className="relative mt-5 flex items-center gap-2 sm:mt-6">
//                   <div className="h-1 w-10 rounded-full bg-gradient-to-r from-brand to-gold transition-all duration-500 group-hover:w-20" />

//                   <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/35 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:text-[10px]">
//                     Explore
//                   </span>
//                 </div>

//                 {/* Inner border */}
//                 <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] ring-1 ring-inset ring-white/70 sm:rounded-3xl" />
//               </div>
//             </Reveal>
//           ))}
//         </div>

//         {/* Bottom note */}
//         <Reveal delay={250}>
//           <div className="mt-9 flex justify-center sm:mt-12">
//             <div className="inline-flex items-center gap-2 rounded-full border border-ink/5 bg-cream px-4 py-2 text-[10px] font-medium text-ink/45 shadow-sm sm:text-xs">
//               <Sparkles className="h-3.5 w-3.5 text-gold" />
//               Creating little stories from everyday life
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }
import { Camera, Sparkles } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "./icons";
import Reveal from "./Reveal";
import { useSite } from "../lib/store";

const icons: Record<string, React.ReactNode> = {
  film: (
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-red-600 text-white shadow-lg shadow-red-500/25 sm:rounded-2xl">
      <YoutubeIcon className="h-6 w-6 sm:h-7 sm:w-7" />
    </div>
  ),

  smartphone: (
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg shadow-pink-500/25 sm:rounded-2xl">
      <InstagramIcon className="h-6 w-6 sm:h-7 sm:w-7" />
    </div>
  ),

  heart: (
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-500/20 sm:rounded-2xl">
      <Camera className="h-6 w-6 sm:h-7 sm:w-7" />
    </div>
  ),
};

const numbers = ["01", "02", "03"];

export default function Pillars() {
  const { data } = useSite();

  return (
    <section className="relative overflow-hidden bg-white pb-8 pt-16 sm:pb-10 sm:pt-24 lg:pb-12 lg:pt-28">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand/5 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-[100px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush/40 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/10 bg-brand/5 px-4 py-2">
              <Sparkles className="h-3.5 w-3.5 text-brand" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand sm:text-xs sm:tracking-[0.25em]">
                What I create
              </p>
            </div>

            <h2 className="mt-4 font-display text-[2.3rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Three things{" "}
              <span className="relative italic text-brand">
                I live for
                <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-brand/15" />
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink/55 sm:text-base">
              A mix of laughter, style and everyday magic — this is what you'll
              find across my Instagram and YouTube.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {data.pillars.map((pillar, i) => (
            <Reveal key={`${pillar.title}-${i}`} delay={i * 110}>
              <div className="group relative h-full overflow-hidden rounded-[1.7rem] border border-brand/10 bg-gradient-to-br from-cream via-white to-blush/70 p-5 shadow-xl shadow-plum/10 transition-all duration-500 hover:-translate-y-2 hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/15 sm:rounded-3xl sm:p-8">
                {/* Top glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-brand/20" />

                {/* Big background number */}
                <span className="pointer-events-none absolute right-5 top-4 font-display text-5xl font-semibold text-ink/[0.07] transition-all duration-500 group-hover:text-brand/[0.12] sm:right-7 sm:top-5 sm:text-6xl">
                  {numbers[i % numbers.length]}
                </span>

                {/* Icon */}
                <div className="relative h-12 w-12 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 sm:h-14 sm:w-14">
                  {icons[pillar.icon] || (
                    <div className="flex h-full w-full items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/20 sm:rounded-2xl">
                      <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="relative mt-5 font-display text-xl font-bold text-plum transition-colors duration-300 group-hover:text-brand sm:mt-6 sm:text-2xl">
                  {pillar.title}
                </h3>

                <p className="relative mt-2.5 text-sm leading-relaxed text-ink/70 sm:mt-3">
                  {pillar.text}
                </p>

                {/* Bottom line */}
                <div className="relative mt-5 flex items-center gap-2 sm:mt-6">
                  <div className="h-1 w-10 rounded-full bg-gradient-to-r from-brand to-gold transition-all duration-500 group-hover:w-20" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/35 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:text-[10px]">
                    Explore
                  </span>
                </div>

                {/* Inner border */}
                <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] ring-1 ring-inset ring-white/70 sm:rounded-3xl" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom note */}
        <Reveal delay={250}>
          <div className="mt-9 flex justify-center sm:mt-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-ink/5 bg-cream px-4 py-2 text-[10px] font-medium text-ink/45 shadow-sm sm:text-xs">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Creating little stories from everyday life
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}