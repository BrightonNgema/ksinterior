import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";
import ImageBand from "./ImageBand";

const projects = [
  {
    number: "01",
    title: "The Modern Muse",
    description:
      "A blank canvas transformed into a modern, minimal and sophisticated sanctuary. Every detail was thoughtfully curated to balance clean lines with warmth.",
    tags: ["Lounge Area", "Pajama Room", "Full Styling"],
    images: [
      { src: "/images/residential/muse-1.jpg", alt: "The Modern Muse - Lounge" },
      { src: "/images/residential/muse-2.jpg", alt: "The Modern Muse - Living Room" },
      { src: "/images/residential/muse-3.jpg", alt: "The Modern Muse - Detail" },
    ],
    reverse: false,
  },
  {
    number: "02",
    title: "A Bachelor\u2019s Paradise",
    description:
      "This project focused on creating a cohesive flow between entryway, game room, lounge and private spaces \u2014 each area styled with statement pieces and a masculine yet sophisticated palette.",
    tags: ["Entry Way", "Game Room", "Pajama Room"],
    images: [
      { src: "/images/residential/bachelor-1.jpg", alt: "Bachelor's Paradise - Entry" },
      { src: "/images/residential/bachelor-2.jpg", alt: "Bachelor's Paradise - Game Room" },
      { src: "/images/residential/bachelor-3.jpg", alt: "Bachelor's Paradise - Lounge" },
    ],
    reverse: true,
  },
  {
    number: "03",
    title: "Elevated Living",
    description:
      "Every detail in this space was intentionally selected \u2014 from custom furniture pieces to refined finishes \u2014 creating a cohesive environment that feels calm, elevated and effortlessly luxurious.",
    tags: ["Interior Decor", "Custom Furniture", "Full Service"],
    images: [
      { src: "/images/residential/elevated-1.jpg", alt: "Elevated Living - Main" },
      { src: "/images/residential/elevated-2.jpg", alt: "Elevated Living - Dining" },
      { src: "/images/residential/elevated-3.jpg", alt: "Elevated Living - Accent" },
    ],
    reverse: false,
  },
];

const projectsAfterBand = [
  {
    number: "04",
    title: "Velvet Haven",
    description:
      "An interior styling service to introduce warmth and depth into the space. Velvet finishes used to create an intimate yet sophisticated atmosphere, turning the home into a true haven of comfort and style.",
    tags: ["Velvet Finishes", "Styling Service"],
    images: [
      { src: "/images/residential/velvet-1.jpg", alt: "Velvet Haven - Sofa" },
      { src: "/images/residential/velvet-2.jpg", alt: "Velvet Haven - Detail" },
      { src: "/images/residential/velvet-3.jpg", alt: "Velvet Haven - Living Area" },
    ],
    reverse: true,
  },
  {
    number: "05",
    title: "The Statement Entryway",
    description:
      "A striking yet minimal entryway designed to leave a lasting first impression. This space was curated using unique yet clean design principles \u2014 balancing boldness with simplicity to create an entrance that immediately captures attention.",
    tags: ["Entryway Design", "Minimal"],
    images: [
      { src: "/images/residential/entry-1.jpg", alt: "Statement Entryway - Main" },
      { src: "/images/residential/entry-2.jpg", alt: "Statement Entryway - Detail" },
      { src: "/images/residential/muse-4.jpg", alt: "Statement Entryway - Angle" },
    ],
    reverse: false,
  },
];

export default function ResidentialProjects() {
  return (
    <section id="residential" className="py-16 md:py-24">
      {/* Header */}
      <div className="text-center px-6 md:px-12 pb-12 md:pb-20">
        <ScrollReveal>
          <p className="font-sans text-[0.7rem] tracking-[0.25em] uppercase text-accent font-medium mb-6">
            Portfolio
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.15] mb-4">
            Residential Interior Decor
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="max-w-[550px] mx-auto text-text-muted text-[0.95rem] leading-relaxed">
            Curated living spaces where comfort meets sophistication &mdash;
            each project a reflection of its owner&apos;s unique story.
          </p>
        </ScrollReveal>
      </div>

      {/* First 3 projects */}
      {projects.map((p) => (
        <ProjectCard key={p.number} {...p} />
      ))}

      {/* Image band */}
      <ImageBand />

      {/* Last 2 projects */}
      {projectsAfterBand.map((p) => (
        <ProjectCard key={p.number} {...p} />
      ))}
    </section>
  );
}
