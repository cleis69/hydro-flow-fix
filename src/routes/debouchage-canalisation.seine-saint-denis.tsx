import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/site-data";
import { pageMeta, serviceLd, breadcrumbLd, faqLd } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "debouchage-canalisation")!;

const LOCAL_FAQ = [
  {
    q: "Intervenez-vous sur les réseaux enterrés en pavillon ?",
    a: "Oui. Regards, canalisations enterrées et raccordements au réseau public sont traités par débouchage puis hydrocurage, avec inspection caméra si nécessaire.",
  },
  {
    q: "Traitez-vous les bacs à graisse des restaurants du 93 ?",
    a: "Oui, nous assurons la vidange et le nettoyage des bacs à graisse ainsi que le curage des évacuations en sortie.",
  },
];

export const Route = createFileRoute("/debouchage-canalisation/seine-saint-denis")({
  head: () => ({
    ...pageMeta({
      title: "Débouchage de canalisation en Seine-Saint-Denis (93) | Hydro-Curage",
      description:
        "Débouchage et dégorgement en Seine-Saint-Denis 93 : pavillons, réseaux enterrés, commerces et bacs à graisse. Intervention 24h/24, 7j/7, devis gratuit.",
      url: "/debouchage-canalisation/seine-saint-denis",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceLd(
            "Débouchage de canalisation en Seine-Saint-Denis",
            service.description,
            "Seine-Saint-Denis (93)",
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
            { name: "Seine-Saint-Denis", item: "/debouchage-canalisation/seine-saint-denis" },
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
      h1="Débouchage de canalisation en Seine-Saint-Denis (93)"
      intro="Pavillons avec réseaux enterrés, immeubles collectifs et commerces : en Seine-Saint-Denis, les problèmes se situent souvent entre le logement et le regard extérieur. Nous intervenons 24h/24 et 7j/7."
      breadcrumbs={[
        { label: "Accueil", to: "/" },
        { label: "Débouchage", to: "/debouchage-canalisation" },
        { label: "Seine-Saint-Denis" },
      ]}
    >
      <div className="mt-10 space-y-6">
        <h3 className="font-display text-xl font-bold uppercase tracking-tight">
          Réseaux enterrés et regards
        </h3>
        <p className="text-muted-foreground">
          Dans l'habitat pavillonnaire du 93, les canalisations enterrées relient la maison au
          regard puis au réseau public. Racines, contre-pentes et dépôts y provoquent des
          bouchons progressifs, souvent invisibles jusqu'au refoulement. L'inspection caméra
          permet de localiser précisément le point défectueux avant d'engager des travaux.
        </p>
        <h3 className="font-display text-xl font-bold uppercase tracking-tight">
          Commerces et bacs à graisse
        </h3>
        <p className="text-muted-foreground">
          Les établissements alimentaires du département génèrent des rejets gras qui figent
          dans les évacuations. Vidange du bac à graisse et hydrocurage des canalisations en
          sortie évitent l'arrêt d'exploitation.
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
