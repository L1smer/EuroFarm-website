"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links: { name: string; href: string }[] = [
  { name: "Головна", href: "/awp" },
  { name: "Каталог", href: "/awp/catalog" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center h-20 px-2 md:px-20">
      <div className="text-green-500">Logo</div>
      <ul className="flex gap-5">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              key={link.name}
              href={link.href}
              className={clsx({ "text-blue-600": pathname === link.href })}
            >
              <p>{link.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
