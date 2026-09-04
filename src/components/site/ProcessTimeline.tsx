import { Reveal } from "./Reveal";

const STEPS = [
  { n: "01", title: "Vous nous appelez", desc: "Décrivez votre problème." },
  {
    n: "02",
    title: "Diagnostic",
    desc: "Notre technicien identifie l'origine du problème.",
  },
  { n: "03", title: "Intervention", desc: "Nous réalisons l'intervention adaptée." },
  {
    n: "04",
    title: "Vérification",
    desc: "Nous contrôlons le résultat et nettoyons la zone.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <p className="eyebrow">Déroulé</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-tight sm:text-5xl">
            Comment se passe une intervention
          </h2>
        </Reveal>

        <ol className="relative mt-12 grid gap-6 lg:grid-cols-4">
          <span
            className="absolute left-0 right-0 top-8 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 120} className="relative">
              <span className="relative z-10 grid size-16 place-items-center rounded-2xl border border-border bg-background font-display text-xl font-black text-primary">
                {s.n}
              </span>
              <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
