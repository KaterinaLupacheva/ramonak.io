import Content from "./components/Content";
import Introduction from "./components/Introduction";
import Timeline from "./components/Timeline";

export default function About() {
  return (
    <>
      <div className="bg-slate-950 pb-10">
        <Introduction />
        <Timeline />
      </div>
      <Content />
    </>
  );
}
