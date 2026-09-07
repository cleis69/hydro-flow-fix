import { Link } from "@tanstack/react-router";
import { Phone, Clock, MapPin, Mail, MessageCircle, Timer } from "lucide-react";
import { COMPANY, SERVICES, DEPARTEMENTS } from "@/lib/site-data";
import logo from "@/assets/logo-hydro-curage.webp";

const INFOS = [
  { to: "/mentions-legales", label: "Mentions légales" },
  { to: "/politique-confidentialite", label: "Politique de confidentialité" },
  { to: "/a-propos", label: "À propos" },
  { to: "/blog", label: "Blog" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:py-20 max-w-7xl">
        <div>
          <span className="mb-5 grid size-28 place-items-center rounded-2xl bg-white p-2">
            <img
              src={logo}
              alt="Hydro-Curage — débouchage services, spécialiste hydrocureur en Île-de-France"
              width={112}
              height={112}
              loading="lazy"
              decoding="async"
              className="size-full object-contain"
            />
          </span>
          <p className="font-display text-2xl font-black uppercase tracking-tight">
            Hydro<span className="text-primary">-</span>Curage
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Débouchage, curage, pompage et assainissement en {COMPANY.area}.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={COMPANY.phoneHref} className="font-semibold hover:text-primary">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={COMPANY.emailHref} className="break-all font-semibold hover:text-primary">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {COMPANY.availabilityLong}
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <Timer className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              Délai moyen : {COMPANY.delai}
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {COMPANY.areaLong}
            </li>
          </ul>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-surface-2 px-4 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <MessageCircle className="size-4 text-primary" aria-hidden="true" />
            Écrire sur WhatsApp
          </a>
        </div>

        <nav aria-label="Services">
          <h2 className="eyebrow">Services</h2>
          <ul className="mt-4 grid gap-2">
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
            <li>
              <Link
                to="/assurance-decennale"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Assurance décennale
              </Link>
            </li>
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
            <li>
              <Link
                to="/zones"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Toutes les zones
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Informations">
          <h2 className="eyebrow">Informations</h2>
          <ul className="mt-4 space-y-2">
            {INFOS.map((i) => (
              <li key={i.to}>
                <Link
                  to={i.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {i.label}
                </Link>
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
