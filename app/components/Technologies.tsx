import TechnologyCard from "./TechnologyCard";

const techs = [
  {
    name: "React",
    description: "React is a JavaScript library for building user interfaces.",
    icon: "/icons/react.svg",
  },
  {
    name: "React Native",
    description:
      "React Native is an open-source UI software framework created by Meta Platforms, Inc.",
    icon: "/icons/react.svg",
  },
  {
    name: "TypeScript",
    description:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    icon: "/icons/typescript.svg",
  },
  {
    name: "Node.js",
    description:
      "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.",
    icon: "/icons/nodejs.svg",
  },
];

export default function Technologies() {
  return (
    <div className="w-full py-24 bg-white flex-col justify-start gap-8 inline-flex px-10">
      <div className="h-20 px-8 flex-col justify-start items-start flex">
        <div className="self-stretch text-[color:var(--pink-color)] text-base font-semibold font-['Inter'] uppercase leading-normal pb-2">
          Tech stack
        </div>
        <p className="self-stretch text-gray-900 text-4xl font-semibold font-['Inter']">
          Technologies I use
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-8 px-8">
        {techs.map((tech) => (
          <TechnologyCard key={tech.name} {...tech} />
        ))}
      </div>
    </div>
  );
}
