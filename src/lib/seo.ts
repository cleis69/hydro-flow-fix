import { COMPANY, DEPARTEMENTS } from "./site-data";

export const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Hydro-Curage",
  description:
    "Débouchage, curage hydrodynamique, pompage et assainissement 24h/24 et 7j/7 en Île-de-France.",
  telephone: "+33667980190",
  openingHours: "Mo-Su 00:00-23:59",
  areaServed: DEPARTEMENTS.map((d) => ({
    "@type": "AdministrativeArea",
    name: `${d.name} (${d.code})`,
  })),
  address: {
    "@type": "PostalAddress",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
};

export function serviceLd(name: string, description: string, areaName: string = COMPANY.area) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    description,
    provider: { "@type": "LocalBusiness", name: "Hydro-Curage", telephone: "+33667980190" },
    areaServed: { "@type": "AdministrativeArea", name: areaName },
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
}

export function pageMeta({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
