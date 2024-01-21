import Image from "next/image";

type TechnologyCardProps = {
  name: string;
  description: string;
  icon: string;
};

export default function TechnologyCard({
  name,
  description,
  icon,
}: TechnologyCardProps) {
  return (
    <div className="p-6 bg-gray-100 rounded-lg flex-col justify-start items-start inline-flex">
      <Image src={icon} alt={name} width={48} height={48} />
      <div className="self-stretch flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch text-slate-900 text-xl font-semibold font-['Inter'] leading-[30px]">
          {name}
        </div>
        <div className="self-stretch text-indigo-600 text-base font-normal font-['Fira Code'] leading-normal">
          {description}
        </div>
      </div>
    </div>
  );
}
