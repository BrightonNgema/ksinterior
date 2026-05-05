"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.2 });

    // Background image reveal
    tl.fromTo(
      overlayRef.current,
      { scaleY: 1 },
      { scaleY: 0, duration: 1.4, ease: "power4.inOut" }
    );

    tl.fromTo(
      imageRef.current,
      { scale: 1.3 },
      { scale: 1, duration: 2, ease: "power3.out" },
      0.3
    );

    // Heading words stagger
    const words = headingRef.current?.querySelectorAll(".word");
    tl.fromTo(
      words!,
      { y: 130, rotateX: -30, opacity: 0 },
      {
        y: 0,
        rotateX: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
      },
      0.8
    );

    // Tagline
    tl.fromTo(
      taglineRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      1.6
    );

    // Badge
    tl.fromTo(
      badgeRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
      1.8
    );

    // Scroll indicator
    tl.fromTo(
      scrollIndicatorRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      2
    );

    // Parallax on scroll
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        if (imageRef.current) {
          gsap.set(imageRef.current, { y: self.progress * 200 });
        }
        if (headingRef.current) {
          gsap.set(headingRef.current, {
            y: self.progress * -100,
            opacity: 1 - self.progress * 1.5,
          });
        }
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden"
      style={{ padding: 20 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-[#1a1a18] z-10 origin-top"
        />
        <div ref={imageRef} className="w-full h-full">
          <div className="w-full h-full relative">
            {/* Dummy luxury interior image */}
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400&auto=format&fit=crop"
              alt="Luxury interior design by Keisha Sotaka"
              className="w-full h-full object-cover"
            />
            {/* Dark gradients for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18] via-[#1a1a18]/50 to-[#1a1a18]/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a18]/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div ref={headingRef} className="perspective-[1000px]">
          <div className="overflow-hidden mb-4">
            <span className="word inline-block font-sans text-[10px] md:text-xs tracking-[0.5em] uppercase text-accent/80">
              Interior Design Studio
            </span>
          </div>
          <div className="overflow-hidden">
            <span className="word inline-block font-serif text-[clamp(3rem,8vw,9rem)] text-white font-light leading-[0.9] tracking-[-0.02em]">
              Spaces that
            </span>
          </div>
          <div className="overflow-hidden">
            <span className="word inline-block font-serif text-[clamp(3rem,8vw,9rem)] text-white font-light leading-[0.9] tracking-[-0.02em]">
              speak
            </span>
            <span className="word inline-block font-serif text-[clamp(3rem,8vw,9rem)] text-accent italic font-light leading-[0.9] tracking-[-0.02em] ml-3 md:ml-6">
              volumes
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-8 md:mt-10 gap-6">
          <p
            ref={taglineRef}
            className="font-sans text-[13px] md:text-sm text-white/50 max-w-md leading-[1.8] tracking-wide"
          >
            Crafting elevated, timeless interiors that feel both sophisticated
            and deeply personal. Residential & commercial design.
          </p>

          {/* Rotating badge */}
          <div ref={badgeRef} className="hidden md:block relative w-24 h-24 opacity-0">
            <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path
                    id="circle"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="fill-accent/40 text-[8.5px] uppercase tracking-[0.4em] font-sans">
                  <textPath xlinkHref="#circle">
                    Keisha Sotaka * Interior Design *&nbsp;
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-xl text-accent">KS</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 right-6 md:right-12 flex flex-col items-center gap-3 opacity-0"
        >
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-white/25 [writing-mode:vertical-lr]">
            Scroll
          </span>
          <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-accent/50 animate-pulse-line" />
          </div>
        </div>
      </div>

      {/* Horizontal line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent z-20" />
    </section>
  );
}
