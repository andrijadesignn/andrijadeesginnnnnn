const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("[data-menu]");
const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
const progress = document.querySelector(".scroll-progress");
const backTop = document.querySelector("[data-back-top]");
const contactForm = document.querySelector("[data-contact-form]");
const contactNote = document.querySelector("[data-contact-note]");
const quickInquiryForm = document.querySelector("[data-quick-inquiry-form]");
const quickInquiryNote = document.querySelector("[data-quick-inquiry-note]");
const miniForm = document.querySelector("[data-mini-form]");
const miniNote = document.querySelector("[data-mini-note]");
const orderForm = document.querySelector("[data-order-form]");
const orderNote = document.querySelector("[data-order-note]");
const orderProduct = document.querySelector("#order-product");
const orderPrice = document.querySelector("#order-price");
const orderSize = document.querySelector("#order-size");
const orderQuantity = document.querySelector("#order-qty");
const orderColor = document.querySelector("#order-color");
const orderCityCountry = document.querySelector("#order-city-country");
const orderSummary = document.querySelector("[data-order-summary]");
const merchOrderModal = document.querySelector("[data-merch-order-modal]");
const projectModal = document.querySelector("[data-project-modal]");
const illustrationsModal = document.querySelector("[data-illustrations-modal]");
const workModal = document.querySelector("[data-work-modal]");
const brochureModal = document.querySelector("[data-brochure-modal]");
const caseStudyModal = document.querySelector("[data-case-study-modal]");
const modalImage = document.querySelector("[data-modal-image]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalDescription = document.querySelector("[data-modal-description]");
const modalLink = document.querySelector("[data-modal-link]");
const workKicker = document.querySelector("[data-work-kicker]");
const workTitle = document.querySelector("[data-work-title]");
const workDescription = document.querySelector("[data-work-description]");
const workHighlights = document.querySelector("[data-work-highlights]");
const workGallery = document.querySelector("[data-work-gallery]");
let projectCards = [...document.querySelectorAll(".project-card[data-project-title][data-project-image]")];
const feedbackTrack = document.querySelector("[data-feedback-track]");
const feedbackCards = [...document.querySelectorAll("[data-feedback-card]")];
const feedbackMore = document.querySelector("[data-feedback-more]");
const faqItems = [...document.querySelectorAll("[data-faq-accordion] .faq-item")];
const photoReel = document.querySelector("[data-photo-reel]");
const photoTrack = document.querySelector("[data-photo-track]");
const photoCards = [...document.querySelectorAll("[data-photo-card]")];
const photoImages = [...document.querySelectorAll("[data-photo-card] img")];
const contactEmail = "andrijadesignnn@gmail.com";
let currentProjectIndex = 0;

const workCollections = {
  lemoneSicilia: {
    kicker: "BRANDING / VISUAL IDENTITY",
    title: "Lemone Sicilia",
    description: "A complete lemon-inspired branding project with identity direction, packaging presentation, bag mockups and fresh Mediterranean visual language.",
    highlights: [
      {
        label: "Goal",
        text: "Build a fresh Mediterranean identity that feels bright, memorable and ready for packaging."
      },
      {
        label: "Approach",
        text: "Combine citrus color, clean typography and product mockups into one consistent brand system."
      },
      {
        label: "Result",
        text: "A complete visual identity presentation with packaging, bags and brand atmosphere."
      }
    ],
    items: [
      {
        title: "Lemone Sicilia Brand Presentation 01",
        image: "./assets/work-optimized/lemone-sicilia/lemone-sicilia-01.jpg",
        description: "Main visual identity presentation introducing the Lemone Sicilia brand direction."
      },
      {
        title: "Lemone Sicilia Brand Presentation 02",
        image: "./assets/work-optimized/lemone-sicilia/lemone-sicilia-02.jpg",
        description: "Supporting brand visual with clean composition and citrus-inspired identity elements."
      },
      {
        title: "Lemone Sicilia Bag Mockups",
        image: "./assets/work-optimized/lemone-sicilia/lemone-sicilia-03-bags.jpg",
        description: "Paper bag mockup system showing how the identity works in real packaging use."
      },
      {
        title: "Lemone Sicilia Brand Presentation 04",
        image: "./assets/work-optimized/lemone-sicilia/lemone-sicilia-04.jpg",
        description: "Expanded branding layout focused on consistency, color and presentation quality."
      },
      {
        title: "Lemone Sicilia Brand Presentation 05",
        image: "./assets/work-optimized/lemone-sicilia/lemone-sicilia-05.jpg",
        description: "Premium mockup presentation for the Lemone Sicilia identity system."
      },
      {
        title: "Lemone Sicilia Brand System",
        image: "./assets/work-optimized/lemone-sicilia/lemone-sicilia-06.jpg",
        description: "Landscape brand system view showing the identity in a broader presentation format.",
        format: "landscape"
      },
      {
        title: "Lemone Sicilia Final Presentation",
        image: "./assets/work-optimized/lemone-sicilia/lemone-sicilia-07.jpg",
        description: "Final visual presentation tying together the Mediterranean brand atmosphere."
      }
    ]
  },
  yumco: {
    kicker: "BRAND IDENTITY / REDESIGN",
    title: "Yumco Brand Identity Redesign",
    description: "An expanded Yumco identity presentation with logo redesign direction, mockup applications and a cleaner visual system for professional brand use.",
    highlights: [
      {
        label: "Goal",
        text: "Refresh the identity while keeping the brand recognizable and easier to apply across materials."
      },
      {
        label: "Approach",
        text: "Use cleaner typography, stronger structure and practical mockup applications to show the system in context."
      },
      {
        label: "Result",
        text: "A fuller case-study presentation with multiple identity touchpoints and polished brand visuals."
      }
    ],
    items: [
      {
        title: "Yumco Identity Presentation 01",
        image: "./assets/work-optimized/yumco/yumco-01.jpg",
        description: "Main Yumco identity presentation showing the redesigned brand direction.",
        format: "landscape"
      },
      {
        title: "Yumco Identity Presentation 02",
        image: "./assets/work-optimized/yumco/yumco-02.jpg",
        description: "Supporting brand layout with clean structure and professional mockup presentation.",
        format: "landscape"
      },
      {
        title: "Yumco Vertical Application",
        image: "./assets/work-optimized/yumco/yumco-03.jpg",
        description: "Vertical brand application prepared as part of the complete identity system."
      },
      {
        title: "Yumco Identity Presentation 04",
        image: "./assets/work-optimized/yumco/yumco-04.jpg",
        description: "Additional brand touchpoint showing how the redesign works across presentation formats.",
        format: "landscape"
      },
      {
        title: "Yumco Identity Presentation 05",
        image: "./assets/work-optimized/yumco/yumco-05.jpg",
        description: "Mockup-focused view that strengthens the overall brand presence.",
        format: "landscape"
      },
      {
        title: "Yumco Identity Presentation 06",
        image: "./assets/work-optimized/yumco/yumco-06.jpg",
        description: "Clean application layout with a more serious and consistent brand feeling.",
        format: "landscape"
      },
      {
        title: "Yumco Final Brand Application",
        image: "./assets/work-optimized/yumco/yumco-07.jpg",
        description: "Final visual application from the Yumco redesign set.",
        format: "landscape"
      }
    ]
  },
  bags: {
    kicker: "PACKAGING / BAG DESIGN",
    title: "Bags",
    description: "Paper bag redesign concepts focused on clear brand presence, retail presentation and premium mockup impact.",
    highlights: [
      {
        label: "Goal",
        text: "Create packaging concepts that make familiar brands feel clean, premium and retail-ready."
      },
      {
        label: "Approach",
        text: "Keep the brand recognition strong while improving presentation, contrast and mockup impact."
      },
      {
        label: "Result",
        text: "Two focused paper bag concepts that show clear commercial packaging thinking."
      }
    ],
    items: [
      {
        title: "Nike Paper Bag Redesign",
        image: "./assets/work-optimized/bags/nike-paper-bag.jpg",
        description: "A Nike paper bag concept with a bold retail feel and strong brand recognition."
      },
      {
        title: "Starbucks Paper Bag Redesign",
        image: "./assets/work-optimized/bags/starbucks-paper-bag.jpg",
        description: "A Starbucks paper bag redesign concept made for a cleaner, more premium product handoff."
      }
    ]
  },
  packaging: {
    kicker: "PACKAGING / PRODUCT PRESENTATION",
    title: "Packaging",
    description: "Packaging and retail presentation concepts showing how identity can extend across bags, product applications and customer-facing touchpoints.",
    highlights: [
      {
        label: "Goal",
        text: "Show packaging visuals that feel practical, recognizable and ready for product presentation."
      },
      {
        label: "Approach",
        text: "Use clean mockups, strong brand placement and clear product context."
      },
      {
        label: "Result",
        text: "A focused packaging collection covering retail bags and brand application previews."
      }
    ],
    items: [
      {
        title: "Nike Paper Bag Redesign",
        image: "./assets/work-optimized/bags/nike-paper-bag.jpg",
        description: "A Nike paper bag concept with a bold retail feel and strong brand recognition."
      },
      {
        title: "Starbucks Paper Bag Redesign",
        image: "./assets/work-optimized/bags/starbucks-paper-bag.jpg",
        description: "A Starbucks paper bag redesign concept made for a cleaner, more premium product handoff."
      },
      {
        title: "Lemone Sicilia Bag Mockups",
        image: "./assets/work-optimized/lemone-sicilia/lemone-sicilia-03-bags.jpg",
        description: "Paper bag mockup system showing how the Lemone Sicilia identity works in real packaging use."
      },
      {
        title: "Lemone Sicilia Brand Presentation",
        image: "./assets/work-optimized/lemone-sicilia/lemone-sicilia-05.jpg",
        description: "Packaging-ready brand application with a fresh Mediterranean visual direction."
      }
    ]
  },
  catalog: {
    kicker: "PRINT / CATALOG DESIGN",
    title: "Catalog",
    description: "ASUS ROG catalog system with cover, back cover and interior pages shaped around a strong tech visual language.",
    highlights: [
      {
        label: "Goal",
        text: "Present a tech product catalog with a strong gaming tone and clear product hierarchy."
      },
      {
        label: "Approach",
        text: "Use bold contrast, controlled spacing and energetic imagery across cover and interior pages."
      },
      {
        label: "Result",
        text: "A cohesive catalog system prepared for professional print and portfolio presentation."
      }
    ],
    items: [
      {
        title: "ASUS ROG Catalog Cover",
        image: "./assets/work-optimized/catalog/asus-rog-catalog-cover.jpg",
        description: "Front cover concept with gaming energy, strong contrast and clear product attitude.",
        format: "landscape"
      },
      {
        title: "ASUS ROG Catalog Back Cover",
        image: "./assets/work-optimized/catalog/asus-rog-catalog-back-cover.jpg",
        description: "Back cover continuation with consistent layout and clean brand closing.",
        format: "landscape"
      },
      {
        title: "ASUS ROG Catalog Interior Pages",
        image: "./assets/work-optimized/catalog/asus-rog-catalog-interior.jpg",
        description: "Interior spread layout built for hierarchy, readability and product presentation.",
        format: "landscape"
      }
    ]
  },
  brochuresCatalogs: {
    kicker: "PRINT / BROCHURE & CATALOG DESIGN",
    title: "Brochures & Catalogs",
    description: "Brochure and catalog layouts built around clear hierarchy, strong page rhythm and print-ready presentation.",
    highlights: [
      {
        label: "Goal",
        text: "Present information clearly across covers, spreads and print-focused layouts."
      },
      {
        label: "Approach",
        text: "Use structured grids, strong type hierarchy and balanced image placement."
      },
      {
        label: "Result",
        text: "A combined print collection covering catalog layouts and brochure presentation."
      }
    ],
    items: [
      {
        title: "ASUS ROG Catalog Cover",
        image: "./assets/work-optimized/catalog/asus-rog-catalog-cover.jpg",
        description: "Front cover concept with gaming energy, strong contrast and clear product attitude.",
        format: "landscape"
      },
      {
        title: "ASUS ROG Catalog Back Cover",
        image: "./assets/work-optimized/catalog/asus-rog-catalog-back-cover.jpg",
        description: "Back cover continuation with consistent layout and clean brand closing.",
        format: "landscape"
      },
      {
        title: "ASUS ROG Catalog Interior Pages",
        image: "./assets/work-optimized/catalog/asus-rog-catalog-interior.jpg",
        description: "Interior spread layout built for hierarchy, readability and product presentation.",
        format: "landscape"
      },
      {
        title: "Cycling Bike 2024 Brochure Front",
        image: "./assets/cycling-brochure-1.jpg",
        description: "Creative cycling brochure cover with clean layout, vibrant visuals and strong print presentation.",
        format: "landscape"
      },
      {
        title: "Cycling Bike 2024 Brochure Back",
        image: "./assets/cycling-brochure-2.jpg",
        description: "Back cover design continuing the brochure system with a polished closing layout.",
        format: "landscape"
      },
      {
        title: "Cycling Bike 2024 Brochure Spread",
        image: "./assets/cycling-brochure-3.jpg",
        description: "Interior brochure spread focused on hierarchy, spacing and editorial clarity.",
        format: "landscape"
      }
    ]
  },
  books: {
    kicker: "EDITORIAL / BOOK COVER DESIGN",
    title: "Books",
    description: "Book cover concepts with atmospheric composition, strong contrast and clear shelf visibility.",
    highlights: [
      {
        label: "Goal",
        text: "Design covers that communicate genre quickly and stand out in a crowded editorial context."
      },
      {
        label: "Approach",
        text: "Build mood through contrast, title hierarchy, character focus and strong composition."
      },
      {
        label: "Result",
        text: "A set of cover concepts with clear atmosphere, readability and shelf presence."
      }
    ],
    items: [
      {
        title: "Crvena Vučica Book Cover",
        image: "./assets/work-optimized/books/crvena-vucica-book-cover.jpg",
        description: "A dramatic book cover concept with a strong narrative mood and red visual atmosphere.",
        format: "landscape"
      },
      {
        title: "Gost Agata Kristi Book Cover",
        image: "./assets/work-optimized/books/gost-agata-kristi-book-cover.jpg",
        description: "Mystery-focused cover direction with classic editorial tension and clean composition.",
        format: "landscape"
      },
      {
        title: "Krvavi mesec Book Cover",
        image: "./assets/work-optimized/books/krvavi-mesec-book-cover.jpg",
        description: "A dark book cover concept designed around contrast, suspense and visual impact."
      }
    ]
  },
  magazineCovers: {
    kicker: "EDITORIAL / MAGAZINE COVER DESIGN",
    title: "Magazine Covers",
    description: "Magazine cover and editorial front-page concepts focused on culture, Serbian heritage, visual hierarchy and strong cover presence.",
    highlights: [
      {
        label: "Goal",
        text: "Create magazine covers that feel cultural, clear and visually strong from the first page."
      },
      {
        label: "Approach",
        text: "Use strong subject focus, controlled typography and balanced editorial spacing."
      },
      {
        label: "Result",
        text: "A refined magazine cover set that expands the editorial design archive."
      }
    ],
    items: [
      {
        title: "Paja Jovanović Magazine Front Page",
        image: "./assets/work-optimized/magazine-covers/magazine-paja-jovanovic-front.jpg",
        description: "Editorial front page concept with classic Serbian art direction and clean hierarchy.",
        format: "landscape"
      },
      {
        title: "Manastir Studenica Magazine Front Page",
        image: "./assets/work-optimized/magazine-covers/magazine-manastir-studenica-front.jpg",
        description: "Cultural magazine front page focused on heritage, atmosphere and balanced type.",
        format: "landscape"
      },
      {
        title: "Manastir Studenica Magazine Layout",
        image: "./assets/work-optimized/magazine-covers/magazine-manastir-studenica-layout.jpg",
        description: "Magazine layout concept with clear editorial rhythm and visual storytelling.",
        format: "landscape"
      },
      {
        title: "Nadežda Petrović Magazine Cover",
        image: "./assets/work-optimized/magazine-covers/magazine-nadezda-petrovic.jpg",
        description: "Cover concept built around strong portrait presence, color and readable composition.",
        format: "landscape"
      },
      {
        title: "Paja Jovanović Magazine Cover",
        image: "./assets/work-optimized/magazine-covers/magazine-paja-jovanovic-cover.jpg",
        description: "Magazine cover with classic art inspiration and a polished editorial look.",
        format: "landscape"
      },
      {
        title: "Srpski Žurnal Magazine Cover",
        image: "./assets/work-optimized/magazine-covers/magazine-srpski-zurnal.jpg",
        description: "Editorial cover direction for Srpski Žurnal with bold title treatment and clean structure.",
        format: "landscape"
      }
    ]
  },
  monographs: {
    kicker: "EDITORIAL / MONOGRAPH DESIGN",
    title: "Monographs",
    description: "Monograph design projects showing cover systems, interior pages, editorial structure and polished publication presentation.",
    highlights: [
      {
        label: "Goal",
        text: "Show that editorial design can handle cultural and publication projects with clarity."
      },
      {
        label: "Approach",
        text: "Use structured covers, interior spreads and balanced typography for long-form reading."
      },
      {
        label: "Result",
        text: "Two monograph presentations that demonstrate cover systems and interior page rhythm."
      }
    ],
    items: [
      {
        title: "Branislav Nušić Monograph Cover",
        image: "./assets/work-optimized/monographs/branislav-nusic-cover.jpg",
        description: "Monograph cover design for Branislav Nušić with a clean editorial direction and strong cultural presentation.",
        format: "landscape"
      },
      {
        title: "Branislav Nušić Interior Pages",
        image: "./assets/work-optimized/monographs/branislav-nusic-interior-01.jpg",
        description: "Interior page spread designed for readability, hierarchy and a professional publication rhythm.",
        format: "landscape"
      },
      {
        title: "Branislav Nušić Interior Pages 02",
        image: "./assets/work-optimized/monographs/branislav-nusic-interior-02.jpg",
        description: "Additional monograph spread continuing the editorial system with balanced layout and image/text structure.",
        format: "landscape"
      },
      {
        title: "Dragan Bojanić Gidra Monograph Cover",
        image: "./assets/work-optimized/monographs/dragan-bojanic-gidra-cover.jpg",
        description: "Monograph cover design for Dragan Bojanić Gidra with a clean, recognizable and respectful editorial tone.",
        format: "landscape"
      },
      {
        title: "Dragan Bojanić Gidra Monograph Presentation",
        image: "./assets/work-optimized/monographs/dragan-bojanic-gidra-presentation.jpg",
        description: "Presentation spread for the Dragan Bojanić Gidra monograph, focused on visual storytelling and publication clarity.",
        format: "landscape"
      }
    ]
  },
  editorialDesign: {
    kicker: "EDITORIAL / BOOK & PUBLICATION DESIGN",
    title: "Book Covers & Editorial",
    description: "A broader editorial collection covering book covers, magazine covers and monograph layouts with clear hierarchy and strong visual atmosphere.",
    highlights: [
      {
        label: "Goal",
        text: "Show editorial work that communicates subject, mood and structure quickly."
      },
      {
        label: "Approach",
        text: "Combine cover composition, publication rhythm and readable type hierarchy."
      },
      {
        label: "Result",
        text: "A combined editorial archive with books, magazines and monograph design applications."
      }
    ],
    items: [
      {
        title: "Crvena Vučica Book Cover",
        image: "./assets/work-optimized/books/crvena-vucica-book-cover.jpg",
        description: "A dramatic book cover concept with a strong narrative mood and red visual atmosphere.",
        format: "landscape"
      },
      {
        title: "Gost Agata Kristi Book Cover",
        image: "./assets/work-optimized/books/gost-agata-kristi-book-cover.jpg",
        description: "Mystery-focused cover direction with classic editorial tension and clean composition.",
        format: "landscape"
      },
      {
        title: "Krvavi mesec Book Cover",
        image: "./assets/work-optimized/books/krvavi-mesec-book-cover.jpg",
        description: "A dark book cover concept designed around contrast, suspense and visual impact."
      },
      {
        title: "Srpski Žurnal Magazine Cover",
        image: "./assets/work-optimized/magazine-covers/magazine-srpski-zurnal.jpg",
        description: "Editorial cover direction for Srpski Žurnal with bold title treatment and clean structure.",
        format: "landscape"
      },
      {
        title: "Nadežda Petrović Magazine Cover",
        image: "./assets/work-optimized/magazine-covers/magazine-nadezda-petrovic.jpg",
        description: "Cover concept built around strong portrait presence, color and readable composition.",
        format: "landscape"
      },
      {
        title: "Branislav Nušić Monograph Cover",
        image: "./assets/work-optimized/monographs/branislav-nusic-cover.jpg",
        description: "Monograph cover design with a clean editorial direction and strong cultural presentation.",
        format: "landscape"
      },
      {
        title: "Dragan Bojanić Gidra Monograph Presentation",
        image: "./assets/work-optimized/monographs/dragan-bojanic-gidra-presentation.jpg",
        description: "Presentation spread focused on visual storytelling and publication clarity.",
        format: "landscape"
      },
      {
        title: "Serbia Banknote Redesign 01",
        image: "./assets/work-optimized/currency-redesign/serbia-banknote-redesign-01.jpg",
        description: "Experimental Serbian banknote redesign concept with cultural styling and detailed print composition.",
        format: "landscape"
      },
      {
        title: "Serbia Banknote Redesign 02",
        image: "./assets/work-optimized/currency-redesign/serbia-banknote-redesign-02.jpg",
        description: "Second banknote redesign presentation showing the concept as a complete print system.",
        format: "landscape"
      }
    ]
  },
  newspaperAdvertising: {
    kicker: "ADVERTISING / NEWSPAPER DESIGN",
    title: "Newspaper Advertising Design",
    description: "Ford Mustang newspaper advertising concepts created with strong print hierarchy, automotive energy and campaign-style presentation.",
    highlights: [
      {
        label: "Goal",
        text: "Show how a bold automotive message can work inside a newspaper advertising format."
      },
      {
        label: "Approach",
        text: "Use strong contrast, product focus and clean copy hierarchy for quick print readability."
      },
      {
        label: "Result",
        text: "Two advertising layouts that add a sharper campaign direction to the print portfolio."
      }
    ],
    items: [
      {
        title: "Ford Mustang Newspaper Advertising 01",
        image: "./assets/work-optimized/newspaper-advertising/ford-mustang-advertising-01.jpg",
        description: "Automotive newspaper ad layout with bold product focus and print-ready visual hierarchy.",
        format: "landscape"
      },
      {
        title: "Ford Mustang Newspaper Advertising 02",
        image: "./assets/work-optimized/newspaper-advertising/ford-mustang-advertising-02.jpg",
        description: "Second Ford Mustang newspaper advertising direction with strong contrast and campaign impact.",
        format: "landscape"
      }
    ]
  },
  currencyRedesign: {
    kicker: "PRINT CONCEPT / CURRENCY REDESIGN",
    title: "Serbia Banknote Redesign",
    description: "A Serbian banknote redesign concept exploring cultural identity, detailed print composition and a cleaner modern presentation.",
    highlights: [
      {
        label: "Goal",
        text: "Create a more contemporary banknote concept while keeping a strong Serbian cultural feeling."
      },
      {
        label: "Approach",
        text: "Balance detailed ornament, portrait focus and structured typography for a believable print concept."
      },
      {
        label: "Result",
        text: "Two polished currency redesign visuals that strengthen the experimental print archive."
      }
    ],
    items: [
      {
        title: "Serbia Banknote Redesign 01",
        image: "./assets/work-optimized/currency-redesign/serbia-banknote-redesign-01.jpg",
        description: "Serbian banknote redesign concept with detailed cultural styling and refined composition.",
        format: "landscape"
      },
      {
        title: "Serbia Banknote Redesign 02",
        image: "./assets/work-optimized/currency-redesign/serbia-banknote-redesign-02.jpg",
        description: "Second banknote redesign presentation showing the concept as a complete print system.",
        format: "landscape"
      }
    ]
  },
  posterBillboard: {
    kicker: "POSTER / BILLBOARD DESIGN",
    title: "Poster & Billboard",
    description: "Sports, music, entertainment and billboard visuals designed for fast recognition and public impact.",
    highlights: [
      {
        label: "Goal",
        text: "Create visuals that read quickly in public, event and promotional spaces."
      },
      {
        label: "Approach",
        text: "Use high contrast, strong hierarchy and subject-focused composition for fast recognition."
      },
      {
        label: "Result",
        text: "A set of posters and billboard visuals with strong impact and professional presentation."
      }
    ],
    items: [
      {
        title: "Billboard Netherlands",
        image: "./assets/work-optimized/poster-billboard/billboard-netherlands.jpg",
        description: "A billboard visual concept made for outdoor visibility and clean destination impact."
      },
      {
        title: "Ford Mustang Newspaper Advertising 01",
        image: "./assets/work-optimized/newspaper-advertising/ford-mustang-advertising-01.jpg",
        description: "Automotive newspaper ad layout with bold product focus and print-ready visual hierarchy.",
        format: "landscape"
      },
      {
        title: "Ford Mustang Newspaper Advertising 02",
        image: "./assets/work-optimized/newspaper-advertising/ford-mustang-advertising-02.jpg",
        description: "Second Ford Mustang newspaper advertising direction with strong contrast and campaign impact.",
        format: "landscape"
      },
      {
        title: "Poster Aleksa Avramović",
        image: "./assets/work-optimized/poster-billboard/poster-aleksa-avramovic.jpg",
        description: "Sports poster with energetic composition and athlete-focused visual hierarchy."
      },
      {
        title: "Poster Bogdan Bogdanović",
        image: "./assets/work-optimized/poster-billboard/poster-bogdan-bogdanovic.jpg",
        description: "Basketball poster direction with strong contrast and dynamic player presentation."
      },
      {
        title: "Poster Mortal Kombat",
        image: "./assets/work-optimized/poster-billboard/poster-mortal-kombat.jpg",
        description: "Entertainment poster with bold cinematic energy and intense visual atmosphere."
      },
      {
        title: "Poster Nikola Jokić",
        image: "./assets/work-optimized/poster-billboard/poster-nikola-jokic.jpg",
        description: "Sports poster focused on personality, composition and premium editorial impact."
      },
      {
        title: "Poster Pearl Jam",
        image: "./assets/work-optimized/poster-billboard/poster-pearl-jam.jpg",
        description: "Music poster concept with expressive mood and strong event-style typography."
      },
      {
        title: "Poster Red Hot Chili Peppers",
        image: "./assets/work-optimized/poster-billboard/poster-red-hot-chili-peppers.jpg",
        description: "Music poster concept with bold rhythm, contrast and performance-driven energy."
      }
    ]
  }
};

document.body.classList.add("enhanced");

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  menu.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

const navTargets = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function setActiveNav(id) {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
  });
}

if ("IntersectionObserver" in window && navTargets.length) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveNav(entry.target.id);
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

  navTargets.forEach((section) => navObserver.observe(section));
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const amount = scrollable > 0 ?window.scrollY / scrollable : 0;
  progress.style.transform = `scaleX(${Math.min(Math.max(amount, 0), 1)})`;
  backTop?.classList.toggle("is-visible", window.scrollY > 900);
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

backTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const revealItems = document.querySelectorAll(".reveal");
const revealObserver = "IntersectionObserver" in window
  ?new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px" })
  : null;

revealItems.forEach((item) => {
  if (revealObserver) {
    revealObserver.observe(item);
  } else {
    item.classList.add("is-visible");
  }
});

function formDataToObject(formData) {
  return Object.fromEntries([...formData.entries()].map(([key, value]) => [key, String(value).trim()]));
}

async function submitToEndpoint(endpoint, payload) {
  if (!endpoint) {
    throw new Error("Missing endpoint");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.message || "Request failed.");
  }

  return result;
}

function getSelectedOrder() {
  const product = String(orderProduct?.value || "");
  const price = String(orderPrice?.value || "Custom quote");
  const quantity = Math.max(Number(orderQuantity?.value || 1), 1);
  const unit = Number(price.match(/\d+([.,]\d+)?/)?.[0]?.replace(",", ".") || 0);
  const currency = price.replace(/[\d\s.,]/g, "").trim() || "EUR";
  const total = unit * quantity;

  return {
    product,
    price,
    quantity,
    totalLabel: unit ?`${total} ${currency}` : price
  };
}

function updateOrderSummary() {
  if (!orderSummary) return;

  const order = getSelectedOrder();
  orderSummary.innerHTML = `
    <span>Selected: ${order.product || "Choose product"}</span>
    <strong>${order.price && order.price !== "Custom quote" ? `Estimated total: ${order.totalLabel}` : "Custom quote"}</strong>
    <small>Size: ${orderSize?.value || "Not selected"} · Quantity: ${order.quantity} · Color: ${orderColor?.value || "To be confirmed"}. Final scope, production and delivery details are confirmed directly.</small>
  `;
}

function openOrderModal({ product, price, size, color, quantity }) {
  if (!merchOrderModal || !orderForm) return;

  if (orderProduct) orderProduct.value = product || "";
  if (orderPrice) orderPrice.value = price || "Custom quote";
  if (orderSize) orderSize.value = size || "M";
  if (orderColor) orderColor.value = color || "Black";
  if (orderQuantity) orderQuantity.value = Math.max(Number(quantity || 1), 1);

  updateOrderSummary();
  merchOrderModal.classList.add("is-open");
  merchOrderModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  window.setTimeout(() => orderForm.querySelector("#order-name")?.focus(), 180);

  if (orderNote) {
    orderNote.textContent = "";
  }
}

function closeOrderModal() {
  if (!merchOrderModal) return;

  merchOrderModal.classList.remove("is-open");
  merchOrderModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openProject(projectCard) {
  if (!projectCard || !projectModal) return;
  closeIllustrations();
  closeWorkCollection();

  const nextIndex = projectCards.indexOf(projectCard);
  if (nextIndex >= 0) {
    currentProjectIndex = nextIndex;
  }

  const title = projectCard.dataset.projectTitle || "Project preview";
  const image = projectCard.dataset.projectImage || "";
  const link = projectCard.dataset.projectLink || "https://www.behance.net/andrijadesign";
  const description = projectCard.querySelector("p")?.textContent?.trim() || "";

  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalImage.src = image;
  modalImage.alt = `${title} full illustration`;
  modalLink.href = link;
  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function showProjectByStep(step) {
  if (!projectCards.length) return;

  currentProjectIndex = (currentProjectIndex + step + projectCards.length) % projectCards.length;
  openProject(projectCards[currentProjectIndex]);
}

function closeProject() {
  if (!projectModal) return;

  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openIllustrations() {
  if (!illustrationsModal) return;

  illustrationsModal.classList.add("is-open");
  illustrationsModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeIllustrations() {
  if (!illustrationsModal) return;

  illustrationsModal.classList.remove("is-open");
  illustrationsModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openWorkCollection(key) {
  const collection = workCollections[key];
  if (!collection || !workModal || !workGallery) return;

  workKicker.textContent = collection.kicker;
  workTitle.textContent = collection.title;
  workDescription.textContent = collection.description;
  if (workHighlights) {
    const highlights = collection.highlights || [
      {
        label: "Goal",
        text: "Present the work clearly and make the project easy to understand."
      },
      {
        label: "Approach",
        text: "Use clean hierarchy, strong visual rhythm and consistent presentation."
      },
      {
        label: "Result",
        text: "A polished portfolio-ready project folder with complete visual context."
      }
    ];

    workHighlights.innerHTML = highlights.map((item) => `
      <article class="work-case-note">
        <strong>${item.label}</strong>
        <span>${item.text}</span>
      </article>
    `).join("");
  }
  workGallery.innerHTML = collection.items.map((item) => `
    <article class="project-card" data-project-title="${item.title}" data-project-image="${item.image}" data-project-link="https://www.behance.net/andrijadesign" data-project-format="${item.format || "portrait"}">
      <button class="project-image-button" type="button" data-open-project aria-label="View full ${item.title}">
        <img src="${item.image}" alt="${item.title} graphic design project by Andrija Živković" loading="lazy" decoding="async">
      </button>
      <div>
        <span class="project-kicker">${collection.title}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </article>
  `).join("");

  workGallery.querySelectorAll("[data-open-project]").forEach((button) => {
    button.addEventListener("click", () => openProject(button.closest(".project-card")));
  });

  projectCards = [...document.querySelectorAll(".project-card[data-project-title][data-project-image]")];
  workModal.classList.add("is-open");
  workModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeWorkCollection() {
  if (!workModal) return;

  workModal.classList.remove("is-open");
  workModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openBrochure() {
  if (!brochureModal) return;

  brochureModal.classList.add("is-open");
  brochureModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeBrochure() {
  if (!brochureModal) return;

  brochureModal.classList.remove("is-open");
  brochureModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openCaseStudy() {
  if (!caseStudyModal) return;

  caseStudyModal.classList.add("is-open");
  caseStudyModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeCaseStudy() {
  if (!caseStudyModal) return;

  caseStudyModal.classList.remove("is-open");
  caseStudyModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll("[data-open-project]").forEach((button) => {
  button.addEventListener("click", () => {
    openProject(button.closest(".project-card"));
  });
});

document.querySelectorAll("[data-close-project]").forEach((button) => {
  button.addEventListener("click", closeProject);
});

document.querySelector("[data-prev-project]")?.addEventListener("click", () => showProjectByStep(-1));
document.querySelector("[data-next-project]")?.addEventListener("click", () => showProjectByStep(1));

document.querySelectorAll("[data-open-illustrations]").forEach((button) => {
  button.addEventListener("click", openIllustrations);
});

document.querySelectorAll("[data-close-illustrations]").forEach((button) => {
  button.addEventListener("click", closeIllustrations);
});

document.querySelectorAll("[data-open-work-collection]").forEach((button) => {
  button.addEventListener("click", () => openWorkCollection(button.dataset.openWorkCollection));
});

document.querySelectorAll("[data-close-work]").forEach((button) => {
  button.addEventListener("click", closeWorkCollection);
});

document.querySelectorAll("[data-open-brochure]").forEach((button) => {
  button.addEventListener("click", openBrochure);
});

document.querySelectorAll("[data-close-brochure]").forEach((button) => {
  button.addEventListener("click", closeBrochure);
});

document.querySelectorAll("[data-open-case-study]").forEach((button) => {
  button.addEventListener("click", openCaseStudy);
});

document.querySelectorAll("[data-close-case-study]").forEach((button) => {
  button.addEventListener("click", closeCaseStudy);
});

function renderFeedback(expanded = false) {
  if (!feedbackTrack || !feedbackCards.length) return;

  feedbackTrack.querySelectorAll(".feedback-card--clone").forEach((clone) => clone.remove());

  feedbackCards.forEach((card, index) => {
    const shouldHide = !expanded && index >= 6;
    card.classList.toggle("is-hidden", shouldHide);
  });

  feedbackCards
    .filter((card, index) => expanded || index < 6)
    .forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.classList.add("feedback-card--clone");
      clone.classList.remove("is-hidden");
      feedbackTrack.appendChild(clone);
    });

  if (feedbackMore) {
    feedbackMore.textContent = expanded ? "Show Less Feedback" : "View More Feedback";
  }
}

if (feedbackTrack && feedbackCards.length) {
  let feedbackExpanded = false;
  renderFeedback(false);

  feedbackMore?.addEventListener("click", () => {
    feedbackExpanded = !feedbackExpanded;
    renderFeedback(feedbackExpanded);
  });
}

if (photoTrack && photoCards.length) {
  photoCards.forEach((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.classList.add("photo-frame--clone");
    clone.querySelectorAll("img").forEach((image) => {
      image.setAttribute("loading", "eager");
      image.setAttribute("fetchpriority", "high");
    });
    photoTrack.appendChild(clone);
  });
}

function setFaqItemState(item, shouldOpen) {
  const button = item.querySelector(".faq-question");
  const panel = item.querySelector(".faq-panel");
  const inner = item.querySelector(".faq-panel__inner");

  if (!button || !panel || !inner) return;

  button.setAttribute("aria-expanded", String(shouldOpen));
  item.classList.toggle("is-open", shouldOpen);

  if (shouldOpen) {
    panel.hidden = false;
    panel.style.maxHeight = "0px";
    window.requestAnimationFrame(() => {
      panel.style.maxHeight = `${inner.scrollHeight}px`;
    });
    return;
  }

  panel.style.maxHeight = `${inner.scrollHeight}px`;
  window.requestAnimationFrame(() => {
    panel.style.maxHeight = "0px";
  });
}

function initializeFaqAccordion() {
  if (!faqItems.length) return;

  faqItems.forEach((item, index) => {
    const button = item.querySelector(".faq-question");
    const panel = item.querySelector(".faq-panel");
    const inner = item.querySelector(".faq-panel__inner");
    const isOpen = item.classList.contains("is-open");

    if (!button || !panel || !inner) return;

    button.setAttribute("aria-expanded", String(isOpen));
    panel.hidden = !isOpen;
    panel.style.maxHeight = isOpen ? `${inner.scrollHeight}px` : "0px";

    if (isOpen && faqItems.findIndex((faqItem) => faqItem.classList.contains("is-open")) !== index) {
      setFaqItemState(item, false);
    }

    button.addEventListener("click", () => {
      const willOpen = !item.classList.contains("is-open");

      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("is-open")) {
          setFaqItemState(otherItem, false);
        }
      });

      setFaqItemState(item, willOpen);
    });

    panel.addEventListener("transitionend", (event) => {
      if (event.propertyName !== "max-height") return;
      if (!item.classList.contains("is-open")) {
        panel.hidden = true;
      } else {
        panel.style.maxHeight = `${inner.scrollHeight}px`;
      }
    });
  });

  window.addEventListener("resize", () => {
    faqItems.forEach((item) => {
      const panel = item.querySelector(".faq-panel");
      const inner = item.querySelector(".faq-panel__inner");

      if (item.classList.contains("is-open") && panel && inner) {
        panel.style.maxHeight = `${inner.scrollHeight}px`;
      }
    });
  });
}

initializeFaqAccordion();

function preloadPhotography() {
  if (!photoImages.length || photoReel?.dataset.photosPreloaded === "true") return;

  photoReel?.classList.add("is-ready");
  if (photoReel) {
    photoReel.dataset.photosPreloaded = "true";
  }

  let loaded = 0;
  const done = () => {
    loaded += 1;
  };

  photoImages.forEach((image) => {
    image.setAttribute("loading", "eager");
    image.setAttribute("fetchpriority", "high");

    if (image.complete && image.naturalWidth > 0) {
      done();
      return;
    }

    const preloader = new Image();
    preloader.onload = done;
    preloader.onerror = done;
    preloader.src = image.currentSrc || image.src;
  });
}

if (photoReel && photoImages.length) {
  photoReel.classList.add("is-ready");
  preloadPhotography();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", preloadPhotography, { once: true });
  } else {
    window.requestAnimationFrame(preloadPhotography);
  }
}

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const payload = formDataToObject(data);
  const name = payload.name || "";
  const email = payload.email || "";
  const company = payload.company || "";
  const budget = payload.budget || "";
  const deadline = payload.deadline || "";
  const message = payload.message || "";
  const referenceLinks = payload.referenceLinks || "";
  const preferredContact = payload.preferredContact || "";

  if (!name || !email || !budget || !deadline || !message) {
    contactNote.textContent = "Please fill in your name, email, budget, deadline and project description.";
    return;
  }

  const button = contactForm.querySelector("button[type='submit']");
  button.disabled = true;
  contactNote.textContent = "Sending your message directly...";

  try {
    await submitToEndpoint(contactForm.dataset.contactEndpoint || "/api/contact", {
      type: "project",
      ...payload,
      company,
      deadline,
      referenceLinks,
      preferredContact
    });
    contactForm.reset();
    contactNote.textContent = "Thank you for reaching out. I’ve received your project inquiry and will review the details before getting back to you with the next steps.";
  } catch (error) {
    contactNote.textContent = "Message could not be sent right now. Please try again or contact me on Instagram.";
  } finally {
    button.disabled = false;
  }
});

quickInquiryForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(quickInquiryForm);
  const payload = formDataToObject(data);
  const name = payload.name || "";
  const email = payload.email || "";
  const projectType = payload.projectType || "";

  if (!name || !email || !projectType) {
    quickInquiryNote.textContent = "Please add your name, email and what you need.";
    return;
  }

  const button = quickInquiryForm.querySelector("button[type='submit']");
  button.disabled = true;
  quickInquiryNote.textContent = "Sending quick inquiry...";

  try {
    await submitToEndpoint(quickInquiryForm.dataset.contactEndpoint || "/api/contact", {
      type: "quick",
      name,
      email,
      projectType,
      company: "Not added",
      budget: "Not selected",
      deadline: "Not selected",
      preferredContact: "Email",
      referenceLinks: "Not added",
      message: `Quick project inquiry. Service needed: ${projectType}.`
    });
    quickInquiryForm.reset();
    quickInquiryNote.textContent = "Quick inquiry sent. I’ll reply with the next steps.";
  } catch (error) {
    quickInquiryNote.textContent = "Inquiry could not be sent right now. Please try again or contact me on Instagram.";
  } finally {
    button.disabled = false;
  }
});

document.querySelectorAll("[data-order-product]").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.orderProduct || "";
    const price = button.dataset.orderPrice || "Custom quote";
    const card = button.closest(".merch-card");
    const size = card?.querySelector("[data-product-size]")?.value || (product.toLowerCase().includes("badge") ?"One size" : "M");
    const color = card?.querySelector("[data-product-color]")?.value || "Black";
    const quantity = card?.querySelector("[data-product-quantity]")?.value || "1";

    openOrderModal({ product, price, size, color, quantity });
  });
});

[orderProduct, orderPrice, orderSize, orderQuantity, orderColor].forEach((field) => {
  field?.addEventListener("input", updateOrderSummary);
  field?.addEventListener("change", updateOrderSummary);
});

document.querySelectorAll("[data-close-order-modal]").forEach((button) => {
  button.addEventListener("click", closeOrderModal);
});

updateOrderSummary();

orderForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(orderForm);
  const payload = formDataToObject(data);
  const product = String(payload.product || "").trim();
  const price = String(payload.price || "Custom quote").trim();
  const order = getSelectedOrder();
  const size = payload.size || "";
  const quantity = payload.quantity || "1";
  const color = payload.color || "";
  const name = payload.name || "";
  const contact = payload.contact || "";
  const cityCountry = payload.cityCountry || "";
  const message = payload.message || "";

  if (!product || !name || !contact || !cityCountry || !quantity) {
    orderNote.textContent = "Please fill in product, quantity, name, email or Instagram, and city / country.";
    return;
  }

  const orderMessage = [
    `Product: ${product}`,
    `Price: ${price}`,
    `Estimated total: ${order.totalLabel}`,
    `Size: ${size}`,
    `Quantity: ${quantity}`,
    `Color preference: ${color || "Not added"}`,
    "",
    "Customer:",
    `Name: ${name}`,
    `Email or Instagram: ${contact}`,
    `City / Country: ${cityCountry}`,
    "",
    "Additional note:",
    message || "No note added."
  ].join("\n");
  const button = orderForm.querySelector("button[type='submit']");
  button.disabled = true;
  orderNote.textContent = "Sending your order directly...";

  try {
    const result = await submitToEndpoint(orderForm.dataset.orderEndpoint || "/api/order", {
      ...payload,
      product,
      price,
      estimatedTotal: order.totalLabel,
      colorPreference: color || "Not added",
      orderSummary: orderMessage
    });

    if (result.paymentUrl) {
      orderNote.innerHTML = `Order sent. Continue to secure payment: <a href="${result.paymentUrl}">Open payment</a>`;
      window.setTimeout(() => {
        window.location.href = result.paymentUrl;
      }, 1200);
    } else {
      orderNote.textContent = "Thank you. Your order request has been sent. I will confirm availability, final price, payment and production details shortly.";
    }
  } catch (error) {
    orderNote.textContent = "Order could not be sent right now. Please try again or contact me on Instagram.";
  } finally {
    button.disabled = false;
  }
});

miniForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(miniForm);
  const email = String(data.get("email") || "").trim();

  if (!email) {
    miniNote.textContent = "Enter your email and I’ll prepare a project inquiry.";
    return;
  }

  const button = miniForm.querySelector("button[type='submit']");
  button.disabled = true;
  miniNote.textContent = "Sending your project inquiry directly...";

  try {
    await submitToEndpoint(miniForm.dataset.contactEndpoint || "/api/contact", {
      type: "quick",
      name: "Website visitor",
      email,
      projectType: "Brand identity",
      timeline: "Flexible",
      budget: "",
      message: "Hi Andrija, I’m interested in starting a brand identity project."
    });
    miniForm.reset();
    miniNote.textContent = "Inquiry sent. You will receive an email confirmation.";
  } catch (error) {
    miniNote.textContent = "Inquiry could not be sent right now. Please try again or contact me on Instagram.";
  } finally {
    button.disabled = false;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProject();
    closeIllustrations();
    closeWorkCollection();
    closeBrochure();
    closeCaseStudy();
    closeOrderModal();
  }

  if (projectModal?.classList.contains("is-open")) {
    if (event.key === "ArrowLeft") {
      showProjectByStep(-1);
    }

    if (event.key === "ArrowRight") {
      showProjectByStep(1);
    }
  }
});
