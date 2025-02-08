import Image from "next/image";

export function PrizesSection() {
  return (
    <section className="flex flex-col items-center gap-2.5 p-5 text-center">
      <h2 className="text-xs font-bold">Men hva med premiene?</h2>
      <div className="flex items-center">
        <p className="text-xs">
          1. plass får gaming laptop til 25 000 kr <br /> Resten får også
          premier (?)
        </p>
        <Image
          src={"/laptop-prize.png"}
          width={102}
          height={102}
          alt={"Acer Predator Helios Neo 16"}
        />
      </div>
    </section>
  );
}
