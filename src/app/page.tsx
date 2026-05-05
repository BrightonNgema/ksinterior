"use client";

import { useState, useCallback } from "react";
import { useLenis } from "@/hooks/useLenis";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResidentialSection from "@/components/ResidentialSection";
import CommercialSection from "@/components/CommercialSection";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useLenis();

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ResidentialSection />
        <CommercialSection/>
      </main>
    </>
  );
}
