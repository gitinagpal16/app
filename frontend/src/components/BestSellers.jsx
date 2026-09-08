import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { BEST_SELLERS, waLink } from "../data/content";

export const BestSellers = () => (
  <section id="products" className="py-20 sm:py-28" data-testid="products-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal className="flex items-end justify-between gap-6 flex-wrap mb-12">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#B4863C] font-semibold mb-3">Best sellers</p>
          <h2 className="font-display font-bold uppercase tracking-tight text-2xl sm:text-4xl text-[#F5F1E8]">
            Pieces salons reorder
          </h2>
        </div>
        <p className="text-[#F5F1E8]/50 text-sm max-w-xs">Retail and bulk pricing — message us on WhatsApp for a same-day quote.</p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {BEST_SELLERS.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.08}>
            <article data-testid={`product-card-${i}`}
              className="group border border-[#B4863C]/15 bg-[#141B16] hover:border-[#B4863C]/45 transition-colors duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name}
                  className="w-full h-full object-cover warm-tone transition-transform duration-700 group-hover:scale-108" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1411]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D3AA66]">{p.cat}</span>
                <h3 className="font-display font-bold text-lg text-[#F5F1E8] mt-1.5">{p.name}</h3>
                <p className="text-[#F5F1E8]/45 text-xs mt-2 italic">{p.note}</p>
                <a href={waLink(`Hello Nagpal's House of Beauty, I'd like a quote for the ${p.name}.`)}
                  target="_blank" rel="noreferrer" data-testid={`product-enquire-${i}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm text-[#D3AA66] border-b border-[#B4863C]/50 pb-0.5 hover:text-[#F5F1E8] hover:border-[#F5F1E8] transition-colors">
                  <MessageCircle size={14} /> Enquire on WhatsApp
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
