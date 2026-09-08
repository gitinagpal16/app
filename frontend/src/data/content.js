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
  {
    id: "spa-furniture",
    name: "Spa Furniture",
    count: "11 designs",
    desc: "Spa beds, massage tables and treatment loungers.",
    image: img("1544161515-4ab6ce6db874"),
  },
];

export const PRODUCTS_BY_CATEGORY = {
  "styling-chairs": [
    { name: "Regal Hydraulic Styling Chair", note: "Heavy-duty pump · 360° lockable rotation", image: img("1706629503650-cade709d15e3", 900) },
    { name: "Heritage Barber Chair", note: "Classic build · brass detailing", image: img("1503951914875-452162b0f3f1", 900) },
    { name: "Monarch Styling Chair", note: "Sculpted seat · chrome base", image: img("1521590832167-7bcbfaa6381f", 900) },
    { name: "Vintage Brass Barber Chair", note: "Espresso leatherette · recline lock", image: img("1605702098590-d552a98dc93d", 900) },
    { name: "Contour Salon Chair", note: "Ergonomic back · wipe-clean upholstery", image: img("1605797063353-4cbcb6027f2c", 900) },
    { name: "Imperia Styling Chair", note: "Low-profile base · salon-floor favourite", image: img("1585747860715-2ba37e788b70", 900) },
  ],
  "wash-units": [
    { name: "Cascade Reclining Backwash", note: "Deep tilt ceramic basin · plumbing-ready", image: img("1675034743433-bdc9aee1cafc", 900) },
    { name: "Orbit Wash Unit", note: "Compact footprint · single seat", image: img("1633681926035-ec1ac984418a", 900) },
    { name: "Zenith Shampoo Station", note: "Recliner seat · adjustable neck rest", image: img("1560066984-138dadb4c035", 900) },
    { name: "Pureflow Backwash Duo", note: "Twin basins for high-volume floors", image: img("1562322140-8baeececf3df", 900) },
    { name: "Lotus Wash Lounge", note: "Full-length lounge · spa-grade comfort", image: img("1580618672591-eb180b1a973f", 900) },
  ],
  "workstations": [
    { name: "Lumière LED Workstation", note: "Warm-white LED frame · full-height mirror", image: img("1706629505300-168aa1604912", 900) },
    { name: "Halo Mirror Station", note: "Round halo mirror · tool shelf", image: img("1521590832167-7bcbfaa6381f", 900) },
    { name: "Atelier Double Station", note: "Two seats · shared storage island", image: img("1600948836101-f9ffda59d250", 900) },
    { name: "Noir Styling Console", note: "Matte black · minimal footprint", image: img("1585747860715-2ba37e788b70", 900) },
    { name: "Gallery Mirror Unit", note: "Floor-to-ceiling mirror · brass trim", image: img("1560066984-138dadb4c035", 900) },
  ],
  "trolleys": [
    { name: "Atelier Rolling Trolley", note: "5-tier steel · silent-glide castors", image: img("1621605815971-fbc98d665033", 900) },
    { name: "Kubico Storage Cart", note: "Drawer + shelf combo · lockable wheels", image: img("1633681926035-ec1ac984418a", 900) },
    { name: "Colour Bar Trolley", note: "Chemical-safe top · tint bowl holders", image: img("1512496015851-a90fb38ba796", 900) },
    { name: "Steelframe Utility Cart", note: "Heat-safe top for dryers & irons", image: img("1522335789203-aabd1fc54bc9", 900) },
    { name: "Compact Salon Trolley", note: "Slim profile for tight stations", image: img("1600948836101-f9ffda59d250", 900) },
  ],
  "pedi-spa": [
    { name: "Velvet Pedi Throne", note: "Reclining back · pull-out spa basin", image: img("1585611647522-ce9aebe1a467", 900) },
    { name: "Empress Mani-Pedi Station", note: "Dual service · manicure shelf", image: img("1605797062177-0dfba57c72fe", 900) },
    { name: "Repose Foot Spa Chair", note: "Deep-cushion · pipeless jet basin", image: img("1605797063353-4cbcb6027f2c", 900) },
    { name: "Cloud Spa Lounger", note: "Full recline · plush upholstery", image: img("1544161515-4ab6ce6db874", 900) },
    { name: "Suede Pedicure Sofa", note: "Two-seater · espresso finish", image: img("1605702098590-d552a98dc93d", 900) },
  ],
  "spa-furniture": [
    { name: "Serenity Spa Bed", note: "Hydraulic lift · face cradle", image: img("1544161515-4ab6ce6db874", 900) },
    { name: "Aura Facial Bed", note: "3-section adjust · salon-grade vinyl", image: img("1570172619644-dfd03ed5d881", 900) },
    { name: "Tranquil Massage Table", note: "Solid wood frame · 200kg rated", image: img("1600334129128-685c5582fd35", 900) },
    { name: "Lotus Treatment Bed", note: "Heated top option · storage shelf", image: img("1540555700478-4be289fbecef", 900) },
    { name: "Halo Spa Lounger", note: "Zero-gravity recline · espresso base", image: img("1605797062177-0dfba57c72fe", 900) },
  ],
};

export const PARTNERS = [
  "VLCC", "Affinity", "Head Masters",
  "Lemon Tree", "Marriot", "Looks",
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
