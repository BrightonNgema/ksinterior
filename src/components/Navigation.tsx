"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 3.6, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline();
      tl.to(overlayRef.current, { opacity: 1, pointerEvents: "auto", duration: 0.3 });
      tl.to(menuRef.current, { x: 0, duration: 0.6, ease: "power3.inOut" }, 0);
      tl.fromTo(
        ".menu-item",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: "power3.out" },
        0.3
      );
      tl.fromTo(
        ".menu-detail",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.04, ease: "power3.out" },
        0.5
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(overlayRef.current, { opacity: 0, pointerEvents: "none", duration: 0.3 });
      gsap.to(menuRef.current, { x: "100%", duration: 0.5, ease: "power3.inOut" });
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 600);
  };

  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Residential", id: "residential" },
    { label: "Commercial", id: "commercial" },
    { label: "Furniture", id: "furniture" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        style={{ padding: 20 }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 opacity-0 ${
          scrolled
            ? "bg-background/60 backdrop-blur-xl py-4 border-b border-border"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="group relative z-10"
            data-cursor="link"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-[0.05em] text-foreground">
              K<span className="text-accent">S</span>
            </span>
            <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-muted/70 block -mt-0.5">
              Interior
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {["About", "Residential", "Commercial", "Furniture"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="group relative font-sans text-[11px] tracking-[0.2em] uppercase text-foreground/50 hover:text-foreground transition-colors duration-300"
                data-cursor="link"
              >
                {item}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-500 ease-out" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="font-sans text-[11px] tracking-[0.2em] uppercase border border-accent/30 text-accent px-7 py-3 hover:bg-accent hover:text-background transition-all duration-500"
              data-cursor="link"
            >
              Inquire
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-8 h-5 flex flex-col justify-between z-[300]"
            data-cursor="link"
          >
            <span
              className={`block h-[1px] transition-all duration-300 origin-center ${
                isOpen ? "bg-foreground rotate-45 translate-y-[9px]" : "bg-foreground"
              }`}
            />
            <span
              className={`block h-[1px] transition-all duration-300 ${
                isOpen ? "bg-foreground opacity-0 scale-x-0" : "bg-foreground"
              }`}
            />
            <span
              className={`block h-[1px] transition-all duration-300 origin-center ${
                isOpen ? "bg-foreground -rotate-45 -translate-y-[9px]" : "bg-foreground"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] opacity-0 pointer-events-none lg:hidden"
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-background z-[200] translate-x-full flex flex-col justify-center px-10 md:px-16 lg:hidden"
      >
        <div className="space-y-0">
          {menuItems.map((item, i) => (
            <div key={item.id} className="menu-item overflow-hidden border-b border-border">
              <button
                onClick={() => scrollToSection(item.id)}
                className="flex items-center justify-between w-full font-serif text-3xl md:text-4xl text-foreground/90 hover:text-accent transition-colors duration-300 py-4"
                data-cursor="link"
              >
                <span>{item.label}</span>
                <span className="text-accent/30 text-xs font-sans tracking-widest">
                  0{i + 1}
                </span>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-14 space-y-3 border-t border-border pt-8">
          <p className="menu-detail font-sans text-[10px] tracking-[0.3em] uppercase text-muted">
            Get in Touch
          </p>
          <a href="mailto:keishasotaka@gmail.com" className="menu-detail block font-sans text-sm text-foreground/60 hover:text-accent transition-colors" data-cursor="link">
            keishasotaka@gmail.com
          </a>
          <a href="tel:+27710274919" className="menu-detail block font-sans text-sm text-foreground/60 hover:text-accent transition-colors" data-cursor="link">
            071 027 4919
          </a>
          <a href="https://instagram.com/keishsotaka" target="_blank" rel="noopener noreferrer" className="menu-detail block font-sans text-sm text-foreground/40 hover:text-accent transition-colors" data-cursor="link">
            @keishsotaka
          </a>
        </div>
      </div>
    </>
  );
}
