import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

import Reveal from "./Reveal";
import { useSite } from "../lib/store";

export default function PhotoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasMountedRef = useRef(false);

  const { data } = useSite();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Admin panel thi video change thay tyare reset
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // First page load par unnecessary video.load() avoid
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      setIsPlaying(false);
      setIsMuted(video.muted);
      return;
    }

    video.pause();
    video.load();

    setIsPlaying(false);
    setIsMuted(video.muted);
  }, [data.moments.video]);

  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Video play failed:", error);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleVolume = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      id="moments"
      className="relative overflow-hidden bg-ink py-16 sm:py-24 lg:py-28"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[100px] sm:h-[500px] sm:w-[700px] sm:blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Heading */}
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand sm:text-sm sm:tracking-[0.25em]">
              ✨ My Moments
            </p>

            <h2 className="mt-4 font-display text-[2.25rem] font-semibold leading-tight text-white sm:text-5xl">
              Life through my{" "}
              <span className="italic text-brand">camera</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              A little collection of moments, memories and experiences from my
              everyday life.
            </p>
          </div>
        </Reveal>

        {/* Cinematic Video */}
        <div className="mt-10 sm:mt-14">
          <Reveal delay={150}>
            <div className="group relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-brand/10 sm:rounded-[2rem]">
              {/* Video */}
              <video
                ref={videoRef}
                src={data.moments.video}
                playsInline
                preload="none"
                className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />

              {/* Cinematic overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />

              {/* Top label */}
              <div className="absolute left-3 top-3 z-10 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-semibold text-white/85 shadow-lg backdrop-blur-xl sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs">
                Behind the scenes ✦
              </div>

              {/* Custom controls */}
              <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 p-1.5 shadow-xl backdrop-blur-xl sm:bottom-5 sm:left-5 sm:gap-2 sm:p-2">
                {/* Play / Pause */}
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-105 hover:bg-brand sm:h-11 sm:w-11"
                >
                  {isPlaying ? (
                    <Pause size={18} className="sm:h-5 sm:w-5" />
                  ) : (
                    <Play
                      size={18}
                      className="ml-0.5 sm:h-5 sm:w-5"
                    />
                  )}
                </button>

                {/* Volume */}
                <button
                  type="button"
                  onClick={toggleVolume}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-105 hover:bg-brand sm:h-11 sm:w-11"
                >
                  {isMuted ? (
                    <VolumeX size={18} className="sm:h-5 sm:w-5" />
                  ) : (
                    <Volume2 size={18} className="sm:h-5 sm:w-5" />
                  )}
                </button>
              </div>

              {/* Bottom right text */}
              <div className="pointer-events-none absolute bottom-7 right-6 z-10 hidden text-right sm:block">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                  Kirti Rathore
                </p>

                <p className="mt-1 text-sm font-medium text-white/80">
                  Little moments, big memories ✨
                </p>
              </div>

              {/* Border glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 sm:rounded-[2rem]" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}