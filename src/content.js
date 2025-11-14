export const INTRO = {
  badge: "Nous ne siégeons pas, mais nous pesons",
  title: "Villefranche-de-Rouergue mérite un programme communiste ouvert et populaire",
  paragraphs: [
    "La majorité actuelle, issue des radicaux de gauche et de LREM, gouverne sans les communistes. Nous ne sommes ni représentés au conseil municipal ni dans l'opposition officielle. Pourtant, notre parti reste ancré dans les quartiers, dans les luttes sociales et dans le monde associatif villefranchois.",
    "Villefranche-de-Rouergue, ville de 11 720 habitantes et habitants, fait face à des défis majeurs : désertification commerciale du centre historique, précarité dans les quartiers prioritaires de la Bastide et du Tricot, désert médical qui s'aggrave, jeunesse qui part faute de perspectives. Nous refusons cette fatalité.",
    "Ce site présente un programme clé en main que nous proposons aux futures listes municipales et aux habitantes et habitants qui veulent reprendre la Bastide et les quartiers populaires en main. Les propositions viennent du socle communiste national, des expériences qui marchent ailleurs en France, et de notre connaissance profonde du terrain villefranchois.",
    "Notre objectif est simple : que ces mesures soient reprises, enrichies, et qu'elles permettent d'ouvrir des listes de rassemblement citoyen à Villefranche-de-Rouergue dès 2026. Nous voulons une ville où il fait bon vivre, travailler et grandir, de la Bastide aux hameaux du Ségala."
  ],
  commitments: [
    { title: "Transparence totale", detail: "Publication de toutes nos propositions et budgets estimatifs en ligne" },
    { title: "Appel aux candidatures populaires", detail: "Accompagnement de citoyennes et citoyens prêts à porter le programme" },
    { title: "Démocratie réelle", detail: "Donner le pouvoir de décision aux habitantes et habitants de tous les quartiers" }
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
        title: "Assemblées citoyennes dotées d'un droit de veto",
        detail: [
          "Les conseils consultatifs de quartier ont disparu à Villefranche et les riveraines et riverains n'ont plus d'espace pour contester les décisions prises à la Bastide. Nous proposons d'installer des assemblées permanentes par quartier, dotées d'un secrétariat et d'une dotation budgétaire minimale de 50 000 € chacune.",
          "Ces assemblées pourront déclencher un référendum local si 5 % des électeurs signent une pétition, suspendre une décision municipale par un veto motivé et publieront chaque trimestre leurs comptes rendus pour que chacun puisse suivre les arbitrages.",
          "Chaque assemblée de quartier aura un local dédié avec permanences hebdomadaires, des outils numériques pour faciliter la participation à distance, et une formation gratuite à la démocratie locale pour toutes celles et ceux qui veulent s'engager."
        ],
        territories: ["Bastide", "Rive droite", "Rive gauche", "Le Tricot", "Veuzac", "Graves", "Laurière"],
        example: {
          city: "Saillans (Drôme)",
          detail: "L'assemblée des habitantes et habitants valide chaque décision municipale depuis 2014."
        }
      },
      {
        title: "Budget participatif porté à 5 %",
        detail: [
          "Les projets citoyens financés depuis 2020 n'excèdent pas quelques dizaines de milliers d'euros alors que les besoins en rénovation des places ou en services publics sont immenses. Nous portons la part du budget participatif à 5 % des investissements, soit près de 1 million d'euros par an.",
          "Les jurys seront tirés au sort dans chaque quartier, accompagnés par les maisons des hameaux qui aideront au montage des dossiers et par un comité d'experts citoyens chargé de suivre la réalisation concrète des chantiers retenus.",
          "Une plateforme en ligne sera créée pour que chacune et chacun puisse proposer des projets, voter, et suivre l'avancement des travaux en temps réel avec photos et rapports d'étape."
        ],
        territories: ["Les Pesquiés", "Pénevayre", "Les Gravasses", "Mas de Rivals", "Bastide"],
        example: {
          city: "Grenoble",
          detail: "5 M€ sont fléchés chaque année vers des projets décidés par les habitantes et habitants."
        }
      },
      {
        title: "Charte éthique et révocation citoyenne",
        detail: [
          "Les démissions successives au conseil municipal ont alimenté la défiance. Nous rendrons publiques toutes les indemnités, les agendas et les délégations afin que chaque habitant sache qui décide quoi.",
          "Une procédure de révocation sera déclenchée si un quart des assemblées de quartier le demande, forçant le ou la titulaire du mandat à organiser une consultation locale sous un mois.",
          "Chaque élu·e signera un engagement : zéro cumul de mandats dans le temps, interdiction de travailler pour des entreprises bénéficiant de marchés publics municipaux, publication mensuelle des rendez-vous officiels."
        ],
        territories: ["Ville entière"],
        example: {
          city: "Kingersheim (Haut-Rhin)",
          detail: "Tous les élus signent une charte éthique publique depuis plus de dix ans."
        }
      },
      {
        title: "Observatoire des services publics",
        detail: [
          "Délai pour obtenir un rendez-vous à l'état civil, ouverture des guichets, temps d'attente au CCAS : aucune donnée n'est publiée aujourd'hui. Nous créerons un observatoire réunissant agents municipaux, usagers et universitaires.",
          "Les indicateurs seront affichés dans chaque maison de quartier, diffusés en open data et débattus publiquement pour corriger les dysfonctionnements dans la Bastide comme dans les hameaux.",
          "Un baromètre citoyen sera publié chaque trimestre avec notation de la qualité des services : propreté, transports, accueil en mairie, rapidité des réponses. Les services mal notés devront présenter un plan d'action sous 30 jours."
        ],
        territories: ["Bastide", "Graves", "Rive gauche", "Le Tricot"],
        example: {
          city: "Paris",
          detail: "Les indicateurs de services publics sont publiés en open data chaque trimestre."
        }
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
          "CAF, CPAM, Département, médiation numérique, permanence juridique et relais associatifs y partageront un guichet unique capable d'accompagner les habitants des Pesquiés ou de la Rive droite sans déplacement supplémentaire.",
          "La Maison du Peuple offrira des ateliers gratuits : aide aux démarches administratives, cours de français, formation au numérique, permanence d'écrivain public, consultation juridique gratuite. Un café solidaire permettra de se restaurer à prix libre."
        ],
        territories: ["Bastide", "Les Pesquiés", "Rive droite"],
        example: {
          city: "Roubaix",
          detail: "La Maison du Peuple mutualise guichets sociaux, numériques et accompagnement juridique."
        }
      },
      {
        title: "Centre municipal de santé",
        detail: [
          "Le désert médical s'aggrave à Villefranche : les médecins généralistes ont en moyenne 7000 patients, soit le double de la normale. La fermeture de cabinets libéraux et la dépendance au centre hospitalier La Chartreuse rendent l'accès aux soins critique.",
          "Nous créerons un centre municipal de santé avec médecins généralistes, infirmier·es, kinésithérapeutes et psychologues salarié·es. Consultations sans dépassement d'honoraires, tiers payant intégral, ouverture en soirée et le samedi matin.",
          "Des permanences itinérantes desserviront les hameaux du Ségala (Mas de Rivals, Laurière, Veuzac) avec un cabinet mobile deux fois par semaine. Partenariat avec l'hôpital La Chartreuse pour les consultations de spécialistes."
        ],
        territories: ["Bastide", "Graves", "Veuzac", "Laurière", "Mas de Rivals"],
        example: {
          city: "Aubervilliers",
          detail: "Le centre municipal de santé y salarie généralistes et spécialistes depuis 1935."
        }
      },
      {
        title: "Plan logement Bastide/Tricot",
        detail: [
          "Plus de 11 % des logements du centre ancien restent vides et les marchands de sommeil s'installent du Tricot à la Rive droite. La Bastide et le Tricot sont classés en Quartier Prioritaire de la Politique de la Ville avec près de 2000 habitantes et habitants en précarité.",
          "Nous renforcerons le permis de louer, créerons une cellule municipale anti-insalubrité avec pouvoir de réquisition et lancerons un programme de rénovation énergétique des logements sociaux.",
          "Une OPAH-RU sur dix ans permettra de rénover 700 logements, l'office foncier solidaire bloquera la spéculation et les dents creuses seront mobilisées pour créer du logement social abordable. Objectif : zéro logement indigne d'ici 2030."
        ],
        territories: ["Bastide", "Le Tricot", "Rive gauche", "Rive droite", "Lapeyrade"],
        example: {
          city: "Bègles",
          detail: "L'office foncier solidaire bloque la spéculation et sécurise l'accession sociale."
        }
      },
      {
        title: "Cantines locales et sociales",
        detail: [
          "Les restaurants scolaires servent aujourd'hui moins de 30 % de produits issus de l'Aveyron et les tarifs restent élevés pour les foyers modestes. Nous renégocierons les marchés pour atteindre 80 % de denrées locales et 60 % bio d'ici 2028.",
          "Les menus à 1 € seront accessibles sous condition de quotient familial, avec gratuité totale pour les familles les plus précaires. Lutte contre le gaspillage alimentaire avec redistribution aux associations.",
          "Des ateliers cuisine populaire seront animés dans chaque école, centre social et maison de hameau. Création d'un potager pédagogique dans chaque école pour sensibiliser les enfants à l'alimentation saine."
        ],
        territories: ["Toutes les écoles", "Mas de Rivals", "Pénevayre", "Bastide"],
        example: {
          city: "Mouans-Sartoux",
          detail: "La ferme communale permet d'atteindre 100 % de bio et des tarifs accessibles."
        }
      },
      {
        title: "Accès au numérique pour toutes et tous",
        detail: [
          "La fracture numérique frappe durement les personnes âgées, les précaires et les habitants des hameaux. Les démarches administratives 100 % en ligne excluent une partie de la population.",
          "Nous créerons des points d'accès numérique gratuits dans chaque quartier avec accompagnement par des médiateur·rices formé·es. Ateliers hebdomadaires gratuits : utiliser internet, faire ses démarches CAF/impôts, protéger ses données.",
          "Wifi public gratuit dans tous les équipements municipaux, places publiques et zones prioritaires. Prêt gratuit d'ordinateurs et tablettes pour les familles qui en ont besoin. Partenariat avec des associations d'insertion pour recycler et redistribuer du matériel informatique."
        ],
        territories: ["Bastide", "Le Tricot", "Hameaux du Ségala", "Graves"],
        example: {
          city: "Lille",
          detail: "Les Maisons de quartier offrent un accompagnement numérique gratuit avec 20 médiateur·rices."
        }
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
      "Faire de Villefranche une ville respirable, sobre en énergie et nourrie par son territoire agricole. La transition écologique ne sera pas un luxe de bobos : elle créera des emplois locaux, baissera les factures et protègera notre santé.",
    actions: [
      {
        title: "Plan arbres et fraîcheur : 3000 arbres en 6 ans",
        detail: [
          "Les épisodes caniculaires se multiplient sur la Bastide et les cours minérales des écoles deviennent invivables. STOP : nous planterons 3000 arbres d'ici 2032, soit 500 par an. Priorité aux cours d'école, places publiques et quartiers populaires.",
          "Les berges de l'Alzou et de l'Aveyron seront renaturées avec création de zones de baignade naturelle accessibles gratuitement. Végétalisation massive des parkings et création d'îlots de fraîcheur dans chaque quartier.",
          "Les friches de la Rive gauche et du Tricot accueilleront des jardins partagés gratuits avec formation au jardinage bio. Chaque Villefranchois·e pourra cultiver ses légumes à moins de 10 minutes de chez lui/elle."
        ],
        territories: ["Bastide", "Rive gauche", "Graves", "Les Gravasses", "Le Tricot"],
        example: {
          city: "Clermont-Ferrand",
          detail: "Un plan de 20 000 arbres et de cours végétalisées a été engagé dès 2020."
        }
      },
      {
        title: "Révolution solaire et énergie citoyenne",
        detail: [
          "Les bâtiments municipaux consomment plus d'un million d'euros d'énergie par an : c'est FINI. La Ville s'engage avec le SYDOM et Urbasolar pour installer une centrale solaire de 5 MWc sur l'ancienne décharge, produisant l'équivalent de 1500 foyers.",
          "Nous créerons une société publique locale pour équiper 100 % des toitures publiques en panneaux solaires d'ici 2030 : écoles, gymnases, mairie, équipements sportifs. Objectif : autoconsommation maximale et revente du surplus pour financer les services publics.",
          "Aide directe de 5000 € pour les ménages modestes qui veulent installer des panneaux solaires. Achats groupés de rénovations énergétiques pour diviser les factures par deux dans les hameaux. Création de coopératives citoyennes d'autoconsommation dans chaque quartier."
        ],
        territories: ["Graves", "Veuzac", "Laurière", "Mas de Bonnet", "Toute la ville"],
        example: {
          city: "Loos-en-Gohelle",
          detail: "Une régie énergétique citoyenne y accompagne habitants et services publics depuis 15 ans."
        }
      },
      {
        title: "Transports gratuits et pistes cyclables partout",
        detail: [
          "STOP aux transports chers et inefficaces ! Gratuité totale des bus Bastibus pour les moins de 26 ans et les plus de 65 ans dès 2027. Objectif : gratuité pour toutes et tous d'ici 2030.",
          "Doublement de la fréquence des bus : un passage toutes les 15 minutes sur les lignes principales en journée, service jusqu'à 22h au lieu de 19h. Nouvelles lignes directes vers les zones d'emploi et les lycées.",
          "25 km de pistes cyclables sécurisées d'ici 2030 reliant Bastide, Tricot, Graves, gare et zones d'activité. Vélostations gratuites à la gare et au lycée Raymond Savignac. 100 vélos en libre-service dont 30 vélos électriques.",
          "Navettes quotidiennes pour les hameaux du Ségala : Mas de Rivals, Veuzac, Laurière connectés à la Bastide matin et soir pour les travailleurs·euses et les jeunes."
        ],
        territories: ["Le Tricot", "Rive droite", "Hameaux du Ségala", "Bastide", "Graves"],
        example: {
          city: "Montpellier, Aubagne, Bonneuil-sur-Marne",
          detail: [
            "Montpellier (34) : avec l'appui des élu·es PCF, la métropole a rendu l'ensemble des transports gratuits en 2023. Résultat : +40% de fréquentation et des économies pour toutes les familles.",
            "Aubagne (13) : transports gratuits depuis 2009, fréquentation TRIPLÉE !",
            "Bonneuil-sur-Marne (94) : meilleure ville cyclable du Val-de-Marne grâce à un plan massif d'aménagements."
          ]
        }
      },
      {
        title: "Zéro déchet et économie circulaire",
        detail: [
          "Les dépôts sauvages le long de l'Aveyron, c'est TERMINÉ ! Brigade verte municipale avec pouvoir de verbalisation immédiate. Nettoyage sous 24h des dépôts signalés via une application dédiée.",
          "Création d'une ressourcerie intercommunale employant 15 personnes en insertion : collecte, réparation et vente de meubles, électroménager, vêtements à prix solidaires. Composteurs collectifs gratuits dans tous les quartiers avec formation offerte.",
          "Objectif : réduire de 50% nos déchets d'ici 2032. Tarification incitative intelligente qui récompense les efforts, pas qui pénalise les familles. Collecte mobile dans les hameaux deux fois par semaine."
        ],
        territories: ["Les Pesquiés", "Rive droite", "Veuzac", "Graves", "Hameaux"],
        example: {
          city: "Besançon",
          detail: "Tarification incitative + ressourcerie municipale ont réduit les déchets de 20 %."
        }
      },
      {
        title: "Alimentation locale et circuits courts",
        detail: [
          "L'Aveyron produit une alimentation d'exception mais elle part ailleurs ! Nous créerons un réseau de vente directe producteurs-consommateurs avec marchés hebdomadaires supplémentaires dans les quartiers.",
          "Aide à l'installation de jeunes agriculteur·rices en bio sur les terres communales. Partenariat avec les producteurs locaux pour approvisionner cantines, EHPAD et restaurants municipaux en circuits courts.",
          "Création d'une AMAP municipale accessible à prix solidaires dans chaque quartier. Les foyers modestes pourront bénéficier de paniers de légumes locaux à -50% grâce à une subvention directe."
        ],
        territories: ["Bastide", "Tous les quartiers", "Hameaux agricoles"],
        example: {
          city: "Ungersheim (Haut-Rhin)",
          detail: "La régie agricole municipale fournit 100% des cantines en local et bio."
        }
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
      "Soutenir les commerces et artisans de la Bastide, créer des emplois publics de qualité, développer la culture et le sport pour toutes et tous. L'économie doit servir les habitantes et habitants, pas les actionnaires.",
    actions: [
      {
        title: "Soutien massif aux commerces et artisans de la Bastide",
        detail: [
          "100 commerces et artisans font vivre le centre-ville mais ils sont en difficulté. STOP aux aides sans contreparties ! Toute entreprise aidée par la Ville devra respecter l'égalité salariale, employer localement et respecter l'environnement.",
          "Prime de 10 000 € pour les jeunes qui reprennent un commerce en centre-ville. Loyers plafonnés dans les locaux commerciaux municipaux. Gratuité des terrasses et marchés la première année d'installation.",
          "Soutien à l'association Commerces en Bastide avec subvention doublée pour animer le centre : événements, marchés nocturnes, Basti'KDO renforcé. Le jeudi, jour du marché, deviendra une fête hebdomadaire."
        ],
        territories: ["Bastide", "Centre-ville", "Places publiques"],
        example: {
          city: "Lyon",
          detail: "Les aides économiques y sont conditionnées à l'égalité salariale et à des critères climatiques."
        }
      },
      {
        title: "Régie municipale du bâtiment : 50 emplois créés",
        detail: [
          "Les écoles tombent en ruine, les équipements sportifs attendent des mois pour une réparation. FINI le sous-investissement ! Création d'une régie municipale du bâtiment avec 50 emplois stables et formés.",
          "Cette régie emploiera 30 ouvrier·es qualifié·es + 20 personnes en formation/insertion. Menuiserie, plomberie, électricité, peinture : intervention sous 48h sur tous les bâtiments publics. Statut de fonctionnaire, salaires dignes, formation continue.",
          "Deux antennes de proximité au Tricot et aux Pesquiés pour être au plus près des besoins. Chantiers prioritaires : rénovation des écoles, isolation des gymnases, entretien des logements sociaux. Tableaux de bord publics avec suivi en temps réel."
        ],
        territories: ["Le Tricot", "Les Pesquiés", "Bastide", "Toute la ville"],
        example: {
          city: "Grenoble",
          detail: "La régie de quartier de Villeneuve entretient le patrimoine public avec des emplois statutaires."
        }
      },
      {
        title: "Pass Culture-Sport gratuit pour tous les jeunes",
        detail: [
          "Le sport et la culture ne sont PAS un luxe ! Pass Culture-Sport de 200 € par an GRATUIT pour tous les jeunes de 6 à 25 ans. Utilisable dans tous les clubs sportifs, associations culturelles, conservatoires, cinémas.",
          "Aucune condition de ressources : TOUS les jeunes y ont droit. Cumulable avec les aides départementales et nationales. Distribution automatique via les écoles, collèges et lycées.",
          "150 associations culturelles et sportives villefranchoises pourront accepter ce pass. Aide renforcée pour les familles monoparentales et les quartiers prioritaires avec accompagnement personnalisé pour l'inscription."
        ],
        territories: ["Les Gravasses", "Rive droite", "Graves", "Le Tricot", "Bastide"],
        example: {
          city: "Bologne (Italie)",
          detail: "Un pass municipal finance les dépenses sportives et culturelles des jeunes."
        }
      },
      {
        title: "Pôle culturel et associatif au Château de Graves",
        detail: [
          "Les associations s'entassent rue Bories dans des locaux trop petits. Nous créerons un vrai pôle culturel et associatif au Château de Graves sur 2000 m² : salles de répétition, studios d'enregistrement, ateliers arts plastiques, espaces de coworking associatif.",
          "Accès gratuit pour toutes les associations villefranchoises. Studios médias équipés (son, vidéo, podcast), fablab avec imprimantes 3D, atelier bois/métal. Guichet d'accompagnement pour monter des projets, trouver des financements, créer des coopératives.",
          "Ouvert 7j/7 avec permanences le soir et le week-end. Espace café-débat autogéré. Navette gratuite depuis la Bastide et les hameaux pour les événements. Programmation culturelle populaire : concerts, expos, conférences accessibles à toutes et tous."
        ],
        territories: ["Graves", "Bastide", "Veuzac", "Mas de Rivals"],
        example: {
          city: "Nantes",
          detail: "Trempo mutualise studios, formations et coopérations dans un ancien site industriel."
        }
      },
      {
        title: "Emplois jeunes municipaux",
        detail: [
          "Le chômage des jeunes atteint 22% dans le Tricot et la Bastide. Nous créerons 30 emplois jeunes municipaux en CDI sur 3 ans : animation sportive et culturelle, médiation numérique, entretien des espaces verts, aide aux devoirs.",
          "Salaire 1800€ net minimum, formation qualifiante incluse, possibilité de titularisation dans la fonction publique territoriale. Priorité aux jeunes des quartiers prioritaires et aux décrocheurs scolaires.",
          "Partenariat avec la Mission Locale pour repérer et accompagner les jeunes éloignés de l'emploi. Ces postes créeront des services publics de proximité qui manquent aujourd'hui."
        ],
        territories: ["Le Tricot", "Bastide", "Tous les quartiers"],
        example: {
          city: "Vaulx-en-Velin",
          detail: "Le plan emplois jeunes municipal a permis de former et d'embaucher 45 jeunes en 2 ans."
        }
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
      "Nos enfants et nos jeunes méritent le meilleur : des écoles rénovées, des activités gratuites, un vrai accompagnement. Investir dans la jeunesse, c'est investir dans l'avenir de Villefranche.",
    actions: [
      {
        title: "Plan écoles 100 % rénovées d'ici 2030",
        detail: [
          "STOP aux écoles qui tombent en ruine ! Toutes les écoles de Villefranche (Jean Pendaries, La Chartreuse, Le Tricot, Le Radel, Haute-Guyenne) seront 100% rénovées d'ici 2030. Isolation complète, ventilation naturelle, cours végétalisées.",
          "Budget : 15 millions d'euros sur 6 ans, soit 2,5 millions par an. Chaque cour deviendra un îlot de fraîcheur avec arbres, fontaines, espaces ombragés. Fini le béton brûlant qui rend les récréations insupportables en été.",
          "Équipements numériques de qualité dans chaque classe. Bibliothèques rénovées. Cours ouvertes aux associations après 18h et le week-end. Nos enfants méritent des écoles dignes du 21e siècle !"
        ],
        territories: ["Bastide", "Les Pesquiés", "Le Tricot", "Toute la ville"],
        example: {
          city: "Poitiers",
          detail: "Un plan pluriannuel finance la rénovation de 42 écoles et la transformation des cours."
        }
      },
      {
        title: "Crèches publiques gratuites et horaires élargis",
        detail: [
          "Trouver une place en crèche relève du parcours du combattant et les familles payent trop cher. Nous créerons 100 nouvelles places de crèches publiques d'ici 2030 avec tarifs calculés sur le quotient familial, gratuité pour les revenus modestes.",
          "Horaires élargis 6h-21h pour les parents qui travaillent tôt ou tard : soignant·es de La Chartreuse, salarié·es en horaires postés, commerçant·es. Plus personne ne devra choisir entre travail et garde d'enfant.",
          "Nouvelle micro-crèche au Tricot et à la Rive gauche. Service de garde itinérant dans les hameaux pour éviter les trajets quotidiens. Alimentation 100% bio et locale dans toutes les crèches."
        ],
        territories: ["Rive gauche", "Pénevayre", "Laurière", "Le Tricot"],
        example: {
          city: "Vitry-sur-Seine",
          detail: "Une crèche municipale à horaires élargis soutient les travailleuses et travailleurs postés."
        }
      },
      {
        title: "Conseil municipal des jeunes avec VRAI pouvoir",
        detail: [
          "Les jeunes veulent être écoutés, PAS juste consultés ! Création d'un Conseil Municipal des Jeunes de 11 à 25 ans avec un budget annuel de 100 000 € qu'ils géreront en totale autonomie.",
          "30 jeunes élu·es pour 2 ans : collégien·nes de Carco et Saint-Joseph, lycéen·nes de Raymond Savignac et Beauregard, jeunes en insertion, étudiants. Pouvoir de proposition au conseil municipal, droit de vote consultatif sur les délibérations concernant la jeunesse.",
          "Projets 100% décidés par les jeunes : skatepark, salles de concert, festivals, actions solidaires, projets écolos. Les adultes accompagnent mais ne décident PAS à leur place."
        ],
        territories: ["Toute la ville", "Collèges", "Lycées"],
        example: {
          city: "Rennes",
          detail: "Le conseil des jeunes gère un budget participatif pour ses projets solidaires."
        }
      },
      {
        title: "Accompagnement scolaire GRATUIT pour toutes et tous",
        detail: [
          "Le soutien scolaire privé coûte 30-40€/heure : c'est INACCEPTABLE ! Accompagnement scolaire 100% gratuit pour tous les élèves du CP à la Terminale. Aide aux devoirs, méthodologie, préparation brevet et bac.",
          "4 Maisons des Devoirs ouvertes dans les quartiers : Bastide, Tricot, Graves, Pénevayre. Ouverture lundi-vendredi 16h30-19h + mercredi et samedi matin. Encadrement par des enseignant·es retraité·es, étudiant·es et services civiques.",
          "Partenariat avec les collèges Carco et Saint-Joseph et les lycées Raymond Savignac et Beauregard. Suivi personnalisé des élèves en difficulté. Activités culturelles et sorties pédagogiques incluses."
        ],
        territories: ["Le Tricot", "Bastide", "Veuzac", "Graves", "Pénevayre"],
        example: {
          city: "Saint-Denis",
          detail: "Un service municipal dédié au soutien scolaire y travaille avec les collèges REP+."
        }
      },
      {
        title: "Activités périscolaires gratuites et de qualité",
        detail: [
          "Les activités périscolaires ne doivent PAS être un luxe ! Ateliers gratuits pour tous les enfants : sport, musique, arts plastiques, théâtre, numérique, jardinage, échecs, langues étrangères.",
          "Encadrement de qualité par des professionnel·les diplômé·es en CDI, pas des vacataires sous-payés. 20 activités différentes proposées chaque trimestre avec possibilité de changer.",
          "Horaires adaptés aux parents qui travaillent : garde assurée de 7h30 à 18h30. Transport gratuit pour les activités hors école. Séjours et sorties organisés pendant les vacances à prix solidaires."
        ],
        territories: ["Toutes les écoles primaires"],
        example: {
          city: "Bobigny",
          detail: "Périscolaire gratuit et de qualité avec 25 activités différentes proposées."
        }
      }
    ],
    focus: "La jeunesse doit être au cœur du projet villefranchois et non une variable d’ajustement."
  }
];

export const PARTICIPER = {
  badge: "Ouvert à toutes et tous",
  title: "Rejoignez le mouvement pour reprendre Villefranche en main !",
  paragraphs: [
    "Ce programme ne restera pas un document sur internet. Nous voulons qu'il devienne LA base des listes citoyennes et populaires qui vont gagner les municipales de 2026. Pour ça, on a besoin de VOUS !",
    "Nos ateliers d'éducation populaire battent le pavé dans tous les quartiers : cercles de parole où chacun·e peut s'exprimer, cartographies des urgences quartier par quartier, théâtre forum pour tester les propositions, porteurs de parole sur les marchés.",
    "Que vous soyez militant·e confirmé·e ou simple citoyen·ne en colère, vous avez votre place dans ce mouvement. On construit ensemble, on décide ensemble, on gagne ensemble. Villefranche mérite mieux que la résignation !"
  ],
  steps: [
    {
      title: "Rejoindre les ateliers populaires",
      detail:
        "Réunions tous les jeudis à 18h30 dans les quartiers (Bastide, Tricot, Graves). On écoute, on débat, on construit ensemble les priorités. Zéro jargon, zéro langue de bois."
    },
    {
      title: "Participer aux diagnostics de quartier",
      detail:
        "Balades urbaines pour identifier les problèmes concrets : logements pourris, espaces publics délaissés, services manquants. Cartes collaboratives, enquêtes de rue, photos avant/après."
    },
    {
      title: "Animer le débat public",
      detail:
        "Porteurs de parole sur les marchés, théâtre forum pour tester les propositions, tractages, réunions publiques. On va chercher les gens là où ils sont, pas dans des salles poussiéreuses."
    },
    {
      title: "Construire les listes citoyennes 2026",
      detail:
        "Vous voulez être candidat·e ? On vous accompagne : formation politique, juridique, prise de parole en public. Pas besoin d'être expert·e, juste motivé·e et honnête."
    },
    {
      title: "Diffuser le programme partout",
      detail:
        "Réseaux sociaux, tracts, affiches, bouche-à-oreille. Ce programme doit devenir LE sujet de conversation dans tous les cafés, marchés et associations de Villefranche."
    }
  ]
};

export const STATS = {
  title: "Mieux connaître Villefranche-de-Rouergue pour agir juste",
  paragraphs: [
    "Les chiffres sont clairs : Villefranche-de-Rouergue fait face à un déclin démographique, un vieillissement accéléré et une précarité croissante dans les quartiers prioritaires. Mais nous refusons la fatalité ! Ces données nous guident pour construire un programme qui répond aux vrais besoins.",
    "Toutes ces données proviennent de sources officielles : INSEE (Recensement 2021-2024), Pôle Emploi, Ministère de la Ville, Ouest Aveyron Communauté. Transparence totale : pas de manipulation, que des faits vérifiables par toutes et tous.",
    "Nous partageons ces chiffres avec toutes les listes citoyennes et habitantes et habitants qui veulent un programme basé sur la réalité, pas sur des promesses en l'air."
  ],
  highlights: [
    { label: "Population municipale", value: "11 720 habitantes et habitants", source: "INSEE – Recensement 2024" },
    { label: "Évolution depuis 2015", value: "–2,1 % (déclin continu)", source: "INSEE – Séries historiques 2015-2024" },
    { label: "Taux de chômage local", value: "7,0 % (2024)", source: "Pôle Emploi – T2 2024" },
    { label: "Revenu moyen par habitant", value: "20 820 € (légèrement sup. à la moyenne)", source: "INSEE – Revenus fiscaux 2023" },
    { label: "Part des 65 ans et +", value: "29 % (vieillissement accéléré)", source: "INSEE – Structure par âge 2024" },
    { label: "Logements vacants", value: "11 % (désertion du centre)", source: "INSEE – Parc immobilier 2023" },
    { label: "Quartiers prioritaires", value: "Bastide + Tricot + Lapeyrade (2000 hab.)", source: "Politique de la Ville 2024" },
    { label: "Désert médical", value: "7000 patients/médecin (2x la normale)", source: "ARS Occitanie 2024" }
  ],
  socio: [
    "Près d'un tiers des ménages sont des personnes seules, majoritairement des retraité·es dans la Bastide. Le vieillissement s'accélère mais les services adaptés manquent.",
    "Les familles monoparentales représentent 12 % des foyers, concentrées dans les quartiers prioritaires (Tricot, Bastide). Elles cumulent précarité économique et manque de services publics.",
    "Plus de 11 % des logements du centre historique sont VIDES : désertification commerciale, marchands de sommeil, absence de politique volontariste de rénovation.",
    "Le Quartier Prioritaire Bastide-Tricot-Lapeyrade compte près de 2000 habitantes et habitants en grande précarité, avec un revenu moyen de 8860€ contre 20 820€ pour la ville.",
    "Le tissu économique s'appuie sur les commerces et artisans (100 actifs dans le centre), l'hôpital La Chartreuse (800 emplois), et l'agriculture aveyronnaise. Mais la jeunesse part faute de perspectives.",
    "Le taux de chômage reste élevé dans les quartiers populaires, particulièrement chez les jeunes (22% chez les moins de 25 ans du Tricot).",
    "Désert médical aggravé : les médecins généralistes ont 7000 patients en moyenne contre 3500 au niveau national. Délais d'attente de plusieurs semaines pour un rendez-vous."
  ],
  neighborhoods: [
    { name: "Bastide (Centre historique)", detail: "Cœur médiéval de la ville avec 1551 habitant·es. Classé Quartier Prioritaire de la Ville (QPV) pour précarité et vacance des logements (11%). 100 commerces et artisans qui résistent mais ont besoin de soutien massif." },
    {
      name: "Le Tricot",
      detail: "Grand ensemble de 1490 habitant·es, classé QPV. Habitat social majoritaire, population jeune, chômage élevé. Manque criant d'espaces publics de qualité et d'animation culturelle."
    },
    {
      name: "Lapeyrade",
      detail: "Secteur intégré au QPV en raison des revenus très faibles. Nécessite renforcement urgent des services publics et du lien social."
    },
    {
      name: "Rive gauche (Le Breil, Combenègre)",
      detail: "Quartiers pavillonnaires populaires vulnérables aux inondations de l'Aveyron. Manque de transports en commun et d'équipements publics. Potentiel pour jardins partagés et initiatives écologiques."
    },
    {
      name: "Rive droite",
      detail: "Faubourgs ouvriers autour de la gare SNCF. Présence d'ateliers et petite industrie. Desserte bus insuffisante, surtout en soirée. Besoin de services de proximité."
    },
    { name: "Pénevayre", detail: "Quartier mixte combinant zones commerciales, habitat social et pavillonnaire. Manque d'identité et d'animation culturelle. Opportunité pour créer un vrai centre de vie." },
    {
      name: "Les Pesquiés (Peyremorte)",
      detail: "Habitat pavillonnaire dense aux portes de la Bastide. Problèmes de circulation et stationnement. Population vieillissante nécessitant services de proximité adaptés."
    },
    {
      name: "Les Gravasses (La Madeleine)",
      detail: "Entrée de ville avec lycées Raymond Savignac et Beauregard. Friches économiques à requalifier. Zone stratégique pour emploi jeunes et pôle multimodal."
    },
    { name: "Graves", detail: "Quartier sportif majeur avec potentiel énorme : Château de Graves idéal pour pôle culturel et associatif. Équipements sportifs à rénover. Bien desservi par les bus." },
    { name: "Veuzac", detail: "Faubourg industriel et artisanal avec tradition ouvrière. Mal connecté aux transports. Priorité : navettes régulières et centre de santé itinérant." },
    {
      name: "Mas de Rivals, Mas de Vernhet",
      detail: "Villages perchés du Ségala, isolement géographique. Routes dangereuses, absence de transports collectifs, fracture numérique. Besoin urgent de services publics mobiles."
    },
    {
      name: "Laurière, Mas de Bonnet, Beauregard, Les Imberts",
      detail: "Arc rural avec hameaux agricoles dispersés. Population vieillissante, jeunes qui partent. Nécessite navettes quotidiennes, médecin itinérant, animation locale."
    }
  ]
};
