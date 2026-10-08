export type CollectionCategory =
  | "ALL"
  | "FLOOR"
  | "TABLE"
  | "STAIRS"
  | "TEMPLE"
  | "WALLS"
  | "MARBLE";

export interface CategoryTab {
  id: CollectionCategory;
  label: string;
  count: number;
}

export interface DimensionOption {
  label: string;
  sublabel: string;
  capacity?: string;
  isStandard?: boolean;
}

export interface MaterialOption {
  name: string;
  subtext: string;
  colorHex: string;
  isStandard?: boolean;
}

export interface GalleryImage {
  url: string;
  label: string;
}

export interface CollectionItem {
  id: string;
  category: CollectionCategory;
  categoryLabel: string;
  archiveRecord: string;
  editionBadge: string;
  badge: string;
  title: string;
  italicSubtitle: string;
  description: string;
  spec: string;
  price: string;
  priceNote: string;
  image: string;
  gallery: GalleryImage[];
  dimensions: DimensionOption[];
  materials: MaterialOption[];
  bulletPoints: string[];
  isLarge?: boolean;
  inquiryMessage: string;
}

export const CATEGORY_TABS: CategoryTab[] = [
  { id: "ALL", label: "Show All", count: 15 },
  { id: "FLOOR", label: "Floors", count: 3 },
  { id: "TABLE", label: "Tables", count: 3 },
  { id: "STAIRS", label: "Stairs", count: 2 },
  { id: "TEMPLE", label: "Temples", count: 3 },
  { id: "WALLS", label: "Walls", count: 2 },
  { id: "MARBLE", label: "Marble & Slabs", count: 2 },
];

export const COLLECTION_ITEMS: CollectionItem[] = [
  // 1. FLOOR - Taj Mahal Imperial Medallion
  {
    id: "palace-medallion",
    category: "FLOOR",
    categoryLabel: "Floors & Medallions",
    archiveRecord: "PET-BA-FLR-001",
    editionBadge: "ROYAL PALACE EDITION 01",
    badge: "ROYAL PALACE MEDALLION",
    title: "The Taj Mahal Imperial Medallion",
    italicSubtitle:
      "A grand palatial rotunda floor medallion featuring 48,000+ hand-chiseled semi-precious stone petals in pure Makrana white marble.",
    description:
      "Engineered for luxury estate rotundas, palatial foyers, and royal reception galleries. Each floral vine is precision-calibrated to expand harmoniously from the central lotus starburst, seamlessly integrated with surrounding field marble.",
    spec: "SCALE: BESPOKE COMMISSION",
    price: "₹1,500 / sq. ft.",
    priceNote: "Scales with perimeter radius, stone selection, and site radius integration.",
    image:
      "/home/luxury_editorial_architecture_photograph_of_an_opulent_white_makrana_marble.png",
    gallery: [
      {
        url: "/home/luxury_editorial_architecture_photograph_of_an_opulent_white_makrana_marble.png",
        label: "01. PALACE PERSPECTIVE",
      },
      {
        url: "/home/working.png",
        label: "02. LAPIDARY CRAFT",
      },
      {
        url: "/contact/heritage_studio_drafting.jpg",
        label: "03. CARTOON DRAFTING",
      },
    ],
    dimensions: [
      {
        label: '12 FT (365 CM)',
        sublabel: "Foyer Grandeur",
        capacity: "Ideal for 2-storey rotunda entryways",
        isStandard: true,
      },
      {
        label: '18 FT (550 CM)',
        sublabel: "Palatial Scale",
        capacity: "Engineered for monumental reception halls",
      },
    ],
    materials: [
      {
        name: "MAKRANA PURE WHITE",
        subtext: "98.6% Calcite - Taj Mahal Belt",
        colorHex: "#fcf9f2",
        isStandard: true,
      },
      {
        name: "NERO MARQUINA / BLACK",
        subtext: "Deep Crystalline Satin Luster",
        colorHex: "#1c1b1b",
      },
    ],
    bulletPoints: [
      "100% natural, untreated gemstones with zero synthetic acrylic fillers.",
      "Micro-tolerance 0.1mm chiseled channel fit for perpetual stability.",
      "Lead time: 14 to 18 weeks from quarry block extraction to hand-buffing.",
    ],
    isLarge: true,
    inquiryMessage:
      "Hello%20RK%20Inlay%2C%20I%20am%20interested%20in%20The%20Taj%20Mahal%20Imperial%20Medallion%20floor%20inlay.",
  },

  // 2. TABLE - The Celestial Wreath Banquet Table
  {
    id: "celestial-banquet-table",
    category: "TABLE",
    categoryLabel: "Centerpiece Furniture",
    archiveRecord: "PET-BA-TBL-009",
    editionBadge: "MASTERPIECE EDITION 07",
    badge: "BANQUET TABLE",
    title: "The Celestial Wreath Banquet Table",
    italicSubtitle:
      "A monolithic Makrana white marble table articulated with a continuous 36-flower garland in certified lapis lazuli and emerald malachite.",
    description:
      "A transcendent architectural dining centerpiece chiseled from a single flawless quarry slab of Makrana marble. The undulating perimeter garland features 24,000 hand-shaped gemstone petals, each individual petal beveled at microscopically tuned angles.",
    spec: "DIAMETER: 72 INCHES",
    price: "₹99,000",
    priceNote: "Commission fee scales strictly with custom radial dimensions, edge-profile profiling, and private crest incorporation.",
    image:
      "/home/luxury_interior_photography_of_an_exquisite_handcrafted_round_white_marble.png",
    gallery: [
      {
        url: "/home/luxury_interior_photography_of_an_exquisite_handcrafted_round_white_marble.png",
        label: "01. CENTERPIECE OVERVIEW",
      },
      {
        url: "/home/working.png",
        label: "02. CHISEL CRAFT",
      },
      {
        url: "/collections/raw_gemstones_lapidary.jpg",
        label: "03. GEMSTONE ACCENTS",
      },
    ],
    dimensions: [
      {
        label: '180 CM (71")',
        sublabel: "Standard",
        capacity: "Optimal for 8 to 10 Dining Seats",
        isStandard: true,
      },
      {
        label: '210 CM (82")',
        sublabel: "Palatial",
        capacity: "Grand scale for 10 to 12 Dining Seats",
      },
    ],
    materials: [
      {
        name: "MAKRANA PURE WHITE",
        subtext: "98.6% Calcite - Taj Mahal Belt",
        colorHex: "#fcf9f2",
        isStandard: true,
      },
      {
        name: "NERO MARQUINA / BLACK",
        subtext: "Deep Crystalline Satin Luster",
        colorHex: "#1c1b1b",
      },
    ],
    bulletPoints: [
      "100% natural, untreated gemstones with zero synthetic acrylic fillers.",
      "Micro-tolerance 0.1mm chiseled channel fit for perpetual stability.",
      "Lead time: 10 to 14 weeks from quarry block extraction to hand-buffing.",
    ],
    isLarge: true,
    inquiryMessage:
      "Hello%20RK%20Inlay%2C%20I%20would%20like%20to%20inquire%20about%20The%20Celestial%20Wreath%20Banquet%20Table.",
  },

  // 3. WALLS - Vase of the Imperial Garden Wall Panel
  {
    id: "vase-imperial-panel",
    category: "WALLS",
    categoryLabel: "Wall Panel & Niche",
    archiveRecord: "PET-BA-WAL-003",
    editionBadge: "CURATED EDITION 03",
    badge: "WALL PANEL & NICHE",
    title: "Vase of the Imperial Garden Wall Panel",
    italicSubtitle:
      "A dramatic Belgian black marble panel mounted with polychrome gemstone bouquets, Persian lapis florets, and genuine malachite vines.",
    description:
      "Inspired by the Pietra Dura alcoves of Agra Fort and the Taj Mahal cenotaph chamber. Inlaid into deep satin Belgian black marble to yield luminous contrast, framed by classic floral arch borders.",
    spec: "DIMENSIONS: 210CM × 110CM",
    price: "₹3,000 / sq. ft.",
    priceNote: "Available in custom framed heights for private salon focal walls.",
    image:
      "/home/high_end_interior_design_photograph_of_an_ornamental_handcrafted_marble_wall.png",
    gallery: [
      {
        url: "/home/high_end_interior_design_photograph_of_an_ornamental_handcrafted_marble_wall.png",
        label: "01. PANEL IN SITU",
      },
      {
        url: "/home/working.png",
        label: "02. LAPIDARY CUTTING",
      },
      {
        url: "/collections/raw_gemstones_lapidary.jpg",
        label: "03. STONE SELECTION",
      },
    ],
    dimensions: [
      {
        label: "210CM × 110CM",
        sublabel: "Salon Scale",
        capacity: "Standard vertical wall niche",
        isStandard: true,
      },
      {
        label: "280CM × 150CM",
        sublabel: "Gallery Scale",
        capacity: "Double-height wall installation",
      },
    ],
    materials: [
      {
        name: "BELGIAN BLACK MARBLE",
        subtext: "Deep Pitch Black Satin Ground",
        colorHex: "#141414",
        isStandard: true,
      },
      {
        name: "MAKRANA PURE WHITE",
        subtext: "Luminous Crystalline Purity",
        colorHex: "#fcf9f2",
      },
    ],
    bulletPoints: [
      "100% natural semi-precious stone inlays including malachite, carnelian & jasper.",
      "Flush mirror-polished finish seamlessly aligned with surrounding masonry.",
      "Lead time: 8 to 12 weeks with custom mounting cleats included.",
    ],
    isLarge: true,
    inquiryMessage:
      "Hello%20RK%20Inlay%2C%20I%20am%20interested%20in%20the%20Vase%20of%20the%20Imperial%20Garden%20wall%20panel.",
  },

  // 4. STAIRS - Imperial Helical Staircase Risers
  {
    id: "helical-staircase-risers",
    category: "STAIRS",
    categoryLabel: "Stairs & Risers",
    archiveRecord: "PET-BA-STR-012",
    editionBadge: "ARCHITECTURAL EDITION 12",
    badge: "GRAND HELICAL STAIRCASE",
    title: "Imperial Helical Staircase Risers",
    italicSubtitle:
      "Curved marble stair risers featuring continuous undulating arabesque bands chiseled with lapis lazuli and jasper.",
    description:
      "A transformative architectural commission for sweeping spiral staircases. Each riser is custom-curved to the precise radius of the staircase tread, carrying an uninterrupted flowing floral garland across all vertical steps.",
    spec: "SCALE: BESPOKE RUN",
    price: "₹5,000 / sq. ft.",
    priceNote: "Pricing calibrated to tread count, radius curvature, and stone complexity.",
    image:
      "/home/architectural_photograph_of_a_sculptural_modern_luxury_staircase_with_pristine.png",
    gallery: [
      {
        url: "/home/architectural_photograph_of_a_sculptural_modern_luxury_staircase_with_pristine.png",
        label: "01. HELICAL SWEEP",
      },
      {
        url: "/home/working.png",
        label: "02. RISER INLAY",
      },
    ],
    dimensions: [
      {
        label: "18-STEP SUITE",
        sublabel: "Standard Villa Flight",
        capacity: "Custom riser heights: 15-18cm",
        isStandard: true,
      },
      {
        label: "24-STEP SUITE",
        sublabel: "Grand Atrium Flight",
        capacity: "Helical continuous curve run",
      },
    ],
    materials: [
      {
        name: "MAKRANA PURE WHITE",
        subtext: "Durable Non-Yellowing Calcite",
        colorHex: "#fcf9f2",
        isStandard: true,
      },
    ],
    bulletPoints: [
      "Individually numbered stone risers dry-laid and pre-assembled prior to dispatch.",
      "0.1mm micro-tolerance flush joinery resisting structural foot traffic vibration.",
      "Lead time: 10 to 14 weeks from approved architectural template measurements.",
    ],
    isLarge: true,
    inquiryMessage:
      "Hello%20RK%20Inlay%2C%20I%20would%20like%20to%20inquire%20about%20the%20Imperial%20Helical%20Staircase%20Risers.",
  },

  // 5. TEMPLE - Bespoke Makrana Marble Home Mandir
  {
    id: "makrana-home-mandir",
    category: "TEMPLE",
    categoryLabel: "Sacred Architecture",
    archiveRecord: "PET-BA-TMP-005",
    editionBadge: "SACRED SANCTUM EDITION 05",
    badge: "HAND-CARVED MANDIR",
    title: "Bespoke Makrana Marble Home Mandir",
    italicSubtitle:
      "A complete hand-carved Makrana marble home temple shrine sculpted according to strict Shilpa Shastra and Vastu Vidya canonical proportions.",
    description:
      "Designed as an enduring family heirloom for sacred rituals. Crafted from dense virgin Makrana marble with zero open pores, making it impervious to ceremonial milk, turmeric, oil, and holy water. Features fluted columns, ornate domes, jali lattice screens, and gemstone floral spandrels.",
    spec: "DIMENSIONS: 6FT × 4FT × 8FT",
    price: "₹3,500 / sq. ft.",
    priceNote: "Customizable in scale, dome count, and deity sanctum configurations.",
    image: "/collections/bespoke_marble_mandir.jpg",
    gallery: [
      {
        url: "/collections/bespoke_marble_mandir.jpg",
        label: "01. SANCTUM SHRINE",
      },
      {
        url: "/collections/temple_sunburst_niche.jpg",
        label: "02. BACKWALL MANDALA",
      },
      {
        url: "/home/working.png",
        label: "03. CARVING ATELIER",
      },
    ],
    dimensions: [
      {
        label: "6FT × 4FT × 8FT",
        sublabel: "Villa Sanctum",
        capacity: "Triple dome with dual drawer altar",
        isStandard: true,
      },
      {
        label: "4FT × 3FT × 6FT",
        sublabel: "Apartment Sanctum",
        capacity: "Single dome with compact base",
      },
    ],
    materials: [
      {
        name: "VIRGIN MAKRANA WHITE",
        subtext: "98.6% Calcite Purity - Ritual-Proof",
        colorHex: "#fcf9f2",
        isStandard: true,
      },
    ],
    bulletPoints: [
      "Zero-porosity Makrana marble impervious to daily puja turmeric, oil & milk offerings.",
      "Vastu-compliant sanctum orientation and sacred geometric ratios.",
      "Includes hidden LED warm architectural lighting channels and brass bell fittings.",
    ],
    isLarge: true,
    inquiryMessage:
      "Hello%20RK%20Inlay%2C%20I%20would%20like%20to%20commission%20a%20Bespoke%20Makrana%20Marble%20Home%20Mandir.",
  },

  // 6. TEMPLE - Gayatri Sunburst Temple Backsplash
  {
    id: "gayatri-sunburst-niche",
    category: "TEMPLE",
    categoryLabel: "Puja Room Sanctum",
    archiveRecord: "PET-BA-TMP-008",
    editionBadge: "SACRED SANCTUM EDITION 08",
    badge: "SANCTUARY NICHE",
    title: "Gayatri Sunburst Temple Backsplash",
    italicSubtitle:
      "A radial solar mandala inlaid with yellow onyx, Mediterranean coral, and lustrous mother of pearl for puja sanctuaries.",
    description:
      "Harmonizes radiant sacred geometry with centuries-old Pietra Dura lapidary arts. Perfectly proportioned to form the focal altar backdrop behind sacred murtis, catching candlelight with mesmerizing optical depth.",
    spec: "SCALE: 5FT × 5FT PANEL",
    price: "₹3,500 / sq. ft.",
    priceNote: "Available in custom round and arched niche silhouettes.",
    image: "/collections/temple_sunburst_niche.jpg",
    gallery: [
      {
        url: "/collections/temple_sunburst_niche.jpg",
        label: "01. SUNBURST MANDALA",
      },
      {
        url: "/collections/bespoke_marble_mandir.jpg",
        label: "02. INTEGRATED SHRINE",
      },
    ],
    dimensions: [
      {
        label: "5FT × 5FT (150 CM)",
        sublabel: "Square Backsplash",
        capacity: "Standard altar niche focal point",
        isStandard: true,
      },
      {
        label: "6FT ROUND (180 CM)",
        sublabel: "Circular Medallion",
        capacity: "Grand temple hall wall installation",
      },
    ],
    materials: [
      {
        name: "MAKRANA PURE WHITE",
        subtext: "Translucent Calcite Grain",
        colorHex: "#fcf9f2",
        isStandard: true,
      },
    ],
    bulletPoints: [
      "Constructed with natural yellow onyx, coral, lapis lazuli, and mother-of-pearl.",
      "100% waterproof stone fusion that never degrades from incense smoke or ghee.",
      "Lead time: 6 to 9 weeks with custom rear mounting framework.",
    ],
    isLarge: true,
    inquiryMessage:
      "Hello%20RK%20Inlay%2C%20I%20am%20interested%20in%20the%20Gayatri%20Sunburst%20Temple%20Backsplash.",
  },

  // 7. TEMPLE - Divine Radha Krishna Inlay Mandir Panel
  {
    id: "radha-krishna-mandir-panel",
    category: "TEMPLE",
    categoryLabel: "Sacred Architecture",
    archiveRecord: "PET-BA-TMP-012",
    editionBadge: "DEVOTIONAL MASTERWORK 12",
    badge: "RADHA KRISHNA MANDIR PANEL",
    title: "Divine Radha Krishna Inlay Mandir Panel",
    italicSubtitle:
      "A celestial devotional wall panel chiseled in Makrana white marble, featuring divine Radha and Krishna in polychrome lapidary gemstones.",
    description:
      "Engineered as an heirloom altar backdrop for palatial home mandirs, sanctum niches, and puja rooms. Masterfully inlaid with natural lapis lazuli, malachite, turquoise, carnelian, and mother of pearl, capturing Radha and Krishna with bansuri flute and blossoming lotus florals.",
    spec: "DIMENSIONS: 4FT × 2.5FT PANEL",
    price: "₹3,00,000",
    priceNote: "Atelier commission fee includes sacred orientation consultation and hidden wall mounting brackets.",
    image: "/collections/radha_krishna_temple_inlay.jpg",
    gallery: [
      {
        url: "/collections/radha_krishna_temple_inlay.jpg",
        label: "01. SACRED COMPOSITION",
      },
      {
        url: "/collections/bespoke_marble_mandir.jpg",
        label: "02. TEMPLE INTEGRATION",
      },
      {
        url: "/collections/raw_gemstones_lapidary.jpg",
        label: "03. GEMSTONE SELECTION",
      },
    ],
    dimensions: [
      {
        label: "4FT × 2.5FT (120 × 75 CM)",
        sublabel: "Sanctum Altar Focal",
        capacity: "Ideal for central temple shrine backsplash",
        isStandard: true,
      },
      {
        label: "5FT × 3FT (150 × 90 CM)",
        sublabel: "Grand Mandir Scale",
        capacity: "Monumental puja room wall installation",
      },
    ],
    materials: [
      {
        name: "VIRGIN MAKRANA WHITE",
        subtext: "98.6% Calcite Purity - Ritual-Proof",
        colorHex: "#fcf9f2",
        isStandard: true,
      },
    ],
    bulletPoints: [
      "Zero-porosity Makrana white marble impervious to puja turmeric, sandalwood, ghee, and holy water.",
      "Natural semi-precious stone inlays including certified lapis lazuli, malachite, coral, and mother of pearl.",
      "Lead time: 6 to 8 weeks with custom shock-proof export wooden crating.",
    ],
    isLarge: true,
    inquiryMessage:
      "Hello%20RK%20Inlay%2C%20I%20am%20interested%20in%20commissioning%20the%20Divine%20Radha%20Krishna%20Inlay%20Mandir%20Panel%20priced%20at%20Rs%203%2C00%2C000.",
  },

  // 8. FLOOR - Agra Fort Octagonal Floor Border
  {
    id: "octagonal-floor-border",
    category: "FLOOR",
    categoryLabel: "Floors & Medallions",
    archiveRecord: "PET-BA-FLR-004",
    editionBadge: "ARCHIVAL EDITION 04",
    badge: "GEOMETRIC FLOOR INLAY",
    title: "Agra Fort Octagonal Floor Border",
    italicSubtitle:
      "An interlocking geometric strapwork border chiseled in green marble and black granite for gallery perimeters.",
    description:
      "Classic Mughal perimeter border featuring repeating starburst octagons and chevron dividers. Engineered to frame room perimeters and grand corridor walks.",
    spec: "WIDTH: 12 INCH / 18 INCH",
    price: "₹1,500 / sq. ft.",
    priceNote: "Supplied in interlocking calibrated linear tile lengths.",
    image: "/collections/octagonal_floor_border.jpg",
    gallery: [
      {
        url: "/collections/octagonal_floor_border.jpg",
        label: "01. FLOOR DETAIL",
      },
      {
        url: "/home/luxury_editorial_architecture_photograph_of_an_opulent_white_makrana_marble.png",
        label: "02. PALACE SETTING",
      },
      {
        url: "/home/working.png",
        label: "03. HAND CHISELING",
      },
    ],
    dimensions: [
      {
        label: '12" WIDTH',
        sublabel: "Standard Perimeter",
        isStandard: true,
      },
      {
        label: '18" WIDTH',
        sublabel: "Grand Corridor",
      },
    ],
    materials: [
      {
        name: "MAKRANA WHITE & NERO BLACK",
        subtext: "High-Contrast Geometry",
        colorHex: "#fcf9f2",
        isStandard: true,
      },
    ],
    bulletPoints: [
      "Precision waterjet pre-scribed and hand-chiseled by master craftsmen.",
      "Calibrated 18mm thickness for seamless flush lay with adjacent field stone.",
      "Lead time: 6 to 8 weeks depending on linear footage.",
    ],
    inquiryMessage:
      "Hello%20RK%20Inlay%2C%20I%20am%20interested%20in%20the%20Agra%20Fort%20Octagonal%20Floor%20Border.",
  },

  // 8. FLOOR - Grand Gallery Inlay Floor Runner
  {
    id: "grand-gallery-runner",
    category: "FLOOR",
    categoryLabel: "Floors & Medallions",
    archiveRecord: "PET-BA-FLR-007",
    editionBadge: "ARCHIVAL EDITION 07",
    badge: "CORRIDOR RUNNER",
    title: "Grand Gallery Inlay Floor Runner",
    italicSubtitle:
      "A linear hallway runner featuring repeating lotus vine medallions framed by Nero Marquina bands.",
    description:
      "Transforms elongated corridors and transition galleries into processional art spaces. Inlaid with lapis lazuli and carnelian lotus floral blooms.",
    spec: "LENGTH: CUSTOM RUN",
    price: "₹1,500 / sq. ft.",
    priceNote: "Custom scaled to exact hallway width and length.",
    image: "/collections/grand_gallery_runner.jpg",
    gallery: [
      {
        url: "/collections/grand_gallery_runner.jpg",
        label: "01. GALLERY RUNNER",
      },
      {
        url: "/home/luxury_editorial_architecture_photograph_of_an_opulent_white_makrana_marble.png",
        label: "02. ROTUNDA VISTA",
      },
      {
        url: "/home/working.png",
        label: "03. ATELIER DETAIL",
      },
    ],
    dimensions: [
      {
        label: '36" WIDTH',
        sublabel: "Private Residence",
        isStandard: true,
      },
      {
        label: '48" WIDTH',
        sublabel: "Hotel & Embassy Scale",
      },
    ],
    materials: [
      {
        name: "MAKRANA PURE WHITE",
        subtext: "98.6% Calcite Purity",
        colorHex: "#fcf9f2",
        isStandard: true,
      },
    ],
    bulletPoints: [
      "Continuous interlocking vine patterns with zero visible tile joint interruption.",
      "Deep diamond polish durable against high-traffic footwear.",
      "Lead time: 8 to 10 weeks.",
    ],
    inquiryMessage:
      "Hello%20RK%20Inlay%2C%20I%20am%20interested%20in%20the%20Grand%20Gallery%20Inlay%20Floor%20Runner.",
  },

  // 9. WALLS - Mughal Arch Alcove Wall Inlay
  {
    id: "mughal-arch-alcove",
    category: "WALLS",
    categoryLabel: "Wall Panel & Niche",
    archiveRecord: "PET-BA-WAL-009",
    editionBadge: "ARCHIVAL EDITION 09",
    badge: "MUGHAL ARCH NICHE",
    title: "Mughal Arch Alcove Wall Inlay",
    italicSubtitle:
      "A recessed wall alcove panel with Persian floral bouquet and lapis border for foyer niches and powder rooms.",
    description:
      "Carved with the quintessential Mughal cusped arch silhouette. Inset with blooming floral vines in lapis lazuli, turquoise, and jasper on pristine white marble.",
    spec: "SCALE: 4FT × 3FT ALCOVE",
    price: "₹1,200 / sq. ft.",
    priceNote: "Available in custom wall recess profiles.",
    image: "/collections/mughal_arch_alcove.jpg",
    gallery: [
      {
        url: "/collections/mughal_arch_alcove.jpg",
        label: "01. ALCOVE PANEL",
      },
      {
        url: "/home/high_end_interior_design_photograph_of_an_ornamental_handcrafted_marble_wall.png",
        label: "02. WALL INSTALLATION",
      },
      {
        url: "/home/working.png",
        label: "03. LAPIDARY CRAFT",
      },
    ],
    dimensions: [
      {
        label: "4FT × 3FT",
        sublabel: "Powder Room Scale",
        isStandard: true,
      },
      {
        label: "6FT × 4FT",
        sublabel: "Foyer Arch Niche",
      },
    ],
    materials: [
      {
        name: "MAKRANA PURE WHITE",
        subtext: "Luminous Translucent Luster",
        colorHex: "#fcf9f2",
        isStandard: true,
      },
    ],
    bulletPoints: [
      "Authentic 17th-century Mughal floral motifs crafted by hereditary carvers.",
      "Supplied with hidden Z-bar mounting bracket for flush wall integration.",
      "Lead time: 5 to 7 weeks.",
    ],
    inquiryMessage:
      "Hello%20RK%20Inlay%2C%20I%20am%20interested%20in%20the%20Mughal%20Arch%20Alcove%20Wall%20Inlay.",
  },

  // 10. STAIRS - Lotus Vine Stair Riser Ensemble
  {
    id: "lotus-vine-risers",
    category: "STAIRS",
    categoryLabel: "Stairs & Risers",
    archiveRecord: "PET-BA-STR-015",
    editionBadge: "ARCHIVAL EDITION 15",
    badge: "INDIVIDUAL RISER SUITE",
    title: "Lotus Vine Stair Riser Ensemble",
    italicSubtitle:
      "A series of 18 step risers featuring alternating turquoise and carnelian vines tailored to exact step dimensions.",
    description:
      "Tailored for luxury residences and grand duplex stairs. Each step riser acts as an individual jewel canvas, combining Persian turquoise and red carnelian in harmonious progression.",
    spec: "18 STEPS ENSEMBLE",
    price: "₹1,200 / sq. ft.",
    priceNote: "Customizable for straight, dogleg, or curving flights.",
    image: "/collections/lotus_vine_risers.jpg",
    gallery: [
      {
        url: "/collections/lotus_vine_risers.jpg",
        label: "01. STAIRCASE SUITE",
      },
      {
        url: "/home/architectural_photograph_of_a_sculptural_modern_luxury_staircase_with_pristine.png",
        label: "02. HELICAL SWEEP",
      },
      {
        url: "/home/working.png",
        label: "03. CRAFTSMAN ATELIER",
      },
    ],
    dimensions: [
      {
        label: "18 STEPS",
        sublabel: "Standard Floor Flight",
        isStandard: true,
      },
      {
        label: "22 STEPS",
        sublabel: "High-Ceiling Flight",
      },
    ],
    materials: [
      {
        name: "MAKRANA PURE WHITE",
        subtext: "Durable Calcite Base",
        colorHex: "#fcf9f2",
        isStandard: true,
      },
    ],
    bulletPoints: [
      "Precision cut to match client's structural tread width down to the millimeter.",
      "Seamless zero-grout joinery protected against shoe scuffs.",
      "Lead time: 6 to 8 weeks.",
    ],
    inquiryMessage:
      "Hello%20RK%20Inlay%2C%20I%20am%20interested%20in%20the%20Lotus%20Vine%20Stair%20Riser%20Ensemble.",
  },

  // 11. TABLE - Octagonal Pietra Dura Accent Table
  {
    id: "octagonal-pietra-dura-table",
    category: "TABLE",
    categoryLabel: "Centerpiece Furniture",
    archiveRecord: "PET-BA-TBL-011",
    editionBadge: "ARCHIVAL EDITION 11",
    badge: "OCTAGONAL SIDE TABLE",
    title: "Octagonal Pietra Dura Accent Table",
    italicSubtitle:
      "A classic 8-sided table top with concentric geometric starburst and floral band, mounted on a solid carved marble pedestal.",
    description:
      "Celebrated across royal courts since the 17th century. The eight-sided geometry represents the octagonal paradise garden of Mughal architecture, chiseled with lapis lazuli and coral.",
    spec: "DIAMETER: 24 INCHES",
    price: "₹38,000 onwards",
    priceNote: "Includes matching solid carved white marble pedestal base.",
    image: "/collections/octagonal_pietra_dura_table.jpg",
    gallery: [
      {
        url: "/collections/octagonal_pietra_dura_table.jpg",
        label: "01. TABLE TOP",
      },
      {
        url: "/home/luxury_interior_photography_of_an_exquisite_handcrafted_round_white_marble.png",
        label: "02. DINING OVERVIEW",
      },
      {
        url: "/home/working.png",
        label: "03. GEMSTONE INLAY",
      },
    ],
    dimensions: [
      {
        label: '24" DIAMETER',
        sublabel: "Accent Side Table",
        isStandard: true,
      },
      {
        label: '36" DIAMETER',
        sublabel: "Coffee / Foyer Table",
      },
    ],
    materials: [
      {
        name: "MAKRANA PURE WHITE",
        subtext: "Taj Mahal White Marble",
        colorHex: "#fcf9f2",
        isStandard: true,
      },
    ],
    bulletPoints: [
      "Inlaid with genuine lapis lazuli, turquoise, jasper, and mother of pearl.",
      "Protected with imperial diamond buffing that resists liquid stains.",
      "Lead time: 3 to 4 weeks.",
    ],
    inquiryMessage:
      "Hello%20RK%20Inlay%2C%20I%20am%20interested%20in%20the%20Octagonal%20Pietra%20Dura%20Accent%20Table.",
  },

  // 12. TABLE - Palatial White Marble Console
  {
    id: "palatial-white-console",
    category: "TABLE",
    categoryLabel: "Centerpiece Furniture",
    archiveRecord: "PET-BA-TBL-014",
    editionBadge: "ARCHIVAL EDITION 14",
    badge: "RECTANGULAR CONSOLE",
    title: "Palatial White Marble Console",
    italicSubtitle:
      "A minimalist modern luxury console with perimeter malachite and onyx banding for grand entry hallways.",
    description:
      "Bridges imperial Mughal craftsmanship with contemporary architectural minimalism. Crisp linear borders inlaid with African malachite and golden onyx framing a mirror-finish Makrana top.",
    spec: "LENGTH: 60 INCHES",
    price: "₹54,000 onwards",
    priceNote: "Available with custom marble pedestal supports or brass legs.",
    image: "/collections/palatial_white_console.jpg",
    gallery: [
      {
        url: "/collections/palatial_white_console.jpg",
        label: "01. CONSOLE OVERVIEW",
      },
      {
        url: "/home/luxury_interior_photography_of_an_exquisite_handcrafted_round_white_marble.png",
        label: "02. FOYER VISTA",
      },
      {
        url: "/collections/raw_gemstones_lapidary.jpg",
        label: "03. MALACHITE ACCENTS",
      },
    ],
    dimensions: [
      {
        label: '60" × 18" (150 × 45 CM)',
        sublabel: "Entry Console",
        isStandard: true,
      },
      {
        label: '72" × 20" (180 × 50 CM)',
        sublabel: "Grand Corridor",
      },
    ],
    materials: [
      {
        name: "MAKRANA PURE WHITE",
        subtext: "98.6% Calcite Base",
        colorHex: "#fcf9f2",
        isStandard: true,
      },
    ],
    bulletPoints: [
      "Pure geometric perimeter banding with mitred inlaid corners.",
      "High load-bearing monolithic stone slab.",
      "Lead time: 5 to 7 weeks.",
    ],
    inquiryMessage:
      "Hello%20RK%20Inlay%2C%20I%20am%20interested%20in%20the%20Palatial%20White%20Marble%20Console.",
  },

  // 13. MARBLE - Virgin Makrana White Marble Slabs
  {
    id: "virgin-makrana-slabs",
    category: "MARBLE",
    categoryLabel: "Raw Marble & Slabs",
    archiveRecord: "PET-BA-MAT-001",
    editionBadge: "MATERIAL LOT 01",
    badge: "RAW MAKRANA SLAB",
    title: "Virgin Makrana White Marble Slabs",
    italicSubtitle:
      "Direct from Rajasthan quarries. High-calcium crystalline structure with zero open pores that never discolors or absorbs stains.",
    description:
      "Directly sourced and graded at our quarry yards in Makrana, Rajasthan. Renowned worldwide as the singular stone selected by Mughal master architects for the Taj Mahal. High crystalline density with exceptional translucent depth.",
    spec: "THICKNESS: 18MM / 25MM",
    price: "₹2,200 / sq. ft.",
    priceNote: "Priced according to block crystalline clarity, slab size, and vein pattern.",
    image: "/collections/makrana_marble_slabs.jpg",
    gallery: [
      {
        url: "/collections/makrana_marble_slabs.jpg",
        label: "01. BOOKMATCHED SLABS",
      },
      {
        url: "/home/luxury_editorial_architecture_photograph_of_an_opulent_white_makrana_marble.png",
        label: "02. POLISHED FINISH",
      },
    ],
    dimensions: [
      {
        label: "18 MM CALIBRATED",
        sublabel: "Standard Flooring & Cladding",
        isStandard: true,
      },
      {
        label: "25 MM MONOLITHIC",
        sublabel: "Heavy-Duty Vanity & Countertops",
      },
    ],
    materials: [
      {
        name: "GRADE-A MAKRANA ALBETA",
        subtext: "Milky White with Fine Grey Vein",
        colorHex: "#fcf9f2",
        isStandard: true,
      },
      {
        name: "GRADE-A+ MAKRANA WHITE",
        subtext: "99% Pure White Crystalline Calcite",
        colorHex: "#ffffff",
      },
    ],
    bulletPoints: [
      "Zero-porosity stone structure resistant to moisture absorption and acidic yellowing.",
      "Block inspection and dry-lay preview available at our Agra atelier.",
      "Container load dispatch with export-grade fumigated wooden crating.",
    ],
    isLarge: true,
    inquiryMessage:
      "Hello%20RK%20Inlay%2C%20I%20am%20interested%20in%20purchasing%20Virgin%20Makrana%20White%20Marble%20Slabs.",
  },

  // 14. MARBLE - Raw Mineral & Gemstone Sourcing
  {
    id: "raw-mineral-gemstones",
    category: "MARBLE",
    categoryLabel: "Raw Marble & Slabs",
    archiveRecord: "PET-BA-MAT-002",
    editionBadge: "MATERIAL LOT 02",
    badge: "NATURAL GEMSTONES",
    title: "Raw Mineral & Gemstone Sourcing",
    italicSubtitle:
      "Certified natural semi-precious lapidary minerals: Persian lapis lazuli, African malachite, coral, and mother of pearl.",
    description:
      "We curate and stock the finest authentic lapidary gemstones globally for high-end Pietra Dura inlay commissions. Tested for chemical purity, color intensity, and hardness to guarantee zero color fading across centuries.",
    spec: "GRADE A+ CERTIFIED",
    price: "₹2,200 / sq. ft.",
    priceNote: "Direct mineral rough and calibrated sliced cabochons available for bespoke projects.",
    image: "/collections/raw_gemstones_lapidary.jpg",
    gallery: [
      {
        url: "/collections/raw_gemstones_lapidary.jpg",
        label: "01. NATURAL MINERAL LOTS",
      },
      {
        url: "/home/working.png",
        label: "02. LAPIDARY CUTTING",
      },
    ],
    dimensions: [
      {
        label: "RAW MINERAL BLOCKS",
        sublabel: "Rough stone for custom sculpting",
        isStandard: true,
      },
      {
        label: "3MM CALIBRATED SLICES",
        sublabel: "Pre-sliced for Pietra Dura inlay",
      },
    ],
    materials: [
      {
        name: "BADAKHSHAN LAPIS LAZULI",
        subtext: "Deep Azure with Pyrite Gold Specks",
        colorHex: "#1e3a8a",
        isStandard: true,
      },
      {
        name: "CONGO EMERALD MALACHITE",
        subtext: "Concentric Banded Forest Green",
        colorHex: "#065f46",
      },
    ],
    bulletPoints: [
      "100% natural, un-dyed, and non-stabilized authentic semi-precious minerals.",
      "Accompanied by Certificate of Authenticity under Lapidary Guild of Agra.",
      "Custom lot selection available upon private atelier consultation.",
    ],
    isLarge: true,
    inquiryMessage:
      "Hello%20RK%20Inlay%2C%20I%20am%20interested%20in%20Raw%20Mineral%20and%20Gemstone%20Sourcing.",
  },
];

export const SACRED_MANDIR_SECTION = {
  kicker: "SPECIALTY SACRED ARCHITECTURE",
  heading: "Bespoke Marble Mandir &",
  headingItalic: "Sacred Sanctuaries",
  description:
    "From private home puja rooms to grand freestanding community temples, our master carvers create sacred spaces according to strict Vastu and Shilpa Shastra principles, utilizing flawless Makrana white marble that remains radiantly pure through daily ceremonial rituals.",
  specs: [
    { label: "PURITY", value: "100% Makrana Virgin White Marble" },
    { label: "VASTU", value: "Certified architectural proportions" },
    { label: "CARVING", value: "Full relief 3D jali & idol niches" },
    { label: "INLAY", value: "Polychrome gemstone arabesques" },
  ],
  buttonText: "Commission a Custom Temple",
  buttonUrl:
    "https://wa.me/917351586553?text=Hello%20RK%20Inlay%2C%20I%20would%20like%20to%20discuss%20commissioning%20a%20Bespoke%20Marble%20Mandir%20Temple.",
  image: "/collections/bespoke_marble_mandir.jpg",
};

export const ZERO_POROSITY_SECTION = {
  kicker: "MATERIAL INTEGRITY",
  heading: "The Science of Zero-Porosity",
  headingItalic: "Makrana",
  description:
    "Unlike commercial Italian or Greek marbles that contain calcium silicates vulnerable to atmospheric acids and stains, Makrana marble is composed of 98%+ pure crystalline calcite with zero open pores.",
  bullets: [
    {
      title: "1. 98%+ CALCITE PURITY",
      text: "Impervious to turmeric, oil, water, and milk used in ceremonial rituals and dining environments.",
    },
    {
      title: "2. CENTURY-PROOF BONDING",
      text: "Natural stone adhesives cure into rock-solid fusion that expands and contracts uniformly with the base marble.",
    },
    {
      title: "3. LIFETIME DIAMOND RE-POLISH",
      text: "Can be re-polished every generation using diamond dust to restore factory luster without losing inlay edges.",
    },
  ],
  linkText: "Read Complete Petrographic Analysis",
  image: "/home/working.png",
};

export const CAD_BLUEPRINT_SECTION = {
  heading: "Need Custom Dimensions or",
  headingItalic: "CAD Blueprint Integration?",
  subtitle:
    "Our in-house design studio translates architectural DWG/CAD drawings into precise 1:1 stone inlay cut sheets for architects and interior designers worldwide.",
  primaryButtonText: "Upload Blueprint / Inquire on WhatsApp",
  primaryButtonUrl:
    "https://wa.me/917351586553?text=Hello%20RK%20Inlay%2C%20I%20have%20an%20architectural%20blueprint%20or%20CAD%20drawing%20to%20share%20for%20marble%20inlay%20integration.",
  secondaryButtonText: "Call Chief Architect",
  secondaryButtonPhone: "tel:+917351586553",
  statusBadge: "CAD DISPATCH: 24-48 HRS",
  points: [
    "DWG, DXF, PDF, SketchUp format support",
    "1:1 full-scale tracing stencils dispatched globally",
    "Custom stone palette matching against interior finishes",
  ],
};
