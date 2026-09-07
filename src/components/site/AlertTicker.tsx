import { Link } from "@tanstack/react-router";
import { Siren, ArrowRight } from "lucide-react";

const MESSAGE = "Un technicien est actuellement dans votre secteur";

/**
 * Bandeau fixe en tête de page (sans défilement). Renvoie vers le formulaire
 * de devis avec le niveau d'urgence pré-réglé sur « intervention immédiate ».
 */
export function AlertTicker() {
  return (
    <Link
      to="/contact"
      search={{ urgence: "immediat" }}
      hash="devis"
      aria-label={`${MESSAGE} — demander une intervention immédiate`}
      className="group block border-b border-primary/40 bg-primary/10 py-2.5 transition-colors hover:bg-primary/20"
    >
      <span className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 text-center sm:px-6">
        <span className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-primary sm:text-xs">
          <Siren className="size-3.5 shrink-0" aria-hidden="true" />
          {MESSAGE}
        </span>
        <span className="inline-flex items-center gap-1.5 font-display text-[0.68rem] font-extrabold uppercase tracking-wide text-primary underline underline-offset-4 group-hover:no-underline sm:text-xs">
          Intervention immédiate
          <ArrowRight
            className="size-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </span>
    </Link>
  );
}
