import Image from "next/image";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="relative h-screen flex justify-center">
      <Image alt="background image" src="/Background.png" fill />
      <Navbar />
    </div>
  );
}
