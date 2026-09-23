/**
 * GLAM BY VARSHARAO - BRAND & CONTENT CONFIGURATION
 * Single source of truth for all website text, assets, services, and contact data.
 * Powered by Varshini's verified Instagram profile & authentic client assets.
 */

export const brandData = {
  brand: {
    name: "Glam by Varsharao",
    shortName: "GLAM",
    artistName: "Varshini",
    role: "Bridal Makeup Artist & Educator",
    tagline: "Makeup that still feels like you.",
    location: "Mysore, Karnataka",
    instagramHandle: "@glam_by_varsharao",
    instagramUrl: "https://www.instagram.com/glam_by_varsharao",
    whatsappNumber: "919187654470", // Official booking number: +91 91876 54470
    whatsappDisplay: "+91 91876 54470",
    bookingNotice: "2026 Brides • Appointments By Advance Booking Only",
    consultationNotice: "Not sure what makeup suits you? Get a 15-min personalised consult",
    communityStat: "13K+",
    communityLabel: "Instagram Brides & Artists",
    experienceLabel: "Mysore & Destination Weddings"
  },

  hero: {
    eyebrow: "BRIDAL MAKEUP & STYLING • MYSORE",
    headline: "Makeup that still\nfeels like you.",
    subtext: "Thoughtful bridal artistry designed around your unique facial features, your heirloom saree, your celebration, and your personal style.",
    primaryCta: "Check Your Date",
    secondaryCta: "Explore My Work",
    consultCta: "Book a 15-Min Consult",
    heroImage: "/images/real-bride-traditional-cream.png",
    heroImageAlt: "Real bride by Varshini adorned in traditional cream silk and temple gold jewellery with luminous natural skin"
  },

  about: {
    eyebrow: "MEET THE ARTIST",
    title: "“Beauty should enhance who you are, not hide it.”",
    name: "Varshini",
    designation: "Bridal Makeup Artist & Beauty Educator • Mysore",
    portrait: "/images/varshini-real.png", // Varshini's real authentic portrait
    portraitAlt: "Varshini - Bridal Makeup Artist and Educator in Mysore",
    bioParagraphs: [
      "Welcome. I'm Varshini, a bridal makeup artist, stylist, and educator based in Mysore. My approach to bridal beauty is grounded in skin-first elegance: makeup that breathes, reflects light naturally, and stays radiant through hours of rituals without ever feeling heavy or mask-like.",
      "Every bride carries an individual story, facial harmony, and aesthetic comfort zone. Rather than imposing a standard template, I work closely with you to design a look that honors your personal spirit, complements your heirloom jewellery, and ensures you feel completely and effortlessly yourself from dawn muhurtham to midnight reception."
    ],
    highlights: [
      { number: "01", label: "Skin-First Artistry", desc: "No cakey layers. Preserving natural texture and skin radiance." },
      { number: "02", label: "Punctual & Patient", desc: "A calm, grounded presence on your wedding morning." },
      { number: "03", label: "Enduring Longevity", desc: "Formulated for South Indian climates, warm lights, and long rituals." }
    ]
  },

  consultation: {
    badge: "SIGNATURE EXPERIENCE",
    title: "Not Sure What Makeup Suits You?",
    subtitle: "Let's figure it out together in a quick 15-minute 1-on-1 virtual consultation.",
    description: "Choosing your wedding look shouldn't feel overwhelming. In this 15-minute session, we evaluate your facial features, skin undertone, lighting environment, and outfits to build your bespoke bridal beauty direction.",
    steps: [
      {
        step: "01",
        title: "Tell me about your occasion",
        desc: "Muhurtham, Reception, Engagement, or Sangeet — we map out the rituals, lighting, and schedule."
      },
      {
        step: "02",
        title: "Share your outfit & inspiration",
        desc: "Send your saree drape colors, jewellery tones, and references that speak to you."
      },
      {
        step: "03",
        title: "Get personalised guidance",
        desc: "Receive curated advice on base finish, eye focus, lip shades, and hair styling harmony."
      }
    ],
    cta: "Book My 15-Min Consult"
  },

  services: [
    {
      id: "muhurtham",
      title: "Traditional Muhurtham Bridal",
      category: "Heritage Bridal",
      image: "/images/real-bride-kanjeevaram-gold.png",
      description: "Iconic South Indian bridal beauty. Luminous, skin-breathable base engineered to withstand traditional ritual smoke, heat, and temple lights. Paired with soft winged kohl definition and fragrant jasmine hair styling.",
      features: [
        "Skin-like waterproof base formulation",
        "Classic kohl eye artistry & subtle lash lift",
        "Temple jewelry placement & flower setting",
        "Touch-up bridal kit for the rituals"
      ]
    },
    {
      id: "reception",
      title: "Reception & Evening Glamour",
      category: "Contemporary Bridal",
      image: "/images/real-bride-reception-corset.png",
      description: "Sophisticated, camera-ready evening glam. Sculpted contours, dimensional champagne lids, Hollywood waves or textured updos, and effortless nude-rose lips tailored for banquet lighting.",
      features: [
        "HD luminous dimensional finish",
        "Custom individual wispy lash application",
        "Textured Hollywood waves or contemporary updo",
        "Long-wear transfer-resistant lip layering"
      ]
    },
    {
      id: "engagement",
      title: "Engagement & Pre-Wedding Looks",
      category: "Modern Occasion",
      image: "/images/real-bride-kasavu-outdoor.png",
      description: "Fresh, youthful, and ethereal. Glass-skin radiance with dewy cheek tints, soft bronzed eyes, and romantic textured hair suited for outdoor lawns, daylight terraces, and cocktail parties.",
      features: [
        "Dewy glass-skin prep and finish",
        "Soft pastel & bronze eye palette",
        "Effortless half-up or romantic floral braid",
        "Lightweight comfortable wear"
      ]
    },
    {
      id: "styling",
      title: "Bridal Saree Draping & Styling",
      category: "Styling & Artistry",
      image: "/images/styling-drape.jpg",
      description: "Precision Kanjeevaram and silk saree box pleating, waist-belt (vaddanam) setting, dupatta layering, and veil anchoring so you can move, sit, and dance with effortless confidence.",
      features: [
        "Crisp uniform box pleats",
        "Secure non-slip pin engineering",
        "Jewelry alignment & bindi placement",
        "Veil & dupatta draping"
      ]
    },
    {
      id: "consultation-service",
      title: "1-on-1 Personalised Consultation",
      category: "Advisory & Prep",
      image: "/images/makeup-details.jpg",
      description: "A comprehensive bridal beauty blueprint before your booking. Face-shape analysis, skincare preparation timeline, and color pairing tailored to your bespoke celebrations.",
      features: [
        "15-minute video or in-studio session",
        "Skincare routine recommendations",
        "Lip & blush color pairing guide",
        "Outfit coordination analysis"
      ]
    }
  ],

  lookFinder: {
    badge: "INTERACTIVE BRIDAL DIRECTION",
    title: "Find Your Bridal Beauty Direction",
    subtitle: "Answer 3 gentle questions to discover the artistry style that will flatter your features best.",
    questions: [
      {
        id: "occasion",
        question: "What is your main celebration?",
        options: [
          { value: "Traditional Muhurtham", label: "Traditional Muhurtham / Wedding", icon: "✨" },
          { value: "Evening Reception", label: "Evening Reception / Cocktail", icon: "🌙" },
          { value: "Engagement / Roka", label: "Engagement / Roka", icon: "💍" },
          { value: "Sangeet / Mehendi", label: "Sangeet / Haldi / Mehendi", icon: "🌸" }
        ]
      },
      {
        id: "finish",
        question: "What skin finish makes you feel most radiant?",
        options: [
          { value: "Soft Natural Glow", label: "Soft & Natural Skin (Breathable & Dewy)", icon: "💧" },
          { value: "Classic Velvet Matte", label: "Classic Velvet Matte (Sweat-proof & Polished)", icon: "🕊️" },
          { value: "Radiant Glass Glam", label: "Radiant Glass Glam (Luminous & Sculpted)", icon: "⭐" },
          { value: "Minimal Effortless", label: "Minimal 'No-Makeup' Makeup", icon: "🌿" }
        ]
      },
      {
        id: "focus",
        question: "What matters most to you in your bridal look?",
        options: [
          { value: "Flawless Natural Skin", label: "My skin looking like real skin, just radiant", icon: "🤍" },
          { value: "Defined Kohl & Lash Eyes", label: "Mesmerising eye definition with kohl & lashes", icon: "👁️" },
          { value: "All-Day Endurance", label: "Long-lasting makeup that won't budge through rituals", icon: "⏳" },
          { value: "Harmonious Saree & Hair Balance", label: "Total harmony between jewellery, drape & makeup", icon: "👑" }
        ]
      }
    ],
    resultsMap: {
      defaultTitle: "Bespoke Radiant Bridal Direction",
      defaultDesc: "A skin-first elevated aesthetic designed with subtle warmth, defined eyes, and weightless longevity that enhances your natural grace."
    }
  },

  portfolio: [
    {
      id: 1,
      title: "Real Muhurtham Bride • Heritage Silk",
      category: "muhurtham",
      categoryLabel: "Real Bride • Muhurtham",
      image: "/images/real-bride-traditional-cream.png",
      location: "Mysore Heritage Wedding",
      caption: "Soft luminous skin-like finish paired with cream Kanjeevaram silk, antique gold temple choker, jhumkas, and fresh fragrant mullai flowers.",
      isVideo: false
    },
    {
      id: 2,
      title: "Luxury Bridal Glam Reel",
      category: "reception",
      categoryLabel: "Instagram Reel",
      image: "/images/reception-glam.jpg",
      videoSrc: "/images/reel-luxury-bridal-glam.mp4",
      location: "Mysore Studio",
      caption: "Flawless skin • Defined eyes • Soft glam • Elegant finish — created for the bride who wants to feel effortlessly royal.",
      isVideo: true,
      reelDuration: "Reel"
    },
    {
      id: 3,
      title: "Evening Reception • Champagne Corset",
      category: "reception",
      categoryLabel: "Real Bride • Reception",
      image: "/images/real-bride-reception-corset.png",
      location: "Lalit Mahal Palace, Mysore",
      caption: "High-glamour evening reception bride in shimmering champagne corset lehenga with emerald jewelry and soft sculpted eyes.",
      isVideo: false
    },
    {
      id: 4,
      title: "Kalyani - Hampi Heritage Bridal Reel",
      category: "muhurtham",
      categoryLabel: "Instagram Reel",
      image: "/images/hero-bride.jpg",
      videoSrc: "/images/reel-kalyani-hampi.mp4",
      location: "Hampi / Mysore",
      caption: "Royal heritage bridal artistry captured at the historic stone temple steps of Hampi.",
      isVideo: true,
      reelDuration: "Reel"
    },
    {
      id: 5,
      title: "Traditional Gold Kanjeevaram Bride",
      category: "muhurtham",
      categoryLabel: "Real Bride • Muhurtham",
      image: "/images/real-bride-kanjeevaram-gold.png",
      location: "Mysore Kalyanam",
      caption: "Timeless South Indian bridal portrait with kasumalai, traditional nose ring, velvet base, and defined kajal eyes.",
      isVideo: false
    },
    {
      id: 6,
      title: "Behind-the-Scenes: Skin Prep to Final Glow",
      category: "details",
      categoryLabel: "Instagram Reel",
      image: "/images/makeup-details.jpg",
      videoSrc: "/images/reel-onam-behind-the-scenes.mp4",
      location: "Studio Behind The Scenes",
      caption: "From intentional barrier prep and thin foundation layering to fluttery lashes — every detail created to keep it soft, fresh & effortlessly elegant.",
      isVideo: true,
      reelDuration: "BTS Reel"
    },
    {
      id: 7,
      title: "Royal Velvet & Veil Bridal Look",
      category: "reception",
      categoryLabel: "Real Bride • Bridal Lehenga",
      image: "/images/real-bride-velvet-royal.png",
      location: "Mysore Wedding",
      caption: "Opulent maroon velvet embroidered lehenga with delicate tissue dupatta veil and luminous polished skin.",
      isVideo: false
    },
    {
      id: 8,
      title: "Outdoor Temple & Kasavu Styling",
      category: "engagement",
      categoryLabel: "Real Bride • Temple Occasion",
      image: "/images/real-bride-kasavu-outdoor.png",
      location: "Mysore Courtyard",
      caption: "Fresh, youthful, and vibrant outdoor bridal look in white Kasavu silk saree with crimson blouse and delicate gold accents.",
      isVideo: false
    },
    {
      id: 9,
      title: "Kanjeevaram Box Pleat Mastery",
      category: "styling",
      categoryLabel: "Saree Styling",
      image: "/images/styling-drape.jpg",
      location: "Mysore Studio",
      caption: "Precision box pleating and Lakshmi temple vaddanam placement for complete comfort through wedding rituals.",
      isVideo: false
    }
  ],

  transformation: {
    badge: "THE TRANSFORMATION",
    title: "Still You — Thoughtfully Elevated",
    quote: "“Great makeup doesn't mask your face. It illuminates the features you already cherish.”",
    description: "Drag the divider to see how intentional skin preparation, undertone correction, and delicate definition elevate natural radiance while preserving true skin texture.",
    beforeImage: "/images/transformation-before.jpg",
    afterImage: "/images/transformation-after.jpg",
    beforeLabel: "Natural Bare Skin",
    afterLabel: "Thoughtfully Elevated"
  },

  reviews: [
    {
      id: 1,
      quote: "Almost 2000 people attended our reception, and nearly 80% asked me 'Who did your makeup?'. Thank you so much Varsha for being so professional, patient and understanding. You truly made me feel beautiful and special.",
      brideName: "Real Bride Review",
      event: "Grand Reception & Wedding",
      city: "Mysore",
      highlight: "80% of 2000 guests asked who did her makeup",
      screenshot: "/images/real-review-reception.png"
    },
    {
      id: 2,
      quote: "The makeup was absolutely gorgeous, and when I saw the portraits, I honestly couldn't believe my eyes! You made me feel so beautiful and confident, and the final pictures turned out even more amazing than I imagined. Thank you for your patience and magic!",
      brideName: "Bridal Photoshoot Review",
      event: "Bridal Portraits & Muhurtham",
      city: "Mysore / Bangalore",
      highlight: "Gave her confidence & unbelievable pictures",
      screenshot: "/images/real-review-morning.png"
    },
    {
      id: 3,
      quote: "Even when I was in doubt, you were there to show me the real clarity. And really it turned out so well! I really like the pics and videos, all because of you it happened.",
      brideName: "Client Feedback",
      event: "Bridal Collaboration & Ceremony",
      city: "Karnataka",
      highlight: "Clear guidance when in doubt",
      screenshot: "/images/real-review-clarity.png"
    }
  ],

  education: {
    badge: "FOR ARTISTS WHO WANT TO GROW",
    title: "Bridal Artistry & Styling Masterclasses",
    subtitle: "Hands-on, intensive learning designed for aspiring and working makeup artists in Mysore.",
    image: "/images/educator-masterclass.jpg",
    imageAlt: "Varshini teaching bridal makeup masterclass in Mysore academy",
    intro: "As an educator, Varshini demystifies the nuances of South Indian bridal makeup, undertone correction, sweat-proof base preparation, and precision saree draping.",
    modules: [
      {
        title: "Skin Preparation & Undertone Science",
        desc: "Mastering Indian skin undertones, neutralisation without ashy gray cast, and deep hydration layering."
      },
      {
        title: "Sweat-Proof Muhurtham Base Engineering",
        desc: "Techniques for humidity resistance, photographic flash-proofing, and breathable 12-hour wear."
      },
      {
        title: "South Indian Saree Draping & Hair Architecture",
        desc: "Crisp box pleating, pallu setting, jewelry anchoring, and floral veni placement."
      },
      {
        title: "Client Psychology & Wedding Day Timing",
        desc: "Managing bridal morning timelines, lighting constraints, and building a referral-first bridal business."
      }
    ],
    cta: "Inquire About Masterclasses"
  },

  studentReviews: [
    {
      id: 1,
      quote: "Enhancing a beautiful girl can be anyone's cup of tea, but enhancing a normal face into a beautiful one, I think only you can do it. I'm truly glad to say that I'm a proud student of yours. More power to you ma'am!",
      studentName: "Proud Student",
      batch: "Pro Bridal Masterclass",
      location: "Mysore",
      screenshot: "/images/real-student-proud.png"
    },
    {
      id: 2,
      quote: "Thank you so much ma'am for giving me this opportunity... from the beginning until the end, the way you treated me was truly wonderful. I'm genuinely thankful for your kindness and support. I learned a lot and gained valuable experience.",
      studentName: "Academy Student & Assistant",
      batch: "Hands-on Bridal Training",
      location: "Mysore",
      screenshot: "/images/real-student-opportunity.png"
    }
  ],

  beautyNotes: [
    {
      id: "foundation-guide",
      category: "Artistry Insights",
      tag: "Tip of the Day",
      title: "Best Foundations for Oily Skin & Muhurtham Longevity",
      readTime: "3 min read",
      summary: "Luxury vs Affordable comparison (Estée Lauder Double Wear vs Maybelline Super Stay), plus why proper skin prep, suitable primer, and thin layering make all the difference.",
      image: "/images/real-tip-foundation.png",
      instagramRef: "@glam_by_varsharao • Tips Highlight"
    },
    {
      id: "prep-timeline",
      category: "Bridal Prep",
      tag: "Timeline Guide",
      title: "Bridal Skincare: What to start 3 months before your big day",
      readTime: "3 min read",
      summary: "Why intense facials 3 days prior do more harm than good, and how simple barrier care guarantees a glowing makeup canvas on your wedding morning.",
      image: "/images/makeup-details.jpg",
      instagramRef: "@glam_by_varsharao • Prep Highlight"
    },
    {
      id: "saree-draping-secrets",
      category: "Styling Secrets",
      tag: "Saree Guide",
      title: "How to prepare your Kanjeevaram saree before bridal draping",
      readTime: "3 min read",
      summary: "The essential pre-pleating and steaming steps you must do 24 hours prior to achieve razor-sharp box pleats that stay secure all day.",
      image: "/images/styling-drape.jpg",
      instagramRef: "@glam_by_varsharao • Styling Highlight"
    }
  ],

  faqs: [
    {
      question: "How early should I book my bridal makeup with Varshini?",
      answer: "Bridal dates for 2026 are reserved on a first-confirmed basis. Since Varshini personally handles only one bride per morning Muhurtham to ensure complete undivided focus, booking 3 to 6 months in advance is highly recommended."
    },
    {
      question: "Do you travel outside Mysore for weddings?",
      answer: "Yes. While Varshini is based in Mysore with a private studio for trials and consultations, she travels across Karnataka (Bangalore, Coorg, Hassan, Mandya, Mangalore) and South India for destination weddings."
    },
    {
      question: "Can I book a 15-minute consultation before confirming?",
      answer: "Absolutely. Varshini offers a 15-minute personalised consultation where you can discuss your event dates, outfit colors, personal style preferences, and ask any questions before finalizing your booking."
    },
    {
      question: "What products are in your bridal kit?",
      answer: "Varshini's kit is exclusively stocked with international prestige, dermatologist-tested cosmetics curated for high-definition photography and long wear (including Charlotte Tilbury, NARS, Dior Beauty, Huda Beauty, MAC, and Estée Lauder)."
    },
    {
      question: "Do you provide saree draping and hair styling as well?",
      answer: "Yes. Complete bridal styling — including precision Kanjeevaram box pleating, veil setting, flower/mullai arrangement, and jewelry pinning — is an integral part of her signature bridal experience."
    },
    {
      question: "How do I check pricing and availability?",
      answer: "You can click 'Check Your Date' on this website or tap the WhatsApp button (+91 91876 54470). Provide your event date, occasion, and location, and Varshini will reply with availability and our transparent bridal package brochure."
    }
  ],

  finalCta: {
    headline: "Let's create a look that feels like you.",
    subtext: "Your wedding morning deserves thoughtful care, calm presence, and beauty that honors who you are.",
    button1: "Check Your Date",
    button2: "Book a 15-Min Consult"
  }
};

/**
 * Generates an elegant, pre-filled WhatsApp click-to-chat URL
 * directed to Varshini's official number (+91 91876 54470).
 */
export function buildWhatsAppUrl({ name = "", event = "", date = "", location = "", lookPreference = "", customNote = "" } = {}) {
  const number = brandData.brand.whatsappNumber;
  let text = `Hi Varshini, I found you through your website ✨\n\n`;

  if (name) text += `*Name:* ${name}\n`;
  if (event) text += `*Event / Occasion:* ${event}\n`;
  if (date) text += `*Event Date:* ${date}\n`;
  if (location) text += `*Location / Venue:* ${location}\n`;
  if (lookPreference) text += `*Preferred Style:* ${lookPreference}\n`;
  if (customNote) text += `*Note:* ${customNote}\n\n`;

  text += `I would love to check your availability and package details.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
