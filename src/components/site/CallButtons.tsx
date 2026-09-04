import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function CallButton({
  className,
  label = "Appeler maintenant",
  showNumber = true,
}: {
  className?: string;
  label?: string;
  showNumber?: boolean;
}) {
  return (
    <a
      href={COMPANY.phoneHref}
      aria-label={`Appeler Hydro-Curage au ${COMPANY.phone}`}
      className={cn(
        "group relative inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-signal-gradient px-6 py-4 font-display text-base font-extrabold uppercase tracking-wide text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0",
        "shadow-[0_18px_40px_-18px_oklch(0.7_0.19_45/0.9)]",
        className,
      )}
    >
      <span className="relative flex size-6 shrink-0 items-center justify-center">
        <span className="pulse-ring absolute inset-0 rounded-full bg-primary-foreground/40" />
        <Phone className="relative size-5" aria-hidden="true" />
      </span>
      <span className="text-left leading-tight">
        {label}
        {showNumber && (
          <span className="block font-sans text-sm font-semibold tracking-normal opacity-80">
            {COMPANY.phone}
          </span>
        )}
      </span>
    </a>
  );
}

export function QuoteButton({
  className,
  label = "Obtenir un devis gratuit",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <Link
      to="/contact"
      className={cn(
        "group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-border bg-surface/70 px-6 py-4 font-display text-base font-bold uppercase tracking-wide text-foreground backdrop-blur transition-colors duration-200 hover:border-primary hover:bg-surface-2",
        className,
      )}
    >
      {label}
      <ArrowRight
        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}
