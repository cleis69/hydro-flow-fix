import { FAQ } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function FaqSection({ items = FAQ }: { items?: { q: string; a: string }[] }) {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
      <Reveal>
        <p className="eyebrow">Questions fréquentes</p>
        <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-5xl">
          Vos questions, nos réponses
        </h2>
      </Reveal>
      <div className="mt-10 divide-y divide-border border-y border-border">
        {items.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-bold uppercase tracking-tight">
                {f.q}
                <span
                  className="grid size-8 shrink-0 place-items-center rounded-full border border-border text-primary transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
