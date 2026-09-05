import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TrustMarquee } from "@/components/site/Marquee";
import { ProblemGrid } from "@/components/site/ProblemGrid";
import { ServicesSection } from "@/components/site/ServicesSection";
import { CompactUnit } from "@/components/site/CompactUnit";
import { HeavyUnit } from "@/components/site/HeavyUnit";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { LocationSection } from "@/components/site/LocationSection";
import { FaqSection } from "@/components/site/FaqSection";
import { QuoteSection } from "@/components/site/QuoteForm";
import { FAQ } from "@/lib/site-data";
import { pageMeta, faqLd } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta({
      title: "Débouchage & curage 24h/24 en Île-de-France | Hydro-Curage",
      description:
        "Canalisation bouchée ? Débouchage, curage, pompage et assainissement 24h/24 et 7j/7 en Île-de-France. Devis gratuit, assurance décennale — 06 67 98 01 90.",
      url: "/",
    }),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqLd(FAQ)) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <ProblemGrid />
      <ServicesSection />
      <CompactUnit />
      <HeavyUnit />
      <BeforeAfter />
      <ProcessTimeline />
      <LocationSection />
      <FaqSection />
      <QuoteSection />
    </>
  );
}
