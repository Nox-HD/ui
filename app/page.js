import BentoGrid from "@/components/bento";
import Easy from "@/components/easy";
import Footer from "@/components/footer";
import Footerfull from "@/components/footerlinks";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <BentoGrid />
        <Easy />
        <Footer />
        <Footerfull  />
      </div>
    </main>
  );
}