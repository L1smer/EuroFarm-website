"use client";

import Image from "next/image";
import { playfairDisplay } from "../lib/fonts";
import Link from "next/link";
import { X } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";

const links: { name: string; href: string }[] = [
  { name: "Про нас", href: "/petstars" },
  { name: "Продукція", href: "/petstars/products" },
];

export default function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      <header className="px-5 md:px-10 w-full py-2.5 xl:py-5 min-h-15 flex justify-between items-center">
        <Link href="/petstars">
          <Image
            src={"/petstars/petstars-logo.png"}
            width={1159}
            height={400}
            className="max-w-30 md:max-w-40 transition-opacity duration-500"
            alt="логотип PetStars"
            id="logo"
          />
        </Link>
        <div className="hidden lg:flex justify-center font-bold items-center gap-10">
          <ul className="flex justify-center text-text items-center gap-2">
            {links.map((link, i) => (
              <li
                key={i}
                className="hover:text-primary hover:bg-text transition-all duration-200 rounded-full px-5 py-2"
              >
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <a
            href="tel:+380770075770"
            className={`group relative min-w-[165px] ${playfairDisplay.className} bg-primary shadow-2xl rounded-full overflow-hidden text-text flex justify-center items-center`}
          >
            <div className="absolute group-hover:translate-x-0 transition-all duration-300 inset-0 -translate-x-[240px] bg-text"></div>
            <span className="px-6 py-4 group-hover:text-primary z-10 duration-200 transition-colors">
              Зв`яжіться з нами
            </span>
          </a>
        </div>
        <button
          className="w-[37px] mx-2 sm:mx-6 flex lg:hidden gap-2 flex-col"
          onClick={() => setOpen(true)}
        >
          <span className="w-full border border-text"></span>
          <span className="w-full border border-text"></span>
          <span className="w-full border border-text"></span>
        </button>
      </header>
      <div
        className={clsx(
          "fixed inset-0 z-10 transition-opacity duration-300",
          "bg-black/50",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          "motion-reduce:transition-none"
        )}
        onClick={() => setOpen(false)}
      />

      <div
        className={clsx(
          "fixed inset-y-0 right-0 z-20 w-[320px] h-screen",
          "bg-white shadow-2xl border-l border-gray-200 p-6",
          "transition-transform duration-300 will-change-transform",
          isOpen ? "translate-x-0" : "translate-x-full",
          "motion-reduce:transition-none motion-reduce:transform-none flex flex-col justify-start"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="self-end mt-9 mx-7"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        <nav className="mt-2">
          <ul className="flex flex-col gap-2">
            {links.map((link, index) => (
              <li key={index} className="py-2 px-4 rounded-full">
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button className="mt-8 self-start">
          <a
            href="tel:+380770075770"
            className={`group relative min-w-[165px] ${playfairDisplay.className} bg-primary shadow-2xl rounded-full overflow-hidden text-text flex justify-center items-center`}
          >
            <div className="absolute group-hover:translate-x-0 transition-all duration-300 inset-0 -translate-x-[240px] bg-text"></div>
            <span className="px-6 py-4 group-hover:text-primary z-10 duration-200 transition-colors">
              Зв`яжіться з нами
            </span>
          </a>
        </button>
      </div>
    </>
  );
}
