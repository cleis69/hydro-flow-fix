import { useState } from "react";
import { Phone, Send } from "lucide-react";
import { COMPANY, SERVICES, DEPARTEMENTS } from "@/lib/site-data";
import { CallButton } from "./CallButtons";

/**
 * Formulaire de demande de devis : compose un SMS pré-rempli vers l'entreprise.
 * Aucune donnée n'est stockée côté serveur.
 */
export function QuoteForm({ defaultService }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState(defaultService ?? SERVICES[0]!.title);

  return (
    <form
      className="surface-panel p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const body = [
          `Demande de devis — ${data.get("service")}`,
          `Nom : ${data.get("nom")}`,
          `Téléphone : ${data.get("tel")}`,
          `Secteur : ${data.get("zone")}`,
          `Message : ${data.get("message")}`,
        ].join(" | ");
        window.location.href = `sms:+33667980190?&body=${encodeURIComponent(body)}`;
        setSent(true);
      }}
    >
      <h2 className="font-display text-2xl font-black uppercase tracking-tight">
        Demander un devis gratuit
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Pour une urgence, appelez directement le {COMPANY.phone} — nous répondons 24h/24, 7j/7.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="mb-1.5 block text-sm font-semibold">
            Nom
          </label>
          <input
            id="nom"
            name="nom"
            required
            autoComplete="name"
            className="min-h-12 w-full rounded-lg border border-input bg-background px-4 py-3 text-base"
          />
        </div>
        <div>
          <label htmlFor="tel" className="mb-1.5 block text-sm font-semibold">
            Téléphone
          </label>
          <input
            id="tel"
            name="tel"
            type="tel"
            required
            autoComplete="tel"
            className="min-h-12 w-full rounded-lg border border-input bg-background px-4 py-3 text-base"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-semibold">
            Prestation
          </label>
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="min-h-12 w-full rounded-lg border border-input bg-background px-4 py-3 text-base"
          >
            {SERVICES.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="zone" className="mb-1.5 block text-sm font-semibold">
            Département
          </label>
          <select
            id="zone"
            name="zone"
            className="min-h-12 w-full rounded-lg border border-input bg-background px-4 py-3 text-base"
          >
            {DEPARTEMENTS.map((d) => (
              <option key={d.code}>{`${d.code} — ${d.name}`}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
            Décrivez votre problème
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-signal-gradient px-6 font-display text-base font-extrabold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          <Send className="size-4" aria-hidden="true" />
          Envoyer ma demande
        </button>
        <a
          href={COMPANY.phoneHref}
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-border bg-surface-2 px-6 font-display text-base font-bold uppercase text-foreground"
        >
          <Phone className="size-4 text-primary" aria-hidden="true" />
          {COMPANY.phone}
        </a>
      </div>

      <p aria-live="polite" className="mt-3 min-h-5 text-sm text-muted-foreground">
        {sent
          ? "Votre message est prêt à être envoyé depuis votre téléphone. Pour une urgence, appelez-nous directement."
          : ""}
      </p>
    </form>
  );
}

export function QuoteSection({ defaultService }: { defaultService?: string }) {
  return (
    <section id="devis" className="border-y border-border bg-surface/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-5xl">
            Une urgence&nbsp;? Un devis&nbsp;? Nous répondons.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Décrivez votre situation : nous vous indiquons l'intervention adaptée et les
            conditions de passage en Île-de-France, 24h/24 et 7j/7.
          </p>
          <CallButton className="mt-8 w-full sm:w-auto" />
        </div>
        <QuoteForm {...(defaultService ? { defaultService } : {})} />
      </div>
    </section>
  );
}
