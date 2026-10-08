export interface AboutStat {
  value: string;
  label: string;
  subtext: string;
}

export interface AccreditationDetail {
  label: string;
  value: string;
}

export interface AtelierTenet {
  number: string;
  title: string;
  description: string;
  tag: string;
}

export interface AtelierShowcase {
  image: string;
  badge: string;
  caption: string;
}

export const ABOUT_CONTENT = {
  hero: {
    kicker: "OUR HERITAGE & LEGACY | AGRA, UTTAR PRADESH",
    heading: "Generations of Stone.",
    headingItalic: "A Tradition Preserved.",
    description:
      "Born in the shadow of the Taj Mahal, RK Inlay handicraft has painstakingly guarded the timeless imperial lapidary traditions of Pietra Dura (Parchin Kari), translating centuries of royal architectural artistry into modern architectural masterpieces and heirloom furniture.",
    stats: [
      {
        value: "1988",
        label: "FOUNDING YEAR",
        subtext: "Four decades of lapidary mastery",
      },
      {
        value: "02 Mos",
        label: "PER WORK AVERAGE",
        subtext: "Patient dedication to perfection",
      },
      {
        value: "0.1mm",
        label: "JOINT PRECISION",
        subtext: "Seamless stone-to-stone fusion",
      },
      {
        value: "100%",
        label: "NATURAL GEMSTONES",
        subtext: "Pietra Dura authenticity guaranteed",
      },
    ] as AboutStat[],
    heroImage: "/about/artisan_workshop_hero.jpg",
    heroImageAlt:
      "Master artisan carving floral mortises at the Agra workshop",
    heroImageCaption:
      "Master artisan carving floral mortises at the Agra workshop",
  },

  lineage: {
    kicker: "FROM MASTER TO APPRENTICE",
    heading: "Craftsmanship Passed",
    headingItalic: "from Hand to Hand.",
    paragraph1:
      "In the historic quarters of Agra, generations-old techniques are handed down from father to son. Our master carvers began their training in childhood, absorbing the subtle science of mineral grain, cleavage planes, and tonal gradation long before ever making their first cut.",
    paragraph2:
      "Today, this unbroken lineage of knowledge guides every commission. From tracing the preliminary cartoon onto flawless Makrana marble to shaping individual petals from Persian lapis lazuli and Italian malachite, each movement is a muscle memory honed over forty years of dedicated practice.",
    quote:
      "In Agra, stone is not a passive material; it is a canvas waiting for life to be inlaid into its veins.",
    image: "/home/working.png",
    imageBadge: "LAPIDARY PRECISION",
    imageCaption:
      "Hand-shaping semi-precious stone using traditional bow-wire lapidary wheel",
  },

  accreditation: {
    badge: "NATIONAL ACCREDITATION",
    heading: "Recognized Mastery &",
    headingItalic: "Accreditation",
    subtitle:
      "Formally certified under the National Skill Training Scheme as Master Inlay Craftsmen by the Government of India.",
    certificateImage: "/about/certificate.jpg",
    certificateCaption:
      "Official Master Trainer certificate for Stone (Inlay) Apprenticeship under Guru-Shishya scheme - Government of India.",
    transcriptHeader: "OFFICIAL ACCREDITATION 2024-25",
    transcriptTitle: "Official Heritage Transcript",
    details: [
      {
        label: "SCHEME",
        value: "Guru Shishya Hastshilp Prashikshan (2024-25)",
      },
      {
        label: "TRADE / CRAFT",
        value: "Stone (Inlay) Parchin Kari Art & Craft",
      },
      {
        label: "CRAFT MASTER",
        value: "Shilp Guru Rafiquddin",
      },
      {
        label: "RECIPIENT",
        value: "Rashid (S/o Shri Hamid Khan)",
      },
      {
        label: "SPONSORING BODY",
        value: "Ministry of Textiles, Government of India",
      },
      {
        label: "JURISDICTION",
        value: "Office of the Development Commissioner (Handicrafts)",
      },
      {
        label: "LOCATION",
        value: "Tajganj, Agra, Uttar Pradesh - 282001",
      },
      {
        label: "AUTHENTICITY",
        value: "Verifiable official government seal & registration",
      },
    ] as AccreditationDetail[],
    assuranceText:
      "Witness of genuine heirloom quality and authenticity in every bespoke creation.",
  },

  tenets: {
    kicker: "FOUNDATIONAL PHILOSOPHY",
    heading: "The Five Tenets of",
    headingItalic: "Our Atelier",
    intro:
      "Guiding principles handed down through generations, ensuring every piece created in our Agra atelier remains an authentic work of art.",
    items: [
      {
        number: "01",
        title: "Makrana White Marble",
        description:
          "Sourced directly from the historic Makrana quarries in Rajasthan, renowned for its luminous, translucent purity that resists yellowing over centuries.",
        tag: "MATERIAL AUTHENTICITY",
      },
      {
        number: "02",
        title: "Precious Gemstones",
        description:
          "Exclusively natural semi-precious stones: Lapis Lazuli, Malachite, Jasper, Onyx, and Mother-of-Pearl, chosen for their natural grain and intense saturation.",
        tag: "NATURAL GEMSTONES",
      },
      {
        number: "03",
        title: "Micro-Chiseled Grooves",
        description:
          "Every cavity in the base marble is chiseled by hand with diamond-hard steel chisels, ensuring an exact depth and profile matching each cut gemstone.",
        tag: "PRECISION CRAFT",
      },
      {
        number: "04",
        title: "Zero-Grout Bonding",
        description:
          "Tolerances so tight no visible joint compound remains. Stones meet stone in seamless perfection that feels like a single continuous plane.",
        tag: "SEAMLESS JOINERY",
      },
    ] as AtelierTenet[],
  },

  invitation: {
    kicker: "VISIT OUR WORKSHOP",
    heading: "An Open Invitation to",
    headingItalic: "the Agra Atelier",
    description:
      "Architects, interior designers, collectors, and connoisseurs are warmly invited to visit our studio in Agra. Witness the raw marble boulders transformed into intricate imperial masterworks, examine rare gemstone slabs, and discuss custom commissions directly with our master craftsmen.",
    addressTitle: "WORKSHOP ADDRESS",
    address:
      "Opposite TDI Mall, Fatehabad Road, Tajganj, Agra, Uttar Pradesh - 282001, India",
    hoursTitle: "PRIVATE CONSULTING HOURS",
    hours:
      "Monday to Saturday, 10:00 AM - 7:00 PM IST (Advance appointment recommended)",
    buttonText: "Schedule a Visit",
    buttonUrl:
      "https://wa.me/917351586553?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20visit%20to%20the%20RK%20Inlay%20atelier%20in%20Agra.",
    showcases: [
      {
        image:
          "/home/high_end_interior_design_photograph_of_an_ornamental_handcrafted_marble_wall.png",
        badge: "ARCHITECTURAL INSTALLATION",
        caption: "Imperial wall panel custom designed for private residence",
      },
      {
        image:
          "/home/luxury_interior_photography_of_an_exquisite_handcrafted_round_white_marble.png",
        badge: "BESPOKE MASTERPIECE",
        caption: "Parchin Kari dining table top featuring 12,000+ hand-cut inlays",
      },
    ] as AtelierShowcase[],
  },
};
