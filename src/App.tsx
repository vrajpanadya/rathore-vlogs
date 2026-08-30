// import { useEffect, useState } from "react";
// import { Database, RefreshCw, ServerCrash } from "lucide-react";
// import { SiteProvider, useSite } from "./lib/store";
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

// function useHashRoute() {
//   const [hash, setHash] = useState(() => window.location.hash);
//   useEffect(() => {
//     const onHash = () => setHash(window.location.hash);
//     window.addEventListener("hashchange", onHash);
//     return () => window.removeEventListener("hashchange", onHash);
//   }, []);
//   return hash;
// }

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

// function ApplicationRouter({ isAdmin }: { isAdmin: boolean }) {
//   const { status, error, apiBase, setApiBase, refresh } = useSite();
//   const [url, setUrl] = useState(apiBase);

//   if (status === "connecting") {
//     return (
//       <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ink text-white">
//         <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-brand" />
//         <p className="text-sm text-white/50">Connecting to MySQL database…</p>
//       </div>
//     );
//   }

//   if (status === "offline") {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-ink px-5 py-12 text-white">
//         <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/40">
//           <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/15 text-red-400">
//             <ServerCrash className="h-7 w-7" />
//           </span>
//           <h1 className="mt-5 font-display text-2xl font-semibold">Database connection required</h1>
//           <p className="mt-2 text-sm leading-relaxed text-white/50">
//             Demo mode is disabled. Start the Express/MySQL server and connect this website to its API.
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
//               onChange={(event) => setUrl(event.target.value)}
//               placeholder="http://localhost:4000"
//               className="w-full rounded-xl border border-white/15 bg-ink/70 px-4 py-3 text-sm text-white outline-none focus:border-brand"
//             />
//           </label>
//           <div className="mt-5 flex flex-wrap justify-center gap-3">
//             <button
//               onClick={() => setApiBase(url)}
//               className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white"
//             >
//               <Database className="h-4 w-4" /> Save & connect
//             </button>
//             <button
//               onClick={() => void refresh()}
//               className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80"
//             >
//               <RefreshCw className="h-4 w-4" /> Retry
//             </button>
//           </div>
//           <p className="mt-6 text-[11px] leading-relaxed text-white/30">
//             Run <span className="font-mono text-gold">server/schema.sql</span>, then{" "}
//             <span className="font-mono text-gold">node server/seed.js</span> and{" "}
//             <span className="font-mono text-gold">node server/index.js</span>.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return isAdmin ? <AdminApp /> : <MainSite />;
// }

// export default function App() {
//   const hash = useHashRoute();
//   const isAdmin = hash.startsWith("#/admin");

//   return (
//     <SiteProvider>
//       <ApplicationRouter isAdmin={isAdmin} />
//     </SiteProvider>
//   );
// }
// import { useEffect, useState } from "react";
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
//   const [hash, setHash] = useState(
//     () => window.location.hash
//   );

//   useEffect(() => {
//     const onHash = () =>
//       setHash(window.location.hash);

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
//      CONNECTING SCREEN
//   ======================================================= */

//   if (status === "connecting") {
//     return (
//       <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-ink text-white">

//         {/* Spinner */}

//         <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-brand" />

//         {/* Brand Name */}

//         <div className="flex items-center gap-2">
//           <span className="font-display text-3xl font-semibold text-white">
//             Kirti{" "}
//             <span className="italic text-brand-2">
//               Rathore
//             </span>
//           </span>

//           <span className="text-xl text-gold">
//             ✦
//           </span>
//         </div>

//       </div>
//     );
//   }

//   /* =======================================================
//      DATABASE OFFLINE
//   ======================================================= */

//   if (status === "offline") {
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
//               onChange={(event) =>
//                 setUrl(event.target.value)
//               }
//               placeholder="http://localhost:4000"
//               className="w-full rounded-xl border border-white/15 bg-ink/70 px-4 py-3 text-sm text-white outline-none focus:border-brand"
//             />

//           </label>

//           <div className="mt-5 flex flex-wrap justify-center gap-3">

//             <button
//               type="button"
//               onClick={() =>
//                 setApiBase(url)
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
//       "#/admin"
//     );

//   return (
//     <SiteProvider>
//       <ApplicationRouter
//         isAdmin={isAdmin}
//       />
//     </SiteProvider>
//   );
// }
import { useEffect, useState } from "react";
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
  const [hash, setHash] = useState(
    () => window.location.hash
  );

  useEffect(() => {
    const onHash = () =>
      setHash(window.location.hash);

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
     CONNECTING SCREEN
  ======================================================= */

  if (status === "connecting") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-ink text-white">

        <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-brand" />

        <div className="flex items-center gap-2">
          <span className="font-display text-3xl font-semibold text-white">
            Kirti{" "}
            <span className="italic text-brand-2">
              Rathore
            </span>
          </span>

          <span className="text-xl text-gold">
            ✦
          </span>
        </div>

      </div>
    );
  }

  /* =======================================================
     DATABASE OFFLINE
  ======================================================= */

  if (status === "offline") {
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
              onChange={(event) =>
                setUrl(event.target.value)
              }
              placeholder="http://localhost:4000"
              className="w-full rounded-xl border border-white/15 bg-ink/70 px-4 py-3 text-sm text-white outline-none focus:border-brand"
            />

          </label>

          <div className="mt-5 flex flex-wrap justify-center gap-3">

            <button
              type="button"
              onClick={() =>
                setApiBase(url)
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

  /* NEW ADMIN URL:
     #/rathore-vlogs
  */

  const isAdmin =
    hash.startsWith(
      "#/rathore-vlogs"
    );

  return (
    <SiteProvider>
      <ApplicationRouter
        isAdmin={isAdmin}
      />
    </SiteProvider>
  );
}