import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const commercialProjects = [
  {
    title: "Hospital Interior Projects",
    description:
      "Medical suite interiors thoughtfully styled to enhance both patient experience and visual cohesion with practice aesthetic. Each suite designed for comfort and professionalism.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    alt: "Hospital Interior Projects",
  },
  {
    title: "Office Interior Services",
    description:
      "Supplier of high-end, durable office furniture and interior styling services. These spaces are designed to create professional environments that feel both productive and visually elevated.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: "Office Interior Services",
  },
];

export default function CommercialSection() {
  return (
    <section id="commercial" className="bg-dark text-white py-20 md:py-32 px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-16 md:mb-20">
        <ScrollReveal>
          <p className="font-sans text-[0.7rem] tracking-[0.25em] uppercase text-accent-light font-medium mb-6">
            Commercial
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.15] mb-6">
            Commercial Interior Decor
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="max-w-[550px] mx-auto text-white/50 text-[0.95rem] leading-relaxed">
            Professional environments designed to elevate both experience and
            aesthetic &mdash; from medical suites to executive offices.
          </p>
        </ScrollReveal>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-[1200px] mx-auto">
        {commercialProjects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i === 1 ? 2 : 0}>
            <div className="group">
              <div className="aspect-[4/3] overflow-hidden mb-8 relative">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover brightness-[0.85] group-hover:brightness-100 group-hover:scale-[1.03] transition-all duration-800"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="font-serif text-[1.6rem] font-normal mb-4">
                {project.title}
              </h3>
              <p className="text-white/50 text-[0.88rem] leading-relaxed">
                {project.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
