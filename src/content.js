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
          "Les conseils consultatifs de quartier ont disparu à Villefranche en 2020 et les riveraines et riverains n'ont plus d'espace pour contester les décisions prises en mairie. Les habitant·es de la Bastide, du Tricot, de Graves ou de Veuzac n'ont aucun moyen d'intervenir sur les projets d'aménagement, les budgets ou les services publics qui les concernent directement.",
          "Nous installerons des assemblées permanentes par quartier (Bastide, Tricot, Graves, Veuzac, Rive gauche, hameaux du Ségala), dotées d'un secrétariat municipal et d'une dotation budgétaire minimale de 50 000 € chacune pour financer leurs projets locaux.",
          "Droit de veto citoyen : si 5 % des électeur·rices du quartier signent une pétition, un référendum local obligatoire devra être organisé sous 2 mois. Les assemblées publieront chaque trimestre leurs comptes rendus sur le site de la ville et pourront suspendre temporairement une décision municipale le temps d'organiser une consultation."],
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
        title: "Budget participatif porté à 5 % des investissements",
        detail: [
          "Depuis 2020, le budget participatif de Villefranche plafonne à 80 000 €, soit moins de 1 % du budget d'investissement. Résultat : des micro-projets (bancs, plantations) mais aucune capacité d'agir sur les vrais besoins : rénovation de la place Savignac, réfection des cours d'école, amélioration des transports.",
          "Nous portons le budget participatif à 5 % des investissements municipaux, soit près de 1 million d'euros par an. Cela permettra de financer de vrais équipements : rénovation du stade de Graves, végétalisation massive du Tricot, création de pistes cyclables sécurisées Bastide-Veuzac.",
          "Processus démocratique renforcé : jurys citoyens tirés au sort dans chaque quartier pour sélectionner les projets, accompagnement municipal gratuit pour monter les dossiers, comité de suivi composé d'habitant·es pour contrôler la réalisation concrète des chantiers votés. Publication trimestrielle de l'avancement sur le site de la ville."],
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
          "Entre 2020 et 2024, quatre démissions au conseil municipal de Villefranche ont alimenté la défiance des habitant·es. Aucune transparence sur les indemnités perçues, aucun compte-rendu public des délégations, aucune explication sur qui décide quoi.",
          "Transparence totale obligatoire : publication en ligne de toutes les indemnités d'élu·es, agendas publics des adjoint·es, comptes-rendus intégraux des réunions de commissions, déclarations de patrimoine accessibles sur simple demande en mairie.",
          "Procédure de révocation citoyenne : si un quart des assemblées de quartier (Bastide, Tricot, Graves, Veuzac, etc.) le demande, l'élu·e concerné·e devra organiser une consultation locale sous 30 jours. Si le vote de défiance est majoritaire, démission obligatoire et réattribution de la délégation par le conseil municipal."],
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
          "Combien de temps pour obtenir un rendez-vous à l'état civil de Villefranche ? Quels sont les horaires réels d'ouverture du CCAS ? Combien de temps d'attente moyen pour une demande de carte d'identité ? Aucune de ces données n'est publiée, aucun indicateur de qualité n'existe.",
          "Création d'un observatoire municipal des services publics : agents municipaux volontaires, représentant·es d'usager·es, universitaires (IUT Rodez, associations). Mission : mesurer la qualité réelle des services rendus aux Villefranchois·es.",
          "Indicateurs publiés en open data et affichés dans chaque mairie de quartier : délais d'obtention des documents d'état civil, taux de réponse aux demandes, qualité de l'accueil, temps d'attente, accessibilité des services. Débat public trimestriel pour corriger les dysfonctionnements constatés dans la Bastide, le Tricot, Graves, Veuzac et les hameaux."],
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
          "Le budget 2024 de Villefranche (22 millions d'euros en fonctionnement, 7 millions en investissement) est voté sans aucune consultation préalable des habitant·es. Les arbitrages se font en commission fermée et les Villefranchois·es découvrent les choix une fois votés.",
          "Création d'un conseil citoyen permanent du budget : 30 habitant·es tiré·es au sort (renouvelé par tiers chaque année), représentant tous les quartiers (Bastide, Tricot, Graves, Veuzac, hameaux), épaulé·es par des expert·es comptables indépendant·es et des agents municipaux volontaires.",
          "Transparence radicale : publication mensuelle en ligne de toutes les dépenses au-dessus de 1000 €, tableau de bord en temps réel accessible sur le site de la ville. Assemblée publique trimestrielle dans chaque quartier pour présenter les choix budgétaires, recueillir les propositions et justifier tout écart par rapport aux engagements."
        ],
        territories: ["Toute la ville", "Tous les quartiers"],
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
          "La mairie de Villefranche ferme à 17h en semaine et reste totalement inaccessible le samedi. Résultat : les salarié·es, les familles monoparentales, les ouvrier·es des Gravasses ou de Veuzac doivent poser un jour de congé pour faire une simple démarche administrative.",
          "Ouverture de 4 mairies de quartier permanentes : Bastide (place Notre-Dame), Tricot (salle Lafon), Graves (château), Veuzac (salle des fêtes). Horaires étendus : ouverture jusqu'à 19h en semaine, samedi matin 9h-12h30, permanence mensuelle le dimanche pour les urgences.",
          "Services complets dans chaque mairie de quartier : état civil (cartes d'identité, passeports), inscriptions scolaires et périscolaires, demandes d'aides CCAS, permanences d'élu·es sans rendez-vous. Un agent municipal territorial permanent orientera et accompagnera les habitant·es dans toutes leurs démarches administratives."
        ],
        territories: ["Bastide", "Le Tricot", "Graves", "Veuzac", "Hameaux (antenne mobile)"],
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
          "Pour faire valoir leurs droits sociaux, les Villefranchois·es doivent aujourd'hui courir entre la CAF rue de la République, la CPAM à Rodez (30 km !), le CCAS place de la Mairie et les permanences associatives éclatées. Parcours du combattant pour les personnes âgées, les familles monoparentales, les précaires.",
          "Création d'une Maison du Peuple au cœur de la Bastide (ancien bâtiment des Finances publiques, rue Marcellin-Fabre) : 600 m² réunissant CAF, CPAM, services du Département, médiation numérique, permanence juridique gratuite et relais associatifs sous un même toit.",
          "Guichet unique : un·e seul·e agent·e oriente vers tous les services nécessaires. Fini le parcours du combattant ! Ouverture 6 jours/7 avec nocturnes mardi et jeudi jusqu'à 20h. Médiateur·rices numériques formé·es pour accompagner les démarches en ligne (impôts, Pôle Emploi, retraite)."],
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
          "Villefranche est en désert médical avéré : 7000 patients par médecin généraliste (contre 3500 au niveau national), plusieurs semaines d'attente pour un rendez-vous, fermeture de 3 cabinets libéraux depuis 2020. Les habitant·es dépendent du centre hospitalier Émile-Borel saturé ou doivent aller à Rodez.",
          "Création d'un centre municipal de santé public à Fontanges : équipe pluridisciplinaire salariée de la ville (4 médecins généralistes, 2 dentistes, 1 sage-femme, 1 psychologue, infirmier·ères). Consultations sans dépassement d'honoraires, tiers payant intégral, tarifs accessibles.",
          "Permanences délocalisées : vacations hebdomadaires à Graves (gymnase), Veuzac (salle des fêtes), Laurère et Mas de Rivals (maisons de hameaux). Service de prévention itinérant dans les hameaux du Ségala : dépistages, vaccinations, consultations à domicile pour les personnes âgées isolées."],
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
          "11 % des logements du centre historique de Villefranche sont VIDES (données INSEE 2023) : 850 logements vacants ! Pendant ce temps, les marchands de sommeil s'installent du Tricot à la Rive droite, louant des taudis insalubres à prix d'or aux familles précaires.",
          "Plan d'action radical : renforcement du permis de louer obligatoire dans tout le centre ancien, création d'une cellule municipale anti-insalubrité (3 agents dédiés) habilitée à verbaliser, réquisition des logements vacants depuis plus de 2 ans.",
          "OPAH-RU (Opération Programmée d'Amélioration de l'Habitat - Renouvellement Urbain) sur 10 ans : objectif rénover 700 logements de la Bastide, du Tricot et de la Rive droite. Office foncier solidaire pour bloquer la spéculation : la ville reste propriétaire du foncier, vend uniquement le bâti. Mobilisation des dents creuses (terrains vagues rue du Sergent-Bories, place Savignac) pour créer 150 logements sociaux neufs."],
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
        title: "Cantines locales et sociales : 80 % de produits aveyronnais",
        detail: [
          "Les cantines scolaires de Villefranche servent moins de 30 % de produits issus de l'Aveyron alors que le département produit une alimentation d'exception (bœuf, agneau, fromages, légumes). Les tarifs sont élevés : jusqu'à 5,50 € le repas, excluant les familles modestes.",
          "Renégociation des marchés publics : objectif 80 % de denrées locales aveyronnaises et 60 % bio d'ici 2028. Partenariats directs avec les producteur·rices du Ségala : maraîcher·es de Laurère, éleveur·ses de Veuzac, boulangerie artisanale de la Bastide.",
          "Tarification sociale radicale : repas à 1 € pour les foyers sous le seuil de pauvreté (quotient familial < 600 €), jusqu'à 4 € maximum. Ateliers cuisine populaire dans chaque école, centre social (Tricot, Graves) et maison de hameau : apprendre à cuisiner local, de saison et économique."],
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
          "29 % de la population villefranchoise a plus de 65 ans (3400 personnes) et ce chiffre augmente chaque année. Les personnes âgées de la Bastide, des hameaux du Ségala ou de Veuzac peinent à rester chez elles : pénurie d'aides à domicile, EHPAD privés hors de prix (2500 €/mois à La Chartreuse), places saturées.",
          "Création d'une régie municipale publique d'aide à domicile : 40 agent·es en CDI (auxiliaires de vie, aides-soignant·es). Services : aide ménagère, aide à la toilette, portage de repas, courses, télé-assistance 24h/24. Tarifs selon quotient familial : de 5 € à 25 €/heure maximum (contre 22 € à 35 € dans le privé).",
          "Transformation de l'ancien hôpital Émile-Borel (site Fontanges) en résidence autonomie publique : 60 logements adaptés T1 et T2 avec services mutualisés. Infirmier·ère à demeure, salle commune, bibliothèque, jardins partagés potagers. Loyers accessibles dès 350 €/mois charges comprises (contre 800 € en résidence privée)."
        ],
        territories: ["Toute la ville", "Hameaux du Ségala", "Bastide", "Veuzac"],
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
        title: "Remunicipalisation de l'eau et tarification sociale",
        detail: [
          "La gestion de l'eau à Villefranche est déléguée à Veolia depuis 1995. Résultat : hausses tarifaires régulières sans justification (+18 % en 10 ans), opacité totale sur les investissements, coupures d'eau possibles pour impayés. Les familles du Tricot et de la Bastide paient leur eau 20 % plus cher que la moyenne nationale.",
          "Remunicipalisation dès l'échéance du contrat (2027) : création d'une régie publique de l'eau et de l'assainissement avec gouvernance démocratique associant usager·es, agent·es municipaux et élu·es. Transparence totale : publication annuelle des comptes, des investissements et de la qualité de l'eau.",
          "Tarification progressive et sociale : les 50 premiers litres par jour et par personne GRATUITS (besoins vitaux), puis tarif modéré jusqu'à 150 L/jour, tarif élevé au-delà pour pénaliser le gaspillage. Interdiction absolue des coupures d'eau. Chèque-eau de 150 €/an pour les foyers en difficulté."
        ],
        territories: ["Toute la ville", "Tous les hameaux"],
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
          "Les épisodes caniculaires de 2022 et 2023 ont dépassé 40°C à Villefranche. Les cours minérales des écoles Jean-Jaurès, Calcomier et Treize-Pierres deviennent invivables l'été. Les places de la Bastide (place Notre-Dame, place Savignac) sont des fours sans aucun arbre.",
          "Plan massif de végétalisation : inventaire participatif de toutes les surfaces bitumées avec les habitant·es, plantation de 3000 arbres d'ici 2030 (500/an) dans les cours d'école, les rues (boulevard Haute-Guyenne, avenue de Bourran), les places et les parkings.",
          "Renaturalisation des berges de l'Alzou et de l'Aveyron : création de corridors écologiques, espaces de baignade naturelle l'été. Transformation des friches de la Rive gauche (zone du Breil) en jardins partagés ouverts à tou·tes. Objectif : -3°C en ville lors des canicules."],
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
        title: "Transports publics gratuits et pistes cyclables sécurisées",
        detail: [
          "Les bus Bastibus (3 lignes) s'arrêtent à 19h30, rendant impossible le retour des lycéen·nes des Gravasses après les activités. Fréquence insuffisante : seulement 4-5 bus/jour sur certaines lignes. Tarif de 1,50 € le trajet : 60 €/mois pour un·e lycéen·ne, inabordable pour les familles du Tricot.",
          "Gratuité immédiate pour les moins de 26 ans, puis extension progressive vers la gratuité totale. Renforcement massif de l'offre : passage toutes les 20 minutes sur les lignes structurantes (Bastide-Gravasses-Lycées), horaires étendus jusqu'à 22h en semaine, service le dimanche.",
          "Création de 15 km de pistes cyclables sécurisées et continues : axe Bastide-Veuzac (D911), axe Tricot-Graves-Lycées, piste le long de l'Aveyron. Modernisation des pôles d'échanges : Tricot (parking relais + vélostations), gare SNCF (consignes vélos sécurisées). Navettes quotidiennes vers les hameaux du Ségala (Laurère, Mas de Rivals) : 2 allers-retours/jour pour rompre l'isolement.",
          "Bataille intercommunale : nous exigerons un contrat de mobilité ambitieux avec correspondances directes Bastide-Veuzac dès 6h30 pour les salarié·es posté·es de l'industrie."
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
          "La Bastide médiévale se vide : 18 commerces fermés entre 2019 et 2024 (boulangerie rue de la République, mercerie place Notre-Dame, librairie rue Bories). Taux de vacance commerciale de 23 % dans le centre historique contre 12 % en 2015. Les rues Marcellin-Fabre et Raymond-VII comptent 12 vitrines vides qui défigurent le patrimoine architectural.",
          "La communauté de communes Ouest Aveyron distribue des aides économiques (350 000 € en 2023) sans exiger de contreparties sur l'égalité salariale, l'emploi local ou la transition énergétique. Les zones commerciales périphériques (Intermarché route de Figeac, Leclerc à Monteils) captent les aides publiques tout en affaiblissant le commerce de centre-ville.",
          "Nous conditionnerons TOUTES les subventions municipales (locaux commerciaux, prêts à taux zéro, exonérations fiscales) à un socle d'engagements vérifiables : emploi local prioritaire, égalité salariale certifiée femmes-hommes, bilan carbone public, interdiction des CDD abusifs. Un comité de contrôle associant CGT, associations de commerçants et élu·es vérifiera trimestriellement le respect des engagements.",
          "Création d'une régie foncière commerciale municipale : rachat des locaux vacants rue Bories et place Savignac pour les louer à prix modéré (300 €/mois au lieu de 800 €) aux artisan·es et jeunes créateur·rices. Priorité aux métiers d'artisanat d'art, librairie indépendante, commerces alimentaires bio et de proximité.",
          "Interdiction des nouvelles surfaces commerciales en périphérie tant que le taux de vacance dépasse 15 % en centre-ville. Bataille intercommunale pour stopper l'extension continue des zones commerciales qui tuent la Bastide."
        ],
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
          "Les équipements publics se dégradent faute d'équipes municipales suffisantes : toiture de l'école Jean-Jaurès qui fuit depuis 2022, vestiaires du stade des Gravasses fermés depuis 18 mois, salle Lafon place Notre-Dame dont les radiateurs sont hors service depuis l'hiver 2023. Les services techniques municipaux comptent seulement 12 agents pour 850 logements vacants à rénover et 45 bâtiments communaux à entretenir.",
          "Le chômage touche 11,2 % de la population active à Villefranche (contre 7,8 % en France) et monte à 18 % dans le Tricot. Pourtant, les entreprises du BTP locales peinent à recruter des jeunes formé·es aux métiers du bâtiment (plomberie, électricité, menuiserie, maçonnerie). Les chantiers de rénovation sont externalisés à des entreprises de Rodez ou Toulouse qui repartent avec l'argent public.",
          "Nous créerons une régie municipale du bâtiment en CDI : 50 emplois directs (maçon·nes, électricien·nes, plombier·ères, menuisier·ères, peintres) recrutés prioritairement parmi les habitant·es de Villefranche et formé·es par un atelier chantier d'insertion. Salaire minimum 1 900 € net, formation qualifiante incluse (CAP/BEP financés par la ville), possibilité de titularisation dans la fonction publique territoriale.",
          "Deux antennes techniques permanentes au Boï (rive droite) et aux Pesquiés (rive gauche) permettront d'intervenir sous 48 heures sur les urgences : réparations dans les écoles, entretien des gymnases et salles communales, rénovation des 850 logements vacants du centre-ville pour les remettre sur le marché locatif à loyer modéré.",
          "Transparence totale : suivi en ligne de tous les chantiers municipaux (planning, budget, photos avant/après) accessible depuis le site de la mairie. Les habitant·es pourront signaler les dégradations via une application mobile et suivre les interventions en temps réel.",
          "Économies pour la commune : fin de l'externalisation coûteuse, maîtrise des délais et de la qualité, maintien de l'argent public dans l'économie locale. Emplois locaux stables contre précarité et sous-traitance."
        ],
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
          "Le coût d'adhésion aux clubs sportifs villefranchois exclut les jeunes des familles modestes : 280 € l'année au rugby-club, 320 € au basket, 250 € pour le conservatoire de musique. S'y ajoutent l'équipement (150 € de crampons et maillots), les déplacements pour les matchs et les concerts. Pour une famille du Tricot avec 2 enfants, c'est 1 200 € par an : inabordable avec un SMIC.",
          "Résultat : les jeunes des Gravasses et des faubourgs regardent leurs camarades partir aux entraînements. Les clubs villefranchois (ASVR rugby, Villefranche Basket, École de musique municipale, club de judo) peinent à recruter dans les quartiers populaires. Les collégien·nes de Treize-Pierres n'accèdent ni au théâtre de la Bastide, ni à la médiathèque Fabri de Peiresc, ni aux ateliers d'arts plastiques de la MJC.",
          "Nous créerons un Pass Culture-Sport gratuit de 150 € par an pour TOUS les jeunes de 6 à 25 ans résidant à Villefranche, sans condition de ressources (universalité pour éviter la stigmatisation). Montant cumulable avec les aides départementales du Conseil départemental de l'Aveyron (Pass'sports 12).",
          "Utilisable dans toutes les associations villefranchoises conventionnées : clubs sportifs (rugby, basket, foot, judo, tennis, natation au centre aquatique), structures culturelles (conservatoire de musique, théâtre, MJC, médiathèque, école d'arts plastiques), et activités périscolaires. Les jeunes pourront changer d'activité en cours d'année sans pénalité.",
          "Distribution directe dans les établissements scolaires : collège Kervallon, lycée Raymond-Savignac, lycées agricoles de Laurière et de Langlade. Les équipes éducatives accompagneront les familles pour inscrire les jeunes dans les associations locales et lever les freins (transports, horaires, méconnaissance de l'offre).",
          "Budget municipal : 450 000 € par an pour 3 000 jeunes concernés. Financement par suppression des niches fiscales accordées aux entreprises qui délocalisent (taxe foncière réduite pour les entrepôts logistiques en périphérie)."
        ],
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
          "Les 85 associations villefranchoises (sportives, culturelles, caritatives, environnementales) se partagent des locaux saturés et inadaptés : salle Bories rue Bories (180 m² pour 15 associations), salles municipales réservées 6 mois à l'avance, absence de lieux de stockage pour le matériel. Les collectifs de jeunes (ateliers de création musicale, collectifs artistiques, associations étudiantes) n'ont aucun local permanent et squattent les salles des fêtes quand elles sont libres.",
          "Le Château de Graves (propriété municipale de 1 200 m² sur 3 niveaux) est sous-utilisé : quelques bureaux administratifs au rez-de-chaussée, étages vides ou utilisés pour du stockage. Pourtant, le bâtiment est situé à 5 minutes à pied de la place Notre-Dame, desservi par la ligne 1 de Bastibus, à proximité immédiate du complexe sportif des Gravasses (stade, gymnase, piscine).",
          "Nous transformerons le Château de Graves en Maison des Associations de Villefranche : 1 200 m² d'espaces mutualisés accessibles 7j/7 de 8h à 23h. Rez-de-chaussée : accueil-secrétariat permanent tenu par 2 agent·es municipaux·ales pour accompagner les associations (subventions, comptabilité, montage de projets), salle polyvalente 150 places modulable (AG, conférences, projections).",
          "Premier étage : 8 salles de réunion équipées (wifi, vidéoprojecteur) réservables en ligne gratuitement, espace de coworking associatif 40 postes, local de stockage mutualisé 80 m². Deuxième étage : studios de création (musique, vidéo, podcast) équipés et insonorisés, ateliers partagés (sérigraphie, menuiserie, couture), cuisine collective pour les événements associatifs.",
          "Accès prioritaire aux associations villefranchoises, mais ouverture aussi aux collectifs ruraux des hameaux et villages associés (Laurère, Mas de Rivals, Veuzac) qui pourront utiliser les espaces partagés lors de leurs venues en ville (réunions, formations, événements). Conventionnement avec les coopératives et SCOP locales pour partager expertise et matériel.",
          "Budget d'aménagement : 800 000 € (rénovation énergétique, mise aux normes accessibilité, équipements). Fonctionnement : 150 000 €/an (2 emplois permanents + charges). Financement par récupération de subventions aujourd'hui versées à des structures privées (salles de réception commerciales, espaces de coworking lucratifs)."
        ],
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
          "Le chômage des jeunes de 18 à 25 ans atteint 22 % dans le Tricot et la Bastide, contre 15 % en moyenne nationale. À Villefranche : 320 jeunes inscrits à la Mission Locale Ouest Aveyron (basée rue Bories) dont 180 sans emploi depuis plus d'un an, 45 décrocheur·euses scolaires sorti·es du système sans diplôme ni qualification. Les petits boulots saisonniers (restauration rapide, grande distribution) alternent avec de longues périodes de chômage : précarité, perte de confiance, désocialisation.",
          "Pendant ce temps, les services publics municipaux manquent cruellement de personnel : médiateurs·rices absents dans les quartiers, espaces verts mal entretenus (jardin du Tricot, square Savignac), animations périscolaires en sous-effectif, aide aux devoirs inexistante dans les écoles primaires, absence de médiation numérique pour les personnes âgées et les familles du Ségala (démarches CAF, impôts, santé en ligne).",
          "Nous créerons 30 emplois jeunes municipaux en CDI sur le premier mandat (10 par an pendant 3 ans) : animateur·rices sportif·ves et culturel·les (accompagnement périscolaire, activités de quartier), médiateur·rices numériques (aide aux démarches en ligne, ateliers d'initiation), agent·es d'entretien des espaces verts et du patrimoine, assistant·es d'aide aux devoirs dans les écoles (Jean-Jaurès, Calcomier, Treize-Pierres).",
          "Conditions d'emploi dignes : CDI de droit public à temps plein, salaire 1 900 € net minimum (contre 1 400 € pour un contrat aidé précaire), formation qualifiante incluse financée par la ville (BPJEPS animation, CAP espaces verts, titre professionnel médiateur numérique), possibilité de titularisation dans la fonction publique territoriale après 3 ans. Droits sociaux complets : congés, mutuelle, retraite.",
          "Recrutement prioritaire : jeunes résidant à Villefranche et dans les quartiers prioritaires (Tricot, Bastide, Graves, Veuzac), décrocheur·euses scolaires, jeunes en situation de handicap, jeunes suivi·es par la Mission Locale ou la Protection Judiciaire de la Jeunesse. Pas de discrimination au diplôme : la motivation et l'engagement comptent plus que le CV.",
          "Partenariat avec la Mission Locale Ouest Aveyron pour repérer, orienter et accompagner les jeunes éloigné·es de l'emploi. Accompagnement renforcé : tutorat par un·e agent·e expérimenté·e, bilan de compétences tous les 6 mois, aide au logement et à la mobilité (prêt vélo, aide permis de conduire).",
          "Ces 30 emplois créeront des services publics de proximité qui manquent cruellement aujourd'hui : présence municipale dans les quartiers, animations pour les enfants, aide concrète aux familles, entretien des espaces publics, lien social renforcé. Investissement dans la jeunesse = investissement dans l'avenir de Villefranche."
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
          "Les 7 écoles primaires publiques de Villefranche (Jean-Jaurès, Calcomier, Treize-Pierres, Graves, Veuzac, Fontanges, Laurère) souffrent de sous-investissement chronique : isolation thermique défaillante (simple vitrage à Jean-Jaurès, chauffage électrique énergivore à Calcomier), toitures qui fuient (Treize-Pierres, réparations d'urgence en 2023), cours minérales et bitumées qui deviennent des fours l'été (40°C mesurés en juin 2022 et 2023 dans la cour de Jean-Jaurès).",
          "Les parents d'élèves alertent depuis 2020 sur les conditions d'accueil dégradées : salles surchauffées en été (enfants en malaise), froides en hiver (manteaux gardés en classe), sanitaires vétustes (toilettes bouchées, lavabos hors service), préaux inadaptés (absence de protection solaire), accessibilité handicap non respectée dans 4 écoles sur 7.",
          "Nous lancerons un Plan Écoles 100 % rénovées d'ici 2030 : 12 millions d'euros sur 6 ans (2 M€/an) pour rénover TOUTES les écoles publiques villefranchoises. Objectifs : isolation thermique complète (triple vitrage, isolation des murs et toitures), chauffage renouvelable (géothermie ou biomasse locale), ventilation naturelle dans toutes les salles, mise aux normes accessibilité (rampes, sanitaires adaptés, ascenseurs).",
          "Végétalisation de TOUTES les cours d'école : plantation d'arbres d'ombrage (tilleuls, chênes, érables), création de potagers pédagogiques, remplacement du bitume par des revêtements perméables et colorés, installation de points d'eau et de brumisateurs. Objectif : -6°C lors des canicules, espaces de jeu diversifiés, biodiversité renforcée (nichoirs, hôtels à insectes).",
          "Ouverture des cours après 18h : accès libre pour les habitant·es des quartiers (Tricot, Bastide, Graves, Veuzac) et les associations (activités sportives, événements de quartier, animations estivales). Les écoles des villages associés (Laurère, Fontanges, Veuzac) pourront aussi accueillir les activités périscolaires intercommunales.",
          "Calendrier précis : Jean-Jaurès et Calcomier (2026-2027), Treize-Pierres et Graves (2028), Veuzac, Fontanges et Laurère (2029-2030). Consultation des parents, enseignant·es et enfants AVANT chaque chantier pour co-concevoir les espaces. Chantiers durant les vacances scolaires pour limiter les perturbations."
        ],
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
          "Villefranche compte seulement 2 crèches municipales (Les Lutins au Tricot avec 30 places, Les Bambins à Fontanges avec 25 places) pour 550 enfants de 0-3 ans : couverture de 10 % contre 30 % en moyenne nationale. Délai d'attente moyen : 18 mois. Les familles sont contraintes de se tourner vers les 15 assistantes maternelles agréées (saturées, tarif 4-5 €/heure = 650 €/mois), les crèches privées à Rodez (30 km aller-retour quotidien), ou d'arrêter de travailler.",
          "Les horaires actuels (8h-18h du lundi au vendredi) excluent les familles en horaires décalés : soignant·es de l'hôpital Émile-Borel (services de nuit, week-ends), salarié·es de l'industrie (équipes postées 6h-14h ou 14h-22h), commerçant·es et restaurateur·rices (ouvertures tôt le matin, fermetures tard le soir). Ces familles n'ont AUCUNE solution : pas de garde disponible avant 8h ou après 18h, pas de service le samedi.",
          "Nous créerons 3 nouvelles crèches municipales publiques : crèche de la Bastide (40 places, centre-ville), crèche des Gravasses (35 places, proximité lycées et hôpital), micro-crèche de la Rive gauche (20 places, Veuzac-Graves). Total : 150 places créées, taux de couverture porté à 30 % (objectif européen).",
          "Horaires élargis adaptés aux réalités du travail : ouverture de 6h à 21h du lundi au vendredi, accueil possible le samedi matin de 7h à 13h dans 2 crèches (Bastide et Gravasses). Amplitude horaire permettant aux soignant·es, salarié·es posté·es et commerçant·es de concilier vie professionnelle et familiale.",
          "Gratuité TOTALE pour les familles villefranchoises, financée par l'impôt progressif : pas de tarification au quotient familial, pas de reste à charge. Les familles économiseront entre 300 € et 650 €/mois par enfant. Cette gratuité permettra à 200 mères de famille de conserver leur emploi ou de reprendre une activité professionnelle.",
          "Service de garde itinérant dans les villages associés : une professionnelle de la petite enfance circulera dans les hameaux (Laurère, Mas de Rivals, Naussac) avec un véhicule équipé pour proposer des matinées d'éveil collectif (2 fois/semaine) et éviter aux familles rurales de faire 25 km quotidiens vers la Bastide. Relais assistantes maternelles renforcé avec permanences décentralisées.",
          "Recrutement de 35 professionnel·les diplômé·es en CDI : éducateur·rices de jeunes enfants, auxiliaires de puériculture, agent·es petite enfance. Salaires revalorisés (+200 € net/mois par rapport aux grilles actuelles) pour reconnaître ce métier essentiel et attirer les candidat·es."
        ],
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
          "Les jeunes villefranchois·es n'ont AUCUN pouvoir de décision sur leur ville : pas de conseil municipal des jeunes, pas de consultation sur les projets qui les concernent (aménagement du skatepark, horaires des équipements sportifs, activités culturelles). Les rares dispositifs jeunesse actuels se limitent à des animations ponctuelles pendant les vacances (stages sportifs, ateliers créatifs) sans aucune dimension démocratique.",
          "Les collégien·nes de Kervallon et Treize-Pierres, les lycéen·nes de Raymond-Savignac et des lycées agricoles (Laurière, Langlade) ne sont jamais consulté·es sur les décisions municipales qui impactent directement leur quotidien : transports scolaires, espaces de loisirs, équipements culturels, prévention, santé, environnement. Leurs voix ne comptent pas.",
          "Nous créerons un Conseil Municipal des Jeunes (CMJ) de Villefranche avec de VRAIS pouvoirs : 40 jeunes de 11 à 25 ans élu·es pour 2 ans par leurs pairs. Composition : 15 collégien·nes (Kervallon, Treize-Pierres), 15 lycéen·nes (Raymond-Savignac, lycées agricoles), 10 jeunes non scolarisé·es ou en formation (apprenti·es, étudiant·es, jeunes travailleur·euses, jeunes en insertion). Parité filles-garçons obligatoire.",
          "Budget autonome de 80 000 €/an que les jeunes gèrent LIBREMENT : financement de projets solidaires (collectes alimentaires, maraudes, aide aux personnes âgées), culturels (concerts, festivals jeunesse, fresques murales), sportifs (tournois, équipements), environnementaux (plantation d'arbres, clean walks, potagers partagés). Les jeunes décident, votent et réalisent les projets eux-mêmes.",
          "Droit de proposition au conseil municipal adulte : le CMJ pourra soumettre des vœux et des propositions lors des conseils municipaux officiels. Les élu·es adultes devront répondre publiquement et justifier leurs choix. Plusieurs délibérations municipales devront OBLIGATOIREMENT recevoir l'avis préalable du CMJ (aménagements concernant la jeunesse, budget jeunesse, événements culturels).",
          "Accompagnement par 2 animateur·rices jeunesse municipaux·ales en CDI : locaux permanents dédiés au château de Graves (salle de réunion équipée, bureau), formations à la gestion de projet et à la prise de parole publique, suivi des projets votés. Publication en ligne de tous les projets financés avec bilan détaillé (montant, réalisations, bénéficiaires).",
          "Réservation de sièges garantissant la représentation de TOUS les jeunes : 5 sièges réservés aux jeunes des quartiers prioritaires (Tricot, Bastide), 3 sièges pour les villages associés (Laurère, Veuzac, Mas de Rivals), 2 sièges pour les jeunes en situation de handicap. Pas de discrimination scolaire : un·e jeune décrocheur·euse a autant le droit de siéger qu'un·e lycéen·ne mention très bien."
        ],
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
          "Les inégalités scolaires explosent à Villefranche : dans le Tricot et la Bastide, le taux de passage en seconde générale ne dépasse pas 62 % au collège Treize-Pierres (contre 78 % au niveau national). Les résultats scolaires chutent dans les quartiers populaires : 35 % des élèves de Treize-Pierres en difficulté en français et mathématiques en 6ème, décrochage massif au collège.",
          "Les familles modestes ne peuvent PAS financer le soutien scolaire privé : 25-35 €/heure pour les cours particuliers = 400 €/mois pour 4 heures/semaine, totalement inabordable avec un SMIC. Les entreprises de soutien scolaire (Acadomia, Complétude) prospèrent en centre-ville pour les familles aisées, pendant que les enfants du Tricot accumulent les retards. Résultat : l'école publique ne compense plus les inégalités, elle les renforce.",
          "Nous créerons un Service Municipal d'Accompagnement Scolaire GRATUIT : 25 enseignant·es et animateur·rices diplômé·es employé·es en CDI par la ville. Aide aux devoirs gratuite dans TOUTES les écoles primaires et les 2 collèges (Kervallon, Treize-Pierres) : 4 soirs par semaine de 17h à 19h, accueil en petits groupes de 8 élèves maximum pour un suivi individualisé.",
          "Partenariat renforcé avec l'Éducation Nationale : coordination étroite avec les enseignant·es volontaires pour cibler les difficultés spécifiques de chaque élève, suivi personnalisé sur l'année, ateliers de méthodologie (apprendre à apprendre, gestion du temps, prise de notes). Pas de cours magistraux supplémentaires : on aide l'enfant à faire ses devoirs, à comprendre, à gagner en autonomie.",
          "Conventionnement des associations d'éducation populaire villefranchoises (MJC, centres sociaux, associations de quartier) pour accueillir les collégien·nes de Treize-Pierres, les lycéen·nes de Raymond-Savignac et les jeunes des hameaux qui arrivent par les navettes. Locaux dans les quartiers (Tricot, Bastide, Graves) pour éviter les déplacements : l'aide aux devoirs vient aux enfants, pas l'inverse.",
          "Extension aux lycéen·nes : aide méthodologique pour les lycéen·nes de Raymond-Savignac et des lycées agricoles (Laurière, Langlade), tutorat par des étudiant·es rémunéré·es, aide à l'orientation post-bac (dossiers Parcoursup, lettres de motivation, préparation aux concours).",
          "Objectif : réduire les inégalités scolaires, permettre à TOUS les enfants de réussir quelle que soit l'origine sociale, garantir que l'école publique joue son rôle d'ascenseur social. Budget : 400 000 €/an financé par suppression des exonérations fiscales aux écoles privées hors contrat."
        ],
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
          "À Villefranche, les activités périscolaires sont devenues un LUXE : 180 €/an/enfant dans les écoles publiques (Jean-Jaurès, Calcomier, Treize-Pierres) pour 3h d'activités/semaine = 720 €/an pour une famille de 4 enfants. Les familles du Tricot et de la Bastide renoncent massivement : seulement 42 % des enfants de ces quartiers sont inscrits aux activités périscolaires, contre 78 % dans le centre-ville aisé.",
          "La qualité s'est effondrée : animateur·rices sous-payé·es en CDD précaires (10,50 €/heure), turn-over permanent (50 % de changement chaque année), activités pauvres faute de matériel (garderie déguisée). Les enfants de CE2 de Jean-Jaurès n'ont eu AUCUNE activité sportive pendant 3 mois en 2023 faute d'animateur·rice disponible. Les familles paient pour de la garderie, pas pour de l'éducation.",
          "Nous instaurerons le périscolaire 100 % GRATUIT dans TOUTES les écoles primaires publiques villefranchoises : 1 200 enfants accueillis chaque jour (Jean-Jaurès, Calcomier, Treize-Pierres, Graves, Veuzac, Fontanges, Laurère). Fin du paiement : gratuité totale financée par l'impôt progressif. Les familles économiseront 180 €/an/enfant.",
          "25 activités différentes proposées chaque trimestre : sports (judo, danse, football, escalade, natation), arts (théâtre, musique, arts plastiques, cinéma), sciences (astronomie, robotique, expériences), langues étrangères (anglais, espagnol, occitan), pratiques manuelles (jardinage, cuisine, couture, menuiserie), jeux de société et échecs. Les enfants pourront changer d'activité chaque trimestre sans pénalité pour découvrir et expérimenter.",
          "Encadrement de QUALITÉ par des professionnel·les diplômé·es : 60 animateur·rices en CDI municipal à temps plein (BPJEPS, diplômes spécialisés), salaires revalorisés à 1 900 € net minimum (contre 1 400 € actuellement), formation continue garantie. Fin de la précarité : stabilité des équipes, continuité pédagogique, vraie reconnaissance du métier d'animateur·rice.",
          "Taux d'encadrement renforcé : 1 animateur·rice pour 10 enfants maximum (contre 1 pour 14 aujourd'hui) pour garantir sécurité, écoute et suivi pédagogique. Matériel de qualité : instruments de musique, équipements sportifs, outils de jardinage, matériel scientifique, livres, jeux éducatifs. Budget d'achat annuel : 50 000 €.",
          "Horaires adaptés aux familles qui travaillent : garde assurée de 7h30 à 18h30 sans surcoût, petit-déjeuner gratuit dès 7h30 pour les enfants qui arrivent tôt, goûter équilibré fourni l'après-midi. Transport gratuit pour les activités organisées hors de l'école (piscine, bibliothèque, sorties nature).",
          "Séjours et sorties pendant TOUTES les vacances scolaires : colonies de vacances à prix solidaires (0 à 50 € la semaine selon le quotient familial), sorties culturelles et sportives (musées, spectacles, randonnées, sports nautiques), ateliers thématiques dans les centres de loisirs municipaux. Aucun enfant ne reste enfermé chez lui pendant les vacances.",
          "Objectif : mixité sociale renforcée (tous les enfants ensemble quelle que soit l'origine), égalité d'accès à la culture et au sport, épanouissement de chaque enfant, soutien concret aux familles. L'éducation est un droit, pas un privilège de classe."
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
