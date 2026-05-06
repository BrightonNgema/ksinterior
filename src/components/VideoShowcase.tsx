"use client";

import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const videos = [
  {
    src: "/videos/video-1.mp4",
    title: "The Modern Muse",
    subtitle: "Residential Styling",
  },
  {
    src: "/videos/video-2.mp4",
    title: "Elevated Living",
    subtitle: "Full Interior Service",
  },
  {
    src: "/videos/video-3.mp4",
    title: "Velvet Haven",
    subtitle: "Styling & Furnishing",
  },
  {
    src: "/videos/video-4.mp4",
    title: "Custom Furniture",
    subtitle: "Bespoke Design",
  },
];

function VideoCard({
  src,
  title,
  subtitle,
}: {
  src: string;
  title: string;
  subtitle: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="group relative aspect-[9/16] overflow-hidden bg-dark cursor-pointer"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        const v = videoRef.current;
        if (v) {
          v.pause();
          v.currentTime = 0;
        }
      }}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-[0.6rem] tracking-[0.2em] uppercase text-white/50 mb-1">
          {subtitle}
        </p>
        <h4 className="font-serif text-lg text-white font-light">{title}</h4>
      </div>

      {/* Play icon (visible when paused) */}
      <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/5">
          <svg
            className="w-4 h-4 text-white/70 ml-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-bg-alt">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <ScrollReveal>
            <p className="font-sans text-[0.7rem] tracking-[0.25em] uppercase text-accent font-medium mb-6">
              In Motion
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.15] mb-4">
              Walk-Through Reels
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="max-w-[500px] mx-auto text-text-muted text-[0.95rem] leading-relaxed">
              Experience the spaces as they were meant to be felt &mdash;
              movement, texture and light brought to life.
            </p>
          </ScrollReveal>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {videos.map((video, i) => (
            <ScrollReveal key={video.src} delay={i < 2 ? 1 : 2}>
              <VideoCard {...video} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
