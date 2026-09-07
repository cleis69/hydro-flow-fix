import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/site/ServicePage";
import { QuoteSection } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";
import { CallButton, QuoteButton } from "@/components/site/CallButtons";
import { ARTICLES, getArticle } from "@/lib/blog-data";
import { ARTICLE_IMAGES } from "@/lib/images";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const url = `/blog/${loaderData.slug}`;
    return {
      ...pageMeta({
        title: `${loaderData.title} | Hydro-Curage`,
        description: loaderData.excerpt.slice(0, 300),
        url,
      }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Accueil", item: "/" },
              { name: "Blog", item: "/blog" },
              { name: loaderData.title, item: url },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            description: loaderData.excerpt,
            datePublished: loaderData.iso,
            articleSection: loaderData.category,
            author: { "@type": "Organization", name: "Hydro-Curage" },
            publisher: { "@type": "Organization", name: "Hydro-Curage" },
          }),
        },
      ],
    };
  },
  component: Page,
});

function Page() {
  const article = Route.useLoaderData();
  const others = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);
  const illustration = ARTICLE_IMAGES[article.slug];

  return (
    <>
      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
          <Breadcrumbs
            items={[
              { label: "Accueil", to: "/" },
              { label: "Blog", to: "/blog" },
              { label: article.title },
            ]}
          />
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.16em]">
            <span className="text-primary">{article.category}</span>
            <time dateTime={article.iso} className="text-muted-foreground">
              {article.date}
            </time>
          </div>
          <h1 className="mt-4 font-display text-3xl font-black uppercase leading-[1.05] sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{article.excerpt}</p>
          {illustration && (
            <figure className="mt-8 overflow-hidden rounded-3xl border border-border">
              <img
                src={illustration.src}
                alt={illustration.alt}
                width={1200}
                height={675}
                loading="eager"
                decoding="async"
                className="aspect-[16/9] w-full object-cover"
              />
            </figure>
          )}
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="space-y-10">
          {article.sections.map((s, i) => (
            <Reveal key={s.title || i} delay={i * 30}>
              <section>
                {s.title && (
                  <h2 className="font-display text-xl font-black uppercase tracking-tight sm:text-2xl">
                    {s.title}
                  </h2>
                )}
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
              </section>
            </Reveal>
          ))}
        </div>

        <aside className="surface-panel mt-14 p-6 lg:p-8">
          <h2 className="font-display text-xl font-black uppercase tracking-tight">
            Un problème de canalisation&nbsp;?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Nos techniciens sont disponibles 24h/24 pour vous aider.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <QuoteButton label="Demander un devis gratuit" />
          </div>
        </aside>

        <Link
          to="/blog"
          className="group mt-10 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-primary"
        >
          <ArrowLeft
            className="size-4 transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          />
          Retour au blog
        </Link>
      </article>

      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <h2 className="font-display text-2xl font-black uppercase tracking-tight sm:text-3xl">
            Autres articles
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((a, i) => (
              <Reveal key={a.slug} delay={i * 60}>
                <article className="surface-panel flex h-full flex-col p-6">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                    {a.category}
                  </span>
                  <h3 className="mt-3 font-display text-base font-black uppercase leading-tight tracking-tight">
                    <Link to="/blog/$slug" params={{ slug: a.slug }} className="hover:text-primary">
                      {a.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {a.excerpt}
                  </p>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: a.slug }}
                    className="group mt-5 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wide text-primary"
                  >
                    Lire l'article
                    <ArrowRight
                      className="size-3.5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
