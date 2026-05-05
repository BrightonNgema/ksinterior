"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Contact Info ────────────────────────────────────────────────── */

const contactDetails = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: "keishasotaka@gmail.com",
    href: "mailto:keishasotaka@gmail.com",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
    label: "Instagram",
    value: "@keishsotaka",
    href: "https://instagram.com/keishsotaka",
    external: true,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "071 027 4919",
    href: "https://wa.me/27710274919",
    external: true,
  },
];

/* ─── Section Component ───────────────────────────────────────────── */

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current?.children!,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".contact-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: itemsRef.current, start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-charcoal overflow-hidden"
      style={{ paddingTop: 100, paddingBottom: 100 }}
    >
      {/* Subtle grain-like gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-foreground/10 opacity-50" />

      <div className="relative z-10 px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* ── Header ───────────────────────────────────────────────── */}
        <div ref={headerRef} className="text-center mb-20">
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-accent mb-8">
            Let&apos;s Connect
          </p>

          <h2 className="font-serif text-5xl md:text-6xl lg:text-8xl font-light text-white/90 leading-[1.05] mb-6">
            Get In <span className="italic text-accent">Touch</span>
          </h2>

          <div className="w-16 h-[1px] bg-accent/40 mx-auto mb-8" />

          <p className="font-sans text-sm md:text-base text-white/40 max-w-lg mx-auto leading-[1.8]">
            Ready to transform your space? Reach out and let&apos;s create
            something beautiful together.
          </p>
        </div>

        {/* ── Logo & Name ──────────────────────────────────────────── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="font-serif text-3xl md:text-4xl tracking-[0.05em] text-white/90">
              K<span className="text-accent">S</span>
            </span>
          </div>
          <p className="font-sans text-[11px] tracking-[0.4em] uppercase text-white/50">
            Keisha Sotaka &mdash; Interior Designer
          </p>
        </div>

        {/* ── Contact Items ────────────────────────────────────────── */}
        <div
          ref={itemsRef}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-20"
        >
          {contactDetails.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              className="contact-item group flex items-center gap-4 py-4 px-6 border border-white/[0.08] hover:border-accent/30 transition-all duration-500 min-w-[260px]"
              data-cursor="link"
            >
              <div className="text-accent/60 group-hover:text-accent transition-colors duration-300">
                {contact.icon}
              </div>
              <div>
                <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/30 block mb-1">
                  {contact.label}
                </span>
                <span className="font-sans text-sm text-white/70 group-hover:text-white transition-colors duration-300">
                  {contact.value}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* ── Bottom Bar ───────────────────────────────────────────── */}
        <div className="mt-24 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/20">
            &copy; {new Date().getFullYear()} Keisha Sotaka. All rights
            reserved.
          </p>
          <div className="flex items-center gap-8">
            {["Residential", "Commercial", "Custom Furniture"].map((item) => (
              <span
                key={item}
                className="font-sans text-[10px] tracking-[0.15em] uppercase text-white/20"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
