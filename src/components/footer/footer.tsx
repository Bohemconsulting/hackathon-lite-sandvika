import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-foreground h-fit w-full">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-2 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="text-background text-sm text-nowrap md:text-2xl">
            Nettside utviklet av
          </span>
          <div className="h-9 w-9 md:h-18 md:w-18">
            <Image
              src={"/logos/bohemconsulting-logo.jpg"}
              width={72}
              height={72}
              alt="Bohemconsulting"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className="h-[35px] w-[166px] md:h-[70px] md:w-[332px]">
          <Image
            src={"/eu-financed.png"}
            width={332}
            height={70}
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
