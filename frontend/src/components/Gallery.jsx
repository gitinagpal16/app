import { Reveal } from "./Reveal";
import { GALLERY } from "../data/content";

export const Gallery = () => (
  <section className="py-20 sm:py-28" data-testid="gallery-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal className="mb-12">
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#B4863C] font-semibold mb-3">Material & finish</p>
        <h2 className="font-display font-bold uppercase tracking-tight text-2xl sm:text-4xl text-[#F5F1E8]">
          Warm woods, brass, espresso leather
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] sm:auto-rows-[260px]">
        {GALLERY.map((g, i) => (
          <Reveal key={g.label} delay={(i % 3) * 0.07} className={g.tall ? "row-span-2" : ""}>
            <figure data-testid={`gallery-item-${i}`}
              className="relative w-full h-full overflow-hidden group border border-[#B4863C]/15">
              <img src={g.image} alt={g.label}
                className="w-full h-full object-cover warm-tone transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#3A281E]/25 mix-blend-multiply" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0F1411]/90 to-transparent">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#D3AA66]">{g.label}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
