import CallForAction from "@/components/navigation/callforaction";
import Features from "@/components/navigation/features";
import HeroSection from "@/components/navigation/hero";
import HowItWorks from "@/components/navigation/howitworks";
import StatsData from "@/components/navigation/statsdata";
import Testimonials from "@/components/navigation/testimonials";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />
      <StatsData />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallForAction />
    </div>
  );
}
