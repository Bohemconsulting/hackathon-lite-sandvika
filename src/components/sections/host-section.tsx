import Image from "next/image";

export function HostSection() {
  return (
    <section className="-mb-10 flex justify-center md:-mt-16 md:-mb-28">
      <Image
        src={"/logos/hls-logo.png"}
        width={768}
        height={768}
        alt={"Hackathon Lite Sandvika logo"}
        style={{
          maxWidth: "50%",
          height: "auto",
        }}
      />
    </section>
  );
}
