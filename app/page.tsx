import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Divisions from "@/components/home/Divisions";
import Process from "@/components/home/Process";
import OneFiber from "@/components/home/OneFiber";
import Showroom from "@/components/home/Showroom";
import Story from "@/components/home/Story";
import Proof from "@/components/home/Proof";
import ClosingCTA from "@/components/home/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Divisions />
      <Process />
      <div className="h-20 md:h-28" />
      <OneFiber />
      <Showroom />
      <Story />
      <div className="h-20 md:h-28" />
      <Proof />
      <ClosingCTA />
    </>
  );
}
