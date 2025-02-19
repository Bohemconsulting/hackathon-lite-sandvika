import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { HostSection } from "@/components/sections/host-section";
import { InfoSection } from "@/components/sections/info-section";
import { PrizesSection } from "@/components/sections/prizes-section";
import { SignupClosedSection } from "@/components/sections/signup-closed-section";
import { SponsorsSection } from "@/components/sections/sponsors-section";
import { SummarySection } from "@/components/sections/summary-section";

const navbarLinks = [
  {
    text: "Info",
    href: "#info",
  },
  {
    text: "Påmelding",
    href: "#påmelding",
  },
];

export default function Home() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <div>
        <Navbar links={navbarLinks} />
        <HeroSection />
        <div className="mx-auto max-w-4xl px-2">
          <SummarySection />
          <HostSection />
          <InfoSection />
          <PrizesSection />
          {/* <SignUpForm /> Sign Up is closed */}
          <SignupClosedSection />
          <SponsorsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
