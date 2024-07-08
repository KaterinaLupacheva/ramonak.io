import Link from "next/link";

export default function NiceToMeetYou() {
  return (
    <div className="w-full py-20 bg-slate-950 flex-col justify-start items-start gap-16 inline-flex px-10">
      <div className="px-8 flex-col justify-start items-start flex">
        <div className="text-[color:var(--pink-color)] text-base font-semibold font-['Inter'] uppercase leading-normal">
          Nice to meet you
        </div>
        <div className="self-stretch justify-start items-start inline-flex gap-2">
          <div className="w-3/5 text-white text-[52px] font-semibold font-['Inter'] leading-[72px]">
            I’m a self-taught developer. I continue to learn constantly{" "}
          </div>
          <div className="w-2/5 pt-3 flex-col justify-start items-start inline-flex">
            <div className="self-stretch text-white text-opacity-60 text-base">
              <p className="pb-4">In my free time</p>
              <ul className="list-none">
                <li>_ I write blog posts about the new things that I learn</li>
                <li>_ Develop some fun projects</li>
                <li>_ Contribute to an open-source community</li>
              </ul>
            </div>
            <p className="text-emerald-400 text-base font-bold font-['Inter'] leading-[30px]">
              <Link href="/about">{"> "}Read More</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
