"use client";

import { useRef } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

// Images
import cfPng from "@/assets/custom-furniture/889ACD8F-216C-4205-84A2-4D6D08897D19.png";
import cf0012 from "@/assets/custom-furniture/cf-0012.jpg";
import cf0100 from "@/assets/custom-furniture/cf-0100.jpg";
import cf0152 from "@/assets/custom-furniture/cf-0152.jpg";
import cf0862 from "@/assets/custom-furniture/cf-0862.jpg";
import cf0868 from "@/assets/custom-furniture/cf-0868.jpg";
import cf0878 from "@/assets/custom-furniture/cf-0878.jpg";
import cf0881 from "@/assets/custom-furniture/cf-0881.jpg";
import cf0957 from "@/assets/custom-furniture/cf-0957.jpg";
import cf0981 from "@/assets/custom-furniture/cf-0981.jpg";
import cf5601 from "@/assets/custom-furniture/cf-5601.jpg";
import cf6934 from "@/assets/custom-furniture/cf-6934.jpg";
import cf6936 from "@/assets/custom-furniture/cf-6936.jpg";

// Videos
import cfVid1 from "@/assets/custom-furniture/cf-0953.MOV";
import cfVid2 from "@/assets/custom-furniture/cf-5611.MOV";
import cfVid3 from "@/assets/custom-furniture/cf-6937.mp4";

const galleryItems = [
  { type: "image" as const, src: cfPng, alt: "Custom sofa design", span: true },
  { type: "image" as const, src: cf0012, alt: "Custom chair", span: false },
  { type: "image" as const, src: cf0100, alt: "Custom accent piece", span: false },
  { type: "image" as const, src: cf0152, alt: "Bespoke nightstand", span: false },
  { type: "image" as const, src: cf0862, alt: "Custom TV unit", span: false },
  { type: "video" as const, src: cfVid1, alt: "Custom furniture - Process 1", span: false },
];

const bespokeItems = [
  // { type: "image" as const, src: cf0868, alt: "Custom headboard" },
  { type: "image" as const, src: cf0878, alt: "Bespoke side table" },
  // { type: "image" as const, src: cf0881, alt: "Custom entertainment unit" },
  // { type: "video" as const, src: cfVid2, alt: "Custom furniture - Process 2" },
  // { type: "image" as const, src: cf0957, alt: "Statement chair" },
  { type: "image" as const, src: cf0981, alt: "Accent seating" },
  { type: "image" as const, src: cf5601, alt: "Custom ottoman" },
  // { type: "video" as const, src: cfVid3, alt: "Custom furniture - Process 3" },
  { type: "image" as const, src: cf6934, alt: "Bespoke cabinet" },
  { type: "image" as const, src: cf6936, alt: "Custom shelving" },
];

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

export default function FurnitureSection() {
  return (
    <section id="furniture" className="py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 max-w-[1400px] mx-auto mb-12 md:mb-20 md:items-end">
        <div>
          <ScrollReveal>
            <p className="font-sans text-[0.7rem] tracking-[0.25em] uppercase text-accent font-medium mb-6">
              Bespoke
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.15]">
              Custom Furniture Design
            </h2>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={2}>
          <p className="text-text-muted text-[0.95rem] leading-relaxed max-w-[450px]">
            Custom furniture pieces are always an option when we can&apos;t find
            the pieces we want for the space or a client is looking for
            something original. The client chooses their fabric and dimensions
            are made to perfectly fit the space. Custom services are offered to
            all interior decor clients.
          </p>
        </ScrollReveal>
      </div>

      {/* Main gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-[1400px] mx-auto mb-6 [&>*]:min-w-0">
        {galleryItems.map((item, i) => (
          <ScrollReveal
            key={item.alt}
            delay={i === 0 ? 0 : i <= 2 ? 1 : 2}
            className={item.span ? "col-span-2 md:row-span-2" : ""}
          >
            <div
              className={`img-hover overflow-hidden relative w-full ${
                item.span
                  ? "aspect-[16/9] md:aspect-auto md:h-full min-h-[200px] md:min-h-[250px]"
                  : "aspect-square"
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
                  sizes={
                    item.span
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 50vw, 33vw"
                  }
                />
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Bespoke pieces row */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 max-w-[1400px] mx-auto [&>*]:min-w-0">
        {bespokeItems.map((item, i) => (
          <ScrollReveal key={item.alt} delay={i < 2 ? 0 : i < 4 ? 1 : 2}>
            <div className="img-hover overflow-hidden relative aspect-square">

                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
              
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
