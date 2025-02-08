import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { HostSection } from "@/components/sections/host-section";
import { SponsorsSection } from "@/components/sections/sponsors-section";

export default function Home() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <div>
        <Navbar />
        <HeroSection />
        <HostSection />
        <SponsorsSection />
      </div>
      <Footer />
    </div>
  );
}
