// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import { InstagramIcon, YoutubeIcon } from "./icons";
// import { NAV_LINKS } from "../data/site";
// import { useSite } from "../lib/store";
// import { cn } from "../utils/cn";

// export default function Navbar() {
//   const { data } = useSite();
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 24);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const name = data.hero.name;

//   return (
//     <header
//       className={cn(
//         "fixed inset-x-0 top-0 z-50 transition-all duration-300",
//         scrolled || open
//           ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
//           : "bg-transparent"
//       )}
//     >
//       <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
//         <a href="#home" className="group flex items-center gap-2">
//           <span className="font-display text-lg font-semibold tracking-tight text-white">
//             {name.split(" ")[0]}
//             <span className="text-brand-2 italic"> {name.split(" ").slice(1).join(" ")}</span>
//           </span>
//           <span className="text-gold transition-transform duration-300 group-hover:rotate-180">
//             ✦
//           </span>
//         </a>

//         <ul className="hidden items-center gap-7 md:flex">
//           {NAV_LINKS.map((link) => (
//             <li key={link.href}>
//               <a
//                 href={link.href}
//                 className="text-sm font-medium text-white/70 transition-colors hover:text-white"
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <div className="hidden items-center gap-3 md:flex">
//           <a
//             href={data.links.instagram}
//             target="_blank"
//             rel="noreferrer"
//             aria-label="Instagram"
//             className="rounded-full border border-white/15 p-2.5 text-white/80 transition-all hover:border-brand hover:bg-brand hover:text-white"
//           >
//             <InstagramIcon className="h-4 w-4" />
//           </a>
//           <a
//             href={data.links.youtube}
//             target="_blank"
//             rel="noreferrer"
//             aria-label="YouTube"
//             className="rounded-full border border-white/15 p-2.5 text-white/80 transition-all hover:border-red-500 hover:bg-red-500 hover:text-white"
//           >
//             <YoutubeIcon className="h-4 w-4" />
//           </a>
//           <a
//             href={data.links.youtube}
//             target="_blank"
//             rel="noreferrer"
//             className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-2"
//           >
//             Subscribe
//           </a>
//         </div>

//         <button
//           className="rounded-lg p-2 text-white md:hidden"
//           onClick={() => setOpen((v) => !v)}
//           aria-label="Toggle menu"
//         >
//           {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </nav>

//       {open && (
//         <div className="border-t border-white/10 bg-ink/95 px-5 pb-6 pt-3 backdrop-blur-xl md:hidden">
//           <ul className="space-y-1">
//             {NAV_LINKS.map((link) => (
//               <li key={link.href}>
//                 <a
//                   href={link.href}
//                   onClick={() => setOpen(false)}
//                   className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
//                 >
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-4 flex gap-3 px-3">
//             <a
//               href={data.links.instagram}
//               target="_blank"
//               rel="noreferrer"
//               className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 py-2.5 text-sm font-medium text-white"
//             >
//               <InstagramIcon className="h-4 w-4" /> Instagram
//             </a>
//             <a
//               href={data.links.youtube}
//               target="_blank"
//               rel="noreferrer"
//               className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand py-2.5 text-sm font-medium text-white"
//             >
//               <YoutubeIcon className="h-4 w-4" /> YouTube
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "./icons";
import { NAV_LINKS } from "../data/site";
import { useSite } from "../lib/store";
import { cn } from "../utils/cn";

export default function Navbar() {
  const { data } = useSite();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // NEW - currently visible section
  const [active, setActive] = useState("home");

  /* =========================
     Navbar scroll effect
  ========================= */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =========================
     Active section observer
  ========================= */
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "section[id]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActive(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const name = data.hero.name;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",

        scrolled || open
          ? "border-b border-white/10 bg-ink/80 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 sm:px-8",

          // Slightly smaller navbar after scrolling
          scrolled ? "h-14" : "h-16"
        )}
      >
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2"
          onClick={() => setActive("home")}
        >
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            {name.split(" ")[0]}

            <span className="italic text-brand-2">
              {" "}
              {name.split(" ").slice(1).join(" ")}
            </span>
          </span>

          <span className="text-gold transition-transform duration-500 group-hover:rotate-180">
            ✦
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = active === sectionId;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActive(sectionId)}
                  className={cn(
                    "relative py-2 text-sm font-medium transition-all duration-300",

                    isActive
                      ? "text-brand-2"
                      : "text-white/65 hover:text-white"
                  )}
                >
                  {link.label}

                  {/* Active underline */}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand to-brand-2 transition-all duration-300",

                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Social Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={data.links.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="rounded-full border border-white/15 p-2.5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-brand/20"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>

          <a
            href={data.links.youtube}
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="rounded-full border border-white/15 p-2.5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/20"
          >
            <YoutubeIcon className="h-4 w-4" />
          </a>

          <a
            href={data.links.youtube}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-to-r from-brand to-brand-2 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/40 hover:brightness-110"
          >
            Subscribe
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-5 pb-6 pt-3 shadow-2xl backdrop-blur-xl md:hidden">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = active === sectionId;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActive(sectionId);
                      setOpen(false);
                    }}
                    className={cn(
                      "block rounded-xl px-3 py-2.5 text-sm font-medium transition-all",

                      isActive
                        ? "bg-brand/15 text-brand-2"
                        : "text-white/75 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Social Buttons */}
          <div className="mt-4 flex gap-3 px-3">
            <a
              href={data.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 py-2.5 text-sm font-medium text-white transition hover:border-brand hover:bg-brand"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>

            <a
              href={data.links.youtube}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 py-2.5 text-sm font-medium text-white shadow-lg shadow-brand/20"
            >
              <YoutubeIcon className="h-4 w-4" />
              YouTube
            </a>
          </div>
        </div>
      )}
    </header>
  );
}