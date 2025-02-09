import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function HeroSection() {
  return (
    <div className="relative h-[266px]">
      <div className="w-full">
        <Image
          src="/hero-cover.png"
          alt="Hero image"
          className="z-0 opacity-69"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="absolute flex h-full w-full flex-col items-center">
        <div className="h-[124px]" />
        <p className="size-28 h-[44px] w-[353px] text-center font-bold text-white">
          Bli med på vårt Hackathon i Sandvika 28. februar - 4. april
        </p>
        <Link
          href="#påmelding"
          className={cn(buttonVariants({ variant: "default" }), "mt-[22px]")}
        >
          Gå til påmelding
        </Link>
        <p className="mt-[9px] size-2 h-[15px] w-[250px] text-gray-400 italic">
          *psst* vi har premier på 25 000 kr +
        </p>
      </div>
    </div>
  );
}
