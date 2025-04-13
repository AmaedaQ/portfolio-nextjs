import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main className="bg-gray-950 text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
