import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/site/PageShell";
import { QuoteSection } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";
import { StatCounter } from "@/components/site/StatCounter";
import { TrustMarquee } from "@/components/site/Marquee";
import { ABOUT } from "@/lib/page-data";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

const META = {
  title: "À propos d'Hydro-Curage | Débouchage et curage en Île-de-France",
  description:
    "Plus de 10 ans d'expérience, 5000 interventions, une équipe formée et du matériel professionnel. Hydro-Curage intervient 24h/24 et 7j/7 en Île-de-France.",
  url: "/a-propos",
};

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    ...pageMeta(META),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "À propos", item: "/a-propos" },
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
      <PageHeader
        eyebrow="Qui sommes-nous"
        title={ABOUT.title}
        intro={ABOUT.intro}
        breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "À propos" }]}
      />

      <TrustMarquee />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <StatCounter
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                decimals={Number.isInteger(s.value) ? 0 : 1}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
          <Reveal>
            <p className="eyebrow">Notre histoire</p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Comment on en est arrivés là
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground">
              {ABOUT.histoire.map((p) => (
                <p key={p.slice(0, 40)} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <Reveal>
          <p className="eyebrow">Nos valeurs</p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
            Ce sur quoi on ne transige pas
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {ABOUT.valeurs.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <article className="surface-panel h-full p-6">
                <h3 className="font-display text-xl font-black uppercase tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{v.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <Reveal>
            <p className="eyebrow">Notre équipement</p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Du matériel professionnel
            </h2>
            <p className="mt-4 text-muted-foreground">{ABOUT.equipementIntro}</p>
            <ul className="mt-6 space-y-3">
              {ABOUT.equipement.map((e) => (
                <li key={e} className="flex gap-3 text-foreground/90">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <aside className="surface-panel h-full p-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-6 shrink-0 text-primary" aria-hidden="true" />
                <h2 className="font-display text-xl font-black uppercase tracking-tight">
                  Certifications et garanties
                </h2>
              </div>
              <ul className="mt-6 space-y-3">
                {ABOUT.certifications.map((c) => (
                  <li key={c} className="flex gap-3 text-foreground/90">
                    <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
