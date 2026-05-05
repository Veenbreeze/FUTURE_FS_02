import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maison Lutea Spa, Copenhagen" },
      { name: "description", content: "The story, philosophy, and people behind Maison Lutea, a minimal day spa in Copenhagen." },
      { property: "og:title", content: "About — Maison Lutea" },
      { property: "og:description", content: "Care as ritual, not transaction. Inside the philosophy of Maison Lutea." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Ida Sørensen", role: "Founder · Skin therapist" },
  { name: "Mette Holm",   role: "Master stylist" },
  { name: "Liv Hansen",   role: "Body & ritual therapist" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="px-6 md:px-10 max-w-5xl mx-auto pt-20 md:pt-28 pb-20 text-center">
        <p className="eyebrow mb-6">About the House</p>
        <h1 className="text-5xl md:text-7xl leading-[1.05]">A spa built around what is removed, not added.</h1>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto">
        <div className="aspect-[16/9] overflow-hidden">
          <img src={aboutImg} alt="Maison Lutea treatment room" width={1280} height={1280} className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="px-6 md:px-10 max-w-3xl mx-auto py-24 md:py-32 space-y-8 text-base md:text-lg leading-relaxed text-foreground/85">
        <p>
          Maison Lutea opened in 2014 in a quiet back-courtyard off Bredgade.
          What began as a single room with a single therapist has grown into
          a small house of three — but the principle has not changed: do
          fewer things, do them slowly, do them well.
        </p>
        <p>
          Our rooms are intentionally unadorned. Limewashed walls. Linen on
          the bed. A single stem of something living. Music is optional, and
          almost always declined.
        </p>
        <p>
          We work with formulators in Denmark, France and Japan whose
          products meet our two non-negotiable standards: clean composition
          and demonstrable results. The rest, we believe, is theatre.
        </p>
      </section>

      <section className="bg-bone py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow text-center mb-4">Values</p>
          <h2 className="text-3xl md:text-5xl text-center mb-16">Three quiet commitments.</h2>
          <div className="grid gap-12 md:grid-cols-3 text-center">
            {[
              { t: "Slowness", d: "No treatment is shortened. Time is the active ingredient." },
              { t: "Craft",    d: "Every therapist trains for a minimum of seven years before joining the house." },
              { t: "Discretion", d: "Your visit is private. We keep no waiting room and take one guest at a time." },
            ].map((v) => (
              <div key={v.t}>
                <h3 className="text-2xl mb-3">{v.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <p className="eyebrow mb-4">The House</p>
        <h2 className="text-3xl md:text-5xl mb-16">Three hands. One philosophy.</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="border-t border-border pt-6">
              <h3 className="text-2xl">{m.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground tracking-wide">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-10 text-center">
        <Link to="/contact" className="text-xs tracking-[0.22em] uppercase bg-foreground text-background px-8 py-4 hover:bg-accent transition-colors">
          Reserve a treatment
        </Link>
      </section>
    </SiteLayout>
  );
}
