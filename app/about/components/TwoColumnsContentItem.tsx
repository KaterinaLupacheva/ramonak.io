type TwoColumnsContentItemProps = {
  sectionTitle?: string;
  children: React.ReactNode;
};

export default function TwoColumnsContentItem({
  sectionTitle,
  children,
}: TwoColumnsContentItemProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-950 py-24 px-20 text-white">
      <h2 className="text-2xl mb-8 text-center">{sectionTitle}</h2>
      <div className="grid grid-cols-2 gap-4 text-base">{children}</div>
    </div>
  );
}
