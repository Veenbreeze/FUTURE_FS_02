import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useSite } from "@/lib/site-context";
import heroImg from "@/assets/hero.jpg";
import faceImg from "@/assets/service-face.jpg";
import hairImg from "@/assets/service-hair.jpg";
import nailsImg from "@/assets/service-nails.jpg";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Victor Salon — Modern Salon in Dodoma, Tanzania" },
      {
        name: "description",
        content:
          "Victor Salon — a modern salon in Dodoma, Tanzania offering hair, skin, and nail care with a calm, considered approach.",
      },
      { property: "og:title", content: "Victor Salon — Dodoma, Tanzania" },
      { property: "og:description", content: "Modern salon care in the heart of Dodoma." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { tr, lang } = useSite();

  const featured = [
    {
      title: lang === "en" ? "Signature Facial" : "Huduma ya Uso",
      img: faceImg,
      desc: lang === "en" ? "75 min · Restorative facial with cleanse, mask & massage." : "Dakika 75 · Huduma ya uso, kusafisha na masaji.",
      price: "TZS 80,000",
    },
    {
      title: lang === "en" ? "Hair Ceremony" : "Huduma ya Nywele",
      img: hairImg,
      desc: lang === "en" ? "90 min · Scalp massage, treatment, cut & styling." : "Dakika 90 · Masaji ya kichwa, matibabu, kukata na kupanga.",
      price: "TZS 95,000",
    },
    {
      title: lang === "en" ? "Manicure Ritual" : "Huduma ya Kucha",
      img: nailsImg,
      desc: lang === "en" ? "45 min · Shape, polish, oil massage and finish." : "Dakika 45 · Kupanga, rangi, masaji ya mafuta.",
      price: "TZS 35,000",
    },
  ];

  const testimonials = lang === "en"
    ? [
        { q: "An hour at Victor Salon and I left feeling brand new.", a: "Asha M." },
        { q: "Every detail considered. The most professional salon in Dodoma.", a: "John K." },
        { q: "Friendly, skilled, and never rushed. My new go-to.", a: "Neema P." },
      ]
    : [
        { q: "Saa moja Victor Salon na nikatoka nikijihisi mpya kabisa.", a: "Asha M." },
        { q: "Kila kitu kimezingatiwa. Saluni bora zaidi Dodoma.", a: "John K." },
        { q: "Wakarimu, wenye ujuzi, na hawana haraka. Mahali pangu pa kudumu.", a: "Neema P." },
      ];

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative -mt-20 h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Victor Salon interior"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/0 to-background/80" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="fade-up max-w-2xl">
            <p className="eyebrow mb-6">{tr("home.eyebrow")}</p>
            <h1 className="text-5xl md:text-7xl leading-[1.05] text-foreground">
              {tr("home.h1.l1")}<br />
              {tr("home.h1.l2")}
            </h1>
            <p className="mt-6 max-w-md text-base md:text-lg text-foreground/80 leading-relaxed">
              {tr("home.hero.lead")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="text-xs tracking-[0.22em] uppercase bg-foreground text-background px-7 py-4 hover:bg-accent transition-colors"
              >
                {tr("home.cta.menu")}
              </Link>
              <Link
                to="/contact"
                className="text-xs tracking-[0.22em] uppercase border border-foreground/80 px-7 py-4 hover:bg-foreground hover:text-background transition-colors"
              >
                {tr("home.cta.reserve")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 md:py-40 px-6 md:px-10 max-w-5xl mx-auto text-center">
        <p className="eyebrow mb-6">{tr("home.intro.eyebrow")}</p>
        <h2 className="text-3xl md:text-5xl leading-[1.15]">
          {tr("home.intro.h")}
        </h2>
      </section>

      <div className="hairline mx-6 md:mx-10" />

      {/* FEATURED SERVICES */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="eyebrow mb-4">{tr("home.featured.eyebrow")}</p>
            <h2 className="text-3xl md:text-4xl">{tr("home.featured.h")}</h2>
          </div>
          <Link to="/services" className="text-xs tracking-[0.22em] uppercase border-b border-foreground pb-1 hover:text-accent hover:border-accent">
            {tr("home.featured.viewAll")}
          </Link>
        </div>

        <div className="grid gap-10 md:gap-6 md:grid-cols-3">
          {featured.map((s) => (
            <article key={s.title} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="text-2xl">{s.title}</h3>
                <span className="text-sm text-accent whitespace-nowrap">{s.price}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto grid gap-12 md:grid-cols-2 md:items-center">
        <div className="aspect-[4/5] overflow-hidden">
          <img src={aboutImg} alt="Salon interior" loading="lazy" width={1280} height={1280} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="eyebrow mb-6">{tr("home.about.eyebrow")}</p>
          <h2 className="text-3xl md:text-5xl leading-[1.15] mb-8">
            {tr("home.about.h")}
          </h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            {tr("home.about.p1")}
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-10">
            {tr("home.about.p2")}
          </p>
          <Link to="/about" className="text-xs tracking-[0.22em] uppercase border-b border-foreground pb-1 hover:text-accent hover:border-accent">
            {tr("home.about.cta")}
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-bone py-28 md:py-40 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow text-center mb-16">{tr("home.testimonials.eyebrow")}</p>
          <div className="grid gap-12 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.a} className="text-center">
                <blockquote className="font-display text-2xl leading-snug" style={{ fontFamily: "var(--font-display)" }}>
                  “{t.q}”
                </blockquote>
                <figcaption className="mt-6 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                  — {t.a}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 px-6 md:px-10 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl leading-[1.1]">
          {tr("home.cta.h")}
        </h2>
        <p className="mt-6 text-foreground/70">
          {tr("home.cta.sub")}
        </p>
        <Link
          to="/contact"
          className="inline-block mt-10 text-xs tracking-[0.22em] uppercase bg-foreground text-background px-8 py-4 hover:bg-accent transition-colors"
        >
          {tr("home.cta.btn")}
        </Link>
      </section>
    </SiteLayout>
  );
}
