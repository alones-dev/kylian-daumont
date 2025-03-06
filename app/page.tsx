import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
        <Header />
        <Hero />
        <AboutMe />
        <Projects />
        <Technologies />
        <Contact />
        <Footer />
    </main>
  );
}
