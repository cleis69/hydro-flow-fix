import type { ReactNode } from "react";
import { Breadcrumbs } from "./ServicePage";
import { CallButton, QuoteButton } from "./CallButtons";

/** En-tête de page standard, aligné sur la charte du site. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  cta = true,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  breadcrumbs: { label: string; to?: string }[];
  cta?: boolean;
}) {
  return (
    <section className="border-b border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-display text-3xl font-black uppercase leading-[1.02] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
        {cta && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <QuoteButton />
          </div>
        )}
      </div>
    </section>
  );
}

/** Corps de page en prose, typographie du site. */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <div className="space-y-8 text-muted-foreground [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-black [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:text-foreground [&_li]:leading-relaxed [&_p]:leading-relaxed">
        {children}
      </div>
    </section>
  );
}
