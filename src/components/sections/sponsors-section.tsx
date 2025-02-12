import Image from "next/image";

export function SponsorsSection() {
  return (
    <section className="flex flex-col items-center gap-2.5 p-5">
      <h2 className="mb-4 text-center text-xl font-bold">
        Dette arrangementet er muliggjort av:
      </h2>
      <div className="flex gap-4.5">
        <div>
          <Image
            height={224}
            width={228}
            src={"/logos/nrg-logo.png"}
            alt={"Norges Realfagsgymnas Sandvika"}
            className="bg-white"
          />
        </div>
        <div>
          <Image
            height={224}
            width={212}
            src={"/logos/hls-logo.png"}
            alt={"Hackathon Lite Sandvika"}
          />
        </div>
        <div>
          <Image
            height={224}
            width={222}
            src={"/logos/erasmus-logo.jpg"}
            alt={"Erasmus+"}
          />
        </div>
      </div>
    </section>
  );
}
