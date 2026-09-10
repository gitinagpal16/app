import { Instagram } from "lucide-react";
import { Reveal } from "./Reveal";
import { CONTACT, INSTAGRAM_GRID } from "../data/content";

export const InstagramSection = () => (
  <section className="py-20 sm:py-28 bg-[#141B16] border-y border-[#B4863C]/15" data-testid="instagram-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal className="text-center mb-14">
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#B4863C] font-semibold mb-4">On the floor, every week</p>
        <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" data-testid="instagram-handle-link"
          className="font-display font-extrabold uppercase tracking-tight text-[#F5F1E8] hover:text-[#D3AA66] transition-colors whitespace-nowrap"
          style={{ fontSize: "clamp(1.05rem, 3.4vw, 3.25rem)" }}>
          {CONTACT.instagram}
        </a>
        <p className="text-[#F5F1E8]/50 text-sm mt-4 max-w-md mx-auto">
          Real installs, salon floor setups and new arrivals — follow along.
        </p>
        <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" data-testid="instagram-follow-button"
          className="mt-8 inline-flex items-center gap-2.5 bg-[#B4863C] text-[#0F1411] font-display font-bold uppercase tracking-[0.15em] text-sm px-8 py-4 hover:bg-[#D3AA66] transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(180,134,60,0.35)]">
          <Instagram size={17} /> Follow on Instagram
        </a>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {INSTAGRAM_GRID.map((src, i) => (
          <Reveal key={src} delay={i * 0.05}>
            <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" data-testid={`instagram-post-${i}`}
              className="relative block aspect-square overflow-hidden group border border-[#B4863C]/15">
              <img src={src} alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover warm-tone transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#0F1411]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={22} className="text-[#D3AA66]" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
