import { TRUST } from "@/lib/site-data";

export function TrustMarquee() {
  const items = [...TRUST, ...TRUST];
  return (
    <section
      aria-label="Nos engagements"
      className="border-y border-border bg-surface/60 py-4 overflow-hidden"
    >
      <div className="marquee-track gap-8 sm:gap-12">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= TRUST.length ? "true" : undefined}
            className="flex shrink-0 items-center gap-8 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground sm:gap-12 sm:text-sm"
          >
            {item}
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  );
}
