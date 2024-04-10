import Marquee from "react-fast-marquee";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main className="flex flex-col justify-center max-w-screen-2xl mx-auto">
      <Marquee
        pauseOnHover
        play
        delay={0}
        autoFill
        className="h-8 bg-blue-500 text-white"
      >
        <span>UXTopia</span>
        <div className=" justify-center rounded-full bg-white h-5 w-5 mx-8"></div>
        <span>Not just a regular design event</span>
        <div className=" justify-center rounded-full bg-white h-5 w-5 mx-8"></div>
        <span>Nov 15-21</span>
        <div className=" justify-center rounded-full bg-white h-5 w-5 mx-8"></div>
      </Marquee>
      <Header />
      <div>nndbnw</div>
    </main>
  );
}
