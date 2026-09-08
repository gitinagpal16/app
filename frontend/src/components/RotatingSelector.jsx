import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { SPOTLIGHTS, waLink } from "../data/content";

export const RotatingSelector = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % SPOTLIGHTS.length), 4500);
    return () => clearInterval(t);
  }, [paused]);

  const spot = SPOTLIGHTS[active];

  return (
    <section id="selector" className="py-20 sm:py-28 bg-[#141B16] border-y border-[#B4863C]/15"
      data-testid="rotating-selector-section"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#B4863C] font-semibold mb-3">The collection, in rotation</p>
          <h2 className="font-display font-bold uppercase tracking-tight text-2xl sm:text-4xl text-[#F5F1E8]">
            Find the perfect piece
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-center">
          <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible" data-testid="selector-tabs">
            {SPOTLIGHTS.map((s, i) => (
              <button key={s.cat} onClick={() => setActive(i)} data-testid={`selector-tab-${i}`}
                className={`relative text-left px-4 sm:px-6 py-4 shrink-0 lg:shrink transition-colors duration-300 border-l-2 ${
                  i === active ? "border-[#B4863C] bg-[#1C2B22]/70" : "border-transparent hover:bg-[#1C2B22]/30"
                }`}>
                <span className={`block text-[10px] tracking-[0.3em] uppercase mb-1 ${i === active ? "text-[#D3AA66]" : "text-[#F5F1E8]/35"}`}>
                  0{i + 1}
                </span>
                <span className={`font-display font-bold uppercase tracking-wide whitespace-nowrap lg:whitespace-normal text-sm sm:text-lg ${
                  i === active ? "text-[#F5F1E8]" : "text-[#F5F1E8]/40"
                }`}>
                  {s.cat}
                </span>
                {i === active && !paused && (
                  <motion.span key={active} className="absolute bottom-0 left-0 h-px bg-[#B4863C]"
                    initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 4.5, ease: "linear" }} />
                )}
              </button>
            ))}
          </div>

          <div className="relative" data-testid="selector-spotlight">
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity: 0, x: 40, rotate: 1 }} animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -40, rotate: -1 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="grid sm:grid-cols-2 border border-[#B4863C]/25 bg-[#0F1411]">
                <div className="relative aspect-square sm:aspect-auto overflow-hidden">
                  <img src={spot.image} alt={spot.product} className="absolute inset-0 w-full h-full object-cover warm-tone" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F1411]/30" />
                </div>
                <div className="p-7 sm:p-9 flex flex-col justify-center">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#D3AA66]">{spot.cat}</span>
                  <h3 className="font-display font-bold uppercase text-xl sm:text-2xl text-[#F5F1E8] mt-2 leading-tight">
                    {spot.product}
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {spot.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-2.5 text-sm text-[#F5F1E8]/65">
                        <Check size={15} className="text-[#B4863C] mt-0.5 shrink-0" /> {spec}
                      </li>
                    ))}
                  </ul>
                  <a href={waLink(`Hello Nagpal's House of Beauty, I'm interested in the ${spot.product}. Please share pricing.`)}
                    target="_blank" rel="noreferrer" data-testid="selector-whatsapp-button"
                    className="mt-7 inline-flex items-center gap-2 bg-[#B4863C] text-[#0F1411] font-semibold text-sm px-6 py-3 hover:bg-[#D3AA66] transition-all hover:-translate-y-0.5 w-fit">
                    <MessageCircle size={16} /> Enquire on WhatsApp
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
