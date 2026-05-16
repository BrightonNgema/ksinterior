"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import ScrollReveal from "./ScrollReveal";

// Hospital Interior — images
import hospitalImg1 from "@/assets/hospital-interior/View recent photos.jpeg";
import hospitalImg2 from "@/assets/hospital-interior/IMG_3446.jpg";
// Hospital Interior — videos
import hospitalVid1 from "@/assets/hospital-interior/31d8b5ae-ff45-4358-a262-5f90091eb4ba.mp4";
import hospitalVid2 from "@/assets/hospital-interior/IMG_0529.mov";
import hospitalVid3 from "@/assets/hospital-interior/IMG_0531.mov";
import hospitalVid4 from "@/assets/hospital-interior/IMG_1249.MOV";
import hospitalVid6 from "@/assets/hospital-interior/IMG_1699.mov";
import hospitalVid7 from "@/assets/hospital-interior/IMG_3834.mov";

// Commercial Interior — images
import commercialImg1 from "@/assets/commercial-interior/1000008351.jpeg";
import commercialImg2 from "@/assets/commercial-interior/IMG_7342.jpg";
import commercialImg3 from "@/assets/commercial-interior/IMG_7368.jpg";
// Commercial Interior — videos
import commercialVid1 from "@/assets/commercial-interior/1000008516.mp4";
import commercialVid2 from "@/assets/commercial-interior/1000008520.mp4";
import commercialVid3 from "@/assets/commercial-interior/E54357F2-3874-498D-83C8-644B4167BA9D.mp4";

interface MediaItem {
  type: "image" | "video";
  src: string | StaticImageData;
  alt: string;
}

const commercialProjects = [
  {
    title: "Hospital Interior Projects",
    description:
      "Medical suite interiors thoughtfully styled to enhance both patient experience and visual cohesion with practice aesthetic. Each suite designed for comfort and professionalism.",
    media: [
      { type: "image" as const, src: hospitalImg1, alt: "Hospital Interior - Reception" },
      { type: "image" as const, src: hospitalImg2, alt: "Hospital Interior - Suite" },
      { type: "video" as const, src: hospitalVid1, alt: "Hospital Interior - Walk-through 1" },
      { type: "video" as const, src: hospitalVid2, alt: "Hospital Interior - Walk-through 2" },
      { type: "video" as const, src: hospitalVid3, alt: "Hospital Interior - Walk-through 3" },
      { type: "video" as const, src: hospitalVid4, alt: "Hospital Interior - Walk-through 4" },
      { type: "video" as const, src: hospitalVid6, alt: "Hospital Interior - Walk-through 5" },
      { type: "video" as const, src: hospitalVid7, alt: "Hospital Interior - Walk-through 6" },
    ],
  },
  {
    title: "Office Interior Services",
    description:
      "Supplier of high-end, durable office furniture and interior styling services. These spaces are designed to create professional environments that feel both productive and visually elevated.",
    media: [
      { type: "image" as const, src: commercialImg1, alt: "Office Interior - Overview" },
      { type: "image" as const, src: commercialImg2, alt: "Office Interior - Workspace" },
      { type: "image" as const, src: commercialImg3, alt: "Office Interior - Detail" },
      { type: "video" as const, src: commercialVid1, alt: "Office Interior - Walk-through 1" },
      { type: "video" as const, src: commercialVid2, alt: "Office Interior - Walk-through 2" },
      { type: "video" as const, src: commercialVid3, alt: "Office Interior - Walk-through 3" },
    ],
  },
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

function MediaGrid({ media }: { media: MediaItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {media.map((item, i) => (
        <div
          key={i}
          className="img-hover overflow-hidden relative aspect-[4/3]"
        >
          {item.type === "video" ? (
            <VideoCell src={item.src as string} alt={item.alt} />
          ) : (
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function CommercialSection() {
  return (
    <section id="commercial" className="bg-dark text-white py-20 md:py-32 px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-16 md:mb-20">
        <ScrollReveal>
          <p className="font-sans text-[0.7rem] tracking-[0.25em] uppercase text-accent-light font-medium mb-6">
            Commercial
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.15] mb-6">
            Commercial Interior Decor
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="max-w-[550px] mx-auto text-white/50 text-[0.95rem] leading-relaxed">
            Professional environments designed to elevate both experience and
            aesthetic &mdash; from medical suites to executive offices.
          </p>
        </ScrollReveal>
      </div>

      {/* Projects */}
      <div className="max-w-[1400px] mx-auto space-y-20 md:space-y-28">
        {commercialProjects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i === 1 ? 2 : 0}>
            <div>
              <div className="mb-8 md:mb-10">
                <h3 className="font-serif text-[1.6rem] font-normal mb-4">
                  {project.title}
                </h3>
                <p className="text-white/50 text-[0.88rem] leading-relaxed max-w-[550px]">
                  {project.description}
                </p>
              </div>
              <MediaGrid media={project.media} />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
