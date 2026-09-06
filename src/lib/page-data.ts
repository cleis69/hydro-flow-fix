/** Contenus rédactionnels des pages À propos, Urgence et Réalisations. */

export const ABOUT = {
  title: "On débouche des canalisations depuis plus de 10 ans",
  intro:
    "C'est pas le métier le plus glamour du monde, mais on le fait bien. Particuliers, copros, restaurants, entreprises — on a tout vu en Île-de-France, et on sait gérer.",
  stats: [
    { value: 10, suffix: "+", label: "Années d'expérience" },
    { value: 5000, suffix: "+", label: "Interventions réalisées" },
    { value: 4.8, suffix: "/5", label: "Note de satisfaction" },
    { value: 30, suffix: " min", label: "Délai d'intervention moyen" },
  ],
  histoire: [
    "Au départ, le constat était simple : quand vous avez une canalisation bouchée un samedi soir, bonne chance pour trouver quelqu'un de compétent et de disponible. On en a fait l'expérience nous-mêmes — et on s'est dit qu'il fallait faire mieux.",
    "On a monté l'équipe petit à petit. Des techniciens qui connaissent vraiment le métier, du matériel pro — pas du bricolage — et surtout une vraie disponibilité. Quand on dit 24h/24, c'est pas juste un slogan. Il y a toujours quelqu'un qui décroche.",
    "Aujourd'hui on est une dizaine, répartis sur les 8 départements d'Île-de-France. Chacun a son secteur, chacun connaît ses rues et ses immeubles. On fait les choses bien : diagnostic honnête, devis clair, travail propre. Et si ça va pas, on revient — c'est aussi simple que ça.",
  ],
  valeurs: [
    {
      title: "Transparence",
      text: "On vous dit combien ça coûte avant de commencer. Pas de ligne en plus sur la facture, pas de « ah mais ça c'était pas prévu ». Le devis, c'est le prix.",
    },
    {
      title: "Expertise",
      text: "Nos techniciens se forment en continu — les techniques évoluent, le matériel aussi. On investit dans les meilleurs outils pour que l'intervention soit efficace du premier coup.",
    },
    {
      title: "Réactivité",
      text: "24h/24, 7j/7, pour de vrai. Nos gars sont sur le terrain, pas dans un bureau. Ça veut dire qu'il y a toujours quelqu'un pas loin de chez vous.",
    },
    {
      title: "Satisfaction",
      text: "On ne part pas tant que c'est pas réglé et que la zone n'est pas propre. Et si le problème revient, on revient aussi — c'est normal.",
    },
  ],
  equipementIntro:
    "Du bon matériel, ça change tout. On investit dans du pro parce qu'un débouchage bien fait avec le bon outil, c'est plus rapide et le résultat tient dans le temps.",
  equipement: [
    "Camion hydrocureur avec pompe haute pression (350 bars)",
    "Furets électriques et manuels pour tous diamètres",
    "Caméra endoscopique HD pour inspection vidéo",
    "Système de pompage et aspiration intégré",
    "Détecteur acoustique de fuites",
    "Groupes électrogènes autonomes",
    "Équipements de protection individuels complets",
    "Véhicules ateliers tout équipés",
  ],
  certifications: [
    "Assurance responsabilité civile professionnelle",
    "Garantie décennale sur les travaux de canalisation",
    "Certificat de vidange conforme à la réglementation",
    "Respect des normes NF et DTU en vigueur",
    "Formation continue des techniciens",
  ],
} as const;

export const URGENCE = {
  title: "Canalisation bouchée ? On arrive.",
  intro:
    "Pas de panique, on gère. Un technicien est en route — 30 minutes en zone urbaine, de jour comme de nuit, week-end et jours fériés compris. Le diagnostic est gratuit.",
  stats: [
    { value: "30 min", label: "Temps d'arrivée moyen en zone urbaine" },
    { value: "24h/24, 7j/7", label: "Nuits, week-ends et jours fériés inclus" },
    { value: "Devis gratuit", label: "Diagnostic sur place, sans engagement" },
    { value: "Île-de-France", label: "8 départements couverts en permanence" },
  ],
  signaux: [
    "WC bouché qui déborde",
    "Évier ou lavabo complètement bloqué",
    "Eau qui remonte par les canalisations",
    "Mauvaises odeurs persistantes d'égout",
    "Inondation par les canalisations",
    "Canalisation cassée ou percée",
    "Regards extérieurs bouchés ou pleins",
    "Colonne d'immeuble obstruée",
  ],
  etapes: [
    {
      title: "Vous nous appelez",
      text: "Quelqu'un vous répond tout de suite — oui, même à 3h du mat'. On évalue la situation au téléphone et on vous dit ce qu'on pense.",
    },
    {
      title: "Le technicien le plus proche part",
      text: "On envoie celui qui est le plus près de chez vous. En zone urbaine, comptez 30 minutes. On vous prévient quand il est en route.",
    },
    {
      title: "Il regarde et vous explique",
      text: "Le technicien inspecte, trouve la cause, et vous présente un devis clair. Pas de surprise, pas d'engagement tant que vous n'avez pas dit oui.",
    },
    {
      title: "On débouche",
      text: "Furet, hydrocurage, pompage — on sort l'outil adapté à la situation. Pas de surtraitement, on fait ce qu'il faut, ni plus ni moins.",
    },
    {
      title: "On vérifie et on nettoie",
      text: "On fait couler l'eau pour s'assurer que tout passe bien. On remet tout en ordre et on vous explique comment éviter que ça revienne.",
    },
  ],
  tarifsIntro:
    "On ne va pas vous donner un prix fixe — ça dépend vraiment du problème, de l'accès et de la technique utilisée. Ce qu'on peut vous garantir, c'est que le devis est gratuit et qu'on ne commence rien sans votre accord.",
  tarifs: [
    "Déplacement et diagnostic : gratuit",
    "Débouchage simple (furet) : sur devis",
    "Débouchage complexe (hydrocurage) : sur devis",
    "Supplément horaire de nuit (22h-6h) : communiqué dans le devis",
    "Pas de frais cachés, pas de supplément non annoncé",
  ],
} as const;

export type Realisation = {
  lieu: string;
  title: string;
  text: string;
  technique: string;
};

export const REALISATIONS: Realisation[] = [
  {
    lieu: "Paris 11e",
    title: "Canalisation de cuisine obstruée",
    text: "Évier complètement bouché depuis 3 jours. Accumulation de graisses et résidus alimentaires sur 2 mètres. Débouchage au furet mécanique puis nettoyage haute pression. Résultat : écoulement normal rétabli en 45 minutes.",
    technique: "Furet mécanique + hydrocurage",
  },
  {
    lieu: "Boulogne-Billancourt (92)",
    title: "Colonne d'immeuble bouchée",
    text: "Colonne principale d'un immeuble de 6 étages, refoulement au rez-de-chaussée. Passage caméra pour localiser le bouchon — racines infiltrées au niveau du 2e sous-sol. Hydrocurage 350 bars avec notre camion. Les 12 appartements retrouvent un écoulement normal.",
    technique: "Inspection caméra + camion hydrocureur",
  },
  {
    lieu: "Versailles (78)",
    title: "Regard extérieur saturé",
    text: "Regard de visite complètement engorgé dans une résidence pavillonnaire. Eau stagnante et odeurs dans le jardin. Pompage du regard, curage de la canalisation sur 15 mètres, vérification caméra. Le propriétaire peut enfin profiter de son jardin.",
    technique: "Pompage + curage préventif",
  },
  {
    lieu: "Saint-Denis (93)",
    title: "Bac à graisse de restaurant",
    text: "Bac à graisse jamais vidangé depuis 2 ans dans un restaurant. Écoulement quasi nul, odeurs insupportables en cuisine. Vidange complète, nettoyage haute pression du bac et des canalisations en aval. On a aussi mis en place un calendrier d'entretien.",
    technique: "Vidange + nettoyage HP",
  },
  {
    lieu: "Créteil (94)",
    title: "Canalisation de parking souterrain",
    text: "Canalisation d'évacuation du parking en sous-sol, inaccessible pour un camion classique. Notre pick-up hydrocureur est descendu au -2 sans problème. Débouchage en 1h30, plus de flaques d'eau stagnante.",
    technique: "Pick-up hydrocureur",
  },
  {
    lieu: "Montreuil (93)",
    title: "WC bouché — intervention de nuit",
    text: "Appel à 23h, WC unique de l'appartement complètement bouché avec début de débordement. Le technicien est arrivé en 25 minutes. Débouchage au furet, vérification du bon écoulement. Tout réglé avant minuit.",
    technique: "Furet mécanique — urgence nuit",
  },
];

export const DECENNALE = {
  intro:
    "On ne fait pas que déboucher et réparer — on garantit notre travail. Tous nos chantiers sont couverts par une assurance décennale, ce qui veut dire que pendant 10 ans après l'intervention, si un problème lié à nos travaux apparaît, on revient et on règle ça sans frais. C'est la loi, et surtout c'est normal.",
  points: [
    "Garantie décennale sur tous les travaux",
    "Couverture dommages structurels 10 ans",
    "Attestation fournie sur demande",
    "Conforme à la loi Spinetta",
    "Responsabilité civile professionnelle",
    "Travaux de plomberie et assainissement couverts",
  ],
  blocks: [
    {
      title: "Qu'est-ce que l'assurance décennale ?",
      text: "L'assurance décennale est obligatoire pour tous les professionnels du bâtiment. Elle couvre pendant 10 ans les dommages qui compromettent la solidité de l'ouvrage ou le rendent impropre à sa destination. Concrètement, si une canalisation qu'on a posée ou réparée cause un dégât dans les 10 ans, on intervient et c'est pris en charge.",
    },
    {
      title: "Ce que ça couvre chez nous",
      text: "Réparation et remplacement de canalisations, pose de systèmes de relevage, installation de bacs à graisse, raccordements au réseau, chemisage, travaux de plomberie sanitaire — tous ces travaux sont couverts par notre décennale. Vous pouvez demander l'attestation avant le début de tout chantier.",
    },
    {
      title: "Votre tranquillité, notre engagement",
      text: "Travailler avec une entreprise assurée, c'est la base. Mais au-delà de l'obligation légale, c'est un engagement de qualité : on sait que notre travail va durer, et on le prouve en le garantissant. Si votre syndic, votre assureur ou votre mairie demande une attestation, on vous la fournit immédiatement.",
    },
  ],
  faq: [
    {
      q: "Pouvez-vous fournir une attestation d'assurance décennale ?",
      a: "Oui, bien sûr — c'est même la première chose qu'on fournit si vous la demandez. Avant le début des travaux, on vous envoie l'attestation en cours de validité. C'est important pour vous, pour votre assureur, et pour votre syndic si vous êtes en copropriété.",
    },
    {
      q: "Quels travaux sont couverts par la décennale ?",
      a: "Tous les travaux qui touchent à la structure ou au bon fonctionnement de vos installations : remplacement de canalisations, pose de systèmes de relevage, raccordements, chemisage, travaux de plomberie. En revanche, un simple débouchage au furet n'entre pas dans le cadre de la décennale — c'est un dépannage, pas un ouvrage.",
    },
    {
      q: "Que faire si un problème survient après vos travaux ?",
      a: "Vous nous appelez, tout simplement. Si le problème est lié à notre intervention et qu'on est dans les 10 ans, on revient et on répare sans frais supplémentaires. C'est le principe de la garantie décennale — et c'est aussi notre façon de travailler : on assume ce qu'on fait.",
    },
    {
      q: "La décennale est-elle obligatoire pour un plombier ?",
      a: "Oui, dès qu'un professionnel réalise des travaux de construction ou de rénovation touchant au bâti, la décennale est obligatoire (loi Spinetta de 1978). Un artisan qui travaille sans décennale s'expose à des sanctions pénales — et vous, vous n'êtes pas couvert. Vérifiez toujours avant de signer.",
    },
  ],
} as const;
