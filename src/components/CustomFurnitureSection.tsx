"use client";

import Image from "next/image";

/* ─── Image Imports ───────────────────────────────────────────────── */

import sofa1 from "@/assets/furniture/IMG_0957.jpg";
import sofa2 from "@/assets/furniture/IMG_5601.jpg";
import sofa3 from "@/assets/furniture/IMG_5614.jpg";
import chair1 from "@/assets/furniture/IMG_0971.jpg";
import chair2 from "@/assets/furniture/IMG_0960.jpg";
import chair3 from "@/assets/furniture/IMG_5603.jpg";
import custom1 from "@/assets/furniture/IMG_0862.jpg";
import custom2 from "@/assets/furniture/IMG_0867.jpg";
import custom3 from "@/assets/furniture/IMG_0874.jpg";
import custom4 from "@/assets/furniture/IMG_0882.jpg";
import custom5 from "@/assets/furniture/IMG_0881.jpg";
import custom6 from "@/assets/furniture/IMG_5623.jpg";

/* ─── Data ────────────────────────────────────────────────────────── */

const furnitureImages = [
  { src: sofa1, alt: "Custom L-shaped sofa with bold print rug" },
  { src: sofa2, alt: "Custom marble-top coffee table with seating" },
  { src: sofa3, alt: "Crushed velvet sectional sofa" },
  { src: chair1, alt: "Curved lounge set with patterned poufs" },
  { src: chair2, alt: "Modern accent chair in textured fabric" },
  { src: chair3, alt: "Geometric print statement chair" },
  { src: custom6, alt: "Custom upholstered ottoman" },
];

const customPieces = [
  { src: custom1, alt: "Custom bedside table with geometric wallpaper" },
  { src: custom2, alt: "Custom arch headboard in dark upholstery" },
  { src: custom3, alt: "Custom marble-top side table" },
  { src: custom4, alt: "Custom floating TV unit on brick wall" },
  { src: custom5, alt: "Custom wall-mounted entertainment unit" },
];

/* ─── Section Component ───────────────────────────────────────────── */

export default function CustomFurnitureSection() {
  return (
    <section id="furniture" className="relative bg-background overflow-hidden py-24 md:py-32">
      <div className="absolute top-0 left-0 w-1/2 h-96 bg-gradient-to-br from-accent/[0.03] to-transparent" />

      <div className="px-5">
        {/* Section Header */}
        <div className="mb-20">
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-accent mb-6">
            Bespoke Pieces
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-light text-foreground leading-[1.05]">
              Custom Furniture
              <br />
              <span className="italic text-accent">Design</span>
            </h2>
            <p className="font-sans text-sm text-muted max-w-sm leading-[1.8]">
              Each piece is crafted to order &mdash; the client chooses their
              fabric and dimensions are made to perfectly fit the space.
            </p>
          </div>
          <div className="w-full h-[1px] bg-border mt-12" />
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {furnitureImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden img-zoom ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
              data-cursor="media"
            >
              <div
                className={`relative w-full ${
                  i === 0 ? "h-[400px] md:h-[500px]" : "h-[240px] md:h-[280px]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />
                <div className="absolute inset-0 bg-foreground/0 hover:bg-foreground/10 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-border my-16 md:my-20" />

        {/* Custom Pieces Sub-section */}
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16 mb-12">
          <div className="md:w-1/3 md:sticky md:top-32">
            <span className="font-serif text-6xl md:text-7xl lg:text-8xl text-foreground/[0.06] font-light leading-none select-none block mb-4">
              02
            </span>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-[1.1] mb-4">
              Bespoke Pieces
            </h3>
            <p className="font-sans text-sm text-muted leading-[1.8]">
              Custom furniture pieces are always an option when we can&apos;t
              find the pieces we want for the space or a client is looking for
              something original. This makes the design more personal as the
              client chooses their fabric and dimensions are made to perfectly
              fit the space. Custom services are offered to all interior decor
              clients.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
            {customPieces.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden img-zoom ${
                  i === 1 ? "col-span-2" : ""
                }`}
                data-cursor="media"
              >
                <div className="relative w-full h-[260px] md:h-[320px]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    sizes={
                      i === 1
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 50vw, 33vw"
                    }
                  />
                  <div className="absolute inset-0 bg-foreground/0 hover:bg-foreground/10 transition-colors duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
