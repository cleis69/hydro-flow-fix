import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, ChevronDown, Siren } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/site-data";
import { ZONES } from "@/lib/zones-data";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-hydro-curage.webp";

type NavLeaf = { to: string; label: string };
type NavItem = { to: string; label: string; children?: NavLeaf[] };

const SERVICE_LINKS: NavLeaf[] = [
  ...SERVICES.map((s) => ({ to: s.to, label: s.title })),
  { to: "/assurance-decennale", label: "Assurance décennale" },
];

const ZONE_LINKS: NavLeaf[] = ZONES.map((z) => ({
  to: z.to ?? "/zones",
  label: `${z.name} (${z.code})`,
}));

const ENTREPRISE_LINKS: NavLeaf[] = [
  { to: "/realisations", label: "Réalisations" },
  { to: "/a-propos", label: "À propos" },
  { to: "/intervention", label: "Nos interventions" },
  { to: "/faq", label: "FAQ" },
];

const NAV: NavItem[] = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services", children: SERVICE_LINKS },
  { to: "/zones", label: "Zones", children: ZONE_LINKS },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/blog", label: "Blog" },
  { to: "/a-propos", label: "L'entreprise", children: ENTREPRISE_LINKS },
  { to: "/contact", label: "Contact" },
];

const LINK_BASE =
  "whitespace-nowrap rounded-md px-2 py-2 font-display text-sm font-bold uppercase tracking-wide text-foreground/85 transition-colors hover:text-primary";

function DesktopDropdown({ item }: { item: NavItem & { children: NavLeaf[] } }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => cancelClose(), []);

  return (
    <li
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <div className="flex items-center">
        <Link to={item.to} activeProps={{ className: "text-primary" }} className={LINK_BASE}>
          {item.label}
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-label={`Afficher le menu ${item.label}`}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-md p-1 text-foreground/70 transition-colors hover:text-primary"
        >
          <ChevronDown
            className={cn("size-4 transition-transform", open && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      </div>
      {open && (
        <ul className="absolute left-0 top-full z-50 w-72 rounded-xl border border-border bg-background p-2 shadow-lift">
          {item.children.map((c) => (
            <li key={`${item.label}-${c.label}`}>
              <Link
                to={c.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-foreground/85 transition-colors hover:bg-surface-2 hover:text-primary"
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Hydro-Curage — accueil"
        >
          <span
            className="grid size-12 shrink-0 place-items-center rounded-xl bg-white p-1 shadow-sm"
            aria-hidden="true"
          >
            <img
              src={logo}
              alt=""
              width={48}
              height={48}
              decoding="async"
              className="size-full object-contain"
            />
          </span>
          <span>
            <span className="block whitespace-nowrap font-display text-lg font-black uppercase leading-none tracking-tight">
              Hydro<span className="text-primary">-</span>Curage
            </span>
            <span className="hidden whitespace-nowrap font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground 2xl:block">
              {COMPANY.availability} • {COMPANY.area}
            </span>
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <nav aria-label="Navigation principale" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {NAV.map((item) =>
                item.children ? (
                  <DesktopDropdown
                    key={item.label}
                    item={item as NavItem & { children: NavLeaf[] }}
                  />
                ) : (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      activeOptions={{ exact: item.to === "/" }}
                      activeProps={{ className: "text-primary" }}
                      className={LINK_BASE}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
              <li>
                <Link
                  to="/urgence"
                  className="ml-1 inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md border border-primary/60 px-2.5 py-2 font-display text-sm font-extrabold uppercase tracking-wide text-primary transition-colors hover:bg-primary/10"
                >
                  <Siren className="size-4 shrink-0" aria-hidden="true" />
                  Urgence
                </Link>
              </li>
            </ul>
          </nav>

          <a
            href={COMPANY.phoneHref}
            className="hidden min-h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-signal-gradient px-4 py-2.5 font-display text-sm font-extrabold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
            aria-label={`Appeler Hydro-Curage au ${COMPANY.phone}`}
          >
            <Phone className="size-4 shrink-0" aria-hidden="true" />
            {COMPANY.phone}
          </a>

          <a
            href={COMPANY.phoneHref}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-signal-gradient text-primary-foreground sm:hidden"
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
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-foreground xl:hidden"
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
                <li key={item.label}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/60 py-4 font-display text-lg font-bold uppercase tracking-wide"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="border-b border-border/60 pb-3">
                      {item.children.map((c) => (
                        <li key={`${item.label}-${c.label}`}>
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
