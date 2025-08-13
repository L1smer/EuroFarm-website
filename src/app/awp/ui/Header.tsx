"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

const links: { name: string; href: string }[] = [
  { name: "Головна", href: "/awp" },
  { name: "Каталог", href: "/awp/catalog" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center h-[115px] px-2 w-[95%] bg-white font-bold text-primary mx-auto my-4 rounded-3xl">
      <div className="w-[165px] mx-6 h-full flex justify-center items-center">
        <Image
          src={"/awp/AWP-logo.svg"}
          width={239}
          height={150}
          alt="логотип компанії"
          className="max-w-[125px]"
          priority={true}
        />
      </div>
      <nav>
        <ul className="flex gap-5 flex-1 justify-center items-center">
          {links.map((link, index) => (
            <li key={index} className={clsx(' min-w-5 py-2 px-4 rounded-full', {"bg-accent": pathname === link.href, "hover:bg-secondary": pathname !== link.href })}>
              <Link
                key={link.name}
                href={link.href}
                className={clsx({ "text-white": pathname === link.href })}
              >
                <p>{link.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="min-w-[165px] mx-6">
        <button className=" ">
          <a
            href="tel:+380770075770"
            className="group inline-flex rounded-full p-[2px] bg-gradient-to-r from-blue-600 to-green-500"
          >
            <span className="rounded-full px-6 py-3 bg-white text-primary font-medium transition-colors duration-300
           group-hover:bg-transparent group-hover:text-white">Зв'яжіться з нами</span>
          </a>
        </button>
      </div>
    </div>
  );
}
