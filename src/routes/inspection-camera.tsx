import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/site-data";
import { pageMeta, serviceLd, breadcrumbLd } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "inspection-camera")!;

export const Route = createFileRoute("/inspection-camera")({
  head: () => ({
    ...pageMeta({
      title: "Inspection caméra de canalisation en Île-de-France | Hydro-Curage",
      description: "Inspection caméra pour diagnostiquer l'intérieur de vos canalisations en Île-de-France : origine du bouchon, fissure, contre-pente. Devis gratuit.",
      url: "/inspection-camera",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(serviceLd(service.title, service.description)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: service.title, item: "/inspection-camera" },
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
      h1={"Inspection caméra de canalisation"}
      intro={"La caméra parcourt la canalisation et montre l'intérieur du réseau, pour localiser précisément le défaut avant toute intervention lourde."}
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: service.title }]}
    />
  );
}
