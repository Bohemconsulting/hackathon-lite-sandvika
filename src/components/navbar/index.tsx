import Image from "next/image";
import Link from "next/link";

type NavbarProps = {
  links: {
    text: string;
    href: string;
  }[];
};

export function Navbar({ links }: NavbarProps) {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="mx-auto flex max-w-4xl flex-row items-center justify-between px-2">
        <div className="flex flex-row items-center text-xl">
          <Image
            src="/logos/hls-logo.png"
            width={18}
            height={18}
            alt="Hackathon Lite Sandvika logo"
            className="mx-1"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <h1>
            <Link href="/">
              <span className="text-yellow uppercase">Hackathon</span>
              <span className="text-turquoise uppercase">Lite</span>
            </Link>
          </h1>
        </div>
        <div className="flex flex-row gap-4.5 text-sm">
          {links.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="border-foreground"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
