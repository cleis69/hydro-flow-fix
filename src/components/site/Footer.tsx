import { Link } from "@tanstack/react-router";
import { Phone, Clock, MapPin } from "lucide-react";
import { COMPANY, SERVICES, DEPARTEMENTS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:py-20">
        <div>
          <p className="font-display text-2xl font-black uppercase tracking-tight">
            Hydro<span className="text-primary">-</span>Curage
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Débouchage, curage, pompage et assainissement en {COMPANY.area}.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-primary" aria-hidden="true" />
              <a href={COMPANY.phoneHref} className="font-semibold hover:text-primary">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              {COMPANY.availability}
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              {COMPANY.area} — 75, 77, 78, 91, 92, 93, 94, 95
            </li>
          </ul>
        </div>

        <nav aria-label="Services" className="lg:col-span-2">
          <h2 className="eyebrow">Services</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to={s.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Zones d'intervention">
          <h2 className="eyebrow">Zones d'intervention</h2>
          <ul className="mt-4 space-y-2">
            {DEPARTEMENTS.map((d) => (
              <li key={d.code} className="text-sm text-muted-foreground">
                {d.to ? (
                  <Link to={d.to} className="transition-colors hover:text-primary">
                    {d.code} — {d.name}
                  </Link>
                ) : (
                  <span>
                    {d.code} — {d.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Hydro-Curage. Tous droits réservés.</p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Assurance décennale • Devis gratuit
          </p>
        </div>
      </div>
    </footer>
  );
}
