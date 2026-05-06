"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#residential", label: "Residential" },
  { href: "#commercial", label: "Commercial" },
  { href: "#furniture", label: "Custom Furniture" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "bg-bg/90 backdrop-blur-[20px] border-b border-border px-6 md:px-12 py-3"
            : "px-6 md:px-12 py-6"
        }`}
      >
        <a href="#" className="flex items-center gap-3 no-underline">
          <img
            src="/images/logo/logo-mark.png"
            alt="KS"
            className="h-8 md:h-9 w-auto"
          />
          <span className="font-serif text-[1.2rem] tracking-[0.08em] text-text">
            <span className="font-semibold">K</span>eisha Sotaka
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link relative text-[0.72rem] tracking-[0.18em] uppercase text-text-muted no-underline font-normal transition-colors hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none p-[5px] cursor-pointer"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-px bg-text" />
          <span className="block w-6 h-px bg-text" />
          <span className="block w-6 h-px bg-text" />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[999] flex flex-col items-center justify-center gap-8 bg-bg transition-opacity duration-400 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-6 right-6 bg-transparent border-none text-2xl cursor-pointer text-text"
          onClick={() => setMobileOpen(false)}
        >
          &times;
        </button>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="font-serif text-3xl text-text no-underline font-light"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
