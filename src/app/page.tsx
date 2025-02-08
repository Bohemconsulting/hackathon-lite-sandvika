import { Footer } from "@/components/footer/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <div>
        <Navbar />
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
}
