import Image, { StaticImageData } from "next/image";

type ContentItemProps = {
  imageSrc: StaticImageData;
  children: React.ReactNode;
  sectionTitle: string;
  isReverse?: boolean;
};

export default function LightContentItem({
  imageSrc,
  sectionTitle,
  children,
  isReverse = false,
}: ContentItemProps) {
  return (
    <div
      className={`flex ${isReverse ? "flex-row-reverse" : "flex-row"} gap-4`}
    >
      <div className="w-1/2 flex justify-center items-center p-20">
        <Image src={imageSrc} alt="image" />
      </div>
      <div className="prose">
        <h2>{sectionTitle}</h2>
        {children}
      </div>
    </div>
  );
}
