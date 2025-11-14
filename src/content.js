export const INTRO = {
  badge: "Un programme concret pour Villefranche",
  title: "Et si on changeait vraiment les choses à Villefranche ?",
  paragraphs: [
    "Tu vis à Villefranche ? Tu travailles ici ? Alors tu sais que les choses peuvent mieux fonctionner. Les services publics qui marchent, des logements abordables, des transports qui passent quand il faut, une vraie démocratie où ta voix compte : c'est possible.",
    "Ce programme, c'est du concret. Pas de promesses en l'air. Chaque mesure a déjà été testée dans d'autres villes et on te dit comment on la finance. Tu peux tout lire, tout vérifier, tout critiquer. C'est fait pour ça.",
    "L'objectif ? Que tu puisses dire : \"Ouais, ça c'est un vrai projet pour Villefranche. Je veux que ça se fasse.\" Et si ça te branche, on t'accompagne pour porter ces idées aux élections de 2026."
  ],
  commitments: [
    { title: "Zéro blabla", detail: "Tout est chiffré, vérifié et réalisable dès 2026" },
    { title: "Tu peux participer", detail: "On t'accompagne si tu veux défendre ce programme ou rejoindre une liste" }
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
          "Ces assemblées pourront déclencher un référendum local si 5 % des électeurs signent une pétition, suspendre une décision municipale par un veto motivé et publieront chaque trimestre leurs comptes rendus pour que chacun puisse suivre les arbitrages."],
        example: {
          city: "Saillans (Drôme, 1 200 habitant·es)",
          detail: [
            "Depuis 2014, toutes les décisions importantes passent par l'assemblée mensuelle des habitant·es, ouverte à toutes et tous dès 16 ans.",
            "Budget participatif de 150 000€/an géré directement par les citoyen·nes. Commissions thématiques (urbanisme, école, social) où chacun·e peut siéger.",
            "Résultats : 200 participant·es régulier·es aux assemblées, 80% des habitant·es se sentent écouté·es (enquête 2019), fort sentiment d'appropriation de la vie locale."
          ]
        }
      },
      {
        title: "Budget participatif porté à 5 %",
        detail: [
          "Les projets citoyens financés depuis 2020 n'excèdent pas quelques dizaines de milliers d'euros alors que les besoins en rénovation des places ou en services publics sont immenses. Nous portons la part du budget participatif à 5 % des investissements, soit près de 1 million d'euros par an.",
          "Les jurys seront tirés au sort dans chaque quartier, accompagnés par les maisons des hameaux qui aideront au montage des dossiers et par un comité d'experts citoyens chargé de suivre la réalisation concrète des chantiers retenus."],
        example: {
          city: "Grenoble (Isère, 160 000 habitant·es)",
          detail: [
            "Budget participatif de 5 millions d'euros par an depuis 2015, soit 5% des investissements municipaux.",
            "Plus de 15 000 Grenoblois·es votent chaque année pour choisir parmi 100 à 150 projets déposés par les habitant·es.",
            "Réalisations concrètes : végétalisation de 50 cours d'école, création de pistes cyclables, rénovation d'équipements sportifs de quartier, jardins partagés.",
            "Impact : +200% de participation citoyenne aux débats publics municipaux, taux de satisfaction de 73%."
          ]
        }
      },
      {
        title: "Charte éthique et révocation citoyenne",
        detail: [
          "Les démissions successives au conseil municipal ont alimenté la défiance. Nous rendrons publiques toutes les indemnités, les agendas et les délégations afin que chaque habitant sache qui décide quoi.",
          "Une procédure de révocation sera déclenchée si un quart des assemblées de quartier le demande, forçant le ou la titulaire du mandat à organiser une consultation locale sous un mois."],
        example: {
          city: "Kingersheim (Haut-Rhin, 13 000 habitant·es)",
          detail: [
            "Charte éthique adoptée en 2010 et signée publiquement par tous les élu·es : transparence totale des indemnités, interdiction du cumul des mandats, engagement de démission en cas de conflit d'intérêts.",
            "Publication en ligne de tous les agendas des élu·es, comptes-rendus intégraux des réunions, déclarations de patrimoine accessibles sur simple demande.",
            "Procédure de révocation : si 10% des électeur·rices le demandent par pétition, un référendum révocatoire doit être organisé sous 2 mois.",
            "Bilan : zéro affaire de conflit d'intérêts en 15 ans, confiance dans les élu·es 2 fois supérieure à la moyenne nationale."
          ]
        }
      },
      {
        title: "Observatoire des services publics",
        detail: [
          "Délai pour obtenir un rendez-vous à l'état civil, ouverture des guichets, temps d'attente au CCAS : aucune donnée n'est publiée aujourd'hui. Nous créerons un observatoire réunissant agents municipaux, usagers et universitaires.",
          "Les indicateurs seront affichés dans chaque maison de quartier, diffusés en open data et débattus publiquement pour corriger les dysfonctionnements dans la Bastide comme dans les hameaux."],
        example: {
          city: "Paris (Île-de-France, 2,2 millions d'habitant·es)",
          detail: [
            "Tableau de bord des services publics publié en open data chaque trimestre depuis 2015 : délais d'obtention des actes d'état civil, taux de réponse aux demandes, qualité de l'accueil.",
            "120 indicateurs de qualité suivis en temps réel : propreté des rues, temps d'attente dans les mairies d'arrondissement, taux de satisfaction des usager·es.",
            "Application mobile permettant aux habitant·es de signaler les dysfonctionnements et de suivre leur traitement.",
            "Résultats : délais divisés par 2 en 5 ans, satisfaction usagers passée de 54% à 72%."
          ]
        }
      },
      {
        title: "Conseil citoyen permanent du budget",
        detail: [
          "Le budget municipal reste opaque et les arbitrages se font sans débat public. Les habitant·es découvrent les choix une fois votés, sans possibilité de peser sur les priorités d'investissement.",
          "Nous créerons un conseil citoyen permanent qui suivra l'exécution du budget en temps réel. Ce conseil sera composé de 30 habitant·es tiré·es au sort (renouvelé par tiers chaque année), épaulé par des expert·es comptables indépendant·es.",
          "Publication mensuelle en ligne de toutes les dépenses au-dessus de 1000€. Chaque trimestre, ce conseil organisera une assemblée publique pour présenter les choix budgétaires et recueillir les propositions. Tout écart significatif devra être justifié publiquement."
        ],
        territories: ["Toute la ville"],
        example: {
          city: "Grigny (Rhône, 9 000 habitant·es)",
          detail: [
            "Conseil citoyen du budget créé en 2018 : 30 habitant·es tiré·es au sort qui suivent l'exécution budgétaire en temps réel avec accès complet aux comptes.",
            "Publication mensuelle de toutes les dépenses supérieures à 500€ sur le site de la ville. Assemblée publique trimestrielle pour présenter les arbitrages.",
            "Formation des citoyen·nes par des expert·es comptables bénévoles pour comprendre et analyser les documents budgétaires.",
            "Impact : détection et correction de 3 dérives budgétaires en 2019-2020, économies de 150 000€, confiance dans la gestion municipale +35%."
          ]
        }
      },
      {
        title: "Mairies de quartier accessibles 7j/7",
        detail: [
          "Les services municipaux ferment à 17h et restent inaccessibles le samedi. Impossible pour les salarié·es ou les familles monoparentales de faire leurs démarches sans poser un jour de congé.",
          "Nous ouvrirons des mairies de quartier dans la Bastide, au Tricot, à Graves et à Veuzac. Horaires étendus : ouverture jusqu'à 19h en semaine et le samedi matin. Permanences le dimanche une fois par mois pour les démarches urgentes.",
          "Chaque mairie de quartier proposera : état civil, inscriptions scolaires, demandes d'aides, rendez-vous avec les élu·es. Un agent municipal permanent sera chargé d'orienter et d'accompagner les habitant·es."
        ],
        territories: ["Bastide", "Le Tricot", "Graves", "Veuzac"],
        example: {
          city: "Malakoff (Hauts-de-Seine, 31 000 habitant·es)",
          detail: [
            "3 mairies de quartier ouvertes jusqu'à 19h en semaine (au lieu de 17h) et le samedi matin de 9h à 12h30.",
            "Permanences d'élu·es le samedi matin dans chaque mairie annexe pour rencontrer les habitant·es sans rendez-vous.",
            "Services proposés : état civil complet, inscriptions scolaires et périscolaires, démarches CCAS, aide aux démarches administratives dématérialisées.",
            "Résultat : +60% de fréquentation, 92% de satisfaction des usager·es, baisse de 40% des rendez-vous non honorés."
          ]
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
          "CAF, CPAM, Département, médiation numérique, permanence juridique et relais associatifs y partageront un guichet unique capable d'accompagner les habitants des Pesquiés ou de la Rive droite sans déplacement supplémentaire."],
        example: {
          city: "Roubaix (Nord, 99 000 habitant·es)",
          detail: [
            "Maison du Peuple ouverte en 2021 : 2500m² réunissant CAF, CPAM, Pôle Emploi, services municipaux, permanences juridiques et accompagnement numérique.",
            "Guichet unique : un·e seul·e agent·e oriente et accompagne l'usager·e vers tous les services nécessaires. Fini le parcours du combattant entre administrations !",
            "Ouverture 6 jours sur 7 avec nocturnes le mardi et jeudi jusqu'à 20h. Médiateur·rices formé·es pour les démarches numériques.",
            "Bilan 2023 : 45 000 passages par an, 89% de dossiers traités en une seule visite (contre 34% avant), temps d'attente divisé par 3."
          ]
        }
      },
      {
        title: "Centre municipal de santé",
        detail: [
          "La fermeture de cabinets libéraux et la dépendance au centre hospitalier Émile-Borel rendent l'accès aux soins critique. Nous salarierons une équipe pluridisciplinaire installée à Fontanges avec des vacations à Graves, Veuzac et Laurère.",
          "Le centre municipal offrira des consultations sans dépassements, un service de prévention itinérant dans les hameaux du Ségala et un calendrier de permanence dentaire et sage-femme partagé avec l'hôpital."],
        example: {
          city: "Aubervilliers (Seine-Saint-Denis, 88 000 habitant·es)",
          detail: [
            "Centre municipal de santé créé en 1935, rénové et étendu en 2019 : 4 centres répartis dans la ville employant 120 professionnel·les de santé salarié·es.",
            "Équipe pluridisciplinaire : 25 médecins généralistes, 15 dentistes, 8 sages-femmes, kinés, psychologues, infirmier·ères. Consultations sans dépassement d'honoraires, tiers payant intégral.",
            "Horaires élargis : ouverture de 8h à 20h en semaine, le samedi matin. Permanence de soins non programmés pour éviter les passages aux urgences.",
            "Résultats : 80 000 consultations par an, délai moyen de rendez-vous de 3 jours (contre 3 semaines en libéral), reste à charge zéro pour 92% des patient·es."
          ]
        }
      },
      {
        title: "Plan logement Bastide/Tricot",
        detail: [
          "Plus de 11 % des logements du centre ancien restent vides et les marchands de sommeil s'installent du Tricot à la Rive droite. Nous renforcerons le permis de louer et créerons une cellule municipale anti-insalubrité.",
          "Une OPAH-RU sur dix ans permettra de rénover 700 logements, l'office foncier solidaire bloquera la spéculation et les dents creuses seront mobilisées pour créer du logement social dans les deux rives."],
        example: {
          city: "Bègles (Gironde, 28 000 habitant·es)",
          detail: [
            "Office Foncier Solidaire (OFS) créé en 2017 : la collectivité reste propriétaire du foncier et vend uniquement le bâti aux ménages modestes.",
            "Mécanisme anti-spéculation : les logements ne peuvent être revendus qu'à prix encadré (coût d'achat + travaux + inflation), empêchant toute plus-value spéculative.",
            "200 logements en accession sociale sécurisée depuis 2017, prix d'achat 30 à 40% inférieurs au marché classique.",
            "Bilan : zéro revente spéculative, 100% des acquéreurs sont toujours propriétaires, solvabilité des ménages garantie sur le long terme."
          ]
        }
      },
      {
        title: "Cantines locales et sociales",
        detail: [
          "Les restaurants scolaires servent aujourd'hui moins de 30 % de produits issus de l'Aveyron et les tarifs restent élevés pour les foyers modestes. Nous renégocierons les marchés pour atteindre 80 % de denrées locales et 60 % bio.",
          "Les menus à 1 € seront accessibles sous condition de quotient familial, complétés par des ateliers cuisine populaire animés dans chaque école, centre social et maison de hameau."],
        example: {
          city: "Mouans-Sartoux (Alpes-Maritimes, 10 000 habitant·es)",
          detail: [
            "Ferme municipale de 6 hectares créée en 2010 pour approvisionner les cantines scolaires en légumes 100% bio et locaux.",
            "Depuis 2012 : 100% de bio dans toutes les cantines (1300 repas/jour) pour un coût maîtrisé de 1,90€ le repas (identique au conventionnel).",
            "Tarification solidaire : de 1€ à 7€ selon le quotient familial. Aucun enfant exclu pour raison financière.",
            "Résultats : zéro gaspillage alimentaire (compostage intégral), éducation au goût pour tous les enfants, 3 emplois agricoles créés, économies de 20% sur les achats alimentaires."
          ]
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
          city: "Lille (Nord, 236 000 habitant·es)",
          detail: [
            "Réseau de 20 médiateur·rices numériques réparti·es dans les 12 Maisons de quartier de la ville depuis 2017.",
            "Permanences gratuites tous les jours sans rendez-vous : aide aux démarches CAF, Pôle Emploi, impôts, création de CV, utilisation d'internet.",
            "Ateliers thématiques hebdomadaires : sécurité en ligne, achats sur internet, visio avec la famille, réseaux sociaux. Prêt de tablettes et ordinateurs pour les familles.",
            "Bilan : 15 000 personnes accompagnées par an, 78% retrouvent leur autonomie numérique en 3 mois, fracture numérique réduite de 60% dans les quartiers concernés."
          ]
        }
      },
      {
        title: "Résidence autonomie et maintien à domicile",
        detail: [
          "29% de la population villefranchoise a plus de 65 ans et ce chiffre augmente. Les personnes âgées peinent à rester chez elles faute d'aide à domicile, et les places en EHPAD sont hors de prix ou saturées.",
          "Nous créerons une régie municipale d'aide à domicile qui emploiera 40 agent·es en CDI (aide ménagère, portage de repas, télé-assistance). Tarifs calculés selon le quotient familial, de 5€ à 25€/heure maximum.",
          "Transformation de l'ancien site hospitalier en résidence autonomie de 60 logements adaptés avec services mutualisés : infirmier·ère à demeure, salle commune, jardins partagés. Loyers accessibles dès 350€/mois charges comprises."
        ],
        territories: ["Toute la ville", "Hameaux"],
        example: {
          city: "Montreuil (Seine-Saint-Denis, 111 000 habitant·es)",
          detail: [
            "Régie municipale d'aide et de soins à domicile créée en 1983 : 120 agent·es titulaires en CDI (auxiliaires de vie, aides-soignant·es, infirmier·ères).",
            "Tarification solidaire selon quotient familial : de 5€ à 28€/heure (contre 22€ à 35€ dans le privé). Pas de refus pour raison financière.",
            "Services proposés : aide à la toilette, ménage, courses, portage de repas, soins infirmiers, accompagnement fin de vie à domicile.",
            "Résultats : 850 personnes âgées accompagnées, salaires 15% supérieurs au privé, turn-over quasi nul (contre 30% dans le privé), qualité de service reconnue."
          ]
        }
      },
      {
        title: "Eau publique et tarification sociale",
        detail: [
          "L'eau est un bien commun mais sa gestion reste opaque. Les tarifs augmentent sans transparence et les familles modestes peinent à payer leurs factures, avec des coupures qui restent possibles.",
          "Nous remunicipaliserons la gestion de l'eau dès que le contrat actuel arrive à échéance. Création d'une régie publique de l'eau avec une gouvernance associant usagers, agents et élu·es.",
          "Tarification progressive solidaire : les premiers m³ vitaux seront gratuits (50L/jour/personne), puis prix modéré jusqu'à consommation normale, et prix élevé pour les gros consommateurs. Interdiction absolue des coupures d'eau. Chèque-eau pour les foyers en difficulté."
        ],
        territories: ["Toute la ville"],
        example: {
          city: "Grenoble (Isère, 160 000 habitant·es)",
          detail: [
            "Remunicipalisation de l'eau en 2000 après 150 ans de gestion privée par Veolia. Création de la Régie des Eaux de Grenoble.",
            "Résultats spectaculaires : baisse de 7% des tarifs dès la première année, investissement de 100M€ dans la rénovation des réseaux (contre 30M€ prévus par Veolia).",
            "Tarification progressive : les premiers m³ peu chers, prix augmentant pour les gros consommateurs. Zéro coupure d'eau, aide sociale automatique pour les impayés.",
            "Bilan 20 ans : économies de 40M€ pour les usagers, réduction de 30% des fuites, qualité de l'eau améliorée, 200 emplois publics pérennisés."
          ]
        }
      },
      {
        title: "Lutte contre les violences conjugales",
        detail: [
          "Une femme sur dix est victime de violences conjugales mais les structures d'accueil manquent cruellement. Le centre hospitalier et le commissariat ne suffisent pas à protéger et accompagner les victimes.",
          "Nous ouvrirons une Maison des Femmes sur le modèle de Saint-Denis : accueil 7j/7 sans rendez-vous, accompagnement psychologique, juridique et social gratuit. Hébergement d'urgence sécurisé pour 10 places (mères et enfants).",
          "Formation obligatoire de tous les agents municipaux au repérage des violences. Partenariat renforcé avec associations, police, justice et hôpital. Campagne de sensibilisation permanente dans les écoles, centres sociaux et entreprises."
        ],
        territories: ["Toute la ville"],
        example: {
          city: "Saint-Denis (Seine-Saint-Denis, 113 000 habitant·es)",
          detail: [
            "Maison des Femmes créée en 2016 par la gynécologue Ghada Hatem : lieu unique d'accueil et de soins pour toutes les femmes en difficulté.",
            "Accueil inconditionnel 7j/7 sans rendez-vous : consultations médicales (gynéco, psy), accompagnement social et juridique, hébergement d'urgence sécurisé.",
            "Équipe pluridisciplinaire de 40 professionnel·les : médecins, sages-femmes, psychologues, assistantes sociales, juristes, éducateur·rices.",
            "Bilan : 3000 femmes accompagnées par an, 60% de victimes de violences, 90% retrouvent une autonomie, 100% gratuité, modèle répliqué dans 15 villes."
          ]
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
          "Les épisodes caniculaires se multiplient sur la Bastide et les cours minérales des écoles deviennent invivables. Nous lancerons un inventaire de toutes les surfaces bitumées pour prioriser les lieux où planter 2 000 arbres.",
          "Les berges de l'Alzou seront renaturées, les places recevront des dispositifs d'ombre et les friches de la Rive gauche accueilleront des jardins partagés ouverts aux habitants."],
        example: {
          city: "Clermont-Ferrand (Puy-de-Dôme, 147 000 habitant·es)",
          detail: [
            "Plan « Capitale verte » lancé en 2020 : objectif de planter 20 000 arbres d'ici 2026, soit 2,5 arbres par habitant·e.",
            "Désimperméabilisation massive : 35 cours d'école transformées en îlots de fraîcheur avec arbres, végétation et récupération d'eau de pluie.",
            "Création de mini-forêts urbaines selon la méthode Miyawaki : 30 000 arbres plantés sur de petites surfaces pour créer des forêts denses en 10 ans au lieu de 100.",
            "Résultats mesurés : -3°C en moyenne dans les cours végétalisées lors des canicules, biodiversité multipliée par 4, satisfaction des habitant·es à 84%."
          ]
        }
      },
      {
        title: "Révolution solaire et énergie citoyenne",
        detail: [
          "Les bâtiments municipaux consomment plus d'un million d'euros d'énergie par an. Une société publique locale mutualisera la pose de panneaux solaires sur 50 % des toitures publiques dès le premier mandat.",
          "Nous aiderons les habitantes et habitants à créer des coopératives d'autoconsommation et proposerons un achat groupé de rénovations pour faire reculer la précarité énergétique dans les hameaux."],
        example: {
          city: "Loos-en-Gohelle (Pas-de-Calais, 6 600 habitant·es)",
          detail: [
            "Pionnière de la transition énergétique citoyenne depuis 2008. Société d'Économie Mixte (SEM) détenue à 60% par la ville et 40% par les citoyen·es.",
            "100% de l'électricité des bâtiments publics produite par des panneaux solaires sur toitures municipales, économie de 180 000€/an.",
            "Accompagnement gratuit de 2 500 foyers pour la rénovation énergétique : diagnostic, montage financier, suivi de chantier. Baisse moyenne de 40% des factures d'énergie.",
            "Création de 150 emplois locaux dans les énergies renouvelables. Modèle reproductible dans toutes les villes moyennes."
          ]
        }
      },
      {
        title: "Transports gratuits et pistes cyclables partout",
        detail: [
          "Les bus Bastibus s'arrêtent trop tôt et ne desservent pas correctement les lycéens des Gravasses. Nous renforcerons l'offre pour atteindre un passage toutes les 20 minutes sur les lignes structurantes et la gratuité pour les moins de 26 ans.",
          "Les pôles d'échanges du Tricot et de la gare seront modernisés, 15 km de pistes cyclables sécurisées seront créés et des navettes relieront quotidiennement les hameaux du Ségala.",
          "Nous voulons un contrat de mobilité intercommunal qui impose l'accès gratuit aux bus Bastibus pendant les travaux, qui finance des vélostations aux Gravasses et qui installe des correspondances directes Bastide–Veuzac tôt le matin pour les salariées et salariés postés."
        ],
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
          "Les dépôts sauvages se multiplient le long de l'Aveyron et le brûlage de déchets verts reste courant dans les hameaux. Nous créerons une brigade verte municipale chargée de verbaliser, sensibiliser et intervenir rapidement.",
          "Une ressourcerie intercommunale, des composteurs collectifs et des collectes mobiles dans les villages permettront d'accompagner la tarification incitative plutôt que de la subir."],
        example: {
          city: "Besançon (Doubs, 119 000 habitant·es)",
          detail: [
            "Tarification incitative mise en place en 2012 : les habitant·es paient selon le poids de leurs déchets. Plus on trie et on réduit, moins on paie.",
            "Ressourcerie municipale créée en 2015 : récupération, réparation et revente d'objets. 12 emplois d'insertion créés, 800 tonnes d'objets sauvés de la poubelle chaque année.",
            "Composteurs collectifs dans tous les quartiers, collecte de biodéchets généralisée, repair cafés municipaux pour apprendre à réparer.",
            "Résultats : -22% de déchets en 10 ans, taux de recyclage passé de 45% à 68%, économies de 2M€/an sur le traitement, pollution réduite."
          ]
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
          city: "Ungersheim (Haut-Rhin, 2 200 habitant·es)",
          detail: [
            "Régie agricole municipale créée en 2009 sur 10 hectares : légumes 100% bio pour la cantine scolaire et vente directe aux habitant·es.",
            "100% de produits locaux et bio dans la cantine scolaire depuis 2012 pour un coût maîtrisé de 2€ le repas. 3 maraîcher·es municipaux employé·es en CDI.",
            "Vente directe hebdomadaire de paniers de légumes aux habitant·es à prix coûtant. AMAP municipale permettant aux familles modestes d'accéder au bio local.",
            "Bilan : autonomie alimentaire partielle du village, éducation au goût pour les enfants, biodiversité agricole préservée, 0 pesticide sur le territoire."
          ]
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
          "La communauté de communes distribue des aides économiques sans toujours exiger de contreparties, notamment sur l'égalité salariale ou la transition énergétique. Nous conditionnerons les subventions municipales à un socle d'engagements vérifiables.",
          "Les entreprises soutenues devront publier leurs indicateurs d'emploi local, d'égalité femmes-hommes et d'impact énergétique ; un comité associant syndicats et commerçants contrôlera les résultats."],
        example: {
          city: "Lyon (Rhône, 523 000 habitant·es)",
          detail: [
            "Conditionnalité des aides économiques adoptée en 2017 : toute entreprise recevant une subvention publique doit respecter un cahier des charges social et écologique.",
            "Critères obligatoires : égalité salariale femmes-hommes certifiée, quota de 5% de salarié·es en insertion, bilan carbone public, clause d'emploi local.",
            "Contrôles annuels par un comité indépendant associant syndicats, associations et élu·es. Remboursement exigé en cas de non-respect.",
            "Résultats : 85% des entreprises aidées respectent les critères, 1200 emplois d'insertion créés, écart salarial H/F réduit de 18% à 12%."
          ]
        }
      },
      {
        title: "Régie municipale du bâtiment : 50 emplois créés",
        detail: [
          "Les écoles et équipements sportifs souffrent de retards d'entretien faute d'équipes municipales suffisantes. Nous créerons une régie municipale dotée d'un atelier chantier d'insertion pour former et embaucher localement.",
          "Deux antennes, au Boï et aux Pesquiés, permettront d'intervenir sous 48 heures sur les logements vacants ou les équipements prioritaires, avec un suivi des chantiers publié en ligne."],
        example: {
          city: "Grenoble - Quartier Villeneuve (Isère)",
          detail: [
            "Régie de quartier Villeneuve créée en 1991 : structure d'insertion par l'économique qui emploie 65 salarié·es dont 80% en parcours d'insertion.",
            "Missions : entretien des espaces verts, petit bricolage dans les logements sociaux, nettoyage des parties communes, collecte de déchets encombrants.",
            "Accompagnement social renforcé : formation qualifiante, suivi individualisé, 70% des salarié·es trouvent un emploi stable après leur parcours.",
            "Bilan : quartier mieux entretenu, lien social renforcé, 450 personnes sorties du chômage longue durée en 30 ans, modèle répliqué dans 80 villes."
          ]
        }
      },
      {
        title: "Pass Culture-Sport gratuit pour tous les jeunes",
        detail: [
          "Le coût d'adhésion aux clubs sportifs ou aux conservatoires freine les jeunes des Gravasses et des faubourgs. Nous créerons un pass de 120 € par jeune cumulable avec les aides départementales.",
          "Les établissements scolaires des Gravasses, du Tricot et des hameaux pourront distribuer ces pass avec un accompagnement des familles pour s'inscrire dans les associations locales."],
        example: {
          city: "Bologne (Italie, 391 000 habitant·es)",
          detail: [
            "Carte Culture créée en 2002 pour tous les jeunes de 14 à 26 ans résidant à Bologne : 150€ par an rechargeable pour activités culturelles et sportives.",
            "Utilisable dans 200 structures partenaires : cinémas, théâtres, musées, bibliothèques, clubs sportifs, conservatoires de musique.",
            "Aucune condition de ressources : universalité du dispositif pour éviter la stigmatisation. Rechargement automatique chaque année.",
            "Bilan : 85% des jeunes utilisent la carte, fréquentation des équipements culturels +60%, mixité sociale renforcée, coût 2M€/an financé par taxe de séjour."
          ]
        }
      },
      {
        title: "Pôle culturel et associatif au Château de Graves",
        detail: [
          "Les associations culturelles et sportives se partagent aujourd'hui des locaux saturés rue Bories. Nous installerons la Maison des associations au Château de Graves, accessible en bus et proche des équipements sportifs.",
          "Des studios médias, ateliers mutualisés et un guichet d'accompagnement aux coopératives permettront aussi aux collectifs ruraux de bénéficier d'espaces partagés lorsqu'ils viennent en ville."],
        example: {
          city: "Nantes (Loire-Atlantique, 320 000 habitant·es)",
          detail: [
            "Trempo créé en 2011 : tiers-lieu de 1500m² dédié aux musiques actuelles dans une ancienne usine réhabilitée.",
            "Services mutualisés : 6 studios de répétition équipés, espace de coworking, auditorium 200 places, accompagnement juridique et administratif pour les artistes.",
            "Formation professionnelle : 150 musicien·nes formé·es par an aux métiers du spectacle vivant (son, lumière, production).",
            "Résultats : 80 groupes utilisateurs réguliers, 40 concerts par an, 15 emplois créés, modèle économique autonome à 60%, rayonnement culturel sur toute la métropole."
          ]
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
          city: "Vaulx-en-Velin (Rhône, 51 000 habitant·es)",
          detail: [
            "Plan « 1000 emplois jeunes » lancé en 2020 : engagement de créer 1000 emplois pour les moins de 26 ans en 5 ans, dont 200 directement municipaux.",
            "Emplois jeunes municipaux en CDI : animation sportive et culturelle, médiation numérique, agents d'entretien, accompagnement scolaire. Salaire 1750€ net + formation qualifiante.",
            "Partenariat avec entreprises locales pour garantir des débouchés : 50% des jeunes formés trouvent un emploi stable dans les 6 mois.",
            "Bilan 2023 : 450 jeunes embauchés dont 90 titularisés dans la fonction publique territoriale, chômage des jeunes -8 points, dynamique d'insertion renforcée."
          ]
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
          "Les écoles Jean-Jaurès, Calcomier ou Treize-Pierres manquent d'isolation et les cours restent minérales malgré les alertes des parents d'élèves. Nous engagerons un plan de rénovation énergétique complet assorti d'une ventilation naturelle.",
          "Chaque cour deviendra un îlot de fraîcheur partagé avec les associations après 18 h, y compris pour les villages associés qui pourront utiliser les équipements lors des activités périscolaires."],
        example: {
          city: "Poitiers (Vienne, 91 000 habitant·es)",
          detail: [
            "Plan « Écoles 2030 » lancé en 2020 : 120M€ sur 10 ans pour rénover les 42 écoles publiques de la ville.",
            "Objectifs : isolation thermique complète, passage au chauffage renouvelable, végétalisation de toutes les cours (arbres, potagers, revêtements perméables).",
            "Transformation des cours en îlots de fraîcheur : -4°C mesurés lors des canicules, espaces de jeu diversifiés, mobilier en bois local.",
            "Résultats 2023 : 18 écoles déjà rénovées, factures énergétiques divisées par 2, confort thermique amélioré, satisfaction des enseignant·es et parents à 91%."
          ]
        }
      },
      {
        title: "Crèches publiques gratuites et horaires élargis",
        detail: [
          "Les familles travaillant en horaires décalés doivent aujourd'hui se tourner vers Rodez ou les assistantes maternelles privées. Nous étendrons les crèches municipales avec une amplitude 6 h-21 h pour répondre aux besoins des soignants ou salariés industriels.",
          "Une micro-crèche coopérative sera implantée sur la Rive gauche et un service de garde partagé circulera dans les villages associés pour éviter des trajets quotidiens vers la Bastide."],
        example: {
          city: "Vitry-sur-Seine (Val-de-Marne, 94 000 habitant·es)",
          detail: [
            "Réseau de 18 crèches municipales dont 3 à horaires élargis pour répondre aux besoins des travailleur·euses en horaires décalés.",
            "Horaires adaptés : ouverture de 6h à 21h du lundi au vendredi, avec accueil possible le samedi matin dans 2 crèches.",
            "Tarification selon quotient familial : de gratuit à 60€/mois maximum. 1200 places au total, délai d'attente moyen de 2 mois.",
            "Résultats : 95% de taux d'occupation, satisfaction des parents à 88%, permet à 800 mères de famille de conserver leur emploi."
          ]
        }
      },
      {
        title: "Conseil municipal des jeunes avec VRAI pouvoir",
        detail: [
          "Les dispositifs jeunesse actuels se limitent à des animations ponctuelles et les collégiennes et collégiens n'influent pas sur les choix municipaux. Nous créerons un conseil municipal des jeunes doté d'un budget annuel de 50 000 €.",
          "Des sièges seront réservés aux collèges Treize-Pierres et aux lycées agricoles, avec l'obligation de publier les projets financés (solidarité, culture, climat) et un suivi par les élus adultes."],
        example: {
          city: "Rennes (Ille-et-Vilaine, 222 000 habitant·es)",
          detail: [
            "Conseil des jeunes créé en 1995, renouvelé en 2018 avec de vrais pouvoirs : 70 jeunes de 11 à 25 ans élus pour 2 ans.",
            "Budget autonome de 100 000€/an que les jeunes gèrent librement : projets solidaires, culturels, sportifs, environnementaux décidés et réalisés par eux.",
            "Droit de proposition au conseil municipal : plusieurs projets des jeunes adoptés (skatepark, festival jeunesse, collectes solidaires).",
            "Bilan : engagement citoyen renforcé, 80% des participant·es restent actifs dans la vie associative après, apprentissage concret de la démocratie."
          ]
        }
      },
      {
        title: "Accompagnement scolaire GRATUIT pour toutes et tous",
        detail: [
          "Les résultats scolaires chutent dans les quartiers populaires et les familles peinent à financer du soutien privé. Nous mettrons en place une cellule municipale d'aide aux devoirs en lien avec les enseignants volontaires.",
          "Les associations d'éducation populaire seront conventionnées pour accueillir les collégiens de Treize-Pierres, les lycéens du centre-ville et les jeunes des hameaux qui arrivent par les navettes."],
        example: {
          city: "Saint-Denis (Seine-Saint-Denis, 113 000 habitant·es)",
          detail: [
            "Service municipal d'accompagnement scolaire créé en 2015 : 40 enseignant·es et animateur·rices employé·es par la ville.",
            "Aide aux devoirs gratuite dans les 12 collèges et écoles élémentaires en REP+ : 4 soirs par semaine de 17h à 19h, petits groupes de 8 élèves maximum.",
            "Partenariat avec l'Éducation Nationale : coordination avec les enseignant·es pour cibler les difficultés, suivi individualisé, ateliers méthodologie.",
            "Résultats : 1500 élèves accompagnés par an, taux de passage en seconde +12 points dans les établissements concernés, réduction des inégalités scolaires."
          ]
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
          city: "Bobigny (Seine-Saint-Denis, 55 000 habitant·es)",
          detail: [
            "Périscolaire 100% gratuit dans toutes les écoles primaires depuis 2014 : 2200 enfants accueillis chaque jour.",
            "25 activités différentes proposées chaque trimestre : sports (judo, danse, foot), arts (théâtre, musique, arts plastiques), sciences, langues, échecs, jardinage.",
            "Encadrement de qualité : 80 animateur·rices diplômé·es en CDI (pas de précarité), taux d'encadrement 1 pour 10 enfants.",
            "Horaires adaptés : garde de 7h30 à 18h30, séjours durant les vacances à tarifs solidaires. Résultat : 92% de satisfaction, mixité sociale renforcée, réussite scolaire améliorée."
          ]
        }
      }
    ],
    focus: "La jeunesse doit être au cœur du projet villefranchois et non une variable d’ajustement."
  }
];

export const PARTICIPER = {
  badge: "Ouvert à toutes et tous",
  title: "Envie de faire bouger les choses ?",
  paragraphs: [
    "Ce programme, c'est pas juste pour lire. C'est fait pour être porté, débattu, amélioré. Si tu trouves que Villefranche mérite mieux, tu peux agir.",
    "On organise des rencontres dans les quartiers pour parler des vrais problèmes : logement, transports, services publics. Pas de discours, juste des discussions entre habitants. On note ce qui coince, on propose des solutions, et on construit ensemble.",
    "Tu peux juste venir discuter, ou aller plus loin : partager le programme autour de toi, rejoindre l'équipe qui prépare 2026, ou même te présenter sur une liste. On t'accompagne, quelle que soit ton expérience. Chaque proposition a un compteur : à 100 validations, on publie un guide pratique pour la réaliser."
  ],
  steps: [
    {
      title: "Viens discuter",
      detail:
        "On se retrouve dans les quartiers. Tout le monde parle, tout le monde écoute. On liste les problèmes concrets et les priorités."
    },
    {
      title: "On explore ensemble",
      detail:
        "Balades dans la ville, repérage des logements vides, des espaces mal utilisés. On fait des enquêtes de rue, on récolte les idées."
    },
    {
      title: "On débat en public",
      detail:
        "Sur les marchés, dans les rues, en réunion. On teste les propositions, on les améliore. On forme ceux qui veulent porter la parole."
    },
    {
      title: "On se lance",
      detail:
        "Si tu veux aller jusqu'au bout, on t'aide à créer une liste pour 2026. Accompagnement juridique et politique garanti."
    }
  ]
};

export const POUR_ALLER_PLUS_LOIN = {
  title: "Tu veux creuser ?",
  intro: "Si tu veux vraiment comprendre comment on a construit ce programme, d'où viennent les chiffres, et comment ça peut marcher à Villefranche, voici de quoi nourrir ta curiosité.",
  sections: [
    {
      title: "D'où viennent les données sur Villefranche ?",
      detail: "Tous les chiffres viennent de l'INSEE (Recensement 2021, Revenus fiscaux 2020), de data.gouv.fr et des bases GEO sur les quartiers prioritaires. Rien d'inventé, tout est vérifiable en ligne. On s'appuie sur ces données pour cibler les vrais problèmes."
    },
    {
      title: "Comment on a choisi ces mesures ?",
      detail: "On a regardé ce qui marche dans d'autres villes de France et d'Europe. Chaque proposition a été testée ailleurs : transports gratuits à Montpellier, maisons du peuple à Roubaix, régies municipales à Grenoble... On adapte ces expériences à la réalité villefranchoise."
    },
    {
      title: "C'est chiffré comment ?",
      detail: "Chaque mesure est budgétée. Par exemple : assemblées citoyennes = 50 000 € par quartier/an, budget participatif = 5% des investissements soit ~1M€/an, centre municipal de santé = salaires d'une équipe pluridisciplinaire. Les détails complets seront publiés au fur et à mesure des validations citoyennes."
    },
    {
      title: "Comment je peux vérifier ?",
      detail: "Tu peux chercher les exemples cités (Saillans, Grenoble, Montpellier...), consulter leurs budgets municipaux publics, lire les rapports d'évaluation. On cache rien. Si tu trouves une erreur ou un truc pas clair, contacte-nous."
    },
    {
      title: "Et si je veux proposer autre chose ?",
      detail: "C'est fait pour ça ! Viens aux rencontres de quartier, propose tes idées, améliore ce qui est là. Le programme est ouvert, il doit évoluer avec les besoins réels des Villefranchois."
    }
  ]
};

export const STATS = {
  title: "Les chiffres clés de Villefranche",
  paragraphs: [
    "Quelques données pour comprendre la situation de Villefranche. Pas pour faire peur, juste pour savoir de quoi on parle.",
    "Ces données viennent de l'INSEE (Recensement 2021, Revenus fiscaux 2020) et des portails gouvernementaux data.gouv.fr et GEO. Elles guident nos priorités.",
    "On partage tout ça avec toutes les listes citoyennes qui veulent s'appuyer sur du solide."
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
