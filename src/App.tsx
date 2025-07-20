import { Header } from "@/containers/Header"
import { HeroSection } from "@/containers/HeroSection";
import { FilterSection } from "@/containers/FilterSection";

export default function App() {


  return (
    <main className="bg-black min-h-screen text-white">
      <Header />
      <HeroSection />
      <FilterSection />
    </main>
  );
}
