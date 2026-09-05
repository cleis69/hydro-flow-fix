import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/site-data";
import { pageMeta, serviceLd, breadcrumbLd, faqLd } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "debouchage-canalisation")!;

const LOCAL_FAQ = [
  {
    q: "Intervenez-vous dans les immeubles haussmanniens parisiens ?",
    a: "Oui. Les colonnes d'évacuation anciennes, souvent de faible diamètre et fortement entartrées, sont traitées par débouchage puis hydrocurage pour nettoyer la paroi.",
  },
  {
    q: "Comment intervenez-vous quand la rue est étroite ou en zone piétonne ?",
    a: "Notre hydrocureur compact a le gabarit d'un utilitaire : il accède aux rues étroites, aux cours intérieures et aux parkings souterrains parisiens où un camion ne passe pas.",
  },
];

export const Route = createFileRoute("/debouchage-canalisation/paris")({
  head: () => ({
    ...pageMeta({
      title: "Débouchage de canalisation à Paris (75) — 24h/24 | Hydro-Curage",
      description:
        "Débouchage et dégorgement à Paris 75 : immeubles haussmanniens, commerces, parkings souterrains. Hydrocureur compact, intervention 24h/24, devis gratuit.",
      url: "/debouchage-canalisation/paris",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceLd("Débouchage de canalisation à Paris", service.description, "Paris (75)"),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqLd(LOCAL_FAQ)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "Débouchage de canalisation", item: "/debouchage-canalisation" },
            { name: "Paris", item: "/debouchage-canalisation/paris" },
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
      h1="Débouchage de canalisation à Paris (75)"
      intro="Immeubles anciens, commerces de bouche, cours intérieures et parkings souterrains : à Paris, l'accès et le diamètre des colonnes conditionnent l'intervention. Nous arrivons avec le matériel adapté, 24h/24."
      breadcrumbs={[
        { label: "Accueil", to: "/" },
        { label: "Débouchage", to: "/debouchage-canalisation" },
        { label: "Paris" },
      ]}
    >
      <div className="mt-10 space-y-6">
        <h3 className="font-display text-xl font-bold uppercase tracking-tight">
          Les situations les plus fréquentes à Paris
        </h3>
        <p className="text-muted-foreground">
          Dans le parc parisien, les colonnes d'évacuation d'immeubles anciens sont souvent
          étroites et chargées de dépôts : un simple bouchon de graisse à un étage bloque
          plusieurs logements. Les commerces alimentaires, très présents en rez-de-chaussée,
          génèrent des graisses qui se figent dans les réseaux et provoquent des refoulements.
        </p>
        <h3 className="font-display text-xl font-bold uppercase tracking-tight">
          L'accès, la vraie contrainte parisienne
        </h3>
        <p className="text-muted-foreground">
          Rues étroites, stationnement contraint, zones piétonnes, cours intérieures et
          parkings souterrains rendent parfois impossible l'arrivée d'un camion. Notre
          hydrocureur compact (300 bars, pompage et hydrocurage embarqués) accède à ces
          emplacements. Pour les gros diamètres, nous mobilisons le camion hydrocureur.
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
