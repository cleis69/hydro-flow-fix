export const COMPANY = {
  name: "Hydro-Curage",
  phone: "06 67 98 01 90",
  phoneHref: "tel:+33667980190",
  email: "hydropro.services.idf@gmail.com",
  emailHref: "mailto:hydropro.services.idf@gmail.com",
  whatsapp:
    "https://wa.me/33667980190?text=Bonjour%2C%20j'ai%20un%20probl%C3%A8me%20de%20canalisation%20et%20j'aimerais%20un%20devis%20gratuit.",
  availability: "24h/24 — 7j/7",
  availabilityLong: "24h/24 — 7j/7, y compris week-ends et jours fériés",
  area: "Île-de-France",
  areaLong: "Île-de-France — 8 départements (75, 77, 78, 91, 92, 93, 94, 95)",
  delai: "30 minutes en zone urbaine, 45 min à 1h en zone périurbaine",
} as const;


export type ServiceKey =
  | "debouchage-canalisation"
  | "hydrocurage"
  | "curage-canalisation"
  | "pompage-assainissement"
  | "inspection-camera"
  | "bac-a-graisse"
  | "canalisations"
  | "systeme-relevage"
  | "sanitaire";

export type ServiceDef = {
  slug: ServiceKey;
  to: string;
  title: string;
  short: string;
  description: string;
  featured?: boolean;
  points: string[];
};

export const SERVICES: ServiceDef[] = [
  {
    slug: "debouchage-canalisation",
    to: "/debouchage-canalisation",
    title: "Débouchage / Dégorgement",
    short: "Intervention sur les canalisations bouchées.",
    description:
      "Débouchage et dégorgement de WC, éviers, douches, colonnes et canalisations enterrées. Nous localisons le bouchon puis rétablissons l'écoulement avec le matériel adapté à la configuration du réseau.",
    featured: true,
    points: [
      "WC, éviers, douches, siphons et colonnes",
      "Débouchage mécanique ou haute pression",
      "Rétablissement de l'écoulement puis contrôle",
    ],
  },
  {
    slug: "hydrocurage",
    to: "/hydrocurage",
    title: "Hydrocurage",
    short: "Nettoyage haute pression des canalisations.",
    description:
      "L'hydrocurage projette de l'eau sous haute pression dans la canalisation pour décoller graisses, dépôts et incrustations sur toute la paroi, sans agresser le réseau.",
    featured: true,
    points: [
      "Nettoyage de la paroi sur toute la circonférence",
      "Matériel compact ou camion selon l'accès",
      "Adapté aux réseaux collectifs et professionnels",
    ],
  },
  {
    slug: "curage-canalisation",
    to: "/curage-canalisation",
    title: "Curage de canalisation",
    short: "Curage préventif et curatif des réseaux.",
    description:
      "Le curage élimine les dépôts accumulés dans les canalisations avant qu'ils ne provoquent un bouchon ou un refoulement. Il peut être curatif après un incident ou planifié en préventif.",
    points: [
      "Curage curatif après obstruction",
      "Curage préventif planifié",
      "Réseaux d'immeubles, commerces et copropriétés",
    ],
  },
  {
    slug: "pompage-assainissement",
    to: "/pompage-assainissement",
    title: "Pompage / Assainissement",
    short: "Pompage et évacuation des eaux et matières.",
    description:
      "Pompage des eaux et des matières, vidange et évacuation dans le cadre de travaux d'assainissement : fosses, regards, postes, locaux inondés et ouvrages enterrés.",
    featured: true,
    points: [
      "Pompage d'eaux claires, usées et de matières",
      "Vidange d'ouvrages et de regards",
      "Évacuation par camion hydrocureur",
    ],
  },
  {
    slug: "inspection-camera",
    to: "/inspection-camera",
    title: "Inspection caméra",
    short: "Diagnostic précis de l'intérieur des canalisations.",
    description:
      "La caméra d'inspection parcourt la canalisation et montre l'intérieur du réseau : origine du bouchon, fissure, contre-pente, racines ou effondrement. Le diagnostic évite de casser au hasard.",
    points: [
      "Visualisation de l'intérieur du réseau",
      "Localisation précise du défaut",
      "Base fiable avant travaux",
    ],
  },
  {
    slug: "bac-a-graisse",
    to: "/bac-a-graisse",
    title: "Bac à graisse",
    short: "Entretien et vidange.",
    description:
      "Vidange et nettoyage des bacs à graisse pour restaurants, cuisines collectives et commerces alimentaires, afin d'éviter les odeurs et l'obstruction des évacuations.",
    points: [
      "Vidange complète du bac",
      "Nettoyage des parois et du panier",
      "Contrôle des évacuations en sortie",
    ],
  },
  {
    slug: "canalisations",
    to: "/canalisations",
    title: "Canalisations",
    short: "Recherche et résolution des problèmes de réseau.",
    description:
      "Recherche de l'origine des dysfonctionnements sur le réseau de canalisations puis mise en œuvre de la solution adaptée : curage, débouchage, reprise d'un point défectueux.",
    points: [
      "Recherche de l'origine du problème",
      "Réseaux intérieurs et enterrés",
      "Solution adaptée au réseau constaté",
    ],
  },
  {
    slug: "systeme-relevage",
    to: "/systeme-relevage",
    title: "Systèmes de relevage",
    short: "Intervention et maintenance.",
    description:
      "Intervention et maintenance sur les postes et pompes de relevage : nettoyage de la cuve, contrôle du fonctionnement, remise en service.",
    points: [
      "Nettoyage et pompage de la cuve",
      "Contrôle du fonctionnement",
      "Maintenance des postes de relevage",
    ],
  },
  {
    slug: "sanitaire",
    to: "/sanitaire",
    title: "Sanitaire",
    short: "Interventions sur les équipements sanitaires.",
    description:
      "Interventions sur les équipements sanitaires en lien avec les évacuations : WC, lavabos, douches, siphons et raccordements.",
    points: [
      "WC, lavabos, douches, siphons",
      "Raccordements d'évacuation",
      "Intervention en logement comme en collectif",
    ],
  },
];

export const PROBLEMS = [
  {
    icon: "toilet",
    title: "WC bouchés",
    desc: "L'eau ne s'évacue plus ou remonte dans la cuvette.",
    to: "/debouchage-canalisation",
  },
  {
    icon: "sink",
    title: "Évier bouché",
    desc: "Évacuation lente, eau stagnante en cuisine.",
    to: "/debouchage-canalisation",
  },
  {
    icon: "shower",
    title: "Douche bouchée",
    desc: "L'eau monte dans le bac ou la baignoire.",
    to: "/debouchage-canalisation",
  },
  {
    icon: "pipe",
    title: "Canalisation bouchée",
    desc: "Plusieurs points d'eau bloqués en même temps.",
    to: "/canalisations",
  },
  {
    icon: "backflow",
    title: "Refoulement",
    desc: "Les eaux usées remontent par les évacuations.",
    to: "/pompage-assainissement",
  },
  {
    icon: "smell",
    title: "Mauvaises odeurs",
    desc: "Odeurs persistantes venant des évacuations.",
    to: "/curage-canalisation",
  },
  {
    icon: "shield",
    title: "Curage préventif",
    desc: "Entretien planifié pour éviter l'incident.",
    to: "/curage-canalisation",
  },
  {
    icon: "truck",
    title: "Pompage / assainissement",
    desc: "Vidange, pompage et évacuation des eaux.",
    to: "/pompage-assainissement",
  },
] as const;

export type Departement = {
  code: string;
  name: string;
  to?: string;
};

export const DEPARTEMENTS: Departement[] = [
  { code: "75", name: "Paris", to: "/debouchage-canalisation/paris" },
  { code: "77", name: "Seine-et-Marne" },
  { code: "78", name: "Yvelines" },
  { code: "91", name: "Essonne" },
  {
    code: "92",
    name: "Hauts-de-Seine",
    to: "/debouchage-canalisation/hauts-de-seine",
  },
  {
    code: "93",
    name: "Seine-Saint-Denis",
    to: "/debouchage-canalisation/seine-saint-denis",
  },
  { code: "94", name: "Val-de-Marne" },
  { code: "95", name: "Val-d'Oise" },
];

export const TRUST = [
  "24H/24 • 7J/7",
  "DEVIS GRATUIT",
  "INTERVENTION RAPIDE",
  "ASSURANCE DÉCENNALE",
  "ÉQUIPE FORMÉE",
  "MATÉRIEL PROFESSIONNEL",
];

export const FAQ = [
  {
    q: "Intervenez-vous la nuit et le week-end ?",
    a: "Oui. Hydro-Curage intervient 24h/24 et 7j/7 en Île-de-France. Appelez le 06 67 98 01 90 pour décrire votre situation.",
  },
  {
    q: "Dans quels départements intervenez-vous ?",
    a: "Nous intervenons dans toute l'Île-de-France : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d'Oise (95).",
  },
  {
    q: "Le devis est-il gratuit ?",
    a: "Oui, le devis est gratuit. Vous pouvez le demander par téléphone ou via le formulaire de demande de devis du site.",
  },
  {
    q: "Pouvez-vous intervenir dans un parking souterrain ou une rue étroite ?",
    a: "Oui. Notre hydrocureur compact accède aux parkings souterrains, rues étroites, voies privées et cours intérieures où un camion classique ne passe pas.",
  },
  {
    q: "Quelle est la différence entre débouchage et hydrocurage ?",
    a: "Le débouchage lève l'obstruction pour rétablir l'écoulement. L'hydrocurage nettoie la paroi de la canalisation sur toute sa longueur avec de l'eau sous haute pression, ce qui limite la réapparition du bouchon.",
  },
  {
    q: "Faites-vous un diagnostic avant l'intervention ?",
    a: "Le technicien identifie l'origine du problème sur place. Une inspection caméra peut être réalisée pour visualiser l'intérieur de la canalisation et localiser précisément le défaut.",
  },
];
