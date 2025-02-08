import Image from "next/image";
import Link from "next/link";

export type NavbarProps = {};

// TODO: Update hrefs
const links = [
  {
    text: "Info",
    href: "",
  },
  {
    text: "Påmelding",
    href: "",
  },
];

export function Navbar({}: NavbarProps) {
  return (
    <nav className="flex flex-row items-center justify-between bg-gray-800 p-4">
      <div className="flex flex-row items-center text-xl">
        <Image
          src="/hls-logo.png"
          width={18}
          height={18}
          alt="Hackathon Lite Sandvika logo"
          className="mx-1"
        />
        <h1>
          <span className="text-yellow uppercase">Hackathon</span>
          <span className="text-turquoise uppercase">Lite</span>
        </h1>
      </div>
      <div className="flex flex-row divide-x-2">
        {links.map((link) => (
          <Link
            key={link.text}
            href={link.href}
            className="border-foreground px-2"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
