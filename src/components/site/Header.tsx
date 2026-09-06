import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, ChevronDown, Siren } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const SERVICE_LINKS = [
  ...SERVICES.map((s) => ({ to: s.to, label: s.title })),
  { to: "/assurance-decennale", label: "Assurance décennale" },
];

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services", children: SERVICE_LINKS },
  { to: "/zones", label: "Zones d'intervention" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/blog", label: "Blog" },
  { to: "/a-propos", label: "À propos" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3"
          aria-label="Hydro-Curage — accueil"
        >
          <span
            className="grid size-10 shrink-0 place-items-center rounded-lg bg-signal-gradient font-display text-lg font-black text-primary-foreground"
            aria-hidden="true"
          >
            H
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-black uppercase leading-none tracking-tight">
              Hydro<span className="text-primary">-</span>Curage
            </span>
            <span className="block truncate font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
              {COMPANY.availability} • {COMPANY.area}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Navigation principale" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {NAV.map((item) =>
                "children" in item ? (
                  <li
                    key={item.to}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="flex items-center">
                      <Link
                        to={item.to}
                        activeProps={{ className: "text-primary" }}
                        className="rounded-md px-2.5 py-2 font-display text-sm font-bold uppercase tracking-wide text-foreground/85 transition-colors hover:text-primary"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={servicesOpen}
                        aria-label="Afficher les services"
                        onClick={() => setServicesOpen((v) => !v)}
                        className="rounded-md p-1 text-foreground/70 transition-colors hover:text-primary"
                      >
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform",
                            servicesOpen && "rotate-180",
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    {servicesOpen && (
                      <ul className="absolute left-0 top-full z-50 w-72 rounded-xl border border-border bg-background p-2 shadow-lift">
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <Link
                              to={c.to}
                              onClick={() => setServicesOpen(false)}
                              className="block rounded-lg px-3 py-2 text-sm font-semibold text-foreground/85 transition-colors hover:bg-surface-2 hover:text-primary"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      activeOptions={{ exact: item.to === "/" }}
                      activeProps={{ className: "text-primary" }}
                      className="rounded-md px-2.5 py-2 font-display text-sm font-bold uppercase tracking-wide text-foreground/85 transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
              <li>
                <Link
                  to="/urgence"
                  className="ml-1 inline-flex items-center gap-1.5 rounded-md border border-primary/60 px-2.5 py-2 font-display text-sm font-extrabold uppercase tracking-wide text-primary transition-colors hover:bg-primary/10"
                >
                  <Siren className="size-4" aria-hidden="true" />
                  Urgence 24h/24
                </Link>
              </li>
            </ul>
          </nav>

          <a
            href={COMPANY.phoneHref}
            className="hidden min-h-11 items-center gap-2 rounded-lg bg-signal-gradient px-4 py-2.5 font-display text-sm font-extrabold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
            aria-label={`Appeler Hydro-Curage au ${COMPANY.phone}`}
          >
            <Phone className="size-4" aria-hidden="true" />
            {COMPANY.phone}
          </a>

          <a
            href={COMPANY.phoneHref}
            className="inline-flex size-11 items-center justify-center rounded-lg bg-signal-gradient text-primary-foreground sm:hidden"
            aria-label={`Appeler Hydro-Curage au ${COMPANY.phone}`}
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-surface text-foreground xl:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="menu-mobile"
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-background xl:hidden"
        >
          <nav aria-label="Navigation mobile" className="px-4 py-3 sm:px-6">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/60 py-4 font-display text-lg font-bold uppercase tracking-wide"
                  >
                    {item.label}
                  </Link>
                  {"children" in item && (
                    <ul className="border-b border-border/60 pb-3">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link
                            to={c.to}
                            onClick={() => setOpen(false)}
                            className="block py-2 pl-4 text-sm font-semibold text-muted-foreground"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <Link
                  to="/urgence"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 border-b border-border/60 py-4 font-display text-lg font-extrabold uppercase tracking-wide text-primary"
                >
                  <Siren className="size-5" aria-hidden="true" />
                  Urgence 24h/24
                </Link>
              </li>
            </ul>
            <a
              href={COMPANY.phoneHref}
              className="mt-4 flex min-h-14 items-center justify-center gap-2 rounded-xl bg-signal-gradient font-display text-base font-extrabold uppercase text-primary-foreground"
            >
              <Phone className="size-5" aria-hidden="true" /> {COMPANY.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
