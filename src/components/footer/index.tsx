import { SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

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
      <div className="mx-auto my-2 flex max-w-4xl justify-center gap-8">
        <div className="flex items-center gap-2">
          <span className="text-background">Våre socials:</span>
          <Button asChild variant="link" size="icon" className="size-6">
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UC2XlV6t46QsHRJ69RBSMnCw"
            >
              <SiYoutube color="000000" size={48} className="size-6" />
            </a>
          </Button>
          <Button asChild variant="link" size="icon" className="size-6">
            <a
              target="_blank"
              href="https://www.instagram.com/hackathon_lite_sandvika"
            >
              <SiInstagram color="000000" size={48} className="size-6" />
            </a>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-background">Ta kontakt:</span>
          <Button asChild variant="link" size="icon" className="size-6">
            <a target="_blank" href="mailto:hackathonlite.sandvika@gmail.com">
              <Mail color="black" className="size-6" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
