import { useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Phone, Send, MessageCircle } from "lucide-react";
import { COMPANY, SERVICES, DEPARTEMENTS } from "@/lib/site-data";
import { CallButton } from "./CallButtons";

const URGENCES = [
  "Normal — dans les prochains jours",
  "Urgent — aujourd'hui si possible",
  "Très urgent — intervention immédiate",
] as const;

/** Lieu du problème dans le logement ou le local. */
const EMPLACEMENTS = [
  "Salle de bain",
  "WC / toilettes",
  "Cuisine",
  "Buanderie / machine à laver",
  "Cave ou sous-sol",
  "Extérieur / jardin",
  "Regard ou tabouret",
  "Parking souterrain",
  "Colonne d'immeuble",
  "Local professionnel / restaurant",
  "Autre / je ne sais pas",
] as const;

const PRESTATIONS = [...SERVICES.map((s) => s.title), "Assurance décennale", "Autre"];

type Champs = {
  service: string;
  urgence: string;
  emplacement: string;
  nom: string;
  tel: string;
  email: string;
  ville: string;
  zone: string;
  message: string;
};

function lire(data: FormData): Champs {
  const get = (k: string) => String(data.get(k) ?? "").trim();
  return {
    service: get("service"),
    urgence: get("urgence"),
    emplacement: get("emplacement"),
    nom: get("nom"),
    tel: get("tel"),
    email: get("email"),
    ville: get("ville"),
    zone: get("zone"),
    message: get("message"),
  };
}

function recapitulatif(c: Champs): string[] {
  return [
    `Demande de devis — ${c.service}`,
    `Urgence : ${c.urgence}`,
    `Lieu d'intervention : ${c.ville || "non renseigné"} (${c.zone})`,
    `Lieu du problème : ${c.emplacement}`,
    `Problème : ${c.message || "non décrit"}`,
    `Nom : ${c.nom}`,
    `Téléphone : ${c.tel}`,
    `Email : ${c.email || "non renseigné"}`,
  ];
}

/**
 * Formulaire de demande de devis. L'envoi se fait par SMS ou par WhatsApp :
 * aucune donnée n'est stockée côté serveur, le message part depuis l'appareil du visiteur.
 */
export function QuoteForm({ defaultService }: { defaultService?: string }) {
  const search = useRouterState({ select: (s) => s.location.search }) as Record<string, unknown>;
  const urgenceImmediate = search?.["urgence"] === "immediat";

  const [envoye, setEnvoye] = useState<"" | "sms" | "whatsapp">("");
  const [service, setService] = useState(defaultService ?? PRESTATIONS[0]!);
  const [urgence, setUrgence] = useState<string>(urgenceImmediate ? URGENCES[2] : URGENCES[0]);

  const envoyer = (form: HTMLFormElement, canal: "sms" | "whatsapp") => {
    const champs = lire(new FormData(form));
    const lignes = recapitulatif(champs);
    if (canal === "whatsapp") {
      const texte = `Bonjour, je souhaite un devis gratuit.\n\n${lignes.join("\n")}`;
      window.open(
        `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(texte)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else {
      window.location.href = `sms:+33667980190?&body=${encodeURIComponent(lignes.join(" | "))}`;
    }
    setEnvoye(canal);
  };

  const champClass =
    "min-h-12 w-full rounded-lg border border-input bg-background px-4 py-3 text-base";

  return (
    <form
      className="surface-panel p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        envoyer(e.currentTarget, "sms");
      }}
    >
      <h2 className="font-display text-2xl font-black uppercase tracking-tight">
        Demander un devis gratuit
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Pour une urgence, appelez directement le {COMPANY.phone} — nous répondons 24h/24, 7j/7.
      </p>

      {urgenceImmediate && (
        <p
          role="status"
          className="mt-4 rounded-lg border border-primary/50 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary"
        >
          Demande d'intervention immédiate : nous traitons votre message en priorité.
        </p>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="mb-1.5 block text-sm font-semibold">
            Nom
          </label>
          <input id="nom" name="nom" required autoComplete="name" className={champClass} />
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
            className={champClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
            Email <span className="font-normal text-muted-foreground">(facultatif)</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={champClass} />
        </div>
        <div>
          <label htmlFor="ville" className="mb-1.5 block text-sm font-semibold">
            Lieu d'intervention — ville / code postal
          </label>
          <input
            id="ville"
            name="ville"
            autoComplete="address-level2"
            placeholder="Ex. Meaux 77100"
            className={champClass}
          />
        </div>
        <div>
          <label htmlFor="zone" className="mb-1.5 block text-sm font-semibold">
            Département
          </label>
          <select id="zone" name="zone" className={champClass}>
            {DEPARTEMENTS.map((d) => (
              <option key={d.code}>{`${d.code} — ${d.name}`}</option>
            ))}
          </select>
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
            className={champClass}
          >
            {PRESTATIONS.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="emplacement" className="mb-1.5 block text-sm font-semibold">
            Lieu du problème
          </label>
          <select id="emplacement" name="emplacement" className={champClass}>
            {EMPLACEMENTS.map((e) => (
              <option key={e}>{e}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="urgence" className="mb-1.5 block text-sm font-semibold">
            Niveau d'urgence
          </label>
          <select
            id="urgence"
            name="urgence"
            value={urgence}
            onChange={(e) => setUrgence(e.target.value)}
            className={champClass}
          >
            {URGENCES.map((u) => (
              <option key={u}>{u}</option>
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
            placeholder="Ex. l'eau remonte dans la douche depuis hier soir"
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base"
          />
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="submit"
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-signal-gradient px-6 font-display text-base font-extrabold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          <Send className="size-4" aria-hidden="true" />
          Envoyer ma demande
        </button>
        <button
          type="button"
          onClick={(e) => {
            const form = e.currentTarget.form;
            if (!form) return;
            if (!form.reportValidity()) return;
            envoyer(form, "whatsapp");
          }}
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-[oklch(0.72_0.2_145)] bg-[oklch(0.72_0.2_145)]/15 px-6 font-display text-base font-extrabold uppercase tracking-wide text-[oklch(0.82_0.16_145)] transition-colors hover:bg-[oklch(0.72_0.2_145)]/25"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Envoyer sur WhatsApp
        </button>
        <a
          href={COMPANY.phoneHref}
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-border bg-surface-2 px-6 font-display text-base font-bold uppercase text-foreground sm:col-span-2"
        >
          <Phone className="size-4 text-primary" aria-hidden="true" />
          {COMPANY.phone}
        </a>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        En soumettant ce formulaire, vous acceptez d'être recontacté par nos services. Vos données
        sont traitées conformément au RGPD.
      </p>

      <p aria-live="polite" className="mt-3 min-h-5 text-sm text-muted-foreground">
        {envoye === "sms" &&
          "Votre message est prêt à être envoyé depuis votre téléphone. Pour une urgence, appelez-nous directement."}
        {envoye === "whatsapp" &&
          "WhatsApp s'ouvre avec votre demande pré-remplie. Il ne vous reste qu'à l'envoyer."}
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
            Décrivez votre situation : nous vous indiquons l'intervention adaptée et les conditions
            de passage en Île-de-France, 24h/24 et 7j/7.
          </p>
          <CallButton className="mt-8 w-full sm:w-auto" />
        </div>
        <QuoteForm {...(defaultService ? { defaultService } : {})} />
      </div>
    </section>
  );
}
