import { useEffect, useRef, useState } from "react";

/**
 * Compteur animé au scroll.
 * La valeur finale est rendue côté serveur (SEO + sans JavaScript) ; l'animation
 * ne se déclenche que si l'élément est encore sous la ligne de flottaison au montage.
 */
export function StatCounter({
  value,
  suffix = "",
  label,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Déjà visible au chargement : on garde la valeur finale, pas d'animation.
    if (el.getBoundingClientRect().top <= window.innerHeight) return;

    setDisplay(0);
    let frame = 0;
    let done = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || done) return;
        done = true;
        observer.disconnect();
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(p < 1 ? value * eased : value);
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div ref={ref} className="surface-panel p-6">
      <p className="font-display text-4xl font-black tabular-nums text-primary sm:text-5xl">
        {display.toFixed(decimals).replace(".", ",")}
        {suffix}
      </p>
      <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
