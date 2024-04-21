"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEventHandler } from "react";
import { navItems } from "../constants/nav";

export function Navbar() {
  const pathname = usePathname();

  const handleScroll: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);

    elem?.scrollIntoView({ behavior: "smooth" });
  };

  const isDarkBg = navItems[pathname]?.isDarkBg;

  const bgColor = isDarkBg
    ? "bg-slate-950"
    : "bg-gradient-to-r from-[#fefde9] to-[#d8e7f9]";

  const textColor = isDarkBg ? "text-white" : "text-slate-900";

  return (
    <nav className={`h-[80px] w-full z-20 ${bgColor}`}>
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className={`${textColor} opacity-70  text-xl font-bold font-['Inter'] uppercase tracking-wide mr-10`}
        >
          ramonak
        </Link>

        <div className="items-center justify-between flex w-auto space-x-10">
          {Object.entries(navItems).map(([path, { name }]) => {
            const itemColor = path === pathname ? "text-indigo-600" : textColor;
            return (
              <Link
                key={path}
                href={path}
                className={`${itemColor} text-base font-medium font-['Inter'] leading-normal`}
              >
                {name}
              </Link>
            );
          })}
        </div>
        <a
          href="#contact-form"
          onClick={handleScroll}
          className="px-[18px] py-[10px] bg-indigo-600 rounded-lg shadow border border-indigo-600 justify-center items-center gap-2 flex ml-20"
        >
          <div className="text-white text-base font-medium font-['Inter'] leading-normal">
            Contact Me
          </div>
        </a>
      </div>
    </nav>
  );
}
