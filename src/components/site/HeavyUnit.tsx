import { useEffect, useRef, useState } from "react";
import truckImg from "@/assets/camion-hydrocureur.jpg";
import { Reveal } from "./Reveal";
import { QuoteButton, CallButton } from "./CallButtons";

const SPECS = [
  { value: "Jusqu'à 350 bars", label: "Pression de curage" },
  { value: "Jusqu'à DN 600", label: "Diamètre de canalisation" },
  { value: "Pompage", label: "Eaux et matières" },
  { value: "Curage préventif", label: "Entretien planifié" },
];

export function HeavyUnit() {
  const ref = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = el.getBoundingClientRect();
        const p = 1 - Math.min(Math.max(rect.top / window.innerHeight, 0), 1);
        setZoom(1 + p * 0.08);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div>
            <Reveal>
              <p className="eyebrow">Matériel lourd</p>
              <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-5xl">
                Camion hydrocureur pour les réseaux les plus exigeants.
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Pour les gros diamètres et les volumes importants, nous mobilisons le camion
                hydrocureur : curage haute pression et pompage sur un même véhicule.
              </p>
            </Reveal>
            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              {SPECS.map((s, i) => (
                <Reveal key={s.value} delay={i * 90}>
                  <div className="surface-panel h-full p-5">
                    <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {s.label}
                    </dt>
                    <dd className="mt-1 font-display text-xl font-black uppercase text-primary">
                      {s.value}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
            <Reveal delay={160}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallButton />
                <QuoteButton label="Devis curage" />
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div
              ref={ref}
              className="overflow-hidden rounded-3xl border border-border bg-surface"
            >
              <img
                src={truckImg}
                alt="Camion hydrocureur Hydro-Curage équipé pour le curage haute pression et le pompage"
                width={1408}
                height={1008}
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
                style={{ transform: `scale(${zoom})`, transition: "transform 120ms linear" }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
