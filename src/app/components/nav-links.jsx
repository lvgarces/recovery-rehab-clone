"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { alata } from "@/app/components/fonts";

const links = [
  { name: "Home", href: "/" },
  {
    name: "Luxury Rehabs",
    href: "/luxury-rehab-centers",
  },
  { name: "Top Rehab Centers", href: "" },
  { name: "News & Blog", href: "" },
  { name: "Get Listed", href: "" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className="relative flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium text-gray1 md:flex-none md:justify-start md:p-2 md:px-3 group"
          >
            <p className={` ${alata.className}`}>{link.name}</p>
            <span
              className={clsx(
                "absolute bottom-0 left-0 h-[2px] w-full bg-cerulean transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-right",
                {
                  "absolute bottom-0 left-0 h-[2px] w-full bg-cerulean transform scale-x-100":
                    pathname === link.href,
                }
              )}
            ></span>
          </Link>
        );
      })}
    </>
  );
}
