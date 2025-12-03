"use client"

import { useState, useEffect } from "react"
import MainNavbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import TimelineSection from "@/components/timeline-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import FooterSection from "@/components/footer-section"
import AboutSection from "@/components/about-section"
import EligibilitySection from "@/components/eligibility-section"
import PartnersSection from "@/components/partners-section"
import { GlobeDemo } from "@/components/globe"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="w-full overflow-x-hidden bg-background text-foreground">
      {isLoaded && (
        <>
          <MainNavbar />
          <HeroSection />
          <AboutSection />
          <TimelineSection />
          <FeaturesSection />
          <EligibilitySection />
          <PartnersSection />
          <GlobeDemo/>
          <TestimonialsSection />
          <FooterSection />
        </>
      )}
    </main>
  )
}
