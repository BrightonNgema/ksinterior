import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Divider from "@/components/Divider";
import ResidentialProjects from "@/components/ResidentialProjects";
import CommercialSection from "@/components/CommercialSection";
import FurnitureSection from "@/components/FurnitureSection";
import Contact from "@/components/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Keisha Sotaka",
      url: "https://ksinterior.co.za",
      jobTitle: "Interior Designer & Stylist",
      image: "https://ksinterior.co.za/images/about/keisha-sotaka.png",
      sameAs: [],
      worksFor: {
        "@type": "Organization",
        name: "KS Interior",
        url: "https://ksinterior.co.za",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "KS Interior",
      alternateName: "Keisha Sotaka Interior Design",
      url: "https://ksinterior.co.za",
      logo: "https://ksinterior.co.za/images/logo/logo-mark.png",
      image: "https://ksinterior.co.za/images/hero/hero-1.jpg",
      description:
        "Keisha Sotaka is an interior designer and stylist creating elevated, timeless spaces. Residential & commercial interior design, custom furniture in South Africa.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ZA",
      },
      founder: {
        "@type": "Person",
        name: "Keisha Sotaka",
      },
      knowsAbout: [
        "Interior Design",
        "Interior Styling",
        "Residential Interior Design",
        "Commercial Interior Design",
        "Custom Furniture",
      ],
    },
    {
      "@type": "WebSite",
      name: "Keisha Sotaka — KS Interior",
      url: "https://ksinterior.co.za",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Divider />
      <ResidentialProjects />
      <CommercialSection />
      <FurnitureSection />
      <Contact />
    </>
  );
}
