import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero.jpg";
import faceImg from "@/assets/service-face.jpg";
import hairImg from "@/assets/service-hair.jpg";
import nailsImg from "@/assets/service-nails.jpg";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Lutea — Minimal Day Spa in Copenhagen" },
      {
        name: "description",
        content:
          "A quiet sanctuary in Copenhagen offering considered facial, hair and body rituals. Discover the Maison Lutea menu.",
      },
      { property: "og:title", content: "Maison Lutea — Minimal Day Spa in Copenhagen" },
      { property: "og:description", content: "Considered rituals for skin, hair, and the senses." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const featured = [
  { title: "Signature Facial", img: faceImg, desc: "75 min · Restorative ritual with cold-pressed oils.", price: "1 200 DKK" },
  { title: "Hair Ceremony",   img: hairImg, desc: "90 min · Scalp massage, treatment & styling.",        price: "1 450 DKK" },
  { title: "Hand Ritual",     img: nailsImg, desc: "45 min · Polish, oil massage, paraffin wrap.",        price: "  650 DKK" },
];

const testimonials = [
  { q: "An hour at Lutea feels like a long weekend away.", a: "Sofie L." },
  { q: "Every detail considered. The most thoughtful spa in the city.", a: "Anders M." },
  { q: "I left lighter than I have in months.", a: "Marie K." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative -mt-20 h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Maison Lutea spa interior"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/0 to-background/70" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="fade-up max-w-2xl">
            <p className="eyebrow mb-6">Copenhagen · Est. 2014</p>
            <h1 className="text-5xl md:text-7xl leading-[1.05] text-foreground">
              Stillness, distilled<br />
              into a single hour.
            </h1>
            <p className="mt-6 max-w-md text-base md:text-lg text-foreground/80 leading-relaxed">
              A minimal day spa devoted to slow, considered rituals for the
              skin, the hair, and the breath.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="text-xs tracking-[0.22em] uppercase bg-foreground text-background px-7 py-4 hover:bg-accent transition-colors"
              >
                The Menu
              </Link>
              <Link
                to="/contact"
                className="text-xs tracking-[0.22em] uppercase border border-foreground/80 px-7 py-4 hover:bg-foreground hover:text-background transition-colors"
              >
                Reserve
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 md:py-40 px-6 md:px-10 max-w-5xl mx-auto text-center">
        <p className="eyebrow mb-6">The House</p>
        <h2 className="text-3xl md:text-5xl leading-[1.15]">
          We believe care is a ritual, not a transaction. Every treatment
          begins in silence and ends with intention.
        </h2>
      </section>

      <div className="hairline mx-6 md:mx-10" />

      {/* FEATURED SERVICES */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="eyebrow mb-4">Selected Rituals</p>
            <h2 className="text-3xl md:text-4xl">A small, considered menu.</h2>
          </div>
          <Link to="/services" className="text-xs tracking-[0.22em] uppercase border-b border-foreground pb-1 hover:text-accent hover:border-accent">
            View all
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
          <img src={aboutImg} alt="Treatment room" loading="lazy" width={1280} height={1280} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="eyebrow mb-6">Our Philosophy</p>
          <h2 className="text-3xl md:text-5xl leading-[1.15] mb-8">
            Made of linen, stone, and quiet.
          </h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            Maison Lutea was founded on a single idea: that beauty
            treatments should feel like sanctuary, not service. Our rooms
            hold no music, no rush, no distraction.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-10">
            What remains is craft — the kind that takes ten years to learn
            and ninety minutes to give.
          </p>
          <Link to="/about" className="text-xs tracking-[0.22em] uppercase border-b border-foreground pb-1 hover:text-accent hover:border-accent">
            Read our story
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-bone py-28 md:py-40 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow text-center mb-16">In Their Words</p>
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
          Reserve your hour of stillness.
        </h2>
        <p className="mt-6 text-foreground/70">
          Bookings are taken by phone, email, or through the form below.
        </p>
        <Link
          to="/contact"
          className="inline-block mt-10 text-xs tracking-[0.22em] uppercase bg-foreground text-background px-8 py-4 hover:bg-accent transition-colors"
        >
          Reserve a treatment
        </Link>
      </section>
    </SiteLayout>
  );
}
