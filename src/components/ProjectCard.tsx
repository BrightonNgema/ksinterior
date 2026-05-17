"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import ScrollReveal from "./ScrollReveal";

interface MediaItem {
  type: "image" | "video";
  src: string | StaticImageData;
  alt: string;
}

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  media: MediaItem[];
  reverse?: boolean;
}

function VideoCell({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="relative w-full h-full cursor-pointer group/vid"
      onMouseEnter={() => ref.current?.play()}
      onMouseLeave={() => {
        const v = ref.current;
        if (v) {
          v.pause();
          v.currentTime = 0;
        }
      }}
    >
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        aria-label={alt}
      />
      {/* play icon */}
      <div className="absolute inset-0 flex items-center justify-center group-hover/vid:opacity-0 transition-opacity duration-300 pointer-events-none">
        <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/5">
          <svg className="w-3.5 h-3.5 text-white/70 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({
  number,
  title,
  description,
  media,
  reverse = false,
}: ProjectCardProps) {
  const total = media.length;

  return (
    <div className="px-6 md:px-12 mb-24 md:mb-40 max-w-[1400px] mx-auto last:mb-0">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
          reverse ? "md:[direction:rtl]" : ""
        }`}
      >
        {/* Media grid */}
        <ScrollReveal className={`order-2 md:order-none ${reverse ? "md:[direction:ltr]" : ""}`}>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {media.map((item, i) => {
              const isHero = i === 0 && total >= 3 && total % 2 !== 0;

              return (
                <div
                  key={i}
                  className={`img-hover overflow-hidden relative ${
                    isHero
                      ? "row-span-2 aspect-auto min-h-[300px] md:min-h-[500px]"
                      : "aspect-[4/5]"
                  }`}
                >
                  {item.type === "video" ? (
                    <VideoCell src={item.src as string} alt={item.alt} />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Info */}
        <div className={`order-1 md:order-none ${reverse ? "md:[direction:ltr]" : ""}`}>
          <ScrollReveal>
            <p className="font-serif text-[0.85rem] text-accent-light tracking-[0.1em] mb-6">
              {number}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h3 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-light leading-[1.15] tracking-[0.02em] mb-6">
              {title}
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p className="text-text-muted text-[0.92rem] leading-relaxed mb-6 max-w-[420px]">
              {description}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
