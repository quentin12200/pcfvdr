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
        example: {
          city: "Saillans (Drôme)",
          detail: "L’assemblée des habitantes et habitants valide chaque décision municipale depuis 2014."
        },
        validations: 74
      },
      {
        title: "Budget participatif porté à 5 %",
        detail:
          "Priorité aux quartiers populaires, publication annuelle des projets financés, accompagnement des associations pour déposer des dossiers.",
        example: {
          city: "Grenoble",
          detail: "5 M€ sont fléchés chaque année vers des projets décidés par les habitantes et habitants."
        },
        validations: 58
      },
      {
        title: "Charte éthique et révocation citoyenne",
        detail:
          "Non-cumul strict, transparence des indemnités, possibilité de révocation citoyenne en cas de manquement grave à la charte.",
        example: {
          city: "Kingersheim (Haut-Rhin)",
          detail: "Tous les élus signent une charte éthique publique depuis plus de dix ans."
        },
        validations: 62
      },
      {
        title: "Observatoire des services publics",
        detail:
          "Tableaux de bord publics sur les délais administratifs, les marchés, les subventions et les délégations de service public.",
        example: {
          city: "Paris",
          detail: "Les indicateurs de services publics sont publiés en open data chaque trimestre."
        },
        validations: 41
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
          "Accueil social global, médiation numérique, permanences CAF, CPAM et Département avec horaires élargis et relais associatifs.",
        example: {
          city: "Roubaix",
          detail: "La Maison du Peuple mutualise guichets sociaux, numériques et accompagnement juridique."
        },
        validations: 69
      },
      {
        title: "Centre municipal de santé",
        detail:
          "Médecins, infirmiers, sages-femmes salariés à Fontanges et consultations avancées dans les quartiers et villages.",
        example: {
          city: "Aubervilliers",
          detail: "Le centre municipal de santé y salarie généralistes et spécialistes depuis 1935."
        },
        validations: 77
      },
      {
        title: "Plan logement Bastide/Tricot",
        detail:
          "Permis de louer renforcé, taxation des logements vacants, rénovation de 700 logements via une OPAH-RU massive et création d’un office foncier solidaire.",
        example: {
          city: "Bègles",
          detail: "L’office foncier solidaire bloque la spéculation et sécurise l’accession sociale."
        },
        validations: 83
      },
      {
        title: "Cantines locales et sociales",
        detail:
          "80 % de produits locaux et 60 % bio, menus à 1 € pour les familles modestes, ateliers cuisine populaire dans les écoles et les centres sociaux.",
        example: {
          city: "Mouans-Sartoux",
          detail: "La ferme communale permet d’atteindre 100 % de bio et des tarifs accessibles."
        },
        validations: 64
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
        example: {
          city: "Clermont-Ferrand",
          detail: "Un plan de 20 000 arbres et de cours végétalisées a été engagé dès 2020."
        },
        validations: 59
      },
      {
        title: "Énergie citoyenne",
        detail:
          "Société publique locale pour équiper 50 % des toitures publiques en solaire, coopératives d’habitants pour l’autoconsommation et lutte contre la précarité énergétique.",
        example: {
          city: "Loos-en-Gohelle",
          detail: "Une régie énergétique citoyenne y accompagne habitants et services publics depuis 15 ans."
        },
        validations: 66
      },
      {
        title: "Plan mobilités publiques",
        detail:
          "Bastibus+ gratuit pour les moins de 26 ans, cadencement toutes les 20 minutes, 15 km de pistes cyclables sécurisées et pôle d’échanges multimodal à la gare.",
        example: {
          city: "Dunkerque",
          detail: "Le réseau gratuit et renforcé a doublé la fréquentation en quelques années."
        },
        validations: 52
      },
      {
        title: "Déchets zéro brûlage",
        detail:
          "Composteurs collectifs, ressourcerie intercommunale, tarification incitative accompagnée et brigade verte pour lutter contre les dépôts sauvages.",
        example: {
          city: "Besançon",
          detail: "Tarification incitative + ressourcerie municipale ont réduit les déchets de 20 %."
        },
        validations: 48
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
        example: {
          city: "Lyon",
          detail: "Les aides économiques y sont conditionnées à l’égalité salariale et à des critères climatiques."
        },
        validations: 71
      },
      {
        title: "Régie municipale du bâtiment",
        detail:
          "Atelier chantier d’insertion pour entretenir logements vacants, écoles et équipements sportifs avec des emplois statutaires.",
        example: {
          city: "Grenoble",
          detail: "La régie de quartier de Villeneuve entretient le patrimoine public avec des emplois statutaires."
        },
        validations: 63
      },
      {
        title: "Pass Culture-Sport Villefranchois",
        detail:
          "120 € par jeune pour adhérer à un club, acheter un instrument ou du matériel artistique ; priorité aux quartiers populaires.",
        example: {
          city: "Bologne (Italie)",
          detail: "Un pass municipal finance les dépenses sportives et culturelles des jeunes."
        },
        validations: 55
      },
      {
        title: "Maison des associations agrandie",
        detail:
          "Installation au Château de Graves avec ateliers mutualisés, studio médias et accompagnement à la création de coopératives.",
        example: {
          city: "Nantes",
          detail: "Trempo mutualise studios, formations et coopérations dans un ancien site industriel." 
        },
        validations: 60
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
        example: {
          city: "Poitiers",
          detail: "Un plan pluriannuel finance la rénovation de 42 écoles et la transformation des cours."
        },
        validations: 68
      },
      {
        title: "Crèches aux horaires élargis",
        detail:
          "Extension des crèches municipales, micro-crèche coopérative pour les horaires atypiques et service de garde partagée dans les villages associés.",
        example: {
          city: "Vitry-sur-Seine",
          detail: "Une crèche municipale à horaires élargis soutient les travailleuses et travailleurs postés."
        },
        validations: 72
      },
      {
        title: "Conseil municipal des jeunes",
        detail:
          "Budget propre pour financer des projets solidaires, culturels et écologiques proposés par les 9-18 ans.",
        example: {
          city: "Rennes",
          detail: "Le conseil des jeunes gère un budget participatif pour ses projets solidaires."
        },
        validations: 57
      },
      {
        title: "Accompagnement scolaire renforcé",
        detail:
          "Dispositif municipal avec enseignants vacataires, bénévoles et associations pour les collégiens de Treize Pierres et les lycées.",
        example: {
          city: "Saint-Denis",
          detail: "Un service municipal dédié au soutien scolaire y travaille avec les collèges REP+."
        },
        validations: 61
      }
    ],
    focus: "La jeunesse doit être au cœur du projet villefranchois et non une variable d’ajustement."
  }
];

export const PARTICIPER = {
  badge: "Ouvert à toutes et tous",
  title: "Faites vivre le programme communiste villefranchois",
  paragraphs: [
    "Nous voulons que ces propositions soient reprises par les listes citoyennes ou associatives prêtes à rompre avec la gestion actuelle.",
    "Nos ateliers d’éducation populaire s’appuient sur des techniques concrètes : cercles de parole pour entendre chaque quartier, cartographies sensibles pour pointer les urgences, théâtre forum pour tester les décisions et porteurs de parole sur les marchés.",
    "Vous pouvez relayer le programme, l’adapter à votre quartier et rejoindre l’équipe qui prépare la campagne 2026 afin d’animer le débat municipal sur ces orientations. Chaque proposition dispose d’un compteur : à 100 validations citoyennes, nous publions un guide pas à pas pour la future municipalité."
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
