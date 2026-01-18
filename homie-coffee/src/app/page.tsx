import CoffeeScroll from "@/components/CoffeeScroll";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ShowcaseSection from "@/components/ShowcaseSection";

export default function Home() {
  return (
    <main className="bg-homie-green text-white">
      <Navbar />
      <CoffeeScroll />
      {/* Sections flow naturally after the 450vh scroll container */}
      <div className="relative z-10 bg-homie-green">
        <ShowcaseSection />
        <AboutSection />
        <MenuSection />
        <LocationSection />
        <Footer />
      </div>
    </main>
  );
}
