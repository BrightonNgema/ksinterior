import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Image */}
        <ScrollReveal>
          <div className="relative max-w-[400px] md:max-w-none overflow-hidden md:overflow-visible">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/about/keisha-sotaka.png"
                alt="Keisha Sotaka - Interior Designer"
                fill
                className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-600 hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute top-4 md:top-6 left-4 md:left-6 -right-4 md:-right-6 -bottom-4 md:-bottom-6 border border-accent-light -z-10" />
          </div>
        </ScrollReveal>

        {/* Text */}
        <div>
          <ScrollReveal>
            <p className="font-sans text-[0.7rem] tracking-[0.25em] uppercase text-accent font-medium mb-6">
              About Me
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.15] mb-8">
              Designing with intention, curating with purpose.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="space-y-6">
              <p className="text-text-muted text-[0.95rem] leading-relaxed">
                I am an interior stylist with a refined eye for detail and a
                passion for creating elevated, timeless spaces that feel both
                sophisticated and deeply personal.
              </p>
              <p className="text-text-muted text-[0.95rem] leading-relaxed">
                My journey in the built environment started in 2020, driven by a
                desire to source unique, statement pieces that transform everyday
                spaces into curated experiences. Over time this evolved into a
                design approach rooted in intentionality &mdash; where every
                element is carefully considered and beautifully balanced.
              </p>
              <p className="text-text-muted text-[0.95rem] leading-relaxed">
                My work focuses on blending elegance, comfort and individuality
                to create interiors that are not only visually striking but
                effortlessly liveable.
              </p>
              <p className="text-text-muted text-[0.95rem] leading-relaxed italic">
                Each space I design is a reflection of my client&apos;s lifestyle,
                enhanced through a lens of modern sophistication and understated
                luxury.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
