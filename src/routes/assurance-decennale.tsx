import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/site/PageShell";
import { QuoteSection } from "@/components/site/QuoteForm";
import { FaqSection } from "@/components/site/FaqSection";
import { Reveal } from "@/components/site/Reveal";
import { TrustMarquee } from "@/components/site/Marquee";
import { DECENNALE } from "@/lib/page-data";
import { pageMeta, breadcrumbLd, faqLd, serviceLd } from "@/lib/seo";

const META = {
  title: "Assurance décennale | Travaux garantis 10 ans | Hydro-Curage",
  description:
    "Tous nos travaux de canalisation, relevage, bac à graisse et plomberie sont couverts par une assurance décennale. Attestation fournie sur demande.",
  url: "/assurance-decennale",
};

export const Route = createFileRoute("/assurance-decennale")({
  head: () => ({
    ...pageMeta(META),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "Services", item: "/services" },
            { name: "Assurance décennale", item: "/assurance-decennale" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(serviceLd("Assurance décennale", DECENNALE.intro)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqLd([...DECENNALE.faq])),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Garanties"
        title="Assurance décennale en Île-de-France"
        intro={DECENNALE.intro}
        breadcrumbs={[
          { label: "Accueil", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Assurance décennale" },
        ]}
      />

      <TrustMarquee />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <Reveal>
            <div className="space-y-10">
              {DECENNALE.blocks.map((b) => (
                <section key={b.title}>
                  <h2 className="font-display text-2xl font-black uppercase tracking-tight sm:text-3xl">
                    {b.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{b.text}</p>
                </section>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <aside className="surface-panel p-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-6 shrink-0 text-primary" aria-hidden="true" />
                <h2 className="font-display text-xl font-black uppercase tracking-tight">
                  Ce que couvre notre décennale
                </h2>
              </div>
              <ul className="mt-6 space-y-3">
                {DECENNALE.points.map((p) => (
                  <li key={p} className="flex gap-3 text-foreground/90">
                    <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>

      <FaqSection items={[...DECENNALE.faq]} />

      <QuoteSection defaultService="Assurance décennale" />
    </>
  );
}
