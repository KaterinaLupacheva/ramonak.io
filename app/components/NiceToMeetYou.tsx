export default function NiceToMeetYou() {
  return (
    <div className="w-full h-[380px] py-20 bg-slate-950 flex-col justify-start items-center gap-16 inline-flex px-10">
      <div className="h-[213px] px-8 flex-col justify-start items-start flex">
        <div className="text-rose-300 text-base font-semibold font-['Inter'] uppercase leading-normal">
          Nice to meet you
        </div>
        <div className="self-stretch justify-start items-center inline-flex">
          <div className="w-3/5 text-white text-[52px] font-semibold font-['Inter'] leading-[72px]">
            I’m a self-taught developer. I continue to learn constantly{" "}
          </div>
          <div className="w-2/5 pt-3 flex-col justify-start items-start inline-flex">
            <div className="self-stretch">
              <span className="text-white text-opacity-60 text-base font-['Fira Code']">
                In my free time
                <br />
                <br />_ I write{" "}
              </span>
              <span className="text-rose-300 text-base font-medium font-['Fira Code'] underline">
                blog posts
              </span>
              <span className="text-white text-opacity-60 text-base font-['Fira Code']">
                {" "}
                about <br />
                the new things that I learn
                <br />_ develop some fun{" "}
              </span>
              <span className="text-rose-300 text-base font-medium font-['Fira Code'] underline">
                projects
                <br />
              </span>
              <span className="text-white text-opacity-60 text-base font-['Fira Code']">
                _ contribute to an{" "}
              </span>
              <span className="text-rose-300 text-base font-medium font-['Fira Code'] underline">
                open-source
              </span>
              <span className="text-white text-opacity-60 text-base font-['Fira Code']">
                {" "}
                community
                <br />_ and do freelance jobs
              </span>
            </div>
            <div className="text-emerald-400 text-base font-bold font-['Inter'] leading-[30px]">
              {" "}
              Read More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
