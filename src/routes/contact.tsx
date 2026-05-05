import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteLayout } from "@/components/SiteLayout";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Reservations — Maison Lutea Copenhagen" },
      { name: "description", content: "Reserve a treatment, find our address, hours and contact details. Maison Lutea, Bredgade 14, Copenhagen." },
      { property: "og:title", content: "Contact — Maison Lutea" },
      { property: "og:description", content: "Reservations, address and hours for Maison Lutea, Copenhagen." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Thank you. We will be in touch within 24 hours.");
  };

  return (
    <SiteLayout>
      <Toaster position="top-center" />
      <section className="px-6 md:px-10 max-w-5xl mx-auto pt-20 md:pt-28 pb-16 text-center">
        <p className="eyebrow mb-6">Reservations</p>
        <h1 className="text-5xl md:text-7xl leading-[1.05]">Write to us.</h1>
        <p className="mt-8 max-w-xl mx-auto text-foreground/70 leading-relaxed">
          We reply to every message within one business day. For same-day
          bookings, please call.
        </p>
      </section>

      <section className="px-6 md:px-10 max-w-6xl mx-auto pb-24 grid gap-16 md:grid-cols-2">
        <form onSubmit={onSubmit} className="space-y-8" noValidate>
          <Field label="Name" name="name" type="text" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Message" name="message" textarea required />
          <button
            type="submit"
            disabled={submitting}
            className="text-xs tracking-[0.22em] uppercase bg-foreground text-background px-8 py-4 hover:bg-accent transition-colors disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send message"}
          </button>
        </form>

        <aside className="space-y-10">
          <div>
            <p className="eyebrow mb-3">Visit</p>
            <p className="leading-relaxed">
              Bredgade 14<br />
              1260 København K<br />
              Denmark
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Reach us</p>
            <p className="leading-relaxed">
              <a href="tel:+4533123456" className="hover:text-accent">+45 33 12 34 56</a><br />
              <a href="mailto:hello@maisonlutea.com" className="hover:text-accent">hello@maisonlutea.com</a>
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Hours</p>
            <ul className="leading-relaxed">
              <li>Tuesday – Friday · 10 – 19</li>
              <li>Saturday · 10 – 17</li>
              <li>Sunday – Monday · Closed</li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto pb-32">
        <div className="aspect-[16/8] overflow-hidden border border-border">
          <iframe
            title="Map to Maison Lutea"
            src="https://www.openstreetmap.org/export/embed.html?bbox=12.585%2C55.683%2C12.595%2C55.687&layer=mapnik&marker=55.685%2C12.590"
            className="h-full w-full grayscale"
            loading="lazy"
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, name, type = "text", textarea = false, required = false,
}: { label: string; name: string; type?: string; textarea?: boolean; required?: boolean }) {
  const cls =
    "w-full bg-transparent border-0 border-b border-border focus:border-accent focus:outline-none py-3 text-base placeholder:text-muted-foreground transition-colors";
  return (
    <label className="block">
      <span className="eyebrow block mb-3">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={cls} maxLength={1000} />
      ) : (
        <input name={name} type={type} required={required} className={cls} maxLength={255} />
      )}
    </label>
  );
}
