import { useState } from "react";
import compactImg from "@/assets/hydrocureur-compact.jpg";
import { Reveal } from "./Reveal";
import { CallButton } from "./CallButtons";
import { cn } from "@/lib/utils";

const HOTSPOTS = [
  {
    id: "pression",
    x: 32,
    y: 62,
    title: "300 bars",
    desc: "Pompe haute pression embarquée pour le curage des canalisations.",
  },
  {
    id: "format",
    x: 74,
    y: 40,
    title: "Format compact",
    desc: "Gabarit d'un utilitaire : accès aux parkings souterrains et rues étroites.",
  },
  {
    id: "polyvalence",
    x: 30,
    y: 33,
    title: "Pompage + hydrocurage",
    desc: "Enrouleur, flexibles et pompage réunis sur un seul véhicule.",
  },
];

const ACCESS = [
  "Parkings souterrains",
  "Rues étroites",
  "Voies privées",
  "Cours intérieures",
  "Accès difficiles",
];

export function CompactUnit() {
  const [active, setActive] = useState<string>("pression");
  const current = HOTSPOTS.find((h) => h.id === active) ?? HOTSPOTS[0]!;

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <p className="eyebrow">Hydrocureur compact</p>
          <h2 className="mt-3 max-w-4xl font-display text-3xl font-black uppercase leading-[1.02] sm:text-5xl lg:text-6xl">
            Nous pouvons intervenir là où d'autres ne peuvent pas passer.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface">
              <img
                src={compactImg}
                alt="Hydrocureur compact Hydro-Curage équipé d'un enrouleur et d'une pompe haute pression, stationné dans un parking souterrain"
                width={1408}
                height={1008}
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
              {HOTSPOTS.map((h) => (
                <button
                  key={h.id}
                  type="button"
                  onMouseEnter={() => setActive(h.id)}
                  onFocus={() => setActive(h.id)}
                  onClick={() => setActive(h.id)}
                  aria-pressed={active === h.id}
                  aria-label={`${h.title} : ${h.desc}`}
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  className={cn(
                    "absolute grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 transition-transform duration-200 hover:scale-110",
                    active === h.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-primary/70 bg-background/80 text-primary",
                  )}
                >
                  <span className="size-2 rounded-full bg-current" aria-hidden="true" />
                  {active !== h.id && (
                    <span
                      className="pulse-ring absolute inset-0 rounded-full border border-primary"
                      aria-hidden="true"
                    />
                  )}
                </button>
              ))}
              <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-2xl border border-border bg-background/90 p-4 backdrop-blur">
                <p className="font-display text-lg font-black uppercase tracking-tight text-primary">
                  {current.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{current.desc}</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <dl className="grid grid-cols-2 gap-3">
                <div className="surface-panel p-5">
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Pression
                  </dt>
                  <dd className="mt-1 font-display text-4xl font-black text-primary">300 bars</dd>
                </div>
                <div className="surface-panel p-5">
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Gabarit
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-black uppercase">Compact</dd>
                </div>
                <div className="surface-panel col-span-2 p-5">
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Capacités
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-black uppercase">
                    Pompage + hydrocurage
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={120}>
              <h3 className="mt-8 font-display text-xl font-bold uppercase tracking-tight">
                Accès possibles
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {ACCESS.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    {a}
                  </li>
                ))}
              </ul>
              <CallButton className="mt-8 w-full sm:w-auto" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
