import { useEffect } from "react";
import Lenis from "lenis";
import { MessageCircle } from "lucide-react";
import "@/App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Partners } from "./components/Partners";
import { Categories } from "./components/Categories";
import { RotatingSelector } from "./components/RotatingSelector";
import { BestSellers } from "./components/BestSellers";
import { Manifesto } from "./components/Manifesto";
import { Gallery } from "./components/Gallery";
import { InstagramSection } from "./components/InstagramSection";
import { Contact } from "./components/Contact";
import { waLink } from "./data/content";

function App() {
  useEffect(() => {
    document.title = "NAGPAL'S HOUSE OF BEAUTY — Salon Furniture, Delhi";
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="grain bg-[#0F1411] min-h-screen" data-testid="app-root">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Partners />
        <Categories />
        <RotatingSelector />
        <BestSellers />
        <Manifesto />
        <Gallery />
        <InstagramSection />
        <Contact />
      </main>
      <a href={waLink("Hello Nagpal's House of Beauty, I have a question about salon furniture.")}
        target="_blank" rel="noreferrer" data-testid="floating-whatsapp-button"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-[80] w-14 h-14 rounded-full bg-[#B4863C] text-[#0F1411] flex items-center justify-center shadow-[0_8px_30px_rgba(180,134,60,0.45)] hover:bg-[#D3AA66] hover:-translate-y-1 transition-all">
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

export default App;
