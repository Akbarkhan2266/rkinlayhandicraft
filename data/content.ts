import {
  ExhibitionPiece,
  FaqItem,
  ProcessStep,
  ExcellencePoint,
  ArchivalEdition,
  StatItem,
} from "@/types";

export const IMAGES = {
  floor:
    "/home/luxury_editorial_architecture_photograph_of_an_opulent_white_makrana_marble.png",
  table:
    "/home/luxury_interior_photography_of_an_exquisite_handcrafted_round_white_marble.png",
  stairs:
    "/home/architectural_photograph_of_a_sculptural_modern_luxury_staircase_with_pristine.png",
  wall:
    "/home/high_end_interior_design_photograph_of_an_ornamental_handcrafted_marble_wall.png",
  working: "/home/working.png",
};

export const STAT_ITEMS: StatItem[] = [
  {
    value: "30+",
    label: "Catalogue Pieces",
    subtext: "Curated architectural editions",
  },
  {
    value: "04",
    label: "Core Disciplines",
    subtext: "Floors, Tables, Stairs, Walls",
  },
  {
    value: "Agra",
    label: "India Atelier",
    subtext: "Taj corridor master carvers",
  },
  {
    value: "100%",
    label: "Hand Inlay",
    subtext: "Zero synthetic automation",
    isSecondary: true,
  },
];

export const EXHIBITION_PIECES: ExhibitionPiece[] = [
  {
    id: "1",
    slug: "celestial-banquet-table",
    category: "TABLE",
    title: "Imperial Floral Inlay Dining Table",
    spec: '48" Round • Makrana & Malachite',
    desc: "Chiseled with lapis lazuli and genuine carnelian petals on pure white marble.",
    price: "₹48,000 onwards",
    image: IMAGES.table,
  },
  {
    id: "2",
    slug: "palace-medallion",
    category: "FLOOR",
    title: "Palatial Medallion Marble Flooring",
    spec: "Grand Foyer • Bespoke Scale",
    desc: "Seamless large-format marble surface engineered for villas and royal halls.",
    price: "₹1,500 / sq. ft.",
    image: IMAGES.floor,
  },
  {
    id: "3",
    slug: "helical-staircase-risers",
    category: "STAIRS",
    title: "Lapidary Gemstone Riser Staircase",
    spec: "Helical Suite • Lapis & Jasper",
    desc: "Individual step risers inlaid with continuous interlocking arabesque bands.",
    price: "₹1,200 / sq. ft.",
    image: IMAGES.stairs,
  },
  {
    id: "4",
    slug: "vase-imperial-panel",
    category: "WALL",
    title: "Agra Fort Botanical Wall Panel",
    spec: "6x3 ft • Belgian Black & Mother of Pearl",
    desc: "Intricate floral vase motif framed by contrasting Belgian black marble borders.",
    price: "₹1,200 / sq. ft.",
    image: IMAGES.wall,
  },
  {
    id: "5",
    slug: "octagonal-pietra-dura-table",
    category: "TABLE",
    title: "Octagonal Pietra Dura Accent Table",
    spec: '24" Octagonal • Coral & Jade',
    desc: "Compact heirloom side table with concentric geometric starburst inlay.",
    price: "₹22,500 onwards",
    image: "/collections/octagonal_pietra_dura_table.jpg",
  },
  {
    id: "6",
    slug: "octagonal-floor-border",
    category: "FLOOR",
    title: "Geometric Border Marble Floor Inlay",
    spec: "Border Inlay • Black Marble & Onyx",
    desc: "Linear architectural perimeter borders tailored for gallery corridors.",
    price: "₹1,500 / sq. ft.",
    image: "/collections/octagonal_floor_border.jpg",
  },
  {
    id: "7",
    slug: "mughal-arch-alcove",
    category: "WALL",
    title: "Belgian Black Botanical Niche Panel",
    spec: "Recessed Niche • Turquoise & Agate",
    desc: "High-contrast black marble panel with iridescent floral bouquet.",
    price: "₹1,200 / sq. ft.",
    image: "/collections/mughal_arch_alcove.jpg",
  },
  {
    id: "8",
    slug: "lotus-vine-risers",
    category: "STAIRS",
    title: "Sculptural Marble Spiral Tread Detail",
    spec: "Curved Riser • Malachite Ribbon",
    desc: "Compound curves with continuous gemstone inlay across complex transitions.",
    price: "₹1,200 / sq. ft.",
    image: "/collections/lotus_vine_risers.jpg",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "SELECT",
    desc: "Virgin Makrana marble blocks paired with ethically sourced genuine lapis lazuli, malachite, onyx, and mother of pearl.",
    badge: "Mineral Provenance",
  },
  {
    step: "02",
    title: "DESIGN",
    desc: "Geometric balance diagrams meticulously traced and transferred directly onto the stone ground with natural red ochre ink.",
    badge: "Geometric Cartography",
  },
  {
    step: "03",
    title: "LAPIDARY CUT",
    desc: "Master artisans shape each petal on manual emery wheels, grading mineral contours until they fit with zero gap.",
    badge: "0.05mm Tolerance",
  },
  {
    step: "04",
    title: "CARVE & INLAY",
    desc: "Cavities are excavated with fine steel chisels into the marble face. Heated stone adhesive permanently seats each jewel.",
    badge: "Permanent Fusion",
  },
  {
    step: "05",
    title: "BURNISH",
    desc: "Multi-day wet sanding using river sand and agate stones produces a glass-smooth, uninterrupted monolithic luster.",
    badge: "Mirror Luster",
  },
];

export const EXCELLENCE_POINTS: ExcellencePoint[] = [
  {
    index: "01 / ARTISAN LINEAGE",
    title: "Traditional Agra Craftsmanship",
    desc: "Our master artisans trace their lineage through generations of lapidaries who preserved the imperial decorative arts of the Taj Mahal corridor.",
  },
  {
    index: "02 / ZERO-TOLERANCE JOINERY",
    title: "Micro-Tolerant Handcrafted Detail",
    desc: "Zero visible cement seams or grout lines. Stones are precision-fitted edge-to-edge for an imperceptible transition when touched by hand.",
  },
  {
    index: "03 / ARCHITECTURAL CUSTOMIZATION",
    title: "Bespoke Blueprint Integration",
    desc: "We work directly from CAD and Revit blueprints provided by interior designers, adjusting medallion scale, stone hues, and border geometries to your room proportions.",
  },
  {
    index: "04 / UNCOMPROMISED RAW MATERIALS",
    title: "Authentic Natural Marble & Gemstones",
    desc: "No dyed composites, acrylic pastes, or simulated stones. Every petal is authentic mineral crystal—guaranteeing colors that never fade over centuries.",
  },
  {
    index: "05 / GENERATIONAL DURABILITY",
    title: "Engineered for Generational Longevity",
    desc: "High-density marble sealed with breathable penetrating fluoropolymer treatments, preserving moisture resistance for luxury residential and hospitality use.",
  },
];

export const ARCHIVAL_EDITIONS: ArchivalEdition[] = [
  {
    id: "1",
    slug: "celestial-banquet-table",
    category: "TABLE",
    title: "Royal Floral Inlay Table",
    desc: "Concentric floral border in Malachite & Carnelian.",
    price: "₹24,000 onwards",
    image: IMAGES.table,
  },
  {
    id: "2",
    slug: "octagonal-floor-border",
    category: "FLOOR",
    title: "Geometric Marble Floor",
    desc: "Modular interlocking diamond tessellation.",
    price: "₹1,500 / sq. ft.",
    image: "/collections/octagonal_floor_border.jpg",
  },
  {
    id: "3",
    slug: "vase-imperial-panel",
    category: "WALL",
    title: "Classic Inlay Wall Panel",
    desc: "Mughal arch framing with mother-of-pearl blossom.",
    price: "₹1,200 / sq. ft.",
    image: IMAGES.wall,
  },
  {
    id: "4",
    slug: "grand-gallery-runner",
    category: "FLOOR",
    title: "Lapis Lazuli Chevron Border",
    desc: "Continuous room border for transitions and hallways.",
    price: "₹1,500 / sq. ft.",
    image: "/collections/grand_gallery_runner.jpg",
  },
  {
    id: "5",
    slug: "palatial-white-console",
    category: "TABLE",
    title: "Mughal Crest Console",
    desc: "Foyer console with authentic imperial motif.",
    price: "₹36,000 onwards",
    image: "/collections/palatial_white_console.jpg",
  },
  {
    id: "6",
    slug: "lotus-vine-risers",
    category: "STAIRS",
    title: "Illuminated Stair Landing",
    desc: "Integrated circular landing with back-lit gemstone edge.",
    price: "₹1,200 / sq. ft.",
    image: "/collections/lotus_vine_risers.jpg",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Can I order a custom marble inlay design?",
    answer:
      "Yes. Over 70% of our production consists of completely bespoke commissions. You can send us reference sketches, architect CAD files, or Pantone swatches, and we will formulate stone mockups for your approval prior to chiseling.",
  },
  {
    question: "How is the final price calculated?",
    answer:
      "Pricing depends on three criteria: base marble type (e.g., Makrana White vs. Belgian Black), density of stone petals per square foot, and the gemstone types selected (genuine Afghan Lapis Lazuli and Malachite versus Onyx or Agate).",
  },
  {
    question: "Do you provide worldwide shipping and on-site installation?",
    answer:
      "Yes. All pieces are packed in ISPM-15 export-certified shock-absorbent wooden crates with insurance. For complex palatial floors and stairs, master craftsmen from our Agra workshop travel to conduct on-site seamless installation.",
  },
  {
    question: "How long does a custom architectural commission take?",
    answer:
      "A standard 36\" dining table takes 4 to 6 weeks. Complete palatial floor suites or full staircase assemblies typically require 8 to 14 weeks depending on the square footage and intricacy of the floral motifs.",
  },
  {
    question: "Can I enquire and share floorplans through WhatsApp?",
    answer:
      "Yes, our WhatsApp concierge operates directly with our senior lapidary director. You can instantly share PDF blueprints, site photos, or design references to receive stone estimates within 24 hours.",
  },
];
