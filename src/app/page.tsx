import Image from "next/image";
import Hero from "./Component/Hero";
import CategorySection from "./Component/CategorySection";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategorySection />
    </div>
  );
}
