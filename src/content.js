export const INTRO = {
  badge: "Nous ne siégeons pas, mais nous pesons",
  title: "Villefranche-de-Rouergue mérite un programme communiste ouvert et populaire",
  paragraphs: [
    "La majorité actuelle, issue des radicaux de gauche et de LREM, gouverne sans les communistes. Nous ne sommes ni représentés au conseil municipal ni dans l’opposition officielle. Pourtant, notre parti reste ancré dans les quartiers, dans les luttes sociales et dans le monde associatif villefranchois.",
    "Ce site présente un programme clé en main que nous proposons aux futures listes municipales et aux habitantes et habitants qui veulent reprendre la Bastide et les quartiers populaires en main. Les propositions viennent du socle communiste national et de notre expérience locale.",
    "Notre objectif est simple : que ces mesures soient reprises, enrichies, et qu’elles permettent d’ouvrir des listes de rassemblement citoyen à Villefranche-de-Rouergue dès 2026."
  ],
  commitments: [
    { title: "Transparence totale", detail: "Publication de toutes nos propositions et budgets estimatifs" },
    {
      title: "Actions immédiates",
      detail: "Caisse de solidarité pour les factures d’énergie et l’alimentation, activée avec les associations locales dès 2024",
    },
    { title: "Appel aux candidatures populaires", detail: "Accompagnement de citoyennes et citoyens prêts à porter le programme" }
  ],
  signature: "Document présenté par Patrick Cabandé, responsable des communistes villefranchois"
};

export const SECTIONS = [
  {
    id: "bloc1",
    title: "Bloc 1 — Pouvoir citoyen et République locale",
    category: "Grand thème",
    icon: "🗳️",
    description:
      "Refonder la démocratie locale en donnant la parole aux quartiers, en ouvrant les finances publiques et en imposant l’éthique républicaine aux futurs élus.",
    actions: [
      {
        title: "Assemblées citoyennes dotées d’un droit de veto",
        detail:
          "Création d’assemblées par quartier (Bastide, Tricot, Fontanges, Ségala) avec budget propre, droit d’interpellation et référendum local si 5 % des inscrits signent une pétition.",
        example: "Comme à Saillans (Drôme), où l’assemblée des habitantes et habitants valide les décisions municipales."
      },
      {
        title: "Budget participatif porté à 5 %",
        detail:
          "Priorité aux quartiers populaires, publication annuelle des projets financés, accompagnement des associations pour déposer des dossiers.",
        example: "Grenoble a fait passer son budget participatif à 5 M€ en 2023 en ciblant les quartiers populaires."
      },
      {
        title: "Charte éthique et révocation citoyenne",
        detail:
          "Non-cumul strict, transparence des indemnités, possibilité de révocation citoyenne en cas de manquement grave à la charte.",
        example: "La municipalité de Kingersheim (Haut-Rhin) a instauré une charte éthique signée par tous les élus municipaux."
      },
      {
        title: "Observatoire des services publics",
        detail:
          "Tableaux de bord publics sur les délais administratifs, les marchés, les subventions et les délégations de service public.",
        example: "À Paris, l’Observatoire municipal des services publics publie des indicateurs trimestriels accessibles en open data."
      }
    ],
    focus: "La Ville doit redevenir exemplaire : zéro euro sans contrôle citoyen."
  },
  {
    id: "bloc2",
    title: "Bloc 2 — Services publics et solidarités",
    category: "Grand thème",
    icon: "🤝",
    description:
      "Sécuriser la vie quotidienne : santé, logement, alimentation, accueil social. La puissance publique doit redevenir l’outil principal des Villefranchois.",
    actions: [
      {
        title: "Maison du Peuple Bastide",
        detail:
          "Accueil social global, médiation numérique, permanence des syndicats, de la CAF, de la CPAM et du Département avec horaires élargis.",
        example: "Roubaix a rouvert une Maison du Peuple qui centralise guichets sociaux, numériques et permanences syndicales."
      },
      {
        title: "Centre municipal de santé",
        detail:
          "Médecins, infirmiers, sages-femmes salariés à Fontanges et consultations avancées dans les quartiers et villages.",
        example: "Aubervilliers démontre qu’un centre municipal de santé permet de salarier des médecins généralistes et spécialistes."
      },
      {
        title: "Plan logement Bastide/Tricot",
        detail:
          "Permis de louer renforcé, taxation des logements vacants, rénovation de 700 logements via une OPAH-RU massive et création d’un office foncier solidaire.",
        example: "À Bègles, l’office foncier solidaire municipal sécurise l’accession sociale et bloque la spéculation."
      },
      {
        title: "Cantines locales et sociales",
        detail:
          "80 % de produits locaux et 60 % bio, menus à 1 € pour les familles modestes, ateliers cuisine populaire dans les écoles et les centres sociaux.",
        example: "La ville de Mouans-Sartoux atteint déjà 100 % de bio dans ses cantines avec sa ferme communale."
      }
    ],
    focus: "Aucun service public essentiel ne doit être laissé au privé." 
  },
  {
    id: "bloc3",
    title: "Bloc 3 — Transition écologique populaire",
    category: "Grand thème",
    icon: "🌱",
    description:
      "Faire de Villefranche une ville respirable, sobre en énergie et nourrie par son territoire agricole, en accompagnant les habitantes et habitants dans la transition.",
    actions: [
      {
        title: "Plan arbres et fraîcheur",
        detail:
          "2 000 arbres plantés, cours d’écoles végétalisées, renaturation des berges de l’Alzou et dispositifs d’ombre sur les places de la Bastide.",
        example: "Clermont-Ferrand a lancé un plan de 20 000 arbres avec végétalisation des cours d’école."
      },
      {
        title: "Énergie citoyenne",
        detail:
          "Société publique locale pour équiper 50 % des toitures publiques en solaire, coopératives d’habitants pour l’autoconsommation et lutte contre la précarité énergétique.",
        example: "Loos-en-Gohelle (Pas-de-Calais) pilote depuis 15 ans une régie de transition énergétique citoyenne."
      },
      {
        title: "Plan mobilités publiques",
        detail:
          "Bastibus+ gratuit pour les moins de 26 ans, cadencement toutes les 20 minutes, 15 km de pistes cyclables sécurisées et pôle d’échanges multimodal à la gare.",
        example: "Dunkerque a rendu son réseau gratuit et renforcé les fréquences pour les jeunes et les actifs."
      },
      {
        title: "Déchets zéro brûlage",
        detail:
          "Composteurs collectifs, ressourcerie intercommunale, tarification incitative accompagnée et brigade verte pour lutter contre les dépôts sauvages.",
        example: "Besançon a couplé tarification incitative et ressourcerie municipale pour réduire les déchets de 20 %."
      }
    ],
    focus: "La transition n’est pas un gadget : elle crée des emplois locaux et protège notre santé."
  },
  {
    id: "bloc4",
    title: "Bloc 4 — Travail, économie locale et culture",
    category: "Grand thème",
    icon: "⚙️",
    description:
      "Redonner la priorité aux coopératives, aux petites entreprises, aux services publics culturels et sportifs pour faire vivre la Bastide toute l’année.",
    actions: [
      {
        title: "Conditionnalité des aides",
        detail:
          "Aucune subvention sans engagements sociaux : égalité femmes-hommes, emploi local, pas de licenciements boursiers.",
        example: "Lyon conditionne déjà ses aides économiques à l’égalité salariale et aux critères climatiques."
      },
      {
        title: "Régie municipale du bâtiment",
        detail:
          "Atelier chantier d’insertion pour entretenir logements vacants, écoles et équipements sportifs avec des emplois statutaires.",
        example: "La régie de quartier de Villeneuve à Grenoble montre que des emplois statutaires peuvent entretenir le patrimoine public."
      },
      {
        title: "Pass Culture-Sport Villefranchois",
        detail:
          "120 € par jeune pour adhérer à un club, acheter un instrument ou du matériel artistique ; priorité aux quartiers populaires.",
        example: "À Bologne (Italie), la municipalité offre un pass jeunes cumulant activités sportives et culturelles accessible à tous."
      },
      {
        title: "Maison des associations agrandie",
        detail:
          "Installation au Château de Graves avec ateliers mutualisés, studio médias et accompagnement à la création de coopératives.",
        example: "À Nantes, la Maison des associations Trempo mutualise studios et accompagnement coopératif dans un ancien site industriel."
      }
    ],
    focus: "La Bastide doit redevenir un centre vivant grâce aux initiatives populaires et coopératives."
  },
  {
    id: "bloc5",
    title: "Bloc 5 — Jeunesse, éducation et quartiers populaires",
    category: "Grand thème",
    icon: "🎒",
    description:
      "Investir dans les enfants et les jeunes pour faire reculer les inégalités scolaires et donner envie de rester vivre à Villefranche.",
    actions: [
      {
        title: "Plan écoles 100 % rénovées",
        detail:
          "Isolation, ventilation, cours transformées en îlots de fraîcheur et ouverture des salles aux associations après 18 h.",
        example: "Poitiers a engagé un plan pluriannuel pour rénover 42 écoles avec îlots de fraîcheur accessibles aux associations."
      },
      {
        title: "Crèches aux horaires élargis",
        detail:
          "Extension des crèches municipales, micro-crèche coopérative pour les horaires atypiques et service de garde partagée dans les villages associés.",
        example: "Vitry-sur-Seine finance une crèche à horaires élargis dédiée aux travailleurs postés."
      },
      {
        title: "Conseil municipal des jeunes",
        detail:
          "Budget propre pour financer des projets solidaires, culturels et écologiques proposés par les 9-18 ans.",
        example: "À Rennes, le conseil des jeunes dispose d’un budget participatif pour concrétiser ses projets."
      },
      {
        title: "Accompagnement scolaire renforcé",
        detail:
          "Dispositif municipal avec enseignants vacataires, bénévoles et associations pour les collégiens de Treize Pierres et les lycées.",
        example: "La ville de Saint-Denis a créé un service municipal du soutien scolaire en lien avec les collèges REP+."
      }
    ],
    focus: "La jeunesse doit être au cœur du projet villefranchois et non une variable d’ajustement."
  }
];

export const PARTICIPER = {
  badge: "Ouvert à toutes et tous",
  title: "Faites vivre le programme communiste villefranchois",
  paragraphs: [
    "Nous voulons que ces propositions soient reprises par les listes citoyennes, associatives ou syndicales prêtes à rompre avec la gestion actuelle.",
    "Nos ateliers d’éducation populaire s’appuient sur des techniques concrètes : cercles de parole pour entendre chaque quartier, cartographies sensibles pour pointer les urgences, théâtre forum pour tester les décisions et porteurs de parole sur les marchés.",
    "Vous pouvez relayer le programme, l’adapter à votre quartier et rejoindre l’équipe qui prépare la campagne 2026 afin d’animer le débat municipal sur ces orientations."
  ],
  steps: [
    {
      title: "Cercle d’expression populaire",
      detail:
        "Chaque rencontre débute par un tour de parole égalitaire : on écoute, on note les besoins, on fixe les priorités quartier par quartier."
    },
    {
      title: "Cartographie et diagnostics partagés",
      detail:
        "Balades urbaines, cartes sensibles, enquêtes de rue pour documenter logements vacants, espaces publics délaissés et idées d’investissements."
    },
    {
      title: "Mise en débat publique",
      detail:
        "Théâtre forum, porteurs de parole sur le marché, réunions tournantes pour confronter les propositions et former des porte-voix populaires."
    },
    {
      title: "Constitution d’équipes candidates",
      detail:
        "Accompagnement juridique et politique pour créer des listes citoyennes reprenant fidèlement le programme communiste villefranchois."
    }
  ]
};

export const STATS = {
  title: "Mieux connaître Villefranche-de-Rouergue pour agir juste",
  paragraphs: [
    "Les indicateurs publics confirment qu’il faut un sursaut populaire : la commune stagne démographiquement, vieillit et connaît une précarité plus forte que la moyenne aveyronnaise.",
    "Ces données proviennent de l’INSEE (Recensement 2021, Revenus fiscaux 2020) et des portails gouvernementaux data.gouv.fr et GEO (Base quartiers prioritaires et IRIS). Elles guident nos priorités.",
    "Nous partageons ces chiffres avec toutes les listes citoyennes qui souhaitent s’appuyer sur une réalité sociale solide." 
  ],
  highlights: [
    { label: "Population municipale", value: "11 969 habitantes et habitants", source: "INSEE – Recensement 2021" },
    { label: "Évolution depuis 2015", value: "–1,8 %", source: "INSEE – Séries historiques 2015-2021" },
    { label: "Taux de chômage", value: "14,6 % des 15-64 ans", source: "INSEE – Données locales 2020" },
    { label: "Revenu médian", value: "19 300 € par unité de consommation", source: "INSEE – Revenus fiscaux localisés 2020" },
    { label: "Part des 65 ans et +", value: "29 %", source: "INSEE – Structure par âge 2021" },
    { label: "Logements sociaux", value: "18 % du parc", source: "Ministère de la Transition écologique – RPLS 2022" }
  ],
  socio: [
    "Près d’un tiers des ménages sont des personnes seules, souvent des retraités installés dans la Bastide et à Treize-Pierres.",
    "Les familles monoparentales représentent 12 % des foyers, principalement dans les quartiers Treize-Pierres et Tricot.",
    "36 % des logements sont occupés par des locataires, avec un taux de vacance supérieur à 11 % dans le centre ancien.",
    "2 500 emplois sont concentrés dans le commerce et les services publics ; l’industrie et l’agroalimentaire restent fragiles.",
    "Le revenu médian villefranchois est inférieur de 12 % à la moyenne nationale, ce qui justifie nos mesures de justice sociale."
  ],
  neighborhoods: [
    {
      name: "Bastide – Centre historique",
      detail: "Cœur commerçant mais vieillissant, 13 % de logements vacants ; priorité aux rénovations et aux rez-de-chaussée actifs."
    },
    {
      name: "Treize-Pierres / Tricot",
      detail: "Grands ensembles et habitats sociaux où vivent les familles populaires, besoins urgents en espaces publics et services."
    },
    {
      name: "Fontanges – Graves",
      detail: "Quartiers mixtes mêlant zones pavillonnaires et équipements sportifs ; potentiel pour un pôle santé et jeunesse."
    },
    {
      name: "Faubourg Saint-Jean / Saint-Martin",
      detail: "Axes d’entrée de ville, artisanat et petites industries ; enjeu de mobilités et de régulation foncière."
    },
    {
      name: "Hameaux du Ségala (Vènes, Martiel, Savignac)",
      detail: "Villages associés qui demandent des services publics mobiles, du transport et des relais associatifs."
    }
  ]
};
