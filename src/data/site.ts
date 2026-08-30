// export const NAV_LINKS = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Videos", href: "#videos" },
//   { label: "Gallery", href: "#gallery" },
//   { label: "Collab", href: "#collab" },
// ];

// export interface VideoCard {
//   title: string;
//   duration: string;
//   views: string;
//   thumb: string;
//   badge?: string;
// }

// export interface GalleryItem {
//   src: string;
//   likes: string;
//   caption: string;
// }

// export interface Pillar {
//   icon: "film" | "smartphone" | "heart";
//   title: string;
//   text: string;
// }

// export interface Stat {
//   value: string;
//   label: string;
// }

// export interface SiteData {
//   links: {
//     instagram: string;
//     youtube: string;
//   };
//   hero: {
//     name: string;
//     badge: string;
//     tagline: string;
//     youtubeCta: string;
//     instagramCta: string;
//   };
//   about: {
//     bio: string;
//     highlights: string[];
//     stats: Stat[];
//   };
//   videos: VideoCard[];
//   gallery: GalleryItem[];
//   marquee: string[];
//   pillars: Pillar[];
// }

// export const DEFAULT_SITE: SiteData = {
//   links: {
//     instagram:
//       "https://www.instagram.com/kirti_rathore0105?igsi=dnBqdHJtb2Vub2xj",
//     youtube: "https://youtube.com/@rathorevlogs_0148?si=TQyygLVjHIFP6Xen",
//   },
//   hero: {
//     name: "Kirti Rathore",
//     badge: "Creator · Vlogger · @kirti_rathore0105",
//     tagline:
//       "Bringing everyday life to your screen — vlogs, reels & little moments of joy on Instagram and the Rathore Vlogs YouTube channel.",
//     youtubeCta: "Watch on YouTube",
//     instagramCta: "Follow on Instagram",
//   },
//   about: {
//     bio: "I'm a content creator and vlogger who believes the best stories are found in everyday moments. From morning chai to golden-hour walks, I film it all — and share it with my favourite people: you. Catch my vlogs on the Rathore Vlogs YouTube channel and reels on @kirti_rathore0105.",
//     highlights: [
//       "Daily-life vlogs & travel diaries on YouTube",
//       "Trending reels & shorts on Instagram",
//       "Fun challenges, food & behind-the-scenes",
//       "One happy place — Rathore family of fans ❤️",
//     ],
//     stats: [
//       { value: "2", label: "Platforms I create on" },
//       { value: "500+", label: "Reels, vlogs & shorts" },
//       { value: "∞", label: "Smiles delivered 😄" },
//     ],
//   },
//   videos: [
//     {
//       title: "A Day In My Life ☀️ Morning To Night",
//       duration: "12:47",
//       views: "42K views",
//       thumb:
//         "https://images.pexels.com/photos/4152611/pexels-photo-4152611.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//       badge: "Most loved",
//     },
//     {
//       title: "Behind The Scenes Of My Recent Shoot 🎬",
//       duration: "08:21",
//       views: "31K views",
//       thumb:
//         "https://images.pexels.com/photos/7964644/pexels-photo-7964644.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//     },
//     {
//       title: "Cooking With Me 🍳 Easy & Tasty Recipe",
//       duration: "15:03",
//       views: "58K views",
//       thumb:
//         "https://images.pexels.com/photos/4152606/pexels-photo-4152606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//       badge: "New",
//     },
//     {
//       title: "Golden Hour Walk & Chit-Chat 🌅",
//       duration: "10:32",
//       views: "27K views",
//       thumb:
//         "https://images.pexels.com/photos/4152780/pexels-photo-4152780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//     },
//   ],
//   gallery: [
//     {
//       src: "https://images.pexels.com/photos/38379425/pexels-photo-38379425.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//       likes: "12.4K",
//       caption: "Golden hour, every hour 🌅",
//     },
//     {
//       src: "https://images.pexels.com/photos/13929970/pexels-photo-13929970.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//       likes: "9.1K",
//       caption: "Behind the scenes 🎥",
//     },
//     {
//       src: "https://images.pexels.com/photos/37054323/pexels-photo-37054323.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//       likes: "15.7K",
//       caption: "Traditional vibes ✨",
//     },
//     {
//       src: "https://images.pexels.com/photos/35612741/pexels-photo-35612741.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//       likes: "8.8K",
//       caption: "Nature walks & talks 🌿",
//     },
//     {
//       src: "https://images.pexels.com/photos/38906582/pexels-photo-38906582.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//       likes: "11.2K",
//       caption: "Just me & the sun ☀️",
//     },
//     {
//       src: "https://images.pexels.com/photos/34481843/pexels-photo-34481843.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//       likes: "7.9K",
//       caption: "River side memories 🏞️",
//     },
//   ],
//   marquee: [
//     "VLOGS",
//     "REELS",
//     "LIFESTYLE",
//     "FUN MOMENTS",
//     "BEHIND THE SCENES",
//     "DAILY VIBES",
//     "TRAVEL DIARIES",
//     "GOOD VIBES ONLY",
//   ],
//   pillars: [
//     {
//       icon: "film",
//       title: "Daily Vlogs",
//       text: "Real, raw & full of laughter — a peep into everyday life on the Rathore Vlogs YouTube channel.",
//     },
//     {
//       icon: "smartphone",
//       title: "Reels & Shorts",
//       text: "Snappy reels, trending sounds & smooth transitions — fresh drops on @kirti_rathore0105.",
//     },
//     {
//       icon: "heart",
//       title: "Lifestyle & Fun",
//       text: "Fashion, food, travel and everything in between — little moments that make life special.",
//     },
//   ],
// };
// export const NAV_LINKS = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },

//   // NEW
//   { label: "Moments", href: "#moments" },

//   { label: "Videos", href: "#videos" },
//   { label: "Gallery", href: "#gallery" },
//   { label: "Collab", href: "#collab" },
// ];

// export interface VideoCard {
//   title: string;
//   duration: string;
//   views: string;
//   thumb: string;
//   badge?: string;
// }

// export interface GalleryItem {
//   src: string;
//   likes: string;
//   caption: string;
// }

// export interface Pillar {
//   icon: "film" | "smartphone" | "heart";
//   title: string;
//   text: string;
// }

// export interface Stat {
//   value: string;
//   label: string;
// }

// export interface SiteData {
//   links: {
//     instagram: string;
//     youtube: string;
//   };

//   hero: {
//     name: string;
//     badge: string;
//     tagline: string;
//     youtubeCta: string;
//     instagramCta: string;
//   };

//   about: {
//     bio: string;
//     highlights: string[];
//     stats: Stat[];
//   };

//   // =========================
//   // NEW - MY MOMENTS VIDEO
//   // =========================
//   moments: {
//     video: string;
//   };

//   videos: VideoCard[];
//   gallery: GalleryItem[];
//   marquee: string[];
//   pillars: Pillar[];
// }

// export const DEFAULT_SITE: SiteData = {
//   links: {
//     instagram:
//       "https://www.instagram.com/kirti_rathore0105?igsi=dnBqdHJtb2Vub2xj",
//     youtube:
//       "https://youtube.com/@rathorevlogs_0148?si=TQyygLVjHIFP6Xen",
//   },

//   hero: {
//     name: "Kirti Rathore",
//     badge: "Creator · Vlogger · @kirti_rathore0105",
//     tagline:
//       "Bringing everyday life to your screen — vlogs, reels & little moments of joy on Instagram and the Rathore Vlogs YouTube channel.",
//     youtubeCta: "Watch on YouTube",
//     instagramCta: "Follow on Instagram",
//   },

//   about: {
//     bio: "I'm a content creator and vlogger who believes the best stories are found in everyday moments. From morning chai to golden-hour walks, I film it all — and share it with my favourite people: you. Catch my vlogs on the Rathore Vlogs YouTube channel and reels on @kirti_rathore0105.",

//     highlights: [
//       "Daily-life vlogs & travel diaries on YouTube",
//       "Trending reels & shorts on Instagram",
//       "Fun challenges, food & behind-the-scenes",
//       "One happy place — Rathore family of fans ❤️",
//     ],

//     stats: [
//       {
//         value: "2",
//         label: "Platforms I create on",
//       },
//       {
//         value: "500+",
//         label: "Reels, vlogs & shorts",
//       },
//       {
//         value: "∞",
//         label: "Smiles delivered 😄",
//       },
//     ],
//   },

//   // =========================
//   // NEW - MY MOMENTS VIDEO
//   // =========================
//   moments: {
//     video: "/videos/showcase.mp4",
//   },

//   videos: [
//     {
//       title: "A Day In My Life ☀️ Morning To Night",
//       duration: "12:47",
//       views: "42K views",
//       thumb:
//         "https://images.pexels.com/photos/4152611/pexels-photo-4152611.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//       badge: "Most loved",
//     },

//     {
//       title: "Behind The Scenes Of My Recent Shoot 🎬",
//       duration: "08:21",
//       views: "31K views",
//       thumb:
//         "https://images.pexels.com/photos/7964644/pexels-photo-7964644.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//     },

//     {
//       title: "Cooking With Me 🍳 Easy & Tasty Recipe",
//       duration: "15:03",
//       views: "58K views",
//       thumb:
//         "https://images.pexels.com/photos/4152606/pexels-photo-4152606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//       badge: "New",
//     },

//     {
//       title: "Golden Hour Walk & Chit-Chat 🌅",
//       duration: "10:32",
//       views: "27K views",
//       thumb:
//         "https://images.pexels.com/photos/4152780/pexels-photo-4152780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//     },
//   ],

//   gallery: [
//     {
//       src:
//         "https://images.pexels.com/photos/38379425/pexels-photo-38379425.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//       likes: "12.4K",
//       caption: "Golden hour, every hour 🌅",
//     },

//     {
//       src:
//         "https://images.pexels.com/photos/13929970/pexels-photo-13929970.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//       likes: "9.1K",
//       caption: "Behind the scenes 🎥",
//     },

//     {
//       src:
//         "https://images.pexels.com/photos/37054323/pexels-photo-37054323.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//       likes: "15.7K",
//       caption: "Traditional vibes ✨",
//     },

//     {
//       src:
//         "https://images.pexels.com/photos/35612741/pexels-photo-35612741.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//       likes: "8.8K",
//       caption: "Nature walks & talks 🌿",
//     },

//     {
//       src:
//         "https://images.pexels.com/photos/38906582/pexels-photo-38906582.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//       likes: "11.2K",
//       caption: "Just me & the sun ☀️",
//     },

//     {
//       src:
//         "https://images.pexels.com/photos/34481843/pexels-photo-34481843.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//       likes: "7.9K",
//       caption: "River side memories 🏞️",
//     },
//   ],

//   marquee: [
//     "VLOGS",
//     "REELS",
//     "LIFESTYLE",
//     "FUN MOMENTS",
//     "BEHIND THE SCENES",
//     "DAILY VIBES",
//     "TRAVEL DIARIES",
//     "GOOD VIBES ONLY",
//   ],

//   pillars: [
//     {
//       icon: "film",
//       title: "Daily Vlogs",
//       text:
//         "Real, raw & full of laughter — a peep into everyday life on the Rathore Vlogs YouTube channel.",
//     },

//     {
//       icon: "smartphone",
//       title: "Reels & Shorts",
//       text:
//         "Snappy reels, trending sounds & smooth transitions — fresh drops on @kirti_rathore0105.",
//     },

//     {
//       icon: "heart",
//       title: "Lifestyle & Fun",
//       text:
//         "Fashion, food, travel and everything in between — little moments that make life special.",
//     },
//   ],
// };  
// export const NAV_LINKS = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Moments", href: "#moments" },
//   { label: "Videos", href: "#videos" },
//   { label: "Gallery", href: "#gallery" },
//   { label: "Collab", href: "#collab" },
// ];

// export interface VideoCard {
//   title: string;
//   duration: string;
//   views: string;
//   thumb: string;
//   badge?: string;
// }

// export interface GalleryItem {
//   src: string;
//   likes: string;
//   caption: string;
// }

// /* =========================
//    PILLAR ICON TYPES
// ========================= */
// export type PillarIcon =
//   | "youtube"
//   | "instagram"
//   | "camera"
//   | "clapperboard"
//   | "video"
//   | "play"
//   | "film"
//   | "smartphone"
//   | "heart"
//   | "sparkles"
//   | "star"
//   | "music"
//   | "mic"
//   | "image"
//   | "smile";

// export interface Pillar {
//   icon: PillarIcon;
//   title: string;
//   text: string;
// }

// export interface Stat {
//   value: string;
//   label: string;
// }

// /* =========================
//    HERO IMAGES
// ========================= */
// export interface HeroImages {
//   main: string;
//   left: string;
//   right: string;
// }

// export interface SiteData {
//   links: {
//     instagram: string;
//     youtube: string;
//   };

//   hero: {
//     name: string;
//     badge: string;
//     tagline: string;
//     youtubeCta: string;
//     instagramCta: string;

//     // Admin panel thi change thai shake
//     images: HeroImages;
//   };

//   about: {
//     bio: string;
//     highlights: string[];
//     stats: Stat[];
//   };

//   /* =========================
//      MY MOMENTS VIDEO
//   ========================= */
//   moments: {
//     video: string;
//   };

//   videos: VideoCard[];
//   gallery: GalleryItem[];
//   marquee: string[];
//   pillars: Pillar[];
// }

// export const DEFAULT_SITE: SiteData = {
//   links: {
//     instagram:
//       "https://www.instagram.com/kirti_rathore0105?igsi=dnBqdHJtb2Vub2xj",

//     youtube:
//       "https://youtube.com/@rathorevlogs_0148?si=TQyygLVjHIFP6Xen",
//   },

//   /* =========================
//      HERO
//   ========================= */
//   hero: {
//     name: "Kirti Rathore",

//     badge: "Creator · Vlogger · @kirti_rathore0105",

//     tagline:
//       "Bringing everyday life to your screen — vlogs, reels & little moments of joy on Instagram and the Rathore Vlogs YouTube channel.",

//     youtubeCta: "Watch on YouTube",

//     instagramCta: "Follow on Instagram",

//     /* =========================
//        HERO PHOTOS
//     ========================= */
//     images: {
//       main: "/images/main-photo.jpeg",
//       left: "/images/left-photo.PNG",
//       right: "/images/right-photo.jpeg",
//     },
//   },

//   /* =========================
//      ABOUT
//   ========================= */
//   about: {
//     bio:
//       "I'm a content creator and vlogger who believes the best stories are found in everyday moments. From morning chai to golden-hour walks, I film it all — and share it with my favourite people: you. Catch my vlogs on the Rathore Vlogs YouTube channel and reels on @kirti_rathore0105.",

//     highlights: [
//       "Daily-life vlogs & travel diaries on YouTube",
//       "Trending reels & shorts on Instagram",
//       "Fun challenges, food & behind-the-scenes",
//       "One happy place — Rathore family of fans ❤️",
//     ],

//     stats: [
//       {
//         value: "2",
//         label: "Platforms I create on",
//       },

//       {
//         value: "500+",
//         label: "Reels, vlogs & shorts",
//       },

//       {
//         value: "∞",
//         label: "Smiles delivered 😄",
//       },
//     ],
//   },

//   /* =========================
//      MY MOMENTS VIDEO
//   ========================= */
//   moments: {
//     video: "/videos/showcase.mp4",
//   },

//   /* =========================
//      VIDEOS
//   ========================= */
//   videos: [
//     {
//       title: "A Day In My Life ☀️ Morning To Night",
//       duration: "12:47",
//       views: "42K views",

//       thumb:
//         "https://images.pexels.com/photos/4152611/pexels-photo-4152611.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",

//       badge: "Most loved",
//     },

//     {
//       title: "Behind The Scenes Of My Recent Shoot 🎬",
//       duration: "08:21",
//       views: "31K views",

//       thumb:
//         "https://images.pexels.com/photos/7964644/pexels-photo-7964644.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//     },

//     {
//       title: "Cooking With Me 🍳 Easy & Tasty Recipe",
//       duration: "15:03",
//       views: "58K views",

//       thumb:
//         "https://images.pexels.com/photos/4152606/pexels-photo-4152606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",

//       badge: "New",
//     },

//     {
//       title: "Golden Hour Walk & Chit-Chat 🌅",
//       duration: "10:32",
//       views: "27K views",

//       thumb:
//         "https://images.pexels.com/photos/4152780/pexels-photo-4152780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//     },
//   ],

//   /* =========================
//      GALLERY
//   ========================= */
//   gallery: [
//     {
//       src:
//         "https://images.pexels.com/photos/38379425/pexels-photo-38379425.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",

//       likes: "12.4K",

//       caption: "Golden hour, every hour 🌅",
//     },

//     {
//       src:
//         "https://images.pexels.com/photos/13929970/pexels-photo-13929970.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",

//       likes: "9.1K",

//       caption: "Behind the scenes 🎥",
//     },

//     {
//       src:
//         "https://images.pexels.com/photos/37054323/pexels-photo-37054323.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",

//       likes: "15.7K",

//       caption: "Traditional vibes ✨",
//     },

//     {
//       src:
//         "https://images.pexels.com/photos/35612741/pexels-photo-35612741.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",

//       likes: "8.8K",

//       caption: "Nature walks & talks 🌿",
//     },

//     {
//       src:
//         "https://images.pexels.com/photos/38906582/pexels-photo-38906582.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",

//       likes: "11.2K",

//       caption: "Just me & the sun ☀️",
//     },

//     {
//       src:
//         "https://images.pexels.com/photos/34481843/pexels-photo-34481843.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",

//       likes: "7.9K",

//       caption: "River side memories 🏞️",
//     },
//   ],

//   /* =========================
//      MARQUEE
//   ========================= */
//   marquee: [
//     "VLOGS",
//     "REELS",
//     "LIFESTYLE",
//     "FUN MOMENTS",
//     "BEHIND THE SCENES",
//     "DAILY VIBES",
//     "TRAVEL DIARIES",
//     "GOOD VIBES ONLY",
//   ],

//   /* =========================
//      PILLARS
//   ========================= */
//   pillars: [
//     {
//       icon: "youtube",

//       title: "Daily Vlogs",

//       text:
//         "Real, raw & full of laughter — a peep into everyday life on the Rathore Vlogs YouTube channel.",
//     },

//     {
//       icon: "instagram",

//       title: "Reels & Shorts",

//       text:
//         "Snappy reels, trending sounds & smooth transitions — fresh drops on @kirti_rathore0105.",
//     },

//     {
//       icon: "camera",

//       title: "Lifestyle & Fun",

//       text:
//         "Fashion, food, travel and everything in between — little moments that make life special.",
//     },
//   ],
// };
// export const NAV_LINKS = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Moments", href: "#moments" },
//   { label: "Videos", href: "#videos" },
//   { label: "Gallery", href: "#gallery" },
//   { label: "Collab", href: "#collab" },
// ];

// export interface VideoCard {
//   title: string;
//   duration: string;
//   views: string;
//   thumb: string;
//   badge?: string;
// }

// export interface GalleryItem {
//   src: string;
//   likes: string;
//   caption: string;
// }

// /* =========================
//    PILLAR ICON TYPES
// ========================= */

// export type PillarIcon =
//   | "youtube"
//   | "instagram"
//   | "camera"
//   | "clapperboard"
//   | "video"
//   | "play"
//   | "film"
//   | "smartphone"
//   | "heart"
//   | "sparkles"
//   | "star"
//   | "music"
//   | "mic"
//   | "image"
//   | "smile";

// export interface Pillar {
//   icon: PillarIcon;
//   title: string;
//   text: string;
// }

// export interface Stat {
//   value: string;
//   label: string;
// }

// /* =========================
//    HERO IMAGES
// ========================= */

// export interface HeroImages {
//   main: string;
//   left: string;
//   right: string;
// }

// /* =========================
//    ABOUT IMAGES
// ========================= */

// export interface AboutImages {
//   main: string;
//   small: string;
// }

// export interface SiteData {
//   links: {
//     instagram: string;
//     youtube: string;
//   };

//   hero: {
//     name: string;
//     badge: string;
//     tagline: string;
//     youtubeCta: string;
//     instagramCta: string;

//     images: HeroImages;
//   };

//   about: {
//     bio: string;
//     highlights: string[];
//     stats: Stat[];

//     // Admin panel thi change thai shake
//     images: AboutImages;
//   };

//   /* =========================
//      MY MOMENTS VIDEO
//   ========================= */

//   moments: {
//     video: string;
//   };

//   videos: VideoCard[];
//   gallery: GalleryItem[];
//   marquee: string[];
//   pillars: Pillar[];
// }

// export const DEFAULT_SITE: SiteData = {
//   links: {
//     instagram:
//       "https://www.instagram.com/kirti_rathore0105?igsi=dnBqdHJtb2Vub2xj",

//     youtube:
//       "https://youtube.com/@rathorevlogs_0148?si=TQyygLVjHIFP6Xen",
//   },

//   /* =========================
//      HERO
//   ========================= */

//   hero: {
//     name: "Kirti Rathore",

//     badge: "Creator · Vlogger · @kirti_rathore0105",

//     tagline:
//       "Bringing everyday life to your screen — vlogs, reels & little moments of joy on Instagram and the Rathore Vlogs YouTube channel.",

//     youtubeCta: "Watch on YouTube",

//     instagramCta: "Follow on Instagram",

//     images: {
//       main: "/images/main-photo.jpeg",
//       left: "/images/left-photo.PNG",
//       right: "/images/right-photo.jpeg",
//     },
//   },

//   /* =========================
//      ABOUT
//   ========================= */

//   about: {
//     bio:
//       "I'm a content creator and vlogger who believes the best stories are found in everyday moments. From morning chai to golden-hour walks, I film it all — and share it with my favourite people: you. Catch my vlogs on the Rathore Vlogs YouTube channel and reels on @kirti_rathore0105.",

//     highlights: [
//       "Daily-life vlogs & travel diaries on YouTube",
//       "Trending reels & shorts on Instagram",
//       "Fun challenges, food & behind-the-scenes",
//       "One happy place — Rathore family of fans ❤️",
//     ],

//     stats: [
//       {
//         value: "2",
//         label: "Platforms I create on",
//       },

//       {
//         value: "500+",
//         label: "Reels, vlogs & shorts",
//       },

//       {
//         value: "∞",
//         label: "Smiles delivered 😄",
//       },
//     ],

//     /* =========================
//        ABOUT PHOTOS
//     ========================= */

//     images: {
//       main: "/images/about-main.jpeg",
//       small: "/images/about-small.jpeg",
//     },
//   },

//   /* =========================
//      MY MOMENTS VIDEO
//   ========================= */

//   moments: {
//     video: "/videos/showcase.mp4",
//   },

//   /* =========================
//      VIDEOS
//   ========================= */

//   videos: [
//     {
//       title: "A Day In My Life ☀️ Morning To Night",
//       duration: "12:47",
//       views: "42K views",

//       thumb:
//         "https://images.pexels.com/photos/4152611/pexels-photo-4152611.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",

//       badge: "Most loved",
//     },

//     {
//       title: "Behind The Scenes Of My Recent Shoot 🎬",
//       duration: "08:21",
//       views: "31K views",

//       thumb:
//         "https://images.pexels.com/photos/7964644/pexels-photo-7964644.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//     },

//     {
//       title: "Cooking With Me 🍳 Easy & Tasty Recipe",
//       duration: "15:03",
//       views: "58K views",

//       thumb:
//         "https://images.pexels.com/photos/4152606/pexels-photo-4152606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",

//       badge: "New",
//     },

//     {
//       title: "Golden Hour Walk & Chit-Chat 🌅",
//       duration: "10:32",
//       views: "27K views",

//       thumb:
//         "https://images.pexels.com/photos/4152780/pexels-photo-4152780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//     },
//   ],

//   /* =========================
//      GALLERY
//   ========================= */

//   gallery: [
//     {
//       src:
//         "https://images.pexels.com/photos/38379425/pexels-photo-38379425.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",

//       likes: "12.4K",

//       caption: "Golden hour, every hour 🌅",
//     },

//     {
//       src:
//         "https://images.pexels.com/photos/13929970/pexels-photo-13929970.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",

//       likes: "9.1K",

//       caption: "Behind the scenes 🎥",
//     },

//     {
//       src:
//         "https://images.pexels.com/photos/37054323/pexels-photo-37054323.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",

//       likes: "15.7K",

//       caption: "Traditional vibes ✨",
//     },

//     {
//       src:
//         "https://images.pexels.com/photos/35612741/pexels-photo-35612741.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",

//       likes: "8.8K",

//       caption: "Nature walks & talks 🌿",
//     },

//     {
//       src:
//         "https://images.pexels.com/photos/38906582/pexels-photo-38906582.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",

//       likes: "11.2K",

//       caption: "Just me & the sun ☀️",
//     },

//     {
//       src:
//         "https://images.pexels.com/photos/34481843/pexels-photo-34481843.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",

//       likes: "7.9K",

//       caption: "River side memories 🏞️",
//     },
//   ],

//   /* =========================
//      MARQUEE
//   ========================= */

//   marquee: [
//     "VLOGS",
//     "REELS",
//     "LIFESTYLE",
//     "FUN MOMENTS",
//     "BEHIND THE SCENES",
//     "DAILY VIBES",
//     "TRAVEL DIARIES",
//     "GOOD VIBES ONLY",
//   ],

//   /* =========================
//      PILLARS
//   ========================= */

//   pillars: [
//     {
//       icon: "youtube",

//       title: "Daily Vlogs",

//       text:
//         "Real, raw & full of laughter — a peep into everyday life on the Rathore Vlogs YouTube channel.",
//     },

//     {
//       icon: "instagram",

//       title: "Reels & Shorts",

//       text:
//         "Snappy reels, trending sounds & smooth transitions — fresh drops on @kirti_rathore0105.",
//     },

//     {
//       icon: "camera",

//       title: "Lifestyle & Fun",

//       text:
//         "Fashion, food, travel and everything in between — little moments that make life special.",
//     },
//   ],
// };
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Moments", href: "#moments" },
  { label: "Videos", href: "#videos" },
  { label: "Gallery", href: "#gallery" },
  { label: "Collab", href: "#collab" },
];

export interface VideoCard {
  title: string;
  duration: string;
  views: string;
  thumb: string;

  // NEW - Individual YouTube video link
  youtubeUrl?: string;

  badge?: string;
}

export interface GalleryItem {
  src: string;
  likes: string;
  caption: string;
}

/* =========================
   PILLAR ICON TYPES
========================= */

export type PillarIcon =
  | "youtube"
  | "instagram"
  | "camera"
  | "clapperboard"
  | "video"
  | "play"
  | "film"
  | "smartphone"
  | "heart"
  | "sparkles"
  | "star"
  | "music"
  | "mic"
  | "image"
  | "smile";

export interface Pillar {
  icon: PillarIcon;
  title: string;
  text: string;
}

export interface Stat {
  value: string;
  label: string;
}

/* =========================
   HERO IMAGES
========================= */

export interface HeroImages {
  main: string;
  left: string;
  right: string;
}

/* =========================
   ABOUT IMAGES
========================= */

export interface AboutImages {
  main: string;
  small: string;
}

export interface SiteData {
  links: {
    instagram: string;
    youtube: string;
  };

  hero: {
    name: string;
    badge: string;
    tagline: string;
    youtubeCta: string;
    instagramCta: string;
    images: HeroImages;
  };

  about: {
    bio: string;
    highlights: string[];
    stats: Stat[];
    images: AboutImages;
  };

  moments: {
    video: string;
  };

  videos: VideoCard[];
  gallery: GalleryItem[];
  marquee: string[];
  pillars: Pillar[];
}

export const DEFAULT_SITE: SiteData = {
  links: {
    instagram:
      "https://www.instagram.com/kirti_rathore0105?igsi=dnBqdHJtb2Vub2xj",

    youtube:
      "https://youtube.com/@rathorevlogs_0148?si=TQyygLVjHIFP6Xen",
  },

  /* =========================
     HERO
  ========================= */

  hero: {
    name: "Kirti Rathore",

    badge: "Creator · Vlogger · @kirti_rathore0105",

    tagline:
      "Bringing everyday life to your screen — vlogs, reels & little moments of joy on Instagram and the Rathore Vlogs YouTube channel.",

    youtubeCta: "Watch on YouTube",

    instagramCta: "Follow on Instagram",

    images: {
      main: "/images/main-photo.jpeg",
      left: "/images/left-photo.PNG",
      right: "/images/right-photo.jpeg",
    },
  },

  /* =========================
     ABOUT
  ========================= */

  about: {
    bio:
      "I'm a content creator and vlogger who believes the best stories are found in everyday moments. From morning chai to golden-hour walks, I film it all — and share it with my favourite people: you. Catch my vlogs on the Rathore Vlogs YouTube channel and reels on @kirti_rathore0105.",

    highlights: [
      "Daily-life vlogs & travel diaries on YouTube",
      "Trending reels & shorts on Instagram",
      "Fun challenges, food & behind-the-scenes",
      "One happy place — Rathore family of fans ❤️",
    ],

    stats: [
      {
        value: "2",
        label: "Platforms I create on",
      },
      {
        value: "500+",
        label: "Reels, vlogs & shorts",
      },
      {
        value: "∞",
        label: "Smiles delivered 😄",
      },
    ],

    images: {
      main: "/images/about-main.jpeg",
      small: "/images/about-small.jpeg",
    },
  },

  /* =========================
     MY MOMENTS VIDEO
  ========================= */

  moments: {
    video: "/videos/showcase.mp4",
  },

  /* =========================
     VIDEOS
  ========================= */

  videos: [
    {
      title: "A Day In My Life ☀️ Morning To Night",
      duration: "12:47",
      views: "42K views",

      thumb:
        "https://images.pexels.com/photos/4152611/pexels-photo-4152611.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",

      youtubeUrl: "",

      badge: "Most loved",
    },

    {
      title: "Behind The Scenes Of My Recent Shoot 🎬",
      duration: "08:21",
      views: "31K views",

      thumb:
        "https://images.pexels.com/photos/7964644/pexels-photo-7964644.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",

      youtubeUrl: "",
    },

    {
      title: "Cooking With Me 🍳 Easy & Tasty Recipe",
      duration: "15:03",
      views: "58K views",

      thumb:
        "https://images.pexels.com/photos/4152606/pexels-photo-4152606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",

      youtubeUrl: "",

      badge: "New",
    },

    {
      title: "Golden Hour Walk & Chit-Chat 🌅",
      duration: "10:32",
      views: "27K views",

      thumb:
        "https://images.pexels.com/photos/4152780/pexels-photo-4152780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",

      youtubeUrl: "",
    },
  ],

  /* =========================
     GALLERY
  ========================= */

  gallery: [
    {
      src:
        "https://images.pexels.com/photos/38379425/pexels-photo-38379425.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      likes: "12.4K",
      caption: "Golden hour, every hour 🌅",
    },

    {
      src:
        "https://images.pexels.com/photos/13929970/pexels-photo-13929970.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      likes: "9.1K",
      caption: "Behind the scenes 🎥",
    },

    {
      src:
        "https://images.pexels.com/photos/37054323/pexels-photo-37054323.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      likes: "15.7K",
      caption: "Traditional vibes ✨",
    },

    {
      src:
        "https://images.pexels.com/photos/35612741/pexels-photo-35612741.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      likes: "8.8K",
      caption: "Nature walks & talks 🌿",
    },

    {
      src:
        "https://images.pexels.com/photos/38906582/pexels-photo-38906582.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      likes: "11.2K",
      caption: "Just me & the sun ☀️",
    },

    {
      src:
        "https://images.pexels.com/photos/34481843/pexels-photo-34481843.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      likes: "7.9K",
      caption: "River side memories 🏞️",
    },
  ],

  /* =========================
     MARQUEE
  ========================= */

  marquee: [
    "VLOGS",
    "REELS",
    "LIFESTYLE",
    "FUN MOMENTS",
    "BEHIND THE SCENES",
    "DAILY VIBES",
    "TRAVEL DIARIES",
    "GOOD VIBES ONLY",
  ],

  /* =========================
     PILLARS
  ========================= */

  pillars: [
    {
      icon: "youtube",
      title: "Daily Vlogs",
      text:
        "Real, raw & full of laughter — a peep into everyday life on the Rathore Vlogs YouTube channel.",
    },

    {
      icon: "instagram",
      title: "Reels & Shorts",
      text:
        "Snappy reels, trending sounds & smooth transitions — fresh drops on @kirti_rathore0105.",
    },

    {
      icon: "camera",
      title: "Lifestyle & Fun",
      text:
        "Fashion, food, travel and everything in between — little moments that make life special.",
    },
  ],
};