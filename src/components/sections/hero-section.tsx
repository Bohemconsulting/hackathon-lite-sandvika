import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function HeroSection() {
  return (
    <div className="relative h-[266px] md:h-[532px]">
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
      <div className="absolute flex h-full w-full flex-col items-center justify-end">
        <p className="max-w-4xl px-16 text-center font-bold text-white md:text-4xl">
          Bli med på vårt Hackathon i Sandvika 28. februar - 4. april
        </p>
        <Link
          href="#påmelding"
          className={cn(buttonVariants({ variant: "default" }), "mt-3 md:mt-6")}
        >
          Gå til påmelding
        </Link>
        <p className="mt-3 h-[30px] w-[250px] text-nowrap text-gray-300 italic md:mt-6">
          *psst* vi har premier på 20 000 kr +
        </p>
      </div>
    </div>
  );
}
