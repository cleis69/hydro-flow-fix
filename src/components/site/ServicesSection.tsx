import { SERVICES } from "@/lib/site-data";
import { ServiceCard } from "./ServiceCard";
import { Reveal } from "./Reveal";

export function ServicesSection() {
  const featured = SERVICES.filter((s) => s.featured);
  const others = SERVICES.filter((s) => !s.featured);

  return (
    <section id="services" className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="eyebrow">Nos prestations</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-tight sm:text-5xl">
              Des interventions techniques, du dépannage au curage lourd.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Une équipe formée et du matériel professionnel adapté à chaque configuration de
            réseau, en logement, en copropriété comme en site professionnel.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80} className="h-full">
              <ServiceCard service={s} index={SERVICES.indexOf(s)} emphasis />
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60} className="h-full">
              <ServiceCard service={s} index={SERVICES.indexOf(s)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
