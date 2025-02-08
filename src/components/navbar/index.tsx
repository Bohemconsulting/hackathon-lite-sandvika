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
    <nav className="bg-gray-800 flex flex-row justify-between p-4 items-center">
      <div className="flex flex-row text-xl">
        <span className="uppercase text-yellow">Hackathon</span>{" "}
        <span className="uppercase text-turquoise">Lite</span>
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
