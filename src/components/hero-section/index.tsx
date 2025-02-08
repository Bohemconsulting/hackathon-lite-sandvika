import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export type HeroSectionProps = {};

export function HeroSection({}: HeroSectionProps) {
  return (
    <div className=" relative h-[266px]">
      <div className="w-full">
        <Image
          src="/hero-cover.png"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          className="opacity-69 z-0"
        />
      </div>
      <div className="flex flex-col items-center h-full w-full absolute">
        <div className="h-[124px]" />
        <p className="font-bold size-28 w-[353px] h-[44px] text-center text-white">
          Bli med på vårt Hackathon i Sandvika 28. februar - 28.mars
        </p>
        <Button className="mt-[22px] w-[140px] h-[40px]">
          Gå til påmelding
        </Button>
        <p className="mt-[9px] w-[250px] h-[15px] italic text-gray-400 size-2">
          *psst* vi har premier på 25 000 kr +
        </p>
      </div>
    </div>
  );
}
