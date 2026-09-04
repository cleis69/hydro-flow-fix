import { useCallback, useRef, useState } from "react";
import avant from "@/assets/avant-curage.jpg";
import apres from "@/assets/apres-curage.jpg";
import { Reveal } from "./Reveal";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <Reveal>
        <p className="eyebrow">Résultat</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-tight sm:text-5xl">
          Avant / après curage
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Déplacez le curseur pour comparer une canalisation obstruée et la même canalisation
          après hydrocurage.
        </p>
      </Reveal>

      <Reveal>
        <div
          ref={ref}
          className="relative mt-10 aspect-[4/3] max-h-[560px] w-full touch-pan-y select-none overflow-hidden rounded-3xl border border-border sm:aspect-[16/9]"
          onPointerDown={(e) => {
            dragging.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            setFromClientX(e.clientX);
          }}
          onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
          onPointerUp={() => (dragging.current = false)}
          onPointerCancel={() => (dragging.current = false)}
        >
          <img
            src={apres}
            alt="Intérieur d'une canalisation propre après hydrocurage"
            width={1200}
            height={912}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img
              src={avant}
              alt="Intérieur d'une canalisation obstruée par les graisses et les dépôts avant curage"
              width={1200}
              height={912}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
          </div>

          <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-foreground">
            Avant — canalisation obstruée
          </span>
          <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-primary px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground">
            Après — canalisation nettoyée
          </span>

          <div
            className="pointer-events-none absolute inset-y-0 w-1 bg-primary"
            style={{ left: `${pos}%` }}
            aria-hidden="true"
          />
          <input
            type="range"
            min={0}
            max={100}
            value={Math.round(pos)}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Comparer avant et après curage"
            className="absolute inset-x-0 bottom-4 mx-auto w-[85%] cursor-ew-resize accent-[oklch(0.7_0.19_45)]"
          />
        </div>
      </Reveal>
    </section>
  );
}
