import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";

export function HeroSection() {
  return (
    <div className="relative h-[266px]">
      <div className="w-full">
        <Image
          src="/hero-cover.png"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-69"
        />
      </div>
      <div className="absolute flex h-full w-full flex-col items-center">
        <div className="h-[124px]" />
        <p className="size-28 h-[44px] w-[353px] text-center font-bold text-white">
          Bli med på vårt Hackathon i Sandvika 28. februar - 28.mars
        </p>
        <Button className="mt-[22px] h-[40px] w-[140px]">
          Gå til påmelding
        </Button>
        <p className="mt-[9px] size-2 h-[15px] w-[250px] text-gray-400 italic">
          *psst* vi har premier på 25 000 kr +
        </p>
      </div>
    </div>
  );
}
