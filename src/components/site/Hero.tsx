import { useEffect, useState } from "react";
import { ShieldCheck, Clock, FileText, Zap } from "lucide-react";
import heroImg from "@/assets/hero-intervention.jpg";
import { CallButton, QuoteButton } from "./CallButtons";

const BADGES = [
  { icon: Clock, label: "Disponible 24h/24 • 7j/7" },
  { icon: FileText, label: "Devis gratuit" },
  { icon: ShieldCheck, label: "Assurance décennale" },
  { icon: Zap, label: "Intervention rapide" },
];

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setOffset(Math.min(window.scrollY, 600) * 0.12);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <img
          src={heroImg}
          alt="Technicien Hydro-Curage réalisant un curage haute pression sur une canalisation, de nuit, en Île-de-France"
          width={1600}
          height={1104}
          fetchPriority="high"
          decoding="async"
          className="size-full object-cover object-center"
          style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.06)` }}
        />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,oklch(0.16_0.012_250/0.96)_0%,oklch(0.16_0.012_250/0.86)_45%,oklch(0.16_0.012_250/0.35)_100%)]"
        aria-hidden="true"
      />
      <div className="grid-technique absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:pb-28 lg:pt-24">
        <p className="eyebrow animate-fade-up">
          Île-de-France • 75 77 78 91 92 93 94 95
        </p>
        <h1
          className="animate-fade-up mt-4 max-w-4xl font-display text-[2.15rem] font-black uppercase leading-[0.95] sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Canalisation bouchée&nbsp;?
          <span className="mt-2 block text-signal-gradient">
            Nous intervenons rapidement.
          </span>
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          style={{ animationDelay: "160ms" }}
        >
          Débouchage, curage, pompage et assainissement 24h/24, 7j/7 en Île-de-France.
        </p>

        <div
          className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          style={{ animationDelay: "240ms" }}
        >
          <CallButton />
          <QuoteButton />
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          {BADGES.map((b, i) => (
            <li
              key={b.label}
              className="animate-fade-up flex items-center gap-2 text-sm font-semibold text-foreground/90"
              style={{ animationDelay: `${320 + i * 90}ms` }}
            >
              <b.icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
              {b.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
