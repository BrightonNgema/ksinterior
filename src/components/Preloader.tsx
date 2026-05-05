"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Counter animation
    const counter = { val: 0 };
    tl.to(counter, {
      val: 100,
      duration: 2.2,
      ease: "power2.inOut",
      onUpdate: () => {
        setCount(Math.floor(counter.val));
      },
    });

    // Line grows
    tl.to(
      lineRef.current,
      {
        scaleX: 1,
        duration: 2.2,
        ease: "power2.inOut",
      },
      0
    );

    // Tag text
    tl.fromTo(
      tagRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      0.3
    );

    // Text reveal
    tl.fromTo(
      textRef.current?.children!,
      { y: 60, opacity: 0, rotateX: -15 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      },
      0.2
    );

    // Exit - elements fade up then curtain wipes
    tl.to(
      [tagRef.current, textRef.current, counterRef.current?.parentElement],
      {
        y: -40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.in",
      },
      2.6
    );

    // Curtain split reveal
    tl.to(
      containerRef.current,
      {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.9,
        ease: "power4.inOut",
      },
      3
    );
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(196,168,124,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(196,168,124,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <p
        ref={tagRef}
        className="font-sans text-[10px] tracking-[0.5em] uppercase text-accent/60 mb-8 opacity-0"
      >
        Interior Design Studio
      </p>

      <div ref={textRef} className="text-center perspective-[800px]">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground font-light tracking-[0.02em] leading-[0.95]">
          Keisha
        </h1>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-accent italic font-light tracking-[0.02em] leading-[0.95]">
          Sotaka
        </h1>
      </div>

      <div className="mt-14 flex items-center gap-6 w-56">
        <div className="flex-1 h-[1px] bg-foreground/8 overflow-hidden">
          <div
            ref={lineRef}
            className="h-full bg-accent/60 origin-left scale-x-0"
          />
        </div>
        <span
          ref={counterRef}
          className="font-sans text-[11px] tracking-[0.3em] text-muted tabular-nums"
        >
          {count}%
        </span>
      </div>
    </div>
  );
}
