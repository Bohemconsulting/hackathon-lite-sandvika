import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { HostSection } from "@/components/sections/host-section";
import { InfoSection } from "@/components/sections/info-section";
import { PrizesSection } from "@/components/sections/prizes-section";
import { SponsorsSection } from "@/components/sections/sponsors-section";
import { SignUpForm } from "@/components/sign-up-form";
import { SummerySection } from "@/components/summery-section";

export default function Home() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <div>
        <Navbar />
        <HeroSection />
        <SummerySection />
        <HostSection />
        <InfoSection />
        <PrizesSection />
        <SignUpForm />
        <SponsorsSection />
      </div>
      <Footer />
    </div>
  );
}
