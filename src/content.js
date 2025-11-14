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
      "Refonder la démocratie locale en donnant la parole aux quartiers – de la Bastide à la Rive droite – tout en ouvrant les finances publiques et en imposant l’éthique républicaine aux futurs élus.",
    actions: [
      {
        title: "Assemblées citoyennes dotées d’un droit de veto",
        detail:
          "Assemblées permanentes dans la Bastide, au Tricot, sur les Rives gauche et droite et dans les hameaux pour décider des priorités, avec budget propre, droit d’interpellation et référendum local si 5 % des inscrits signent une pétition.",
        territories: ["Bastide", "Rive droite", "Rive gauche", "Le Tricot", "Veuzac"],
        example: {
          city: "Saillans (Drôme)",
          detail: "L’assemblée des habitantes et habitants valide chaque décision municipale depuis 2014."
        },
        validations: 74
      },
      {
        title: "Budget participatif porté à 5 %",
        detail:
          "Augmentation progressive du budget participatif communal à 5 % des dépenses d’investissement, avec jurys tirés au sort, tutoriels et aide au montage de projets dans les maisons de quartier.",
        territories: ["Les Pesquiés", "Pénevayre", "Les Gravasses", "Mas de Rivals"],
        example: {
          city: "Grenoble",
          detail: "5 M€ sont fléchés chaque année vers des projets décidés par les habitantes et habitants."
        },
        validations: 58
      },
      {
        title: "Charte éthique et révocation citoyenne",
        detail:
          "Signature d’une charte publique par chaque élu·e, publication des indemnités en ligne, contrôle citoyen annuel et procédure de révocation déclenchée par un quart des assemblées de quartier.",
        territories: ["Ville entière"],
        example: {
          city: "Kingersheim (Haut-Rhin)",
          detail: "Tous les élus signent une charte éthique publique depuis plus de dix ans."
        },
        validations: 62
      },
      {
        title: "Observatoire des services publics",
        detail:
          "Publication trimestrielle des délais administratifs, marchés publics, subventions et délégations, accessible en open data et affichée dans chaque maison de quartier.",
        territories: ["Bastide", "Graves", "Rive gauche"],
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
      "Sécuriser la vie quotidienne : santé, logement, alimentation, accueil social. La puissance publique doit redevenir l’outil principal des Villefranchois, notamment dans les quartiers populaires et les villages associés.",
    actions: [
      {
        title: "Maison du Peuple Bastide",
        detail:
          "Accueil social global, médiation numérique, permanences CAF, CPAM et Département avec horaires élargis, point justice et relais associatifs pour orienter les habitantes et habitants.",
        territories: ["Bastide", "Les Pesquiés", "Rive droite"],
        example: {
          city: "Roubaix",
          detail: "La Maison du Peuple mutualise guichets sociaux, numériques et accompagnement juridique."
        },
        validations: 69
      },
      {
        title: "Centre municipal de santé",
        detail:
          "Médecins, infirmiers, sages-femmes salariés installés à Fontanges avec consultations avancées à Graves, Veuzac, Laurière et dans les hameaux du Ségala.",
        territories: ["Graves", "Veuzac", "Laurière"],
        example: {
          city: "Aubervilliers",
          detail: "Le centre municipal de santé y salarie généralistes et spécialistes depuis 1935."
        },
        validations: 77
      },
      {
        title: "Plan logement Bastide/Tricot",
        detail:
          "Permis de louer renforcé, taxation des logements vacants, rénovation de 700 logements via une OPAH-RU massive, office foncier solidaire et résorption des dents creuses dans les Rives gauche et droite.",
        territories: ["Bastide", "Le Tricot", "Rive gauche", "Rive droite"],
        example: {
          city: "Bègles",
          detail: "L’office foncier solidaire bloque la spéculation et sécurise l’accession sociale."
        },
        validations: 83
      },
      {
        title: "Cantines locales et sociales",
        detail:
          "80 % de produits locaux et 60 % bio, menus à 1 € pour les familles modestes, ateliers cuisine populaire dans les écoles, les centres sociaux et les maisons des hameaux.",
        territories: ["Toutes les écoles", "Mas de Rivals", "Pénevayre"],
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
      "Faire de Villefranche une ville respirable, sobre en énergie et nourrie par son territoire agricole, en accompagnant les habitantes et habitants de la Bastide aux hameaux ruraux dans la transition.",
    actions: [
      {
        title: "Plan arbres et fraîcheur",
        detail:
          "2 000 arbres plantés, cours d’écoles végétalisées, renaturation des berges de l’Alzou, dispositifs d’ombre sur les places de la Bastide et jardins partagés sur les friches de la Rive gauche.",
        territories: ["Bastide", "Rive gauche", "Graves", "Les Gravasses"],
        example: {
          city: "Clermont-Ferrand",
          detail: "Un plan de 20 000 arbres et de cours végétalisées a été engagé dès 2020."
        },
        validations: 59
      },
      {
        title: "Énergie citoyenne",
        detail:
          "Société publique locale pour équiper 50 % des toitures publiques en solaire, coopératives d’habitant·es pour l’autoconsommation et lutte contre la précarité énergétique avec achat groupé de rénovations.",
        territories: ["Graves", "Veuzac", "Laurière", "Mas de Bonnet"],
        example: {
          city: "Loos-en-Gohelle",
          detail: "Une régie énergétique citoyenne y accompagne habitants et services publics depuis 15 ans."
        },
        validations: 66
      },
      {
        title: "Plan mobilités publiques",
        detail:
          "Bastibus+ gratuit pour les moins de 26 ans, cadencement toutes les 20 minutes, 15 km de pistes cyclables sécurisées, pôles d’échanges au Tricot et à la gare et navettes pour les hameaux du Ségala.",
        territories: ["Le Tricot", "Rive droite", "Hameaux du Ségala"],
        example: {
          city: "Dunkerque",
          detail: "Le réseau gratuit et renforcé a doublé la fréquentation en quelques années."
        },
        validations: 52
      },
      {
        title: "Déchets zéro brûlage",
        detail:
          "Composteurs collectifs, ressourcerie intercommunale, tarification incitative accompagnée, brigade verte pour lutter contre les dépôts sauvages et collectes mobiles dans les hameaux.",
        territories: ["Les Pesquiés", "Rive droite", "Veuzac", "Graves"],
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
      "Redonner la priorité aux coopératives, aux petites entreprises, aux services publics culturels et sportifs pour faire vivre la Bastide toute l’année et renforcer les quartiers périphériques.",
    actions: [
      {
        title: "Conditionnalité des aides",
        detail:
          "Aucune subvention sans engagements sociaux : égalité femmes-hommes, emploi local, lutte contre la précarité énergétique dans les ateliers et publication d’indicateurs accessibles.",
        territories: ["Bastide", "Pénevayre", "Rive gauche"],
        example: {
          city: "Lyon",
          detail: "Les aides économiques y sont conditionnées à l’égalité salariale et à des critères climatiques."
        },
        validations: 71
      },
      {
        title: "Régie municipale du bâtiment",
        detail:
          "Atelier chantier d’insertion pour entretenir logements vacants, écoles et équipements sportifs, avec antennes au Boï et aux Pesquiés pour intervenir rapidement.",
        territories: ["Le Boï", "Les Pesquiés", "Bastide"],
        example: {
          city: "Grenoble",
          detail: "La régie de quartier de Villeneuve entretient le patrimoine public avec des emplois statutaires."
        },
        validations: 63
      },
      {
        title: "Pass Culture-Sport Villefranchois",
        detail:
          "120 € par jeune pour adhérer à un club, acheter un instrument ou du matériel artistique ; priorité aux quartiers populaires et aux lycéen·nes des Gravasses.",
        territories: ["Les Gravasses", "Rive droite", "Graves"],
        example: {
          city: "Bologne (Italie)",
          detail: "Un pass municipal finance les dépenses sportives et culturelles des jeunes."
        },
        validations: 55
      },
      {
        title: "Maison des associations agrandie",
        detail:
          "Installation au Château de Graves avec ateliers mutualisés, studio médias, accompagnement à la création de coopératives et espaces partagés pour les collectifs ruraux.",
        territories: ["Graves", "Veuzac", "Mas de Rivals"],
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
      "Investir dans les enfants et les jeunes pour faire reculer les inégalités scolaires, du centre historique aux hameaux périphériques, et donner envie de rester vivre à Villefranche.",
    actions: [
      {
        title: "Plan écoles 100 % rénovées",
        detail:
          "Isolation, ventilation, cours transformées en îlots de fraîcheur, ouverture des salles aux associations après 18 h et mutualisation avec les villages associés.",
        territories: ["Bastide", "Les Pesquiés", "Mas de Bonnet", "Veuzac"],
        example: {
          city: "Poitiers",
          detail: "Un plan pluriannuel finance la rénovation de 42 écoles et la transformation des cours."
        },
        validations: 68
      },
      {
        title: "Crèches aux horaires élargis",
        detail:
          "Extension des crèches municipales, micro-crèche coopérative pour les horaires atypiques, service de garde partagé dans les villages associés et navettes pour les familles rurales.",
        territories: ["Rive gauche", "Pénevayre", "Laurière"],
        example: {
          city: "Vitry-sur-Seine",
          detail: "Une crèche municipale à horaires élargis soutient les travailleuses et travailleurs postés."
        },
        validations: 72
      },
      {
        title: "Conseil municipal des jeunes",
        detail:
          "Budget propre pour financer des projets solidaires, culturels et écologiques proposés par les 9-18 ans, avec sièges réservés aux collèges Treize-Pierres et aux lycées agricoles.",
        territories: ["Treize-Pierres", "Les Gravasses", "Graves"],
        example: {
          city: "Rennes",
          detail: "Le conseil des jeunes gère un budget participatif pour ses projets solidaires."
        },
        validations: 57
      },
      {
        title: "Accompagnement scolaire renforcé",
        detail:
          "Dispositif municipal avec enseignants vacataires, bénévoles et associations pour les collégiens de Treize-Pierres, les lycées du centre-ville et les jeunes des hameaux qui viennent en ville.",
        territories: ["Treize-Pierres", "Bastide", "Veuzac"],
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
    { name: "Bastide", detail: "Centre ancien commerçant, enjeu majeur de rénovation des logements et des rez-de-chaussée vides." },
    {
      name: "Rive gauche (Le Breil, Combenègre)",
      detail: "Quartiers pavillonnaires populaires soumis aux inondations de l’Aveyron et au manque de services publics."
    },
    {
      name: "Rive droite",
      detail: "Faubourgs ouvriers autour de la gare, forte présence d’ateliers et besoin de mobilités publiques fiables."
    },
    {
      name: "Le Tricot",
      detail: "Grand ensemble prioritaire avec beaucoup de jeunesse et un déficit d’espaces publics de qualité."
    },
    { name: "Pénevayre", detail: "Quartier mixte avec zones commerciales et habitat social nécessitant une offre culturelle de proximité." },
    { name: "Le Boï (Le Calvaire)", detail: "Secteur escarpé qui souffre de logements précaires et d’un accès compliqué aux services." },
    {
      name: "Les Pesquiés (Peyremorte)",
      detail: "Habitat pavillonnaire dense aux portes de la Bastide, sensible aux problèmes de circulation et de stationnement."
    },
    {
      name: "Les Gravasses (La Madeleine)",
      detail: "Entrée de ville marquée par les établissements scolaires et des friches économiques à requalifier."
    },
    {
      name: "Mas de Rivals (Mas de Vernhet)",
      detail: "Villages perchés du Ségala où il faut sécuriser routes, éclairage et accès au numérique."
    },
    {
      name: "Laurière – Mas de Bonnet – Beauregard – Les Imberts",
      detail: "Arc rural avec hameaux agricoles dispersés nécessitant des services publics mobiles et des navettes."
    },
    { name: "Graves", detail: "Quartier sportif et associatif majeur, idéal pour installer des services municipaux mutualisés." },
    { name: "Veuzac", detail: "Faubourg industriel et artisanal, à connecter davantage aux transports et aux politiques de santé." }
  ]
};
