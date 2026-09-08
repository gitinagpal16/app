import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { CATEGORIES, PRODUCTS_BY_CATEGORY, scrollToId, waLink } from "../data/content";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = CATEGORIES.find((c) => c.id === categoryId);
  const products = PRODUCTS_BY_CATEGORY[categoryId] || [];

  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [categoryId]);

  const goCategories = () => {
    navigate("/");
    setTimeout(() => scrollToId("#all-categories"), 500);
  };

  if (!category) {
    return (
      <main className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-6 text-center" data-testid="category-not-found">
        <h1 className="font-display font-bold uppercase text-2xl text-[#F5F1E8]">Category not found</h1>
        <Link to="/" data-testid="category-not-found-home-link" className="text-[#D3AA66] border-b border-[#B4863C] pb-1 text-sm">
          Back to home
        </Link>
      </main>
    );
  }

  return (
    <main data-testid="category-page">
      <section className="relative h-[52vh] min-h-[380px] flex items-end overflow-hidden">
        <motion.img
          key={category.id}
          src={category.image}
          alt={category.name}
          initial={{ scale: 1.12, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover warm-tone"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1411] via-[#0F1411]/50 to-[#0F1411]/35" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pb-12 w-full">
          <button onClick={goCategories} data-testid="category-back-link"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#F5F1E8]/60 hover:text-[#D3AA66] transition-colors mb-5">
            <ArrowLeft size={14} /> All categories
          </button>
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#D3AA66] font-semibold mb-2">{category.count}</p>
          <h1 className="font-display font-extrabold uppercase tracking-tight text-[#F5F1E8] text-3xl sm:text-5xl lg:text-6xl" data-testid="category-title">
            {category.name}
          </h1>
          <p className="text-[#F5F1E8]/60 mt-3 max-w-xl text-sm sm:text-base">{category.desc}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" data-testid="category-products-grid">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 0.08}>
                <article data-testid={`category-product-${i}`}
                  className="group border border-[#B4863C]/15 bg-[#141B16] hover:border-[#B4863C]/45 transition-colors duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.name}
                      className="w-full h-full object-cover warm-tone transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg text-[#F5F1E8]">{p.name}</h3>
                    <p className="text-[#F5F1E8]/45 text-xs mt-2 italic">{p.note}</p>
                    <a href={waLink(`Hello Nagpal's House of Beauty, I'd like a quote for the ${p.name} (${category.name}).`)}
                      target="_blank" rel="noreferrer" data-testid={`category-product-enquire-${i}`}
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

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="border border-[#B4863C]/25 bg-[#1C2B22]/60 px-7 sm:px-12 py-10 sm:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <h2 className="font-display font-bold uppercase tracking-tight text-[#F5F1E8] text-xl sm:text-3xl">
                Need {category.name.toLowerCase()} in bulk?
              </h2>
              <p className="text-[#F5F1E8]/55 text-sm mt-2 max-w-md">
                Full-salon fit-outs and made-to-order runs — same-day quote on WhatsApp.
              </p>
            </div>
            <a href={waLink(`Hello Nagpal's House of Beauty, I'd like to discuss a bulk order of ${category.name}.`)}
              target="_blank" rel="noreferrer" data-testid="category-bulk-whatsapp-cta"
              className="inline-flex items-center gap-3 bg-[#B4863C] text-[#0F1411] font-display font-bold uppercase tracking-[0.15em] text-sm px-8 py-4 hover:bg-[#D3AA66] transition-all hover:-translate-y-1">
              <MessageCircle size={17} /> Get a quote
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
