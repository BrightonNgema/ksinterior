"use client";

import Image from "next/image";
import contactImage from "@/assets/furniture/IMG_5450.jpg";

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-charcoal overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* ── Left Column — Image + Contact Info ─────────────────── */}
        <div className="relative flex flex-col justify-between p-8 md:p-16 lg:p-20">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src={contactImage}
              alt="Luxury interior by Keisha Sotaka"
              fill
              className="object-cover"
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/40" />
          </div>

          {/* Content over image */}
          <div className="relative z-10 flex flex-col justify-end h-full min-h-[500px] lg:min-h-0">
            <div className="mt-auto">
              <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-accent mb-8">
                Let&apos;s Work Together
              </p>

              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white/95 leading-[1]">
                Get In
                <br />
                <span className="italic text-accent">Touch</span>
              </h2>

              <div className="w-16 h-[1px] bg-accent/40 mt-10 mb-10" />

              <p className="font-sans text-sm text-white/40 leading-[1.9] max-w-md mb-16">
                Whether you&apos;re envisioning a complete transformation or
                simply seeking to elevate a single room, I&apos;d love to hear
                about your project.
              </p>

              {/* Contact details */}
              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:keishasotaka@gmail.com"
                  className="group flex items-center gap-4"
                  data-cursor="link"
                >
                  <div className="w-10 h-10 border border-white/10 group-hover:border-accent/40 flex items-center justify-center transition-colors duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent/60 group-hover:text-accent transition-colors duration-300">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/25 block">Email</span>
                    <span className="font-sans text-sm text-white/60 group-hover:text-white transition-colors duration-300">keishasotaka@gmail.com</span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/keishsotaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                  data-cursor="link"
                >
                  <div className="w-10 h-10 border border-white/10 group-hover:border-accent/40 flex items-center justify-center transition-colors duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent/60 group-hover:text-accent transition-colors duration-300">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/25 block">Instagram</span>
                    <span className="font-sans text-sm text-white/60 group-hover:text-white transition-colors duration-300">@keishsotaka</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/27710274919"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                  data-cursor="link"
                >
                  <div className="w-10 h-10 border border-white/10 group-hover:border-accent/40 flex items-center justify-center transition-colors duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent/60 group-hover:text-accent transition-colors duration-300">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/25 block">WhatsApp</span>
                    <span className="font-sans text-sm text-white/60 group-hover:text-white transition-colors duration-300">071 027 4919</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Column — Large brand statement ───────────────── */}
        <div className="relative flex flex-col items-center justify-center p-8 md:p-16 lg:p-20 bg-charcoal">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/[0.03] to-transparent" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/[0.02] to-transparent" />

          {/* Ghost watermark */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[16rem] md:text-[22rem] text-white/[0.02] font-light leading-none select-none pointer-events-none">
            KS
          </span>

          <div className="relative z-10 text-center max-w-md">
            <div className="mb-10">
              <span className="font-serif text-5xl md:text-6xl tracking-[0.05em] text-white/90">
                K<span className="text-accent">S</span>
              </span>
            </div>

            <p className="font-sans text-[11px] tracking-[0.4em] uppercase text-white/50 mb-8">
              Keisha Sotaka
            </p>

            <div className="w-10 h-[1px] bg-accent/30 mx-auto mb-8" />

            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-white/30 mb-12">
              Interior Designer
            </p>

            <p className="font-sans text-sm text-white/30 leading-[2] mb-16">
              Crafting elevated, timeless interiors that feel both
              sophisticated and deeply personal. From residential sanctuaries
              to refined commercial environments and bespoke furniture design.
            </p>

            {/* CTA button */}
            <a
              href="mailto:keishasotaka@gmail.com"
              className="group relative inline-block px-14 py-4 border border-accent/40 text-accent font-sans text-[11px] tracking-[0.3em] uppercase overflow-hidden transition-all duration-700 hover:text-charcoal"
              data-cursor="link"
            >
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Footer Bar ──────────────────────────────────────────── */}
      <div className="relative bg-charcoal border-t border-white/[0.06] px-8 md:px-16 lg:px-20 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl tracking-[0.05em] text-white/40">
              K<span className="text-accent/50">S</span>
            </span>
            <span className="w-[1px] h-4 bg-white/10" />
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/20">
              &copy; {new Date().getFullYear()} Keisha Sotaka
            </p>
          </div>
          <div className="flex items-center gap-8">
            {[
              { label: "Residential", id: "residential" },
              { label: "Commercial", id: "commercial" },
              { label: "Custom Furniture", id: "furniture" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-sans text-[10px] tracking-[0.15em] uppercase text-white/20 hover:text-accent/60 transition-colors duration-300"
                data-cursor="link"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
