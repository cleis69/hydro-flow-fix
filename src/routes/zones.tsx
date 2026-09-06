import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { PageHeader } from "@/components/site/PageShell";
import { QuoteSection } from "@/components/site/QuoteForm";
import { FaqSection } from "@/components/site/FaqSection";
import { Reveal } from "@/components/site/Reveal";
import { TrustMarquee } from "@/components/site/Marquee";
import { ZONES, POURQUOI_NOUS } from "@/lib/zones-data";
import { SERVICES } from "@/lib/site-data";
import { pageMeta, breadcrumbLd, faqLd } from "@/lib/seo";

const META = {
  title: "Zones d'intervention en Île-de-France | Hydro-Curage",
  description:
    "Débouchage, curage et assainissement dans les 8 départements d'Île-de-France : Paris 75, Seine-et-Marne 77, Yvelines 78, Essonne 91, Hauts-de-Seine 92, Seine-Saint-Denis 93, Val-de-Marne 94, Val-d'Oise 95.",
  url: "/zones",
};

const ZONE_FAQ = ZONES.flatMap((z) => z.faq.slice(0, 1));

export const Route = createFileRoute("/zones")({
  head: () => ({
    ...pageMeta(META),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "Zones d'intervention", item: "/zones" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqLd([...ZONE_FAQ])),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Zone d'intervention"
        title="Nous intervenons dans toute l'Île-de-France"
        intro="8 départements couverts. Nos techniciens sont répartis stratégiquement pour garantir une intervention rapide, où que vous soyez en région parisienne."
        breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Zones d'intervention" }]}
      />

      <TrustMarquee />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-4 md:grid-cols-2">
          {ZONES.map((z, i) => (
            <Reveal key={z.code} delay={i * 50}>
              <article className="surface-panel flex h-full flex-col p-6 lg:p-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-black text-primary">{z.code}</span>
                  <h2 className="font-display text-xl font-black uppercase tracking-tight">
                    {z.name}
                  </h2>
                </div>

                <p className="mt-4 leading-relaxed text-muted-foreground">{z.intro}</p>

                <h3 className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-primary">
                  Villes couvertes
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {z.villes.join(" · ")} — et toutes les communes du {z.code}
                </p>

                <h3 className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-primary">
                  Nos interventions dans le {z.name}
                </h3>
                <ul className="mt-3 space-y-2">
                  {z.specificites.map((s) => (
                    <li key={s} className="flex gap-2 text-sm text-foreground/90">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex-1" />

                {z.to ? (
                  <Link
                    to={z.to}
                    className="group mt-2 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-primary"
                  >
                    Voir la page {z.name}
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                ) : (
                  <p className="mt-2 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    <MapPin className="size-4 shrink-0" aria-hidden="true" />
                    Zone couverte 24h/24
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-muted-foreground">
            Cette liste n'est pas exhaustive. Nous intervenons dans toutes les communes
            d'Île-de-France.{" "}
            <Link to="/contact" className="font-semibold text-primary hover:underline">
              Contactez-nous
            </Link>{" "}
            pour confirmer votre zone.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <Reveal>
            <p className="eyebrow">Nos prestations</p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Services disponibles dans votre zone
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 40}>
                <Link
                  to={s.to}
                  className="surface-panel group flex h-full flex-col p-5 transition-colors hover:border-primary"
                >
                  <h3 className="font-display text-base font-black uppercase tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wide text-primary">
                    En savoir plus
                    <ArrowRight
                      className="size-3.5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <Reveal>
          <p className="eyebrow">Pourquoi nous choisir</p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
            Le même engagement dans les 8 départements
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {POURQUOI_NOUS.map((p, i) => (
            <Reveal key={p} delay={i * 50}>
              <li className="surface-panel flex h-full gap-3 p-5 text-foreground/90">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>{p}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <FaqSection items={[...ZONE_FAQ]} />

      <QuoteSection />
    </>
  );
}
