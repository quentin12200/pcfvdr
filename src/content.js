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
        detail: [
          "Les conseils consultatifs de quartier ont disparu à Villefranche et les riveraines et riverains n’ont plus d’espace pour contester les décisions prises à la Bastide. Nous proposons d’installer des assemblées permanentes par quartier, dotées d’un secrétariat et d’une dotation budgétaire minimale de 50 000 € chacune.",
          "Ces assemblées pourront déclencher un référendum local si 5 % des électeurs signent une pétition, suspendre une décision municipale par un veto motivé et publieront chaque trimestre leurs comptes rendus pour que chacun puisse suivre les arbitrages."],
        territories: ["Bastide", "Rive droite", "Rive gauche", "Le Tricot", "Veuzac"],
        example: {
          city: "Saillans (Drôme)",
          detail: "L’assemblée des habitantes et habitants valide chaque décision municipale depuis 2014."
        },
        validations: 74
      },
      {
        title: "Budget participatif porté à 5 %",
        detail: [
          "Les projets citoyens financés depuis 2020 n’excèdent pas quelques dizaines de milliers d’euros alors que les besoins en rénovation des places ou en services publics sont immenses. Nous portons la part du budget participatif à 5 % des investissements, soit près de 1 million d’euros par an.",
          "Les jurys seront tirés au sort dans chaque quartier, accompagnés par les maisons des hameaux qui aideront au montage des dossiers et par un comité d’experts citoyens chargé de suivre la réalisation concrète des chantiers retenus."],
        territories: ["Les Pesquiés", "Pénevayre", "Les Gravasses", "Mas de Rivals"],
        example: {
          city: "Grenoble",
          detail: "5 M€ sont fléchés chaque année vers des projets décidés par les habitantes et habitants."
        },
        validations: 58
      },
      {
        title: "Charte éthique et révocation citoyenne",
        detail: [
          "Les démissions successives au conseil municipal ont alimenté la défiance. Nous rendrons publiques toutes les indemnités, les agendas et les délégations afin que chaque habitant sache qui décide quoi.",
          "Une procédure de révocation sera déclenchée si un quart des assemblées de quartier le demande, forçant le ou la titulaire du mandat à organiser une consultation locale sous un mois."],
        territories: ["Ville entière"],
        example: {
          city: "Kingersheim (Haut-Rhin)",
          detail: "Tous les élus signent une charte éthique publique depuis plus de dix ans."
        },
        validations: 62
      },
      {
        title: "Observatoire des services publics",
        detail: [
          "Délai pour obtenir un rendez-vous à l’état civil, ouverture des guichets, temps d’attente au CCAS : aucune donnée n’est publiée aujourd’hui. Nous créerons un observatoire réunissant agents municipaux, usagers et universitaires.",
          "Les indicateurs seront affichés dans chaque maison de quartier, diffusés en open data et débattus publiquement pour corriger les dysfonctionnements dans la Bastide comme dans les hameaux."],
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
        detail: [
          "Les habitantes de la Bastide se heurtent à des guichets éclatés entre la sous-préfecture, le CCAS et les permanences associatives. Nous regrouperons ces services dans une Maison du Peuple ouverte six jours sur sept avec nocturnes hebdomadaires.",
          "CAF, CPAM, Département, médiation numérique, permanence juridique et relais associatifs y partageront un guichet unique capable d’accompagner les habitants des Pesquiés ou de la Rive droite sans déplacement supplémentaire."],
        territories: ["Bastide", "Les Pesquiés", "Rive droite"],
        example: {
          city: "Roubaix",
          detail: "La Maison du Peuple mutualise guichets sociaux, numériques et accompagnement juridique."
        },
        validations: 69
      },
      {
        title: "Centre municipal de santé",
        detail: [
          "La fermeture de cabinets libéraux et la dépendance au centre hospitalier Émile-Borel rendent l’accès aux soins critique. Nous salarierons une équipe pluridisciplinaire installée à Fontanges avec des vacations à Graves, Veuzac et Laurère.",
          "Le centre municipal offrira des consultations sans dépassements, un service de prévention itinérant dans les hameaux du Ségala et un calendrier de permanence dentaire et sage-femme partagé avec l’hôpital."],
        territories: ["Graves", "Veuzac", "Laurière"],
        example: {
          city: "Aubervilliers",
          detail: "Le centre municipal de santé y salarie généralistes et spécialistes depuis 1935."
        },
        validations: 77
      },
      {
        title: "Plan logement Bastide/Tricot",
        detail: [
          "Plus de 11 % des logements du centre ancien restent vides et les marchands de sommeil s’installent du Tricot à la Rive droite. Nous renforcerons le permis de louer et créerons une cellule municipale anti-insalubrité.",
          "Une OPAH-RU sur dix ans permettra de rénover 700 logements, l’office foncier solidaire bloquera la spéculation et les dents creuses seront mobilisées pour créer du logement social dans les deux rives."],
        territories: ["Bastide", "Le Tricot", "Rive gauche", "Rive droite"],
        example: {
          city: "Bègles",
          detail: "L’office foncier solidaire bloque la spéculation et sécurise l’accession sociale."
        },
        validations: 83
      },
      {
        title: "Cantines locales et sociales",
        detail: [
          "Les restaurants scolaires servent aujourd’hui moins de 30 % de produits issus de l’Aveyron et les tarifs restent élevés pour les foyers modestes. Nous renégocierons les marchés pour atteindre 80 % de denrées locales et 60 % bio.",
          "Les menus à 1 € seront accessibles sous condition de quotient familial, complétés par des ateliers cuisine populaire animés dans chaque école, centre social et maison de hameau."],
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
        detail: [
          "Les épisodes caniculaires se multiplient sur la Bastide et les cours minérales des écoles deviennent invivables. Nous lancerons un inventaire de toutes les surfaces bitumées pour prioriser les lieux où planter 2 000 arbres.",
          "Les berges de l’Alzou seront renaturées, les places recevront des dispositifs d’ombre et les friches de la Rive gauche accueilleront des jardins partagés ouverts aux habitants."],
        territories: ["Bastide", "Rive gauche", "Graves", "Les Gravasses"],
        example: {
          city: "Clermont-Ferrand",
          detail: "Un plan de 20 000 arbres et de cours végétalisées a été engagé dès 2020."
        },
        validations: 59
      },
      {
        title: "Énergie citoyenne",
        detail: [
          "Les bâtiments municipaux consomment plus d’un million d’euros d’énergie par an. Une société publique locale mutualisera la pose de panneaux solaires sur 50 % des toitures publiques dès le premier mandat.",
          "Nous aiderons les habitantes et habitants à créer des coopératives d’autoconsommation et proposerons un achat groupé de rénovations pour faire reculer la précarité énergétique dans les hameaux."],
        territories: ["Graves", "Veuzac", "Laurière", "Mas de Bonnet"],
        example: {
          city: "Loos-en-Gohelle",
          detail: "Une régie énergétique citoyenne y accompagne habitants et services publics depuis 15 ans."
        },
        validations: 66
      },
      {
        title: "Plan mobilités publiques",
        detail: [
          "Les bus Bastibus s’arrêtent trop tôt et ne desservent pas correctement les lycéens des Gravasses. Nous renforcerons l’offre pour atteindre un passage toutes les 20 minutes sur les lignes structurantes et la gratuité pour les moins de 26 ans.",
          "Les pôles d’échanges du Tricot et de la gare seront modernisés, 15 km de pistes cyclables sécurisées seront créés et des navettes relieront quotidiennement les hameaux du Ségala."],
        territories: ["Le Tricot", "Rive droite", "Hameaux du Ségala"],
        example: {
          city: "Dunkerque",
          detail: "Le réseau gratuit et renforcé a doublé la fréquentation en quelques années."
        },
        validations: 52
      },
      {
        title: "Déchets zéro brûlage",
        detail: [
          "Les dépôts sauvages se multiplient le long de l’Aveyron et le brûlage de déchets verts reste courant dans les hameaux. Nous créerons une brigade verte municipale chargée de verbaliser, sensibiliser et intervenir rapidement.",
          "Une ressourcerie intercommunale, des composteurs collectifs et des collectes mobiles dans les villages permettront d’accompagner la tarification incitative plutôt que de la subir."],
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
        detail: [
          "La communauté de communes distribue des aides économiques sans toujours exiger de contreparties, notamment sur l’égalité salariale ou la transition énergétique. Nous conditionnerons les subventions municipales à un socle d’engagements vérifiables.",
          "Les entreprises soutenues devront publier leurs indicateurs d’emploi local, d’égalité femmes-hommes et d’impact énergétique ; un comité associant syndicats et commerçants contrôlera les résultats."],
        territories: ["Bastide", "Pénevayre", "Rive gauche"],
        example: {
          city: "Lyon",
          detail: "Les aides économiques y sont conditionnées à l’égalité salariale et à des critères climatiques."
        },
        validations: 71
      },
      {
        title: "Régie municipale du bâtiment",
        detail: [
          "Les écoles et équipements sportifs souffrent de retards d’entretien faute d’équipes municipales suffisantes. Nous créerons une régie municipale dotée d’un atelier chantier d’insertion pour former et embaucher localement.",
          "Deux antennes, au Boï et aux Pesquiés, permettront d’intervenir sous 48 heures sur les logements vacants ou les équipements prioritaires, avec un suivi des chantiers publié en ligne."],
        territories: ["Le Boï", "Les Pesquiés", "Bastide"],
        example: {
          city: "Grenoble",
          detail: "La régie de quartier de Villeneuve entretient le patrimoine public avec des emplois statutaires."
        },
        validations: 63
      },
      {
        title: "Pass Culture-Sport Villefranchois",
        detail: [
          "Le coût d’adhésion aux clubs sportifs ou aux conservatoires freine les jeunes des Gravasses et des faubourgs. Nous créerons un pass de 120 € par jeune cumulable avec les aides départementales.",
          "Les établissements scolaires des Gravasses, du Tricot et des hameaux pourront distribuer ces pass avec un accompagnement des familles pour s’inscrire dans les associations locales."],
        territories: ["Les Gravasses", "Rive droite", "Graves"],
        example: {
          city: "Bologne (Italie)",
          detail: "Un pass municipal finance les dépenses sportives et culturelles des jeunes."
        },
        validations: 55
      },
      {
        title: "Maison des associations agrandie",
        detail: [
          "Les associations culturelles et sportives se partagent aujourd’hui des locaux saturés rue Bories. Nous installerons la Maison des associations au Château de Graves, accessible en bus et proche des équipements sportifs.",
          "Des studios médias, ateliers mutualisés et un guichet d’accompagnement aux coopératives permettront aussi aux collectifs ruraux de bénéficier d’espaces partagés lorsqu’ils viennent en ville."],
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
        detail: [
          "Les écoles Jean-Jaurès, Calcomier ou Treize-Pierres manquent d’isolation et les cours restent minérales malgré les alertes des parents d’élèves. Nous engagerons un plan de rénovation énergétique complet assorti d’une ventilation naturelle.",
          "Chaque cour deviendra un îlot de fraîcheur partagé avec les associations après 18 h, y compris pour les villages associés qui pourront utiliser les équipements lors des activités périscolaires."],
        territories: ["Bastide", "Les Pesquiés", "Mas de Bonnet", "Veuzac"],
        example: {
          city: "Poitiers",
          detail: "Un plan pluriannuel finance la rénovation de 42 écoles et la transformation des cours."
        },
        validations: 68
      },
      {
        title: "Crèches aux horaires élargis",
        detail: [
          "Les familles travaillant en horaires décalés doivent aujourd’hui se tourner vers Rodez ou les assistantes maternelles privées. Nous étendrons les crèches municipales avec une amplitude 6 h-21 h pour répondre aux besoins des soignants ou salariés industriels.",
          "Une micro-crèche coopérative sera implantée sur la Rive gauche et un service de garde partagé circulera dans les villages associés pour éviter des trajets quotidiens vers la Bastide."],
        territories: ["Rive gauche", "Pénevayre", "Laurière"],
        example: {
          city: "Vitry-sur-Seine",
          detail: "Une crèche municipale à horaires élargis soutient les travailleuses et travailleurs postés."
        },
        validations: 72
      },
      {
        title: "Conseil municipal des jeunes",
        detail: [
          "Les dispositifs jeunesse actuels se limitent à des animations ponctuelles et les collégiennes et collégiens n’influent pas sur les choix municipaux. Nous créerons un conseil municipal des jeunes doté d’un budget annuel de 50 000 €.",
          "Des sièges seront réservés aux collèges Treize-Pierres et aux lycées agricoles, avec l’obligation de publier les projets financés (solidarité, culture, climat) et un suivi par les élus adultes."],
        territories: ["Treize-Pierres", "Les Gravasses", "Graves"],
        example: {
          city: "Rennes",
          detail: "Le conseil des jeunes gère un budget participatif pour ses projets solidaires."
        },
        validations: 57
      },
      {
        title: "Accompagnement scolaire renforcé",
        detail: [
          "Les résultats scolaires chutent dans les quartiers populaires et les familles peinent à financer du soutien privé. Nous mettrons en place une cellule municipale d’aide aux devoirs en lien avec les enseignants volontaires.",
          "Les associations d’éducation populaire seront conventionnées pour accueillir les collégiens de Treize-Pierres, les lycéens du centre-ville et les jeunes des hameaux qui arrivent par les navettes."],
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
