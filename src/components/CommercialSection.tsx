"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const commercialProjects = [
  {
    title: "Hospital Interior Projects",
    subtitle: "Medical Suite Interior",
    description:
      "Each suite was thoughtfully styled to enhance both patient experience and visual cohesion with practice aesthetic.",
    images: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    title: "Office Interior Services",
    subtitle: "Professional Environments",
    description:
      "Supplier of high-end, durable office furniture & interior styling services. Spaces designed to create professional environments that feel both productive and visually elevated.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=900&auto=format&fit=crop",
    ],
  },
];

/* ─── Auto-cycling image card ─────────────────────────────────────── */

function CyclingCard({
  project,
  index,
  interval,
}: {
  project: (typeof commercialProjects)[number];
  index: number;
  interval: number;
}) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % project.images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [project.images.length, interval]);

  return (
    <div className="group" data-cursor="media">
      {/* Image */}
      <div className="relative h-[400px] overflow-hidden mb-8">
        {project.images.map((img, imgIdx) => (
          <img
            key={imgIdx}
            src={img}
            alt={`${project.title} ${imgIdx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
              activeImage === imgIdx
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-background/10" />

        {/* Image indicators */}
        <div className="absolute bottom-5 left-5 flex gap-2">
          {project.images.map((_, imgIdx) => (
            <div
              key={imgIdx}
              className={`h-[2px] transition-all duration-500 ${
                activeImage === imgIdx
                  ? "w-8 bg-white"
                  : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Floating number */}
        <div className="absolute top-5 right-6">
          <span className="font-serif text-5xl text-foreground/[0.06]">
            0{index + 1}
          </span>
        </div>
      </div>

      {/* Info */}
      <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent/70 mb-2">
        {project.subtitle}
      </p>
      <h3 className="font-serif text-2xl md:text-3xl text-foreground font-light mb-3">
        {project.title}
      </h3>
      <p className="font-sans text-sm text-muted leading-[1.8] max-w-md">
        {project.description}
      </p>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────── */

export default function CommercialSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current?.children!,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".commercial-card",
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: ".commercial-grid", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="commercial"
      className="relative bg-surface overflow-hidden"
      style={{ paddingTop: 60, paddingBottom: 60 }}
    >
      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-bl from-accent/[0.03] to-transparent" />

      <div className="px-5">
        <div ref={headerRef} className="mb-20">
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-accent mb-6">
            Commercial Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-light text-foreground leading-[1.05]">
              Commercial
              <br />
              <span className="italic text-accent">Interiors</span>
            </h2>
            <p className="font-sans text-sm text-muted max-w-sm leading-[1.8]">
              Professional spaces designed with the same care and intention as our residential projects.
            </p>
          </div>
          <div className="w-full h-[1px] bg-border mt-12" />
        </div>

        <div className="commercial-grid grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {commercialProjects.map((project, i) => (
            <div key={project.title} className="commercial-card">
              <CyclingCard
                project={project}
                index={i}
                interval={3500}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
