import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { QuoteSection } from "@/components/site/QuoteForm";
import { TrustMarquee } from "@/components/site/Marquee";
import { Breadcrumbs } from "@/components/site/ServicePage";
import { CallButton, QuoteButton } from "@/components/site/CallButtons";
import { Reveal } from "@/components/site/Reveal";
import { TARIFS_GARANTIES, TARIFS_GRILLE, TARIFS_POURQUOI } from "@/lib/page-data";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

const FACTEURS = [
  {
    title: "La nature de l'intervention",
    desc: "Un débouchage ponctuel, un curage complet ou un pompage ne mobilisent pas le même matériel.",
  },
  {
    title: "L'accessibilité du réseau",
    desc: "Regard accessible, parking souterrain, cour intérieure ou rue étroite : l'accès conditionne le véhicule utilisé.",
  },
  {
    title: "Le diamètre et la longueur",
    desc: "Une colonne d'immeuble ou un réseau enterré de gros diamètre demande un matériel plus puissant.",
  },
  {
    title: "L'horaire d'intervention",
    desc: "Nous intervenons 24h/24 et 7j/7 ; l'horaire est précisé lors de la demande.",
  },
];

export const Route = createFileRoute("/tarifs")({
  head: () => ({
    ...pageMeta({
      title: "Tarifs débouchage et curage | Prix transparents | Hydro-Curage",
      description:
        "Des prix transparents, sans surprise : devis gratuit établi sur place avant toute intervention, prix fixé avant de commencer, aucun frais caché. Île-de-France, 24h/24.",
      url: "/tarifs",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "Tarifs", item: "/tarifs" },
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
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Tarifs" }]} />
          <p className="eyebrow">Devis gratuit</p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-black uppercase leading-[1.02] sm:text-5xl lg:text-6xl">
            Des prix transparents, sans surprise
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Le devis est gratuit et établi sur place avant toute intervention. Vous connaissez le
            prix exact avant que nous commencions. Aucun frais caché.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <QuoteButton />
          </div>
        </div>
      </section>

      <TrustMarquee />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {TARIFS_GARANTIES.map((g, i) => (
            <Reveal key={g.title} delay={i * 70}>
              <div className="surface-panel h-full p-6">
                <Check className="size-5 text-primary" aria-hidden="true" />
                <h2 className="mt-4 font-display text-xl font-bold uppercase tracking-tight">
                  {g.title}
                </h2>
                <p className="mt-2 text-muted-foreground">{g.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:py-20">
          <Reveal>
            <p className="eyebrow">Grille tarifaire</p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Nos prestations
            </h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            {TARIFS_GRILLE.map((cat, i) => (
              <Reveal key={cat.categorie} delay={i * 60}>
                <div className="surface-panel overflow-hidden">
                  <h3 className="border-b border-border bg-surface-2/60 px-6 py-4 font-display text-lg font-black uppercase tracking-tight">
                    {cat.categorie}
                  </h3>
                  <ul className="divide-y divide-border">
                    {cat.lignes.map((l) => (
                      <li
                        key={l.label}
                        className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-6 py-4"
                      >
                        <span className="text-foreground/90">{l.label}</span>
                        <span className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                          {l.prix}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="surface-panel mt-10 p-6 lg:p-8">
              <h3 className="font-display text-xl font-black uppercase tracking-tight">
                Pourquoi «&nbsp;sur devis&nbsp;»&nbsp;?
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{TARIFS_POURQUOI}</p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Supplément horaire de nuit (22h-6h) : communiqué dans le devis.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <Reveal>
          <h2 className="max-w-3xl font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
            Ce qui détermine le prix d'une intervention
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {FACTEURS.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 80}>
              <div className="surface-panel h-full p-6">
                <Check className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <QuoteSection />
    </>
  );
}
