const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const WHATSAPP_NUMBER = "919876543210";
export const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const scrollToId = (selector) => {
  const el = document.querySelector(selector);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const CONTACT = {
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "hello@nagpalshouseofbeauty.in",
  instagram: "@nagpalshouseofbeauty",
  instagramUrl: "https://www.instagram.com/nagpalshouseofbeauty",
  address: "Kirti Nagar Furniture District, New Delhi",
};

export const HERO_IMAGE = img("1585747860715-2ba37e788b70", 2400);

export const CATEGORIES = [
  {
    id: "styling-chairs",
    name: "Styling Chairs",
    count: "24 designs",
    desc: "Hydraulic bases, sculpted seating, brass-detailed finishes.",
    image: img("1706629503650-cade709d15e3"),
  },
  {
    id: "wash-units",
    name: "Shampoo & Wash Units",
    count: "12 designs",
    desc: "Reclining backwash units with deep ceramic basins.",
    image: img("1675034743433-bdc9aee1cafc"),
  },
  {
    id: "workstations",
    name: "Workstations & Mirrors",
    count: "18 designs",
    desc: "LED-framed mirrors and full styling stations.",
    image: img("1706629505300-168aa1604912"),
  },
  {
    id: "trolleys",
    name: "Trolleys & Storage",
    count: "15 designs",
    desc: "Heavy-duty rolling storage built for daily salon grind.",
    image: img("1633681926035-ec1ac984418a"),
  },
  {
    id: "pedi-spa",
    name: "Pedicure & Spa",
    count: "9 designs",
    desc: "Plush thrones and spa beds for long rituals.",
    image: img("1585611647522-ce9aebe1a467"),
  },
];

export const SPOTLIGHTS = [
  {
    cat: "Styling Chairs",
    product: "Regal Hydraulic Styling Chair",
    image: img("1605702098590-d552a98dc93d", 1400),
    specs: ["Heavy-duty hydraulic pump", "360° lockable rotation", "Premium leatherette upholstery"],
  },
  {
    cat: "Shampoo & Wash Units",
    product: "Cascade Reclining Backwash",
    image: img("1675034743433-bdc9aee1cafc", 1400),
    specs: ["Deep tilt ceramic basin", "Reclining comfort seat", "Plumbing-ready fitting"],
  },
  {
    cat: "Workstations & Mirrors",
    product: "Lumière LED Workstation",
    image: img("1521590832167-7bcbfaa6381f", 1400),
    specs: ["Warm-white LED frame", "Full-height mirror", "Integrated tool storage"],
  },
  {
    cat: "Trolleys & Storage",
    product: "Atelier Rolling Trolley",
    image: img("1621605815971-fbc98d665033", 1400),
    specs: ["5-tier steel frame", "Silent-glide castors", "Heat-safe appliance top"],
  },
  {
    cat: "Pedicure & Spa",
    product: "Velvet Pedi Throne",
    image: img("1585611647522-ce9aebe1a467", 1400),
    specs: ["Reclining massage back", "Pull-out spa basin", "Rich espresso finish"],
  },
];

export const BEST_SELLERS = [
  { name: "Regal Hydraulic Styling Chair", cat: "Styling Chairs", note: "Bestseller · bulk pricing available", image: img("1605702098590-d552a98dc93d", 900) },
  { name: "Cascade Backwash Unit", cat: "Wash Units", note: "Plumbing-ready · ceramic basin", image: img("1675034743433-bdc9aee1cafc", 900) },
  { name: "Lumière LED Workstation", cat: "Workstations", note: "Made-to-order finishes", image: img("1521590832167-7bcbfaa6381f", 900) },
  { name: "Heritage Barber Chair", cat: "Barber Line", note: "Classic build · brass detailing", image: img("1503951914875-452162b0f3f1", 900) },
  { name: "Atelier Rolling Trolley", cat: "Trolleys", note: "5-tier · silent castors", image: img("1621605815971-fbc98d665033", 900) },
  { name: "Velvet Pedi Throne", cat: "Pedicure & Spa", note: "Espresso leatherette", image: img("1585611647522-ce9aebe1a467", 900) },
];

export const PARTNERS = [
  "VLCC", "Looks Salon", "Affinity", "Toni & Guy India",
  "BBlunt", "Jawed Habib", "Geetanjali Salon", "Naturals",
];

export const GALLERY = [
  { image: img("1585611647522-ce9aebe1a467", 1000), label: "Espresso leather seating", tall: true },
  { image: img("1605797063353-4cbcb6027f2c", 1000), label: "Polished wood & brass" },
  { image: img("1605797062177-0dfba57c72fe", 1000), label: "Warm lounge finishes" },
  { image: img("1605702098590-d552a98dc93d", 1000), label: "Heritage barber line", tall: true },
  { image: img("1487412947147-5cebf100ffc2", 1000), label: "Vanity details" },
  { image: img("1512496015851-a90fb38ba796", 1000), label: "Colour & care station" },
];

export const INSTAGRAM_GRID = [
  img("1560066984-138dadb4c035", 800),
  img("1562322140-8baeececf3df", 800),
  img("1559599101-f09722fb4948", 800),
  img("1519699047748-de8e457a634e", 800),
  img("1595476108010-b4d1f102b1b1", 800),
  img("1522335789203-aabd1fc54bc9", 800),
];
