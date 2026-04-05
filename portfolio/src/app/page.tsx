import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <CaseStudies />
      <Projects />
      <Skills />
      <Experience />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
