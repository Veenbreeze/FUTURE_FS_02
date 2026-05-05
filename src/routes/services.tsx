import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import faceImg from "@/assets/service-face.jpg";
import hairImg from "@/assets/service-hair.jpg";
import nailsImg from "@/assets/service-nails.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "The Menu — Maison Lutea Spa Services" },
      { name: "description", content: "Facial, hair, hand and body rituals at Maison Lutea, Copenhagen. A small, considered menu." },
      { property: "og:title", content: "The Menu — Maison Lutea" },
      { property: "og:description", content: "A small, considered spa menu in Copenhagen." },
      { property: "og:image", content: faceImg },
    ],
  }),
  component: ServicesPage,
});

const sections = [
  {
    title: "Skin",
    img: faceImg,
    items: [
      { name: "Discovery Facial",   time: "60 min", price: "950 DKK",  desc: "Cleanse, balance, gentle exfoliation. Ideal for first visits." },
      { name: "Signature Facial",   time: "75 min", price: "1 200 DKK", desc: "Deep restorative ritual with cold-pressed oils & cryo finish." },
      { name: "The Long Facial",    time: "120 min", price: "1 950 DKK", desc: "Two hours of skin, neck, scalp & hand work. Leaves no part forgotten." },
    ],
  },
  {
    title: "Hair",
    img: hairImg,
    items: [
      { name: "Cut",            time: "60 min", price: "850 DKK",   desc: "Consultation, wash, precision cut and dry." },
      { name: "Hair Ceremony",  time: "90 min", price: "1 450 DKK", desc: "Scalp massage, custom treatment, cut and styling." },
      { name: "Colour",         time: "from 120 min", price: "from 1 600 DKK", desc: "Single-process, balayage or restorative gloss." },
    ],
  },
  {
    title: "Hands & Body",
    img: nailsImg,
    items: [
      { name: "Hand Ritual",   time: "45 min", price: "650 DKK",   desc: "Polish, oil massage and paraffin wrap." },
      { name: "Foot Ritual",   time: "60 min", price: "750 DKK",   desc: "Salt soak, exfoliation, polish and reflexology." },
      { name: "Body Ceremony", time: "90 min", price: "1 350 DKK", desc: "Dry brush, full-body oil massage, hot linen wrap." },
    ],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="px-6 md:px-10 max-w-5xl mx-auto pt-20 md:pt-28 pb-16 text-center">
        <p className="eyebrow mb-6">The Menu</p>
        <h1 className="text-5xl md:text-7xl leading-[1.05]">A small list, written carefully.</h1>
        <p className="mt-8 max-w-xl mx-auto text-foreground/70 leading-relaxed">
          We offer fewer than a dozen treatments. Each is the result of
          years of refinement. All prices are in Danish Kroner.
        </p>
      </section>

      {sections.map((sec, idx) => (
        <section key={sec.title} className="py-20 md:py-28 px-6 md:px-10 max-w-7xl mx-auto">
          <div className={`grid gap-12 md:gap-16 md:grid-cols-2 md:items-center ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={sec.img} alt={sec.title} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="eyebrow mb-4">Chapter {String(idx + 1).padStart(2, "0")}</p>
              <h2 className="text-4xl md:text-5xl mb-10">{sec.title}</h2>
              <ul className="divide-y divide-border border-t border-b border-border">
                {sec.items.map((item) => (
                  <li key={item.name} className="py-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-xl">{item.name}</h3>
                      <span className="text-sm text-accent whitespace-nowrap">{item.price}</span>
                    </div>
                    <div className="mt-1 flex items-baseline justify-between gap-4">
                      <p className="text-sm text-muted-foreground leading-relaxed pr-6">{item.desc}</p>
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">{item.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="py-32 md:py-40 px-6 md:px-10 text-center bg-bone">
        <h2 className="text-3xl md:text-5xl max-w-2xl mx-auto leading-[1.15]">
          Unsure which to choose? We will help you decide.
        </h2>
        <Link to="/contact" className="inline-block mt-10 text-xs tracking-[0.22em] uppercase bg-foreground text-background px-8 py-4 hover:bg-accent transition-colors">
          Speak with us
        </Link>
      </section>
    </SiteLayout>
  );
}
