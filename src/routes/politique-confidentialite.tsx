import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/site/PageShell";
import { COMPANY } from "@/lib/site-data";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

const META = {
  title: "Politique de confidentialité | Hydro-Curage",
  description:
    "Politique de confidentialité d'Hydro-Curage : collecte, utilisation et conservation des données personnelles, droits RGPD et cookies.",
  url: "/politique-confidentialite",
};

export const Route = createFileRoute("/politique-confidentialite")({
  head: () => ({
    ...pageMeta(META),
    meta: [...pageMeta(META).meta, { name: "robots", content: "noindex, follow" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "Politique de confidentialité", item: "/politique-confidentialite" },
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
        title="Politique de confidentialité"
        breadcrumbs={[
          { label: "Accueil", to: "/" },
          { label: "Politique de confidentialité" },
        ]}
        cta={false}
      />
      <Prose>
        <div>
          <h2>1. Collecte des données</h2>
          <p className="mt-4">
            Nous collectons les données personnelles que vous nous transmettez
            volontairement via notre formulaire de contact :
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>nom et prénom</li>
            <li>adresse email</li>
            <li>numéro de téléphone</li>
            <li>adresse postale (si renseignée)</li>
            <li>description de votre demande</li>
          </ul>
          <p className="mt-4">
            Nous collectons également des données de navigation de manière automatique
            (adresse IP, type de navigateur, pages visitées) via des cookies et outils
            d'analyse.
          </p>
        </div>

        <div>
          <h2>2. Utilisation des données</h2>
          <p className="mt-4">Vos données personnelles sont utilisées pour :</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>répondre à vos demandes de devis et de contact</li>
            <li>planifier et réaliser nos interventions</li>
            <li>améliorer nos services et notre site internet</li>
            <li>respecter nos obligations légales et réglementaires</li>
          </ul>
          <p className="mt-4">
            Vos données ne sont jamais vendues, louées ou transmises à des tiers à des fins
            commerciales.
          </p>
        </div>

        <div>
          <h2>3. Conservation des données</h2>
          <p className="mt-4">
            Vos données personnelles sont conservées pour une durée maximale de 3 ans à
            compter de votre dernier contact avec nous. Les données relatives à la
            facturation sont conservées pendant 10 ans conformément aux obligations
            comptables. Au-delà de ces délais, vos données sont supprimées ou anonymisées
            de manière irréversible.
          </p>
        </div>

        <div>
          <h2>4. Vos droits</h2>
          <p className="mt-4">
            Conformément au RGPD, vous disposez des droits suivants concernant vos données
            personnelles :
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>droit d'accès (obtenir une copie de vos données)</li>
            <li>droit de rectification (corriger des données inexactes)</li>
            <li>droit de suppression (demander l'effacement de vos données)</li>
            <li>droit d'opposition (vous opposer au traitement de vos données)</li>
            <li>droit à la portabilité (recevoir vos données dans un format structuré)</li>
          </ul>
          <p className="mt-4">
            Pour exercer ces droits, contactez-nous à l'adresse :{" "}
            <a href={COMPANY.emailHref} className="text-foreground hover:text-primary">
              {COMPANY.email}
            </a>{" "}
            ou par courrier à [Adresse].
          </p>
          <p className="mt-4">
            En cas de litige, vous pouvez introduire une réclamation auprès de la CNIL
            (Commission Nationale de l'Informatique et des Libertés).
          </p>
        </div>

        <div>
          <h2>5. Cookies</h2>
          <p className="mt-4">
            Notre site utilise des cookies pour améliorer votre expérience de navigation et
            analyser le trafic. Les types de cookies utilisés sont :
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>cookies essentiels (nécessaires au fonctionnement du site)</li>
            <li>cookies analytiques (pour comprendre comment les visiteurs utilisent le site)</li>
          </ul>
          <p className="mt-4">
            Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté
            lorsqu'un cookie est déposé. Le refus des cookies essentiels peut limiter votre
            accès à certaines fonctionnalités du site.
          </p>
        </div>
      </Prose>
    </>
  );
}
