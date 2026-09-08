import { Reveal } from "./Reveal";
import { scrollToId } from "../data/content";

const CHAPTERS = [
  {
    num: "01",
    title: "The Delhi Atelier",
    body: "Nagpal's House of Beauty began on the workshop floors of Delhi's furniture district. Every chair, basin and station we supply is chosen the way a salon owner would — sat on, leaned back in, and judged on whether it survives a busy Saturday.",
  },
  {
    num: "02",
    title: "Built for Twelve-Hour Days",
    body: "Salon furniture isn't decoration; it's equipment. Hydraulic pumps rated for thousands of lifts, ceramic basins that resist chemical wear, upholstery that wipes clean between clients — we stock pieces that hold up to daily commercial use.",
  },
  {
    num: "03",
    title: "Pan-India, White-Glove",
    body: "From a single styling chair to a full salon fit-out, we deliver and install across India. Bulk and made-to-order runs are our speciality — tell us the floor plan, and we'll furnish it.",
  },
];

export const Manifesto = () => (
  <section id="about" className="py-20 sm:py-28 bg-[#1C2B22]/40 border-y border-[#B4863C]/15" data-testid="about-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal className="mb-14 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#B4863C] font-semibold mb-3">About us</p>
          <h2 className="font-display font-bold uppercase tracking-tight text-2xl sm:text-4xl text-[#F5F1E8] max-w-lg leading-tight">
            A house built on working furniture
          </h2>
        </div>
        <button onClick={() => scrollToId("#contact")} data-testid="about-contact-link"
          className="text-sm text-[#D3AA66] border-b border-[#B4863C] pb-1 hover:text-[#F5F1E8] transition-colors">
          Get in touch
        </button>
      </Reveal>

      <div>
        {CHAPTERS.map((ch, i) => (
          <Reveal key={ch.num} delay={i * 0.08}>
            <div className="grid md:grid-cols-[140px_1fr_1.4fr] gap-4 md:gap-10 py-10 border-t border-[#B4863C]/15 items-start"
              data-testid={`manifesto-chapter-${ch.num}`}>
              <span className="font-display font-extrabold text-4xl sm:text-5xl marquee-outline">{ch.num}</span>
              <h3 className="font-display font-bold uppercase tracking-wide text-xl sm:text-2xl text-[#D3AA66]">{ch.title}</h3>
              <p className="text-[#F5F1E8]/65 leading-relaxed text-sm sm:text-base max-w-xl">{ch.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
