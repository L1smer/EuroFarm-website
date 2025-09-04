import Image from "next/image";
import { playfairDisplay } from "../lib/fonts";

const links: { name: string; href: string }[] = [
  { name: "Про нас", href: "/petstars" },
  { name: "Продукція", href: "/petstars/products" },
];

export default function Header() {
  
  return (
    <header className="fixed z-5 top-3 px-10 w-full h-30 flex justify-between items-center">
      <a href="/petstars">
      <Image
        src={"/petstars/petstars-logo.png"}
        width={1159}
        height={400}
        className="max-w-40 transition-opacity duration-500"
        alt="логотип PetStars"
        id="logo"
      />
      </a>
      <div className="flex justify-center font-bold items-center gap-10">
        <ul className="flex justify-center text-text items-center gap-2">
          {links.map((link,i) => (
            <li key={i} className="hover:text-primary hover:bg-text transition-all duration-200 rounded-full px-5 py-2"><a href={`${link.href}`}>{link.name}</a></li>
          ))}
        </ul>
        <a
          href="tel:+380770075770"
          className={`group relative min-w-[165px] ${playfairDisplay.className} bg-primary shadow-2xl rounded-full overflow-hidden text-text flex justify-center items-center`}
        >
          <div className="absolute group-hover:translate-x-0 transition-all duration-300 inset-0 -translate-x-[240px] bg-text"></div>
          <span className="px-6 py-4 group-hover:text-primary z-10 duration-200 transition-colors">Зв`яжіться з нами</span>
        </a>
      </div>
    </header>
  );
}
