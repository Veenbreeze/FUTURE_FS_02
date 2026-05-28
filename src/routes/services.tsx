import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useSite } from "@/lib/site-context";
import faceImg from "@/assets/service-face.jpg";
import hairImg from "@/assets/service-hair.jpg";
import nailsImg from "@/assets/service-nails.jpg";
import hairImg2 from "@/assets/WhatsApp Image 2026-05-12 at 21.46.21.jpeg";
import hairImg3 from "@/assets/WhatsApp Image 2026-05-12 at 21.46.20.jpeg";
import hairImg4 from "@/assets/WhatsApp Image 2026-05-12 at 21.46.22.jpeg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Victor Salon, Dodoma" },
      {
        name: "description",
        content: "Hair, skin and nail services at Victor Salon, Dodoma. A small, considered menu.",
      },
      { property: "og:title", content: "Services — Victor Salon" },
      { property: "og:description", content: "Hair, skin and nail services in Dodoma, Tanzania." },
      { property: "og:image", content: faceImg },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { tr, lang } = useSite();
  const min = tr("svc.min");
  const from = tr("svc.from");

  const sections = [
    {
      title: tr("svc.skin"),
      img: faceImg,
      items:
        lang === "en"
          ? [
              {
                name: "Discovery Facial",
                time: `60 ${min}`,
                price: "TZS 60,000",
                desc: "Cleanse, balance, gentle exfoliation. Ideal for first visits.",
              },
              {
                name: "Signature Facial",
                time: `75 ${min}`,
                price: "TZS 80,000",
                desc: "Deep restorative ritual with mask and massage.",
              },
              {
                name: "The Long Facial",
                time: `120 ${min}`,
                price: "TZS 130,000",
                desc: "Two hours of skin, neck, scalp & hand work.",
              },
            ]
          : [
              {
                name: "Huduma ya Awali",
                time: `60 ${min}`,
                price: "TZS 60,000",
                desc: "Kusafisha na kuondoa seli zilizokufa. Bora kwa mara ya kwanza.",
              },
              {
                name: "Huduma Maalum",
                time: `75 ${min}`,
                price: "TZS 80,000",
                desc: "Huduma kamili ya uso na masaji.",
              },
              {
                name: "Huduma Kamili",
                time: `120 ${min}`,
                price: "TZS 130,000",
                desc: "Saa mbili za uso, shingo, kichwa na mikono.",
              },
            ],
    },
    {
      title: tr("svc.hair"),
      img: hairImg,
      items:
        lang === "en"
          ? [
              {
                name: "Cut & Wash",
                time: `60 ${min}`,
                price: "TZS 35,000",
                desc: "Consultation, wash, precision cut and dry.",
              },
              {
                name: "Hair Ceremony",
                time: `90 ${min}`,
                price: "TZS 95,000",
                desc: "Scalp massage, custom treatment, cut and styling.",
              },
              {
                name: "Colour & Braids",
                time: `${from} 120 ${min}`,
                price: `${from} TZS 120,000`,
                desc: "Single-process colour, balayage or braids.",
              },
            ]
          : [
              {
                name: "Kukata na Kuosha",
                time: `60 ${min}`,
                price: "TZS 35,000",
                desc: "Ushauri, kuosha, kukata na kukausha.",
              },
              {
                name: "Huduma ya Nywele",
                time: `90 ${min}`,
                price: "TZS 95,000",
                desc: "Masaji ya kichwa, matibabu, kukata na kupanga.",
              },
              {
                name: "Rangi na Misuko",
                time: `${from} 120 ${min}`,
                price: `${from} TZS 120,000`,
                desc: "Rangi, balayage au misuko.",
              },
            ],
    },
    {
      title: tr("svc.nails"),
      img: nailsImg,
      items:
        lang === "en"
          ? [
              {
                name: "Manicure",
                time: `45 ${min}`,
                price: "TZS 35,000",
                desc: "Shape, polish, oil massage and finish.",
              },
              {
                name: "Pedicure",
                time: `60 ${min}`,
                price: "TZS 45,000",
                desc: "Salt soak, exfoliation, polish and reflexology.",
              },
              {
                name: "Gel & Art",
                time: `90 ${min}`,
                price: "TZS 70,000",
                desc: "Long-lasting gel polish with custom nail art.",
              },
            ]
          : [
              {
                name: "Manicure",
                time: `45 ${min}`,
                price: "TZS 35,000",
                desc: "Kupanga, rangi, masaji ya mafuta.",
              },
              {
                name: "Pedicure",
                time: `60 ${min}`,
                price: "TZS 45,000",
                desc: "Loweka chumvi, kuondoa seli, rangi na masaji.",
              },
              {
                name: "Gel na Sanaa",
                time: `90 ${min}`,
                price: "TZS 70,000",
                desc: "Rangi ya gel ya kudumu na sanaa ya kucha.",
              },
            ],
    },
  ];

  return (
    <SiteLayout>
      <section className="px-6 md:px-10 max-w-5xl mx-auto pt-20 md:pt-28 pb-16 text-center">
        <p className="eyebrow mb-6">{tr("svc.eyebrow")}</p>
        <h1 className="text-5xl md:text-7xl leading-[1.05]">{tr("svc.h1")}</h1>
        <p className="mt-8 max-w-xl mx-auto text-foreground/70 leading-relaxed">{tr("svc.lead")}</p>
      </section>

      {sections.map((sec, idx) => (
        <section key={sec.title} className="py-20 md:py-28 px-6 md:px-10 max-w-7xl mx-auto">
          <div
            className={`grid gap-12 md:gap-16 md:grid-cols-2 md:items-center ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={sec.img}
                alt={sec.title}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="eyebrow mb-4">
                {tr("svc.chapter")} {String(idx + 1).padStart(2, "0")}
              </p>
              <h2 className="text-4xl md:text-5xl mb-10">{sec.title}</h2>
              <ul className="divide-y divide-border border-t border-b border-border">
                {sec.items.map((item) => (
                  <li key={item.name} className="py-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-xl">{item.name}</h3>
                      <span className="text-sm text-accent whitespace-nowrap">{item.price}</span>
                    </div>
                    <div className="mt-1 flex items-baseline justify-between gap-4">
                      <p className="text-sm text-muted-foreground leading-relaxed pr-6">
                        {item.desc}
                      </p>
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
                        {item.time}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="py-32 md:py-40 px-6 md:px-10 text-center bg-bone">
        <h2 className="text-3xl md:text-5xl max-w-2xl mx-auto leading-[1.15]">{tr("svc.cta.h")}</h2>
        <Link
          to="/contact"
          className="inline-block mt-10 text-xs tracking-[0.22em] uppercase bg-foreground text-background px-8 py-4 hover:bg-accent transition-colors"
        >
          {tr("svc.cta.btn")}
        </Link>
      </section>
    </SiteLayout>
  );
}
