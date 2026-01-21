"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import AuthButton from "../sign/authButton";

export const HeaderInfos = {
  Name: "Absolute Stream",
  link: [
    { name: "Films", href: "/movies" },
    { name: "Series", href: "/series" },
    { name: "Collections", href: "/saga" },
    { name: "Recommandations", href: "/recommendations" },
    // { name: "Mes Listes", href: "/mylist" },
    { name: "Membres", href: "/members" },
  ],
};

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="fixed w-full flex flex-row justify-between items-center px-20 h-15 z-50 bg-black backdrop-blur-sm">
      <div className="flex flex-row items-center gap-10 text-white">
        <Link
          href="/"
          className="font-extrabold text-2xl text-stream uppercase"
        >
          {HeaderInfos.Name}
        </Link>
        <div className="flex flex-row gap-4.5">
          {HeaderInfos.link.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center justify-center",
                pathname === item.href && "text-stream font-semibold",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <AuthButton />
      </div>
    </div>
  );
}
