import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Droplets,
  ShowerHead,
  Waves,
  Wind,
  ShieldCheck,
  Truck,
  CircleDot,
  Container,
} from "lucide-react";
import { PROBLEMS } from "@/lib/site-data";
import { Reveal } from "./Reveal";

const ICONS = {
  toilet: Container,
  sink: Droplets,
  shower: ShowerHead,
  pipe: CircleDot,
  backflow: Waves,
  smell: Wind,
  shield: ShieldCheck,
  truck: Truck,
} as const;

export function ProblemGrid() {
  return (
    <section id="probleme" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <Reveal>
        <p className="eyebrow">Diagnostic express</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-tight sm:text-5xl">
          Un problème de canalisation&nbsp;? Identifiez votre besoin.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Choisissez la situation qui correspond à la vôtre : nous vous orientons vers
          l'intervention adaptée, ou appelez directement pour une prise en charge immédiate.
        </p>
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROBLEMS.map((p, i) => {
          const Icon = ICONS[p.icon];
          return (
            <Reveal as="li" key={p.title} delay={i * 60}>
              <Link
                to={p.to}
                className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-surface-2 hover:shadow-lift"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-background/60 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-lg font-bold uppercase tracking-tight">
                    {p.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">{p.desc}</span>
                </span>
                <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary">
                  Voir la solution
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
