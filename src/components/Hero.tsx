import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 md:px-12 py-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-1.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-bg/85" />
      </div>

      <div className="relative z-10 text-center max-w-[800px]">
        <div className="hero-animate hero-animate-1 flex items-center justify-center gap-1 md:gap-3">
          <Image
            src="/images/logo/logo-mark.png"
            alt="KS"
            width={180}
            height={180}
            className="h-[2.5em] md:h-[6em] lg:h-[8em] w-auto md:mt-2"
          />
          <span className="text-text font-serif text-[clamp(1.8rem,6vw,7rem)] font-light tracking-[0.04em] -ml-2.5 md:-ml-5 lg:-ml-8 mt-3 md:mt-5 lg:mt-7">
            eisha Sotaka
          </span>
        </div>
        <p className="hero-animate hero-animate-2 font-sans text-[0.75rem] tracking-[0.35em] uppercase text-accent font-normal mb-12">
          Interior Designer &amp; Stylist
        </p>
        <div className="hero-animate hero-animate-3 w-[50px] h-px bg-accent mx-auto mb-8" />
        <p className="hero-animate hero-animate-4 font-serif text-[1.35rem] font-light text-text-muted italic max-w-[500px] mx-auto">
          Creating elevated, timeless spaces that feel both sophisticated and
          deeply personal.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="hero-animate hero-animate-5 absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-[0.6rem] tracking-[0.25em] uppercase text-accent">
          Scroll
        </span>
        <div className="scroll-line w-px h-10 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
