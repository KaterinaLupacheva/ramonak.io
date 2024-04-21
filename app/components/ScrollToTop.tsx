"use client";
import Image from "next/image";
import Link from "next/link";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="text-[#43D9AD]">
      <Link
        href="#"
        className="flex text-sm"
        onClick={scrollToTop}
        scroll={false}
      >
        <Image
          src={`/icons/arrow.svg`}
          alt="arrow icon"
          width={14}
          height={16}
          priority
          className="mr-2"
        />
        Back to the top
      </Link>
    </div>
  );
}
