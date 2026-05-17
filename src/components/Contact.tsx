import Image from "next/image";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const contactItems = [
  {
    icon: FiMail,
    value: "keishasotaka@gmail.com",
    href: "mailto:keishasotaka@gmail.com",
    external: false,
  },
  {
    icon: FiPhone,
    value: "071 027 4919",
    href: "https://wa.me/27710274919",
    external: true,
  },
  {
    icon: FaInstagram,
    value: "@keishsotaka",
    href: "https://www.instagram.com/keishsotaka/",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-dark text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="/images/furniture/contact-bg.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 pt-20 md:pt-32 pb-10 md:pb-14 px-6 md:px-12 text-center">
        <ScrollReveal>
          <p className="font-sans text-[0.7rem] tracking-[0.25em] uppercase text-accent-light font-medium mb-6">
            Let&apos;s Create Together
          </p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.1] mb-4">
            Get In Touch
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="font-serif text-[1.2rem] italic text-white/40 mb-12 md:mb-16">
            Transform your space into something extraordinary
          </p>
        </ScrollReveal>

        {/* Contact details */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 mb-16 md:mb-20">
          {contactItems.map((item, i) => (
            <ScrollReveal key={item.value} delay={i as 0 | 1 | 2}>
              <a
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-3 text-white/70 no-underline transition-colors hover:text-white group"
              >
                <item.icon
                  size={18}
                  className="text-accent-light group-hover:text-white transition-colors"
                />
                <span className="text-[0.95rem]">{item.value}</span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-12 md:pt-16 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-4 max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/logo-mark.png"
              alt="KS"
              width={80}
              height={28}
              className="h-7 w-auto brightness-0 invert opacity-60"
            />
            <span className="font-serif text-[1.1rem] tracking-[0.08em] text-white/60 -ml-3.5 mt-2">
              eisha Sotaka
            </span>
          </div>
          <span className="text-[0.7rem] text-white/25 tracking-[0.1em]">
            Interior Designer &amp; Stylist
          </span>
        </div>
      </div>
    </section>
  );
}
