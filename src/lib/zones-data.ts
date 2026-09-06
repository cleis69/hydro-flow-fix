/** Contenu local par département d'Île-de-France. */

export type Zone = {
  code: string;
  name: string;
  /** Page départementale dédiée, quand elle existe. */
  to?: string;
  intro: string;
  villes: string[];
  specificites: string[];
  faq: { q: string; a: string }[];
};

export const POURQUOI_NOUS = [
  "Intervention rapide en 30 à 60 minutes",
  "Disponibles 24h/24, 7j/7 — même les jours fériés",
  "Devis gratuit et transparent avant intervention",
  "Techniciens qualifiés et expérimentés",
  "Matériel professionnel haute pression",
  "Garantie de satisfaction sur chaque prestation",
];

export const ZONES: Zone[] = [
  {
    code: "75",
    name: "Paris",
    to: "/debouchage-canalisation/paris",
    intro:
      "À Paris, on intervient tous les jours — et on connaît bien les immeubles. Les colonnes en fonte des bâtiments haussmanniens, ça fait partie de notre quotidien. Ces tuyaux ont parfois plus de cent ans, ils s'encrassent, ils rouillent de l'intérieur, et les bouchons reviennent souvent au même endroit. On couvre tous les arrondissements, du 1er au 20e, et on sait naviguer dans les cours d'immeuble et les escaliers étroits.",
    villes: ["Paris 1er au 20e arrondissement"],
    specificites: [
      "Canalisations haussmanniennes en fonte — intervention adaptée",
      "Accès difficile en centre-ville — véhicules compacts équipés",
      "Colonnes d'immeuble anciennes — diagnostic et curage spécialisé",
      "Techniciens positionnés dans Paris pour une intervention rapide",
    ],
    faq: [
      {
        q: "Intervenez-vous dans les étages sans ascenseur à Paris ?",
        a: "Oui, et c'est même la majorité de nos interventions parisiennes. Notre matériel est pensé pour ça — le furet électrique et la caméra sont transportables à la main. On a l'habitude des 6e étages sans ascenseur, ça fait partie du métier à Paris.",
      },
      {
        q: "Le stationnement à Paris ne retarde-t-il pas l'intervention ?",
        a: "On connaît chaque quartier et on sait où se garer. Nos véhicules ont des autorisations pour les interventions d'urgence. Honnêtement, le stationnement c'est notre problème, pas le vôtre — on se débrouille.",
      },
    ],
  },
  {
    code: "77",
    name: "Seine-et-Marne",
    intro:
      "Le 77, c'est le plus grand département d'Île-de-France — et on le couvre en entier, de Meaux à Fontainebleau, de Marne-la-Vallée à Provins. Beaucoup de propriétaires en Seine-et-Marne ont un assainissement individuel — fosses septiques, micro-stations, fosses toutes eaux — et on gère la vidange, l'entretien, la mise aux normes SPANC et le diagnostic à la caméra. On intervient aussi sur tous les réseaux collectifs : copropriétés, restaurants, commerces, collectivités.",
    villes: [
      "Meaux",
      "Melun",
      "Chelles",
      "Pontault-Combault",
      "Savigny-le-Temple",
      "Torcy",
      "Lagny-sur-Marne",
      "Fontainebleau",
      "Provins",
      "Nemours",
      "Montereau-Fault-Yonne",
      "Coulommiers",
      "Bussy-Saint-Georges",
      "Champs-sur-Marne",
      "Roissy-en-Brie",
      "Brie-Comte-Robert",
      "Ozoir-la-Ferrière",
      "Combs-la-Ville",
      "Mitry-Mory",
      "Villeparisis",
      "Vaires-sur-Marne",
      "Lognes",
      "Noisiel",
      "Dammarie-les-Lys",
      "Le Mée-sur-Seine",
      "Saint-Fargeau-Ponthierry",
      "Moissy-Cramayel",
      "Nangis",
      "Tournan-en-Brie",
      "Crécy-la-Chapelle",
    ],
    specificites: [
      "Département le plus étendu d'Île-de-France — couverture complète",
      "Spécialistes fosses septiques et assainissement non collectif (SPANC)",
      "Zones pavillonnaires étendues — canalisations enterrées et regards",
      "Marne-la-Vallée et villes nouvelles — copropriétés modernes",
      "Centres historiques (Meaux, Provins, Melun) — grès et fonte anciens",
      "Zones rurales (Brie, Gâtinais) — micro-stations et fosses toutes eaux",
      "Restaurants et commerces — bacs à graisse et contrats d'entretien",
      "Délai d'intervention 30-60 min sur les axes A4, N4, N6, N104",
    ],
    faq: [
      {
        q: "Intervenez-vous en zone rurale dans le 77 ?",
        a: "Oui, on va partout en Seine-et-Marne — Provins, Nemours, Montereau, Coulommiers, Crécy-la-Chapelle, et toutes les petites communes entre. Le camion hydrocureur se déplace sans problème, même sur les chemins d'accès aux pavillons isolés. C'est d'ailleurs en zone rurale du 77 qu'on intervient le plus pour les fosses septiques et les micro-stations.",
      },
      {
        q: "Faites-vous la vidange de fosse septique dans le 77 ?",
        a: "C'est une grosse partie de notre activité dans le 77, oui. On vient avec le camion de pompage, on vide la fosse, on vous remet le bordereau de suivi des matières de vidange (BSMV) conforme à la réglementation, et on peut aussi vérifier l'état de la fosse au passage.",
      },
      {
        q: "Quel est le délai d'intervention à Meaux, Melun ou Chelles ?",
        a: "À Meaux, Melun, Chelles, Pontault-Combault, Torcy, Lagny-sur-Marne et Marne-la-Vallée, on est généralement là en 30-45 minutes. Pour Fontainebleau, Nemours, Provins ou les communes plus au sud du 77, comptez plutôt 45 minutes à 1h15.",
      },
      {
        q: "Mon SPANC dans le 77 me demande un diagnostic — vous pouvez le faire ?",
        a: "Oui, on fait des diagnostics d'assainissement non collectif pour le SPANC, dans tout le 77. Inspection caméra de la fosse et des regards, vérification de l'évacuation et de l'épandage, rapport écrit. C'est utile avant une vente immobilière, ou si le SPANC vous a signalé une non-conformité à corriger.",
      },
    ],
  },
  {
    code: "78",
    name: "Yvelines",
    intro:
      "Dans les Yvelines, on passe d'une grande propriété à Versailles à un pavillon à Mantes-la-Jolie dans la même journée. Les maisons anciennes du côté de Saint-Germain ont souvent des canalisations qui datent — de la fonte, parfois du grès — et ça demande un savoir-faire particulier. Les zones pavillonnaires le long de la Seine ont leurs propres soucis, notamment les remontées d'eau.",
    villes: [
      "Versailles",
      "Sartrouville",
      "Mantes-la-Jolie",
      "Saint-Germain-en-Laye",
      "Poissy",
      "Conflans-Sainte-Honorine",
      "Les Mureaux",
      "Rambouillet",
    ],
    specificites: [
      "Propriétés anciennes de standing — intervention soignée et discrète",
      "Zones résidentielles étendues — canalisations longues à traiter",
      "Bords de Seine — problématiques spécifiques de remontées d'eau",
      "Zone industrielle de Poissy/Conflans — contrats de maintenance pro",
    ],
    faq: [
      {
        q: "Intervenez-vous à Versailles et dans les zones protégées ?",
        a: "Oui, on a l'habitude. Les bâtiments en zone patrimoniale ont des contraintes particulières et des canalisations anciennes. On adapte nos méthodes pour ne rien abîmer — pas question d'envoyer 350 bars dans une conduite en grès du XIXe siècle.",
      },
      {
        q: "Quel est le délai d'intervention dans les Yvelines ?",
        a: "À Versailles, Sartrouville ou Poissy, on est là en 30-45 minutes. Pour Rambouillet ou les communes plus au sud, comptez plutôt 45 minutes à une heure. On fait au plus vite dans tous les cas.",
      },
    ],
  },
  {
    code: "91",
    name: "Essonne",
    intro:
      "Le 91, on connaît bien — c'est un département qui mélange un peu tout. Au nord, Massy et Évry c'est dense, beaucoup de copropriétés et d'immeubles collectifs. Au sud vers Étampes, c'est plus rural avec des fosses septiques. Et entre les deux, des zones d'activité et des centres commerciaux qui ont besoin d'un entretien régulier de leurs réseaux.",
    villes: [
      "Évry",
      "Corbeil-Essonnes",
      "Massy",
      "Savigny-sur-Orge",
      "Palaiseau",
      "Viry-Châtillon",
      "Étampes",
      "Brétigny-sur-Orge",
    ],
    specificites: [
      "Parcs d'activités et zones commerciales — contrats d'entretien pro",
      "Villes nouvelles (Évry) — réseaux récents mais très sollicités",
      "Zone sud rurale — assainissement individuel et fosses septiques",
      "Copropriétés nombreuses — curage préventif de colonnes",
    ],
    faq: [
      {
        q: "Proposez-vous des contrats de maintenance aux entreprises du 91 ?",
        a: "Oui, et on en a pas mal dans le coin — des copropriétés, des restaurants dans les zones commerciales, des entreprises sur les parcs d'activité. Curage régulier, vidange de bacs à graisse, passage caméra de contrôle. On cale un planning ensemble et on s'y tient.",
      },
      {
        q: "Intervenez-vous le week-end dans l'Essonne ?",
        a: "Oui — 24h/24, 7j/7, week-ends et jours fériés compris. Les canalisations ne prennent pas de vacances, nous non plus.",
      },
    ],
  },
  {
    code: "92",
    name: "Hauts-de-Seine",
    to: "/debouchage-canalisation/hauts-de-seine",
    intro:
      "Le 92, c'est la densité à l'état pur — des immeubles partout, des bureaux, La Défense avec ses tours et ses parkings souterrains. Les canalisations sont très sollicitées ici, et les problèmes arrivent vite quand tout un immeuble utilise la même colonne. On intervient aussi bien dans les résidences de Boulogne ou Levallois que dans les locaux professionnels de Nanterre ou La Défense.",
    villes: [
      "Boulogne-Billancourt",
      "Nanterre",
      "Colombes",
      "Courbevoie",
      "Asnières-sur-Seine",
      "Rueil-Malmaison",
      "Issy-les-Moulineaux",
      "Levallois-Perret",
    ],
    specificites: [
      "La Défense — intervention dans les tours et parkings souterrains",
      "Densité urbaine forte — canalisations très sollicitées",
      "Immeubles récents et anciens — tous types de réseaux",
      "Nombreuses copropriétés — curage et maintenance régulière",
    ],
    faq: [
      {
        q: "Intervenez-vous dans les tours de La Défense ?",
        a: "Oui, on y va régulièrement. Les immeubles de grande hauteur ont leurs particularités — colonnes très longues, réseaux de parkings souterrains — et on a le matériel adapté pour ça. On connaît bien les accès et les procédures d'entrée.",
      },
      {
        q: "Le stationnement est-il un problème à Boulogne ou Levallois ?",
        a: "On se débrouille toujours. On connaît les rues et les accès de chaque commune du 92 par cœur. Le stationnement c'est notre affaire, pas la vôtre — concentrez-vous sur votre urgence, on gère le reste.",
      },
    ],
  },
  {
    code: "93",
    name: "Seine-Saint-Denis",
    to: "/debouchage-canalisation/seine-saint-denis",
    intro:
      "Le 93 est en pleine transformation — il y a des chantiers partout avec le Grand Paris Express, des quartiers qui se rénovent, des immeubles neufs qui poussent à côté de bâtiments anciens. Les canalisations, elles, n'ont pas toujours suivi. On travaille beaucoup avec les copropriétés et les bailleurs sociaux du département, mais aussi avec les particuliers.",
    villes: [
      "Saint-Denis",
      "Montreuil",
      "Aubervilliers",
      "Aulnay-sous-Bois",
      "Drancy",
      "Noisy-le-Grand",
      "Pantin",
      "Bobigny",
    ],
    specificites: [
      "Réseau ancien dans les communes historiques — canalisations vétustes",
      "Grand Paris Express — adaptation aux nouveaux réseaux",
      "Nombreux immeubles collectifs — curage de colonnes et maintenance",
      "Zones industrielles reconverties — canalisations mixtes à traiter",
    ],
    faq: [
      {
        q: "Travaillez-vous avec les bailleurs sociaux du 93 ?",
        a: "Oui, on a des partenariats réguliers avec plusieurs bailleurs et syndics du département. On sait comment ça fonctionne — les bons de commande, les process de validation, tout ça. On propose aussi des contrats de maintenance annuels pour les immeubles collectifs.",
      },
      {
        q: "Les tarifs sont-ils plus élevés en Seine-Saint-Denis ?",
        a: "Non, nos prix sont les mêmes partout en Île-de-France. Le devis est gratuit, on l'établit sur place avant de toucher à quoi que ce soit. Pas de mauvaise surprise.",
      },
    ],
  },
  {
    code: "94",
    name: "Val-de-Marne",
    intro:
      "Le 94, on y intervient souvent — et pas seulement pour du débouchage classique. Les communes le long de la Marne (Saint-Maur, Champigny, Maisons-Alfort) sont régulièrement concernées par les remontées d'eau, surtout en période de crue. On pose des clapets anti-retour, on pompe quand il le faut, et on débouche le reste du temps.",
    villes: [
      "Créteil",
      "Vitry-sur-Seine",
      "Champigny-sur-Marne",
      "Ivry-sur-Seine",
      "Maisons-Alfort",
      "Saint-Maur-des-Fossés",
      "Fontenay-sous-Bois",
      "Vincennes",
    ],
    specificites: [
      "Bords de Marne — gestion des remontées d'eau et pompage",
      "Zones inondables — systèmes anti-retour et clapets",
      "Centre commercial régional (Créteil Soleil) — maintenance pro",
      "Mix habitat ancien/récent — polyvalence des interventions",
    ],
    faq: [
      {
        q: "Intervenez-vous en cas d'inondation par les canalisations ?",
        a: "Oui, et dans le 94 c'est malheureusement fréquent à cause de la Marne. On fait le pompage d'urgence et ensuite on installe un clapet anti-retour pour que ça ne se reproduise pas. On a eu beaucoup de sollicitations lors des dernières crues — on sait gérer.",
      },
      {
        q: "Peut-on vous appeler pour un simple WC bouché dans le 94 ?",
        a: "Évidemment, il n'y a pas de « petite » intervention. Un WC bouché un dimanche soir, on sait que c'est stressant. On vient, on débouche, et c'est réglé. Pas besoin d'attendre que ça empire.",
      },
    ],
  },
  {
    code: "95",
    name: "Val-d'Oise",
    intro:
      "Le 95, c'est deux mondes différents. Au sud — Argenteuil, Sarcelles, Garges — c'est urbain et dense, avec beaucoup d'immeubles collectifs et des colonnes à curer régulièrement. Au nord, côté Vexin, c'est la campagne avec des maisons individuelles et des fosses septiques. On est organisés pour couvrir les deux.",
    villes: [
      "Argenteuil",
      "Cergy",
      "Sarcelles",
      "Garges-lès-Gonesse",
      "Franconville",
      "Ermont",
      "Gonesse",
      "Pontoise",
    ],
    specificites: [
      "Ville nouvelle de Cergy-Pontoise — réseaux récents bien dimensionnés",
      "Zones pavillonnaires étendues — canalisations individuelles",
      "Nord rural (Vexin) — assainissement non collectif",
      "Aéroport CDG à proximité — interventions hôtels et commerces",
    ],
    faq: [
      {
        q: "Couvrez-vous le Vexin français dans le 95 ?",
        a: "Oui, tout le département sans exception. Le Vexin c'est surtout de l'assainissement individuel — fosses septiques, micro-stations. On fait la vidange, l'entretien, et le diagnostic si le SPANC vous le demande.",
      },
      {
        q: "Quel est le délai d'intervention à Cergy ou Argenteuil ?",
        a: "À Cergy ou Argenteuil, on est là en 30-45 minutes. Pour les communes du Vexin ou les villages plus au nord, c'est plutôt 45 minutes à une heure — mais on fait toujours au plus vite, surtout en urgence.",
      },
    ],
  },
];
