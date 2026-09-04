import { Link } from "@tanstack/react-router";
import { Phone, FileText } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

/** Barre d'action fixe en bas d'écran, mobile uniquement. */
export function FloatingCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] lg:hidden">
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href={COMPANY.phoneHref}
          className="flex min-h-13 items-center justify-center gap-2 rounded-xl bg-signal-gradient px-3 py-3 font-display text-sm font-extrabold uppercase text-primary-foreground"
          aria-label={`Appeler Hydro-Curage au ${COMPANY.phone}`}
        >
          <Phone className="size-4" aria-hidden="true" />
          Appeler
        </a>
        <Link
          to="/contact"
          className="flex min-h-13 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-3 py-3 font-display text-sm font-bold uppercase text-foreground"
        >
          <FileText className="size-4 text-primary" aria-hidden="true" />
          Devis gratuit
        </Link>
      </div>
    </div>
  );
}
