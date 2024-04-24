import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import PartnerLogos from "./components/PartnerLogos";
import Solutions from "./components/Solutions";
import Streamline from "./components/Streamline";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <NavBar />
      <Hero />
      <Solutions />
      <Streamline />
      <Pricing />
    </main>
  );
}
