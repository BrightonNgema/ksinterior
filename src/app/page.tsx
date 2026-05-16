import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Divider from "@/components/Divider";
import ResidentialProjects from "@/components/ResidentialProjects";
import CommercialSection from "@/components/CommercialSection";
import FurnitureSection from "@/components/FurnitureSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
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
