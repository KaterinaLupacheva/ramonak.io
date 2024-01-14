import Image from "next/image";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="relative h-screen flex flex-col items-center">
      <Image alt="background image" src="/Background.png" fill />
      <Navbar />
      <div className="flex">
        <Image
          alt="kate background image"
          src="/kate.png"
          width={300}
          height={400}
          style={{ zIndex: 1 }}
        />
      </div>
    </div>
  );
}
