"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import keishaPortrait from "@/assets/keisha-sotaka.png";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    marginBottom:12,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 overflow-hidden"
      style={{ paddingTop: 60, paddingBottom: 60 }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          {/* Image */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={keishaPortrait}
                alt="Keisha Sotaka - Interior Designer"
                className="w-full h-full object-cover object-top"
                placeholder="blur"
                priority
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="lg:col-span-7 lg:pt-4">
            <motion.p
              className="font-sans text-[10px] tracking-[0.5em] uppercase text-accent mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fade}
              custom={0}
            >
              About Me
            </motion.p>

            <motion.h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.05] mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fade}
              custom={1}
            >
              Keisha <span className="italic text-accent">Sotaka</span>
            </motion.h2>

            <motion.div
              className="w-12 h-[1px] bg-accent/40 mb-10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              style={{ originX: 0 }}
            />

            <div className="space-y-10">
              {[
                "I am an interior stylist with a refined eye for detail and a passion for creating elevated, timeless spaces that feel both sophisticated and deeply personal.",
                "My journey in the built environment started in 2020, driven by a desire to source unique, statement pieces that transform everyday spaces into curated experiences. Over time this evolved into a design approach rooted in intentionality \u2014 where every element is carefully considered and beautifully balanced.",
                "My work focuses on blending elegance, comfort and individuality to create interiors that are not only visually striking but effortlessly liveable.",
                "Each space I design is a reflection of my client\u2019s lifestyle, enhanced through a lens of modern sophistication and understated luxury.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className="font-sans text-[15px] text-foreground/55 leading-[1.9] mt-12"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fade}
                  custom={i + 2}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-10 border-t border-border"
              style={{ paddingTop: 12, marginTop:12 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {[
                { value: "5+", label: "Years Experience" },
                { value: "50+", label: "Projects Completed" },
                { value: "3", label: "Service Pillars" },
              ].map((stat, i) => (
                <motion.div key={stat.label} variants={fade} custom={i}>
                  <span className="font-serif text-3xl md:text-4xl text-accent font-light">
                    {stat.value}
                  </span>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
