import Image from "next/image";
import { Inter } from "next/font/google";
import About from "@/components/blocks/About";
const inter = Inter({ subsets: ["latin"] });
import HeroBanner from "@/components/blocks/HeroBanner";
import Services from "@/components/blocks/Services";
export default function Home() {
  return (
    <>
      <HeroBanner />
      <About />
      <Services />
    </>
  );
}
