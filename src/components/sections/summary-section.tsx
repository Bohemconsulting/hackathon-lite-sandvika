import { Clock, Laptop, MapPin, User } from "lucide-react";
import Image from "next/image";

export type SummarySectionProps = {};

export function SummarySection({}: SummarySectionProps) {
  return (
    <div className="flex h-[283.5px] flex-col items-center justify-center">
      <h2 className="h-[55px] py-[20px] font-bold">KORT OPPSUMMERT</h2>
      <div className="flex h-[268.5px] w-full justify-between px-[20px] pb-[30px]">
        <div className="flex h-[208.5px] w-[180px] flex-col justify-between text-left text-sm">
          <div className="flex items-center justify-between">
            <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white">
              <MapPin size={24} color="black" />
            </div>
            <p className="w-[137px]">Malmskriverveien 16, 1337 Sandvika</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white">
              <Clock size={24} color="black" />
            </div>
            <p className="w-[137px]">28. februar - 28. mars, hver fredag</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white">
              <Laptop size={24} color="black" />
            </div>
            <p className="w-[137px]">Proggekonkurranse med mentorer</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white">
              <User size={24} color="black" />
            </div>
            <p className="w-[137px]">Arrangement for ungdom (13 - 20 år)</p>
          </div>
        </div>
        <div className="relative h-[208.5px] w-[139px]">
          <Image
            src="/args-building.png"
            alt="Args hovedbygning"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
