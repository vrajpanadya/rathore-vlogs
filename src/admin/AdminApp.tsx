// import { useRef, useState, type ReactNode } from "react";
// import {
//   Database,
//   Download,
//   ExternalLink,
//   FileText,
//   Gauge,
//   Image,
//   KeyRound,
//   LayoutDashboard,
//   LogOut,
//   Mail,
//   Palmtree,
//   RotateCcw,
//   Settings,
//   ShieldCheck,
//   Sparkles,
//   Type,
//   Upload,
// } from "lucide-react";
// import { useSite } from "../lib/store";
// import { InstagramIcon, YoutubeIcon } from "../components/icons";
// import {
//   AboutEditor,
//   GalleryEditor,
//   HeroEditor,
//   LinksEditor,
//   MarqueeEditor,
//   MomentsEditor,
//   PillarsEditor,
//   VideosEditor,
// } from "./editors";
// import { Btn, Card, Field, TextInput } from "./widgets";

// type Tab =
//   | "overview"
//   | "links"
//   | "hero"
//   | "about"
//   | "moments"
//   | "videos"
//   | "gallery"
//   | "marquee"
//   | "pillars"
//   | "settings";

// const TABS: { id: Tab; label: string; icon: ReactNode }[] = [
//   { id: "overview", label: "Overview", icon: <LayoutDashboard className="h-4 w-4" /> },
//   { id: "links", label: "Social Links", icon: <ExternalLink className="h-4 w-4" /> },
//   { id: "hero", label: "Hero Section", icon: <Sparkles className="h-4 w-4" /> },
//   { id: "about", label: "About", icon: <FileText className="h-4 w-4" /> },
//   { id: "moments", label: "My Moments", icon: <Upload className="h-4 w-4" /> },
//   { id: "videos", label: "Videos", icon: <YoutubeIcon className="h-4 w-4" /> },
//   { id: "gallery", label: "Gallery", icon: <Image className="h-4 w-4" /> },
//   { id: "marquee", label: "Marquee", icon: <Type className="h-4 w-4" /> },
//   { id: "pillars", label: "Pillars", icon: <Palmtree className="h-4 w-4" /> },
//   { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
// ];

// /* ================= Login ================= */

// function Login() {
//   const { login } = useSite();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [busy, setBusy] = useState(false);

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setBusy(true);
//     setError("");
//     const res = await login(username.trim(), password);
//     setBusy(false);
//     if (!res.ok) setError(res.message);
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-ink px-5 py-12">
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-brand/20 blur-[110px]" />
//         <div className="absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-plum-2/60 blur-[120px]" />
//       </div>

//       <div className="relative w-full max-w-md">
//         <a href="#home" className="mb-8 flex items-center justify-center gap-2">
//           <span className="font-display text-2xl font-semibold text-white">
//             Kirti <span className="italic text-brand-2">Rathore</span>
//           </span>
//           <span className="text-gold">✦</span>
//         </a>

//         <form
//           onSubmit={submit}
//           className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl"
//         >
//           <div className="mb-6 flex items-center gap-3">
//             <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-lg shadow-brand/30">
//               <ShieldCheck className="h-5 w-5" />
//             </span>
//             <div>
//               <h1 className="font-display text-xl font-semibold text-white">Admin Panel</h1>
//               <p className="text-xs text-white/45">Login to manage the website</p>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <Field label="Username">
//               <TextInput
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="admin"
//                 autoFocus
//               />
//             </Field>
//             <Field label="Password">
//               <TextInput
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="••••••••"
//               />
//             </Field>
//           </div>

//           {error && (
//             <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-xs font-medium text-red-300">
//               {error}
//             </p>
//           )}

//           <button
//             type="submit"
//             disabled={busy}
//             className="mt-6 w-full rounded-full bg-gradient-to-r from-brand to-brand-2 py-3 text-sm font-semibold text-white shadow-xl shadow-brand/30 transition-all hover:brightness-110 disabled:opacity-60"
//           >
//             {busy ? "Checking…" : "Sign in"}
//           </button>
//         </form>

//         <p className="mt-6 text-center text-xs text-white/30">
//           <a href="#home" className="hover:text-white/60">← Back to website</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// /* ================= Settings ================= */

// function SettingsTab({ toast }: { toast: (m: string) => void }) {
//   const {
//     data,
//     apiBase,
//     status,
//     setApiBase,
//     resetAll,
//     importData,
//     changePassword: changeDatabasePassword,
//   } = useSite();
//   const [url, setUrl] = useState(apiBase);
//   const [current, setCurrent] = useState("");
//   const [next, setNext] = useState("");
//   const [passMsg, setPassMsg] = useState("");
//   const fileRef = useRef<HTMLInputElement>(null);

//   const exportJson = () => {
//     const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
//     const a = document.createElement("a");
//     a.href = URL.createObjectURL(blob);
//     a.download = "kirti-site-backup.json";
//     a.click();
//     URL.revokeObjectURL(a.href);
//     toast("Backup downloaded ✓");
//   };

//   const onImport = (file: File) => {
//     const reader = new FileReader();
//     reader.onload = async () => {
//       const res = await importData(String(reader.result));
//       toast(res.message);
//     };
//     reader.readAsText(file);
//   };

//   const changePassword = async () => {
//     if (next.length < 6) {
//       setPassMsg("❌ New password must be at least 6 characters");
//       return;
//     }
//     const result = await changeDatabasePassword(current, next);
//     setPassMsg(result.ok ? `✅ ${result.message}` : `❌ ${result.message}`);
//     if (result.ok) {
//       setCurrent("");
//       setNext("");
//     }
//   };

//   return (
//     <>
//       <Card
//         title="MySQL backend connection"
//         description="This website requires the Express + MySQL server. Content is never saved in the browser."
//         actions={
//           <span
//             className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
//               status === "live"
//                 ? "bg-emerald-500/15 text-emerald-400"
//                 : status === "offline"
//                   ? "bg-amber-500/15 text-amber-400"
//                   : "bg-sky-500/15 text-sky-400"
//             }`}
//           >
//             {status === "live" ? "● Live (MySQL)" : status === "offline" ? "● Offline" : "● Connecting"}
//           </span>
//         }
//       >
//         <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
//           <div className="flex-1">
//             <Field label="API base URL" hint="e.g. http://localhost:4000 — saved & reloads the app">
//               <TextInput
//                 value={url}
//                 onChange={(e) => setUrl(e.target.value)}
//                 placeholder="http://localhost:4000"
//               />
//             </Field>
//           </div>
//           <Btn onClick={() => setApiBase(url)}>
//             <Database className="h-4 w-4" /> Connect
//           </Btn>
//         </div>
//         <div className="mt-4 rounded-xl border border-white/10 bg-ink/40 p-4 text-[11px] leading-relaxed text-white/45">
//           <p className="mb-2 font-semibold text-white/60">Setup steps (server/ folder):</p>
//           <ol className="list-decimal space-y-1 pl-4">
//             <li>Create a MySQL database, then run <span className="font-mono text-gold">mysql -u root -p &lt; schema.sql</span></li>
//             <li>Install server deps + <span className="font-mono text-gold">node seed.js</span> to create the admin user</li>
//             <li>Start with <span className="font-mono text-gold">node index.js</span></li>
//             <li>Enter the server URL above — data now syncs to MySQL 🎉</li>
//           </ol>
//         </div>
//       </Card>

//       <div className="mt-6">
//         <Card title="Admin password">
//           <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
//             <Field label="Current password">
//               <TextInput type="password" value={current} onChange={(e) => setCurrent(e.target.value)} />
//             </Field>
//             <Field label="New password" hint="Minimum 6 characters">
//               <TextInput type="password" value={next} onChange={(e) => setNext(e.target.value)} />
//             </Field>
//             <Btn onClick={changePassword}>
//               <KeyRound className="h-4 w-4" /> Change
//             </Btn>
//           </div>
//           {passMsg && <p className="mt-3 text-xs font-medium text-white/60">{passMsg}</p>}
//         </Card>
//       </div>

//       <div className="mt-6 grid gap-6 md:grid-cols-2">
//         <Card title="Backup & restore">
//           <div className="flex flex-wrap gap-3">
//             <Btn variant="ghost" onClick={exportJson}>
//               <Download className="h-4 w-4" /> Export JSON
//             </Btn>
//             <Btn variant="ghost" onClick={() => fileRef.current?.click()}>
//               <Upload className="h-4 w-4" /> Import JSON
//             </Btn>
//             <input
//               ref={fileRef}
//               type="file"
//               accept="application/json"
//               className="hidden"
//               onChange={(e) => {
//                 const f = e.target.files?.[0];
//                 if (f) onImport(f);
//                 e.target.value = "";
//               }}
//             />
//           </div>
//         </Card>

//         <Card title="Danger zone">
//           <p className="mb-4 text-xs text-white/45">
//             Restore every section to its original default content.
//           </p>
//           <Btn
//             variant="danger"
//             onClick={async () => {
//               if (confirm("Reset ALL content to the defaults? This cannot be undone.")) {
//                 const result = await resetAll();
//                 toast(result.message);
//               }
//             }}
//           >
//             <RotateCcw className="h-4 w-4" /> Reset all content
//           </Btn>
//         </Card>
//       </div>
//     </>
//   );
// }

// /* ================= Overview ================= */

// function Overview({ goto }: { goto: (t: Tab) => void }) {
//   const { data, session } = useSite();
//   const counts = [
//     { label: "Videos", value: data.videos.length, tab: "videos" as Tab },
//     { label: "Gallery posts", value: data.gallery.length, tab: "gallery" as Tab },
//     { label: "Pillars", value: data.pillars.length, tab: "pillars" as Tab },
//     { label: "Marquee items", value: data.marquee.length, tab: "marquee" as Tab },
//   ];

//   return (
//     <>
//       <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-plum-2/60 via-plum to-brand/30 p-6">
//         <p className="text-xs font-semibold uppercase tracking-widest text-gold">Welcome back</p>
//         <h2 className="mt-1 font-display text-2xl font-semibold text-white">
//           {session?.username ?? "Admin"} 👋
//         </h2>
//         <p className="mt-2 max-w-xl text-sm text-white/60">
//           Everything you change here updates the live website instantly.
//           {" "}Videos and gallery posts are read from their dedicated MySQL tables.
//         </p>
//       </div>

//       <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
//         {counts.map((c) => (
//           <button
//             key={c.label}
//             onClick={() => goto(c.tab)}
//             className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition-all hover:border-brand/40 hover:bg-white/10"
//           >
//             <p className="font-display text-3xl font-semibold text-white">{c.value}</p>
//             <p className="mt-1 text-xs font-medium text-white/50">{c.label}</p>
//           </button>
//         ))}
//       </div>

//       <div className="mt-6 grid gap-4 md:grid-cols-2">
//         <Card title="My platforms">
//           <div className="flex flex-wrap gap-3">
//             <a
//               href={data.links.instagram}
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 transition-all hover:border-brand hover:text-white"
//             >
//               <InstagramIcon className="h-4 w-4 text-brand-2" /> Instagram
//             </a>
//             <a
//               href={data.links.youtube}
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 transition-all hover:border-red-500 hover:text-white"
//             >
//               <YoutubeIcon className="h-4 w-4 text-red-500" /> YouTube
//             </a>
//           </div>
//         </Card>

//         <Card title="Quick actions">
//           <div className="flex flex-wrap gap-3">
//             <Btn variant="ghost" onClick={() => goto("links")}>
//               <ExternalLink className="h-4 w-4" /> Edit links
//             </Btn>
//             <Btn variant="ghost" onClick={() => goto("hero")}>
//               <Sparkles className="h-4 w-4" /> Edit hero
//             </Btn>
//             <Btn variant="ghost" onClick={() => goto("videos")}>
//               <YoutubeIcon className="h-4 w-4" /> Manage videos
//             </Btn>
//             <a
//               href="#home"
//               className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/80 transition-all hover:border-white/40 hover:text-white"
//             >
//               <Gauge className="h-4 w-4" /> View website
//             </a>
//           </div>
//         </Card>
//       </div>
//     </>
//   );
// }

// /* ================= Admin shell ================= */

// export default function AdminApp() {
//   const { session, logout, data, save, status } = useSite();
//   const [tab, setTab] = useState<Tab>("overview");
//   const [toast, setToast] = useState("");

//   const showToast = (msg: string) => {
//     setToast(msg);
//     window.setTimeout(() => setToast(""), 2600);
//   };

//   if (!session) return <Login />;

//   const commit = async (next: typeof data) => {
//     const res = await save(next);
//     showToast(res.message);
//   };

//   const editorProps = { data, onCommit: commit, onToast: showToast };

//   return (
//     <div className="min-h-screen bg-ink">
//       <div className="pointer-events-none fixed inset-0 overflow-hidden">
//         <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand/10 blur-[130px]" />
//         <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-plum-2/50 blur-[130px]" />
//       </div>

//       {/* top bar */}
//       <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
//         <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
//           <div className="flex items-center gap-3">
//             <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-white">
//               <ShieldCheck className="h-4.5 w-4.5 h-5 w-5" />
//             </span>
//             <div className="leading-tight">
//               <p className="font-display text-base font-semibold text-white">Admin Panel</p>
//               <p className="text-[10px] uppercase tracking-wider text-white/40">
//                 {status === "live" ? "● MySQL connected" : "● server offline"}
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center gap-3">
//             <a
//               href="#home"
//               className="hidden items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/70 transition-all hover:text-white sm:inline-flex"
//             >
//               <Mail className="h-3.5 w-3.5" /> View site
//             </a>
//             <button
//               onClick={logout}
//               className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/70 transition-all hover:border-red-500/50 hover:text-red-400"
//             >
//               <LogOut className="h-3.5 w-3.5" /> Logout
//             </button>
//           </div>
//         </div>
//       </header>

//       <div className="relative mx-auto flex max-w-7xl gap-8 px-5 py-8">
//         {/* sidebar */}
//         <aside className="hidden w-52 flex-none lg:block">
//           <nav className="sticky top-24 space-y-1">
//             {TABS.map((t) => (
//               <button
//                 key={t.id}
//                 onClick={() => setTab(t.id)}
//                 className={`flex w-full items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${
//                   tab === t.id
//                     ? "bg-gradient-to-r from-brand to-brand-2 text-white shadow-lg shadow-brand/25"
//                     : "text-white/60 hover:bg-white/5 hover:text-white"
//                 }`}
//               >
//                 {t.icon} {t.label}
//               </button>
//             ))}
//           </nav>
//         </aside>

//         {/* content */}
//         <main className="min-w-0 flex-1">
//           {/* mobile tabs */}
//           <div className="mb-6 flex gap-2 overflow-x-auto pb-2 lg:hidden">
//             {TABS.map((t) => (
//               <button
//                 key={t.id}
//                 onClick={() => setTab(t.id)}
//                 className={`flex flex-none items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
//                   tab === t.id ? "bg-brand text-white" : "border border-white/15 text-white/60"
//                 }`}
//               >
//                 {t.icon} {t.label}
//               </button>
//             ))}
//           </div>

//           {tab === "overview" && <Overview goto={setTab} />}
//           {tab === "links" && <LinksEditor {...editorProps} />}
//           {tab === "hero" && <HeroEditor {...editorProps} />}
//           {tab === "about" && <AboutEditor {...editorProps} />}
//           {tab === "moments" && <MomentsEditor {...editorProps} />}
//           {tab === "videos" && <VideosEditor {...editorProps} />}
//           {tab === "gallery" && <GalleryEditor {...editorProps} />}
//           {tab === "marquee" && <MarqueeEditor {...editorProps} />}
//           {tab === "pillars" && <PillarsEditor {...editorProps} />}
//           {tab === "settings" && <SettingsTab toast={showToast} />}
//         </main>
//       </div>

//       {/* toast */}
//       {toast && (
//         <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/10 bg-plum px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-black/50">
//           {toast}
//         </div>
//       )}
//     </div>
//   );
// }
import { useRef, useState, type ReactNode } from "react";
import {
  Database,
  Download,
  ExternalLink,
  FileText,
  Gauge,
  Image,
  KeyRound,
  LayoutDashboard,
  LogOut,
  Mail,
  Palmtree,
  RotateCcw,
  Settings,
  ShieldCheck,
  Sparkles,
  Type,
  Upload,
} from "lucide-react";
import { useSite } from "../lib/store";
import {
  InstagramIcon,
  YoutubeIcon,
} from "../components/icons";
import {
  AboutEditor,
  GalleryEditor,
  HeroEditor,
  LinksEditor,
  MarqueeEditor,
  MomentsEditor,
  PillarsEditor,
  VideosEditor,
} from "./editors";
import {
  Btn,
  Card,
  Field,
  TextInput,
} from "./widgets";

type Tab =
  | "overview"
  | "links"
  | "hero"
  | "about"
  | "moments"
  | "videos"
  | "gallery"
  | "marquee"
  | "pillars"
  | "settings";

const TABS: {
  id: Tab;
  label: string;
  icon: ReactNode;
}[] = [
  {
    id: "overview",
    label: "Overview",
    icon: (
      <LayoutDashboard className="h-4 w-4" />
    ),
  },
  {
    id: "links",
    label: "Social Links",
    icon: (
      <ExternalLink className="h-4 w-4" />
    ),
  },
  {
    id: "hero",
    label: "Hero Section",
    icon: (
      <Sparkles className="h-4 w-4" />
    ),
  },
  {
    id: "about",
    label: "About",
    icon: (
      <FileText className="h-4 w-4" />
    ),
  },
  {
    id: "moments",
    label: "My Moments",
    icon: (
      <Upload className="h-4 w-4" />
    ),
  },
  {
    id: "videos",
    label: "Videos",
    icon: (
      <YoutubeIcon className="h-4 w-4" />
    ),
  },
  {
    id: "gallery",
    label: "Gallery",
    icon: (
      <Image className="h-4 w-4" />
    ),
  },
  {
    id: "marquee",
    label: "Marquee",
    icon: (
      <Type className="h-4 w-4" />
    ),
  },
  {
    id: "pillars",
    label: "Pillars",
    icon: (
      <Palmtree className="h-4 w-4" />
    ),
  },
  {
    id: "settings",
    label: "Settings",
    icon: (
      <Settings className="h-4 w-4" />
    ),
  },
];

/* ================= Login ================= */

function Login() {
  const {
    login,
    apiBase,
  } = useSite();

  const [
    username,
    setUsername,
  ] = useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const [
    error,
    setError,
  ] = useState("");

  const [
    busy,
    setBusy,
  ] = useState(false);

  /* =========================
     RECOVERY STATES
  ========================= */

  const [
    showRecovery,
    setShowRecovery,
  ] = useState(false);

  const [
    recoveryKey,
    setRecoveryKey,
  ] = useState("");

  const [
    newPassword,
    setNewPassword,
  ] = useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const [
    recoveryBusy,
    setRecoveryBusy,
  ] = useState(false);

  const [
    recoveryError,
    setRecoveryError,
  ] = useState("");

  const [
    recoverySuccess,
    setRecoverySuccess,
  ] = useState("");

  const [
    recoveredUsername,
    setRecoveredUsername,
  ] = useState("");

  /* =========================
     LOGIN
  ========================= */

  const submit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setBusy(true);
    setError("");

    const res =
      await login(
        username.trim(),
        password
      );

    setBusy(false);

    if (!res.ok) {
      setError(
        res.message
      );
    }
  };

  /* =========================
     OPEN RECOVERY
  ========================= */

  const openRecovery =
    () => {
      setRecoveryKey("");
      setNewPassword("");
      setConfirmPassword("");
      setRecoveryError("");
      setRecoverySuccess("");
      setRecoveredUsername("");

      setShowRecovery(
        true
      );
    };

  /* =========================
     CLOSE RECOVERY
  ========================= */

  const closeRecovery =
    () => {
      if (
        recoveryBusy
      ) {
        return;
      }

      setShowRecovery(
        false
      );
    };

  /* =========================
     RECOVER ACCOUNT
  ========================= */

  const recoverAccount =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      setRecoveryError("");
      setRecoverySuccess("");
      setRecoveredUsername("");

      if (
        !recoveryKey.trim()
      ) {
        setRecoveryError(
          "Please enter your recovery key."
        );

        return;
      }

      if (
        newPassword.length <
        6
      ) {
        setRecoveryError(
          "New password must be at least 6 characters."
        );

        return;
      }

      if (
        newPassword !==
        confirmPassword
      ) {
        setRecoveryError(
          "Passwords do not match."
        );

        return;
      }

      setRecoveryBusy(
        true
      );

      try {
        const response =
          await fetch(
            `${apiBase.replace(
              /\/+$/,
              ""
            )}/api/admin/recover`,
            {
              method:
                "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body:
                JSON.stringify(
                  {
                    recoveryKey:
                      recoveryKey.trim(),

                    newPassword,
                  }
                ),
            }
          );

        const body =
          await response
            .json()
            .catch(
              () => ({})
            );

        if (
          !response.ok
        ) {
          throw new Error(
            body.error ||
              "Could not recover account"
          );
        }

        const recovered =
          String(
            body.username ||
              ""
          ).trim();

        setRecoveredUsername(
          recovered
        );

        setRecoverySuccess(
          "Login recovered successfully. Your new password is ready."
        );

        if (
          recovered
        ) {
          setUsername(
            recovered
          );
        }

        setPassword("");
        setRecoveryKey("");
        setNewPassword("");
        setConfirmPassword("");
      } catch (
        err
      ) {
        setRecoveryError(
          err instanceof Error
            ? err.message
            : "Could not recover account"
        );
      } finally {
        setRecoveryBusy(
          false
        );
      }
    };

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-5 py-12">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-brand/20 blur-[110px]" />

        <div className="absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-plum-2/60 blur-[120px]" />
      </div>

      {/* Login Card */}

      <div className="relative w-full max-w-md">
        <a
          href="#home"
          className="mb-8 flex items-center justify-center gap-2"
        >
          <span className="font-display text-2xl font-semibold text-white">
            Kirti{" "}
            <span className="italic text-brand-2">
              Rathore
            </span>
          </span>

          <span className="text-gold">
            ✦
          </span>
        </a>

        <form
          onSubmit={
            submit
          }
          className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl"
        >
          {/* Header */}

          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-lg shadow-brand/30">
              <ShieldCheck className="h-5 w-5" />
            </span>

            <div>
              <h1 className="font-display text-xl font-semibold text-white">
                Admin Panel
              </h1>

              <p className="text-xs text-white/45">
                Login to manage
                the website
              </p>
            </div>
          </div>

          {/* Fields */}

          <div className="space-y-4">
            <Field label="Username">
              <TextInput
                value={
                  username
                }
                onChange={(
                  e
                ) =>
                  setUsername(
                    e.target
                      .value
                  )
                }
                placeholder="admin"
                autoFocus
              />
            </Field>

            <Field label="Password">
              <TextInput
                type="password"
                value={
                  password
                }
                onChange={(
                  e
                ) =>
                  setPassword(
                    e.target
                      .value
                  )
                }
                placeholder="••••••••"
              />
            </Field>
          </div>

          {/* Forgot Link */}

          <div className="mt-3 flex justify-end">
            <button
              type="button"
              onClick={
                openRecovery
              }
              className="text-xs font-semibold text-brand-2 transition-colors hover:text-white"
            >
              Forgot username
              or password?
            </button>
          </div>

          {/* Login Error */}

          {error && (
            <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-xs font-medium text-red-300">
              {error}
            </p>
          )}

          {/* Login Button */}

          <button
            type="submit"
            disabled={
              busy
            }
            className="mt-6 w-full rounded-full bg-gradient-to-r from-brand to-brand-2 py-3 text-sm font-semibold text-white shadow-xl shadow-brand/30 transition-all hover:brightness-110 disabled:opacity-60"
          >
            {busy
              ? "Checking…"
              : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-white/30">
          <a
            href="#home"
            className="hover:text-white/60"
          >
            ← Back to website
          </a>
        </p>
      </div>

      {/* =========================
          RECOVERY POPUP
      ========================= */}

      {showRecovery && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 px-5 py-10 backdrop-blur-md sm:items-center"
          onMouseDown={(
            e
          ) => {
            if (
              e.target ===
              e.currentTarget
            ) {
              closeRecovery();
            }
          }}
        >
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#211927] p-7 shadow-2xl shadow-black/70">

            {/* Close */}

            <button
              type="button"
              onClick={
                closeRecovery
              }
              disabled={
                recoveryBusy
              }
              aria-label="Close recovery popup"
              className="absolute right-5 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xl text-white/50 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-50"
            >
              ×
            </button>

            {/* Header */}

            <div className="mb-6 flex items-center gap-3 pr-10">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-lg shadow-brand/30">
                <KeyRound className="h-5 w-5" />
              </span>

              <div>
                <h2 className="font-display text-xl font-semibold text-white">
                  Recover Admin
                  Login
                </h2>

                <p className="mt-0.5 text-xs text-white/45">
                  Recover your
                  username and
                  set a new
                  password.
                </p>
              </div>
            </div>

            <form
              onSubmit={
                recoverAccount
              }
              className="space-y-4"
            >
              {!recoverySuccess && (
                <>
                  {/* Recovery Key */}

                  <Field label="Recovery Key">
                    <TextInput
                      type="password"
                      value={
                        recoveryKey
                      }
                      onChange={(
                        e
                      ) =>
                        setRecoveryKey(
                          e.target
                            .value
                        )
                      }
                      placeholder="Enter recovery key"
                      autoFocus
                    />
                  </Field>

                  {/* New Password */}

                  <Field
                    label="New Password"
                    hint="Minimum 6 characters"
                  >
                    <TextInput
                      type="password"
                      value={
                        newPassword
                      }
                      onChange={(
                        e
                      ) =>
                        setNewPassword(
                          e.target
                            .value
                        )
                      }
                      placeholder="••••••••"
                    />
                  </Field>

                  {/* Confirm Password */}

                  <Field label="Confirm Password">
                    <TextInput
                      type="password"
                      value={
                        confirmPassword
                      }
                      onChange={(
                        e
                      ) =>
                        setConfirmPassword(
                          e.target
                            .value
                        )
                      }
                      placeholder="••••••••"
                    />
                  </Field>
                </>
              )}

              {/* Recovery Error */}

              {recoveryError && (
                <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs font-medium text-red-300">
                  {
                    recoveryError
                  }
                </p>
              )}

              {/* Success */}

              {recoverySuccess && (
                <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-4">
                  <p className="text-sm font-semibold text-emerald-300">
                    ✓{" "}
                    {
                      recoverySuccess
                    }
                  </p>

                  {recoveredUsername && (
                    <div className="mt-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                        Your Username
                      </p>

                      <p className="mt-1 break-all font-mono text-sm font-semibold text-white">
                        {
                          recoveredUsername
                        }
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Recovery Button */}

              {!recoverySuccess ? (
                <button
                  type="submit"
                  disabled={
                    recoveryBusy
                  }
                  className="w-full rounded-full bg-gradient-to-r from-brand to-brand-2 py-3 text-sm font-semibold text-white shadow-xl shadow-brand/30 transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {recoveryBusy
                    ? "Recovering…"
                    : "Reset Login"}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    setShowRecovery(
                      false
                    )
                  }
                  className="w-full rounded-full bg-gradient-to-r from-brand to-brand-2 py-3 text-sm font-semibold text-white shadow-xl shadow-brand/30 transition-all hover:brightness-110"
                >
                  Back to Sign in
                </button>
              )}
            </form>

            <p className="mt-4 text-center text-[11px] leading-relaxed text-white/35">
              Your current
              password is never
              displayed. The
              recovery key
              allows you to set
              a new password
              and recover the
              admin username.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= Settings ================= */

function SettingsTab({
  toast,
}: {
  toast: (
    m: string
  ) => void;
}) {
  const {
    data,
    apiBase,
    status,
    setApiBase,
    resetAll,
    importData,
    changePassword:
      changeDatabasePassword,
  } = useSite();

  const [
    url,
    setUrl,
  ] = useState(
    apiBase
  );

  const [
    current,
    setCurrent,
  ] = useState("");

  const [
    next,
    setNext,
  ] = useState("");

  const [
    passMsg,
    setPassMsg,
  ] = useState("");

  const fileRef =
    useRef<HTMLInputElement>(
      null
    );

  const exportJson =
    () => {
      const blob =
        new Blob(
          [
            JSON.stringify(
              data,
              null,
              2
            ),
          ],
          {
            type:
              "application/json",
          }
        );

      const a =
        document.createElement(
          "a"
        );

      a.href =
        URL.createObjectURL(
          blob
        );

      a.download =
        "kirti-site-backup.json";

      a.click();

      URL.revokeObjectURL(
        a.href
      );

      toast(
        "Backup downloaded ✓"
      );
    };

  const onImport =
    (
      file: File
    ) => {
      const reader =
        new FileReader();

      reader.onload =
        async () => {
          const res =
            await importData(
              String(
                reader.result
              )
            );

          toast(
            res.message
          );
        };

      reader.readAsText(
        file
      );
    };

  const changePassword =
    async () => {
      if (
        next.length <
        6
      ) {
        setPassMsg(
          "❌ New password must be at least 6 characters"
        );

        return;
      }

      const result =
        await changeDatabasePassword(
          current,
          next
        );

      setPassMsg(
        result.ok
          ? `✅ ${result.message}`
          : `❌ ${result.message}`
      );

      if (
        result.ok
      ) {
        setCurrent("");
        setNext("");
      }
    };

  return (
    <>
      <Card
        title="MySQL backend connection"
        description="This website requires the Express + MySQL server. Content is never saved in the browser."
        actions={
          <span
            className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
              status ===
              "live"
                ? "bg-emerald-500/15 text-emerald-400"
                : status ===
                    "offline"
                  ? "bg-amber-500/15 text-amber-400"
                  : "bg-sky-500/15 text-sky-400"
            }`}
          >
            {status ===
            "live"
              ? "● Live (MySQL)"
              : status ===
                  "offline"
                ? "● Offline"
                : "● Connecting"}
          </span>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="flex-1">
            <Field
              label="API base URL"
              hint="e.g. http://localhost:4000 — saved & reloads the app"
            >
              <TextInput
                value={
                  url
                }
                onChange={(
                  e
                ) =>
                  setUrl(
                    e.target
                      .value
                  )
                }
                placeholder="http://localhost:4000"
              />
            </Field>
          </div>

          <Btn
            onClick={() =>
              setApiBase(
                url
              )
            }
          >
            <Database className="h-4 w-4" />
            Connect
          </Btn>
        </div>

        <div className="mt-4 rounded-xl border border-white/10 bg-ink/40 p-4 text-[11px] leading-relaxed text-white/45">
          <p className="mb-2 font-semibold text-white/60">
            Setup steps
            (server/
            folder):
          </p>

          <ol className="list-decimal space-y-1 pl-4">
            <li>
              Create a MySQL
              database, then
              run{" "}
              <span className="font-mono text-gold">
                mysql -u root
                -p &lt;
                schema.sql
              </span>
            </li>

            <li>
              Install server
              deps +{" "}
              <span className="font-mono text-gold">
                node seed.js
              </span>{" "}
              to create the
              admin user
            </li>

            <li>
              Start with{" "}
              <span className="font-mono text-gold">
                node index.js
              </span>
            </li>

            <li>
              Enter the
              server URL
              above — data
              now syncs to
              MySQL 🎉
            </li>
          </ol>
        </div>
      </Card>

      <div className="mt-6">
        <Card title="Admin password">
          <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
            <Field label="Current password">
              <TextInput
                type="password"
                value={
                  current
                }
                onChange={(
                  e
                ) =>
                  setCurrent(
                    e.target
                      .value
                  )
                }
              />
            </Field>

            <Field
              label="New password"
              hint="Minimum 6 characters"
            >
              <TextInput
                type="password"
                value={
                  next
                }
                onChange={(
                  e
                ) =>
                  setNext(
                    e.target
                      .value
                  )
                }
              />
            </Field>

            <Btn
              onClick={
                changePassword
              }
            >
              <KeyRound className="h-4 w-4" />
              Change
            </Btn>
          </div>

          {passMsg && (
            <p className="mt-3 text-xs font-medium text-white/60">
              {passMsg}
            </p>
          )}
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card title="Backup & restore">
          <div className="flex flex-wrap gap-3">
            <Btn
              variant="ghost"
              onClick={
                exportJson
              }
            >
              <Download className="h-4 w-4" />
              Export JSON
            </Btn>

            <Btn
              variant="ghost"
              onClick={() =>
                fileRef.current?.click()
              }
            >
              <Upload className="h-4 w-4" />
              Import JSON
            </Btn>

            <input
              ref={
                fileRef
              }
              type="file"
              accept="application/json"
              className="hidden"
              onChange={(
                e
              ) => {
                const f =
                  e.target
                    .files?.[0];

                if (f) {
                  onImport(
                    f
                  );
                }

                e.target.value =
                  "";
              }}
            />
          </div>
        </Card>

        <Card title="Danger zone">
          <p className="mb-4 text-xs text-white/45">
            Restore every
            section to its
            original default
            content.
          </p>

          <Btn
            variant="danger"
            onClick={
              async () => {
                if (
                  confirm(
                    "Reset ALL content to the defaults? This cannot be undone."
                  )
                ) {
                  const result =
                    await resetAll();

                  toast(
                    result.message
                  );
                }
              }
            }
          >
            <RotateCcw className="h-4 w-4" />
            Reset all content
          </Btn>
        </Card>
      </div>
    </>
  );
}

/* ================= Overview ================= */

function Overview({
  goto,
}: {
  goto: (
    t: Tab
  ) => void;
}) {
  const {
    data,
    session,
  } = useSite();

  const counts = [
    {
      label:
        "Videos",
      value:
        data.videos
          .length,
      tab:
        "videos" as Tab,
    },
    {
      label:
        "Gallery posts",
      value:
        data.gallery
          .length,
      tab:
        "gallery" as Tab,
    },
    {
      label:
        "Pillars",
      value:
        data.pillars
          .length,
      tab:
        "pillars" as Tab,
    },
    {
      label:
        "Marquee items",
      value:
        data.marquee
          .length,
      tab:
        "marquee" as Tab,
    },
  ];

  return (
    <>
      <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-plum-2/60 via-plum to-brand/30 p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          Welcome back
        </p>

        <h2 className="mt-1 font-display text-2xl font-semibold text-white">
          {session?.username ??
            "Admin"}{" "}
          👋
        </h2>

        <p className="mt-2 max-w-xl text-sm text-white/60">
          Everything you
          change here
          updates the live
          website instantly.{" "}
          Videos and gallery
          posts are read
          from their
          dedicated MySQL
          tables.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {counts.map(
          (
            c
          ) => (
            <button
              key={
                c.label
              }
              onClick={() =>
                goto(
                  c.tab
                )
              }
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition-all hover:border-brand/40 hover:bg-white/10"
            >
              <p className="font-display text-3xl font-semibold text-white">
                {
                  c.value
                }
              </p>

              <p className="mt-1 text-xs font-medium text-white/50">
                {
                  c.label
                }
              </p>
            </button>
          )
        )}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card title="My platforms">
          <div className="flex flex-wrap gap-3">
            <a
              href={
                data.links
                  .instagram
              }
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 transition-all hover:border-brand hover:text-white"
            >
              <InstagramIcon className="h-4 w-4 text-brand-2" />

              Instagram
            </a>

            <a
              href={
                data.links
                  .youtube
              }
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 transition-all hover:border-red-500 hover:text-white"
            >
              <YoutubeIcon className="h-4 w-4 text-red-500" />

              YouTube
            </a>
          </div>
        </Card>

        <Card title="Quick actions">
          <div className="flex flex-wrap gap-3">
            <Btn
              variant="ghost"
              onClick={() =>
                goto(
                  "links"
                )
              }
            >
              <ExternalLink className="h-4 w-4" />
              Edit links
            </Btn>

            <Btn
              variant="ghost"
              onClick={() =>
                goto(
                  "hero"
                )
              }
            >
              <Sparkles className="h-4 w-4" />
              Edit hero
            </Btn>

            <Btn
              variant="ghost"
              onClick={() =>
                goto(
                  "videos"
                )
              }
            >
              <YoutubeIcon className="h-4 w-4" />
              Manage videos
            </Btn>

            <a
              href="#home"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/80 transition-all hover:border-white/40 hover:text-white"
            >
              <Gauge className="h-4 w-4" />
              View website
            </a>
          </div>
        </Card>
      </div>
    </>
  );
}

/* ================= Admin shell ================= */

export default function AdminApp() {
  const {
    session,
    logout,
    data,
    save,
    status,
  } = useSite();

  const [
    tab,
    setTab,
  ] =
    useState<Tab>(
      "overview"
    );

  const [
    toast,
    setToast,
  ] =
    useState("");

  const showToast =
    (
      msg: string
    ) => {
      setToast(
        msg
      );

      window.setTimeout(
        () =>
          setToast(
            ""
          ),
        2600
      );
    };

  if (
    !session
  ) {
    return (
      <Login />
    );
  }

  const commit =
    async (
      next:
        typeof data
    ) => {
      const res =
        await save(
          next
        );

      showToast(
        res.message
      );
    };

  const editorProps =
    {
      data,
      onCommit:
        commit,
      onToast:
        showToast,
    };

  return (
    <div className="min-h-screen bg-ink">
      {/* Background */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand/10 blur-[130px]" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-plum-2/50 blur-[130px]" />
      </div>

      {/* Top Bar */}

      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-white">
              <ShieldCheck className="h-5 w-5" />
            </span>

            <div className="leading-tight">
              <p className="font-display text-base font-semibold text-white">
                Admin Panel
              </p>

              <p className="text-[10px] uppercase tracking-wider text-white/40">
                {status ===
                "live"
                  ? "● MySQL connected"
                  : "● server offline"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#home"
              className="hidden items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/70 transition-all hover:text-white sm:inline-flex"
            >
              <Mail className="h-3.5 w-3.5" />

              View site
            </a>

            <button
              onClick={
                logout
              }
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/70 transition-all hover:border-red-500/50 hover:text-red-400"
            >
              <LogOut className="h-3.5 w-3.5" />

              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="relative mx-auto flex max-w-7xl gap-8 px-5 py-8">
        {/* Sidebar */}

        <aside className="hidden w-52 flex-none lg:block">
          <nav className="sticky top-24 space-y-1">
            {TABS.map(
              (
                t
              ) => (
                <button
                  key={
                    t.id
                  }
                  onClick={() =>
                    setTab(
                      t.id
                    )
                  }
                  className={`flex w-full items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${
                    tab ===
                    t.id
                      ? "bg-gradient-to-r from-brand to-brand-2 text-white shadow-lg shadow-brand/25"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {
                    t.icon
                  }{" "}
                  {
                    t.label
                  }
                </button>
              )
            )}
          </nav>
        </aside>

        {/* Content */}

        <main className="min-w-0 flex-1">
          {/* Mobile Tabs */}

          <div className="mb-6 flex gap-2 overflow-x-auto pb-2 lg:hidden">
            {TABS.map(
              (
                t
              ) => (
                <button
                  key={
                    t.id
                  }
                  onClick={() =>
                    setTab(
                      t.id
                    )
                  }
                  className={`flex flex-none items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    tab ===
                    t.id
                      ? "bg-brand text-white"
                      : "border border-white/15 text-white/60"
                  }`}
                >
                  {
                    t.icon
                  }{" "}
                  {
                    t.label
                  }
                </button>
              )
            )}
          </div>

          {tab ===
            "overview" && (
            <Overview
              goto={
                setTab
              }
            />
          )}

          {tab ===
            "links" && (
            <LinksEditor
              {...editorProps}
            />
          )}

          {tab ===
            "hero" && (
            <HeroEditor
              {...editorProps}
            />
          )}

          {tab ===
            "about" && (
            <AboutEditor
              {...editorProps}
            />
          )}

          {tab ===
            "moments" && (
            <MomentsEditor
              {...editorProps}
            />
          )}

          {tab ===
            "videos" && (
            <VideosEditor
              {...editorProps}
            />
          )}

          {tab ===
            "gallery" && (
            <GalleryEditor
              {...editorProps}
            />
          )}

          {tab ===
            "marquee" && (
            <MarqueeEditor
              {...editorProps}
            />
          )}

          {tab ===
            "pillars" && (
            <PillarsEditor
              {...editorProps}
            />
          )}

          {tab ===
            "settings" && (
            <SettingsTab
              toast={
                showToast
              }
            />
          )}
        </main>
      </div>

      {/* Toast */}

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/10 bg-plum px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-black/50">
          {toast}
        </div>
      )}
    </div>
  );
}