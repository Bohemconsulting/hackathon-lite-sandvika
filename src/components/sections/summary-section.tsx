import { cn } from "@/lib/utils";
import { Clock, Laptop, MapPin, User } from "lucide-react";
import Image from "next/image";

type TitleComponentProps = { icon: React.ReactNode; title: string };

export function TitleComponent({ icon, title }: TitleComponentProps) {
  return (
    <div>
      <div className="flex items-center gap-2 border-b-2 border-b-neutral-300 p-2">
        <div className="bg-yellow flex h-[24px] w-[24px] items-center justify-center rounded-full text-gray-800">
          {icon}
        </div>
        <h2 className="text-left font-bold">{title}</h2>
      </div>
    </div>
  );
}

export function SummarySection() {
  const sections = [
    {
      header: "Hvor?",
      text: "Hackathon Lite Sandvika holdes på det nye Akademiet bygget i Sandvika ved Sandvika bussterminal. Addressen er Malmskriverveien 16, 1337 Sandvika",
      icon: <MapPin size={16} />,
      image: {
        src: "/args-building.png",
        alt: "Args hovedbygning",
      },
    },
    {
      header: "Når?",
      text: "Arrengmenetet holdes hver fredag fra 28. februar - 4. april",
      icon: <Clock size={16} />,
      image: {
        src: "/calander.png",
        alt: "Kalender med datoer for arrengemenetet markert",
      },
    },
    {
      header: "Hva?",
      text: "Hackathon Lite Sandvika er en proggrammeringskonkurranse med mentorer. Det vil være premier for de beste lagene på over 25.000kr.",
      icon: <Clock size={16} />,
      image: {
        src: "/mentor.png",
        alt: "Mentor som veileder deltakere",
      },
    },
    {
      header: "Hvem?",
      text: "Arrangementet er laget for ungdom (13 - 20 år). Er du over 20 år kan du melde deg på som mentor eller hjelpe til som frivillig uten å delta for premiene.",
      icon: <Clock size={16} />,
      image: {
        src: "/student.png",
        alt: "Bilde av mulig deltaker",
      },
    },
  ];

  return (
    <section className="mx-auto my-10 flex max-w-4xl flex-col gap-10 lg:my-20 lg:gap-20">
      {sections.map((section, idx) => (
        <div
          key={section.header}
          className="flex flex-col gap-10 md:flex-row md:even:flex-row-reverse"
        >
          <div className="flex flex-1 flex-col">
            <div>
              <TitleComponent icon={section.icon} title={section.header} />
            </div>
            <p className={cn("flex-1 p-2", idx % 2 == 1 && "")}>
              {section.text}
            </p>
          </div>
          <div className="relative aspect-square flex-1">
            <Image
              src={section.image.src}
              alt={section.image.alt}
              fill
              className="aspect-square object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
