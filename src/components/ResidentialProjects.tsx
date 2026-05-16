import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";
import ImageBand from "./ImageBand";

// Modern Muse — images
import muse1 from "@/assets/modern-muse/1812A45E-EF56-4E4F-BD39-3AA232E0B48D.jpg";
import muse2 from "@/assets/modern-muse/IMG_5606.jpg";
import muse3 from "@/assets/modern-muse/IMG_5617.jpg";
import muse4 from "@/assets/modern-muse/IMG_5619.jpg";
// Modern Muse — videos
import museVid1 from "@/assets/modern-muse/IMG_5405.MOV";
import museVid2 from "@/assets/modern-muse/IMG_5634.MOV";

// Bachelor's Paradise — images
import bachelor1 from "@/assets/bachelors-paradise/939c06c8-9c7e-419d-8415-d6f096d6e106.jpg";
import bachelor2 from "@/assets/bachelors-paradise/IMG_9521.jpg";
import bachelor3 from "@/assets/bachelors-paradise/IMG_9575.jpg";
// Bachelor's Paradise — videos
import bachelorVid1 from "@/assets/bachelors-paradise/IMG_9576.mp4";

// Elevated Living — images
import elevated1 from "@/assets/elevated-living/IMG_5451.jpg";
import elevated2 from "@/assets/elevated-living/IMG_5459.jpg";
import elevated3 from "@/assets/elevated-living/IMG_5515.jpg";
import elevated4 from "@/assets/elevated-living/IMG_5522.jpg";
// Elevated Living — videos
import elevatedVid1 from "@/assets/elevated-living/IMG_5461.MOV";
import elevatedVid2 from "@/assets/elevated-living/IMG_5514.MOV";

// Velvet Haven — images
import velvet1 from "@/assets/velvet-haven/IMG_6855.jpg";
import velvet2 from "@/assets/velvet-haven/IMG_6902.jpg";
// Velvet Haven — videos
import velvetVid1 from "@/assets/velvet-haven/IMG_6928.mov";

// Statement Entryway — images
import entry1 from "@/assets/statement-entryway/IMG_6905.jpg";
import entry2 from "@/assets/statement-entryway/IMG_6914.jpg";
// Statement Entryway — videos
import entryVid1 from "@/assets/statement-entryway/IMG_6918.MOV";

const projects = [
  {
    number: "01",
    title: "The Modern Muse",
    description:
      "A blank canvas transformed into a modern, minimal and sophisticated sanctuary. Every detail was thoughtfully curated to balance clean lines with warmth.",
    media: [
      { type: "image" as const, src: muse1, alt: "The Modern Muse - Lounge" },
      { type: "image" as const, src: muse2, alt: "The Modern Muse - Living Room" },
      { type: "image" as const, src: muse3, alt: "The Modern Muse - Detail" },
      { type: "image" as const, src: muse4, alt: "The Modern Muse - Accent" },
      { type: "video" as const, src: museVid1, alt: "The Modern Muse - Walk-through" },
      { type: "video" as const, src: museVid2, alt: "The Modern Muse - Tour" },
    ],
    reverse: false,
  },
  {
    number: "02",
    title: "A Bachelor\u2019s Paradise",
    description:
      "This project focused on creating a cohesive flow between entryway, game room, lounge and private spaces \u2014 each area styled with statement pieces and a masculine yet sophisticated palette.",
    media: [
      { type: "image" as const, src: bachelor1, alt: "Bachelor's Paradise - Entry" },
      { type: "image" as const, src: bachelor2, alt: "Bachelor's Paradise - Game Room" },
      { type: "image" as const, src: bachelor3, alt: "Bachelor's Paradise - Lounge" },
      { type: "video" as const, src: bachelorVid1, alt: "Bachelor's Paradise - Walk-through" },
    ],
    reverse: true,
  },
  {
    number: "03",
    title: "Elevated Living",
    description:
      "Every detail in this space was intentionally selected \u2014 from custom furniture pieces to refined finishes \u2014 creating a cohesive environment that feels calm, elevated and effortlessly luxurious.",
    media: [
      { type: "image" as const, src: elevated1, alt: "Elevated Living - Main" },
      { type: "image" as const, src: elevated2, alt: "Elevated Living - Dining" },
      { type: "image" as const, src: elevated3, alt: "Elevated Living - Accent" },
      { type: "image" as const, src: elevated4, alt: "Elevated Living - Detail" },
      { type: "video" as const, src: elevatedVid1, alt: "Elevated Living - Walk-through" },
      { type: "video" as const, src: elevatedVid2, alt: "Elevated Living - Tour" },
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
    media: [
      { type: "image" as const, src: velvet1, alt: "Velvet Haven - Sofa" },
      { type: "image" as const, src: velvet2, alt: "Velvet Haven - Detail" },
      { type: "video" as const, src: velvetVid1, alt: "Velvet Haven - Walk-through" },
    ],
    reverse: true,
  },
  {
    number: "05",
    title: "The Statement Entryway",
    description:
      "A striking yet minimal entryway designed to leave a lasting first impression. This space was curated using unique yet clean design principles \u2014 balancing boldness with simplicity to create an entrance that immediately captures attention.",
    media: [
      { type: "image" as const, src: entry1, alt: "Statement Entryway - Main" },
      { type: "image" as const, src: entry2, alt: "Statement Entryway - Detail" },
      { type: "video" as const, src: entryVid1, alt: "Statement Entryway - Walk-through" },
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
