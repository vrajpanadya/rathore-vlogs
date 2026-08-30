// import { useEffect, useState } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Heart,
//   X,
// } from "lucide-react";

// import Reveal from "./Reveal";
// import { InstagramIcon } from "./icons";
// import { useSite } from "../lib/store";

// export default function Gallery() {
//   const { data } = useSite();

//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

//   const selected =
//     selectedIndex !== null
//       ? data.gallery[selectedIndex]
//       : null;

//   const closeLightbox = () => {
//     setSelectedIndex(null);
//   };

//   const previousImage = () => {
//     if (selectedIndex === null || data.gallery.length === 0) return;

//     setSelectedIndex(
//       selectedIndex === 0
//         ? data.gallery.length - 1
//         : selectedIndex - 1
//     );
//   };

//   const nextImage = () => {
//     if (selectedIndex === null || data.gallery.length === 0) return;

//     setSelectedIndex(
//       selectedIndex === data.gallery.length - 1
//         ? 0
//         : selectedIndex + 1
//     );
//   };

//   /* =============================
//      Keyboard Controls
//   ============================= */
//   useEffect(() => {
//     if (selectedIndex === null) return;

//     const handleKey = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         closeLightbox();
//       }

//       if (event.key === "ArrowLeft") {
//         previousImage();
//       }

//       if (event.key === "ArrowRight") {
//         nextImage();
//       }
//     };

//     window.addEventListener("keydown", handleKey);

//     // Stop page scrolling while popup is open
//     document.body.style.overflow = "hidden";

//     return () => {
//       window.removeEventListener("keydown", handleKey);
//       document.body.style.overflow = "";
//     };
//   }, [selectedIndex]);

//   return (
//     <>
//       <section
//         id="gallery"
//         className="relative overflow-hidden bg-blush py-16 sm:py-24 lg:py-28"
//       >
//         {/* Background Glow */}
//         <div className="pointer-events-none absolute -left-28 top-10 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />

//         <div className="pointer-events-none absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

//         <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

//           {/* =============================
//               Instagram Header
//           ============================== */}
//           <Reveal>
//             <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-brand/10 bg-white/90 p-5 text-center shadow-xl shadow-brand/5 backdrop-blur sm:rounded-3xl sm:p-6 sm:flex-row sm:text-left">

//               {/* Profile Circle */}
//               <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-gradient-to-tr from-gold via-brand to-brand-2 p-[3px] sm:h-16 sm:w-16">
//                 <div className="flex h-full w-full items-center justify-center rounded-full bg-white font-display text-xl font-semibold text-brand sm:text-2xl">
//                   {data.hero.name.charAt(0)}
//                 </div>
//               </div>

//               {/* Username */}
//               <div className="min-w-0 flex-1">
//                 <p className="flex items-center justify-center gap-1.5 text-base font-semibold text-ink sm:justify-start">
//                   @
//                   {data.hero.badge.includes("@")
//                     ? data.hero.badge.split("@")[1]
//                     : "kirti_rathore0105"}
//                 </p>

//                 <p className="mt-1 text-sm text-ink/55">
//                   Daily vibes, reels & moments — fresh on Instagram ✨
//                 </p>
//               </div>

//               {/* Follow Button */}
//               <a
//                 href={data.links.instagram}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex w-full flex-none items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/30 hover:brightness-110 sm:w-auto"
//               >
//                 <InstagramIcon className="h-4 w-4" />
//                 Follow
//               </a>
//             </div>
//           </Reveal>

//           {/* =============================
//               Gallery
//           ============================== */}

//           {data.gallery.length === 0 ? (
//             <Reveal>
//               <p className="mt-12 rounded-2xl border border-brand/10 bg-white p-10 text-center text-ink/50">
//                 No gallery posts yet — add them from the admin panel 📸
//               </p>
//             </Reveal>
//           ) : (
//             <div className="mt-10 grid grid-cols-2 gap-2.5 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">

//               {data.gallery.map((item, i) => (
//                 <Reveal
//                   key={`${item.src}-${i}`}
//                   delay={i * 60}
//                   className={
//                     i === 0 || i === 3
//                       ? "lg:col-span-2"
//                       : ""
//                   }
//                 >
//                   <button
//                     type="button"
//                     onClick={() => setSelectedIndex(i)}
//                     className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl bg-ink text-left shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand/10 sm:rounded-2xl"
//                   >
//                     {/* Image */}
//                     <img
//                       src={item.src}
//                       alt={item.caption}
//                       loading="lazy"
//                       decoding="async"
//                       className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:group-hover:scale-110"
//                     />

//                     {/* Dark Hover Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent opacity-70 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100" />

//                     {/* Caption + Likes */}
//                     <div className="absolute inset-x-0 bottom-0 p-2.5 opacity-100 transition-all duration-300 sm:translate-y-3 sm:p-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
//                       <p className="flex items-center gap-1 text-[10px] font-semibold text-white sm:gap-1.5 sm:text-xs">
//                         <Heart className="h-3.5 w-3.5 fill-brand-2 text-brand-2" />

//                         {item.likes} likes
//                       </p>

//                       <p className="mt-1 line-clamp-1 text-[9px] leading-snug text-white/80 sm:mt-1.5 sm:line-clamp-2 sm:text-[11px] sm:text-white/85">
//                         {item.caption}
//                       </p>
//                     </div>

//                     {/* Instagram Icon */}
//                     <span className="absolute right-2 top-2 hidden h-8 w-8 scale-75 items-center justify-center rounded-full border border-white/15 bg-black/25 text-white opacity-0 shadow-lg backdrop-blur-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 sm:flex sm:right-3 sm:top-3">
//                       <InstagramIcon className="h-4 w-4" />
//                     </span>

//                     {/* Border */}
//                     <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 sm:rounded-2xl" />
//                   </button>
//                 </Reveal>
//               ))}
//             </div>
//           )}

//           {/* Instagram Footer */}
//           <Reveal delay={120}>
//             <p className="mt-10 text-center text-sm text-ink/50">
//               More reels, stories & daily posts on{" "}

//               <a
//                 href={data.links.instagram}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 transition hover:text-brand-2"
//               >
//                 Instagram
//               </a>{" "}

//               💌
//             </p>
//           </Reveal>
//         </div>
//       </section>

//       {/* ==================================
//           FULLSCREEN LIGHTBOX
//       =================================== */}

//       {selected && selectedIndex !== null && (
//         <div
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-2 backdrop-blur-xl sm:p-8"
//           onClick={closeLightbox}
//         >
//           {/* Close */}
//           <button
//             type="button"
//             onClick={closeLightbox}
//             aria-label="Close image"
//             className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-xl transition hover:rotate-90 hover:bg-brand sm:right-5 sm:top-5 sm:h-11 sm:w-11"
//           >
//             <X className="h-5 w-5" />
//           </button>

//           {/* Previous */}
//           {data.gallery.length > 1 && (
//             <button
//               type="button"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 previousImage();
//               }}
//               aria-label="Previous image"
//               className="absolute left-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-xl transition hover:scale-110 hover:bg-brand sm:left-8 sm:h-11 sm:w-11"
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </button>
//           )}

//           {/* Next */}
//           {data.gallery.length > 1 && (
//             <button
//               type="button"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 nextImage();
//               }}
//               aria-label="Next image"
//               className="absolute right-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-xl transition hover:scale-110 hover:bg-brand sm:right-8 sm:h-11 sm:w-11"
//             >
//               <ChevronRight className="h-5 w-5" />
//             </button>
//           )}

//           {/* Popup Card */}
//           <div
//             className="relative mx-auto flex max-h-[95dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-2xl shadow-black/60 sm:rounded-[2rem] md:max-h-[90vh] md:flex-row"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Large Image */}
//             <div className="flex min-h-0 flex-1 items-center justify-center bg-black">
//               <img
//                 key={selected.src}
//                 src={selected.src}
//                 alt={selected.caption}
//                 decoding="async"
//                 className="max-h-[58dvh] w-full object-contain sm:max-h-[68vh] md:max-h-[85vh]"
//               />
//             </div>

//             {/* Information */}
//             <div className="max-h-[34dvh] w-full overflow-y-auto border-t border-white/10 p-4 sm:p-6 md:max-h-none md:w-72 md:border-l md:border-t-0">
//               <div className="flex items-center gap-3">

//                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-gold via-brand to-brand-2 p-[2px]">
//                   <div className="flex h-full w-full items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
//                     {data.hero.name.charAt(0)}
//                   </div>
//                 </div>

//                 <div>
//                   <p className="text-sm font-semibold text-white">
//                     @
//                     {data.hero.badge.includes("@")
//                       ? data.hero.badge.split("@")[1]
//                       : "kirti_rathore0105"}
//                   </p>

//                   <p className="text-[10px] uppercase tracking-wider text-white/35">
//                     Instagram
//                   </p>
//                 </div>
//               </div>

//               <p className="mt-4 text-sm leading-relaxed text-white/75 sm:mt-6">
//                 {selected.caption}
//               </p>

//               <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-white sm:mt-5">
//                 <Heart className="h-4 w-4 fill-brand-2 text-brand-2" />

//                 {selected.likes} likes
//               </div>

//               <div className="mt-4 border-t border-white/10 pt-4 sm:mt-6 sm:pt-5">
//                 <a
//                   href={data.links.instagram}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:brightness-110"
//                 >
//                   <InstagramIcon className="h-4 w-4" />

//                   View Instagram
//                 </a>
//               </div>

//               {/* Counter */}
//               <p className="mt-3 text-center text-[11px] text-white/30 sm:mt-5">
//                 {selectedIndex + 1} / {data.gallery.length}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  X,
} from "lucide-react";

import Reveal from "./Reveal";
import { InstagramIcon } from "./icons";
import { useSite } from "../lib/store";

export default function Gallery() {
  const { data } = useSite();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selected =
    selectedIndex !== null
      ? data.gallery[selectedIndex]
      : null;

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const previousImage = () => {
    if (selectedIndex === null || data.gallery.length === 0) return;

    setSelectedIndex(
      selectedIndex === 0
        ? data.gallery.length - 1
        : selectedIndex - 1
    );
  };

  const nextImage = () => {
    if (selectedIndex === null || data.gallery.length === 0) return;

    setSelectedIndex(
      selectedIndex === data.gallery.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  /* =============================
     Keyboard Controls
  ============================= */
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKey);

    // Stop page scrolling while popup is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden bg-blush py-16 sm:py-24 lg:py-28"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-28 top-10 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

          {/* =============================
              Instagram Header
          ============================== */}
          <Reveal>
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-brand/10 bg-white/90 p-5 text-center shadow-xl shadow-brand/5 backdrop-blur sm:rounded-3xl sm:p-6 sm:flex-row sm:text-left">

              {/* Profile Circle */}
              <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-gradient-to-tr from-gold via-brand to-brand-2 p-[3px] sm:h-16 sm:w-16">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white font-display text-xl font-semibold text-brand sm:text-2xl">
                  {data.hero.name.charAt(0)}
                </div>
              </div>

              {/* Username */}
              <div className="min-w-0 flex-1">
                <p className="flex items-center justify-center gap-1.5 text-base font-semibold text-ink sm:justify-start">
                  @
                  {data.hero.badge.includes("@")
                    ? data.hero.badge.split("@")[1]
                    : "kirti_rathore0105"}
                </p>

                <p className="mt-1 text-sm text-ink/55">
                  Daily vibes, reels & moments — fresh on Instagram ✨
                </p>
              </div>

              {/* Follow Button */}
              <a
                href={data.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full flex-none items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/30 hover:brightness-110 sm:w-auto"
              >
                <InstagramIcon className="h-4 w-4" />
                Follow
              </a>
            </div>
          </Reveal>

          {/* =============================
              Gallery
          ============================== */}

          {data.gallery.length === 0 ? (
            <Reveal>
              <p className="mt-12 rounded-2xl border border-brand/10 bg-white p-10 text-center text-ink/50">
                No gallery posts yet — add them from the admin panel 📸
              </p>
            </Reveal>
          ) : (
            <div className="mt-10 grid grid-cols-2 gap-2.5 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">

              {data.gallery.map((item, i) => (
                <Reveal
                  key={`${item.src}-${i}`}
                  delay={i * 60}
                  className={
                    i === 0 || i === 3
                      ? "lg:col-span-2"
                      : ""
                  }
                >
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(i)}
                    className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl bg-ink text-left shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand/10 sm:rounded-2xl"
                  >
                    {/* Image */}
                    <img
                      src={item.src}
                      alt={item.caption}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:group-hover:scale-110"
                    />

                    {/* Dark Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent opacity-70 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100" />

                    {/* Caption + Likes */}
                    <div className="absolute inset-x-0 bottom-0 p-2.5 opacity-100 transition-all duration-300 sm:translate-y-3 sm:p-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                      {item.likes &&
                        item.likes.trim() !== "0" &&
                        item.likes.trim().toLowerCase() !== "0 likes" && (
                          <p className="flex items-center gap-1 text-[10px] font-semibold text-white sm:gap-1.5 sm:text-xs">
                            <Heart className="h-3.5 w-3.5 fill-brand-2 text-brand-2" />

                            {item.likes} likes
                          </p>
                        )}

                      <p className="mt-1 line-clamp-1 text-[9px] leading-snug text-white/80 sm:mt-1.5 sm:line-clamp-2 sm:text-[11px] sm:text-white/85">
                        {item.caption}
                      </p>
                    </div>

                    {/* Instagram Icon */}
                    <span className="absolute right-2 top-2 hidden h-8 w-8 scale-75 items-center justify-center rounded-full border border-white/15 bg-black/25 text-white opacity-0 shadow-lg backdrop-blur-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 sm:flex sm:right-3 sm:top-3">
                      <InstagramIcon className="h-4 w-4" />
                    </span>

                    {/* Border */}
                    <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 sm:rounded-2xl" />
                  </button>
                </Reveal>
              ))}
            </div>
          )}

          {/* Instagram Footer */}
          <Reveal delay={120}>
            <p className="mt-10 text-center text-sm text-ink/50">
              More reels, stories & daily posts on{" "}

              <a
                href={data.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 transition hover:text-brand-2"
              >
                Instagram
              </a>{" "}

              💌
            </p>
          </Reveal>
        </div>
      </section>

      {/* ==================================
          FULLSCREEN LIGHTBOX
      =================================== */}

      {selected && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-2 backdrop-blur-xl sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image"
            className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-xl transition hover:rotate-90 hover:bg-brand sm:right-5 sm:top-5 sm:h-11 sm:w-11"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Previous */}
          {data.gallery.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-xl transition hover:scale-110 hover:bg-brand sm:left-8 sm:h-11 sm:w-11"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* Next */}
          {data.gallery.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-xl transition hover:scale-110 hover:bg-brand sm:right-8 sm:h-11 sm:w-11"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}

          {/* Popup Card */}
          <div
            className="relative mx-auto flex max-h-[95dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-2xl shadow-black/60 sm:rounded-[2rem] md:max-h-[90vh] md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Large Image */}
            <div className="flex min-h-0 flex-1 items-center justify-center bg-black">
              <img
                key={selected.src}
                src={selected.src}
                alt={selected.caption}
                decoding="async"
                className="max-h-[58dvh] w-full object-contain sm:max-h-[68vh] md:max-h-[85vh]"
              />
            </div>

            {/* Information */}
            <div className="max-h-[34dvh] w-full overflow-y-auto border-t border-white/10 p-4 sm:p-6 md:max-h-none md:w-72 md:border-l md:border-t-0">
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-gold via-brand to-brand-2 p-[2px]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                    {data.hero.name.charAt(0)}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    @
                    {data.hero.badge.includes("@")
                      ? data.hero.badge.split("@")[1]
                      : "kirti_rathore0105"}
                  </p>

                  <p className="text-[10px] uppercase tracking-wider text-white/35">
                    Instagram
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/75 sm:mt-6">
                {selected.caption}
              </p>

              {selected.likes &&
                selected.likes.trim() !== "0" &&
                selected.likes.trim().toLowerCase() !== "0 likes" && (
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-white sm:mt-5">
                    <Heart className="h-4 w-4 fill-brand-2 text-brand-2" />

                    {selected.likes} likes
                  </div>
                )}

              <div className="mt-4 border-t border-white/10 pt-4 sm:mt-6 sm:pt-5">
                <a
                  href={data.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:brightness-110"
                >
                  <InstagramIcon className="h-4 w-4" />

                  View Instagram
                </a>
              </div>

              {/* Counter */}
              <p className="mt-3 text-center text-[11px] text-white/30 sm:mt-5">
                {selectedIndex + 1} / {data.gallery.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}