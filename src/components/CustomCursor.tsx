"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Skip on touch devices
    if ("ontouchstart" in window) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: "power2.out",
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power2.out",
      });
    };

    const handleMouseEnterLink = () => {
      gsap.to(cursor, { scale: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(follower, {
        scale: 2.8,
        duration: 0.4,
        opacity: 0.08,
        borderColor: "rgba(196, 168, 124, 0.5)",
        ease: "power2.out",
      });
    };

    const handleMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(follower, {
        scale: 1,
        duration: 0.4,
        opacity: 1,
        borderColor: "rgba(196, 168, 124, 0.25)",
        ease: "power2.out",
      });
    };

    const handleMouseEnterMedia = () => {
      gsap.to(follower, {
        scale: 3.5,
        duration: 0.5,
        opacity: 0.06,
        ease: "power2.out",
      });
      gsap.to(cursor, { scale: 0.5, duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeaveMedia = () => {
      gsap.to(follower, {
        scale: 1,
        duration: 0.5,
        opacity: 1,
        ease: "power2.out",
      });
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    window.addEventListener("mousemove", moveCursor);

    const attachListeners = () => {
      document.querySelectorAll("a, button, [data-cursor='link']").forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnterLink);
        el.addEventListener("mouseleave", handleMouseLeaveLink);
      });

      document.querySelectorAll("[data-cursor='media']").forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnterMedia);
        el.addEventListener("mouseleave", handleMouseLeaveMedia);
      });
    };

    attachListeners();

    const observer = new MutationObserver(() => attachListeners());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[5px] h-[5px] bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-accent/25 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
}
