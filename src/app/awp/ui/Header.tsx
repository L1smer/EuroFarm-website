"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const links: { name: string; href: string }[] = [
  { name: "Головна", href: "/awp" },
  { name: "Про нас", href: "/awp/about" },
  { name: "Каталог", href: "/awp/catalog" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <div className="flex justify-between items-center h-[115px] px-2 w-full lg:w-[95%] bg-white font-bold text-primary mx-auto lg:py-4 lg:rounded-3xl">
      <div className="w-[165px] lg:mx-6 h-full flex justify-center items-center">
        <Link href={"/awp"}>
          <Image
            src={"/awp/AWP-logo.svg"}
            width={239}
            height={150}
            alt="логотип компанії"
            className="max-w-[125px]"
            priority={true}
          />
        </Link>
      </div>
      <nav>
        <ul className="hidden lg:flex gap-5 flex-1 justify-center items-center">
          {links.map((link, index) => (
            <li
              key={index}
              className={clsx(" min-w-5 py-2 px-4 rounded-full", {
                "bg-accent": pathname === link.href,
                "hover:bg-secondary": pathname !== link.href,
              })}
            >
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

      <div className="min-w-[165px] mx-6 hidden lg:block">
        <button className=" ">
          <a
            href="tel:+380770075770"
            className="group inline-flex rounded-full p-[2px] bg-gradient-to-r from-blue-600 to-green-500"
          >
            <span
              className="rounded-full px-6 py-4 bg-white text-primary font-medium transition-colors duration-300
           group-hover:bg-transparent group-hover:text-white"
            >
              Зв'яжіться з нами
            </span>
          </a>
        </button>
      </div>
      <button
        className="w-[34px] mx-6 flex lg:hidden gap-2 flex-col"
        onClick={() => setOpen(true)}
      >
        <span className="w-full border border-accent"></span>
        <span className="w-full border border-accent"></span>
        <span className="w-full border border-accent"></span>
      </button>

      <div
        className={clsx(
          "fixed inset-0 z-40 transition-opacity duration-300",
          "bg-black/50", // backdrop
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          "motion-reduce:transition-none" // accessibility
        )}
        onClick={() => setOpen(false)}
      />

      <div
        className={clsx(
          "fixed inset-y-0 right-0 z-50 w-[320px] h-screen",
          "bg-white shadow-2xl border-l border-gray-200 p-6",
          "transition-transform duration-300 will-change-transform",
          isOpen ? "translate-x-0" : "translate-x-full",
          "motion-reduce:transition-none motion-reduce:transform-none flex flex-col justify-start"
        )}
        onClick={(e) => e.stopPropagation()} // keep clicks inside from closing
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
                <Link
                  href={link.href}
                  className={clsx("block", {
                    "text-accent": pathname === link.href,
                  })}
                  onClick={() => setOpen(false)} // close after navigation
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button className="mt-8 self-start">
          <a
            href="tel:+380770075770"
            className="group inline-flex rounded-full p-[2px] bg-gradient-to-r from-blue-600 to-green-500"
          >
            <span className="rounded-full px-6 py-4 bg-white text-primary font-medium transition-colors duration-300 group-hover:bg-transparent group-hover:text-white">
              Зв'яжіться з нами
            </span>
          </a>
        </button>
      </div>
    </div>
  );
}
