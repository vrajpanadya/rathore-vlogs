// import { useState } from "react";
// import { ArrowDown, ArrowUp, ImageIcon, Plus, Trash2, Upload } from "lucide-react";
// import type { SiteData } from "../data/site";
// import { Btn, Card, Field, IconBtn, SaveBar, TextArea, TextInput } from "./widgets";
// import { getApiBase, readSession } from "../lib/store";

// export interface EditorProps {
//   data: SiteData;
//   onCommit: (next: SiteData) => void;
//   onToast: (msg: string) => void;
// }

// /* ---------- Links ---------- */

// export function LinksEditor({ data, onCommit, onToast }: EditorProps) {
//   const [links, setLinks] = useState(data.links);
//   return (
//     <>
//       <Card
//         title="Social links"
//         description="These URLs power every button across the website."
//       >
//         <div className="space-y-4">
//           <Field label="Instagram URL" hint="Full link including the igsi parameter">
//             <TextInput
//               value={links.instagram}
//               onChange={(e) => setLinks({ ...links, instagram: e.target.value })}
//               placeholder="https://www.instagram.com/..."
//             />
//           </Field>
//           <Field label="YouTube URL" hint="Full link to the channel">
//             <TextInput
//               value={links.youtube}
//               onChange={(e) => setLinks({ ...links, youtube: e.target.value })}
//               placeholder="https://youtube.com/@..."
//             />
//           </Field>
//         </div>
//       </Card>
//       <SaveBar
//         saving={false}
//         onSave={() => {
//           onCommit({ ...data, links });
//           onToast("Social links updated ✓");
//         }}
//       />
//     </>
//   );
// }

// /* ---------- Hero ---------- */

// export function HeroEditor({ data, onCommit, onToast }: EditorProps) {
//   const [hero, setHero] = useState(data.hero);
//   return (
//     <>
//       <Card title="Hero section" description="The first thing visitors see.">
//         <div className="space-y-4">
//           <Field label="Display name">
//             <TextInput
//               value={hero.name}
//               onChange={(e) => setHero({ ...hero, name: e.target.value })}
//             />
//           </Field>
//           <Field label="Badge text" hint="Shown in the small pill above the headline">
//             <TextInput
//               value={hero.badge}
//               onChange={(e) => setHero({ ...hero, badge: e.target.value })}
//             />
//           </Field>
//           <Field label="Tagline">
//             <TextArea
//               value={hero.tagline}
//               onChange={(e) => setHero({ ...hero, tagline: e.target.value })}
//             />
//           </Field>
//           <div className="grid gap-4 sm:grid-cols-2">
//             <Field label="YouTube button label">
//               <TextInput
//                 value={hero.youtubeCta}
//                 onChange={(e) => setHero({ ...hero, youtubeCta: e.target.value })}
//               />
//             </Field>
//             <Field label="Instagram button label">
//               <TextInput
//                 value={hero.instagramCta}
//                 onChange={(e) => setHero({ ...hero, instagramCta: e.target.value })}
//               />
//             </Field>
//           </div>
//         </div>
//       </Card>
//       <SaveBar
//         saving={false}
//         onSave={() => {
//           onCommit({ ...data, hero });
//           onToast("Hero section updated ✓");
//         }}
//       />
//     </>
//   );
// }

// /* ---------- About ---------- */

// export function AboutEditor({ data, onCommit, onToast }: EditorProps) {
//   const [bio, setBio] = useState(data.about.bio);
//   const [highlightsText, setHighlightsText] = useState(
//     data.about.highlights.join("\n")
//   );
//   const [stats, setStats] = useState(data.about.stats);

//   const save = () => {
//     onCommit({
//       ...data,
//       about: {
//         ...data.about,
//         bio,
//         highlights: highlightsText
//           .split("\n")
//           .map((s) => s.trim())
//           .filter(Boolean),
//         stats,
//       },
//     });
//     onToast("About section updated ✓");
//   };

//   return (
//     <>
//       <Card title="Bio" description="The main introduction paragraph.">
//         <Field label="Bio text">
//           <TextArea value={bio} onChange={(e) => setBio(e.target.value)} />
//         </Field>
//       </Card>

//       <div className="mt-6">
//         <Card
//           title="Highlights"
//           description="One bullet point per line, shown under the bio."
//         >
//           <Field label="Highlights">
//             <TextArea
//               value={highlightsText}
//               onChange={(e) => setHighlightsText(e.target.value)}
//               placeholder={"Daily vlogs…\nFun reels…"}
//             />
//           </Field>
//         </Card>
//       </div>

//       <div className="mt-6">
//         <Card title="Stat cards" description="Three numbers shown under the highlights.">
//           <div className="space-y-4">
//             {stats.map((stat, i) => (
//               <div key={i} className="flex items-end gap-3">
//                 <div className="flex-1">
//                   <Field label="Value">
//                     <TextInput
//                       value={stat.value}
//                       onChange={(e) =>
//                         setStats(stats.map((s, j) => (j === i ? { ...s, value: e.target.value } : s)))
//                       }
//                     />
//                   </Field>
//                 </div>
//                 <div className="flex-[2]">
//                   <Field label="Label">
//                     <TextInput
//                       value={stat.label}
//                       onChange={(e) =>
//                         setStats(stats.map((s, j) => (j === i ? { ...s, label: e.target.value } : s)))
//                       }
//                     />
//                   </Field>
//                 </div>
//                 <IconBtn danger title="Remove" onClick={() => setStats(stats.filter((_, j) => j !== i))}>
//                   <Trash2 className="h-3.5 w-3.5" />
//                 </IconBtn>
//               </div>
//             ))}
//           </div>
//           <div className="mt-4">
//             <Btn variant="ghost" onClick={() => setStats([...stats, { value: "0", label: "New stat" }])}>
//               <Plus className="h-4 w-4" /> Add stat
//             </Btn>
//           </div>
//         </Card>
//       </div>

//       <SaveBar saving={false} onSave={save} />
//     </>
//   );
// }


// /* ---------- My Moments Video ---------- */

// export function MomentsEditor({ data, onCommit, onToast }: EditorProps) {
//   const [video, setVideo] = useState(data.moments?.video ?? "/videos/showcase.mp4");
//   const [uploading, setUploading] = useState(false);

//   const uploadVideo = async (file: File) => {
//     if (file.size > 1024 * 1024 * 1024) {
//       onToast("Video must be 1 GB or smaller");
//       return;
//     }

//     const session = readSession();
//     if (!session) {
//       onToast("Please log in again");
//       return;
//     }

//     const form = new FormData();
//     form.append("video", file);

//     try {
//       setUploading(true);

//       const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${session.token}`,
//         },
//         body: form,
//       });

//       const body = await response.json().catch(() => ({}));

//       if (!response.ok) {
//         throw new Error(body.error || "Video upload failed");
//       }

//       setVideo(body.url);
//       onToast("Video uploaded ✓");
//     } catch (error) {
//       onToast(error instanceof Error ? error.message : "Video upload failed");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <>
//       <Card
//         title="My Moments Video"
//         description="Upload or change the video shown in the My Moments section."
//       >
//         <div className="space-y-4">
//           {video && (
//             <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
//               <video
//                 key={video}
//                 src={video}
//                 controls
//                 preload="metadata"
//                 className="max-h-[520px] w-full object-contain"
//               />
//             </div>
//           )}

//           <Field label="Video URL">
//             <TextInput
//               value={video}
//               onChange={(e) => setVideo(e.target.value)}
//               placeholder="/videos/showcase.mp4"
//             />
//           </Field>

//           <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10">
//             <Upload className="h-4 w-4" />
//             {uploading ? "Uploading..." : "Upload Video"}

//             <input
//               type="file"
//               accept="video/mp4,video/webm,video/quicktime"
//               className="hidden"
//               disabled={uploading}
//               onChange={async (e) => {
//                 const file = e.target.files?.[0];
//                 e.currentTarget.value = "";

//                 if (file) {
//                   await uploadVideo(file);
//                 }
//               }}
//             />
//           </label>

//           <p className="text-xs text-white/40">
//             MP4, WEBM or MOV · Maximum 1 GB
//           </p>
//         </div>
//       </Card>

//       <SaveBar
//         saving={false}
//         onSave={() => {
//           onCommit({
//             ...data,
//             moments: {
//               ...data.moments,
//               video,
//             },
//           });

//           onToast("My Moments video updated ✓");
//         }}
//       />
//     </>
//   );
// }

// /* ---------- Videos ---------- */

// export function VideosEditor({ data, onCommit, onToast }: EditorProps) {
//   const [videos, setVideos] = useState(data.videos);

//   const move = (i: number, dir: -1 | 1) => {
//     const next = [...videos];
//     const j = i + dir;
//     if (j < 0 || j >= next.length) return;
//     [next[i], next[j]] = [next[j], next[i]];
//     setVideos(next);
//   };

//   const save = () => {
//     onCommit({ ...data, videos: videos.filter((v) => v.title.trim() || v.thumb.trim()) });
//     onToast("Videos updated ✓");
//   };

//   return (
//     <>
//       <div className="space-y-5">
//         {videos.map((video, i) => (
//           <Card
//             key={i}
//             title={`Video ${i + 1}`}
//             actions={
//               <div className="flex gap-1.5">
//                 <IconBtn title="Move up" disabled={i === 0} onClick={() => move(i, -1)}>
//                   <ArrowUp className="h-3.5 w-3.5" />
//                 </IconBtn>
//                 <IconBtn title="Move down" disabled={i === videos.length - 1} onClick={() => move(i, 1)}>
//                   <ArrowDown className="h-3.5 w-3.5" />
//                 </IconBtn>
//                 <IconBtn danger title="Delete" onClick={() => setVideos(videos.filter((_, j) => j !== i))}>
//                   <Trash2 className="h-3.5 w-3.5" />
//                 </IconBtn>
//               </div>
//             }
//           >
//             <div className="flex gap-4">
//               <div className="h-20 w-32 flex-none overflow-hidden rounded-lg border border-white/10 bg-ink/60">
//                 {video.thumb ? (
//                   <img src={video.thumb} alt="" className="h-full w-full object-cover" onError={(e) => ((e.target as HTMLImageElement).style.opacity = "0.2")} />
//                 ) : (
//                   <div className="flex h-full items-center justify-center text-white/20">
//                     <ImageIcon className="h-6 w-6" />
//                   </div>
//                 )}
//               </div>
//               <div className="grid flex-1 gap-3">
//                 <Field label="Title">
//                   <TextInput
//                     value={video.title}
//                     onChange={(e) =>
//                       setVideos(videos.map((v, j) => (j === i ? { ...v, title: e.target.value } : v)))
//                     }
//                   />
//                 </Field>
//                 <div className="grid grid-cols-3 gap-3">
//                   <Field label="Duration">
//                     <TextInput
//                       value={video.duration}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, duration: e.target.value } : v)))
//                       }
//                     />
//                   </Field>
//                   <Field label="Views">
//                     <TextInput
//                       value={video.views}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, views: e.target.value } : v)))
//                       }
//                     />
//                   </Field>
//                   <Field label="Badge (optional)">
//                     <TextInput
//                       value={video.badge ?? ""}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, badge: e.target.value || undefined } : v)))
//                       }
//                       placeholder="None"
//                     />
//                   </Field>
//                 </div>
//                 <Field label="Thumbnail image URL">
//                   <div className="flex gap-2">
//                     <TextInput
//                       value={video.thumb}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, thumb: e.target.value } : v)))
//                       }
//                       placeholder="https://... or a YouTube link"
//                     />
//                     <label className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/80 transition hover:bg-white/10">
//                       <Upload className="h-4 w-4" /> Upload
//                       <input
//                         type="file"
//                         accept="image/jpeg,image/png,image/webp,image/gif"
//                         className="hidden"
//                         onChange={async (e) => {
//                           const file = e.target.files?.[0];
//                           e.currentTarget.value = "";
//                           if (!file) return;
//                           if (file.size > 10 * 1024 * 1024) {
//                             onToast("Image must be 10MB or smaller");
//                             return;
//                           }
//                           const session = readSession();
//                           if (!session) {
//                             onToast("Please log in again");
//                             return;
//                           }
//                           const form = new FormData();
//                           form.append("image", file);
//                           try {
//                             const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//                               method: "POST",
//                               headers: { Authorization: `Bearer ${session.token}` },
//                               body: form,
//                             });
//                             const body = await response.json().catch(() => ({}));
//                             if (!response.ok) throw new Error(body.error || "Upload failed");
//                             setVideos(videos.map((v, j) => (j === i ? { ...v, thumb: body.url } : v)));
//                             onToast("Thumbnail uploaded ✓");
//                           } catch (error) {
//                             onToast(error instanceof Error ? error.message : "Upload failed");
//                           }
//                         }}
//                       />
//                     </label>
//                   </div>
//                 </Field>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-between gap-3">
//         <Btn
//           variant="ghost"
//           onClick={() =>
//             setVideos([...videos, { title: "", duration: "10:00", views: "0 views", thumb: "", badge: undefined }])
//           }
//         >
//           <Plus className="h-4 w-4" /> Add video
//         </Btn>
//         <SaveBar saving={false} onSave={save} />
//       </div>
//     </>
//   );
// }

// /* ---------- Gallery ---------- */

// export function GalleryEditor({ data, onCommit, onToast }: EditorProps) {
//   const [items, setItems] = useState(data.gallery);

//   const save = () => {
//     onCommit({ ...data, gallery: items.filter((g) => g.src.trim()) });
//     onToast("Gallery updated ✓");
//   };

//   return (
//     <>
//       <div className="grid gap-5 md:grid-cols-2">
//         {items.map((item, i) => (
//           <Card key={i} title={`Post ${i + 1}`} actions={
//             <IconBtn danger title="Delete" onClick={() => setItems(items.filter((_, j) => j !== i))}>
//               <Trash2 className="h-3.5 w-3.5" />
//             </IconBtn>
//           }>
//             <div className="flex gap-4">
//               <div className="h-24 w-20 flex-none overflow-hidden rounded-lg border border-white/10 bg-ink/60">
//                 {item.src ? (
//                   <img src={item.src} alt="" className="h-full w-full object-cover" />
//                 ) : (
//                   <div className="flex h-full items-center justify-center text-white/20">
//                     <ImageIcon className="h-5 w-5" />
//                   </div>
//                 )}
//               </div>
//               <div className="grid flex-1 gap-3">
//                 <Field label="Image URL">
//                   <div className="flex gap-2">
//                     <TextInput
//                       value={item.src}
//                       onChange={(e) =>
//                         setItems(items.map((g, j) => (j === i ? { ...g, src: e.target.value } : g)))
//                       }
//                       placeholder="https://..."
//                     />
//                     <label className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/80 transition hover:bg-white/10">
//                       <Upload className="h-4 w-4" /> Upload
//                       <input
//                         type="file"
//                         accept="image/jpeg,image/png,image/webp,image/gif"
//                         className="hidden"
//                         onChange={async (e) => {
//                           const file = e.target.files?.[0];
//                           e.currentTarget.value = "";
//                           if (!file) return;
//                           if (file.size > 10 * 1024 * 1024) {
//                             onToast("Image must be 10MB or smaller");
//                             return;
//                           }
//                           const session = readSession();
//                           if (!session) {
//                             onToast("Please log in again");
//                             return;
//                           }
//                           const form = new FormData();
//                           form.append("image", file);
//                           try {
//                             const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//                               method: "POST",
//                               headers: { Authorization: `Bearer ${session.token}` },
//                               body: form,
//                             });
//                             const body = await response.json().catch(() => ({}));
//                             if (!response.ok) throw new Error(body.error || "Upload failed");
//                             setItems(items.map((g, j) => (j === i ? { ...g, src: body.url } : g)));
//                             onToast("Image uploaded ✓");
//                           } catch (error) {
//                             onToast(error instanceof Error ? error.message : "Upload failed");
//                           }
//                         }}
//                       />
//                     </label>
//                   </div>
//                 </Field>
//                 <div className="grid grid-cols-[1fr_2fr] gap-3">
//                   <Field label="Likes">
//                     <TextInput
//                       value={item.likes}
//                       onChange={(e) =>
//                         setItems(items.map((g, j) => (j === i ? { ...g, likes: e.target.value } : g)))
//                       }
//                     />
//                   </Field>
//                   <Field label="Caption">
//                     <TextInput
//                       value={item.caption}
//                       onChange={(e) =>
//                         setItems(items.map((g, j) => (j === i ? { ...g, caption: e.target.value } : g)))
//                       }
//                     />
//                   </Field>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-between gap-3">
//         <Btn variant="ghost" onClick={() => setItems([...items, { src: "", likes: "0", caption: "" }])}>
//           <Plus className="h-4 w-4" /> Add post
//         </Btn>
//         <SaveBar saving={false} onSave={save} />
//       </div>
//     </>
//   );
// }

// /* ---------- Marquee + Pillars ---------- */

// export function MarqueeEditor({ data, onCommit, onToast }: EditorProps) {
//   const [text, setText] = useState(data.marquee.join(", "));
//   return (
//     <>
//       <Card
//         title="Marquee strip"
//         description="Comma-separated words that scroll across the pink banner."
//       >
//         <Field label="Words / phrases">
//           <TextArea
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="VLOGS, REELS, LIFESTYLE"
//           />
//         </Field>
//       </Card>
//       <SaveBar
//         saving={false}
//         onSave={() => {
//           onCommit({
//             ...data,
//             marquee: text.split(",").map((s) => s.trim()).filter(Boolean),
//           });
//           onToast("Marquee updated ✓");
//         }}
//       />
//     </>
//   );
// }

// const ICON_OPTIONS = ["film", "smartphone", "heart"] as const;

// export function PillarsEditor({ data, onCommit, onToast }: EditorProps) {
//   const [pillars, setPillars] = useState(data.pillars);

//   return (
//     <>
//       <div className="space-y-5">
//         {pillars.map((pillar, i) => (
//           <Card
//             key={i}
//             title={`Pillar ${i + 1}`}
//             actions={
//               <IconBtn danger title="Delete" onClick={() => setPillars(pillars.filter((_, j) => j !== i))}>
//                 <Trash2 className="h-3.5 w-3.5" />
//               </IconBtn>
//             }
//           >
//             <div className="grid gap-3 sm:grid-cols-[auto_1fr]">
//               <Field label="Icon">
//                 <select
//                   value={pillar.icon}
//                   onChange={(e) =>
//                     setPillars(
//                       pillars.map((p, j) =>
//                         j === i ? { ...p, icon: e.target.value as (typeof ICON_OPTIONS)[number] } : p
//                       )
//                     )
//                   }
//                   className="w-full rounded-xl border border-white/15 bg-ink/60 px-3 py-2.5 text-sm text-white outline-none focus:border-brand"
//                 >
//                   {ICON_OPTIONS.map((opt) => (
//                     <option key={opt} value={opt}>
//                       {opt}
//                     </option>
//                   ))}
//                 </select>
//               </Field>
//               <Field label="Title">
//                 <TextInput
//                   value={pillar.title}
//                   onChange={(e) =>
//                     setPillars(pillars.map((p, j) => (j === i ? { ...p, title: e.target.value } : p)))
//                   }
//                 />
//               </Field>
//               <div className="sm:col-span-2">
//                 <Field label="Text">
//                   <TextArea
//                     value={pillar.text}
//                     onChange={(e) =>
//                       setPillars(pillars.map((p, j) => (j === i ? { ...p, text: e.target.value } : p)))
//                     }
//                   />
//                 </Field>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-between gap-3">
//         <Btn
//           variant="ghost"
//           onClick={() => setPillars([...pillars, { icon: "heart", title: "", text: "" }])}
//         >
//           <Plus className="h-4 w-4" /> Add pillar
//         </Btn>
//         <SaveBar
//           saving={false}
//           onSave={() => {
//             onCommit({ ...data, pillars: pillars.filter((p) => p.title.trim()) });
//             onToast("Pillars updated ✓");
//           }}
//         />
//       </div>
//     </>
//   );
// }
// import { useState } from "react";
// import { ArrowDown, ArrowUp, ImageIcon, Plus, Trash2, Upload } from "lucide-react";
// import type { SiteData } from "../data/site";
// import { Btn, Card, Field, IconBtn, SaveBar, TextArea, TextInput } from "./widgets";
// import { getApiBase, readSession } from "../lib/store";

// export interface EditorProps {
//   data: SiteData;
//   onCommit: (next: SiteData) => void;
//   onToast: (msg: string) => void;
// }

// /* ---------- Links ---------- */

// export function LinksEditor({ data, onCommit, onToast }: EditorProps) {
//   const [links, setLinks] = useState(data.links);
//   return (
//     <>
//       <Card
//         title="Social links"
//         description="These URLs power every button across the website."
//       >
//         <div className="space-y-4">
//           <Field label="Instagram URL" hint="Full link including the igsi parameter">
//             <TextInput
//               value={links.instagram}
//               onChange={(e) => setLinks({ ...links, instagram: e.target.value })}
//               placeholder="https://www.instagram.com/..."
//             />
//           </Field>
//           <Field label="YouTube URL" hint="Full link to the channel">
//             <TextInput
//               value={links.youtube}
//               onChange={(e) => setLinks({ ...links, youtube: e.target.value })}
//               placeholder="https://youtube.com/@..."
//             />
//           </Field>
//         </div>
//       </Card>
//       <SaveBar
//         saving={false}
//         onSave={() => {
//           onCommit({ ...data, links });
//           onToast("Social links updated ✓");
//         }}
//       />
//     </>
//   );
// }

// /* ---------- Hero ---------- */

// export function HeroEditor({ data, onCommit, onToast }: EditorProps) {
//   const [hero, setHero] = useState(data.hero);
//   const [uploadingImage, setUploadingImage] = useState<"main" | "left" | "right" | null>(null);

//   const uploadHeroImage = async (
//     file: File,
//     key: "main" | "left" | "right"
//   ) => {
//     if (file.size > 10 * 1024 * 1024) {
//       onToast("Image must be 10MB or smaller");
//       return;
//     }

//     const session = readSession();

//     if (!session) {
//       onToast("Please log in again");
//       return;
//     }

//     const form = new FormData();
//     form.append("image", file);

//     try {
//       setUploadingImage(key);

//       const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${session.token}`,
//         },
//         body: form,
//       });

//       const body = await response.json().catch(() => ({}));

//       if (!response.ok) {
//         throw new Error(body.error || "Image upload failed");
//       }

//       setHero((current) => ({
//         ...current,
//         images: {
//           ...current.images,
//           [key]: body.url,
//         },
//       }));

//       onToast(
//         key === "main"
//           ? "Main hero photo uploaded ✓"
//           : key === "left"
//             ? "Left hero photo uploaded ✓"
//             : "Right hero photo uploaded ✓"
//       );
//     } catch (error) {
//       onToast(
//         error instanceof Error
//           ? error.message
//           : "Image upload failed"
//       );
//     } finally {
//       setUploadingImage(null);
//     }
//   };

//   const imageFields = [
//     {
//       key: "main" as const,
//       label: "Main Hero Photo",
//       description: "Large center photo",
//     },
//     {
//       key: "left" as const,
//       label: "Left Hero Photo",
//       description: "Small left vlog photo",
//     },
//     {
//       key: "right" as const,
//       label: "Right Hero Photo",
//       description: "Small right reels photo",
//     },
//   ];

//   return (
//     <>
//       <Card title="Hero section" description="The first thing visitors see.">
//         <div className="space-y-4">
//           <Field label="Display name">
//             <TextInput
//               value={hero.name}
//               onChange={(e) => setHero({ ...hero, name: e.target.value })}
//             />
//           </Field>

//           <Field
//             label="Badge text"
//             hint="Shown in the small pill above the headline"
//           >
//             <TextInput
//               value={hero.badge}
//               onChange={(e) => setHero({ ...hero, badge: e.target.value })}
//             />
//           </Field>

//           <Field label="Tagline">
//             <TextArea
//               value={hero.tagline}
//               onChange={(e) => setHero({ ...hero, tagline: e.target.value })}
//             />
//           </Field>

//           <div className="grid gap-4 sm:grid-cols-2">
//             <Field label="YouTube button label">
//               <TextInput
//                 value={hero.youtubeCta}
//                 onChange={(e) =>
//                   setHero({
//                     ...hero,
//                     youtubeCta: e.target.value,
//                   })
//                 }
//               />
//             </Field>

//             <Field label="Instagram button label">
//               <TextInput
//                 value={hero.instagramCta}
//                 onChange={(e) =>
//                   setHero({
//                     ...hero,
//                     instagramCta: e.target.value,
//                   })
//                 }
//               />
//             </Field>
//           </div>
//         </div>
//       </Card>

//       <div className="mt-6">
//         <Card
//           title="Hero Photos"
//           description="Change the three photos shown in the Hero section."
//         >
//           <div className="grid gap-5 lg:grid-cols-3">
//             {imageFields.map((item) => {
//               const imageUrl = hero.images[item.key];
//               const uploading = uploadingImage === item.key;

//               return (
//                 <div
//                   key={item.key}
//                   className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
//                 >
//                   <div className="aspect-[4/5] overflow-hidden bg-ink/60">
//                     {imageUrl ? (
//                       <img
//                         src={imageUrl}
//                         alt={item.label}
//                         className="h-full w-full object-cover"
//                         onError={(e) => {
//                           (e.currentTarget as HTMLImageElement).style.opacity =
//                             "0.2";
//                         }}
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-white/20">
//                         <ImageIcon className="h-8 w-8" />
//                       </div>
//                     )}
//                   </div>

//                   <div className="space-y-3 p-4">
//                     <div>
//                       <p className="text-sm font-semibold text-white">
//                         {item.label}
//                       </p>

//                       <p className="mt-1 text-xs text-white/40">
//                         {item.description}
//                       </p>
//                     </div>

//                     <Field label="Image URL">
//                       <TextInput
//                         value={imageUrl}
//                         onChange={(e) =>
//                           setHero((current) => ({
//                             ...current,
//                             images: {
//                               ...current.images,
//                               [item.key]: e.target.value,
//                             },
//                           }))
//                         }
//                         placeholder="/images/photo.jpeg or https://..."
//                       />
//                     </Field>

//                     <label className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10">
//                       <Upload className="h-4 w-4" />

//                       {uploading ? "Uploading..." : "Upload Photo"}

//                       <input
//                         type="file"
//                         accept="image/jpeg,image/png,image/webp,image/gif"
//                         className="hidden"
//                         disabled={uploadingImage !== null}
//                         onChange={async (e) => {
//                           const file = e.target.files?.[0];
//                           e.currentTarget.value = "";

//                           if (file) {
//                             await uploadHeroImage(file, item.key);
//                           }
//                         }}
//                       />
//                     </label>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <p className="mt-4 text-xs text-white/40">
//             JPG, PNG, WEBP or GIF · Maximum 10 MB per image
//           </p>
//         </Card>
//       </div>

//       <SaveBar
//         saving={uploadingImage !== null}
//         onSave={() => {
//           onCommit({ ...data, hero });
//           onToast("Hero section updated ✓");
//         }}
//       />
//     </>
//   );
// }

// /* ---------- About ---------- */

// export function AboutEditor({ data, onCommit, onToast }: EditorProps) {
//   const [bio, setBio] = useState(data.about.bio);
//   const [highlightsText, setHighlightsText] = useState(
//     data.about.highlights.join("\n")
//   );
//   const [stats, setStats] = useState(data.about.stats);

//   const save = () => {
//     onCommit({
//       ...data,
//       about: {
//         ...data.about,
//         bio,
//         highlights: highlightsText
//           .split("\n")
//           .map((s) => s.trim())
//           .filter(Boolean),
//         stats,
//       },
//     });
//     onToast("About section updated ✓");
//   };

//   return (
//     <>
//       <Card title="Bio" description="The main introduction paragraph.">
//         <Field label="Bio text">
//           <TextArea value={bio} onChange={(e) => setBio(e.target.value)} />
//         </Field>
//       </Card>

//       <div className="mt-6">
//         <Card
//           title="Highlights"
//           description="One bullet point per line, shown under the bio."
//         >
//           <Field label="Highlights">
//             <TextArea
//               value={highlightsText}
//               onChange={(e) => setHighlightsText(e.target.value)}
//               placeholder={"Daily vlogs…\nFun reels…"}
//             />
//           </Field>
//         </Card>
//       </div>

//       <div className="mt-6">
//         <Card title="Stat cards" description="Three numbers shown under the highlights.">
//           <div className="space-y-4">
//             {stats.map((stat, i) => (
//               <div key={i} className="flex items-end gap-3">
//                 <div className="flex-1">
//                   <Field label="Value">
//                     <TextInput
//                       value={stat.value}
//                       onChange={(e) =>
//                         setStats(stats.map((s, j) => (j === i ? { ...s, value: e.target.value } : s)))
//                       }
//                     />
//                   </Field>
//                 </div>
//                 <div className="flex-[2]">
//                   <Field label="Label">
//                     <TextInput
//                       value={stat.label}
//                       onChange={(e) =>
//                         setStats(stats.map((s, j) => (j === i ? { ...s, label: e.target.value } : s)))
//                       }
//                     />
//                   </Field>
//                 </div>
//                 <IconBtn danger title="Remove" onClick={() => setStats(stats.filter((_, j) => j !== i))}>
//                   <Trash2 className="h-3.5 w-3.5" />
//                 </IconBtn>
//               </div>
//             ))}
//           </div>
//           <div className="mt-4">
//             <Btn variant="ghost" onClick={() => setStats([...stats, { value: "0", label: "New stat" }])}>
//               <Plus className="h-4 w-4" /> Add stat
//             </Btn>
//           </div>
//         </Card>
//       </div>

//       <SaveBar saving={false} onSave={save} />
//     </>
//   );
// }


// /* ---------- My Moments Video ---------- */

// export function MomentsEditor({ data, onCommit, onToast }: EditorProps) {
//   const [video, setVideo] = useState(data.moments?.video ?? "/videos/showcase.mp4");
//   const [uploading, setUploading] = useState(false);

//   const uploadVideo = async (file: File) => {
//     if (file.size > 1024 * 1024 * 1024) {
//       onToast("Video must be 1 GB or smaller");
//       return;
//     }

//     const session = readSession();
//     if (!session) {
//       onToast("Please log in again");
//       return;
//     }

//     const form = new FormData();
//     form.append("video", file);

//     try {
//       setUploading(true);

//       const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${session.token}`,
//         },
//         body: form,
//       });

//       const body = await response.json().catch(() => ({}));

//       if (!response.ok) {
//         throw new Error(body.error || "Video upload failed");
//       }

//       setVideo(body.url);
//       onToast("Video uploaded ✓");
//     } catch (error) {
//       onToast(error instanceof Error ? error.message : "Video upload failed");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <>
//       <Card
//         title="My Moments Video"
//         description="Upload or change the video shown in the My Moments section."
//       >
//         <div className="space-y-4">
//           {video && (
//             <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
//               <video
//                 key={video}
//                 src={video}
//                 controls
//                 preload="metadata"
//                 className="max-h-[520px] w-full object-contain"
//               />
//             </div>
//           )}

//           <Field label="Video URL">
//             <TextInput
//               value={video}
//               onChange={(e) => setVideo(e.target.value)}
//               placeholder="/videos/showcase.mp4"
//             />
//           </Field>

//           <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10">
//             <Upload className="h-4 w-4" />
//             {uploading ? "Uploading..." : "Upload Video"}

//             <input
//               type="file"
//               accept="video/mp4,video/webm,video/quicktime"
//               className="hidden"
//               disabled={uploading}
//               onChange={async (e) => {
//                 const file = e.target.files?.[0];
//                 e.currentTarget.value = "";

//                 if (file) {
//                   await uploadVideo(file);
//                 }
//               }}
//             />
//           </label>

//           <p className="text-xs text-white/40">
//             MP4, WEBM or MOV · Maximum 1 GB
//           </p>
//         </div>
//       </Card>

//       <SaveBar
//         saving={false}
//         onSave={() => {
//           onCommit({
//             ...data,
//             moments: {
//               ...data.moments,
//               video,
//             },
//           });

//           onToast("My Moments video updated ✓");
//         }}
//       />
//     </>
//   );
// }

// /* ---------- Videos ---------- */

// export function VideosEditor({ data, onCommit, onToast }: EditorProps) {
//   const [videos, setVideos] = useState(data.videos);

//   const move = (i: number, dir: -1 | 1) => {
//     const next = [...videos];
//     const j = i + dir;
//     if (j < 0 || j >= next.length) return;
//     [next[i], next[j]] = [next[j], next[i]];
//     setVideos(next);
//   };

//   const save = () => {
//     onCommit({ ...data, videos: videos.filter((v) => v.title.trim() || v.thumb.trim()) });
//     onToast("Videos updated ✓");
//   };

//   return (
//     <>
//       <div className="space-y-5">
//         {videos.map((video, i) => (
//           <Card
//             key={i}
//             title={`Video ${i + 1}`}
//             actions={
//               <div className="flex gap-1.5">
//                 <IconBtn title="Move up" disabled={i === 0} onClick={() => move(i, -1)}>
//                   <ArrowUp className="h-3.5 w-3.5" />
//                 </IconBtn>
//                 <IconBtn title="Move down" disabled={i === videos.length - 1} onClick={() => move(i, 1)}>
//                   <ArrowDown className="h-3.5 w-3.5" />
//                 </IconBtn>
//                 <IconBtn danger title="Delete" onClick={() => setVideos(videos.filter((_, j) => j !== i))}>
//                   <Trash2 className="h-3.5 w-3.5" />
//                 </IconBtn>
//               </div>
//             }
//           >
//             <div className="flex gap-4">
//               <div className="h-20 w-32 flex-none overflow-hidden rounded-lg border border-white/10 bg-ink/60">
//                 {video.thumb ? (
//                   <img src={video.thumb} alt="" className="h-full w-full object-cover" onError={(e) => ((e.target as HTMLImageElement).style.opacity = "0.2")} />
//                 ) : (
//                   <div className="flex h-full items-center justify-center text-white/20">
//                     <ImageIcon className="h-6 w-6" />
//                   </div>
//                 )}
//               </div>
//               <div className="grid flex-1 gap-3">
//                 <Field label="Title">
//                   <TextInput
//                     value={video.title}
//                     onChange={(e) =>
//                       setVideos(videos.map((v, j) => (j === i ? { ...v, title: e.target.value } : v)))
//                     }
//                   />
//                 </Field>
//                 <div className="grid grid-cols-3 gap-3">
//                   <Field label="Duration">
//                     <TextInput
//                       value={video.duration}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, duration: e.target.value } : v)))
//                       }
//                     />
//                   </Field>
//                   <Field label="Views">
//                     <TextInput
//                       value={video.views}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, views: e.target.value } : v)))
//                       }
//                     />
//                   </Field>
//                   <Field label="Badge (optional)">
//                     <TextInput
//                       value={video.badge ?? ""}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, badge: e.target.value || undefined } : v)))
//                       }
//                       placeholder="None"
//                     />
//                   </Field>
//                 </div>
//                 <Field label="Thumbnail image URL">
//                   <div className="flex gap-2">
//                     <TextInput
//                       value={video.thumb}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, thumb: e.target.value } : v)))
//                       }
//                       placeholder="https://... or a YouTube link"
//                     />
//                     <label className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/80 transition hover:bg-white/10">
//                       <Upload className="h-4 w-4" /> Upload
//                       <input
//                         type="file"
//                         accept="image/jpeg,image/png,image/webp,image/gif"
//                         className="hidden"
//                         onChange={async (e) => {
//                           const file = e.target.files?.[0];
//                           e.currentTarget.value = "";
//                           if (!file) return;
//                           if (file.size > 10 * 1024 * 1024) {
//                             onToast("Image must be 10MB or smaller");
//                             return;
//                           }
//                           const session = readSession();
//                           if (!session) {
//                             onToast("Please log in again");
//                             return;
//                           }
//                           const form = new FormData();
//                           form.append("image", file);
//                           try {
//                             const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//                               method: "POST",
//                               headers: { Authorization: `Bearer ${session.token}` },
//                               body: form,
//                             });
//                             const body = await response.json().catch(() => ({}));
//                             if (!response.ok) throw new Error(body.error || "Upload failed");
//                             setVideos(videos.map((v, j) => (j === i ? { ...v, thumb: body.url } : v)));
//                             onToast("Thumbnail uploaded ✓");
//                           } catch (error) {
//                             onToast(error instanceof Error ? error.message : "Upload failed");
//                           }
//                         }}
//                       />
//                     </label>
//                   </div>
//                 </Field>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-between gap-3">
//         <Btn
//           variant="ghost"
//           onClick={() =>
//             setVideos([...videos, { title: "", duration: "10:00", views: "0 views", thumb: "", badge: undefined }])
//           }
//         >
//           <Plus className="h-4 w-4" /> Add video
//         </Btn>
//         <SaveBar saving={false} onSave={save} />
//       </div>
//     </>
//   );
// }

// /* ---------- Gallery ---------- */

// export function GalleryEditor({ data, onCommit, onToast }: EditorProps) {
//   const [items, setItems] = useState(data.gallery);

//   const save = () => {
//     onCommit({ ...data, gallery: items.filter((g) => g.src.trim()) });
//     onToast("Gallery updated ✓");
//   };

//   return (
//     <>
//       <div className="grid gap-5 md:grid-cols-2">
//         {items.map((item, i) => (
//           <Card key={i} title={`Post ${i + 1}`} actions={
//             <IconBtn danger title="Delete" onClick={() => setItems(items.filter((_, j) => j !== i))}>
//               <Trash2 className="h-3.5 w-3.5" />
//             </IconBtn>
//           }>
//             <div className="flex gap-4">
//               <div className="h-24 w-20 flex-none overflow-hidden rounded-lg border border-white/10 bg-ink/60">
//                 {item.src ? (
//                   <img src={item.src} alt="" className="h-full w-full object-cover" />
//                 ) : (
//                   <div className="flex h-full items-center justify-center text-white/20">
//                     <ImageIcon className="h-5 w-5" />
//                   </div>
//                 )}
//               </div>
//               <div className="grid flex-1 gap-3">
//                 <Field label="Image URL">
//                   <div className="flex gap-2">
//                     <TextInput
//                       value={item.src}
//                       onChange={(e) =>
//                         setItems(items.map((g, j) => (j === i ? { ...g, src: e.target.value } : g)))
//                       }
//                       placeholder="https://..."
//                     />
//                     <label className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/80 transition hover:bg-white/10">
//                       <Upload className="h-4 w-4" /> Upload
//                       <input
//                         type="file"
//                         accept="image/jpeg,image/png,image/webp,image/gif"
//                         className="hidden"
//                         onChange={async (e) => {
//                           const file = e.target.files?.[0];
//                           e.currentTarget.value = "";
//                           if (!file) return;
//                           if (file.size > 10 * 1024 * 1024) {
//                             onToast("Image must be 10MB or smaller");
//                             return;
//                           }
//                           const session = readSession();
//                           if (!session) {
//                             onToast("Please log in again");
//                             return;
//                           }
//                           const form = new FormData();
//                           form.append("image", file);
//                           try {
//                             const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//                               method: "POST",
//                               headers: { Authorization: `Bearer ${session.token}` },
//                               body: form,
//                             });
//                             const body = await response.json().catch(() => ({}));
//                             if (!response.ok) throw new Error(body.error || "Upload failed");
//                             setItems(items.map((g, j) => (j === i ? { ...g, src: body.url } : g)));
//                             onToast("Image uploaded ✓");
//                           } catch (error) {
//                             onToast(error instanceof Error ? error.message : "Upload failed");
//                           }
//                         }}
//                       />
//                     </label>
//                   </div>
//                 </Field>
//                 <div className="grid grid-cols-[1fr_2fr] gap-3">
//                   <Field label="Likes">
//                     <TextInput
//                       value={item.likes}
//                       onChange={(e) =>
//                         setItems(items.map((g, j) => (j === i ? { ...g, likes: e.target.value } : g)))
//                       }
//                     />
//                   </Field>
//                   <Field label="Caption">
//                     <TextInput
//                       value={item.caption}
//                       onChange={(e) =>
//                         setItems(items.map((g, j) => (j === i ? { ...g, caption: e.target.value } : g)))
//                       }
//                     />
//                   </Field>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-between gap-3">
//         <Btn variant="ghost" onClick={() => setItems([...items, { src: "", likes: "0", caption: "" }])}>
//           <Plus className="h-4 w-4" /> Add post
//         </Btn>
//         <SaveBar saving={false} onSave={save} />
//       </div>
//     </>
//   );
// }

// /* ---------- Marquee + Pillars ---------- */

// export function MarqueeEditor({ data, onCommit, onToast }: EditorProps) {
//   const [text, setText] = useState(data.marquee.join(", "));
//   return (
//     <>
//       <Card
//         title="Marquee strip"
//         description="Comma-separated words that scroll across the pink banner."
//       >
//         <Field label="Words / phrases">
//           <TextArea
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="VLOGS, REELS, LIFESTYLE"
//           />
//         </Field>
//       </Card>
//       <SaveBar
//         saving={false}
//         onSave={() => {
//           onCommit({
//             ...data,
//             marquee: text.split(",").map((s) => s.trim()).filter(Boolean),
//           });
//           onToast("Marquee updated ✓");
//         }}
//       />
//     </>
//   );
// }

// const ICON_OPTIONS = [
//   { value: "youtube", label: "YouTube" },
//   { value: "instagram", label: "Instagram / Reels" },
//   { value: "camera", label: "Camera" },
//   { value: "clapperboard", label: "Clapperboard" },
//   { value: "video", label: "Video" },
//   { value: "play", label: "Play" },
//   { value: "film", label: "Film" },
//   { value: "smartphone", label: "Smartphone" },
//   { value: "heart", label: "Heart" },
//   { value: "sparkles", label: "Sparkles" },
//   { value: "star", label: "Star" },
//   { value: "music", label: "Music" },
//   { value: "mic", label: "Microphone" },
//   { value: "image", label: "Photo" },
//   { value: "smile", label: "Smile / Fun" },
// ] as const;

// export function PillarsEditor({ data, onCommit, onToast }: EditorProps) {
//   const [pillars, setPillars] = useState(data.pillars);

//   return (
//     <>
//       <div className="space-y-5">
//         {pillars.map((pillar, i) => (
//           <Card
//             key={i}
//             title={`Pillar ${i + 1}`}
//             actions={
//               <IconBtn danger title="Delete" onClick={() => setPillars(pillars.filter((_, j) => j !== i))}>
//                 <Trash2 className="h-3.5 w-3.5" />
//               </IconBtn>
//             }
//           >
//             <div className="grid gap-3 sm:grid-cols-[auto_1fr]">
//               <Field label="Icon">
//                 <select
//                   value={pillar.icon}
//                   onChange={(e) =>
//                     setPillars(
//                       pillars.map((p, j) =>
//                         j === i ? { ...p, icon: e.target.value as typeof p.icon } : p
//                       )
//                     )
//                   }
//                   className="w-full rounded-xl border border-white/15 bg-ink/60 px-3 py-2.5 text-sm text-white outline-none focus:border-brand"
//                 >
//                   {ICON_OPTIONS.map((opt) => (
//                     <option key={opt.value} value={opt.value}>
//                       {opt.label}
//                     </option>
//                   ))}
//                 </select>
//               </Field>
//               <Field label="Title">
//                 <TextInput
//                   value={pillar.title}
//                   onChange={(e) =>
//                     setPillars(pillars.map((p, j) => (j === i ? { ...p, title: e.target.value } : p)))
//                   }
//                 />
//               </Field>
//               <div className="sm:col-span-2">
//                 <Field label="Text">
//                   <TextArea
//                     value={pillar.text}
//                     onChange={(e) =>
//                       setPillars(pillars.map((p, j) => (j === i ? { ...p, text: e.target.value } : p)))
//                     }
//                   />
//                 </Field>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-between gap-3">
//         <Btn
//           variant="ghost"
//           onClick={() => setPillars([...pillars, { icon: "heart", title: "", text: "" }])}
//         >
//           <Plus className="h-4 w-4" /> Add pillar
//         </Btn>
//         <SaveBar
//           saving={false}
//           onSave={() => {
//             onCommit({ ...data, pillars: pillars.filter((p) => p.title.trim()) });
//             onToast("Pillars updated ✓");
//           }}
//         />
//       </div>
//     </>
//   );
// }
// import { useState } from "react";
// import { ArrowDown, ArrowUp, ImageIcon, Plus, Trash2, Upload } from "lucide-react";
// import type { SiteData } from "../data/site";
// import { Btn, Card, Field, IconBtn, SaveBar, TextArea, TextInput } from "./widgets";
// import { getApiBase, readSession } from "../lib/store";

// export interface EditorProps {
//   data: SiteData;
//   onCommit: (next: SiteData) => void;
//   onToast: (msg: string) => void;
// }

// /* ---------- Links ---------- */

// export function LinksEditor({ data, onCommit, onToast }: EditorProps) {
//   const [links, setLinks] = useState(data.links);
//   return (
//     <>
//       <Card
//         title="Social links"
//         description="These URLs power every button across the website."
//       >
//         <div className="space-y-4">
//           <Field label="Instagram URL" hint="Full link including the igsi parameter">
//             <TextInput
//               value={links.instagram}
//               onChange={(e) => setLinks({ ...links, instagram: e.target.value })}
//               placeholder="https://www.instagram.com/..."
//             />
//           </Field>
//           <Field label="YouTube URL" hint="Full link to the channel">
//             <TextInput
//               value={links.youtube}
//               onChange={(e) => setLinks({ ...links, youtube: e.target.value })}
//               placeholder="https://youtube.com/@..."
//             />
//           </Field>
//         </div>
//       </Card>
//       <SaveBar
//         saving={false}
//         onSave={() => {
//           onCommit({ ...data, links });
//           onToast("Social links updated ✓");
//         }}
//       />
//     </>
//   );
// }

// /* ---------- Hero ---------- */

// export function HeroEditor({ data, onCommit, onToast }: EditorProps) {
//   const [hero, setHero] = useState(data.hero);
//   const [uploadingImage, setUploadingImage] = useState<"main" | "left" | "right" | null>(null);

//   const uploadHeroImage = async (
//     file: File,
//     key: "main" | "left" | "right"
//   ) => {
//     if (file.size > 10 * 1024 * 1024) {
//       onToast("Image must be 10MB or smaller");
//       return;
//     }

//     const session = readSession();

//     if (!session) {
//       onToast("Please log in again");
//       return;
//     }

//     const form = new FormData();
//     form.append("image", file);

//     try {
//       setUploadingImage(key);

//       const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${session.token}`,
//         },
//         body: form,
//       });

//       const body = await response.json().catch(() => ({}));

//       if (!response.ok) {
//         throw new Error(body.error || "Image upload failed");
//       }

//       setHero((current) => ({
//         ...current,
//         images: {
//           ...current.images,
//           [key]: body.url,
//         },
//       }));

//       onToast(
//         key === "main"
//           ? "Main hero photo uploaded ✓"
//           : key === "left"
//             ? "Left hero photo uploaded ✓"
//             : "Right hero photo uploaded ✓"
//       );
//     } catch (error) {
//       onToast(
//         error instanceof Error
//           ? error.message
//           : "Image upload failed"
//       );
//     } finally {
//       setUploadingImage(null);
//     }
//   };

//   const imageFields = [
//     {
//       key: "main" as const,
//       label: "Main Hero Photo",
//       description: "Large center photo",
//     },
//     {
//       key: "left" as const,
//       label: "Left Hero Photo",
//       description: "Small left vlog photo",
//     },
//     {
//       key: "right" as const,
//       label: "Right Hero Photo",
//       description: "Small right reels photo",
//     },
//   ];

//   return (
//     <>
//       <Card title="Hero section" description="The first thing visitors see.">
//         <div className="space-y-4">
//           <Field label="Display name">
//             <TextInput
//               value={hero.name}
//               onChange={(e) => setHero({ ...hero, name: e.target.value })}
//             />
//           </Field>

//           <Field
//             label="Badge text"
//             hint="Shown in the small pill above the headline"
//           >
//             <TextInput
//               value={hero.badge}
//               onChange={(e) => setHero({ ...hero, badge: e.target.value })}
//             />
//           </Field>

//           <Field label="Tagline">
//             <TextArea
//               value={hero.tagline}
//               onChange={(e) => setHero({ ...hero, tagline: e.target.value })}
//             />
//           </Field>

//           <div className="grid gap-4 sm:grid-cols-2">
//             <Field label="YouTube button label">
//               <TextInput
//                 value={hero.youtubeCta}
//                 onChange={(e) =>
//                   setHero({
//                     ...hero,
//                     youtubeCta: e.target.value,
//                   })
//                 }
//               />
//             </Field>

//             <Field label="Instagram button label">
//               <TextInput
//                 value={hero.instagramCta}
//                 onChange={(e) =>
//                   setHero({
//                     ...hero,
//                     instagramCta: e.target.value,
//                   })
//                 }
//               />
//             </Field>
//           </div>
//         </div>
//       </Card>

//       <div className="mt-6">
//         <Card
//           title="Hero Photos"
//           description="Change the three photos shown in the Hero section."
//         >
//           <div className="grid gap-5 lg:grid-cols-3">
//             {imageFields.map((item) => {
//               const imageUrl = hero.images[item.key];
//               const uploading = uploadingImage === item.key;

//               return (
//                 <div
//                   key={item.key}
//                   className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
//                 >
//                   <div className="aspect-[4/5] overflow-hidden bg-ink/60">
//                     {imageUrl ? (
//                       <img
//                         src={imageUrl}
//                         alt={item.label}
//                         className="h-full w-full object-cover"
//                         onError={(e) => {
//                           (e.currentTarget as HTMLImageElement).style.opacity =
//                             "0.2";
//                         }}
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-white/20">
//                         <ImageIcon className="h-8 w-8" />
//                       </div>
//                     )}
//                   </div>

//                   <div className="space-y-3 p-4">
//                     <div>
//                       <p className="text-sm font-semibold text-white">
//                         {item.label}
//                       </p>

//                       <p className="mt-1 text-xs text-white/40">
//                         {item.description}
//                       </p>
//                     </div>

//                     <Field label="Image URL">
//                       <TextInput
//                         value={imageUrl}
//                         onChange={(e) =>
//                           setHero((current) => ({
//                             ...current,
//                             images: {
//                               ...current.images,
//                               [item.key]: e.target.value,
//                             },
//                           }))
//                         }
//                         placeholder="/images/photo.jpeg or https://..."
//                       />
//                     </Field>

//                     <label className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10">
//                       <Upload className="h-4 w-4" />

//                       {uploading ? "Uploading..." : "Upload Photo"}

//                       <input
//                         type="file"
//                         accept="image/jpeg,image/png,image/webp,image/gif"
//                         className="hidden"
//                         disabled={uploadingImage !== null}
//                         onChange={async (e) => {
//                           const file = e.target.files?.[0];
//                           e.currentTarget.value = "";

//                           if (file) {
//                             await uploadHeroImage(file, item.key);
//                           }
//                         }}
//                       />
//                     </label>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <p className="mt-4 text-xs text-white/40">
//             JPG, PNG, WEBP or GIF · Maximum 10 MB per image
//           </p>
//         </Card>
//       </div>

//       <SaveBar
//         saving={uploadingImage !== null}
//         onSave={() => {
//           onCommit({ ...data, hero });
//           onToast("Hero section updated ✓");
//         }}
//       />
//     </>
//   );
// }

// /* ---------- About ---------- */

// export function AboutEditor({ data, onCommit, onToast }: EditorProps) {
//   const [bio, setBio] = useState(data.about.bio);
//   const [highlightsText, setHighlightsText] = useState(
//     data.about.highlights.join("\n")
//   );
//   const [stats, setStats] = useState(data.about.stats);
//   const [images, setImages] = useState(data.about.images);
//   const [uploadingImage, setUploadingImage] = useState<"main" | "small" | null>(
//     null
//   );

//   const uploadAboutImage = async (
//     file: File,
//     key: "main" | "small"
//   ) => {
//     if (file.size > 10 * 1024 * 1024) {
//       onToast("Image must be 10MB or smaller");
//       return;
//     }

//     const session = readSession();

//     if (!session) {
//       onToast("Please log in again");
//       return;
//     }

//     const form = new FormData();
//     form.append("image", file);

//     try {
//       setUploadingImage(key);

//       const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${session.token}`,
//         },
//         body: form,
//       });

//       const body = await response.json().catch(() => ({}));

//       if (!response.ok) {
//         throw new Error(body.error || "Image upload failed");
//       }

//       setImages((current) => ({
//         ...current,
//         [key]: body.url,
//       }));

//       onToast(
//         key === "main"
//           ? "Main About photo uploaded ✓"
//           : "Small About photo uploaded ✓"
//       );
//     } catch (error) {
//       onToast(
//         error instanceof Error
//           ? error.message
//           : "Image upload failed"
//       );
//     } finally {
//       setUploadingImage(null);
//     }
//   };

//   const save = () => {
//     onCommit({
//       ...data,
//       about: {
//         ...data.about,
//         bio,
//         highlights: highlightsText
//           .split("\n")
//           .map((s) => s.trim())
//           .filter(Boolean),
//         stats,
//         images,
//       },
//     });

//     onToast("About section updated ✓");
//   };

//   const imageFields = [
//     {
//       key: "main" as const,
//       label: "Main About Photo",
//       description: "Large photo shown on the left side",
//     },
//     {
//       key: "small" as const,
//       label: "Small About Photo",
//       description: "Small floating little moments photo",
//     },
//   ];

//   return (
//     <>
//       <Card title="Bio" description="The main introduction paragraph.">
//         <Field label="Bio text">
//           <TextArea value={bio} onChange={(e) => setBio(e.target.value)} />
//         </Field>
//       </Card>

//       <div className="mt-6">
//         <Card
//           title="Highlights"
//           description="One bullet point per line, shown under the bio."
//         >
//           <Field label="Highlights">
//             <TextArea
//               value={highlightsText}
//               onChange={(e) => setHighlightsText(e.target.value)}
//               placeholder={"Daily vlogs…\nFun reels…"}
//             />
//           </Field>
//         </Card>
//       </div>

//       <div className="mt-6">
//         <Card
//           title="Stat cards"
//           description="Three numbers shown under the highlights."
//         >
//           <div className="space-y-4">
//             {stats.map((stat, i) => (
//               <div key={i} className="flex items-end gap-3">
//                 <div className="flex-1">
//                   <Field label="Value">
//                     <TextInput
//                       value={stat.value}
//                       onChange={(e) =>
//                         setStats(
//                           stats.map((s, j) =>
//                             j === i ? { ...s, value: e.target.value } : s
//                           )
//                         )
//                       }
//                     />
//                   </Field>
//                 </div>

//                 <div className="flex-[2]">
//                   <Field label="Label">
//                     <TextInput
//                       value={stat.label}
//                       onChange={(e) =>
//                         setStats(
//                           stats.map((s, j) =>
//                             j === i ? { ...s, label: e.target.value } : s
//                           )
//                         )
//                       }
//                     />
//                   </Field>
//                 </div>

//                 <IconBtn
//                   danger
//                   title="Remove"
//                   onClick={() =>
//                     setStats(stats.filter((_, j) => j !== i))
//                   }
//                 >
//                   <Trash2 className="h-3.5 w-3.5" />
//                 </IconBtn>
//               </div>
//             ))}
//           </div>

//           <div className="mt-4">
//             <Btn
//               variant="ghost"
//               onClick={() =>
//                 setStats([
//                   ...stats,
//                   {
//                     value: "0",
//                     label: "New stat",
//                   },
//                 ])
//               }
//             >
//               <Plus className="h-4 w-4" />
//               Add stat
//             </Btn>
//           </div>
//         </Card>
//       </div>

//       <div className="mt-6">
//         <Card
//           title="About Photos"
//           description="Change the two photos shown in the About section."
//         >
//           <div className="grid gap-5 md:grid-cols-2">
//             {imageFields.map((item) => {
//               const imageUrl = images[item.key];
//               const uploading = uploadingImage === item.key;

//               return (
//                 <div
//                   key={item.key}
//                   className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
//                 >
//                   <div className="aspect-[4/5] overflow-hidden bg-ink/60">
//                     {imageUrl ? (
//                       <img
//                         src={imageUrl}
//                         alt={item.label}
//                         className="h-full w-full object-cover"
//                         onError={(e) => {
//                           e.currentTarget.style.opacity = "0.2";
//                         }}
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-white/20">
//                         <ImageIcon className="h-8 w-8" />
//                       </div>
//                     )}
//                   </div>

//                   <div className="space-y-3 p-4">
//                     <div>
//                       <p className="text-sm font-semibold text-white">
//                         {item.label}
//                       </p>

//                       <p className="mt-1 text-xs text-white/40">
//                         {item.description}
//                       </p>
//                     </div>

//                     <Field label="Image URL">
//                       <TextInput
//                         value={imageUrl}
//                         onChange={(e) =>
//                           setImages((current) => ({
//                             ...current,
//                             [item.key]: e.target.value,
//                           }))
//                         }
//                         placeholder="/images/photo.jpeg or https://..."
//                       />
//                     </Field>

//                     <label className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10">
//                       <Upload className="h-4 w-4" />

//                       {uploading ? "Uploading..." : "Upload Photo"}

//                       <input
//                         type="file"
//                         accept="image/jpeg,image/png,image/webp,image/gif"
//                         className="hidden"
//                         disabled={uploadingImage !== null}
//                         onChange={async (e) => {
//                           const file = e.target.files?.[0];
//                           e.currentTarget.value = "";

//                           if (file) {
//                             await uploadAboutImage(file, item.key);
//                           }
//                         }}
//                       />
//                     </label>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <p className="mt-4 text-xs text-white/40">
//             JPG, PNG, WEBP or GIF · Maximum 10 MB per image
//           </p>
//         </Card>
//       </div>

//       <SaveBar
//         saving={uploadingImage !== null}
//         onSave={save}
//       />
//     </>
//   );
// }


// /* ---------- My Moments Video ---------- */

// export function MomentsEditor({ data, onCommit, onToast }: EditorProps) {
//   const [video, setVideo] = useState(data.moments?.video ?? "/videos/showcase.mp4");
//   const [uploading, setUploading] = useState(false);

//   const uploadVideo = async (file: File) => {
//     if (file.size > 1024 * 1024 * 1024) {
//       onToast("Video must be 1 GB or smaller");
//       return;
//     }

//     const session = readSession();
//     if (!session) {
//       onToast("Please log in again");
//       return;
//     }

//     const form = new FormData();
//     form.append("video", file);

//     try {
//       setUploading(true);

//       const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${session.token}`,
//         },
//         body: form,
//       });

//       const body = await response.json().catch(() => ({}));

//       if (!response.ok) {
//         throw new Error(body.error || "Video upload failed");
//       }

//       setVideo(body.url);
//       onToast("Video uploaded ✓");
//     } catch (error) {
//       onToast(error instanceof Error ? error.message : "Video upload failed");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <>
//       <Card
//         title="My Moments Video"
//         description="Upload or change the video shown in the My Moments section."
//       >
//         <div className="space-y-4">
//           {video && (
//             <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
//               <video
//                 key={video}
//                 src={video}
//                 controls
//                 preload="metadata"
//                 className="max-h-[520px] w-full object-contain"
//               />
//             </div>
//           )}

//           <Field label="Video URL">
//             <TextInput
//               value={video}
//               onChange={(e) => setVideo(e.target.value)}
//               placeholder="/videos/showcase.mp4"
//             />
//           </Field>

//           <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10">
//             <Upload className="h-4 w-4" />
//             {uploading ? "Uploading..." : "Upload Video"}

//             <input
//               type="file"
//               accept="video/mp4,video/webm,video/quicktime"
//               className="hidden"
//               disabled={uploading}
//               onChange={async (e) => {
//                 const file = e.target.files?.[0];
//                 e.currentTarget.value = "";

//                 if (file) {
//                   await uploadVideo(file);
//                 }
//               }}
//             />
//           </label>

//           <p className="text-xs text-white/40">
//             MP4, WEBM or MOV · Maximum 1 GB
//           </p>
//         </div>
//       </Card>

//       <SaveBar
//         saving={false}
//         onSave={() => {
//           onCommit({
//             ...data,
//             moments: {
//               ...data.moments,
//               video,
//             },
//           });

//           onToast("My Moments video updated ✓");
//         }}
//       />
//     </>
//   );
// }

// /* ---------- Videos ---------- */

// export function VideosEditor({ data, onCommit, onToast }: EditorProps) {
//   const [videos, setVideos] = useState(data.videos);

//   const move = (i: number, dir: -1 | 1) => {
//     const next = [...videos];
//     const j = i + dir;
//     if (j < 0 || j >= next.length) return;
//     [next[i], next[j]] = [next[j], next[i]];
//     setVideos(next);
//   };

//   const save = () => {
//     onCommit({ ...data, videos: videos.filter((v) => v.title.trim() || v.thumb.trim()) });
//     onToast("Videos updated ✓");
//   };

//   return (
//     <>
//       <div className="space-y-5">
//         {videos.map((video, i) => (
//           <Card
//             key={i}
//             title={`Video ${i + 1}`}
//             actions={
//               <div className="flex gap-1.5">
//                 <IconBtn title="Move up" disabled={i === 0} onClick={() => move(i, -1)}>
//                   <ArrowUp className="h-3.5 w-3.5" />
//                 </IconBtn>
//                 <IconBtn title="Move down" disabled={i === videos.length - 1} onClick={() => move(i, 1)}>
//                   <ArrowDown className="h-3.5 w-3.5" />
//                 </IconBtn>
//                 <IconBtn danger title="Delete" onClick={() => setVideos(videos.filter((_, j) => j !== i))}>
//                   <Trash2 className="h-3.5 w-3.5" />
//                 </IconBtn>
//               </div>
//             }
//           >
//             <div className="flex gap-4">
//               <div className="h-20 w-32 flex-none overflow-hidden rounded-lg border border-white/10 bg-ink/60">
//                 {video.thumb ? (
//                   <img src={video.thumb} alt="" className="h-full w-full object-cover" onError={(e) => ((e.target as HTMLImageElement).style.opacity = "0.2")} />
//                 ) : (
//                   <div className="flex h-full items-center justify-center text-white/20">
//                     <ImageIcon className="h-6 w-6" />
//                   </div>
//                 )}
//               </div>
//               <div className="grid flex-1 gap-3">
//                 <Field label="Title">
//                   <TextInput
//                     value={video.title}
//                     onChange={(e) =>
//                       setVideos(videos.map((v, j) => (j === i ? { ...v, title: e.target.value } : v)))
//                     }
//                   />
//                 </Field>
//                 <div className="grid grid-cols-3 gap-3">
//                   <Field label="Duration">
//                     <TextInput
//                       value={video.duration}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, duration: e.target.value } : v)))
//                       }
//                     />
//                   </Field>
//                   <Field label="Views">
//                     <TextInput
//                       value={video.views}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, views: e.target.value } : v)))
//                       }
//                     />
//                   </Field>
//                   <Field label="Badge (optional)">
//                     <TextInput
//                       value={video.badge ?? ""}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, badge: e.target.value || undefined } : v)))
//                       }
//                       placeholder="None"
//                     />
//                   </Field>
//                 </div>
//                 <Field label="Thumbnail image URL">
//                   <div className="flex gap-2">
//                     <TextInput
//                       value={video.thumb}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, thumb: e.target.value } : v)))
//                       }
//                       placeholder="https://... or a YouTube link"
//                     />
//                     <label className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/80 transition hover:bg-white/10">
//                       <Upload className="h-4 w-4" /> Upload
//                       <input
//                         type="file"
//                         accept="image/jpeg,image/png,image/webp,image/gif"
//                         className="hidden"
//                         onChange={async (e) => {
//                           const file = e.target.files?.[0];
//                           e.currentTarget.value = "";
//                           if (!file) return;
//                           if (file.size > 10 * 1024 * 1024) {
//                             onToast("Image must be 10MB or smaller");
//                             return;
//                           }
//                           const session = readSession();
//                           if (!session) {
//                             onToast("Please log in again");
//                             return;
//                           }
//                           const form = new FormData();
//                           form.append("image", file);
//                           try {
//                             const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//                               method: "POST",
//                               headers: { Authorization: `Bearer ${session.token}` },
//                               body: form,
//                             });
//                             const body = await response.json().catch(() => ({}));
//                             if (!response.ok) throw new Error(body.error || "Upload failed");
//                             setVideos(videos.map((v, j) => (j === i ? { ...v, thumb: body.url } : v)));
//                             onToast("Thumbnail uploaded ✓");
//                           } catch (error) {
//                             onToast(error instanceof Error ? error.message : "Upload failed");
//                           }
//                         }}
//                       />
//                     </label>
//                   </div>
//                 </Field>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-between gap-3">
//         <Btn
//           variant="ghost"
//           onClick={() =>
//             setVideos([...videos, { title: "", duration: "10:00", views: "0 views", thumb: "", badge: undefined }])
//           }
//         >
//           <Plus className="h-4 w-4" /> Add video
//         </Btn>
//         <SaveBar saving={false} onSave={save} />
//       </div>
//     </>
//   );
// }

// /* ---------- Gallery ---------- */

// export function GalleryEditor({ data, onCommit, onToast }: EditorProps) {
//   const [items, setItems] = useState(data.gallery);

//   const save = () => {
//     onCommit({ ...data, gallery: items.filter((g) => g.src.trim()) });
//     onToast("Gallery updated ✓");
//   };

//   return (
//     <>
//       <div className="grid gap-5 md:grid-cols-2">
//         {items.map((item, i) => (
//           <Card key={i} title={`Post ${i + 1}`} actions={
//             <IconBtn danger title="Delete" onClick={() => setItems(items.filter((_, j) => j !== i))}>
//               <Trash2 className="h-3.5 w-3.5" />
//             </IconBtn>
//           }>
//             <div className="flex gap-4">
//               <div className="h-24 w-20 flex-none overflow-hidden rounded-lg border border-white/10 bg-ink/60">
//                 {item.src ? (
//                   <img src={item.src} alt="" className="h-full w-full object-cover" />
//                 ) : (
//                   <div className="flex h-full items-center justify-center text-white/20">
//                     <ImageIcon className="h-5 w-5" />
//                   </div>
//                 )}
//               </div>
//               <div className="grid flex-1 gap-3">
//                 <Field label="Image URL">
//                   <div className="flex gap-2">
//                     <TextInput
//                       value={item.src}
//                       onChange={(e) =>
//                         setItems(items.map((g, j) => (j === i ? { ...g, src: e.target.value } : g)))
//                       }
//                       placeholder="https://..."
//                     />
//                     <label className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/80 transition hover:bg-white/10">
//                       <Upload className="h-4 w-4" /> Upload
//                       <input
//                         type="file"
//                         accept="image/jpeg,image/png,image/webp,image/gif"
//                         className="hidden"
//                         onChange={async (e) => {
//                           const file = e.target.files?.[0];
//                           e.currentTarget.value = "";
//                           if (!file) return;
//                           if (file.size > 10 * 1024 * 1024) {
//                             onToast("Image must be 10MB or smaller");
//                             return;
//                           }
//                           const session = readSession();
//                           if (!session) {
//                             onToast("Please log in again");
//                             return;
//                           }
//                           const form = new FormData();
//                           form.append("image", file);
//                           try {
//                             const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//                               method: "POST",
//                               headers: { Authorization: `Bearer ${session.token}` },
//                               body: form,
//                             });
//                             const body = await response.json().catch(() => ({}));
//                             if (!response.ok) throw new Error(body.error || "Upload failed");
//                             setItems(items.map((g, j) => (j === i ? { ...g, src: body.url } : g)));
//                             onToast("Image uploaded ✓");
//                           } catch (error) {
//                             onToast(error instanceof Error ? error.message : "Upload failed");
//                           }
//                         }}
//                       />
//                     </label>
//                   </div>
//                 </Field>
//                 <div className="grid grid-cols-[1fr_2fr] gap-3">
//                   <Field label="Likes">
//                     <TextInput
//                       value={item.likes}
//                       onChange={(e) =>
//                         setItems(items.map((g, j) => (j === i ? { ...g, likes: e.target.value } : g)))
//                       }
//                     />
//                   </Field>
//                   <Field label="Caption">
//                     <TextInput
//                       value={item.caption}
//                       onChange={(e) =>
//                         setItems(items.map((g, j) => (j === i ? { ...g, caption: e.target.value } : g)))
//                       }
//                     />
//                   </Field>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-between gap-3">
//         <Btn variant="ghost" onClick={() => setItems([...items, { src: "", likes: "0", caption: "" }])}>
//           <Plus className="h-4 w-4" /> Add post
//         </Btn>
//         <SaveBar saving={false} onSave={save} />
//       </div>
//     </>
//   );
// }

// /* ---------- Marquee + Pillars ---------- */

// export function MarqueeEditor({ data, onCommit, onToast }: EditorProps) {
//   const [text, setText] = useState(data.marquee.join(", "));
//   return (
//     <>
//       <Card
//         title="Marquee strip"
//         description="Comma-separated words that scroll across the pink banner."
//       >
//         <Field label="Words / phrases">
//           <TextArea
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="VLOGS, REELS, LIFESTYLE"
//           />
//         </Field>
//       </Card>
//       <SaveBar
//         saving={false}
//         onSave={() => {
//           onCommit({
//             ...data,
//             marquee: text.split(",").map((s) => s.trim()).filter(Boolean),
//           });
//           onToast("Marquee updated ✓");
//         }}
//       />
//     </>
//   );
// }

// const ICON_OPTIONS = [
//   { value: "youtube", label: "YouTube" },
//   { value: "instagram", label: "Instagram / Reels" },
//   { value: "camera", label: "Camera" },
//   { value: "clapperboard", label: "Clapperboard" },
//   { value: "video", label: "Video" },
//   { value: "play", label: "Play" },
//   { value: "film", label: "Film" },
//   { value: "smartphone", label: "Smartphone" },
//   { value: "heart", label: "Heart" },
//   { value: "sparkles", label: "Sparkles" },
//   { value: "star", label: "Star" },
//   { value: "music", label: "Music" },
//   { value: "mic", label: "Microphone" },
//   { value: "image", label: "Photo" },
//   { value: "smile", label: "Smile / Fun" },
// ] as const;

// export function PillarsEditor({ data, onCommit, onToast }: EditorProps) {
//   const [pillars, setPillars] = useState(data.pillars);

//   return (
//     <>
//       <div className="space-y-5">
//         {pillars.map((pillar, i) => (
//           <Card
//             key={i}
//             title={`Pillar ${i + 1}`}
//             actions={
//               <IconBtn danger title="Delete" onClick={() => setPillars(pillars.filter((_, j) => j !== i))}>
//                 <Trash2 className="h-3.5 w-3.5" />
//               </IconBtn>
//             }
//           >
//             <div className="grid gap-3 sm:grid-cols-[auto_1fr]">
//               <Field label="Icon">
//                 <select
//                   value={pillar.icon}
//                   onChange={(e) =>
//                     setPillars(
//                       pillars.map((p, j) =>
//                         j === i ? { ...p, icon: e.target.value as typeof p.icon } : p
//                       )
//                     )
//                   }
//                   className="w-full rounded-xl border border-white/15 bg-ink/60 px-3 py-2.5 text-sm text-white outline-none focus:border-brand"
//                 >
//                   {ICON_OPTIONS.map((opt) => (
//                     <option key={opt.value} value={opt.value}>
//                       {opt.label}
//                     </option>
//                   ))}
//                 </select>
//               </Field>
//               <Field label="Title">
//                 <TextInput
//                   value={pillar.title}
//                   onChange={(e) =>
//                     setPillars(pillars.map((p, j) => (j === i ? { ...p, title: e.target.value } : p)))
//                   }
//                 />
//               </Field>
//               <div className="sm:col-span-2">
//                 <Field label="Text">
//                   <TextArea
//                     value={pillar.text}
//                     onChange={(e) =>
//                       setPillars(pillars.map((p, j) => (j === i ? { ...p, text: e.target.value } : p)))
//                     }
//                   />
//                 </Field>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-between gap-3">
//         <Btn
//           variant="ghost"
//           onClick={() => setPillars([...pillars, { icon: "heart", title: "", text: "" }])}
//         >
//           <Plus className="h-4 w-4" /> Add pillar
//         </Btn>
//         <SaveBar
//           saving={false}
//           onSave={() => {
//             onCommit({ ...data, pillars: pillars.filter((p) => p.title.trim()) });
//             onToast("Pillars updated ✓");
//           }}
//         />
//       </div>
//     </>
//   );
// }
// import { useState } from "react";
// import { ArrowDown, ArrowUp, ImageIcon, Plus, Trash2, Upload } from "lucide-react";
// import type { SiteData } from "../data/site";
// import { Btn, Card, Field, IconBtn, SaveBar, TextArea, TextInput } from "./widgets";
// import { getApiBase, readSession } from "../lib/store";

// export interface EditorProps {
//   data: SiteData;
//   onCommit: (next: SiteData) => void;
//   onToast: (msg: string) => void;
// }

// /* ---------- Links ---------- */

// export function LinksEditor({ data, onCommit, onToast }: EditorProps) {
//   const [links, setLinks] = useState(data.links);
//   return (
//     <>
//       <Card
//         title="Social links"
//         description="These URLs power every button across the website."
//       >
//         <div className="space-y-4">
//           <Field label="Instagram URL" hint="Full link including the igsi parameter">
//             <TextInput
//               value={links.instagram}
//               onChange={(e) => setLinks({ ...links, instagram: e.target.value })}
//               placeholder="https://www.instagram.com/..."
//             />
//           </Field>
//           <Field label="YouTube URL" hint="Full link to the channel">
//             <TextInput
//               value={links.youtube}
//               onChange={(e) => setLinks({ ...links, youtube: e.target.value })}
//               placeholder="https://youtube.com/@..."
//             />
//           </Field>
//         </div>
//       </Card>
//       <SaveBar
//         saving={false}
//         onSave={() => {
//           onCommit({ ...data, links });
//           onToast("Social links updated ✓");
//         }}
//       />
//     </>
//   );
// }

// /* ---------- Hero ---------- */

// export function HeroEditor({ data, onCommit, onToast }: EditorProps) {
//   const [hero, setHero] = useState(data.hero);
//   const [uploadingImage, setUploadingImage] = useState<"main" | "left" | "right" | null>(null);

//   const uploadHeroImage = async (
//     file: File,
//     key: "main" | "left" | "right"
//   ) => {
//     if (file.size > 10 * 1024 * 1024) {
//       onToast("Image must be 10MB or smaller");
//       return;
//     }

//     const session = readSession();

//     if (!session) {
//       onToast("Please log in again");
//       return;
//     }

//     const form = new FormData();
//     form.append("image", file);

//     try {
//       setUploadingImage(key);

//       const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${session.token}`,
//         },
//         body: form,
//       });

//       const body = await response.json().catch(() => ({}));

//       if (!response.ok) {
//         throw new Error(body.error || "Image upload failed");
//       }

//       setHero((current) => ({
//         ...current,
//         images: {
//           ...current.images,
//           [key]: body.url,
//         },
//       }));

//       onToast(
//         key === "main"
//           ? "Main hero photo uploaded ✓"
//           : key === "left"
//             ? "Left hero photo uploaded ✓"
//             : "Right hero photo uploaded ✓"
//       );
//     } catch (error) {
//       onToast(
//         error instanceof Error
//           ? error.message
//           : "Image upload failed"
//       );
//     } finally {
//       setUploadingImage(null);
//     }
//   };

//   const imageFields = [
//     {
//       key: "main" as const,
//       label: "Main Hero Photo",
//       description: "Large center photo",
//     },
//     {
//       key: "left" as const,
//       label: "Left Hero Photo",
//       description: "Small left vlog photo",
//     },
//     {
//       key: "right" as const,
//       label: "Right Hero Photo",
//       description: "Small right reels photo",
//     },
//   ];

//   return (
//     <>
//       <Card title="Hero section" description="The first thing visitors see.">
//         <div className="space-y-4">
//           <Field label="Display name">
//             <TextInput
//               value={hero.name}
//               onChange={(e) => setHero({ ...hero, name: e.target.value })}
//             />
//           </Field>

//           <Field
//             label="Badge text"
//             hint="Shown in the small pill above the headline"
//           >
//             <TextInput
//               value={hero.badge}
//               onChange={(e) => setHero({ ...hero, badge: e.target.value })}
//             />
//           </Field>

//           <Field label="Tagline">
//             <TextArea
//               value={hero.tagline}
//               onChange={(e) => setHero({ ...hero, tagline: e.target.value })}
//             />
//           </Field>

//           <div className="grid gap-4 sm:grid-cols-2">
//             <Field label="YouTube button label">
//               <TextInput
//                 value={hero.youtubeCta}
//                 onChange={(e) =>
//                   setHero({
//                     ...hero,
//                     youtubeCta: e.target.value,
//                   })
//                 }
//               />
//             </Field>

//             <Field label="Instagram button label">
//               <TextInput
//                 value={hero.instagramCta}
//                 onChange={(e) =>
//                   setHero({
//                     ...hero,
//                     instagramCta: e.target.value,
//                   })
//                 }
//               />
//             </Field>
//           </div>
//         </div>
//       </Card>

//       <div className="mt-6">
//         <Card
//           title="Hero Photos"
//           description="Change the three photos shown in the Hero section."
//         >
//           <div className="grid gap-5 lg:grid-cols-3">
//             {imageFields.map((item) => {
//               const imageUrl = hero.images[item.key];
//               const uploading = uploadingImage === item.key;

//               return (
//                 <div
//                   key={item.key}
//                   className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
//                 >
//                   <div className="aspect-[4/5] overflow-hidden bg-ink/60">
//                     {imageUrl ? (
//                       <img
//                         src={imageUrl}
//                         alt={item.label}
//                         className="h-full w-full object-cover"
//                         onError={(e) => {
//                           (e.currentTarget as HTMLImageElement).style.opacity =
//                             "0.2";
//                         }}
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-white/20">
//                         <ImageIcon className="h-8 w-8" />
//                       </div>
//                     )}
//                   </div>

//                   <div className="space-y-3 p-4">
//                     <div>
//                       <p className="text-sm font-semibold text-white">
//                         {item.label}
//                       </p>

//                       <p className="mt-1 text-xs text-white/40">
//                         {item.description}
//                       </p>
//                     </div>

//                     <Field label="Image URL">
//                       <TextInput
//                         value={imageUrl}
//                         onChange={(e) =>
//                           setHero((current) => ({
//                             ...current,
//                             images: {
//                               ...current.images,
//                               [item.key]: e.target.value,
//                             },
//                           }))
//                         }
//                         placeholder="/images/photo.jpeg or https://..."
//                       />
//                     </Field>

//                     <label className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10">
//                       <Upload className="h-4 w-4" />

//                       {uploading ? "Uploading..." : "Upload Photo"}

//                       <input
//                         type="file"
//                         accept="image/jpeg,image/png,image/webp,image/gif"
//                         className="hidden"
//                         disabled={uploadingImage !== null}
//                         onChange={async (e) => {
//                           const file = e.target.files?.[0];
//                           e.currentTarget.value = "";

//                           if (file) {
//                             await uploadHeroImage(file, item.key);
//                           }
//                         }}
//                       />
//                     </label>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <p className="mt-4 text-xs text-white/40">
//             JPG, PNG, WEBP or GIF · Maximum 10 MB per image
//           </p>
//         </Card>
//       </div>

//       <SaveBar
//         saving={uploadingImage !== null}
//         onSave={() => {
//           onCommit({ ...data, hero });
//           onToast("Hero section updated ✓");
//         }}
//       />
//     </>
//   );
// }

// /* ---------- About ---------- */

// export function AboutEditor({ data, onCommit, onToast }: EditorProps) {
//   const [bio, setBio] = useState(data.about.bio);
//   const [highlightsText, setHighlightsText] = useState(
//     data.about.highlights.join("\n")
//   );
//   const [stats, setStats] = useState(data.about.stats);
//   const [images, setImages] = useState(data.about.images);
//   const [uploadingImage, setUploadingImage] = useState<"main" | "small" | null>(
//     null
//   );

//   const uploadAboutImage = async (
//     file: File,
//     key: "main" | "small"
//   ) => {
//     if (file.size > 10 * 1024 * 1024) {
//       onToast("Image must be 10MB or smaller");
//       return;
//     }

//     const session = readSession();

//     if (!session) {
//       onToast("Please log in again");
//       return;
//     }

//     const form = new FormData();
//     form.append("image", file);

//     try {
//       setUploadingImage(key);

//       const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${session.token}`,
//         },
//         body: form,
//       });

//       const body = await response.json().catch(() => ({}));

//       if (!response.ok) {
//         throw new Error(body.error || "Image upload failed");
//       }

//       setImages((current) => ({
//         ...current,
//         [key]: body.url,
//       }));

//       onToast(
//         key === "main"
//           ? "Main About photo uploaded ✓"
//           : "Small About photo uploaded ✓"
//       );
//     } catch (error) {
//       onToast(
//         error instanceof Error
//           ? error.message
//           : "Image upload failed"
//       );
//     } finally {
//       setUploadingImage(null);
//     }
//   };

//   const save = () => {
//     onCommit({
//       ...data,
//       about: {
//         ...data.about,
//         bio,
//         highlights: highlightsText
//           .split("\n")
//           .map((s) => s.trim())
//           .filter(Boolean),
//         stats,
//         images,
//       },
//     });

//     onToast("About section updated ✓");
//   };

//   const imageFields = [
//     {
//       key: "main" as const,
//       label: "Main About Photo",
//       description: "Large photo shown on the left side",
//     },
//     {
//       key: "small" as const,
//       label: "Small About Photo",
//       description: "Small floating little moments photo",
//     },
//   ];

//   return (
//     <>
//       <Card title="Bio" description="The main introduction paragraph.">
//         <Field label="Bio text">
//           <TextArea value={bio} onChange={(e) => setBio(e.target.value)} />
//         </Field>
//       </Card>

//       <div className="mt-6">
//         <Card
//           title="Highlights"
//           description="One bullet point per line, shown under the bio."
//         >
//           <Field label="Highlights">
//             <TextArea
//               value={highlightsText}
//               onChange={(e) => setHighlightsText(e.target.value)}
//               placeholder={"Daily vlogs…\nFun reels…"}
//             />
//           </Field>
//         </Card>
//       </div>

//       <div className="mt-6">
//         <Card
//           title="Stat cards"
//           description="Three numbers shown under the highlights."
//         >
//           <div className="space-y-4">
//             {stats.map((stat, i) => (
//               <div key={i} className="flex items-end gap-3">
//                 <div className="flex-1">
//                   <Field label="Value">
//                     <TextInput
//                       value={stat.value}
//                       onChange={(e) =>
//                         setStats(
//                           stats.map((s, j) =>
//                             j === i ? { ...s, value: e.target.value } : s
//                           )
//                         )
//                       }
//                     />
//                   </Field>
//                 </div>

//                 <div className="flex-[2]">
//                   <Field label="Label">
//                     <TextInput
//                       value={stat.label}
//                       onChange={(e) =>
//                         setStats(
//                           stats.map((s, j) =>
//                             j === i ? { ...s, label: e.target.value } : s
//                           )
//                         )
//                       }
//                     />
//                   </Field>
//                 </div>

//                 <IconBtn
//                   danger
//                   title="Remove"
//                   onClick={() =>
//                     setStats(stats.filter((_, j) => j !== i))
//                   }
//                 >
//                   <Trash2 className="h-3.5 w-3.5" />
//                 </IconBtn>
//               </div>
//             ))}
//           </div>

//           <div className="mt-4">
//             <Btn
//               variant="ghost"
//               onClick={() =>
//                 setStats([
//                   ...stats,
//                   {
//                     value: "0",
//                     label: "New stat",
//                   },
//                 ])
//               }
//             >
//               <Plus className="h-4 w-4" />
//               Add stat
//             </Btn>
//           </div>
//         </Card>
//       </div>

//       <div className="mt-6">
//         <Card
//           title="About Photos"
//           description="Change the two photos shown in the About section."
//         >
//           <div className="grid gap-5 md:grid-cols-2">
//             {imageFields.map((item) => {
//               const imageUrl = images[item.key];
//               const uploading = uploadingImage === item.key;

//               return (
//                 <div
//                   key={item.key}
//                   className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
//                 >
//                   <div className="aspect-[4/5] overflow-hidden bg-ink/60">
//                     {imageUrl ? (
//                       <img
//                         src={imageUrl}
//                         alt={item.label}
//                         className="h-full w-full object-cover"
//                         onError={(e) => {
//                           e.currentTarget.style.opacity = "0.2";
//                         }}
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-white/20">
//                         <ImageIcon className="h-8 w-8" />
//                       </div>
//                     )}
//                   </div>

//                   <div className="space-y-3 p-4">
//                     <div>
//                       <p className="text-sm font-semibold text-white">
//                         {item.label}
//                       </p>

//                       <p className="mt-1 text-xs text-white/40">
//                         {item.description}
//                       </p>
//                     </div>

//                     <Field label="Image URL">
//                       <TextInput
//                         value={imageUrl}
//                         onChange={(e) =>
//                           setImages((current) => ({
//                             ...current,
//                             [item.key]: e.target.value,
//                           }))
//                         }
//                         placeholder="/images/photo.jpeg or https://..."
//                       />
//                     </Field>

//                     <label className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10">
//                       <Upload className="h-4 w-4" />

//                       {uploading ? "Uploading..." : "Upload Photo"}

//                       <input
//                         type="file"
//                         accept="image/jpeg,image/png,image/webp,image/gif"
//                         className="hidden"
//                         disabled={uploadingImage !== null}
//                         onChange={async (e) => {
//                           const file = e.target.files?.[0];
//                           e.currentTarget.value = "";

//                           if (file) {
//                             await uploadAboutImage(file, item.key);
//                           }
//                         }}
//                       />
//                     </label>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <p className="mt-4 text-xs text-white/40">
//             JPG, PNG, WEBP or GIF · Maximum 10 MB per image
//           </p>
//         </Card>
//       </div>

//       <SaveBar
//         saving={uploadingImage !== null}
//         onSave={save}
//       />
//     </>
//   );
// }


// /* ---------- My Moments Video ---------- */

// export function MomentsEditor({ data, onCommit, onToast }: EditorProps) {
//   const [video, setVideo] = useState(data.moments?.video ?? "/videos/showcase.mp4");
//   const [uploading, setUploading] = useState(false);

//   const uploadVideo = async (file: File) => {
//     if (file.size > 1024 * 1024 * 1024) {
//       onToast("Video must be 1 GB or smaller");
//       return;
//     }

//     const session = readSession();
//     if (!session) {
//       onToast("Please log in again");
//       return;
//     }

//     const form = new FormData();
//     form.append("video", file);

//     try {
//       setUploading(true);

//       const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${session.token}`,
//         },
//         body: form,
//       });

//       const body = await response.json().catch(() => ({}));

//       if (!response.ok) {
//         throw new Error(body.error || "Video upload failed");
//       }

//       setVideo(body.url);
//       onToast("Video uploaded ✓");
//     } catch (error) {
//       onToast(error instanceof Error ? error.message : "Video upload failed");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <>
//       <Card
//         title="My Moments Video"
//         description="Upload or change the video shown in the My Moments section."
//       >
//         <div className="space-y-4">
//           {video && (
//             <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
//               <video
//                 key={video}
//                 src={video}
//                 controls
//                 preload="metadata"
//                 className="max-h-[520px] w-full object-contain"
//               />
//             </div>
//           )}

//           <Field label="Video URL">
//             <TextInput
//               value={video}
//               onChange={(e) => setVideo(e.target.value)}
//               placeholder="/videos/showcase.mp4"
//             />
//           </Field>

//           <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10">
//             <Upload className="h-4 w-4" />
//             {uploading ? "Uploading..." : "Upload Video"}

//             <input
//               type="file"
//               accept="video/mp4,video/webm,video/quicktime"
//               className="hidden"
//               disabled={uploading}
//               onChange={async (e) => {
//                 const file = e.target.files?.[0];
//                 e.currentTarget.value = "";

//                 if (file) {
//                   await uploadVideo(file);
//                 }
//               }}
//             />
//           </label>

//           <p className="text-xs text-white/40">
//             MP4, WEBM or MOV · Maximum 1 GB
//           </p>
//         </div>
//       </Card>

//       <SaveBar
//         saving={false}
//         onSave={() => {
//           onCommit({
//             ...data,
//             moments: {
//               ...data.moments,
//               video,
//             },
//           });

//           onToast("My Moments video updated ✓");
//         }}
//       />
//     </>
//   );
// }

// /* ---------- Videos ---------- */

// export function VideosEditor({ data, onCommit, onToast }: EditorProps) {
//   const [videos, setVideos] = useState(data.videos);

//   const move = (i: number, dir: -1 | 1) => {
//     const next = [...videos];
//     const j = i + dir;
//     if (j < 0 || j >= next.length) return;
//     [next[i], next[j]] = [next[j], next[i]];
//     setVideos(next);
//   };

//   const save = () => {
//     onCommit({
//       ...data,
//       videos: videos.filter(
//         (v) =>
//           v.title.trim() ||
//           v.thumb.trim() ||
//           (v.youtubeUrl ?? "").trim()
//       ),
//     });
//     onToast("Videos updated ✓");
//   };

//   return (
//     <>
//       <div className="space-y-5">
//         {videos.map((video, i) => (
//           <Card
//             key={i}
//             title={`Video ${i + 1}`}
//             actions={
//               <div className="flex gap-1.5">
//                 <IconBtn title="Move up" disabled={i === 0} onClick={() => move(i, -1)}>
//                   <ArrowUp className="h-3.5 w-3.5" />
//                 </IconBtn>
//                 <IconBtn title="Move down" disabled={i === videos.length - 1} onClick={() => move(i, 1)}>
//                   <ArrowDown className="h-3.5 w-3.5" />
//                 </IconBtn>
//                 <IconBtn danger title="Delete" onClick={() => setVideos(videos.filter((_, j) => j !== i))}>
//                   <Trash2 className="h-3.5 w-3.5" />
//                 </IconBtn>
//               </div>
//             }
//           >
//             <div className="flex gap-4">
//               <div className="h-20 w-32 flex-none overflow-hidden rounded-lg border border-white/10 bg-ink/60">
//                 {video.thumb ? (
//                   <img src={video.thumb} alt="" className="h-full w-full object-cover" onError={(e) => ((e.target as HTMLImageElement).style.opacity = "0.2")} />
//                 ) : (
//                   <div className="flex h-full items-center justify-center text-white/20">
//                     <ImageIcon className="h-6 w-6" />
//                   </div>
//                 )}
//               </div>
//               <div className="grid flex-1 gap-3">
//                 <Field label="Title">
//                   <TextInput
//                     value={video.title}
//                     onChange={(e) =>
//                       setVideos(videos.map((v, j) => (j === i ? { ...v, title: e.target.value } : v)))
//                     }
//                   />
//                 </Field>
//                 <div className="grid grid-cols-3 gap-3">
//                   <Field label="Duration">
//                     <TextInput
//                       value={video.duration}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, duration: e.target.value } : v)))
//                       }
//                     />
//                   </Field>
//                   <Field label="Views">
//                     <TextInput
//                       value={video.views}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, views: e.target.value } : v)))
//                       }
//                     />
//                   </Field>
//                   <Field label="Badge (optional)">
//                     <TextInput
//                       value={video.badge ?? ""}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, badge: e.target.value || undefined } : v)))
//                       }
//                       placeholder="None"
//                     />
//                   </Field>
//                 </div>
//                 <Field
//                   label="YouTube video URL"
//                   hint="Paste the full YouTube video or Shorts link"
//                 >
//                   <TextInput
//                     value={video.youtubeUrl ?? ""}
//                     onChange={(e) =>
//                       setVideos(
//                         videos.map((v, j) =>
//                           j === i
//                             ? { ...v, youtubeUrl: e.target.value }
//                             : v
//                         )
//                       )
//                     }
//                     placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
//                   />
//                 </Field>

//                 <Field label="Thumbnail image URL">
//                   <div className="flex gap-2">
//                     <TextInput
//                       value={video.thumb}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, thumb: e.target.value } : v)))
//                       }
//                       placeholder="https://... or a YouTube link"
//                     />
//                     <label className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/80 transition hover:bg-white/10">
//                       <Upload className="h-4 w-4" /> Upload
//                       <input
//                         type="file"
//                         accept="image/jpeg,image/png,image/webp,image/gif"
//                         className="hidden"
//                         onChange={async (e) => {
//                           const file = e.target.files?.[0];
//                           e.currentTarget.value = "";
//                           if (!file) return;
//                           if (file.size > 10 * 1024 * 1024) {
//                             onToast("Image must be 10MB or smaller");
//                             return;
//                           }
//                           const session = readSession();
//                           if (!session) {
//                             onToast("Please log in again");
//                             return;
//                           }
//                           const form = new FormData();
//                           form.append("image", file);
//                           try {
//                             const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//                               method: "POST",
//                               headers: { Authorization: `Bearer ${session.token}` },
//                               body: form,
//                             });
//                             const body = await response.json().catch(() => ({}));
//                             if (!response.ok) throw new Error(body.error || "Upload failed");
//                             setVideos(videos.map((v, j) => (j === i ? { ...v, thumb: body.url } : v)));
//                             onToast("Thumbnail uploaded ✓");
//                           } catch (error) {
//                             onToast(error instanceof Error ? error.message : "Upload failed");
//                           }
//                         }}
//                       />
//                     </label>
//                   </div>
//                 </Field>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-between gap-3">
//         <Btn
//           variant="ghost"
//           onClick={() =>
//             setVideos([
//               ...videos,
//               {
//                 title: "",
//                 duration: "10:00",
//                 views: "0 views",
//                 thumb: "",
//                 youtubeUrl: "",
//                 badge: undefined,
//               },
//             ])
//           }
//         >
//           <Plus className="h-4 w-4" /> Add video
//         </Btn>
//         <SaveBar saving={false} onSave={save} />
//       </div>
//     </>
//   );
// }

// /* ---------- Gallery ---------- */

// export function GalleryEditor({ data, onCommit, onToast }: EditorProps) {
//   const [items, setItems] = useState(data.gallery);

//   const save = () => {
//     onCommit({ ...data, gallery: items.filter((g) => g.src.trim()) });
//     onToast("Gallery updated ✓");
//   };

//   return (
//     <>
//       <div className="grid gap-5 md:grid-cols-2">
//         {items.map((item, i) => (
//           <Card key={i} title={`Post ${i + 1}`} actions={
//             <IconBtn danger title="Delete" onClick={() => setItems(items.filter((_, j) => j !== i))}>
//               <Trash2 className="h-3.5 w-3.5" />
//             </IconBtn>
//           }>
//             <div className="flex gap-4">
//               <div className="h-24 w-20 flex-none overflow-hidden rounded-lg border border-white/10 bg-ink/60">
//                 {item.src ? (
//                   <img src={item.src} alt="" className="h-full w-full object-cover" />
//                 ) : (
//                   <div className="flex h-full items-center justify-center text-white/20">
//                     <ImageIcon className="h-5 w-5" />
//                   </div>
//                 )}
//               </div>
//               <div className="grid flex-1 gap-3">
//                 <Field label="Image URL">
//                   <div className="flex gap-2">
//                     <TextInput
//                       value={item.src}
//                       onChange={(e) =>
//                         setItems(items.map((g, j) => (j === i ? { ...g, src: e.target.value } : g)))
//                       }
//                       placeholder="https://..."
//                     />
//                     <label className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/80 transition hover:bg-white/10">
//                       <Upload className="h-4 w-4" /> Upload
//                       <input
//                         type="file"
//                         accept="image/jpeg,image/png,image/webp,image/gif"
//                         className="hidden"
//                         onChange={async (e) => {
//                           const file = e.target.files?.[0];
//                           e.currentTarget.value = "";
//                           if (!file) return;
//                           if (file.size > 10 * 1024 * 1024) {
//                             onToast("Image must be 10MB or smaller");
//                             return;
//                           }
//                           const session = readSession();
//                           if (!session) {
//                             onToast("Please log in again");
//                             return;
//                           }
//                           const form = new FormData();
//                           form.append("image", file);
//                           try {
//                             const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//                               method: "POST",
//                               headers: { Authorization: `Bearer ${session.token}` },
//                               body: form,
//                             });
//                             const body = await response.json().catch(() => ({}));
//                             if (!response.ok) throw new Error(body.error || "Upload failed");
//                             setItems(items.map((g, j) => (j === i ? { ...g, src: body.url } : g)));
//                             onToast("Image uploaded ✓");
//                           } catch (error) {
//                             onToast(error instanceof Error ? error.message : "Upload failed");
//                           }
//                         }}
//                       />
//                     </label>
//                   </div>
//                 </Field>
//                 <div className="grid grid-cols-[1fr_2fr] gap-3">
//                   <Field label="Likes">
//                     <TextInput
//                       value={item.likes}
//                       onChange={(e) =>
//                         setItems(items.map((g, j) => (j === i ? { ...g, likes: e.target.value } : g)))
//                       }
//                     />
//                   </Field>
//                   <Field label="Caption">
//                     <TextInput
//                       value={item.caption}
//                       onChange={(e) =>
//                         setItems(items.map((g, j) => (j === i ? { ...g, caption: e.target.value } : g)))
//                       }
//                     />
//                   </Field>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-between gap-3">
//         <Btn variant="ghost" onClick={() => setItems([...items, { src: "", likes: "0", caption: "" }])}>
//           <Plus className="h-4 w-4" /> Add post
//         </Btn>
//         <SaveBar saving={false} onSave={save} />
//       </div>
//     </>
//   );
// }

// /* ---------- Marquee + Pillars ---------- */

// export function MarqueeEditor({ data, onCommit, onToast }: EditorProps) {
//   const [text, setText] = useState(data.marquee.join(", "));
//   return (
//     <>
//       <Card
//         title="Marquee strip"
//         description="Comma-separated words that scroll across the pink banner."
//       >
//         <Field label="Words / phrases">
//           <TextArea
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="VLOGS, REELS, LIFESTYLE"
//           />
//         </Field>
//       </Card>
//       <SaveBar
//         saving={false}
//         onSave={() => {
//           onCommit({
//             ...data,
//             marquee: text.split(",").map((s) => s.trim()).filter(Boolean),
//           });
//           onToast("Marquee updated ✓");
//         }}
//       />
//     </>
//   );
// }

// const ICON_OPTIONS = [
//   { value: "youtube", label: "YouTube" },
//   { value: "instagram", label: "Instagram / Reels" },
//   { value: "camera", label: "Camera" },
//   { value: "clapperboard", label: "Clapperboard" },
//   { value: "video", label: "Video" },
//   { value: "play", label: "Play" },
//   { value: "film", label: "Film" },
//   { value: "smartphone", label: "Smartphone" },
//   { value: "heart", label: "Heart" },
//   { value: "sparkles", label: "Sparkles" },
//   { value: "star", label: "Star" },
//   { value: "music", label: "Music" },
//   { value: "mic", label: "Microphone" },
//   { value: "image", label: "Photo" },
//   { value: "smile", label: "Smile / Fun" },
// ] as const;

// export function PillarsEditor({ data, onCommit, onToast }: EditorProps) {
//   const [pillars, setPillars] = useState(data.pillars);

//   return (
//     <>
//       <div className="space-y-5">
//         {pillars.map((pillar, i) => (
//           <Card
//             key={i}
//             title={`Pillar ${i + 1}`}
//             actions={
//               <IconBtn danger title="Delete" onClick={() => setPillars(pillars.filter((_, j) => j !== i))}>
//                 <Trash2 className="h-3.5 w-3.5" />
//               </IconBtn>
//             }
//           >
//             <div className="grid gap-3 sm:grid-cols-[auto_1fr]">
//               <Field label="Icon">
//                 <select
//                   value={pillar.icon}
//                   onChange={(e) =>
//                     setPillars(
//                       pillars.map((p, j) =>
//                         j === i ? { ...p, icon: e.target.value as typeof p.icon } : p
//                       )
//                     )
//                   }
//                   className="w-full rounded-xl border border-white/15 bg-ink/60 px-3 py-2.5 text-sm text-white outline-none focus:border-brand"
//                 >
//                   {ICON_OPTIONS.map((opt) => (
//                     <option key={opt.value} value={opt.value}>
//                       {opt.label}
//                     </option>
//                   ))}
//                 </select>
//               </Field>
//               <Field label="Title">
//                 <TextInput
//                   value={pillar.title}
//                   onChange={(e) =>
//                     setPillars(pillars.map((p, j) => (j === i ? { ...p, title: e.target.value } : p)))
//                   }
//                 />
//               </Field>
//               <div className="sm:col-span-2">
//                 <Field label="Text">
//                   <TextArea
//                     value={pillar.text}
//                     onChange={(e) =>
//                       setPillars(pillars.map((p, j) => (j === i ? { ...p, text: e.target.value } : p)))
//                     }
//                   />
//                 </Field>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-between gap-3">
//         <Btn
//           variant="ghost"
//           onClick={() => setPillars([...pillars, { icon: "heart", title: "", text: "" }])}
//         >
//           <Plus className="h-4 w-4" /> Add pillar
//         </Btn>
//         <SaveBar
//           saving={false}
//           onSave={() => {
//             onCommit({ ...data, pillars: pillars.filter((p) => p.title.trim()) });
//             onToast("Pillars updated ✓");
//           }}
//         />
//       </div>
//     </>
//   );
// }
// import { useState } from "react";
// import { ArrowDown, ArrowUp, ImageIcon, Plus, Trash2, Upload } from "lucide-react";
// import type { SiteData } from "../data/site";
// import { Btn, Card, Field, IconBtn, SaveBar, TextArea, TextInput } from "./widgets";
// import { getApiBase, readSession } from "../lib/store";

// export interface EditorProps {
//   data: SiteData;
//   onCommit: (next: SiteData) => void;
//   onToast: (msg: string) => void;
// }

// /* ---------- Links ---------- */

// export function LinksEditor({ data, onCommit, onToast }: EditorProps) {
//   const [links, setLinks] = useState(data.links);
//   return (
//     <>
//       <Card
//         title="Social links"
//         description="These URLs power every button across the website."
//       >
//         <div className="space-y-4">
//           <Field label="Instagram URL" hint="Full link including the igsi parameter">
//             <TextInput
//               value={links.instagram}
//               onChange={(e) => setLinks({ ...links, instagram: e.target.value })}
//               placeholder="https://www.instagram.com/..."
//             />
//           </Field>
//           <Field label="YouTube URL" hint="Full link to the channel">
//             <TextInput
//               value={links.youtube}
//               onChange={(e) => setLinks({ ...links, youtube: e.target.value })}
//               placeholder="https://youtube.com/@..."
//             />
//           </Field>
//         </div>
//       </Card>
//       <SaveBar
//         saving={false}
//         onSave={() => {
//           onCommit({ ...data, links });
//           onToast("Social links updated ✓");
//         }}
//       />
//     </>
//   );
// }

// /* ---------- Hero ---------- */

// export function HeroEditor({ data, onCommit, onToast }: EditorProps) {
//   const [hero, setHero] = useState(data.hero);
//   const [uploadingImage, setUploadingImage] = useState<"main" | "left" | "right" | null>(null);

//   const uploadHeroImage = async (
//     file: File,
//     key: "main" | "left" | "right"
//   ) => {
//     if (file.size > 10 * 1024 * 1024) {
//       onToast("Image must be 10MB or smaller");
//       return;
//     }

//     const session = readSession();

//     if (!session) {
//       onToast("Please log in again");
//       return;
//     }

//     const form = new FormData();
//     form.append("image", file);

//     try {
//       setUploadingImage(key);

//       const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${session.token}`,
//         },
//         body: form,
//       });

//       const body = await response.json().catch(() => ({}));

//       if (!response.ok) {
//         throw new Error(body.error || "Image upload failed");
//       }

//       setHero((current) => ({
//         ...current,
//         images: {
//           ...current.images,
//           [key]: body.url,
//         },
//       }));

//       onToast(
//         key === "main"
//           ? "Main hero photo uploaded ✓"
//           : key === "left"
//             ? "Left hero photo uploaded ✓"
//             : "Right hero photo uploaded ✓"
//       );
//     } catch (error) {
//       onToast(
//         error instanceof Error
//           ? error.message
//           : "Image upload failed"
//       );
//     } finally {
//       setUploadingImage(null);
//     }
//   };

//   const imageFields = [
//     {
//       key: "main" as const,
//       label: "Main Hero Photo",
//       description: "Large center photo",
//     },
//     {
//       key: "left" as const,
//       label: "Left Hero Photo",
//       description: "Small left vlog photo",
//     },
//     {
//       key: "right" as const,
//       label: "Right Hero Photo",
//       description: "Small right reels photo",
//     },
//   ];

//   return (
//     <>
//       <Card title="Hero section" description="The first thing visitors see.">
//         <div className="space-y-4">
//           <Field label="Display name">
//             <TextInput
//               value={hero.name}
//               onChange={(e) => setHero({ ...hero, name: e.target.value })}
//             />
//           </Field>

//           <Field
//             label="Badge text"
//             hint="Shown in the small pill above the headline"
//           >
//             <TextInput
//               value={hero.badge}
//               onChange={(e) => setHero({ ...hero, badge: e.target.value })}
//             />
//           </Field>

//           <Field label="Tagline">
//             <TextArea
//               value={hero.tagline}
//               onChange={(e) => setHero({ ...hero, tagline: e.target.value })}
//             />
//           </Field>

//           <div className="grid gap-4 sm:grid-cols-2">
//             <Field label="YouTube button label">
//               <TextInput
//                 value={hero.youtubeCta}
//                 onChange={(e) =>
//                   setHero({
//                     ...hero,
//                     youtubeCta: e.target.value,
//                   })
//                 }
//               />
//             </Field>

//             <Field label="Instagram button label">
//               <TextInput
//                 value={hero.instagramCta}
//                 onChange={(e) =>
//                   setHero({
//                     ...hero,
//                     instagramCta: e.target.value,
//                   })
//                 }
//               />
//             </Field>
//           </div>
//         </div>
//       </Card>

//       <div className="mt-6">
//         <Card
//           title="Hero Photos"
//           description="Change the three photos shown in the Hero section."
//         >
//           <div className="grid gap-5 lg:grid-cols-3">
//             {imageFields.map((item) => {
//               const imageUrl = hero.images[item.key];
//               const uploading = uploadingImage === item.key;

//               return (
//                 <div
//                   key={item.key}
//                   className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
//                 >
//                   <div className="aspect-[4/5] overflow-hidden bg-ink/60">
//                     {imageUrl ? (
//                       <img
//                         src={imageUrl}
//                         alt={item.label}
//                         className="h-full w-full object-cover"
//                         onError={(e) => {
//                           (e.currentTarget as HTMLImageElement).style.opacity =
//                             "0.2";
//                         }}
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-white/20">
//                         <ImageIcon className="h-8 w-8" />
//                       </div>
//                     )}
//                   </div>

//                   <div className="space-y-3 p-4">
//                     <div>
//                       <p className="text-sm font-semibold text-white">
//                         {item.label}
//                       </p>

//                       <p className="mt-1 text-xs text-white/40">
//                         {item.description}
//                       </p>
//                     </div>

//                     <Field label="Image URL">
//                       <TextInput
//                         value={imageUrl}
//                         onChange={(e) =>
//                           setHero((current) => ({
//                             ...current,
//                             images: {
//                               ...current.images,
//                               [item.key]: e.target.value,
//                             },
//                           }))
//                         }
//                         placeholder="/images/photo.jpeg or https://..."
//                       />
//                     </Field>

//                     <label className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10">
//                       <Upload className="h-4 w-4" />

//                       {uploading ? "Uploading..." : "Upload Photo"}

//                       <input
//                         type="file"
//                         accept="image/jpeg,image/png,image/webp,image/gif"
//                         className="hidden"
//                         disabled={uploadingImage !== null}
//                         onChange={async (e) => {
//                           const file = e.target.files?.[0];
//                           e.currentTarget.value = "";

//                           if (file) {
//                             await uploadHeroImage(file, item.key);
//                           }
//                         }}
//                       />
//                     </label>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <p className="mt-4 text-xs text-white/40">
//             JPG, PNG, WEBP or GIF · Maximum 10 MB per image
//           </p>
//         </Card>
//       </div>

//       <SaveBar
//         saving={uploadingImage !== null}
//         onSave={() => {
//           onCommit({ ...data, hero });
//           onToast("Hero section updated ✓");
//         }}
//       />
//     </>
//   );
// }

// /* ---------- About ---------- */

// export function AboutEditor({ data, onCommit, onToast }: EditorProps) {
//   const [bio, setBio] = useState(data.about.bio);
//   const [highlightsText, setHighlightsText] = useState(
//     data.about.highlights.join("\n")
//   );
//   const [stats, setStats] = useState(data.about.stats);
//   const [images, setImages] = useState(data.about.images);
//   const [uploadingImage, setUploadingImage] = useState<"main" | "small" | null>(
//     null
//   );

//   const uploadAboutImage = async (
//     file: File,
//     key: "main" | "small"
//   ) => {
//     if (file.size > 10 * 1024 * 1024) {
//       onToast("Image must be 10MB or smaller");
//       return;
//     }

//     const session = readSession();

//     if (!session) {
//       onToast("Please log in again");
//       return;
//     }

//     const form = new FormData();
//     form.append("image", file);

//     try {
//       setUploadingImage(key);

//       const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${session.token}`,
//         },
//         body: form,
//       });

//       const body = await response.json().catch(() => ({}));

//       if (!response.ok) {
//         throw new Error(body.error || "Image upload failed");
//       }

//       setImages((current) => ({
//         ...current,
//         [key]: body.url,
//       }));

//       onToast(
//         key === "main"
//           ? "Main About photo uploaded ✓"
//           : "Small About photo uploaded ✓"
//       );
//     } catch (error) {
//       onToast(
//         error instanceof Error
//           ? error.message
//           : "Image upload failed"
//       );
//     } finally {
//       setUploadingImage(null);
//     }
//   };

//   const save = () => {
//     onCommit({
//       ...data,
//       about: {
//         ...data.about,
//         bio,
//         highlights: highlightsText
//           .split("\n")
//           .map((s) => s.trim())
//           .filter(Boolean),
//         stats,
//         images,
//       },
//     });

//     onToast("About section updated ✓");
//   };

//   const imageFields = [
//     {
//       key: "main" as const,
//       label: "Main About Photo",
//       description: "Large photo shown on the left side",
//     },
//     {
//       key: "small" as const,
//       label: "Small About Photo",
//       description: "Small floating little moments photo",
//     },
//   ];

//   return (
//     <>
//       <Card title="Bio" description="The main introduction paragraph.">
//         <Field label="Bio text">
//           <TextArea value={bio} onChange={(e) => setBio(e.target.value)} />
//         </Field>
//       </Card>

//       <div className="mt-6">
//         <Card
//           title="Highlights"
//           description="One bullet point per line, shown under the bio."
//         >
//           <Field label="Highlights">
//             <TextArea
//               value={highlightsText}
//               onChange={(e) => setHighlightsText(e.target.value)}
//               placeholder={"Daily vlogs…\nFun reels…"}
//             />
//           </Field>
//         </Card>
//       </div>

//       <div className="mt-6">
//         <Card
//           title="Stat cards"
//           description="Three numbers shown under the highlights."
//         >
//           <div className="space-y-4">
//             {stats.map((stat, i) => (
//               <div key={i} className="flex items-end gap-3">
//                 <div className="flex-1">
//                   <Field label="Value">
//                     <TextInput
//                       value={stat.value}
//                       onChange={(e) =>
//                         setStats(
//                           stats.map((s, j) =>
//                             j === i ? { ...s, value: e.target.value } : s
//                           )
//                         )
//                       }
//                     />
//                   </Field>
//                 </div>

//                 <div className="flex-[2]">
//                   <Field label="Label">
//                     <TextInput
//                       value={stat.label}
//                       onChange={(e) =>
//                         setStats(
//                           stats.map((s, j) =>
//                             j === i ? { ...s, label: e.target.value } : s
//                           )
//                         )
//                       }
//                     />
//                   </Field>
//                 </div>

//                 <IconBtn
//                   danger
//                   title="Remove"
//                   onClick={() =>
//                     setStats(stats.filter((_, j) => j !== i))
//                   }
//                 >
//                   <Trash2 className="h-3.5 w-3.5" />
//                 </IconBtn>
//               </div>
//             ))}
//           </div>

//           <div className="mt-4">
//             <Btn
//               variant="ghost"
//               onClick={() =>
//                 setStats([
//                   ...stats,
//                   {
//                     value: "0",
//                     label: "New stat",
//                   },
//                 ])
//               }
//             >
//               <Plus className="h-4 w-4" />
//               Add stat
//             </Btn>
//           </div>
//         </Card>
//       </div>

//       <div className="mt-6">
//         <Card
//           title="About Photos"
//           description="Change the two photos shown in the About section."
//         >
//           <div className="grid gap-5 md:grid-cols-2">
//             {imageFields.map((item) => {
//               const imageUrl = images[item.key];
//               const uploading = uploadingImage === item.key;

//               return (
//                 <div
//                   key={item.key}
//                   className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
//                 >
//                   <div className="aspect-[4/5] overflow-hidden bg-ink/60">
//                     {imageUrl ? (
//                       <img
//                         src={imageUrl}
//                         alt={item.label}
//                         className="h-full w-full object-cover"
//                         onError={(e) => {
//                           e.currentTarget.style.opacity = "0.2";
//                         }}
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-white/20">
//                         <ImageIcon className="h-8 w-8" />
//                       </div>
//                     )}
//                   </div>

//                   <div className="space-y-3 p-4">
//                     <div>
//                       <p className="text-sm font-semibold text-white">
//                         {item.label}
//                       </p>

//                       <p className="mt-1 text-xs text-white/40">
//                         {item.description}
//                       </p>
//                     </div>

//                     <Field label="Image URL">
//                       <TextInput
//                         value={imageUrl}
//                         onChange={(e) =>
//                           setImages((current) => ({
//                             ...current,
//                             [item.key]: e.target.value,
//                           }))
//                         }
//                         placeholder="/images/photo.jpeg or https://..."
//                       />
//                     </Field>

//                     <label className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10">
//                       <Upload className="h-4 w-4" />

//                       {uploading ? "Uploading..." : "Upload Photo"}

//                       <input
//                         type="file"
//                         accept="image/jpeg,image/png,image/webp,image/gif"
//                         className="hidden"
//                         disabled={uploadingImage !== null}
//                         onChange={async (e) => {
//                           const file = e.target.files?.[0];
//                           e.currentTarget.value = "";

//                           if (file) {
//                             await uploadAboutImage(file, item.key);
//                           }
//                         }}
//                       />
//                     </label>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <p className="mt-4 text-xs text-white/40">
//             JPG, PNG, WEBP or GIF · Maximum 10 MB per image
//           </p>
//         </Card>
//       </div>

//       <SaveBar
//         saving={uploadingImage !== null}
//         onSave={save}
//       />
//     </>
//   );
// }


// /* ---------- My Moments Video ---------- */

// export function MomentsEditor({ data, onCommit, onToast }: EditorProps) {
//   const [video, setVideo] = useState(data.moments?.video ?? "/videos/showcase.mp4");
//   const [uploading, setUploading] = useState(false);

//   const uploadVideo = async (file: File) => {
//     if (file.size > 1024 * 1024 * 1024) {
//       onToast("Video must be 1 GB or smaller");
//       return;
//     }

//     const session = readSession();
//     if (!session) {
//       onToast("Please log in again");
//       return;
//     }

//     const form = new FormData();
//     form.append("video", file);

//     try {
//       setUploading(true);

//       const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${session.token}`,
//         },
//         body: form,
//       });

//       const body = await response.json().catch(() => ({}));

//       if (!response.ok) {
//         throw new Error(body.error || "Video upload failed");
//       }

//       setVideo(body.url);
//       onToast("Video uploaded ✓");
//     } catch (error) {
//       onToast(error instanceof Error ? error.message : "Video upload failed");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <>
//       <Card
//         title="My Moments Video"
//         description="Upload or change the video shown in the My Moments section."
//       >
//         <div className="space-y-4">
//           {video && (
//             <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
//               <video
//                 key={video}
//                 src={video}
//                 controls
//                 preload="metadata"
//                 className="max-h-[520px] w-full object-contain"
//               />
//             </div>
//           )}

//           <Field label="Video URL">
//             <TextInput
//               value={video}
//               onChange={(e) => setVideo(e.target.value)}
//               placeholder="/videos/showcase.mp4"
//             />
//           </Field>

//           <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10">
//             <Upload className="h-4 w-4" />
//             {uploading ? "Uploading..." : "Upload Video"}

//             <input
//               type="file"
//               accept="video/mp4,video/webm,video/quicktime"
//               className="hidden"
//               disabled={uploading}
//               onChange={async (e) => {
//                 const file = e.target.files?.[0];
//                 e.currentTarget.value = "";

//                 if (file) {
//                   await uploadVideo(file);
//                 }
//               }}
//             />
//           </label>

//           <p className="text-xs text-white/40">
//             MP4, WEBM or MOV · Maximum 1 GB
//           </p>
//         </div>
//       </Card>

//       <SaveBar
//         saving={false}
//         onSave={() => {
//           onCommit({
//             ...data,
//             moments: {
//               ...data.moments,
//               video,
//             },
//           });

//           onToast("My Moments video updated ✓");
//         }}
//       />
//     </>
//   );
// }

// /* ---------- Videos ---------- */

// export function VideosEditor({ data, onCommit, onToast }: EditorProps) {
//   const [videos, setVideos] = useState(data.videos);
//   const [fetchingIndex, setFetchingIndex] = useState<number | null>(null);

//   const fetchYouTubeInfo = async (i: number) => {
//     const url = (videos[i]?.youtubeUrl ?? "").trim();

//     if (!url) {
//       onToast("Please paste a YouTube video URL first");
//       return;
//     }

//     const session = readSession();

//     if (!session) {
//       onToast("Please log in again");
//       return;
//     }

//     try {
//       setFetchingIndex(i);

//       const response = await fetch(
//         `${getApiBase()}/api/youtube-info?url=${encodeURIComponent(url)}`,
//         {
//           headers: {
//             Authorization: `Bearer ${session.token}`,
//           },
//         }
//       );

//       const body = await response.json().catch(() => ({}));

//       if (!response.ok) {
//         throw new Error(
//           body.error || "Could not fetch YouTube video information"
//         );
//       }

//       setVideos((current) =>
//         current.map((video, j) =>
//           j === i
//             ? {
//                 ...video,
//                 title: body.title || video.title,
//                 duration: body.duration || video.duration,
//                 views: body.views || video.views,
//                 thumb: body.thumb || video.thumb,
//                 youtubeUrl: body.youtubeUrl || video.youtubeUrl || "",
//               }
//             : video
//         )
//       );

//       onToast("YouTube info fetched ✓");
//     } catch (error) {
//       onToast(
//         error instanceof Error
//           ? error.message
//           : "Could not fetch YouTube video information"
//       );
//     } finally {
//       setFetchingIndex(null);
//     }
//   };

//   const move = (i: number, dir: -1 | 1) => {
//     const next = [...videos];
//     const j = i + dir;
//     if (j < 0 || j >= next.length) return;
//     [next[i], next[j]] = [next[j], next[i]];
//     setVideos(next);
//   };

//   const save = () => {
//     onCommit({
//       ...data,
//       videos: videos.filter(
//         (v) =>
//           v.title.trim() ||
//           v.thumb.trim() ||
//           (v.youtubeUrl ?? "").trim()
//       ),
//     });
//     onToast("Videos updated ✓");
//   };

//   return (
//     <>
//       <div className="space-y-5">
//         {videos.map((video, i) => (
//           <Card
//             key={i}
//             title={`Video ${i + 1}`}
//             actions={
//               <div className="flex gap-1.5">
//                 <IconBtn title="Move up" disabled={i === 0} onClick={() => move(i, -1)}>
//                   <ArrowUp className="h-3.5 w-3.5" />
//                 </IconBtn>
//                 <IconBtn title="Move down" disabled={i === videos.length - 1} onClick={() => move(i, 1)}>
//                   <ArrowDown className="h-3.5 w-3.5" />
//                 </IconBtn>
//                 <IconBtn danger title="Delete" onClick={() => setVideos(videos.filter((_, j) => j !== i))}>
//                   <Trash2 className="h-3.5 w-3.5" />
//                 </IconBtn>
//               </div>
//             }
//           >
//             <div className="flex gap-4">
//               <div className="h-20 w-32 flex-none overflow-hidden rounded-lg border border-white/10 bg-ink/60">
//                 {video.thumb ? (
//                   <img src={video.thumb} alt="" className="h-full w-full object-cover" onError={(e) => ((e.target as HTMLImageElement).style.opacity = "0.2")} />
//                 ) : (
//                   <div className="flex h-full items-center justify-center text-white/20">
//                     <ImageIcon className="h-6 w-6" />
//                   </div>
//                 )}
//               </div>
//               <div className="grid flex-1 gap-3">
//                 <Field label="Title">
//                   <TextInput
//                     value={video.title}
//                     onChange={(e) =>
//                       setVideos(videos.map((v, j) => (j === i ? { ...v, title: e.target.value } : v)))
//                     }
//                   />
//                 </Field>
//                 <div className="grid grid-cols-3 gap-3">
//                   <Field label="Duration">
//                     <TextInput
//                       value={video.duration}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, duration: e.target.value } : v)))
//                       }
//                     />
//                   </Field>
//                   <Field label="Views">
//                     <TextInput
//                       value={video.views}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, views: e.target.value } : v)))
//                       }
//                     />
//                   </Field>
//                   <Field label="Badge (optional)">
//                     <TextInput
//                       value={video.badge ?? ""}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, badge: e.target.value || undefined } : v)))
//                       }
//                       placeholder="None"
//                     />
//                   </Field>
//                 </div>
//                 <Field
//                   label="YouTube video URL"
//                   hint="Paste the YouTube link, then fetch title, duration, views and thumbnail automatically."
//                 >
//                   <div className="flex flex-col gap-2 sm:flex-row">
//                     <div className="min-w-0 flex-1">
//                       <TextInput
//                         value={video.youtubeUrl ?? ""}
//                         onChange={(e) =>
//                           setVideos(
//                             videos.map((v, j) =>
//                               j === i
//                                 ? { ...v, youtubeUrl: e.target.value }
//                                 : v
//                             )
//                           )
//                         }
//                         placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
//                       />
//                     </div>

//                     <button
//                       type="button"
//                       disabled={
//                         fetchingIndex !== null ||
//                         !(video.youtubeUrl ?? "").trim()
//                       }
//                       onClick={() => fetchYouTubeInfo(i)}
//                       className="inline-flex shrink-0 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-xs font-semibold text-red-300 transition hover:border-red-500/50 hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-40"
//                     >
//                       {fetchingIndex === i
//                         ? "Fetching..."
//                         : "Fetch from YouTube"}
//                     </button>
//                   </div>
//                 </Field>

//                 <Field label="Thumbnail image URL">
//                   <div className="flex gap-2">
//                     <TextInput
//                       value={video.thumb}
//                       onChange={(e) =>
//                         setVideos(videos.map((v, j) => (j === i ? { ...v, thumb: e.target.value } : v)))
//                       }
//                       placeholder="https://... or a YouTube link"
//                     />
//                     <label className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/80 transition hover:bg-white/10">
//                       <Upload className="h-4 w-4" /> Upload
//                       <input
//                         type="file"
//                         accept="image/jpeg,image/png,image/webp,image/gif"
//                         className="hidden"
//                         onChange={async (e) => {
//                           const file = e.target.files?.[0];
//                           e.currentTarget.value = "";
//                           if (!file) return;
//                           if (file.size > 10 * 1024 * 1024) {
//                             onToast("Image must be 10MB or smaller");
//                             return;
//                           }
//                           const session = readSession();
//                           if (!session) {
//                             onToast("Please log in again");
//                             return;
//                           }
//                           const form = new FormData();
//                           form.append("image", file);
//                           try {
//                             const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//                               method: "POST",
//                               headers: { Authorization: `Bearer ${session.token}` },
//                               body: form,
//                             });
//                             const body = await response.json().catch(() => ({}));
//                             if (!response.ok) throw new Error(body.error || "Upload failed");
//                             setVideos(videos.map((v, j) => (j === i ? { ...v, thumb: body.url } : v)));
//                             onToast("Thumbnail uploaded ✓");
//                           } catch (error) {
//                             onToast(error instanceof Error ? error.message : "Upload failed");
//                           }
//                         }}
//                       />
//                     </label>
//                   </div>
//                 </Field>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-between gap-3">
//         <Btn
//           variant="ghost"
//           onClick={() =>
//             setVideos([
//               ...videos,
//               {
//                 title: "",
//                 duration: "10:00",
//                 views: "0 views",
//                 thumb: "",
//                 youtubeUrl: "",
//                 badge: undefined,
//               },
//             ])
//           }
//         >
//           <Plus className="h-4 w-4" /> Add video
//         </Btn>
//         <SaveBar saving={false} onSave={save} />
//       </div>
//     </>
//   );
// }

// /* ---------- Gallery ---------- */

// export function GalleryEditor({ data, onCommit, onToast }: EditorProps) {
//   const [items, setItems] = useState(data.gallery);

//   const save = () => {
//     onCommit({ ...data, gallery: items.filter((g) => g.src.trim()) });
//     onToast("Gallery updated ✓");
//   };

//   return (
//     <>
//       <div className="grid gap-5 md:grid-cols-2">
//         {items.map((item, i) => (
//           <Card key={i} title={`Post ${i + 1}`} actions={
//             <IconBtn danger title="Delete" onClick={() => setItems(items.filter((_, j) => j !== i))}>
//               <Trash2 className="h-3.5 w-3.5" />
//             </IconBtn>
//           }>
//             <div className="flex gap-4">
//               <div className="h-24 w-20 flex-none overflow-hidden rounded-lg border border-white/10 bg-ink/60">
//                 {item.src ? (
//                   <img src={item.src} alt="" className="h-full w-full object-cover" />
//                 ) : (
//                   <div className="flex h-full items-center justify-center text-white/20">
//                     <ImageIcon className="h-5 w-5" />
//                   </div>
//                 )}
//               </div>
//               <div className="grid flex-1 gap-3">
//                 <Field label="Image URL">
//                   <div className="flex gap-2">
//                     <TextInput
//                       value={item.src}
//                       onChange={(e) =>
//                         setItems(items.map((g, j) => (j === i ? { ...g, src: e.target.value } : g)))
//                       }
//                       placeholder="https://..."
//                     />
//                     <label className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/80 transition hover:bg-white/10">
//                       <Upload className="h-4 w-4" /> Upload
//                       <input
//                         type="file"
//                         accept="image/jpeg,image/png,image/webp,image/gif"
//                         className="hidden"
//                         onChange={async (e) => {
//                           const file = e.target.files?.[0];
//                           e.currentTarget.value = "";
//                           if (!file) return;
//                           if (file.size > 10 * 1024 * 1024) {
//                             onToast("Image must be 10MB or smaller");
//                             return;
//                           }
//                           const session = readSession();
//                           if (!session) {
//                             onToast("Please log in again");
//                             return;
//                           }
//                           const form = new FormData();
//                           form.append("image", file);
//                           try {
//                             const response = await fetch(`${getApiBase()}/api/admin/upload`, {
//                               method: "POST",
//                               headers: { Authorization: `Bearer ${session.token}` },
//                               body: form,
//                             });
//                             const body = await response.json().catch(() => ({}));
//                             if (!response.ok) throw new Error(body.error || "Upload failed");
//                             setItems(items.map((g, j) => (j === i ? { ...g, src: body.url } : g)));
//                             onToast("Image uploaded ✓");
//                           } catch (error) {
//                             onToast(error instanceof Error ? error.message : "Upload failed");
//                           }
//                         }}
//                       />
//                     </label>
//                   </div>
//                 </Field>
//                 <div className="grid grid-cols-[1fr_2fr] gap-3">
//                   <Field label="Likes">
//                     <TextInput
//                       value={item.likes}
//                       onChange={(e) =>
//                         setItems(items.map((g, j) => (j === i ? { ...g, likes: e.target.value } : g)))
//                       }
//                     />
//                   </Field>
//                   <Field label="Caption">
//                     <TextInput
//                       value={item.caption}
//                       onChange={(e) =>
//                         setItems(items.map((g, j) => (j === i ? { ...g, caption: e.target.value } : g)))
//                       }
//                     />
//                   </Field>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-between gap-3">
//         <Btn variant="ghost" onClick={() => setItems([...items, { src: "", likes: "0", caption: "" }])}>
//           <Plus className="h-4 w-4" /> Add post
//         </Btn>
//         <SaveBar saving={false} onSave={save} />
//       </div>
//     </>
//   );
// }

// /* ---------- Marquee + Pillars ---------- */

// export function MarqueeEditor({ data, onCommit, onToast }: EditorProps) {
//   const [text, setText] = useState(data.marquee.join(", "));
//   return (
//     <>
//       <Card
//         title="Marquee strip"
//         description="Comma-separated words that scroll across the pink banner."
//       >
//         <Field label="Words / phrases">
//           <TextArea
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="VLOGS, REELS, LIFESTYLE"
//           />
//         </Field>
//       </Card>
//       <SaveBar
//         saving={false}
//         onSave={() => {
//           onCommit({
//             ...data,
//             marquee: text.split(",").map((s) => s.trim()).filter(Boolean),
//           });
//           onToast("Marquee updated ✓");
//         }}
//       />
//     </>
//   );
// }

// const ICON_OPTIONS = [
//   { value: "youtube", label: "YouTube" },
//   { value: "instagram", label: "Instagram / Reels" },
//   { value: "camera", label: "Camera" },
//   { value: "clapperboard", label: "Clapperboard" },
//   { value: "video", label: "Video" },
//   { value: "play", label: "Play" },
//   { value: "film", label: "Film" },
//   { value: "smartphone", label: "Smartphone" },
//   { value: "heart", label: "Heart" },
//   { value: "sparkles", label: "Sparkles" },
//   { value: "star", label: "Star" },
//   { value: "music", label: "Music" },
//   { value: "mic", label: "Microphone" },
//   { value: "image", label: "Photo" },
//   { value: "smile", label: "Smile / Fun" },
// ] as const;

// export function PillarsEditor({ data, onCommit, onToast }: EditorProps) {
//   const [pillars, setPillars] = useState(data.pillars);

//   return (
//     <>
//       <div className="space-y-5">
//         {pillars.map((pillar, i) => (
//           <Card
//             key={i}
//             title={`Pillar ${i + 1}`}
//             actions={
//               <IconBtn danger title="Delete" onClick={() => setPillars(pillars.filter((_, j) => j !== i))}>
//                 <Trash2 className="h-3.5 w-3.5" />
//               </IconBtn>
//             }
//           >
//             <div className="grid gap-3 sm:grid-cols-[auto_1fr]">
//               <Field label="Icon">
//                 <select
//                   value={pillar.icon}
//                   onChange={(e) =>
//                     setPillars(
//                       pillars.map((p, j) =>
//                         j === i ? { ...p, icon: e.target.value as typeof p.icon } : p
//                       )
//                     )
//                   }
//                   className="w-full rounded-xl border border-white/15 bg-ink/60 px-3 py-2.5 text-sm text-white outline-none focus:border-brand"
//                 >
//                   {ICON_OPTIONS.map((opt) => (
//                     <option key={opt.value} value={opt.value}>
//                       {opt.label}
//                     </option>
//                   ))}
//                 </select>
//               </Field>
//               <Field label="Title">
//                 <TextInput
//                   value={pillar.title}
//                   onChange={(e) =>
//                     setPillars(pillars.map((p, j) => (j === i ? { ...p, title: e.target.value } : p)))
//                   }
//                 />
//               </Field>
//               <div className="sm:col-span-2">
//                 <Field label="Text">
//                   <TextArea
//                     value={pillar.text}
//                     onChange={(e) =>
//                       setPillars(pillars.map((p, j) => (j === i ? { ...p, text: e.target.value } : p)))
//                     }
//                   />
//                 </Field>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-between gap-3">
//         <Btn
//           variant="ghost"
//           onClick={() => setPillars([...pillars, { icon: "heart", title: "", text: "" }])}
//         >
//           <Plus className="h-4 w-4" /> Add pillar
//         </Btn>
//         <SaveBar
//           saving={false}
//           onSave={() => {
//             onCommit({ ...data, pillars: pillars.filter((p) => p.title.trim()) });
//             onToast("Pillars updated ✓");
//           }}
//         />
//       </div>
//     </>
//   );
// }
import { useState } from "react";
import { ArrowDown, ArrowUp, ImageIcon, Plus, Trash2, Upload } from "lucide-react";
import type { SiteData } from "../data/site";
import { Btn, Card, Field, IconBtn, SaveBar, TextArea, TextInput } from "./widgets";
import { getApiBase, readSession } from "../lib/store";

export interface EditorProps {
  data: SiteData;
  onCommit: (next: SiteData) => void;
  onToast: (msg: string) => void;
}

/* ---------- Links ---------- */

export function LinksEditor({ data, onCommit, onToast }: EditorProps) {
  const [links, setLinks] = useState(data.links);
  return (
    <>
      <Card
        title="Social links"
        description="These URLs power every button across the website."
      >
        <div className="space-y-4">
          <Field label="Instagram URL" hint="Full link including the igsi parameter">
            <TextInput
              value={links.instagram}
              onChange={(e) => setLinks({ ...links, instagram: e.target.value })}
              placeholder="https://www.instagram.com/..."
            />
          </Field>
          <Field label="YouTube URL" hint="Full link to the channel">
            <TextInput
              value={links.youtube}
              onChange={(e) => setLinks({ ...links, youtube: e.target.value })}
              placeholder="https://youtube.com/@..."
            />
          </Field>
        </div>
      </Card>
      <SaveBar
        saving={false}
        onSave={() => {
          onCommit({ ...data, links });
          onToast("Social links updated ✓");
        }}
      />
    </>
  );
}

/* ---------- Hero ---------- */

export function HeroEditor({ data, onCommit, onToast }: EditorProps) {
  const [hero, setHero] = useState(data.hero);
  const [uploadingImage, setUploadingImage] = useState<"main" | "left" | "right" | null>(null);

  const uploadHeroImage = async (
    file: File,
    key: "main" | "left" | "right"
  ) => {
    if (file.size > 10 * 1024 * 1024) {
      onToast("Image must be 10MB or smaller");
      return;
    }

    const session = readSession();

    if (!session) {
      onToast("Please log in again");
      return;
    }

    const form = new FormData();
    form.append("image", file);

    try {
      setUploadingImage(key);

      const response = await fetch(`${getApiBase()}/api/admin/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
        body: form,
      });

      const body = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(body.error || "Image upload failed");
      }

      setHero((current) => ({
        ...current,
        images: {
          ...current.images,
          [key]: body.url,
        },
      }));

      onToast(
        key === "main"
          ? "Main hero photo uploaded ✓"
          : key === "left"
            ? "Left hero photo uploaded ✓"
            : "Right hero photo uploaded ✓"
      );
    } catch (error) {
      onToast(
        error instanceof Error
          ? error.message
          : "Image upload failed"
      );
    } finally {
      setUploadingImage(null);
    }
  };

  const imageFields = [
    {
      key: "main" as const,
      label: "Main Hero Photo",
      description: "Large center photo",
    },
    {
      key: "left" as const,
      label: "Left Hero Photo",
      description: "Small left vlog photo",
    },
    {
      key: "right" as const,
      label: "Right Hero Photo",
      description: "Small right reels photo",
    },
  ];

  return (
    <>
      <Card title="Hero section" description="The first thing visitors see.">
        <div className="space-y-4">
          <Field label="Display name">
            <TextInput
              value={hero.name}
              onChange={(e) => setHero({ ...hero, name: e.target.value })}
            />
          </Field>

          <Field
            label="Badge text"
            hint="Shown in the small pill above the headline"
          >
            <TextInput
              value={hero.badge}
              onChange={(e) => setHero({ ...hero, badge: e.target.value })}
            />
          </Field>

          <Field label="Tagline">
            <TextArea
              value={hero.tagline}
              onChange={(e) => setHero({ ...hero, tagline: e.target.value })}
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="YouTube button label">
              <TextInput
                value={hero.youtubeCta}
                onChange={(e) =>
                  setHero({
                    ...hero,
                    youtubeCta: e.target.value,
                  })
                }
              />
            </Field>

            <Field label="Instagram button label">
              <TextInput
                value={hero.instagramCta}
                onChange={(e) =>
                  setHero({
                    ...hero,
                    instagramCta: e.target.value,
                  })
                }
              />
            </Field>
          </div>
        </div>
      </Card>

      <div className="mt-6">
        <Card
          title="Hero Photos"
          description="Change the three photos shown in the Hero section."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {imageFields.map((item) => {
              const imageUrl = hero.images[item.key];
              const uploading = uploadingImage === item.key;

              return (
                <div
                  key={item.key}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-ink/60">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={item.label}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.opacity =
                            "0.2";
                        }}
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-white/20">
                        <ImageIcon className="h-8 w-8" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 p-4">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.label}
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        {item.description}
                      </p>
                    </div>

                    <Field label="Image URL">
                      <TextInput
                        value={imageUrl}
                        onChange={(e) =>
                          setHero((current) => ({
                            ...current,
                            images: {
                              ...current.images,
                              [item.key]: e.target.value,
                            },
                          }))
                        }
                        placeholder="/images/photo.jpeg or https://..."
                      />
                    </Field>

                    <label className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10">
                      <Upload className="h-4 w-4" />

                      {uploading ? "Uploading..." : "Upload Photo"}

                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        className="hidden"
                        disabled={uploadingImage !== null}
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          e.currentTarget.value = "";

                          if (file) {
                            await uploadHeroImage(file, item.key);
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-4 text-xs text-white/40">
            JPG, PNG, WEBP or GIF · Maximum 10 MB per image
          </p>
        </Card>
      </div>

      <SaveBar
        saving={uploadingImage !== null}
        onSave={() => {
          onCommit({ ...data, hero });
          onToast("Hero section updated ✓");
        }}
      />
    </>
  );
}

/* ---------- About ---------- */

export function AboutEditor({ data, onCommit, onToast }: EditorProps) {
  const [bio, setBio] = useState(data.about.bio);
  const [highlightsText, setHighlightsText] = useState(
    data.about.highlights.join("\n")
  );
  const [stats, setStats] = useState(data.about.stats);
  const [images, setImages] = useState(data.about.images);
  const [uploadingImage, setUploadingImage] = useState<"main" | "small" | null>(
    null
  );

  const uploadAboutImage = async (
    file: File,
    key: "main" | "small"
  ) => {
    if (file.size > 10 * 1024 * 1024) {
      onToast("Image must be 10MB or smaller");
      return;
    }

    const session = readSession();

    if (!session) {
      onToast("Please log in again");
      return;
    }

    const form = new FormData();
    form.append("image", file);

    try {
      setUploadingImage(key);

      const response = await fetch(`${getApiBase()}/api/admin/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
        body: form,
      });

      const body = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(body.error || "Image upload failed");
      }

      setImages((current) => ({
        ...current,
        [key]: body.url,
      }));

      onToast(
        key === "main"
          ? "Main About photo uploaded ✓"
          : "Small About photo uploaded ✓"
      );
    } catch (error) {
      onToast(
        error instanceof Error
          ? error.message
          : "Image upload failed"
      );
    } finally {
      setUploadingImage(null);
    }
  };

  const save = () => {
    onCommit({
      ...data,
      about: {
        ...data.about,
        bio,
        highlights: highlightsText
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
        stats,
        images,
      },
    });

    onToast("About section updated ✓");
  };

  const imageFields = [
    {
      key: "main" as const,
      label: "Main About Photo",
      description: "Large photo shown on the left side",
    },
    {
      key: "small" as const,
      label: "Small About Photo",
      description: "Small floating little moments photo",
    },
  ];

  return (
    <>
      <Card title="Bio" description="The main introduction paragraph.">
        <Field label="Bio text">
          <TextArea value={bio} onChange={(e) => setBio(e.target.value)} />
        </Field>
      </Card>

      <div className="mt-6">
        <Card
          title="Highlights"
          description="One bullet point per line, shown under the bio."
        >
          <Field label="Highlights">
            <TextArea
              value={highlightsText}
              onChange={(e) => setHighlightsText(e.target.value)}
              placeholder={"Daily vlogs…\nFun reels…"}
            />
          </Field>
        </Card>
      </div>

      <div className="mt-6">
        <Card
          title="Stat cards"
          description="Three numbers shown under the highlights."
        >
          <div className="space-y-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-end gap-3">
                <div className="flex-1">
                  <Field label="Value">
                    <TextInput
                      value={stat.value}
                      onChange={(e) =>
                        setStats(
                          stats.map((s, j) =>
                            j === i ? { ...s, value: e.target.value } : s
                          )
                        )
                      }
                    />
                  </Field>
                </div>

                <div className="flex-[2]">
                  <Field label="Label">
                    <TextInput
                      value={stat.label}
                      onChange={(e) =>
                        setStats(
                          stats.map((s, j) =>
                            j === i ? { ...s, label: e.target.value } : s
                          )
                        )
                      }
                    />
                  </Field>
                </div>

                <IconBtn
                  danger
                  title="Remove"
                  onClick={() =>
                    setStats(stats.filter((_, j) => j !== i))
                  }
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </IconBtn>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <Btn
              variant="ghost"
              onClick={() =>
                setStats([
                  ...stats,
                  {
                    value: "0",
                    label: "New stat",
                  },
                ])
              }
            >
              <Plus className="h-4 w-4" />
              Add stat
            </Btn>
          </div>
        </Card>
      </div>

      <div className="mt-6">
        <Card
          title="About Photos"
          description="Change the two photos shown in the About section."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {imageFields.map((item) => {
              const imageUrl = images[item.key];
              const uploading = uploadingImage === item.key;

              return (
                <div
                  key={item.key}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-ink/60">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={item.label}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.opacity = "0.2";
                        }}
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-white/20">
                        <ImageIcon className="h-8 w-8" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 p-4">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.label}
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        {item.description}
                      </p>
                    </div>

                    <Field label="Image URL">
                      <TextInput
                        value={imageUrl}
                        onChange={(e) =>
                          setImages((current) => ({
                            ...current,
                            [item.key]: e.target.value,
                          }))
                        }
                        placeholder="/images/photo.jpeg or https://..."
                      />
                    </Field>

                    <label className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10">
                      <Upload className="h-4 w-4" />

                      {uploading ? "Uploading..." : "Upload Photo"}

                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        className="hidden"
                        disabled={uploadingImage !== null}
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          e.currentTarget.value = "";

                          if (file) {
                            await uploadAboutImage(file, item.key);
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-4 text-xs text-white/40">
            JPG, PNG, WEBP or GIF · Maximum 10 MB per image
          </p>
        </Card>
      </div>

      <SaveBar
        saving={uploadingImage !== null}
        onSave={save}
      />
    </>
  );
}


/* ---------- My Moments Video ---------- */

export function MomentsEditor({ data, onCommit, onToast }: EditorProps) {
  const [video, setVideo] = useState(data.moments?.video ?? "/videos/showcase.mp4");
  const [uploading, setUploading] = useState(false);

  const uploadVideo = async (file: File) => {
    if (file.size > 1024 * 1024 * 1024) {
      onToast("Video must be 1 GB or smaller");
      return;
    }

    const session = readSession();
    if (!session) {
      onToast("Please log in again");
      return;
    }

    const form = new FormData();
    form.append("video", file);

    try {
      setUploading(true);

      const response = await fetch(`${getApiBase()}/api/admin/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
        body: form,
      });

      const body = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(body.error || "Video upload failed");
      }

      setVideo(body.url);
      onToast("Video uploaded ✓");
    } catch (error) {
      onToast(error instanceof Error ? error.message : "Video upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <Card
        title="My Moments Video"
        description="Upload or change the video shown in the My Moments section."
      >
        <div className="space-y-4">
          {video && (
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
              <video
                key={video}
                src={video}
                controls
                preload="metadata"
                className="max-h-[520px] w-full object-contain"
              />
            </div>
          )}

          <Field label="Video URL">
            <TextInput
              value={video}
              onChange={(e) => setVideo(e.target.value)}
              placeholder="/videos/showcase.mp4"
            />
          </Field>

          <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10">
            <Upload className="h-4 w-4" />
            {uploading ? "Uploading..." : "Upload Video"}

            <input
              type="file"
              accept="video/mp4,video/webm,video/quicktime"
              className="hidden"
              disabled={uploading}
              onChange={async (e) => {
                const file = e.target.files?.[0];
                e.currentTarget.value = "";

                if (file) {
                  await uploadVideo(file);
                }
              }}
            />
          </label>

          <p className="text-xs text-white/40">
            MP4, WEBM or MOV · Maximum 1 GB
          </p>
        </div>
      </Card>

      <SaveBar
        saving={false}
        onSave={() => {
          onCommit({
            ...data,
            moments: {
              ...data.moments,
              video,
            },
          });

          onToast("My Moments video updated ✓");
        }}
      />
    </>
  );
}

/* ---------- Videos ---------- */

export function VideosEditor({ data, onCommit, onToast }: EditorProps) {
  const [videos, setVideos] = useState(data.videos);
  const [fetchingIndex, setFetchingIndex] = useState<number | null>(null);

  const fetchYouTubeInfo = async (i: number) => {
    const url = (videos[i]?.youtubeUrl ?? "").trim();

    if (!url) {
      onToast("Please paste a YouTube video URL first");
      return;
    }

    const session = readSession();

    if (!session) {
      onToast("Please log in again");
      return;
    }

    try {
      setFetchingIndex(i);

      const response = await fetch(
        `${getApiBase()}/api/youtube-info?url=${encodeURIComponent(url)}`,
        {
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        }
      );

      const body = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          body.error || "Could not fetch YouTube video information"
        );
      }

      setVideos((current) =>
        current.map((video, j) =>
          j === i
            ? {
                ...video,
                title: body.title || video.title,
                duration: body.duration || video.duration,
                views: body.views || video.views,
                thumb: body.thumb || video.thumb,
                youtubeUrl: body.youtubeUrl || video.youtubeUrl || "",
              }
            : video
        )
      );

      onToast("YouTube info fetched ✓");
    } catch (error) {
      onToast(
        error instanceof Error
          ? error.message
          : "Could not fetch YouTube video information"
      );
    } finally {
      setFetchingIndex(null);
    }
  };

  const move = (i: number, dir: -1 | 1) => {
    const next = [...videos];
    const j = i + dir;
    if (j < 0 || j >= next.length) return;
    [next[i], next[j]] = [next[j], next[i]];
    setVideos(next);
  };

  const save = () => {
    onCommit({
      ...data,
      videos: videos.filter(
        (v) =>
          v.title.trim() ||
          v.thumb.trim() ||
          (v.youtubeUrl ?? "").trim()
      ),
    });
    onToast("Videos updated ✓");
  };

  return (
    <>
      <div className="space-y-5">
        {videos.map((video, i) => (
          <Card
            key={i}
            title={`Video ${i + 1}`}
            actions={
              <div className="flex gap-1.5">
                <IconBtn title="Move up" disabled={i === 0} onClick={() => move(i, -1)}>
                  <ArrowUp className="h-3.5 w-3.5" />
                </IconBtn>
                <IconBtn title="Move down" disabled={i === videos.length - 1} onClick={() => move(i, 1)}>
                  <ArrowDown className="h-3.5 w-3.5" />
                </IconBtn>
                <IconBtn danger title="Delete" onClick={() => setVideos(videos.filter((_, j) => j !== i))}>
                  <Trash2 className="h-3.5 w-3.5" />
                </IconBtn>
              </div>
            }
          >
            <div className="flex gap-4">
              <div className="h-20 w-32 flex-none overflow-hidden rounded-lg border border-white/10 bg-ink/60">
                {video.thumb ? (
                  <img src={video.thumb} alt="" className="h-full w-full object-cover" onError={(e) => ((e.target as HTMLImageElement).style.opacity = "0.2")} />
                ) : (
                  <div className="flex h-full items-center justify-center text-white/20">
                    <ImageIcon className="h-6 w-6" />
                  </div>
                )}
              </div>
              <div className="grid flex-1 gap-3">
                <Field label="Title">
                  <TextInput
                    value={video.title}
                    onChange={(e) =>
                      setVideos(videos.map((v, j) => (j === i ? { ...v, title: e.target.value } : v)))
                    }
                  />
                </Field>
                <div className="grid grid-cols-3 gap-3">
                  <Field label="Duration">
                    <TextInput
                      value={video.duration}
                      onChange={(e) =>
                        setVideos(videos.map((v, j) => (j === i ? { ...v, duration: e.target.value } : v)))
                      }
                    />
                  </Field>
                  <Field label="Views">
                    <TextInput
                      value={video.views}
                      onChange={(e) =>
                        setVideos(videos.map((v, j) => (j === i ? { ...v, views: e.target.value } : v)))
                      }
                    />
                  </Field>
                  <Field label="Badge (optional)">
                    <TextInput
                      value={video.badge ?? ""}
                      onChange={(e) =>
                        setVideos(videos.map((v, j) => (j === i ? { ...v, badge: e.target.value || undefined } : v)))
                      }
                      placeholder="None"
                    />
                  </Field>
                </div>
                <Field
                  label="YouTube video URL"
                  hint="Paste the YouTube link, then fetch title, duration, views and thumbnail automatically."
                >
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <div className="min-w-0 flex-1">
                      <TextInput
                        value={video.youtubeUrl ?? ""}
                        onChange={(e) =>
                          setVideos(
                            videos.map((v, j) =>
                              j === i
                                ? { ...v, youtubeUrl: e.target.value }
                                : v
                            )
                          )
                        }
                        placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
                      />
                    </div>

                    <button
                      type="button"
                      disabled={
                        fetchingIndex !== null ||
                        !(video.youtubeUrl ?? "").trim()
                      }
                      onClick={() => fetchYouTubeInfo(i)}
                      className="inline-flex shrink-0 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-xs font-semibold text-red-300 transition hover:border-red-500/50 hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {fetchingIndex === i
                        ? "Fetching..."
                        : "Fetch from YouTube"}
                    </button>
                  </div>
                </Field>

                <Field label="Thumbnail image URL">
                  <div className="flex gap-2">
                    <TextInput
                      value={video.thumb}
                      onChange={(e) =>
                        setVideos(videos.map((v, j) => (j === i ? { ...v, thumb: e.target.value } : v)))
                      }
                      placeholder="https://... or a YouTube link"
                    />
                    <label className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/80 transition hover:bg-white/10">
                      <Upload className="h-4 w-4" /> Upload
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        className="hidden"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          e.currentTarget.value = "";
                          if (!file) return;
                          if (file.size > 10 * 1024 * 1024) {
                            onToast("Image must be 10MB or smaller");
                            return;
                          }
                          const session = readSession();
                          if (!session) {
                            onToast("Please log in again");
                            return;
                          }
                          const form = new FormData();
                          form.append("image", file);
                          try {
                            const response = await fetch(`${getApiBase()}/api/admin/upload`, {
                              method: "POST",
                              headers: { Authorization: `Bearer ${session.token}` },
                              body: form,
                            });
                            const body = await response.json().catch(() => ({}));
                            if (!response.ok) throw new Error(body.error || "Upload failed");
                            setVideos(videos.map((v, j) => (j === i ? { ...v, thumb: body.url } : v)));
                            onToast("Thumbnail uploaded ✓");
                          } catch (error) {
                            onToast(error instanceof Error ? error.message : "Upload failed");
                          }
                        }}
                      />
                    </label>
                  </div>
                </Field>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <Btn
          variant="ghost"
          onClick={() =>
            setVideos([
              ...videos,
              {
                title: "",
                duration: "10:00",
                views: "0 views",
                thumb: "",
                youtubeUrl: "",
                badge: undefined,
              },
            ])
          }
        >
          <Plus className="h-4 w-4" /> Add video
        </Btn>
        <SaveBar saving={false} onSave={save} />
      </div>
    </>
  );
}

/* ---------- Gallery ---------- */

export function GalleryEditor({ data, onCommit, onToast }: EditorProps) {
  const [items, setItems] = useState(data.gallery);

  const save = () => {
    onCommit({ ...data, gallery: items.filter((g) => g.src.trim()) });
    onToast("Gallery updated ✓");
  };

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item, i) => (
          <Card key={i} title={item.caption?.trim() || `Gallery Post ${i + 1}`} actions={
            <IconBtn
  danger
  title="Delete"
  onClick={() => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this gallery post?"
    );

    if (confirmed) {
      setItems(
        items.filter((_, j) => j !== i)
      );
    }
  }}
>
  <Trash2 className="h-3.5 w-3.5" />
</IconBtn>
          }>
            <div className="flex gap-4">
              <div className="h-28 w-24 flex-none overflow-hidden rounded-xl border border-white/10 bg-ink/60 shadow-lg shadow-black/20">
                {item.src ? (
                  <img src={item.src} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center text-white/20">
                    <ImageIcon className="h-5 w-5" />
                  </div>
                )}
              </div>
              <div className="grid flex-1 gap-3">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                    Gallery image
                  </p>

                  <label className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-brand/30 bg-brand/10 px-4 py-3 text-sm font-semibold text-brand-2 transition hover:border-brand/50 hover:bg-brand/20 hover:text-white">
                    <Upload className="h-4 w-4" />
                    {item.src ? "Change Image" : "Upload Image"}

                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/gif"
                      className="hidden"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        e.currentTarget.value = "";

                        if (!file) return;

                        if (file.size > 10 * 1024 * 1024) {
                          onToast("Image must be 10MB or smaller");
                          return;
                        }

                        const session = readSession();

                        if (!session) {
                          onToast("Please log in again");
                          return;
                        }

                        const form = new FormData();
                        form.append("image", file);

                        try {
                          const response = await fetch(
                            `${getApiBase()}/api/admin/upload`,
                            {
                              method: "POST",
                              headers: {
                                Authorization: `Bearer ${session.token}`,
                              },
                              body: form,
                            }
                          );

                          const body = await response.json().catch(() => ({}));

                          if (!response.ok) {
                            throw new Error(body.error || "Upload failed");
                          }

                          setItems(
                            items.map((g, j) =>
                              j === i ? { ...g, src: body.url } : g
                            )
                          );

                          onToast(
                            item.src
                              ? "Image changed ✓"
                              : "Image uploaded ✓"
                          );
                        } catch (error) {
                          onToast(
                            error instanceof Error
                              ? error.message
                              : "Upload failed"
                          );
                        }
                      }}
                    />
                  </label>
                </div>
                <div className="grid gap-3">
                  {/* <Field label="Likes">
                    <TextInput
                      value={item.likes}
                      onChange={(e) =>
                        setItems(items.map((g, j) => (j === i ? { ...g, likes: e.target.value } : g)))
                      }
                    />
                  </Field> */}
                  <Field label="Caption">
                    <TextInput
                      value={item.caption}
                      onChange={(e) =>
                        setItems(items.map((g, j) => (j === i ? { ...g, caption: e.target.value } : g)))
                      }
                    />
                  </Field>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <button
  type="button"
  onClick={() =>
    setItems([
      ...items,
      {
        src: "",
        likes: "0",
        caption: "",
      },
    ])
  }
  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:brightness-110"
>
  <Plus className="h-4 w-4" />
  Add New Post
</button>
        <SaveBar saving={false} onSave={save} />
      </div>
    </>
  );
}

/* ---------- Marquee + Pillars ---------- */

export function MarqueeEditor({ data, onCommit, onToast }: EditorProps) {
  const [text, setText] = useState(data.marquee.join(", "));
  return (
    <>
      <Card
        title="Marquee strip"
        description="Comma-separated words that scroll across the pink banner."
      >
        <Field label="Words / phrases">
          <TextArea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="VLOGS, REELS, LIFESTYLE"
          />
        </Field>
      </Card>
      <SaveBar
        saving={false}
        onSave={() => {
          onCommit({
            ...data,
            marquee: text.split(",").map((s) => s.trim()).filter(Boolean),
          });
          onToast("Marquee updated ✓");
        }}
      />
    </>
  );
}

const ICON_OPTIONS = [
  { value: "youtube", label: "YouTube" },
  { value: "instagram", label: "Instagram / Reels" },
  { value: "camera", label: "Camera" },
  { value: "clapperboard", label: "Clapperboard" },
  { value: "video", label: "Video" },
  { value: "play", label: "Play" },
  { value: "film", label: "Film" },
  { value: "smartphone", label: "Smartphone" },
  { value: "heart", label: "Heart" },
  { value: "sparkles", label: "Sparkles" },
  { value: "star", label: "Star" },
  { value: "music", label: "Music" },
  { value: "mic", label: "Microphone" },
  { value: "image", label: "Photo" },
  { value: "smile", label: "Smile / Fun" },
] as const;

export function PillarsEditor({ data, onCommit, onToast }: EditorProps) {
  const [pillars, setPillars] = useState(data.pillars);

  return (
    <>
      <div className="space-y-5">
        {pillars.map((pillar, i) => (
          <Card
            key={i}
            title={`Pillar ${i + 1}`}
            actions={
              <IconBtn danger title="Delete" onClick={() => setPillars(pillars.filter((_, j) => j !== i))}>
                <Trash2 className="h-3.5 w-3.5" />
              </IconBtn>
            }
          >
            <div className="grid gap-3 sm:grid-cols-[auto_1fr]">
              <Field label="Icon">
                <select
                  value={pillar.icon}
                  onChange={(e) =>
                    setPillars(
                      pillars.map((p, j) =>
                        j === i ? { ...p, icon: e.target.value as typeof p.icon } : p
                      )
                    )
                  }
                  className="w-full rounded-xl border border-white/15 bg-ink/60 px-3 py-2.5 text-sm text-white outline-none focus:border-brand"
                >
                  {ICON_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Title">
                <TextInput
                  value={pillar.title}
                  onChange={(e) =>
                    setPillars(pillars.map((p, j) => (j === i ? { ...p, title: e.target.value } : p)))
                  }
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Text">
                  <TextArea
                    value={pillar.text}
                    onChange={(e) =>
                      setPillars(pillars.map((p, j) => (j === i ? { ...p, text: e.target.value } : p)))
                    }
                  />
                </Field>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <Btn
          variant="ghost"
          onClick={() => setPillars([...pillars, { icon: "heart", title: "", text: "" }])}
        >
          <Plus className="h-4 w-4" /> Add pillar
        </Btn>
        <SaveBar
          saving={false}
          onSave={() => {
            onCommit({ ...data, pillars: pillars.filter((p) => p.title.trim()) });
            onToast("Pillars updated ✓");
          }}
        />
      </div>
    </>
  );
}
