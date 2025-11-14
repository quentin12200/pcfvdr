export const INTRO = {
  title: "Villefranche 2026–2032 : un cap communiste pour toutes les listes progressistes",
  paragraphs: [
    "Ce programme municipal, élaboré par la section du Parti Communiste Français de Villefranche‑de‑Rouergue, est mis à disposition de toutes les futures listes aux élections municipales.",
    "Il est pensé comme une contribution ouverte au débat municipal : un socle d’orientations à adapter par toute liste qui veut gouverner pour l’intérêt général, la justice sociale et la transition écologique, en lien avec les habitants, les associations et les syndicats.",
    "À la manière du maire communiste de Grigny, Philippe Rio, il assume des choix clairs : priorité aux besoins, à la dignité et aux services publics."
  ]
};

export const KPI = [
  { label: "Chômage", target: "−3 pts", detail: "sur 6 ans" },
  { label: "Logements rénovés", target: "500", detail: "Bastide/Tricot" },
  { label: "Logements sociaux", target: "150", detail: "+100 BRS" },
  { label: "Énergie publique", target: "50 % toitures", detail: "équipées solaire" },
  { label: "Bastibus", target: "+30 %", detail: "fréquentation" },
  { label: "Déchets", target: "−35 %", detail: "OMR/hab" },
  { label: "Cantines", target: "60 % bio", detail: "70 % local" },
  { label: "Participatif", target: "5 %", detail: "investissement" }
];

export const SECTIONS = [
  {
    id: "democratie",
    title: "Démocratie locale & pouvoir aux habitants",
    icon: "🏛️",
    color: "from-red-600 to-red-700",
    tags: ["démocratie", "participation", "transparence", "quartiers"],
    items: [
      "Budgets participatifs à 5 % de l’investissement (2 % en 2026 → 5 % en 2028), priorité Bastide/Tricot/Lapeyrade.",
      "Conseils de quartiers dotés (10–30 k€ / an) + droit d’interpellation (référendum local si 5 % des inscrits signent).",
      "Transparence totale : publication en ligne des marchés, subventions, délais et coûts des travaux.",
      "Maison du Peuple (Bastide) : guichet unique droits sociaux, permanences syndicales/associatives, médiation numérique."
    ]
  },
  {
    id: "logement",
    title: "Logement : fin de la vacance, droit au logement",
    icon: "🏠",
    color: "from-orange-600 to-orange-700",
    tags: ["logement", "OPAH", "ANAH", "HLM", "BRS"],
    items: [
      "Permis de louer + taxe sur logements vacants dans la Bastide et Tricot ; préemption des passoires thermiques.",
      "OPAH‑RU musclée : guichet unique, objectif 500 logements rénovés en Bastide/Tricot.",
      "Office Foncier Solidaire + Bail Réel Solidaire : 100 accès sociaux en centre ancien.",
      "Parc social : 150 logements (dont Tricot 63) ; 25 % très sociaux dans tout programme > 10 lots."
    ]
  },
  {
    id: "mobilites",
    title: "Mobilités publiques & vélo",
    icon: "🚲",
    color: "from-teal-600 to-teal-700",
    tags: ["vélo", "TER", "PMR", "piétons", "bastibus"],
    items: [
      "Bastibus+ : +30 % fréquence, pôle gare, boucle hôpital–Fontanges–commerces ; TAD étendu; tarification sociale.",
      "Plan vélo : 10 km en 6 ans sur axes structurants ; arceaux sécurisés (centre, gare, Aqualudis, écoles).",
      "Plaidoyer TER (plus d’AR vers Toulouse/Rodez) + pôle d’échanges multimodal à la gare.",
      "Cheminements piétons accessibles autour des écoles, de l’hôpital et du marché (zones 30, traversées sécurisées)."
    ]
  },
  {
    id: "eau_dechets",
    title: "Eau & déchets : gestion publique locale",
    icon: "💧",
    color: "from-cyan-600 to-cyan-700",
    tags: ["eau", "déchets", "régie", "compostage"],
    items: [
      "Étude de retour en régie publique de l’eau à l’échelle interco (qualité, prix, transparence).",
      "Gratuité d’un volume vital social pour les ménages modestes ; tarification progressive.",
      "Compostage généralisé (individuel/partagé), ressourcerie & repair-cafés ; redevance incitative juste et accompagnée.",
      "Centre technique interco pour suivi, contrôle des DSP et appui aux communes."
    ]
  },
  {
    id: "urbanisme",
    title: "Urbanisme & architecture engagés",
    icon: "🏗️",
    color: "from-stone-700 to-stone-800",
    tags: ["PLUi", "patrimoine", "bastide", "accessibilité"],
    items: [
      "PLUi co-construit : logements, mobilités, commerces, culture, services publics, îlots de fraîcheur.",
      "Action foncière anti-spéculation : foncière publique communale, charte promoteurs, SUP agricoles.",
      "Plan "Refaire la Bastide" : pavés, façades, végétalisation, ombre, fontaines actives l’été.",
      "PAVE relancé : continuité des cheminements et accessibilité des ERP."
    ]
  },
  {
    id: "sante",
    title: "Santé de proximité",
    icon: "🩺",
    color: "from-emerald-600 to-emerald-700",
    tags: ["santé", "centre de santé", "prévention"],
    items: [
      "Centre de santé municipal à Fontanges (salariat, équipe pluridisciplinaire, horaires étendus).",
      "Navette santé (Bastibus+) et prévention quartiers (bilans gratuits, médiateurs santé).",
      "Contrat local avec l’hôpital public : gériatrie, urgences, maternité."
    ]
  },
  {
    id: "education",
    title: "Éducation, jeunesse & petite enfance",
    icon: "🎒",
    color: "from-sky-600 to-sky-700",
    tags: ["écoles", "cantines", "jeunesse", "crèches"],
    items: [
      "Plan écoles : isolation/ventilation, cours végétalisées, cantines rénovées ; 60 % bio, 70 % local d’ici 2028.",
      "Menus à 1 € pour familles modestes ; soutien au sport et à la culture à bas coût.",
      "Crèches : plus de places et horaires élargis pour les horaires atypiques."
    ]
  },
  {
    id: "economie",
    title: "Économie locale & clauses sociales",
    icon: "🤝",
    color: "from-zinc-900 to-neutral-800",
    tags: ["emploi", "SCOP", "coopératives", "insertion"],
    items: [
      "Conditionnalité stricte de toute aide : zéro euro public aux entreprises qui licencient ou précarisent.",
      "Régie municipale du bâtiment, ressourcerie, SPL énergie solaire ; 10 % d’heures en insertion.",
      "Achats responsables : circuits courts, entreprises locales, ESAT, SCOP ; fonds d’amorçage coopératif."
    ]
  },
  {
    id: "culture",
    title: "Culture, sport & vie associative",
    icon: "🎭",
    color: "from-fuchsia-600 to-pink-600",
    tags: ["associations", "pass", "sport", "jeunesse"],
    items: [
      "Pass Culture‑Sport municipal pour enfants/ados à bas revenus (licence + équipement).",
      "Résidences d’artistes en quartier, scènes ouvertes ; gratuité ciblée médiathèque/théâtre.",
      "Contrats pluriannuels aux associations ; rénovation des terrains de proximité."
    ]
  },
  {
    id: "egalite",
    title: "Égalité, féminisme & antidiscriminations",
    icon: "✊",
    color: "from-red-700 to-rose-700",
    tags: ["égalité", "féminisme", "LGBT+", "handicap"],
    items: [
      "Plan d’égalité femmes‑hommes (carrières, salaires, horaires).",
      "Lieux sûrs & marches exploratoires des femmes pour co‑concevoir l’espace public.",
      "Charte anti‑discrimination (LGBT+, origine, handicap) pour tous les partenaires/subventionnés."
    ]
  },
  {
    id: "finances",
    title: "Finances : argent utile",
    icon: "📊",
    color: "from-stone-700 to-stone-800",
    tags: ["finances", "régie", "investissement", "fiscalité"],
    items: [
      "Zéro privatisation : retour en régie quand c’est plus efficace/moins cher (eau, énergie, stationnement).",
      "Plan pluriannuel d’investissement avec cofinancements (ANAH, DSIL, DETR, Région, Europe, CEE).",
      "Mutualisations vertueuses et achats groupés ; fiscalité maîtrisée par élargissement d’assiette."
    ]
  }
];

export const EXAMPLES = [
  {
    title: "Transports gratuits",
    where: "Montpellier (34) & Aubagne (13)",
    text: "Des collectivités ont rendu les transports gratuits, triplant l’usage à Aubagne. Inspiration pour Bastibus+."
  },
  {
    title: "Eau publique",
    where: "Vierzon (18) & Tarnos (40)",
    text: "Retour en régie publique : prix maîtrisés, transparence, tarif social. Piste pour l’interco."
  },
  {
    title: "Urbanisme social",
    where: "Ivry‑sur‑Seine (94)",
    text: "Architecture de qualité + logements sociaux accessibles, en associant habitants et office HLM."
  }
];
