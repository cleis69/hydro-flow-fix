import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Check } from "lucide-react";
import { PageHeader } from "@/components/site/PageShell";
import { QuoteSection } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";
import { CallButton, QuoteButton } from "@/components/site/CallButtons";
import { TrustMarquee } from "@/components/site/Marquee";
import { URGENCE } from "@/lib/page-data";
import { IMAGES } from "@/lib/images";
import { COMPANY } from "@/lib/site-data";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

const META = {
  title: "Urgence canalisation 24h/24 — 06 67 98 01 90 | Hydro-Curage",
  description:
    "Canalisation bouchée, refoulement, inondation ? Intervention d'urgence 24h/24 et 7j/7 en Île-de-France, 30 minutes en zone urbaine. Diagnostic gratuit.",
  url: "/urgence",
};

export const Route = createFileRoute("/urgence")({
  head: () => ({
    ...pageMeta(META),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "Urgence 24h/24", item: "/urgence" },
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
        eyebrow="Intervention d'urgence"
        title={URGENCE.title}
        intro={URGENCE.intro}
        breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Urgence 24h/24" }]}
      />

      <TrustMarquee />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {URGENCE.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="surface-panel h-full p-6">
                <p className="font-display text-2xl font-black uppercase leading-tight text-primary sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <AlertTriangle className="size-6 shrink-0 text-primary" aria-hidden="true" />
              <p className="eyebrow">Quand appeler en urgence</p>
            </div>
            <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Les situations qui ne peuvent pas attendre
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {URGENCE.signaux.map((s, i) => (
              <Reveal key={s} delay={i * 50}>
                <li className="surface-panel flex h-full gap-3 p-5 text-foreground/90">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{s}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <Reveal>
          <p className="eyebrow">Déroulé</p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
            Comment se passe une intervention d'urgence
          </h2>
        </Reveal>
        <ol className="mt-10 grid gap-4 lg:grid-cols-5">
          {URGENCE.etapes.map((e, i) => (
            <Reveal key={e.title} delay={i * 70}>
              <li className="surface-panel h-full p-6">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-black uppercase leading-tight tracking-tight">
                  {e.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
          <Reveal>
            <p className="eyebrow">Tarifs</p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Tarifs des interventions d'urgence
            </h2>
            <p className="mt-4 text-muted-foreground">{URGENCE.tarifsIntro}</p>
            <ul className="mt-6 space-y-3">
              {URGENCE.tarifs.map((t) => (
                <li key={t} className="flex gap-3 text-foreground/90">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <aside className="surface-panel overflow-hidden">
              <img
                src={IMAGES.urgenceNuit.src}
                alt={IMAGES.urgenceNuit.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[16/9] w-full border-b border-border object-cover"
              />
              <div className="p-6 lg:p-8">
                <h2 className="font-display text-2xl font-black uppercase leading-tight tracking-tight">
                  Ne restez pas avec une canalisation bouchée
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Plus vous attendez, plus ça empire. Un coup de fil et on est chez vous —{" "}
                  {COMPANY.availabilityLong}.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <CallButton />
                  <QuoteButton />
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
