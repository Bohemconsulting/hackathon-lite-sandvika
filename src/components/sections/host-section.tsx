import Image from "next/image";

export function HostSection() {
  return (
    (<section className="flex justify-center">
      <Image
        src={"/logos/hls-logo.png"}
        width={106}
        height={111}
        alt={"Hackathon Lite Sandvika logo"}
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
    </section>)
  );
}
