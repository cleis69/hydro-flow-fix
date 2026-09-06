import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageShell";
import { QuoteSection } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";
import { ARTICLES } from "@/lib/blog-data";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

const META = {
  title: "Blog — conseils canalisation et assainissement | Hydro-Curage",
  description:
    "Astuces de prévention, guides d'entretien et informations utiles pour garder vos canalisations en bon état : évier bouché, fosse septique, inspection caméra, tarifs, SPANC.",
  url: "/blog",
};

export const Route = createFileRoute("/blog/")({
  head: () => ({
    ...pageMeta(META),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "Blog", item: "/blog" },
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
        eyebrow="Conseils & guides pratiques"
        title="Conseils & guides pratiques"
        intro="Astuces de prévention, guides d'entretien et informations utiles pour garder vos canalisations en bon état."
        breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Blog" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.slug} delay={i * 50}>
              <article className="surface-panel flex h-full flex-col p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.16em]">
                  <span className="text-primary">{a.category}</span>
                  <time dateTime={a.iso} className="text-muted-foreground">
                    {a.date}
                  </time>
                </div>
                <h2 className="mt-3 font-display text-lg font-black uppercase leading-tight tracking-tight">
                  <Link to="/blog/$slug" params={{ slug: a.slug }} className="hover:text-primary">
                    {a.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: a.slug }}
                  className="group mt-5 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-primary"
                >
                  Lire l'article
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
