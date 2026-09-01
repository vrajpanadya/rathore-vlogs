// // // import { useEffect, useState } from "react";
// // // import { Database, RefreshCw, ServerCrash } from "lucide-react";
// // // import { SiteProvider, useSite } from "./lib/store";
// // // import Navbar from "./components/Navbar";
// // // import Hero from "./components/Hero";
// // // import Marquee from "./components/Marquee";
// // // import About from "./components/About";
// // // import Videos from "./components/Videos";
// // // import Gallery from "./components/Gallery";
// // // import Pillars from "./components/Pillars";
// // // import Collab from "./components/Collab";
// // // import Footer from "./components/Footer";
// // // import AdminApp from "./admin/AdminApp";
// // // import PhotoShowcase from "./components/PhotoShowcase";

// // // function useHashRoute() {
// // //   const [hash, setHash] = useState(() => window.location.hash);
// // //   useEffect(() => {
// // //     const onHash = () => setHash(window.location.hash);
// // //     window.addEventListener("hashchange", onHash);
// // //     return () => window.removeEventListener("hashchange", onHash);
// // //   }, []);
// // //   return hash;
// // // }

// // // function MainSite() {
// // //   return (
// // //     <div className="bg-ink font-body text-ink">
// // //       <Navbar />
// // //       <main>
// // //         <Hero />
// // //         <Marquee />
// // //         <About />
// // //         <PhotoShowcase />
// // //         <Videos />
// // //         <Gallery />
// // //         <Pillars />
// // //         <Collab />
// // //       </main>
// // //       <Footer />
// // //     </div>
// // //   );
// // // }

// // // function ApplicationRouter({ isAdmin }: { isAdmin: boolean }) {
// // //   const { status, error, apiBase, setApiBase, refresh } = useSite();
// // //   const [url, setUrl] = useState(apiBase);

// // //   if (status === "connecting") {
// // //     return (
// // //       <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ink text-white">
// // //         <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-brand" />
// // //         <p className="text-sm text-white/50">Connecting to MySQL database…</p>
// // //       </div>
// // //     );
// // //   }

// // //   if (status === "offline") {
// // //     return (
// // //       <div className="flex min-h-screen items-center justify-center bg-ink px-5 py-12 text-white">
// // //         <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/40">
// // //           <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/15 text-red-400">
// // //             <ServerCrash className="h-7 w-7" />
// // //           </span>
// // //           <h1 className="mt-5 font-display text-2xl font-semibold">Database connection required</h1>
// // //           <p className="mt-2 text-sm leading-relaxed text-white/50">
// // //             Demo mode is disabled. Start the Express/MySQL server and connect this website to its API.
// // //           </p>
// // //           {error && (
// // //             <p className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-xs text-red-300">
// // //               {error}
// // //             </p>
// // //           )}
// // //           <label className="mt-6 block text-left">
// // //             <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
// // //               Backend API URL
// // //             </span>
// // //             <input
// // //               value={url}
// // //               onChange={(event) => setUrl(event.target.value)}
// // //               placeholder="http://localhost:4000"
// // //               className="w-full rounded-xl border border-white/15 bg-ink/70 px-4 py-3 text-sm text-white outline-none focus:border-brand"
// // //             />
// // //           </label>
// // //           <div className="mt-5 flex flex-wrap justify-center gap-3">
// // //             <button
// // //               onClick={() => setApiBase(url)}
// // //               className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white"
// // //             >
// // //               <Database className="h-4 w-4" /> Save & connect
// // //             </button>
// // //             <button
// // //               onClick={() => void refresh()}
// // //               className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80"
// // //             >
// // //               <RefreshCw className="h-4 w-4" /> Retry
// // //             </button>
// // //           </div>
// // //           <p className="mt-6 text-[11px] leading-relaxed text-white/30">
// // //             Run <span className="font-mono text-gold">server/schema.sql</span>, then{" "}
// // //             <span className="font-mono text-gold">node server/seed.js</span> and{" "}
// // //             <span className="font-mono text-gold">node server/index.js</span>.
// // //           </p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return isAdmin ? <AdminApp /> : <MainSite />;
// // // }

// // // export default function App() {
// // //   const hash = useHashRoute();
// // //   const isAdmin = hash.startsWith("#/admin");

// // //   return (
// // //     <SiteProvider>
// // //       <ApplicationRouter isAdmin={isAdmin} />
// // //     </SiteProvider>
// // //   );
// // // }
// // // import { useEffect, useState } from "react";
// // // import {
// // //   Database,
// // //   RefreshCw,
// // //   ServerCrash,
// // // } from "lucide-react";

// // // import {
// // //   SiteProvider,
// // //   useSite,
// // // } from "./lib/store";

// // // import Navbar from "./components/Navbar";
// // // import Hero from "./components/Hero";
// // // import Marquee from "./components/Marquee";
// // // import About from "./components/About";
// // // import Videos from "./components/Videos";
// // // import Gallery from "./components/Gallery";
// // // import Pillars from "./components/Pillars";
// // // import Collab from "./components/Collab";
// // // import Footer from "./components/Footer";
// // // import AdminApp from "./admin/AdminApp";
// // // import PhotoShowcase from "./components/PhotoShowcase";

// // // /* =========================================================
// // //    HASH ROUTE
// // // ========================================================= */

// // // function useHashRoute() {
// // //   const [hash, setHash] = useState(
// // //     () => window.location.hash
// // //   );

// // //   useEffect(() => {
// // //     const onHash = () =>
// // //       setHash(window.location.hash);

// // //     window.addEventListener(
// // //       "hashchange",
// // //       onHash
// // //     );

// // //     return () =>
// // //       window.removeEventListener(
// // //         "hashchange",
// // //         onHash
// // //       );
// // //   }, []);

// // //   return hash;
// // // }

// // // /* =========================================================
// // //    MAIN WEBSITE
// // // ========================================================= */

// // // function MainSite() {
// // //   return (
// // //     <div className="bg-ink font-body text-ink">
// // //       <Navbar />

// // //       <main>
// // //         <Hero />
// // //         <Marquee />
// // //         <About />
// // //         <PhotoShowcase />
// // //         <Videos />
// // //         <Gallery />
// // //         <Pillars />
// // //         <Collab />
// // //       </main>

// // //       <Footer />
// // //     </div>
// // //   );
// // // }

// // // /* =========================================================
// // //    APPLICATION ROUTER
// // // ========================================================= */

// // // function ApplicationRouter({
// // //   isAdmin,
// // // }: {
// // //   isAdmin: boolean;
// // // }) {
// // //   const {
// // //     status,
// // //     error,
// // //     apiBase,
// // //     setApiBase,
// // //     refresh,
// // //   } = useSite();

// // //   const [url, setUrl] =
// // //     useState(apiBase);

// // //   /* =======================================================
// // //      CONNECTING SCREEN
// // //   ======================================================= */

// // //   if (status === "connecting") {
// // //     return (
// // //       <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-ink text-white">

// // //         {/* Spinner */}

// // //         <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-brand" />

// // //         {/* Brand Name */}

// // //         <div className="flex items-center gap-2">
// // //           <span className="font-display text-3xl font-semibold text-white">
// // //             Kirti{" "}
// // //             <span className="italic text-brand-2">
// // //               Rathore
// // //             </span>
// // //           </span>

// // //           <span className="text-xl text-gold">
// // //             ✦
// // //           </span>
// // //         </div>

// // //       </div>
// // //     );
// // //   }

// // //   /* =======================================================
// // //      DATABASE OFFLINE
// // //   ======================================================= */

// // //   if (status === "offline") {
// // //     return (
// // //       <div className="flex min-h-screen items-center justify-center bg-ink px-5 py-12 text-white">

// // //         <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/40">

// // //           <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/15 text-red-400">
// // //             <ServerCrash className="h-7 w-7" />
// // //           </span>

// // //           <h1 className="mt-5 font-display text-2xl font-semibold">
// // //             Database connection required
// // //           </h1>

// // //           <p className="mt-2 text-sm leading-relaxed text-white/50">
// // //             Demo mode is disabled. Start the
// // //             Express/MySQL server and connect this
// // //             website to its API.
// // //           </p>

// // //           {error && (
// // //             <p className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-xs text-red-300">
// // //               {error}
// // //             </p>
// // //           )}

// // //           <label className="mt-6 block text-left">

// // //             <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
// // //               Backend API URL
// // //             </span>

// // //             <input
// // //               value={url}
// // //               onChange={(event) =>
// // //                 setUrl(event.target.value)
// // //               }
// // //               placeholder="http://localhost:4000"
// // //               className="w-full rounded-xl border border-white/15 bg-ink/70 px-4 py-3 text-sm text-white outline-none focus:border-brand"
// // //             />

// // //           </label>

// // //           <div className="mt-5 flex flex-wrap justify-center gap-3">

// // //             <button
// // //               type="button"
// // //               onClick={() =>
// // //                 setApiBase(url)
// // //               }
// // //               className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white"
// // //             >
// // //               <Database className="h-4 w-4" />
// // //               Save & connect
// // //             </button>

// // //             <button
// // //               type="button"
// // //               onClick={() =>
// // //                 void refresh()
// // //               }
// // //               className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80"
// // //             >
// // //               <RefreshCw className="h-4 w-4" />
// // //               Retry
// // //             </button>

// // //           </div>

// // //           <p className="mt-6 text-[11px] leading-relaxed text-white/30">

// // //             Run{" "}

// // //             <span className="font-mono text-gold">
// // //               server/schema.sql
// // //             </span>

// // //             , then{" "}

// // //             <span className="font-mono text-gold">
// // //               node server/seed.js
// // //             </span>

// // //             {" "}and{" "}

// // //             <span className="font-mono text-gold">
// // //               node server/index.js
// // //             </span>.

// // //           </p>

// // //         </div>

// // //       </div>
// // //     );
// // //   }

// // //   /* =======================================================
// // //      WEBSITE / ADMIN
// // //   ======================================================= */

// // //   return isAdmin
// // //     ? <AdminApp />
// // //     : <MainSite />;
// // // }

// // // /* =========================================================
// // //    APP
// // // ========================================================= */

// // // export default function App() {
// // //   const hash =
// // //     useHashRoute();

// // //   const isAdmin =
// // //     hash.startsWith(
// // //       "#/admin"
// // //     );

// // //   return (
// // //     <SiteProvider>
// // //       <ApplicationRouter
// // //         isAdmin={isAdmin}
// // //       />
// // //     </SiteProvider>
// // //   );
// // // }
// // // 
// // import { useEffect, useState } from "react";
// // import {
// //   Database,
// //   RefreshCw,
// //   ServerCrash,
// // } from "lucide-react";

// // import {
// //   SiteProvider,
// //   useSite,
// // } from "./lib/store";

// // import Navbar from "./components/Navbar";
// // import Hero from "./components/Hero";
// // import Marquee from "./components/Marquee";
// // import About from "./components/About";
// // import Videos from "./components/Videos";
// // import Gallery from "./components/Gallery";
// // import Pillars from "./components/Pillars";
// // import Collab from "./components/Collab";
// // import Footer from "./components/Footer";
// // import AdminApp from "./admin/AdminApp";
// // import PhotoShowcase from "./components/PhotoShowcase";

// // /* =========================================================
// //    HASH ROUTE
// // ========================================================= */

// // function useHashRoute() {
// //   const [hash, setHash] = useState(
// //     () => window.location.hash
// //   );

// //   useEffect(() => {
// //     const onHash = () =>
// //       setHash(window.location.hash);

// //     window.addEventListener(
// //       "hashchange",
// //       onHash
// //     );

// //     return () =>
// //       window.removeEventListener(
// //         "hashchange",
// //         onHash
// //       );
// //   }, []);

// //   return hash;
// // }

// // /* =========================================================
// //    MAIN WEBSITE
// // ========================================================= */

// // function MainSite() {
// //   return (
// //     <div className="bg-ink font-body text-ink">
// //       <Navbar />

// //       <main>
// //         <Hero />
// //         <Marquee />
// //         <About />
// //         <PhotoShowcase />
// //         <Videos />
// //         <Gallery />
// //         <Pillars />
// //         <Collab />
// //       </main>

// //       <Footer />
// //     </div>
// //   );
// // }

// // /* =========================================================
// //    APPLICATION ROUTER
// // ========================================================= */

// // function ApplicationRouter({
// //   isAdmin,
// // }: {
// //   isAdmin: boolean;
// // }) {
// //   const {
// //     status,
// //     error,
// //     apiBase,
// //     setApiBase,
// //     refresh,
// //   } = useSite();

// //   const [url, setUrl] =
// //     useState(apiBase);

// //   /* =======================================================
// //      CONNECTING SCREEN
// //   ======================================================= */

// //   if (status === "connecting") {
// //     return (
// //       <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink text-white">

// //         {/* Animation CSS */}

// //         <style>
// //           {`
// //             @keyframes loaderFadeIn {
// //               0% {
// //                 opacity: 0;
// //                 transform: translateY(28px) scale(0.92);
// //               }

// //               100% {
// //                 opacity: 1;
// //                 transform: translateY(0) scale(1);
// //               }
// //             }

// //             @keyframes loaderGlow {
// //               0%, 100% {
// //                 filter: drop-shadow(
// //                   0 0 0 rgba(255, 92, 148, 0)
// //                 );
// //               }

// //               50% {
// //                 filter: drop-shadow(
// //                   0 0 16px rgba(255, 92, 148, 0.45)
// //                 );
// //               }
// //             }

// //             @keyframes starFloat {
// //               0%, 100% {
// //                 transform: translateY(0) rotate(0deg) scale(1);
// //                 opacity: 1;
// //               }

// //               50% {
// //                 transform: translateY(-7px) rotate(12deg) scale(1.18);
// //                 opacity: 0.8;
// //               }
// //             }

// //             @keyframes loaderPulse {
// //               0%, 100% {
// //                 transform: scale(1);
// //               }

// //               50% {
// //                 transform: scale(1.08);
// //               }
// //             }

// //             @keyframes backgroundGlow {
// //               0%, 100% {
// //                 opacity: 0.25;
// //                 transform: scale(1);
// //               }

// //               50% {
// //                 opacity: 0.45;
// //                 transform: scale(1.12);
// //               }
// //             }
// //           `}
// //         </style>

// //         {/* Background Glow */}

// //         <div
// //           className="pointer-events-none absolute h-72 w-72 rounded-full bg-brand/20 blur-[110px]"
// //           style={{
// //             animation:
// //               "backgroundGlow 3s ease-in-out infinite",
// //           }}
// //         />

// //         {/* Loader Content */}

// //         <div
// //           className="relative z-10 flex flex-col items-center"
// //           style={{
// //             animation:
// //               "loaderFadeIn 0.8s ease-out both",
// //           }}
// //         >

// //           {/* Spinner */}

// //           <div
// //             className="mb-8"
// //             style={{
// //               animation:
// //                 "loaderPulse 2s ease-in-out infinite",
// //             }}
// //           >
// //             <span className="block h-12 w-12 animate-spin rounded-full border-[3px] border-white/15 border-r-brand border-t-brand-2" />
// //           </div>

// //           {/* Brand */}

// //           <div className="flex items-center gap-3">

// //             <span
// //               className="font-display text-4xl font-semibold text-white sm:text-5xl"
// //               style={{
// //                 animation:
// //                   "loaderGlow 2.4s ease-in-out infinite",
// //               }}
// //             >
// //               Kirti{" "}

// //               <span className="italic text-brand-2">
// //                 Rathore
// //               </span>
// //             </span>

// //             <span
// //               className="text-2xl text-gold sm:text-3xl"
// //               style={{
// //                 animation:
// //                   "starFloat 1.8s ease-in-out infinite",
// //               }}
// //             >
// //               ✦
// //             </span>

// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   /* =======================================================
// //      DATABASE OFFLINE
// //   ======================================================= */

// //   if (status === "offline") {
// //     return (
// //       <div className="flex min-h-screen items-center justify-center bg-ink px-5 py-12 text-white">

// //         <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/40">

// //           <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/15 text-red-400">
// //             <ServerCrash className="h-7 w-7" />
// //           </span>

// //           <h1 className="mt-5 font-display text-2xl font-semibold">
// //             Database connection required
// //           </h1>

// //           <p className="mt-2 text-sm leading-relaxed text-white/50">
// //             Demo mode is disabled. Start the
// //             Express/MySQL server and connect this
// //             website to its API.
// //           </p>

// //           {error && (
// //             <p className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-xs text-red-300">
// //               {error}
// //             </p>
// //           )}

// //           <label className="mt-6 block text-left">

// //             <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
// //               Backend API URL
// //             </span>

// //             <input
// //               value={url}
// //               onChange={(event) =>
// //                 setUrl(event.target.value)
// //               }
// //               placeholder="http://localhost:4000"
// //               className="w-full rounded-xl border border-white/15 bg-ink/70 px-4 py-3 text-sm text-white outline-none focus:border-brand"
// //             />

// //           </label>

// //           <div className="mt-5 flex flex-wrap justify-center gap-3">

// //             <button
// //               type="button"
// //               onClick={() =>
// //                 setApiBase(url)
// //               }
// //               className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white"
// //             >
// //               <Database className="h-4 w-4" />
// //               Save & connect
// //             </button>

// //             <button
// //               type="button"
// //               onClick={() =>
// //                 void refresh()
// //               }
// //               className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80"
// //             >
// //               <RefreshCw className="h-4 w-4" />
// //               Retry
// //             </button>

// //           </div>

// //           <p className="mt-6 text-[11px] leading-relaxed text-white/30">

// //             Run{" "}

// //             <span className="font-mono text-gold">
// //               server/schema.sql
// //             </span>

// //             , then{" "}

// //             <span className="font-mono text-gold">
// //               node server/seed.js
// //             </span>

// //             {" "}and{" "}

// //             <span className="font-mono text-gold">
// //               node server/index.js
// //             </span>.

// //           </p>

// //         </div>
// //       </div>
// //     );
// //   }

// //   /* =======================================================
// //      WEBSITE / ADMIN
// //   ======================================================= */

// //   return isAdmin
// //     ? <AdminApp />
// //     : <MainSite />;
// // }

// // /* =========================================================
// //    APP
// // ========================================================= */

// // export default function App() {
// //   const hash =
// //     useHashRoute();

// //   const isAdmin =
// //     hash.startsWith(
// //       "#/rathore-vlogs"
// //     );

// //   return (
// //     <SiteProvider>
// //       <ApplicationRouter
// //         isAdmin={isAdmin}
// //       />
// //     </SiteProvider>
// //   );
// // }
// import {
//   useEffect,
//   useState,
// } from "react";

// import {
//   Database,
//   RefreshCw,
//   ServerCrash,
// } from "lucide-react";

// import {
//   SiteProvider,
//   useSite,
// } from "./lib/store";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Marquee from "./components/Marquee";
// import About from "./components/About";
// import Videos from "./components/Videos";
// import Gallery from "./components/Gallery";
// import Pillars from "./components/Pillars";
// import Collab from "./components/Collab";
// import Footer from "./components/Footer";
// import AdminApp from "./admin/AdminApp";
// import PhotoShowcase from "./components/PhotoShowcase";

// /* =========================================================
//    HASH ROUTE
// ========================================================= */

// function useHashRoute() {
//   const [hash, setHash] =
//     useState(
//       () =>
//         window.location.hash
//     );

//   useEffect(() => {
//     const onHash = () =>
//       setHash(
//         window.location.hash
//       );

//     window.addEventListener(
//       "hashchange",
//       onHash
//     );

//     return () =>
//       window.removeEventListener(
//         "hashchange",
//         onHash
//       );
//   }, []);

//   return hash;
// }

// /* =========================================================
//    MAIN WEBSITE
// ========================================================= */

// function MainSite() {
//   return (
//     <div className="bg-ink font-body text-ink">
//       <Navbar />

//       <main>
//         <Hero />
//         <Marquee />
//         <About />
//         <PhotoShowcase />
//         <Videos />
//         <Gallery />
//         <Pillars />
//         <Collab />
//       </main>

//       <Footer />
//     </div>
//   );
// }

// /* =========================================================
//    APPLICATION ROUTER
// ========================================================= */

// function ApplicationRouter({
//   isAdmin,
// }: {
//   isAdmin: boolean;
// }) {
//   const {
//     status,
//     error,
//     apiBase,
//     setApiBase,
//     refresh,
//   } = useSite();

//   const [url, setUrl] =
//     useState(apiBase);

//   /* =======================================================
//      FORCE INTRO FOR MINIMUM 2 SECONDS
//   ======================================================= */

//   const [
//     showIntro,
//     setShowIntro,
//   ] = useState(true);

//   useEffect(() => {
//     const timer =
//       window.setTimeout(
//         () => {
//           setShowIntro(false);
//         },
//         2000
//       );

//     return () =>
//       window.clearTimeout(
//         timer
//       );
//   }, []);

//   /* =======================================================
//      2 SECOND INTRO / CONNECTING SCREEN
//   ======================================================= */

//   if (
//     showIntro ||
//     status === "connecting"
//   ) {
//     return (
//       <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink px-5 text-white">

//         {/* ================= ANIMATION CSS ================= */}

//         <style>
//           {`
//             @keyframes introContainer {
//               0% {
//                 opacity: 0;
//                 transform: scale(0.92);
//               }

//               15% {
//                 opacity: 1;
//                 transform: scale(1);
//               }

//               85% {
//                 opacity: 1;
//                 transform: scale(1);
//               }

//               100% {
//                 opacity: 1;
//                 transform: scale(1);
//               }
//             }

//             @keyframes ringSpin {
//               from {
//                 transform: rotate(0deg);
//               }

//               to {
//                 transform: rotate(360deg);
//               }
//             }

//             @keyframes ringSpinReverse {
//               from {
//                 transform: rotate(360deg);
//               }

//               to {
//                 transform: rotate(0deg);
//               }
//             }

//             @keyframes logoPulse {
//               0%, 100% {
//                 transform: scale(0.75);
//                 opacity: 0.5;
//                 box-shadow:
//                   0 0 8px
//                   rgba(255, 70, 140, 0.3);
//               }

//               50% {
//                 transform: scale(1.2);
//                 opacity: 1;
//                 box-shadow:
//                   0 0 18px
//                   rgba(255, 70, 140, 0.9),
//                   0 0 40px
//                   rgba(255, 70, 140, 0.45);
//               }
//             }

//             @keyframes nameReveal {
//               0% {
//                 opacity: 0;
//                 transform:
//                   translateY(20px)
//                   scale(0.94);
//                 filter: blur(8px);
//               }

//               45% {
//                 opacity: 1;
//                 transform:
//                   translateY(0)
//                   scale(1);
//                 filter: blur(0);
//               }

//               100% {
//                 opacity: 1;
//                 transform:
//                   translateY(0)
//                   scale(1);
//                 filter: blur(0);
//               }
//             }

//             @keyframes rathoreGlow {
//               0%, 100% {
//                 text-shadow:
//                   0 0 0
//                   rgba(255, 80, 145, 0);
//               }

//               50% {
//                 text-shadow:
//                   0 0 12px
//                   rgba(255, 80, 145, 0.65),
//                   0 0 28px
//                   rgba(255, 80, 145, 0.35);
//               }
//             }

//             @keyframes starAnimation {
//               0%, 100% {
//                 transform:
//                   translateY(0)
//                   rotate(0deg)
//                   scale(1);
//                 opacity: 1;
//               }

//               50% {
//                 transform:
//                   translateY(-7px)
//                   rotate(20deg)
//                   scale(1.25);
//                 opacity: 0.8;
//               }
//             }

//             @keyframes backgroundPulse {
//               0%, 100% {
//                 transform: scale(0.9);
//                 opacity: 0.2;
//               }

//               50% {
//                 transform: scale(1.18);
//                 opacity: 0.5;
//               }
//             }

//             @keyframes loadingProgress {
//               0% {
//                 left: -50%;
//               }

//               100% {
//                 left: 110%;
//               }
//             }

//             @keyframes subtitleReveal {
//               0% {
//                 opacity: 0;
//                 transform:
//                   translateY(10px);
//               }

//               100% {
//                 opacity: 1;
//                 transform:
//                   translateY(0);
//               }
//             }

//             @keyframes particleFloat {
//               0%, 100% {
//                 transform:
//                   translateY(0);
//                 opacity: 0.2;
//               }

//               50% {
//                 transform:
//                   translateY(-20px);
//                 opacity: 0.8;
//               }
//             }
//           `}
//         </style>

//         {/* ================= BACKGROUND ================= */}

//         <div className="pointer-events-none absolute inset-0">

//           <div
//             className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[110px]"
//             style={{
//               animation:
//                 "backgroundPulse 2s ease-in-out infinite",
//             }}
//           />

//           <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-2/10 blur-[100px]" />

//           <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-plum-2/40 blur-[100px]" />

//           {/* Particles */}

//           <span
//             className="absolute left-[20%] top-[30%] h-1.5 w-1.5 rounded-full bg-brand-2"
//             style={{
//               animation:
//                 "particleFloat 1.7s ease-in-out infinite",
//             }}
//           />

//           <span
//             className="absolute right-[20%] top-[35%] h-1.5 w-1.5 rounded-full bg-gold"
//             style={{
//               animation:
//                 "particleFloat 2s ease-in-out infinite 0.3s",
//             }}
//           />

//           <span
//             className="absolute bottom-[28%] left-[28%] h-1 w-1 rounded-full bg-white"
//             style={{
//               animation:
//                 "particleFloat 1.8s ease-in-out infinite 0.5s",
//             }}
//           />

//         </div>

//         {/* ================= MAIN CONTENT ================= */}

//         <div
//           className="relative z-10 flex w-full flex-col items-center"
//           style={{
//             animation:
//               "introContainer 2s ease-out both",
//           }}
//         >

//           {/* ================= LOADER ================= */}

//           <div className="relative mb-9 flex h-24 w-24 items-center justify-center">

//             {/* Outer Ring */}

//             <div
//               className="absolute inset-0 rounded-full border-2 border-white/10 border-t-brand-2"
//               style={{
//                 animation:
//                   "ringSpin 1.2s linear infinite",
//               }}
//             />

//             {/* Middle Ring */}

//             <div
//               className="absolute inset-[11px] rounded-full border-2 border-transparent border-b-brand border-l-brand/60"
//               style={{
//                 animation:
//                   "ringSpinReverse 0.9s linear infinite",
//               }}
//             />

//             {/* Inner Ring */}

//             <div
//               className="absolute inset-[24px] rounded-full border border-white/10 border-r-gold"
//               style={{
//                 animation:
//                   "ringSpin 0.7s linear infinite",
//               }}
//             />

//             {/* Center */}

//             <div
//               className="h-3.5 w-3.5 rounded-full bg-brand-2"
//               style={{
//                 animation:
//                   "logoPulse 1s ease-in-out infinite",
//               }}
//             />

//           </div>

//           {/* ================= NAME ================= */}

//           <div
//             className="flex items-center justify-center gap-2.5"
//             style={{
//               animation:
//                 "nameReveal 1.2s ease-out both",
//             }}
//           >

//             <h1 className="whitespace-nowrap font-display text-[2.55rem] font-semibold leading-none text-white sm:text-5xl">

//               Kirti{" "}

//               <span
//                 className="italic text-brand-2"
//                 style={{
//                   animation:
//                     "rathoreGlow 1.5s ease-in-out infinite",
//                 }}
//               >
//                 Rathore
//               </span>

//             </h1>

//             <span
//               className="text-2xl text-gold sm:text-3xl"
//               style={{
//                 animation:
//                   "starAnimation 1s ease-in-out infinite",
//               }}
//             >
//               ✦
//             </span>

//           </div>

//           {/* ================= SUBTITLE ================= */}

//           <p
//             className="mt-4 text-center text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30 sm:text-[10px]"
//             style={{
//               animation:
//                 "subtitleReveal 0.8s 0.45s ease-out both",
//             }}
//           >
//             Creator • Vlogger • Storyteller
//           </p>

//           {/* ================= PROGRESS ================= */}

//           <div className="relative mt-7 h-[2px] w-44 overflow-hidden rounded-full bg-white/10">

//             <span
//               className="absolute top-0 h-full w-16 rounded-full bg-gradient-to-r from-transparent via-brand-2 to-transparent"
//               style={{
//                 animation:
//                   "loadingProgress 1.1s ease-in-out infinite",
//               }}
//             />

//           </div>

//           <p
//             className="mt-3 text-[8px] uppercase tracking-[0.3em] text-white/20"
//             style={{
//               animation:
//                 "subtitleReveal 0.8s 0.65s ease-out both",
//             }}
//           >
//             Loading
//           </p>

//         </div>
//       </div>
//     );
//   }

//   /* =======================================================
//      DATABASE OFFLINE
//   ======================================================= */

//   if (
//     status === "offline"
//   ) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-ink px-5 py-12 text-white">

//         <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/40">

//           <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/15 text-red-400">
//             <ServerCrash className="h-7 w-7" />
//           </span>

//           <h1 className="mt-5 font-display text-2xl font-semibold">
//             Database connection required
//           </h1>

//           <p className="mt-2 text-sm leading-relaxed text-white/50">
//             Demo mode is disabled. Start the
//             Express/MySQL server and connect this
//             website to its API.
//           </p>

//           {error && (
//             <p className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-xs text-red-300">
//               {error}
//             </p>
//           )}

//           <label className="mt-6 block text-left">

//             <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
//               Backend API URL
//             </span>

//             <input
//               value={url}
//               onChange={(
//                 event
//               ) =>
//                 setUrl(
//                   event.target.value
//                 )
//               }
//               placeholder="http://localhost:4000"
//               className="w-full rounded-xl border border-white/15 bg-ink/70 px-4 py-3 text-sm text-white outline-none focus:border-brand"
//             />

//           </label>

//           <div className="mt-5 flex flex-wrap justify-center gap-3">

//             <button
//               type="button"
//               onClick={() =>
//                 setApiBase(
//                   url
//                 )
//               }
//               className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white"
//             >
//               <Database className="h-4 w-4" />

//               Save & connect
//             </button>

//             <button
//               type="button"
//               onClick={() =>
//                 void refresh()
//               }
//               className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80"
//             >
//               <RefreshCw className="h-4 w-4" />

//               Retry
//             </button>

//           </div>

//           <p className="mt-6 text-[11px] leading-relaxed text-white/30">

//             Run{" "}

//             <span className="font-mono text-gold">
//               server/schema.sql
//             </span>

//             , then{" "}

//             <span className="font-mono text-gold">
//               node server/seed.js
//             </span>

//             {" "}and{" "}

//             <span className="font-mono text-gold">
//               node server/index.js
//             </span>.

//           </p>

//         </div>
//       </div>
//     );
//   }

//   /* =======================================================
//      WEBSITE / ADMIN
//   ======================================================= */

//   return isAdmin
//     ? <AdminApp />
//     : <MainSite />;
// }

// /* =========================================================
//    APP
// ========================================================= */

// export default function App() {
//   const hash =
//     useHashRoute();

//   const isAdmin =
//     hash.startsWith(
//       "#/rathore-vlogs"
//     );

//   return (
//     <SiteProvider>
//       <ApplicationRouter
//         isAdmin={
//           isAdmin
//         }
//       />
//     </SiteProvider>
//   );
// }
import {
  useEffect,
  useState,
} from "react";

import {
  Database,
  RefreshCw,
  ServerCrash,
} from "lucide-react";

import {
  SiteProvider,
  useSite,
} from "./lib/store";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Videos from "./components/Videos";
import Gallery from "./components/Gallery";
import Pillars from "./components/Pillars";
import Collab from "./components/Collab";
import Footer from "./components/Footer";
import AdminApp from "./admin/AdminApp";
import PhotoShowcase from "./components/PhotoShowcase";

/* =========================================================
   HASH ROUTE
========================================================= */

function useHashRoute() {
  const [hash, setHash] =
    useState(
      () =>
        window.location.hash
    );

  useEffect(() => {
    const onHash = () =>
      setHash(
        window.location.hash
      );

    window.addEventListener(
      "hashchange",
      onHash
    );

    return () =>
      window.removeEventListener(
        "hashchange",
        onHash
      );
  }, []);

  return hash;
}

/* =========================================================
   MAIN WEBSITE
========================================================= */

function MainSite() {
  return (
    <div className="bg-ink font-body text-ink">
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <PhotoShowcase />
        <Videos />
        <Gallery />
        <Pillars />
        <Collab />
      </main>

      <Footer />
    </div>
  );
}

/* =========================================================
   APPLICATION ROUTER
========================================================= */

function ApplicationRouter({
  isAdmin,
}: {
  isAdmin: boolean;
}) {
  const {
    status,
    error,
    apiBase,
    setApiBase,
    refresh,
  } = useSite();

  const [url, setUrl] =
    useState(apiBase);

  /* =======================================================
     FORCE INTRO FOR MINIMUM 2 SECONDS
  ======================================================= */

  const [
    showIntro,
    setShowIntro,
  ] = useState(true);

  useEffect(() => {
    const timer =
      window.setTimeout(
        () => {
          setShowIntro(false);
        },
        500
      );

    return () =>
      window.clearTimeout(
        timer
      );
  }, []);

  /* =======================================================
     2 SECOND INTRO / CONNECTING SCREEN
  ======================================================= */

  if (
  showIntro
) {
    return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink px-5 text-white">

        {/* ================= ANIMATION CSS ================= */}

        <style>
          {`
            @keyframes introContainer {
              0% {
                opacity: 0;
                transform: scale(0.92);
              }

              15% {
                opacity: 1;
                transform: scale(1);
              }

              85% {
                opacity: 1;
                transform: scale(1);
              }

              100% {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes nameReveal {
              0% {
                opacity: 0;
                transform:
                  translateY(20px)
                  scale(0.94);
                filter: blur(8px);
              }

              45% {
                opacity: 1;
                transform:
                  translateY(0)
                  scale(1);
                filter: blur(0);
              }

              100% {
                opacity: 1;
                transform:
                  translateY(0)
                  scale(1);
                filter: blur(0);
              }
            }

            @keyframes rathoreGlow {
              0%, 100% {
                text-shadow:
                  0 0 0
                  rgba(255, 80, 145, 0);
              }

              50% {
                text-shadow:
                  0 0 12px
                  rgba(255, 80, 145, 0.65),
                  0 0 28px
                  rgba(255, 80, 145, 0.35);
              }
            }

            @keyframes starAnimation {
              0%, 100% {
                transform:
                  translateY(0)
                  rotate(0deg)
                  scale(1);
                opacity: 1;
              }

              50% {
                transform:
                  translateY(-7px)
                  rotate(20deg)
                  scale(1.25);
                opacity: 0.8;
              }
            }

            @keyframes backgroundPulse {
              0%, 100% {
                transform: scale(0.9);
                opacity: 0.2;
              }

              50% {
                transform: scale(1.18);
                opacity: 0.5;
              }
            }

            @keyframes loadingProgress {
              0% {
                left: -50%;
              }

              100% {
                left: 110%;
              }
            }

            @keyframes subtitleReveal {
              0% {
                opacity: 0;
                transform:
                  translateY(10px);
              }

              100% {
                opacity: 1;
                transform:
                  translateY(0);
              }
            }

            @keyframes particleFloat {
              0%, 100% {
                transform:
                  translateY(0);
                opacity: 0.2;
              }

              50% {
                transform:
                  translateY(-20px);
                opacity: 0.8;
              }
            }
          `}
        </style>

        {/* ================= BACKGROUND ================= */}

        <div className="pointer-events-none absolute inset-0">

          <div
            className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[110px]"
            style={{
              animation:
                "backgroundPulse 2s ease-in-out infinite",
            }}
          />

          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-2/10 blur-[100px]" />

          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-plum-2/40 blur-[100px]" />

          {/* Particles */}

          <span
            className="absolute left-[20%] top-[30%] h-1.5 w-1.5 rounded-full bg-brand-2"
            style={{
              animation:
                "particleFloat 1.7s ease-in-out infinite",
            }}
          />

          <span
            className="absolute right-[20%] top-[35%] h-1.5 w-1.5 rounded-full bg-gold"
            style={{
              animation:
                "particleFloat 2s ease-in-out infinite 0.3s",
            }}
          />

          <span
            className="absolute bottom-[28%] left-[28%] h-1 w-1 rounded-full bg-white"
            style={{
              animation:
                "particleFloat 1.8s ease-in-out infinite 0.5s",
            }}
          />

        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div
          className="relative z-10 flex w-full flex-col items-center"
          style={{
            animation:
              "introContainer 2s ease-out both",
          }}
        >

          {/* ================= NAME ================= */}

          <div
            className="flex items-center justify-center gap-2.5"
            style={{
              animation:
                "nameReveal 1.2s ease-out both",
            }}
          >

            <h1 className="whitespace-nowrap font-display text-[2.55rem] font-semibold leading-none text-white sm:text-5xl">

              Kirti{" "}

              <span
                className="italic text-brand-2"
                style={{
                  animation:
                    "rathoreGlow 1.5s ease-in-out infinite",
                }}
              >
                Rathore
              </span>

            </h1>

            <span
              className="text-2xl text-gold sm:text-3xl"
              style={{
                animation:
                  "starAnimation 1s ease-in-out infinite",
              }}
            >
              ✦
            </span>

          </div>

          {/* ================= SUBTITLE ================= */}

          <p
            className="mt-4 text-center text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30 sm:text-[10px]"
            style={{
              animation:
                "subtitleReveal 0.8s 0.45s ease-out both",
            }}
          >
            Creator • Vlogger • Storyteller
          </p>

          {/* ================= PROGRESS ================= */}

          <div className="relative mt-7 h-[2px] w-44 overflow-hidden rounded-full bg-white/10">

            <span
              className="absolute top-0 h-full w-16 rounded-full bg-gradient-to-r from-transparent via-brand-2 to-transparent"
              style={{
                animation:
                  "loadingProgress 1.1s ease-in-out infinite",
              }}
            />

          </div>

          <p
            className="mt-3 text-[8px] uppercase tracking-[0.3em] text-white/20"
            style={{
              animation:
                "subtitleReveal 0.8s 0.65s ease-out both",
            }}
          >
            Loading
          </p>

        </div>
      </div>
    );
  }

  /* =======================================================
     DATABASE OFFLINE
  ======================================================= */

  if (
    status === "offline"
  ) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ink px-5 py-12 text-white">

        <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/40">

          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/15 text-red-400">
            <ServerCrash className="h-7 w-7" />
          </span>

          <h1 className="mt-5 font-display text-2xl font-semibold">
            Database connection required
          </h1>

          <p className="mt-2 text-sm leading-relaxed text-white/50">
            Demo mode is disabled. Start the
            Express/MySQL server and connect this
            website to its API.
          </p>

          {error && (
            <p className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-xs text-red-300">
              {error}
            </p>
          )}

          <label className="mt-6 block text-left">

            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
              Backend API URL
            </span>

            <input
              value={url}
              onChange={(
                event
              ) =>
                setUrl(
                  event.target.value
                )
              }
              placeholder="http://localhost:4000"
              className="w-full rounded-xl border border-white/15 bg-ink/70 px-4 py-3 text-sm text-white outline-none focus:border-brand"
            />

          </label>

          <div className="mt-5 flex flex-wrap justify-center gap-3">

            <button
              type="button"
              onClick={() =>
                setApiBase(
                  url
                )
              }
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white"
            >
              <Database className="h-4 w-4" />

              Save & connect
            </button>

            <button
              type="button"
              onClick={() =>
                void refresh()
              }
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80"
            >
              <RefreshCw className="h-4 w-4" />

              Retry
            </button>

          </div>

          <p className="mt-6 text-[11px] leading-relaxed text-white/30">

            Run{" "}

            <span className="font-mono text-gold">
              server/schema.sql
            </span>

            , then{" "}

            <span className="font-mono text-gold">
              node server/seed.js
            </span>

            {" "}and{" "}

            <span className="font-mono text-gold">
              node server/index.js
            </span>.

          </p>

        </div>
      </div>
    );
  }

  /* =======================================================
     WEBSITE / ADMIN
  ======================================================= */

  return isAdmin
    ? <AdminApp />
    : <MainSite />;
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  const hash =
    useHashRoute();

  const isAdmin =
    hash.startsWith(
      "#/rathore-vlogs"
    );

  return (
    <SiteProvider>
      <ApplicationRouter
        isAdmin={
          isAdmin
        }
      />
    </SiteProvider>
  );
}