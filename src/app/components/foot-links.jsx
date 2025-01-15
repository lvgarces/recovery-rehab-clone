"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { alata } from "@/app/components/fonts";

const links = [
  { name: "Home", href: "/" },
  { name: "Privacy Policy", href: "" },
  { name: "Contact Us", href: "" },
  { name: "About Us", href: "" },
  { name: "AA Meetings Near Me", href: "" },
  { name: "Therapist Near Me", href: "" },
  { name: "Rehabs Near Me", href: "" },
  { name: "Halfway House Near Me", href: "" },
];

export default function FootLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-1">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className="relative flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-[#03181b] p-3 text-sm font-medium text-white md:flex-none md:justify-start md:p-2 md:px-3 group"
          >
            <p className={`${alata.className}`}>{link.name}</p>
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
    </div>
  );
}
