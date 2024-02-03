"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEventHandler } from "react";

const navItems = {
  "/": {
    name: "Home",
  },
  "/about": {
    name: "About",
  },
  "/projects": {
    name: "Projects",
  },
  "/snippets": {
    name: "Snippets",
  },
  "/blog": {
    name: "Blog",
  },
};

export function Navbar() {
  const pathname = usePathname();

  const colorVariants = {
    isActive: "text-indigo-600",
    regular: "text-slate-900",
  };

  const handleScroll: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);

    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="mb-1 h-[80px] w-full z-20">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="opacity-70 text-slate-950 text-xl font-bold font-['Inter'] uppercase tracking-wide mr-10"
        >
          ramonak
        </Link>

        <div className="items-center justify-between flex w-auto space-x-10">
          {Object.entries(navItems).map(([path, { name }]) => {
            const textColor =
              path === pathname
                ? colorVariants.isActive
                : colorVariants.regular;
            return (
              <Link
                key={path}
                href={path}
                className={`${textColor} text-base font-medium font-['Inter'] leading-normal`}
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
