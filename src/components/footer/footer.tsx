import Image from "next/image";

export function Footer() {
  return (
    <div className="bg-foreground flex h-fit w-full items-center justify-between px-4 py-2.5">
      <div className="flex items-center gap-1.5">
        <span className="text-background text-sm">Nettside utviklet av</span>
        <Image
          src={"/bohemconsulting-logo.jpg"}
          width={36}
          height={36}
          alt="Bohemconsulting"
        />
      </div>
      <div>
        <Image
          src={"/eu-financed.png"}
          width={166}
          height={35}
          alt="Finansiert av Den europeiske union"
        />
      </div>
    </div>
  );
}
