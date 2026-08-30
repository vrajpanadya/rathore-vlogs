// import { ArrowUpRight, Clock, Play, Sparkles } from "lucide-react";
// import Reveal from "./Reveal";
// import { YoutubeIcon } from "./icons";
// import { useSite } from "../lib/store";

// export default function Videos() {
//   const { data } = useSite();

//   return (
//     <section
//       id="videos"
//       className="relative overflow-hidden bg-ink py-16 sm:py-24 lg:py-28"
//     >
//       {/* Background Effects */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-plum-2/60 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]" />

//         <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand/15 blur-[90px] sm:h-80 sm:w-80 sm:blur-[110px]" />

//         <div className="absolute left-1/2 top-1/2 h-[320px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[100px] sm:h-[400px] sm:w-[600px] sm:blur-[130px]" />
//       </div>

//       <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
//         {/* ================= HEADER ================= */}
//         <Reveal>
//           <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
//             <div>
//               <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-2 sm:text-sm sm:tracking-[0.25em]">
//                 <span className="h-px w-8 bg-brand-2" />
//                 Fresh from the channel
//               </p>

//               <h2 className="mt-4 max-w-3xl font-display text-[2.25rem] font-semibold leading-tight tracking-tight text-white sm:text-5xl">
//                 Latest Vlogs on{" "}
//                 <span className="relative italic text-brand-2">
//                   Rathore Vlogs
//                   <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-brand-2/20" />
//                 </span>
//               </h2>

//               <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/55 sm:mt-5 sm:text-base">
//                 New stories, daily moments and unforgettable memories —
//                 straight from my YouTube channel. 🎬
//               </p>
//             </div>

//             {/* Channel Button */}
//             <a
//               href={data.links.youtube}
//               target="_blank"
//               rel="noreferrer"
//               className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500/50 hover:bg-red-500/15 hover:shadow-xl hover:shadow-red-500/10 sm:w-fit"
//             >
//               <YoutubeIcon className="h-4 w-4 text-red-500" />

//               Visit the channel

//               <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//             </a>
//           </div>
//         </Reveal>

//         {/* ================= VIDEOS ================= */}
//         {data.videos.length === 0 ? (
//           <Reveal>
//             <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur sm:mt-12 sm:p-12">
//               <Play className="mx-auto h-8 w-8 text-white/30" />

//               <p className="mt-4 text-sm text-white/50 sm:text-base">
//                 No videos yet — add them from the admin panel 🎬
//               </p>
//             </div>
//           </Reveal>
//         ) : (
//           <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
//             {data.videos.map((video, i) => (
//               <Reveal key={`${video.title}-${i}`} delay={i * 90}>
//                 <a
//                   href={data.links.youtube}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="group block"
//                 >
//                   <article className="relative transition-all duration-500 group-hover:-translate-y-2">
//                     {/* Thumbnail */}
//                     <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-plum shadow-xl shadow-black/30 transition-all duration-500 group-hover:border-brand-2/30 group-hover:shadow-2xl group-hover:shadow-brand/10 sm:rounded-[1.4rem]">
//                       <img
//                         src={video.thumb}
//                         alt={video.title}
//                         loading="lazy"
//                         className="aspect-video w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                       />

//                       {/* Gradient */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/10 opacity-75 transition-opacity duration-300 group-hover:opacity-90" />

//                       {/* Top Shine */}
//                       <div className="pointer-events-none absolute -left-full top-0 h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 group-hover:left-[130%]" />

//                       {/* Play Button */}
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-brand/30 group-hover:bg-brand group-hover:shadow-brand/40 sm:h-14 sm:w-14">
//                           <Play className="ml-1 h-5 w-5 fill-white text-white sm:h-6 sm:w-6" />

//                           <span className="absolute inset-0 rounded-full border border-white/20 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-0" />
//                         </span>
//                       </div>

//                       {/* Duration */}
//                       <span className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/65 px-2 py-1 text-[9px] font-semibold text-white shadow-lg backdrop-blur-xl sm:bottom-3 sm:right-3 sm:px-2.5 sm:py-1.5 sm:text-[10px]">
//                         <Clock className="h-3 w-3" />

//                         {video.duration}
//                       </span>

//                       {/* Badge */}
//                       {video.badge && (
//                         <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-gradient-to-r from-brand to-brand-2 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-wider text-white shadow-lg shadow-brand/20 sm:left-3 sm:top-3 sm:px-3 sm:text-[9px]">
//                           <Sparkles className="h-3 w-3" />

//                           {video.badge}
//                         </span>
//                       )}

//                       {/* YouTube Icon */}
//                       <span className="absolute bottom-3 left-3 hidden h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:opacity-100 sm:flex">
//                         <YoutubeIcon className="h-4 w-4 text-red-500" />
//                       </span>
//                     </div>

//                     {/* Information */}
//                     <div className="mt-3 px-1 sm:mt-4">
//                       <h3 className="line-clamp-2 font-display text-base font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-brand-2">
//                         {video.title}
//                       </h3>

//                       <div className="mt-2 flex items-center justify-between gap-3">
//                         <p className="text-xs font-medium text-white/40">
//                           {video.views}
//                         </p>

//                         <span className="flex items-center gap-1 text-[11px] font-semibold text-white/35 transition-colors duration-300 group-hover:text-white/70">
//                           Watch
//                           <ArrowUpRight className="h-3 w-3" />
//                         </span>
//                       </div>

//                       <div className="mt-3 flex items-center gap-2 border-t border-white/5 pt-3">
//                         <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-[10px] font-bold text-white">
//                           R
//                         </div>

//                         <span className="text-[11px] font-medium text-white/40">
//                           Rathore Vlogs
//                         </span>
//                       </div>
//                     </div>
//                   </article>
//                 </a>
//               </Reveal>
//             ))}
//           </div>
//         )}

//         {/* ================= BOTTOM CTA ================= */}
//         <Reveal delay={150}>
//           <div className="mt-10 text-center sm:mt-12">
//             <a
//               href={data.links.youtube}
//               target="_blank"
//               rel="noreferrer"
//               className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-red-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/30 hover:brightness-110 sm:w-auto sm:px-7"
//             >
//               <YoutubeIcon className="h-5 w-5" />

//               Watch all videos on YouTube

//               <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
//             </a>

//             <p className="mt-4 text-xs text-white/30">
//               New videos, vlogs & moments added regularly ✨
//             </p>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }
import { ArrowUpRight, Clock, Play, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { YoutubeIcon } from "./icons";
import { useSite } from "../lib/store";

export default function Videos() {
  const { data } = useSite();

  return (
    <section
      id="videos"
      className="relative overflow-hidden bg-ink py-16 sm:py-24 lg:py-28"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-plum-2/60 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]" />

        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand/15 blur-[90px] sm:h-80 sm:w-80 sm:blur-[110px]" />

        <div className="absolute left-1/2 top-1/2 h-[320px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[100px] sm:h-[400px] sm:w-[600px] sm:blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* ================= HEADER ================= */}
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-2 sm:text-sm sm:tracking-[0.25em]">
                <span className="h-px w-8 bg-brand-2" />
                Fresh from the channel
              </p>

              <h2 className="mt-4 max-w-3xl font-display text-[2.25rem] font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Latest Vlogs on{" "}
                <span className="relative italic text-brand-2">
                  Rathore Vlogs
                  <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-brand-2/20" />
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/55 sm:mt-5 sm:text-base">
                New stories, daily moments and unforgettable memories —
                straight from my YouTube channel. 🎬
              </p>
            </div>

            {/* Channel Button */}
            <a
              href={data.links.youtube}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500/50 hover:bg-red-500/15 hover:shadow-xl hover:shadow-red-500/10 sm:w-fit"
            >
              <YoutubeIcon className="h-4 w-4 text-red-500" />

              Visit the channel

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        {/* ================= VIDEOS ================= */}
        {data.videos.length === 0 ? (
          <Reveal>
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur sm:mt-12 sm:p-12">
              <Play className="mx-auto h-8 w-8 text-white/30" />

              <p className="mt-4 text-sm text-white/50 sm:text-base">
                No videos yet — add them from the admin panel 🎬
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {data.videos.map((video, i) => (
              <Reveal key={`${video.title}-${i}`} delay={i * 90}>
                <a
                  href={video.youtubeUrl?.trim() || data.links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <article className="relative transition-all duration-500 group-hover:-translate-y-2">
                    {/* Thumbnail */}
                    <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-plum shadow-xl shadow-black/30 transition-all duration-500 group-hover:border-brand-2/30 group-hover:shadow-2xl group-hover:shadow-brand/10 sm:rounded-[1.4rem]">
                      <img
                        src={video.thumb}
                        alt={video.title}
                        loading="lazy"
                        className="aspect-video w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />

                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/10 opacity-75 transition-opacity duration-300 group-hover:opacity-90" />

                      {/* Top Shine */}
                      <div className="pointer-events-none absolute -left-full top-0 h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 group-hover:left-[130%]" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-brand/30 group-hover:bg-brand group-hover:shadow-brand/40 sm:h-14 sm:w-14">
                          <Play className="ml-1 h-5 w-5 fill-white text-white sm:h-6 sm:w-6" />

                          <span className="absolute inset-0 rounded-full border border-white/20 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-0" />
                        </span>
                      </div>

                      {/* Duration */}
                      <span className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/65 px-2 py-1 text-[9px] font-semibold text-white shadow-lg backdrop-blur-xl sm:bottom-3 sm:right-3 sm:px-2.5 sm:py-1.5 sm:text-[10px]">
                        <Clock className="h-3 w-3" />

                        {video.duration}
                      </span>

                      {/* Badge */}
                      {video.badge && (
                        <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-gradient-to-r from-brand to-brand-2 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-wider text-white shadow-lg shadow-brand/20 sm:left-3 sm:top-3 sm:px-3 sm:text-[9px]">
                          <Sparkles className="h-3 w-3" />

                          {video.badge}
                        </span>
                      )}

                      {/* YouTube Icon */}
                      <span className="absolute bottom-3 left-3 hidden h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:opacity-100 sm:flex">
                        <YoutubeIcon className="h-4 w-4 text-red-500" />
                      </span>
                    </div>

                    {/* Information */}
                    <div className="mt-3 px-1 sm:mt-4">
                      <h3 className="line-clamp-2 font-display text-base font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-brand-2">
                        {video.title}
                      </h3>

                      <div className="mt-2 flex items-center justify-between gap-3">
                        <p className="text-xs font-medium text-white/40">
                          {video.views}
                        </p>

                        <span className="flex items-center gap-1 text-[11px] font-semibold text-white/35 transition-colors duration-300 group-hover:text-white/70">
                          Watch
                          <ArrowUpRight className="h-3 w-3" />
                        </span>
                      </div>

                      <div className="mt-3 flex items-center gap-2 border-t border-white/5 pt-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-[10px] font-bold text-white">
                          R
                        </div>

                        <span className="text-[11px] font-medium text-white/40">
                          Rathore Vlogs
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              </Reveal>
            ))}
          </div>
        )}

        {/* ================= BOTTOM CTA ================= */}
        <Reveal delay={150}>
          <div className="mt-10 text-center sm:mt-12">
            <a
              href={data.links.youtube}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-red-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/30 hover:brightness-110 sm:w-auto sm:px-7"
            >
              <YoutubeIcon className="h-5 w-5" />

              Watch all videos on YouTube

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
            </a>

            <p className="mt-4 text-xs text-white/30">
              New videos, vlogs & moments added regularly ✨
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}