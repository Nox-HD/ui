import BentoGrid from "@/components/bento";
import Easy from "@/components/easy";
import Footer from "@/components/footer";
import Footerfull from "@/components/footerlinks";
import Hero from "@/components/hero";
import Head from "next/head";

export default function Home() {
  return (
    <main className="">
      <Head>
        <link rel="shortcut icon" href="/noxhd.png" />
      </Head>
      <div>
        <Hero />
        <BentoGrid />
        <Easy />
        <Footer />
        <Footerfull />
      </div>
    </main>
  );
}
