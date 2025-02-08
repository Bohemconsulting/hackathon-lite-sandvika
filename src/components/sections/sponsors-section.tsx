import Image from "next/image";

export function SponsorsSection() {
  return (
    <section className="flex flex-col items-center gap-2.5 p-5">
      <h2 className="font-bold">Dette arrangementet er skapt av</h2>
      <div className="flex gap-2.5">
        <Image
          height={111}
          width={111}
          src={"/logos/args-logo.png"}
          alt={"Akademiet Realfagsgymnas Sandvika"}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <Image
          height={111}
          width={106}
          src={"/logos/hls-logo.png"}
          alt={"Hackathon Lite Sandvika"}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <Image
          height={111}
          width={111}
          src={"/logos/erasmus-logo.jpg"}
          alt={"Erasmus+"}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    </section>
  );
}
