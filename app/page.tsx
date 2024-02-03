import Image from "next/image";
import { Navbar } from "./components/Navbar";
import Social from "./components/Social";
import NiceToMeetYou from "./components/NiceToMeetYou";
import Technologies from "./components/Technologies";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <div className="relative h-screen flex flex-col items-center px-10">
        <Image alt="background image" src="/Background.png" fill />
        <Navbar />
        <div className="flex z-10 items-center">
          <div className="flex flex-col">
            <p className="text-slate-950 text-7xl text-left font-semibold leading-normal">
              Hello, my name is Kate
            </p>
            <p className="text-gray-500 text-[22px] font-normal leading-[30px]">
              {">"} I am a full-stack web and mobile apps developer
            </p>
            <Social />
          </div>
          <Image
            alt="kate background image"
            src="/kate.png"
            width={300}
            height={400}
          />
        </div>
      </div>
      <NiceToMeetYou />
      <Technologies />
      <Portfolio />
      <Projects />
    </div>
  );
}
