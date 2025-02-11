import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-foreground h-fit w-full">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-2 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="text-background text-sm">Nettside utviklet av</span>
          <Image
            src={"/logos/bohemconsulting-logo.jpg"}
            width={36}
            height={36}
            alt="Bohemconsulting"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div>
          <Image
            src={"/eu-financed.png"}
            width={166}
            height={35}
            alt="Finansiert av Den europeiske union"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </footer>
  );
}
