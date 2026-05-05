"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";

/* ─── Image Imports ───────────────────────────────────────────────── */

// The Modern Muse (6)
import muse1 from "@/assets/furniture/IMG_0223.jpg";
import muse2 from "@/assets/furniture/IMG_0225.jpg";
import muse3 from "@/assets/furniture/IMG_5522.jpg";
import muse4 from "@/assets/furniture/IMG_5515.jpg";
import muse5 from "@/assets/furniture/IMG_0889.jpg";
import muse6 from "@/assets/furniture/IMG_0981.jpg";

// A Bachelor's Paradise (4)
import bachelor1 from "@/assets/furniture/IMG_0961.jpg";
import bachelor2 from "@/assets/furniture/IMG_6855.jpg";
import bachelor3 from "@/assets/furniture/IMG_5617.jpg";
import bachelor4 from "@/assets/furniture/IMG_5459.jpg";

// Elevated Living (4)
import elevated1 from "@/assets/furniture/IMG_5452.jpg";
import elevated2 from "@/assets/furniture/IMG_5606.jpg";
import elevated3 from "@/assets/furniture/IMG_0868.jpg";
import elevated4 from "@/assets/furniture/IMG_5619.jpg";

// Velvet Haven (3)
import velvet1 from "@/assets/furniture/IMG_5613.jpg";
import velvet2 from "@/assets/furniture/IMG_0967.jpg";
import velvet3 from "@/assets/furniture/IMG_6902.jpg";

// The Statement Entryway (2)
import entry1 from "@/assets/furniture/IMG_0975.jpg";
import entry2 from "@/assets/furniture/IMG_0878.jpg";

/* ─── Project Data ────────────────────────────────────────────────── */

interface ProjectImage {
  src: StaticImageData;
  alt: string;
}

interface Project {
  title: string;
  category: string;
  description: string;
  images: ProjectImage[];
}

const projects: Project[] = [
  {
    title: "The Modern Muse",
    category: "Lounge & Pajama Room",
    description:
      "A blank canvas transformed into a modern, minimal and sophisticated sanctuary.",
    images: [
      { src: muse1, alt: "The Modern Muse – Living area with minimal furnishings" },
      { src: muse2, alt: "The Modern Muse – Bedroom sanctuary" },
      { src: muse3, alt: "The Modern Muse – Detail shot" },
      { src: muse4, alt: "The Modern Muse – Lounge area" },
      { src: muse5, alt: "The Modern Muse – Styling details" },
      { src: muse6, alt: "The Modern Muse – Full room view" },
    ],
  },
  {
    title: "A Bachelor\u2019s Paradise",
    category: "Full Home Styling",
    description:
      "This was an interior styling project, we styled it to match the client\u2019s masculine yet sophisticated style. A very modern luxurious home design. This project focused on creating a cohesive flow between entryway, game room, lounge and private spaces \u2014 each area styled with statement pieces and a masculine yet sophisticated palette.",
    images: [
      { src: bachelor1, alt: "A Bachelor\u2019s Paradise \u2013 Entryway" },
      { src: bachelor2, alt: "A Bachelor\u2019s Paradise \u2013 Game room" },
      { src: bachelor3, alt: "A Bachelor\u2019s Paradise \u2013 Lounge" },
      { src: bachelor4, alt: "A Bachelor\u2019s Paradise \u2013 Private quarters" },
    ],
  },
  {
    title: "Elevated Living",
    category: "Interior Decor Services",
    description:
      "Every detail in this space was intentionally selected \u2014 from custom furniture pieces to refined finishes \u2014 creating a cohesive environment that feels calm, elevated and effortlessly luxurious.",
    images: [
      { src: elevated1, alt: "Elevated Living \u2013 Main living area" },
      { src: elevated2, alt: "Elevated Living \u2013 Custom furniture detail" },
      { src: elevated3, alt: "Elevated Living \u2013 Refined finishes" },
      { src: elevated4, alt: "Elevated Living \u2013 Accent details" },
    ],
  },
  {
    title: "Velvet Haven",
    category: "Interior Styling",
    description:
      "An interior styling service to introduce warmth and depth into the space. Velvet finishes used to create an intimate yet sophisticated atmosphere, turning the home into a true haven of comfort and style.",
    images: [
      { src: velvet1, alt: "Velvet Haven \u2013 Warm velvet lounge" },
      { src: velvet2, alt: "Velvet Haven \u2013 Intimate bedroom setting" },
      { src: velvet3, alt: "Velvet Haven \u2013 Textured accents" },
    ],
  },
  {
    title: "The Statement Entryway",
    category: "Entryway Design",
    description:
      "A striking yet minimal entryway designed to leave a lasting first impression. This space was curated using unique yet clean design principles \u2014 balancing boldness with simplicity to create an entrance that immediately captures attention.",
    images: [
      { src: entry1, alt: "The Statement Entryway \u2013 Grand entrance" },
      { src: entry2, alt: "The Statement Entryway \u2013 Detail" },
    ],
  },
];

/* ─── Gallery Layout Variants ─────────────────────────────────────── */

function GalleryLayout({
  images,
  variant,
}: {
  images: ProjectImage[];
  variant: number;
}) {
  /* Each variant creates a different visual arrangement.
     The layouts adapt from 1-col on mobile to multi-col on desktop. */

  const imgClass = "relative h-[400px] overflow-hidden img-zoom";

  switch (variant % 5) {
    /* ── Variant 0: Large hero + 2 stacked right ─────────────────── */
    case 0:
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={imgClass}>
            <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" placeholder="blur" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="flex flex-col gap-4">
            {images.slice(1, 3).map((img, i) => (
              <div key={i} className="relative flex-1 h-[190px] overflow-hidden img-zoom">
                <Image src={img.src} alt={img.alt} fill className="object-cover" placeholder="blur" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            ))}
          </div>
          {images.length > 3 && (
            <div className="col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.slice(3).map((img, i) => (
                <div key={i} className={imgClass}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover" placeholder="blur" sizes="(max-width: 768px) 50vw, 33vw" />
                </div>
              ))}
            </div>
          )}
        </div>
      );

    /* ── Variant 1: 2-col top + full-width bottom ────────────────── */
    case 1:
      return (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.slice(0, 2).map((img, i) => (
              <div key={i} className={imgClass}>
                <Image src={img.src} alt={img.alt} fill className="object-cover" placeholder="blur" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            ))}
          </div>
          {images[2] && (
            <div className={imgClass}>
              <Image src={images[2].src} alt={images[2].alt} fill className="object-cover" placeholder="blur" sizes="100vw" />
            </div>
          )}
          {images.length > 3 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.slice(3).map((img, i) => (
                <div key={i} className={imgClass}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover" placeholder="blur" sizes="(max-width: 768px) 50vw, 33vw" />
                </div>
              ))}
            </div>
          )}
        </div>
      );

    /* ── Variant 2: Asymmetric — narrow left + wide right ────────── */
    case 2:
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`${imgClass} md:col-span-1`}>
            <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" placeholder="blur" sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className="md:col-span-2 flex flex-col gap-4">
            {images[1] && (
              <div className={imgClass}>
                <Image src={images[1].src} alt={images[1].alt} fill className="object-cover" placeholder="blur" sizes="(max-width: 768px) 100vw, 66vw" />
              </div>
            )}
            {images.length > 2 && (
              <div className="grid grid-cols-2 gap-4">
                {images.slice(2).map((img, i) => (
                  <div key={i} className={imgClass}>
                    <Image src={img.src} alt={img.alt} fill className="object-cover" placeholder="blur" sizes="(max-width: 768px) 50vw, 33vw" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      );

    /* ── Variant 3: Full-width hero + 2-col below ────────────────── */
    case 3:
      return (
        <div className="flex flex-col gap-4">
          <div className={imgClass}>
            <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" placeholder="blur" sizes="100vw" />
          </div>
          {images.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.slice(1).map((img, i) => (
                <div key={i} className={imgClass}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover" placeholder="blur" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              ))}
            </div>
          )}
        </div>
      );

    /* ── Variant 4: Masonry-inspired 3-col ───────────────────────── */
    case 4:
    default:
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i} className={`${imgClass} ${i === 0 ? "md:col-span-2" : ""}`}>
              <Image src={img.src} alt={img.alt} fill className="object-cover" placeholder="blur" sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"} />
            </div>
          ))}
        </div>
      );
  }
}

/* ─── Section Component ───────────────────────────────────────────── */

export default function ResidentialSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="residential"
      className="relative bg-background"
    >
      {/* ── Section Header ──────────────────────────────────────────── */}
      <div
        className="px-5"
        style={{ paddingTop: 100, paddingBottom: 40 }}
      >
        <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-accent mb-6">
          Our Work
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-light text-foreground leading-[1.05]">
           Residential
            <br />
            <span className="italic text-accent">Interior</span>
          </h2>
          <p className="font-sans text-sm text-muted max-w-md leading-[1.8]">
            A curated collection of residential spaces we&apos;ve transformed
            &mdash; each one a reflection of its owner, brought to life through
            intentional design.
          </p>
        </div>
        <div className="w-full h-[1px] bg-border mt-12" />
      </div>

      {/* ── Project Sub-sections ────────────────────────────────────── */}
      {projects.map((project, index) => (
        <div
          key={project.title}
          className="px-5"
          style={{ paddingTop: 60, paddingBottom: 60 }}
        >
          {/* Project header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div className="flex items-start gap-6">
              {/* Index number */}
              <span className="font-serif text-5xl md:text-6xl lg:text-8xl text-foreground/[0.07] font-light leading-none select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent block mb-2">
                  {project.category}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl lg:text-5xl font-light text-foreground leading-[1.1]">
                  {project.title}
                </h3>
              </div>
            </div>

            <p className="font-sans text-sm text-muted max-w-lg leading-[1.8] md:text-right">
              {project.description}
            </p>
          </div>

          {/* Image gallery */}
          <GalleryLayout images={project.images} variant={index} />

          {/* Divider between projects */}
          {index < projects.length - 1 && (
            <div className="w-full h-[1px] bg-border mt-16" />
          )}
        </div>
      ))}

      {/* Bottom spacing */}
      <div className="h-20 md:h-32" />
    </section>
  );
}
