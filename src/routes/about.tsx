import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useSite } from "@/lib/site-context";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Victor Salon, Dodoma" },
      {
        name: "description",
        content:
          "The story, philosophy, and people behind Victor Salon — a modern salon in Dodoma, Tanzania.",
      },
      { property: "og:title", content: "About — Victor Salon" },
      {
        property: "og:description",
        content: "Care as ritual, not transaction. Inside Victor Salon, Dodoma.",
      },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { tr, lang } = useSite();

  const team = [
    { name: "Victor Mpambije.", role: lang === "en" ? "Founder · Master stylist" : "Mwanzilishi" },
    { name: "Grace .", role: lang === "en" ? "Skin therapist" : "Mtaalamu wa ngozi" },
    { name: "Amina .", role: lang === "en" ? "Nail artist" : "Mtaalamu wa kucha" },
    { name: "Joseph .", role: lang === "en" ? "Reception & care" : "Mapokezi na huduma" },
    { name: "Mercy .", role: lang === "en" ? "Stylist" : "Mstylist" },
    { name: "Samuel .", role: lang === "en" ? "Assistant stylist" : "Msaidizi wa stylist" },
    { name: "Zakia .", role: lang === "en" ? "Hair stylist" : "Mtaalamu wa nywele" },
  ];

  return (
    <SiteLayout>
      <section className="px-6 md:px-10 max-w-5xl mx-auto pt-20 md:pt-28 pb-20 text-center">
        <p className="eyebrow mb-6">{tr("about.eyebrow")}</p>
        <h1 className="text-5xl md:text-7xl leading-[1.05]">{tr("about.h1")}</h1>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={aboutImg}
            alt="Victor Salon interior"
            width={1280}
            height={1280}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="px-6 md:px-10 max-w-3xl mx-auto py-24 md:py-32 space-y-8 text-base md:text-lg leading-relaxed text-foreground/85">
        <p>{tr("about.body1")}</p>
        <p>{tr("about.body2")}</p>
        <p>{tr("about.body3")}</p>
      </section>

      <section className="bg-bone py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow text-center mb-4">{tr("about.values.eyebrow")}</p>
          <h2 className="text-3xl md:text-5xl text-center mb-16">{tr("about.values.h")}</h2>
          <div className="grid gap-12 md:grid-cols-3 text-center">
            {[
              { t: tr("about.value1.t"), d: tr("about.value1.d") },
              { t: tr("about.value2.t"), d: tr("about.value2.d") },
              { t: tr("about.value3.t"), d: tr("about.value3.d") },
            ].map((v) => (
              <div key={v.t}>
                <h3 className="text-2xl mb-3">{v.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <p className="eyebrow mb-4">{tr("about.team.eyebrow")}</p>
        <h2 className="text-3xl md:text-5xl mb-16">{tr("about.team.h")}</h2>
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
        <Link
          to="/contact"
          className="text-xs tracking-[0.22em] uppercase bg-foreground text-background px-8 py-4 hover:bg-accent transition-colors"
        >
          {tr("home.cta.btn")}
        </Link>
      </section>
    </SiteLayout>
  );
}
