import Image from "next/image";
import Link from "next/link";

// TODO: Update hrefs
const links = [
  {
    text: "Info",
    href: "#info-section",
  },
  {
    text: "Påmelding",
    href: "#sign-up-form",
  },
];

export function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-row items-center justify-between px-2">
        <div className="flex flex-row items-center text-xl">
          <Image
            src="/logos/hls-logo.png"
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
      </div>
    </nav>
  );
}
