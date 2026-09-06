import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { PageHeader, Prose } from "@/components/site/PageShell";
import { COMPANY } from "@/lib/site-data";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    ...pageMeta({
      title: "Mentions légales | Hydro-Curage",
      description:
        "Mentions légales du site Hydro-Curage : éditeur, hébergement, propriété intellectuelle et traitement des données personnelles.",
      url: "/mentions-legales",
    }),
    meta: [
      ...pageMeta({
        title: "Mentions légales | Hydro-Curage",
        description:
          "Mentions légales du site Hydro-Curage : éditeur, hébergement, propriété intellectuelle et traitement des données personnelles.",
        url: "/mentions-legales",
      }).meta,
      { name: "robots", content: "noindex, follow" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "Mentions légales", item: "/mentions-legales" },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Informations légales"
        title="Mentions légales"
        breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Mentions légales" }]}
        cta={false}
      />
      <Prose>
        <p className="flex items-start gap-3 rounded-xl border border-border bg-surface/60 p-4 text-sm">
          <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>
            Les éléments entre crochets [ ] restent à compléter par l'entreprise avant la
            mise en ligne définitive du site.
          </span>
        </p>

        <div>
          <h2>1. Éditeur du site</h2>
          <ul className="mt-4 space-y-1.5">
            <li>Raison sociale : [Nom de la société]</li>
            <li>Forme juridique : [SAS / SARL / Auto-entrepreneur]</li>
            <li>SIRET : [SIRET]</li>
            <li>Adresse : [Adresse]</li>
            <li>
              Téléphone :{" "}
              <a href={COMPANY.phoneHref} className="text-foreground hover:text-primary">
                {COMPANY.phone}
              </a>
            </li>
            <li>
              Email :{" "}
              <a href={COMPANY.emailHref} className="text-foreground hover:text-primary">
                {COMPANY.email}
              </a>
            </li>
            <li>Directeur de la publication : [Nom du directeur]</li>
          </ul>
        </div>

        <div>
          <h2>2. Hébergement</h2>
          <ul className="mt-4 space-y-1.5">
            <li>Hébergeur : [Nom de l'hébergeur]</li>
            <li>Adresse : [Adresse de l'hébergeur]</li>
            <li>Téléphone : [Téléphone de l'hébergeur]</li>
          </ul>
        </div>

        <div>
          <h2>3. Propriété intellectuelle</h2>
          <p className="mt-4">
            L'ensemble du contenu de ce site (textes, images, logos, icônes, éléments
            graphiques, vidéos) est la propriété exclusive de [Nom de la société] ou de ses
            partenaires. Toute reproduction, représentation, modification, publication,
            adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le
            procédé utilisé, est interdite sauf autorisation écrite préalable de [Nom de la
            société].
          </p>
          <p className="mt-4">
            Toute exploitation non autorisée du site ou de l'un quelconque des éléments
            qu'il contient sera considérée comme constitutive d'une contrefaçon et
            poursuivie conformément aux dispositions des articles L.335-2 et suivants du
            Code de Propriété Intellectuelle.
          </p>
        </div>

        <div>
          <h2>4. Données personnelles</h2>
          <p className="mt-4">
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la
            loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d'un
            droit d'accès, de rectification, de suppression et d'opposition aux données
            personnelles vous concernant.
          </p>
          <p className="mt-4">
            Les informations collectées via le formulaire de contact sont destinées
            exclusivement à [Nom de la société] et ne sont jamais transmises à des tiers.
            Elles sont conservées pour une durée maximale de 3 ans à compter du dernier
            contact.
          </p>
          <p className="mt-4">
            Pour exercer vos droits, vous pouvez nous contacter par email à l'adresse :{" "}
            <a href={COMPANY.emailHref} className="text-foreground hover:text-primary">
              {COMPANY.email}
            </a>{" "}
            ou par courrier à l'adresse : [Adresse].
          </p>
        </div>
      </Prose>
    </>
  );
}
