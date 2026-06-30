import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { Approach } from "@/components/Approach";
import { Practice } from "@/components/Practice";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Capabilities />
        <Approach />
        <Practice />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
