import Link from "next/link";
import { navItems } from "../constants/nav";
import { socials } from "../constants/social";
import Image from "next/image";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-8">
      <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">RAMONAK</h2>
            <nav className="mt-4">
              <ul className="flex space-x-4">
                {Object.entries(navItems).map(([path, { name }]) => {
                  return (
                    <Link
                      key={path}
                      href={path}
                      className={`text-[#98A2B3] font-medium font-['Inter'] leading-normal hover:text-gray-300`}
                    >
                      {name}
                    </Link>
                  );
                })}
              </ul>
            </nav>
          </div>
          <ScrollToTop />
        </div>
        <div className="flex justify-between text-[#98A2B3] items-center border-t border-gray-600 pt-4 mt-4">
          <p>© {new Date().getFullYear()} Ramonak. All rights reserved.</p>
          <ul className="flex space-x-4">
            {socials.map(({ icon, href, alt }) => (
              <li key={icon}>
                <a href={href} rel="noopener noreferrer" target="_blank">
                  <Image
                    src={`/icons/${icon}-footer.svg`}
                    alt={alt}
                    width={48}
                    height={48}
                    priority
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
