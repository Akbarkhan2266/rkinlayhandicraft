export interface ExemplarPiece {
  id: string;
  category: string;
  location: string;
  title: string;
  description: string;
  dimension: string;
  image: string;
  inquiryMessage: string;
}

export interface WorkshopStep {
  number: number;
  title: string;
  description: string;
  tag: string;
}

export interface ProximityPoint {
  icon: string;
  text: string;
}

export const CONTACT_CONTENT = {
  hero: {
    kicker: "• BESPOKE CONCIERGE & ATELIER VISITS • AGRA, UTTAR PRADESH",
    heading: "Begin an Imperial Dialogue.",
    headingItalic: "From Agra to Your Space.",
    description:
      "Whether commissioning a palatial marble floor medallion, a custom Pietra Dura dining table, or planning an intimate private visit to our Tajganj stone workshop, our master artisans and project directors are at your service.",
    studioBadge: {
      status: "1 ACTIVE LAPIDARY STUDIO",
      location: "TAJGANJ QUARTER • EST. AGRA HERITAGE",
    },
  },

  concierge: {
    kicker: "PRESENCE & ACCESS",
    heading: "Direct Atelier Concierge",
    subtitle:
      "Authentic lapidary works orchestrated under the direct guidance of master craftsmen at our historic Tajganj workshop.",
    address: {
      title: "PHYSICAL ATELIER ADDRESS",
      line1: "21/62/23 Telipara, Tajganj,",
      line2: "Agra, Uttar Pradesh 282001",
      note: "Located in historic Tajganj craft quarter in close proximity to the Taj Mahal. Private client vehicle access only, guided parking provided upon advance reservation.",
      mapUrl: "https://maps.google.com/?q=21/62/23+Telipara,+Tajganj,+Agra,+Uttar+Pradesh+282001",
      phone: "+91 7351586553",
      phoneRaw: "+917351586553",
    },
    directPhone: {
      title: "TEXT / DIRECT & WHATSAPP",
      number: "+91 7351586553",
      numberRaw: "+917351586553",
      note: "Instant Atelier Dispatch",
      whatsappUrl:
        "https://wa.me/917351586553?text=Hello%20RK%20Inlay%2C%20I%20would%20like%20to%20inquire%20about%20a%20bespoke%20marble%20inlay%20commission.",
    },
    inquiriesEmail: {
      title: "CLIENT INQUIRIES",
      email: "akhan656500@gmail.com",
      note: "CAD files, renders & architectural drawings",
      mailUrl:
        "mailto:akhan656500@gmail.com?subject=Bespoke%20Marble%20Inlay%20Commission%20Inquiry",
    },
    hours: {
      title: "ATELIER WORKING HOURS",
      badge: "7 DAYS OPEN",
      days: "Monday to Sunday",
      time: "9 am to 9 pm",
      note: "Walk-in visitors welcome Thursday through Sunday until 7:00 PM. Private confidential appointments with Senior Lapidary Master scheduled upon advance booking. Architectural delegations require 48 hours prior notice.",
    },
    heritageCard: {
      badge: "LIVE DRAFTING TABLE",
      image: "/contact/heritage_studio_drafting.jpg",
      title: "Heritage Studio at Tajganj",
      description:
        "Preserving & hand-rendering 17th-century Pietra Dura cartoons before carving into Makrana marble.",
      statusPill: "• PRIVATE VISITS SCHEDULED",
    },
  },

  exemplars: {
    kicker: "CURATED ARCHIVAL EDITIONS",
    heading: "Exemplars in Residence",
    description:
      "From full-height bespoke Pietra Dura wall murals in European salons to grand palatial banquet suites in world capitals.",
    pieces: [
      {
        id: "wall-panel",
        category: "ARCHITECTURAL FLORAL PANEL",
        location: "PRIVATE PARIS COMMISSION",
        title: "Vase of the Imperial Garden",
        description:
          "Exhibiting 12 detailed flower heads, continuous vines, and genuine Malachite foliage, chiseled into Belgian black and Makrana white marble.",
        dimension: "DIMENSIONS: 210CM × 110CM",
        image:
          "/home/high_end_interior_design_photograph_of_an_ornamental_handcrafted_marble_wall.png",
        inquiryMessage:
          "Hello%20RK%20Inlay%2C%20I%20am%20interested%20in%20commissioning%20the%20Vase%20of%20the%20Imperial%20Garden%20panel.",
      },
      {
        id: "banquet-table",
        category: "CENTERPIECE FURNITURE",
        location: "PENTHOUSE RESIDENCE",
        title: "The Celestial Wreath Banquet Table",
        description:
          "Concentric floral garland inlaid over 100% pure Makrana white marble slab, set with 24,000 individually hand-chiseled semi-precious stones.",
        dimension: "DIAMETER: 180CM (71 INCHES)",
        image:
          "/home/luxury_interior_photography_of_an_exquisite_handcrafted_round_white_marble.png",
        inquiryMessage:
          "Hello%20RK%20Inlay%2C%20I%20am%20interested%20in%20commissioning%20The%20Celestial%20Wreath%20Banquet%20Table.",
      },
    ] as ExemplarPiece[],
  },

  experience: {
    kicker: "PHYSICAL ATELIER EXPERIENCE",
    heading: "Visiting the Tajganj Stone Workshop",
    subtitle:
      "A pilgrimage into the very quarter that constructed the Taj Mahal over three and a half centuries ago.",
    steps: [
      {
        number: 1,
        title: "Live Lapidary Demonstration",
        description:
          "Witness master artisans shape millimeters-thin slices of Persian turquoise and Badakhshan lapis lazuli on historic bow-powered emery wheels without digital aids.",
        tag: "MASTER-LEVEL ASSISTANT",
      },
      {
        number: 2,
        title: "Raw Mineral & Slab Inspection",
        description:
          "Examine virgin Makrana marble slabs directly under natural Agra daylight. Review crystalline density, translucent veining patterns, and raw gemstone lots.",
        tag: "MATERIAL SELECTION",
      },
      {
        number: 3,
        title: "Custom Template Prototyping",
        description:
          "Collaborate live on scaled tracing scales. Review hand-traced stencil charts, curate exact petal color gradations, and test gum combinations before marble carving begins.",
        tag: "CLIENT DESIGN AUDIENCE",
      },
    ] as WorkshopStep[],
  },

  map: {
    kicker: "HERITAGE ENCLAVE",
    heading: "Tajganj Quarter, Agra",
    description:
      "Our atelier sits in the direct historic lineage of the royal stone-masons who settled in Tajganj during the construction of the Taj Mahal under Emperor Shah Jahan.",
    points: [
      {
        icon: "explore",
        text: "800 meters from Taj Mahal East Gate",
      },
      {
        icon: "train",
        text: "15 minutes from Agra Cantonment Railway Station",
      },
      {
        icon: "directions_car",
        text: "12 minutes from Agra Inner Ring Expressway",
      },
    ] as ProximityPoint[],
    directionsUrl:
      "https://maps.google.com/?q=21/62/23+Telipara,+Tajganj,+Agra,+Uttar+Pradesh+282001",
    phone: "+91 7351586553",
    phoneRaw: "+917351586553",
    mapImage: "/contact/agra_tajganj_map.jpg",
    pinTitle: "RK Inlay Handicraft",
    pinAddress: "21/62/23 Telipara, Tajganj, Agra",
    pinHours: "OPEN DAILY: 9 AM - 9 PM",
  },
};
