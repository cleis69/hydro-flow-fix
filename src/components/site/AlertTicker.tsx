import { Link } from "@tanstack/react-router";
import { Siren } from "lucide-react";

const MESSAGE = "Un technicien est actuellement dans votre secteur et prêt à intervenir";

/**
 * Bandeau défilant en tête de page. Renvoie vers le formulaire de devis
 * avec le niveau d'urgence pré-réglé sur « intervention immédiate ».
 */
export function AlertTicker() {
  const items = Array.from({ length: 6 });

  return (
    <Link
      to="/contact"
      search={{ urgence: "immediat" }}
      hash="devis"
      aria-label={`${MESSAGE} — demander une intervention immédiate`}
      className="group block overflow-hidden border-b border-primary/40 bg-primary/10 py-2 transition-colors hover:bg-primary/20"
    >
      <span className="marquee-track gap-6 sm:gap-10">
        {items.map((_, i) => (
          <span
            key={i}
            aria-hidden={i > 0 ? "true" : undefined}
            className="flex shrink-0 items-center gap-3 whitespace-nowrap font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary sm:text-xs"
          >
            <Siren className="size-3.5 shrink-0" aria-hidden="true" />
            {MESSAGE}
            <span className="font-bold underline underline-offset-4 group-hover:no-underline">
              Intervention immédiate
            </span>
            <span className="size-1.5 rounded-full bg-primary/70" aria-hidden="true" />
          </span>
        ))}
      </span>
    </Link>
  );
}
