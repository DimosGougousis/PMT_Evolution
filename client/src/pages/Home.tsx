/* Design: Apple.com — light theme, white/grey alternating sections */
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MarketContext from "@/components/MarketContext";
import SoftwareClusters from "@/components/SoftwareClusters";
import ArchitectureSection from "@/components/ArchitectureSection";
import RegulatorySection from "@/components/RegulatorySection";
import GapAnalysis from "@/components/GapAnalysis";
import ComplianceCost from "@/components/ComplianceCost";
import RoadmapSection from "@/components/RoadmapSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#ffffff" }}>
      <Navigation />
      <HeroSection />
      <MarketContext />
      <SoftwareClusters />
      <ArchitectureSection />
      <RegulatorySection />
      <GapAnalysis />
      <ComplianceCost />
      <RoadmapSection />
      <Footer />
    </div>
  );
}
