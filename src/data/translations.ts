export type Language = 'EN' | 'FR' | 'DE' | 'AR' | 'PT';

export interface Translations {
  nav: {
    journeys: string;
    routeMap: string;
    provinces: string;
    villas: string;
    tripBuilder: string;
    travelHub: string;
    curateJourney: string;
    ambientSound: string;
    playingSound: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    styleLabel: string;
    seasonLabel: string;
    ctaExplore: string;
    badge1: string;
    badge2: string;
    badge3: string;
  };
  signature: {
    tag: string;
    title: string;
    desc: string;
    viewItinerary: string;
    from: string;
    perGuest: string;
    pace: string;
  };
  routeMap: {
    tag: string;
    title: string;
    desc: string;
    includeRegion: string;
    gridNotice: string;
  };
  villas: {
    tag: string;
    title: string;
    all: string;
    heritage: string;
    glamping: string;
    wellness: string;
    quickView: string;
    night: string;
  };
  tripBuilder: {
    tag: string;
    title: string;
    desc: string;
    step1: string;
    step2: string;
    partySize: string;
    step3: string;
    step4: string;
    estInvestment: string;
    perGuest: string;
    includes: string;
    yourName: string;
    preferredMonth: string;
    wishes: string;
    ctaWhatsapp: string;
  };
  travelHub: {
    tag: string;
    title: string;
    desc: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  EN: {
    nav: {
      journeys: "Signature Journeys",
      routeMap: "Route Map",
      provinces: "Provinces",
      villas: "Stays & Villas",
      tripBuilder: "Trip Builder",
      travelHub: "Travel Hub",
      curateJourney: "Curate Journey",
      ambientSound: "Ambient Sound",
      playingSound: "Ceylon Mist ♫",
    },
    hero: {
      badge: "Private & Bespoke Expeditions in Sri Lanka",
      titleLine1: "The Art of Slow Luxury",
      titleLine2: "in Ceylon.",
      subtitle: "Private expeditions through misty tea kingdoms, untamed leopard sanctuaries, and secluded Indian Ocean retreats. Crafted with intimate precision.",
      styleLabel: "Travel Style",
      seasonLabel: "Preferred Season",
      ctaExplore: "Explore Journeys →",
      badge1: "100% Tailored Journeys",
      badge2: "Dedicated Chauffeur-Guides",
      badge3: "Hand-Curated Luxury Stays",
    },
    signature: {
      tag: "Masterpiece Itineraries",
      title: "The Signature Collections",
      desc: "Each route is carefully balanced for road pacing, private chartered train transitions, and secluded luxury sanctuaries. Click any itinerary to review the full day-by-day expedition.",
      viewItinerary: "View Day-by-Day Plan",
      from: "From",
      perGuest: "/ guest",
      pace: "Pace",
    },
    routeMap: {
      tag: "Geospatial Intelligence",
      title: "The Sri Lanka Route Explorer",
      desc: "Click any province node or circuit preset below to reveal authentic drive pacing, elevation shifts, and private transit options.",
      includeRegion: "Include in My Trip Plan →",
      gridNotice: "Interactive Ceylon Grid • Click Any Node",
    },
    villas: {
      tag: "Sanctuaries & Retreats",
      title: "Handpicked Private Stays",
      all: "All Stays",
      heritage: "Heritage",
      glamping: "Glamping",
      wellness: "Wellness",
      quickView: "Quick View",
      night: "/ night",
    },
    tripBuilder: {
      tag: "Custom Route Architect",
      title: "Curate Your Bespoke Expedition",
      desc: "Configure your preferred travel pacing, destinations, and accommodation level. Our real-time engine estimates your journey investment.",
      step1: "1. Select Your Primary Passion",
      step2: "2. Expedition Duration",
      partySize: "Party Size",
      step3: "3. Luxury Sanctuary Tier",
      step4: "4. Desired Provinces (Select multiple)",
      estInvestment: "Estimated Total Journey Investment",
      perGuest: "/ guest",
      includes: "Includes private chauffeur SUV, luxury stays, daily breakfast & all national park permits.",
      yourName: "Your Name",
      preferredMonth: "Preferred Month",
      wishes: "Special Wishes or Preferences",
      ctaWhatsapp: "Commission Journey via WhatsApp Concierge →",
    },
    travelHub: {
      tag: "Practical Intelligence",
      title: "Know Before You Depart",
      desc: "Essential curated guidance for smooth arrivals and culturally attuned expeditions.",
    },
  },
  FR: {
    nav: {
      journeys: "Voyages Signatures",
      routeMap: "Carte des Itinéraires",
      provinces: "Provinces",
      villas: "Villas & Hôtels",
      tripBuilder: "Créateur de Voyage",
      travelHub: "Guide Pratique",
      curateJourney: "Créer un Voyage",
      ambientSound: "Ambiance Sonore",
      playingSound: "Brume de Ceylan ♫",
    },
    hero: {
      badge: "Expéditions Privées & Sur-Mesure au Sri Lanka",
      titleLine1: "L'Art du Luxe Authentique",
      titleLine2: "à Ceylan.",
      subtitle: "Expéditions privées à travers les royaumes du thé brumeux, les sanctuaires de léopards sauvages et les retraites secrètes de l'Océan Indien.",
      styleLabel: "Style de Voyage",
      seasonLabel: "Saison Préférée",
      ctaExplore: "Découvrir les Voyages →",
      badge1: "Voyages 100% Sur-Mesure",
      badge2: "Chauffeurs-Guides Dédiés",
      badge3: "Séjours de Luxe Triés sur le Volet",
    },
    signature: {
      tag: "Itinéraires d'Exception",
      title: "Les Collections Signatures",
      desc: "Chaque itinéraire est minutieusement équilibré pour le confort de route, les voyages en train panoramique privé et les sanctuaires exclusifs.",
      viewItinerary: "Voir l'Itinéraire Jour par Jour",
      from: "À partir de",
      perGuest: "/ voyageur",
      pace: "Rythme",
    },
    routeMap: {
      tag: "Intelligence Géospatiale",
      title: "Explorateur d'Itinéraires au Sri Lanka",
      desc: "Cliquez sur les étapes pour afficher les durées de route réelles, les altitudes et les options de transfert privé.",
      includeRegion: "Ajouter à Mon Voyage →",
      gridNotice: "Carte Interactive de Ceylan • Cliquez sur un Pôle",
    },
    villas: {
      tag: "Sanctuaires & Retraites",
      title: "Séjours Privés d'Exception",
      all: "Tous les Séjours",
      heritage: "Héritage",
      glamping: "Glamping Safari",
      wellness: "Bien-Être",
      quickView: "Aperçu Rapide",
      night: "/ nuit",
    },
    tripBuilder: {
      tag: "Architecte d'Itinéraire",
      title: "Composez Votre Expédition Sur-Mesure",
      desc: "Définissez votre rythme, vos étapes et le niveau de vos hébergements. Notre calculateur estime votre budget en temps réel.",
      step1: "1. Choisissez Votre Passion Principale",
      step2: "2. Durée de l'Expédition",
      partySize: "Nombre de Voyageurs",
      step3: "3. Catégorie d'Hébergement",
      step4: "4. Provinces Souhaitées (Sélectionnez plusieurs)",
      estInvestment: "Estimation Globale du Voyage",
      perGuest: "/ voyageur",
      includes: "Comprend SUV privé avec chauffeur, hébergements de luxe, petits-déjeuners et accès aux parcs.",
      yourName: "Votre Nom",
      preferredMonth: "Mois Envisagé",
      wishes: "Souhaits Particuliers",
      ctaWhatsapp: "Demander Mon Voyage via Concierge WhatsApp →",
    },
    travelHub: {
      tag: "Informations Essentielles",
      title: "Tout Savoir Avant de Partir",
      desc: "Conseils indispensables pour une arrivée fluide et une immersion respectueuse.",
    },
  },
  DE: {
    nav: {
      journeys: "Signature Reisen",
      routeMap: "Routenkarte",
      provinces: "Provinzen",
      villas: "Villen & Resorts",
      tripBuilder: "Reise-Planer",
      travelHub: "Reise-Guide",
      curateJourney: "Reise Gestalten",
      ambientSound: "Klangkulisse",
      playingSound: "Ceylon Nebel ♫",
    },
    hero: {
      badge: "Private & Maßgeschneiderte Expeditionen in Sri Lanka",
      titleLine1: "Die Kunst des Slow Luxury",
      titleLine2: "in Ceylon.",
      subtitle: "Private Expeditionen durch neblige Teeregionen, wilde Leopardenreservate und abgeschiedene Luxus-Resorts am Indischen Ozean.",
      styleLabel: "Reisestil",
      seasonLabel: "Bevorzugte Jahreszeit",
      ctaExplore: "Reisen Entdecken →",
      badge1: "100% Maßgeschneidert",
      badge2: "Eigene Chauffeure & Guides",
      badge3: "Handverlesene Luxus-Unterkünfte",
    },
    signature: {
      tag: "Meisterhafte Reiserouten",
      title: "Die Signature Kollektionen",
      desc: "Jede Route ist perfekt auf Reisetempo, private Zugtransfers und exklusive Lodges abgestimmt.",
      viewItinerary: "Tagesprogramm Ansehen",
      from: "Ab",
      perGuest: "/ Gast",
      pace: "Tempo",
    },
    routeMap: {
      tag: "Geodaten & Reiserouten",
      title: "Sri Lanka Routen-Explorer",
      desc: "Klicken Sie auf Provinzen, um reale Fahrzeiten, Höhenlagen und private Transferoptionen zu sehen.",
      includeRegion: "Zu Meiner Reise Hinzufügen →",
      gridNotice: "Interaktive Ceylon-Karte • Punkt Auswählen",
    },
    villas: {
      tag: "Rückzugsorte & Luxus",
      title: "Exklusive Private Unterkünfte",
      all: "Alle Stays",
      heritage: "Heritage",
      glamping: "Glamping",
      wellness: "Wellness",
      quickView: "Schnellansicht",
      night: "/ Nacht",
    },
    tripBuilder: {
      tag: "Reiserouten-Architekt",
      title: "Planen Sie Ihre Individuelle Reise",
      desc: "Wählen Sie Tempo, Reiseziele und Unterkunftsstandard. Unser Rechner kalkuliert Ihr Budget in Echtzeit.",
      step1: "1. Wählen Sie Ihren Reiseschwerpunkt",
      step2: "2. Reisedauer",
      partySize: "Reisende",
      step3: "3. Unterkunftskategorie",
      step4: "4. Wunschregionen (Mehrfachauswahl)",
      estInvestment: "Geschätzte Gesamtinvestition",
      perGuest: "/ Gast",
      includes: "Inklusive privatem SUV mit Chauffeur, Luxusunterkünften, Frühstück und Nationalpark-Eintritten.",
      yourName: "Ihr Name",
      preferredMonth: "Reisemonat",
      wishes: "Besondere Wünsche",
      ctaWhatsapp: "Reiseanfrage via WhatsApp Concierge →",
    },
    travelHub: {
      tag: "Praktische Hinweise",
      title: "Gut Informiert Vor der Abreise",
      desc: "Wichtige kuratierte Informationen für eine reibungslose Einreise und entspanntes Reisen.",
    },
  },
  AR: {
    nav: {
      journeys: "الرحلات المميزة",
      routeMap: "خريطة المسار",
      provinces: "المناطق",
      villas: "الفلل والإقامات",
      tripBuilder: "تصميم رحلتك",
      travelHub: "دليل السفر",
      curateJourney: "صمّم رحلتك",
      ambientSound: "صوت الطبيعة",
      playingSound: "ضباب سيلان ♫",
    },
    hero: {
      badge: "رحلات خاصة وحصرية في سريلانكا",
      titleLine1: "فن الرفاهية الهادئة",
      titleLine2: "في سيلان.",
      subtitle: "رحلات خاصة عبر مزارع الشاي الضبابية، ومحميات النمور البرية، وملاذات المحيط الهندي المنعزلة. صُممت بأعلى درجات الخصوصية والإتقان.",
      styleLabel: "نوع الرحلة",
      seasonLabel: "الموسم المفضل",
      ctaExplore: "استكشف الرحلات ←",
      badge1: "رحلات مخصصة 100%",
      badge2: "سائق ومرشد خاص",
      badge3: "إقامات فاخرة مختارة بعناية",
    },
    signature: {
      tag: "مسارات استثنائية",
      title: "المجموعات الحصرية",
      desc: "تمت موازنة كل مسار بعناية لراحة التنقل والرحلات بالقطار البانورامي الخاص وأرقى المنتجعات.",
      viewItinerary: "عرض تفاصيل الأيام",
      from: "ابتداءً من",
      perGuest: "/ ضيف",
      pace: "وتيرة الرحلة",
    },
    routeMap: {
      tag: "المسارات الجغرافية",
      title: "مستكشف مسارات سريلانكا",
      desc: "انقر على أي وجهة لمعرفة أوقات القيادة الدقيقة، والارتفاع، وخيارات النقل الخاص.",
      includeRegion: "إضافة إلى خطتي ←",
      gridNotice: "خريطة سيلان التفاعلية • اختر وجهتك",
    },
    villas: {
      tag: "الملاذات والإقامات",
      title: "فلل ومنتجعات خاصة مختارة",
      all: "جميع الإقامات",
      heritage: "تراثية",
      glamping: "تخييم فاخر",
      wellness: "صحة واستجمام",
      quickView: "نظرة سريعة",
      night: "/ ليلة",
    },
    tripBuilder: {
      tag: "مهندس الرحلات الخاصة",
      title: "صمم رحلتك الملكية المخصصة",
      desc: "حدد وتيرة سفرك، وجهاتك، ومستوى إقامتك. يحسب نظامنا التكلفة التقديرية مباشرة.",
      step1: "1. اختر اهتمامك الرئيسي",
      step2: "2. مدة الرحلة",
      partySize: "عدد الضيوف",
      step3: "3. مستوى الإقامة الفاخرة",
      step4: "4. المناطق المرغوبة (اختر عدة وجهات)",
      estInvestment: "التكلفة التقديرية الإجمالية",
      perGuest: "/ ضيف",
      includes: "تشمل سيارة دفع رباعي خاصة مع سائق، إقامات فاخرة، إفطار يومي وتصاريح المحميات.",
      yourName: "الاسم الكريم",
      preferredMonth: "الشهر المفضل للسفر",
      wishes: "طلبات أو رغبات خاصة",
      ctaWhatsapp: "طلب تفاصيل الرحلة عبر واتساب كونسيرج ←",
    },
    travelHub: {
      tag: "معلومات السفر الأساسية",
      title: "معلومات قبل المغادرة",
      desc: "إرشادات منسقة للوصول السلس والاستمتاع بإقامة مريحة وراقية.",
    },
  },
  PT: {
    nav: {
      journeys: "Coleções de Roteiros",
      routeMap: "Mapa de Rotas",
      provinces: "Províncias",
      villas: "Vilas & Hotéis",
      tripBuilder: "Criar Roteiro",
      travelHub: "Guia de Viagem",
      curateJourney: "Criar Roteiro",
      ambientSound: "Som Ambiente",
      playingSound: "Névoa do Ceilão ♫",
    },
    hero: {
      badge: "Expedições Privadas & Sob Medida no Sri Lanka",
      titleLine1: "A Arte do Luxo Autêntico",
      titleLine2: "no Ceilão.",
      subtitle: "Expedições privadas através de reinos de chá nas montanhas, santuários de leopardos e refúgios exclusivos no Oceano Índico. Criadas com intimidade e precisão.",
      styleLabel: "Estilo da Viagem",
      seasonLabel: "Temporada Desejada",
      ctaExplore: "Explorar Roteiros →",
      badge1: "Roteiros 100% Personalizados",
      badge2: "Chauffeur & Guias Exclusivos",
      badge3: "Hospedagens de Luxo Selecionadas",
    },
    signature: {
      tag: "Roteiros Especiais",
      title: "As Coleções Exclusivas",
      desc: "Cada rota é calculada para equilibrar o tempo de estrada, transições em trens panorâmicos privativos e santuários de luxo isolados.",
      viewItinerary: "Ver Roteiro Dia a Dia",
      from: "A partir de",
      perGuest: "/ hóspede",
      pace: "Ritmo",
    },
    routeMap: {
      tag: "Inteligência Geográfica",
      title: "Explorador de Rotas do Sri Lanka",
      desc: "Clique nos pontos do mapa para ver o tempo real de estrada, altitude e opções de traslado privativo.",
      includeRegion: "Incluir no Meu Roteiro →",
      gridNotice: "Mapa Interativo do Ceilão • Clique em um Ponto",
    },
    villas: {
      tag: "Refúgios & Santuários",
      title: "Hospedagens de Luxo Selecionadas",
      all: "Todas",
      heritage: "Patrimônio Histórico",
      glamping: "Glamping Safari",
      wellness: "Bem-Estar",
      quickView: "Ver Detalhes",
      night: "/ noite",
    },
    tripBuilder: {
      tag: "Arquiteto de Roteiros",
      title: "Crie Sua Expedição Sob Medida",
      desc: "Configure o ritmo da sua viagem, províncias e nível de conforto. O sistema calcula a estimativa de investimento em tempo real.",
      step1: "1. Selecione Sua Paixão Principal",
      step2: "2. Duração da Expedição",
      partySize: "Número de Pessoas",
      step3: "3. Categoria de Hospedagem",
      step4: "4. Províncias Desejadas (Escolha várias)",
      estInvestment: "Investimento Total Estimado",
      perGuest: "/ hóspede",
      includes: "Inclui SUV particular com motorista, hospedagens de luxo, café da manhã e entradas nos parques.",
      yourName: "Seu Nome",
      preferredMonth: "Mês da Viagem",
      wishes: "Desejos Especiais",
      ctaWhatsapp: "Solicitar Roteiro via WhatsApp Concierge →",
    },
    travelHub: {
      tag: "Informações Práticas",
      title: "Saiba Antes de Embarcar",
      desc: "Orientações selecionadas para uma chegada tranquila e uma viagem inesquecível.",
    },
  },
};

