"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  return (
    // <aside className="mb-16 tracking-tight h-[80px] flex items-center w-screen">
    //   <div className="sticky top-0">
    //     <nav className="flex justify-between items-center">
    //       <div className="mr-20">
    //         <Link
    //           href="/"
    //           className="opacity-70 text-slate-950 text-xl font-bold font-['Inter'] uppercase tracking-wide"
    //         >
    //           ramonak
    //         </Link>
    //       </div>
    //       <div className="justify-start items-center gap-12 flex">
    //         {Object.entries(navItems).map(([path, { name }]) => {
    //           const textColor =
    //             path === pathname
    //               ? colorVariants.isActive
    //               : colorVariants.regular;
    //           return (
    //             <Link
    //               key={path}
    //               href={path}
    //               className={`${textColor} text-base font-medium font-['Inter'] leading-normal`}
    //             >
    //               {name}
    //             </Link>
    //           );
    //         })}
    //       </div>
    //       <Link
    //         href="/contact"
    //         className="px-[18px] py-[10px] bg-indigo-600 rounded-lg shadow border border-indigo-600 justify-center items-center gap-2 flex ml-20"
    //       >
    //         <div className="text-white text-base font-medium font-['Inter'] leading-normal">
    //           Contact Me
    //         </div>
    //       </Link>
    //     </nav>
    //   </div>
    // </aside>

    <nav className="mb-16 tracking-tight h-[80px] sticky w-full top-0">
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
        <Link
          href="/contact"
          className="px-[18px] py-[10px] bg-indigo-600 rounded-lg shadow border border-indigo-600 justify-center items-center gap-2 flex ml-20"
        >
          <div className="text-white text-base font-medium font-['Inter'] leading-normal">
            Contact Me
          </div>
        </Link>
      </div>
    </nav>
  );
}
