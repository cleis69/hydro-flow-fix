import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/site-data";
import { pageMeta, serviceLd, breadcrumbLd, faqLd } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "debouchage-canalisation")!;

const LOCAL_FAQ = [
  {
    q: "Intervenez-vous en copropriété dans les Hauts-de-Seine ?",
    a: "Oui, aussi bien sur les parties privatives que sur les colonnes et réseaux communs, avec l'accord du syndic ou du gestionnaire.",
  },
  {
    q: "Pouvez-vous intervenir dans les parkings d'immeubles de bureaux ?",
    a: "Oui. L'hydrocureur compact descend dans les parkings souterrains pour traiter siphons de sol, postes de relevage et canalisations en sous-sol.",
  },
];

export const Route = createFileRoute("/debouchage-canalisation/hauts-de-seine")({
  head: () => ({
    ...pageMeta({
      title: "Débouchage de canalisation dans les Hauts-de-Seine (92) | Hydro-Curage",
      description:
        "Débouchage et dégorgement dans les Hauts-de-Seine 92 : copropriétés, bureaux, parkings souterrains, réseaux en sous-sol. Intervention 24h/24, devis gratuit.",
      url: "/debouchage-canalisation/hauts-de-seine",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceLd(
            "Débouchage de canalisation dans les Hauts-de-Seine",
            service.description,
            "Hauts-de-Seine (92)",
          ),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqLd(LOCAL_FAQ)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "Débouchage de canalisation", item: "/debouchage-canalisation" },
            { name: "Hauts-de-Seine", item: "/debouchage-canalisation/hauts-de-seine" },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      service={service}
      h1="Débouchage de canalisation dans les Hauts-de-Seine (92)"
      intro="Copropriétés récentes, immeubles de bureaux et grands ensembles : dans le 92, une part importante des réseaux passe par des sous-sols et des postes de relevage. Nous intervenons 24h/24 avec le matériel adapté."
      breadcrumbs={[
        { label: "Accueil", to: "/" },
        { label: "Débouchage", to: "/debouchage-canalisation" },
        { label: "Hauts-de-Seine" },
      ]}
    >
      <div className="mt-10 space-y-6">
        <h3 className="font-display text-xl font-bold uppercase tracking-tight">
          Copropriétés, bureaux et sous-sols
        </h3>
        <p className="text-muted-foreground">
          Le département compte de nombreux ensembles collectifs et immeubles tertiaires dont
          les évacuations transitent par des sous-sols : siphons de sol, colonnes communes et
          postes de relevage. Un dysfonctionnement à ce niveau se traduit vite par un
          refoulement dans les parties communes ou dans un parking.
        </p>
        <h3 className="font-display text-xl font-bold uppercase tracking-tight">
          Notre approche dans le 92
        </h3>
        <p className="text-muted-foreground">
          Nous localisons l'origine du bouchon, si besoin par inspection caméra, puis nous
          débouchons et curons la canalisation. Pour les réseaux collectifs, un curage
          préventif planifié limite la répétition des incidents.
        </p>
        <ul className="space-y-2 text-muted-foreground">
          {LOCAL_FAQ.map((f) => (
            <li key={f.q}>
              <strong className="text-foreground">{f.q}</strong> {f.a}
            </li>
          ))}
        </ul>
      </div>
    </ServicePage>
  );
}
