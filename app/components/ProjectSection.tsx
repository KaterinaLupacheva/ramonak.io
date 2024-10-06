import Image from "next/image";

type ProjectSectionProps = {
  title: string;
  description: string;
  period: string;
  href: string;
  image: string;
  isReversed: boolean;
};

export default function ProjectSection({
  title,
  description,
  period,
  href,
  image,
  isReversed,
}: ProjectSectionProps) {
  return (
    <div
      className={`flex items-center gap-24 ${
        isReversed && "flex-row-reverse"
      } pr-4`}
    >
      <div className={`w-1/2 ${isReversed ? "pr-28" : "pl-28"}`}>
        <div className="flex">
          <p className="text-gray-900 font-bold text-2xl">{title}</p>
          <a
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            className="w-12 h-12 ml-1 text-gray"
          >
            <Image
              src="/icons/openInNewTab.svg"
              alt="Open in new tab"
              width={20}
              height={20}
            />
          </a>
        </div>
        <p className="text-gray-500 text-lg pt-2">{description}</p>
        <p className="text-[#4D5BCE] text-lg pt-2 font-semi">{period}</p>
      </div>
      <div className="w-1/2">
        <Image
          src={`/images/${image}.png`}
          alt="Open in new tab"
          width={768}
          height={512}
        />
      </div>
    </div>
  );
}
