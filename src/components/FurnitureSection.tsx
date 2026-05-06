import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const galleryImages = [
  {
    src: "/images/furniture/sofa-1.jpg",
    alt: "Custom sofa design",
    span: true,
  },
  {
    src: "/images/furniture/chair-1.jpg",
    alt: "Custom chair",
    span: false,
  },
  {
    src: "/images/furniture/sofa-2.jpg",
    alt: "Custom accent piece",
    span: false,
  },
  {
    src: "/images/furniture/custom-1.jpg",
    alt: "Bespoke nightstand",
    span: false,
  },
  {
    src: "/images/furniture/custom-2.jpg",
    alt: "Custom TV unit",
    span: false,
  },
];

const bespokeImages = [
  { src: "/images/furniture/custom-3.jpg", alt: "Custom headboard" },
  { src: "/images/furniture/custom-4.jpg", alt: "Bespoke side table" },
  { src: "/images/furniture/custom-5.jpg", alt: "Custom entertainment unit" },
  { src: "/images/furniture/chair-2.jpg", alt: "Statement chair" },
  { src: "/images/furniture/chair-3.jpg", alt: "Accent seating" },
  { src: "/images/furniture/custom-6.jpg", alt: "Custom ottoman" },
];

export default function FurnitureSection() {
  return (
    <section id="furniture" className="py-20 md:py-32 px-6 md:px-12">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 max-w-[1400px] mx-auto mb-12 md:mb-20 md:items-end">
        <div>
          <ScrollReveal>
            <p className="font-sans text-[0.7rem] tracking-[0.25em] uppercase text-accent font-medium mb-6">
              Bespoke
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.15]">
              Custom Furniture Design
            </h2>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={2}>
          <p className="text-text-muted text-[0.95rem] leading-relaxed max-w-[450px]">
            Custom furniture pieces are always an option when we can&apos;t find
            the pieces we want for the space or a client is looking for
            something original. The client chooses their fabric and dimensions
            are made to perfectly fit the space. Custom services are offered to
            all interior decor clients.
          </p>
        </ScrollReveal>
      </div>

      {/* Main gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-[1400px] mx-auto mb-6">
        {galleryImages.map((img, i) => (
          <ScrollReveal
            key={img.alt}
            delay={i === 0 ? 0 : i <= 2 ? 1 : 2}
            className={img.span ? "col-span-2 md:row-span-2" : ""}
          >
            <div
              className={`img-hover overflow-hidden relative ${
                img.span ? "aspect-[16/9] md:aspect-auto h-full min-h-[250px]" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes={
                  img.span
                    ? "(max-width: 768px) 100vw, 66vw"
                    : "(max-width: 768px) 50vw, 33vw"
                }
              />
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Bespoke pieces row */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 max-w-[1400px] mx-auto">
        {bespokeImages.map((img, i) => (
          <ScrollReveal key={img.alt} delay={i < 2 ? 0 : i < 4 ? 1 : 2}>
            <div className="img-hover overflow-hidden relative aspect-square">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
