export const INTRO = {
  title: "Villefranche 2026–2032 : cap communiste pour la Bastide et les quartiers",
  paragraphs: [
    "Ce programme reprend l’essentiel des propositions communistes nationales et les adapte aux réalités de Villefranche-de-Rouergue : une ville-centre de 12 000 habitants qui doit redevenir locomotive du Bassin, de l’Alzou au Ségala.",
    "Il est mis à disposition de toutes les listes de progrès souhaitant gouverner avec les habitantes et habitants, les associations, les syndicats et les agents publics.",
    "Nous proposons une mandature construite autour de grands blocs thématiques — démocratie, services publics, transition écologique, justice sociale — pour répondre aux urgences locales tout en assumant des choix clairs : priorité aux besoins essentiels, à la dignité et à la puissance publique."
  ]
};

export const KPI = [
  { label: "Logements Bastide/Tricot", target: "700 rénovés", detail: "dont 200 très sociaux" },
  { label: "Énergie citoyenne", target: "8 MW", detail: "société publique locale" },
  { label: "Budget participatif", target: "5 %", detail: "de l’investissement" },
  { label: "Cantines", target: "80 % local", detail: "dont 60 % bio" },
  { label: "Mobilités douces", target: "15 km", detail: "voies cyclables sécurisées" },
  { label: "Emplois solidaires", target: "+300", detail: "dont 30 % en insertion" },
  { label: "Places de crèche", target: "+50", detail: "horaires élargis" },
  { label: "Pass culture-sport", target: "1 000", detail: "jeunes bénéficiaires" }
];

export const SECTIONS = [
  {
    id: "democratie",
    title: "Pouvoir citoyen & République locale",
    icon: "🏛️",
    color: "from-red-600 to-red-700",
    tags: ["démocratie", "participation", "quartiers", "transparence"],
    items: [
      "Assemblées citoyennes par quartier (Bastide, Tricot, Ségala, Fontanges) dotées d’un droit de saisine du conseil municipal.",
      "Budget participatif porté à 5 % de l’investissement dès 2028, avec priorité aux projets des quartiers populaires et des villages associés.",
      "Publication ouverte des marchés, subventions, bilans d’activités et des temps de réponse administratifs ; protection renforcée des lanceurs d’alerte.",
      "Pacte démocratique : référendum local si 5 % des inscrits soutiennent une proposition et charte éthique des élus (non-cumul, contrôle citoyen)."
    ]
  },
  {
    id: "services_publics",
    title: "Services publics & solidarités",
    icon: "🤝",
    color: "from-orange-600 to-orange-700",
    tags: ["services publics", "ccas", "solidarités", "droit sociaux"],
    items: [
      "Ouverture d’une Maison du Peuple dans la Bastide : accueil social global, médiation numérique, permanences syndicats/CAF/Pôle emploi.",
      "Renforcement du CCAS : plan canicule et grand froid, repas livrés, chèques énergie municipaux financés par la taxe sur les logements vacants.",
      "Retour en régie progressive des services externalisés (restauration scolaire, propreté, stationnement) pour sécuriser les personnels et la qualité.",
      "Charte des services publics de proximité garantissant un délai maximum pour les démarches essentielles et le maintien de bureaux de poste décentralisés."
    ]
  },
  {
    id: "sante_bienvivre",
    title: "Santé, bien-vivre & sécurité civile",
    icon: "🩺",
    color: "from-emerald-600 to-emerald-700",
    tags: ["santé", "prévention", "seniors", "sécurité civile"],
    items: [
      "Création d’un centre municipal de santé à Fontanges (médecins, infirmiers, sages-femmes salariés) et extension des consultations avancées dans les quartiers.",
      "Navettes Bastibus Santé reliant les hameaux à l’hôpital, au centre de santé et aux spécialistes ; médiateurs santé dans les marchés.",
      "Plan Sécurité civile : doublement des points d’eau incendie, réserve communale citoyenne pour les crues de l’Aveyron et formation de 500 secouristes.",
      "Contrat local de santé avec l’hôpital public pour sécuriser urgences, maternité et gériatrie, assorti d’un soutien communal à l’installation de personnels."
    ]
  },
  {
    id: "logement_amenagement",
    title: "Logement, aménagement & patrimoine bastide",
    icon: "🏠",
    color: "from-stone-700 to-stone-800",
    tags: ["logement", "bastide", "patrimoine", "urbanisme"],
    items: [
      "Permis de louer renforcé sur Bastide/Tricot, taxation des logements vacants et préemption systématique des passoires thermiques pour en faire des logements sociaux.",
      "OPAH-RU massive : guichet unique municipal + ANAH pour 700 rénovations, accompagnement des copropriétés dégradées et création d’un office foncier solidaire.",
      "Programme « Refaire la Bastide » : végétalisation des places, restauration des façades, éclairage sobre, activation des rez-de-chaussée vides pour des ateliers et services publics.",
      "PLUi solidaire : sanctuarisation des terres nourricières du Ségala, densification maîtrisée autour des arrêts Bastibus+, 25 % de logements très sociaux dans toute opération privée > 10 logements."
    ]
  },
  {
    id: "ecologie_alimentation",
    title: "Écologie populaire & alimentation",
    icon: "🌱",
    color: "from-lime-600 to-green-700",
    tags: ["écologie", "agriculture", "alimentation", "climat"],
    items: [
      "Plan arbres et fraîcheur : 2 000 arbres plantés, îlots de fraîcheur dans les écoles, renaturation des berges de l’Alzou et bassins de rétention naturels.",
      "SPL énergie citoyenne avec les communes voisines pour équiper 50 % des toitures publiques et coopératives en solaire ; coopératives d’habitants pour l’autoconsommation.",
      "Cantines 80 % produits locaux d’ici 2030, contrats avec les agriculteurs bio du Ségala et ateliers cuisine populaire dans les quartiers.",
      "Plan déchets zéro brûlage : composteurs collectifs, ressourcerie intercommunale et tarification incitative progressive accompagnée."
    ]
  },
  {
    id: "mobilites",
    title: "Mobilités publiques & connexions",
    icon: "🚲",
    color: "from-teal-600 to-teal-800",
    tags: ["mobilités", "bastibus", "vélo", "TER"],
    items: [
      "Bastibus+ gratuit pour les moins de 26 ans, fréquence toutes les 20 min sur l’axe gare–Bastide–Fontanges, tarification solidaire pour tous.",
      "Plan vélo 15 km : axe sécurisés Bastide ↔ lycée Beauregard ↔ Treize Pierres, passerelles cyclables sur l’Aveyron et stationnements couverts à la gare.",
      "Pôle d’échanges multimodal : gare accessible, halle vélo, cars du Ségala synchronisés avec les TER vers Toulouse et Rodez.",
      "Zones 30 généralisées, cheminements piétons accessibles autour des écoles, plan trottoirs + éclairage sobre dans les lotissements."
    ]
  },
  {
    id: "economie_travail",
    title: "Économie locale, travail & agriculture",
    icon: "⚙️",
    color: "from-zinc-900 to-neutral-800",
    tags: ["emploi", "clauses sociales", "agriculture", "industrie"],
    items: [
      "Conditionnalité stricte de toutes les aides : zéro euro aux entreprises qui licencient, délocalisent ou ne respectent pas l’égalité femmes-hommes.",
      "Création d’une régie municipale du bâtiment et d’un atelier chantier d’insertion pour entretenir les équipements publics et les logements vacants.",
      "Fonds d’amorçage pour les coopératives, SCOP et commerces de proximité ; accompagnement à la reprise des entreprises par les salarié·es.",
      "Contrats alimentaires locaux : soutien aux abattoirs de proximité, aux circuits courts du marché de la Bastide et logistique mutualisée pour les producteurs du Ségala."
    ]
  },
  {
    id: "jeunesse_education",
    title: "Éducation, jeunesse & petite enfance",
    icon: "🎒",
    color: "from-sky-600 to-sky-700",
    tags: ["écoles", "jeunesse", "crèches", "cantine"],
    items: [
      "Plan écoles 100 % rénovées : isolation, ventilation, cours végétalisées et salles ouvertes aux associations après 18 h.",
      "Menus à 1 € pour les familles modestes, gratuité des fournitures essentielles jusqu’au collège et soutien aux séjours collectifs.",
      "Extension des horaires des crèches municipales et création d’une micro-crèche coopérative pour les horaires atypiques.",
      "Conseil municipal des enfants et des jeunes avec budget propre pour des projets solidaires et culturels."
    ]
  },
  {
    id: "culture_sport",
    title: "Culture, sport & patrimoine vivant",
    icon: "🎭",
    color: "from-fuchsia-600 to-pink-600",
    tags: ["culture", "sport", "associations", "patrimoine"],
    items: [
      "Pass Culture-Sport Villefranchois : 120 € par jeune pour adhérer à un club, acheter un instrument ou du matériel artistique.",
      "Maison des associations agrandie au Château de Graves, avec mise à disposition d’ateliers partagés et d’un studio médias.",
      "Résidences d’artistes et d’artisans dans les arcades de la Bastide, jumelages avec les écoles et programmation hors-les-murs de la médiathèque.",
      "Plan équipements sportifs : terrains de proximité rénovés à Tricot et Treize Pierres, nouveaux vestiaires mutualisés et soutien aux clubs féminins."
    ]
  },
  {
    id: "finances_cooperations",
    title: "Finances publiques & coopérations",
    icon: "📊",
    color: "from-slate-700 to-slate-900",
    tags: ["finances", "coopérations", "interco", "europe"],
    items: [
      "Plan pluriannuel d’investissement participatif : priorisation publique, suivi annuel, référendum d’initiative sur tout projet majeur.",
      "Recherche systématique de financements (ANRU, ANAH, DSIL, Europe FEDER, Région, Département) et ingénierie mutualisée avec l’intercommunalité.",
      "Régie publique de l’eau étudiée avec Ouest Aveyron Communauté et création d’un observatoire citoyen des délégations de service public.",
      "Commande publique exemplaire : clauses sociales (10 % d’heures en insertion), clauses environnementales (matériaux biosourcés) et bilan carbone annuel de la collectivité."
    ]
  }
];

export const EXAMPLES = [
  {
    title: "Municipalisation de la santé",
    where: "Grigny (91)",
    text: "Le centre municipal de santé Philippe-Rio montre qu’un salariat des médecins garantit l’accès aux soins dans les quartiers populaires."
  },
  {
    title: "Énergie citoyenne",
    where: "Loos-en-Gohelle (62)",
    text: "Une coopérative locale produit de l’électricité solaire avec les habitants ; modèle transposable pour la SPL énergie citoyenne villefranchoise."
  },
  {
    title: "Transports solidaires",
    where: "Aubagne (13)",
    text: "La gratuité des bus a doublé la fréquentation et réduit la pollution. Inspiration pour Bastibus+."
  }
];
