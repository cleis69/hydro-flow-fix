import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { QuoteSection } from "@/components/site/QuoteForm";
import { TrustMarquee } from "@/components/site/Marquee";
import { Breadcrumbs } from "@/components/site/ServicePage";
import { CallButton, QuoteButton } from "@/components/site/CallButtons";
import { Reveal } from "@/components/site/Reveal";
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
      title: "Tarifs et devis gratuit | Hydro-Curage",
      description:
        "Comment est établi le prix d'un débouchage ou d'un curage en Île-de-France, et comment obtenir un devis gratuit auprès d'Hydro-Curage.",
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
            Un prix annoncé avant l'intervention
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Chaque situation est différente : le devis est établi gratuitement en fonction de
            votre besoin réel, sans engagement.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <QuoteButton />
          </div>
        </div>
      </section>

      <TrustMarquee />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
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
