"use client";

import { Building2 } from "lucide-react";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeNavbar() {
  const pathname = usePathname();
  console.log(pathname);
  const navLinks = [
    {
      title: "Dashboard",
      href: "/dashboard/home/overview",
    },
    {
      title: "Getting Started",
      href: "/dashboard/home/getting-started",
    },
    {
      title: "Recent Updates",
      href: "/dashboard/home/updates",
    },
    {
      title: "Announcements",
      href: "/dashboard/home/announcements",
    },
  ];

  return (
    <div className="h-36 p-5 header-bg bg-slate-50 border-b border-slate-200">
      <div className="flex space-x-3">
        <div className="flex w-12 h-12 rounded-lg bg-white items-center justify-center border text-slate-400">
          <Building2 />
        </div>
        <div className="flex flex-col">
          <p className="text-slate-800 font-semibold">Hello, Eksa Dwi Mada</p>
          <span className="text-sm text-slate-500">eksadmd</span>
        </div>
      </div>
      <nav className="sticky mt-8 flex space-x-8">
        {navLinks.map((item, i) => (
          <Link key={i} href={item.href} className={`${pathname === item.href ? "py-1 pb-3 border-b-2 border-blue-500 font-semibold" : "py-1"}`}>
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
