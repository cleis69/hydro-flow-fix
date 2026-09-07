/**
 * Registre des visuels du site.
 * Chaque entrée porte son texte alternatif : il décrit l'image ET reprend
 * l'intitulé de la prestation, pour le référencement comme pour les lecteurs d'écran.
 */
import debouchage from "@/assets/debouchage-canalisation-furet-professionnel.webp";
import curage from "@/assets/curage-hydrodynamique-haute-pression.webp";
import pompage from "@/assets/pompage-assainissement-camion.webp";
import bacGraisse from "@/assets/bac-a-graisse-installation-entretien.webp";
import inspection from "@/assets/inspection-camera-canalisation.webp";
import relevage from "@/assets/systeme-relevage-pompe-sous-sol.webp";
import canalisations from "@/assets/reparation-canalisation-chemisage.webp";
import sanitaire from "@/assets/plomberie-sanitaire-installation.webp";
import decennale from "@/assets/assurance-decennale-travaux-garantis.webp";
import camion from "@/assets/camion-hydrocureur-350-bars.webp";
import pickup from "@/assets/pickup-hydrocureur-compact-300-bars.webp";
import pickupAcces from "@/assets/pickup-hydrocureur-acces-difficile.webp";
import equipe from "@/assets/equipe-techniciens-hydro-curage.webp";
import diagnostic from "@/assets/diagnostic-canalisation-technicien.webp";
import servicesHero from "@/assets/interventions-assainissement-ile-de-france.webp";
import urgenceNuit from "@/assets/intervention-urgence-canalisation-nuit.webp";
import heroIdf from "@/assets/debouchage-canalisation-ile-de-france.webp";

export type Illustration = { src: string; alt: string };

/** Visuel par prestation — la clé correspond au slug du service. */
export const SERVICE_IMAGES: Record<string, Illustration> = {
  "debouchage-canalisation": {
    src: debouchage,
    alt: "Débouchage de canalisation au furet électrique professionnel par un technicien Hydro-Curage",
  },
  hydrocurage: {
    src: curage,
    alt: "Hydrocurage haute pression d'une canalisation encrassée par les graisses et le calcaire",
  },
  "curage-canalisation": {
    src: camion,
    alt: "Camion hydrocureur 350 bars utilisé pour le curage de canalisation en Île-de-France",
  },
  "pompage-assainissement": {
    src: pompage,
    alt: "Camion de pompage et d'assainissement lors d'une vidange de fosse septique",
  },
  "inspection-camera": {
    src: inspection,
    alt: "Inspection par caméra vidéo de l'intérieur d'une canalisation pour localiser le défaut",
  },
  "bac-a-graisse": {
    src: bacGraisse,
    alt: "Bac à graisse professionnel installé pour un restaurant, prêt pour l'entretien",
  },
  canalisations: {
    src: canalisations,
    alt: "Réparation et chemisage d'une canalisation enterrée sans ouverture de tranchée",
  },
  "systeme-relevage": {
    src: relevage,
    alt: "Pompe de relevage installée en sous-sol pour remonter les eaux usées vers le collecteur",
  },
  sanitaire: {
    src: sanitaire,
    alt: "Installation et réparation d'équipements sanitaires : WC, lavabo, douche et robinetterie",
  },
  "assurance-decennale": {
    src: decennale,
    alt: "Travaux de canalisation couverts par l'assurance décennale pendant dix ans",
  },
};

export const IMAGES = {
  heroIdf: {
    src: heroIdf,
    alt: "Technicien Hydro-Curage en intervention de débouchage de canalisation en Île-de-France",
  },
  equipe: {
    src: equipe,
    alt: "L'équipe de techniciens Hydro-Curage et son matériel professionnel d'assainissement",
  },
  camion: {
    src: camion,
    alt: "Camion hydrocureur 350 bars pour le curage des réseaux de gros diamètre jusqu'à DN 600",
  },
  pickup: {
    src: pickup,
    alt: "Pick-up hydrocureur compact 300 bars accédant aux parkings souterrains et rues étroites",
  },
  pickupAcces: {
    src: pickupAcces,
    alt: "Pick-up hydrocureur en intervention dans une cour intérieure inaccessible à un camion",
  },
  diagnostic: {
    src: diagnostic,
    alt: "Diagnostic d'une canalisation par un technicien avant intervention de débouchage",
  },
  services: {
    src: servicesHero,
    alt: "Interventions de débouchage, curage, pompage et assainissement en Île-de-France",
  },
  urgenceNuit: {
    src: urgenceNuit,
    alt: "Intervention d'urgence de nuit sur une canalisation bouchée en Île-de-France",
  },
} satisfies Record<string, Illustration>;

/** Visuel associé à chaque article du blog, choisi selon le sujet traité. */
export const ARTICLE_IMAGES: Record<string, Illustration> = {
  "comment-deboucher-un-evier": {
    src: debouchage,
    alt: "Débouchage d'un évier de cuisine bouché par les graisses accumulées",
  },
  "prevenir-bouchons-canalisation": {
    src: curage,
    alt: "Canalisation entretenue par curage préventif pour éviter la formation de bouchons",
  },
  "inspection-camera-canalisation-guide": {
    src: inspection,
    alt: "Caméra d'inspection introduite dans une canalisation pour un diagnostic sans destruction",
  },
  "entretien-fosse-septique": {
    src: pompage,
    alt: "Vidange d'une fosse septique par camion de pompage lors de l'entretien réglementaire",
  },
  "vidange-fosse-septique-seine-et-marne-77-guide-spanc": {
    src: pompage,
    alt: "Vidange de fosse septique en Seine-et-Marne avec bordereau de suivi conforme au SPANC",
  },
  "tarifs-debouchage-canalisation-77-prix-reels": {
    src: diagnostic,
    alt: "Établissement d'un devis de débouchage de canalisation avant intervention",
  },
  "refoulement-crue-marne-seine-77": {
    src: urgenceNuit,
    alt: "Intervention d'urgence après un refoulement de canalisation lié à une crue",
  },
  "racines-canalisations-77-diagnostic-traitement": {
    src: canalisations,
    alt: "Canalisation enterrée envahie par des racines d'arbres, détectée à la caméra",
  },
  "diagnostic-spanc-77-avant-vente-immobiliere": {
    src: inspection,
    alt: "Diagnostic SPANC d'une installation d'assainissement non collectif avant vente",
  },
};

/** Visuel associé à chaque réalisation, choisi selon la technique employée. */
export const REALISATION_IMAGES: Illustration[] = [
  {
    src: debouchage,
    alt: "Débouchage au furet mécanique d'une canalisation de cuisine obstruée à Paris 11e",
  },
  {
    src: camion,
    alt: "Hydrocurage 350 bars d'une colonne d'immeuble bouchée à Boulogne-Billancourt",
  },
  {
    src: pompage,
    alt: "Pompage d'un regard extérieur saturé dans une résidence pavillonnaire à Versailles",
  },
  {
    src: bacGraisse,
    alt: "Vidange et nettoyage haute pression d'un bac à graisse de restaurant à Saint-Denis",
  },
  {
    src: pickupAcces,
    alt: "Pick-up hydrocureur intervenant dans un parking souterrain à Créteil",
  },
  {
    src: urgenceNuit,
    alt: "Débouchage de WC en intervention de nuit à Montreuil",
  },
];
