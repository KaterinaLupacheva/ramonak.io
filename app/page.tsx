import Image from "next/image";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="relative h-screen flex flex-col items-center px-10">
      <Image alt="background image" src="/Background.png" fill />
      <Navbar />
      <div className="flex z-10 items-center">
        <p className="text-slate-950 text-7xl text-center font-semibold leading-normal">
          Hello, my name is Kate
        </p>
        <Image
          alt="kate background image"
          src="/kate.png"
          width={300}
          height={400}
        />
      </div>
    </div>
  );
}
