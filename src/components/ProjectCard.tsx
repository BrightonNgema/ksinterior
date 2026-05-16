import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  reverse?: boolean;
}

export default function ProjectCard({
  number,
  title,
  description,
  images,
  reverse = false,
}: ProjectCardProps) {
  return (
    <div className="px-6 md:px-12 mb-24 md:mb-40 max-w-[1400px] mx-auto last:mb-0">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
          reverse ? "md:[direction:rtl]" : ""
        }`}
      >
        {/* Images */}
        <ScrollReveal className={reverse ? "md:[direction:ltr]" : ""}>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className={`img-hover overflow-hidden relative ${
                  i === 0 ? "row-span-2 aspect-auto min-h-[300px] md:min-h-[500px]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Info */}
        <div className={reverse ? "md:[direction:ltr]" : ""}>
          <ScrollReveal>
            <p className="font-serif text-[0.85rem] text-accent-light tracking-[0.1em] mb-6">
              {number}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h3 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-light leading-[1.15] tracking-[0.02em] mb-6">
              {title}
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p className="text-text-muted text-[0.92rem] leading-relaxed mb-6 max-w-[420px]">
              {description}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
