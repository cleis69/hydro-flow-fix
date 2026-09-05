import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { QuoteForm } from "@/components/site/QuoteForm";
import { TrustMarquee } from "@/components/site/Marquee";
import { Breadcrumbs } from "@/components/site/ServicePage";
import { COMPANY } from "@/lib/site-data";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageMeta({
      title: "Contact & devis gratuit — 06 67 98 01 90 | Hydro-Curage",
      description:
        "Contactez Hydro-Curage 24h/24 et 7j/7 pour un débouchage, un curage ou un pompage en Île-de-France. Devis gratuit au 06 67 98 01 90.",
      url: "/contact",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "Contact", item: "/contact" },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Contact" }]} />
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-black uppercase leading-[1.02] sm:text-5xl lg:text-6xl">
            Appelez-nous, nous répondons 24h/24
          </h1>
        </div>
      </section>

      <TrustMarquee />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:py-20">
        <div>
          <h2 className="font-display text-2xl font-black uppercase tracking-tight">
            Coordonnées
          </h2>
          <ul className="mt-6 space-y-4">
            <li className="surface-panel flex items-center gap-4 p-5">
              <Phone className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <a href={COMPANY.phoneHref} className="font-display text-2xl font-black">
                {COMPANY.phone}
              </a>
            </li>
            <li className="surface-panel flex items-center gap-4 p-5">
              <Clock className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>{COMPANY.availability}</span>
            </li>
            <li className="surface-panel flex items-center gap-4 p-5">
              <MapPin className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>Île-de-France — 75, 77, 78, 91, 92, 93, 94, 95</span>
            </li>
          </ul>
        </div>
        <QuoteForm />
      </section>
    </>
  );
}
