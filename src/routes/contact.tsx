import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { SiteLayout } from "@/components/SiteLayout";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useSite } from "@/lib/site-context";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Reservations — Victor Salon, Dodoma" },
      {
        name: "description",
        content:
          "Reserve a treatment at Victor Salon in Dodoma, Tanzania. Address, hours and contact.",
      },
      { property: "og:title", content: "Contact — Victor Salon" },
      {
        property: "og:description",
        content: "Reservations, address and hours for Victor Salon, Dodoma.",
      },
    ],
  }),
  component: ContactPage,
});

const EMAILJS_SERVICE_ID = "service_h0fyfmm";
const EMAILJS_TEMPLATE_ID = "template_djb1b4g";
const EMAILJS_PUBLIC_KEY = "UFk6XSdRxgTyzQHmq";

function ContactPage() {
  const { tr } = useSite();
  const [submitting, setSubmitting] = useState(false);

  const schema = z.object({
    name: z.string().trim().min(2, tr("contact.errName")).max(100),
    email: z.string().trim().email(tr("contact.errEmail")).max(255),
    message: z.string().trim().min(10, tr("contact.errMsg")).max(1000),
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
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
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: parsed.data.name,
          from_email: parsed.data.email,
          reply_to: parsed.data.email,
          message: parsed.data.message,
          to_name: "Victor Salon",
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      form.reset();
      toast.success(tr("contact.success"));
    } catch (err) {
      console.error(err);
      toast.error(tr("contact.error"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <Toaster position="top-center" />
      <section className="px-6 md:px-10 max-w-5xl mx-auto pt-20 md:pt-28 pb-16 text-center">
        <p className="eyebrow mb-6">{tr("contact.eyebrow")}</p>
        <h1 className="text-5xl md:text-7xl leading-[1.05]">{tr("contact.h1")}</h1>
        <p className="mt-8 max-w-xl mx-auto text-foreground/70 leading-relaxed">
          {tr("contact.lead")}
        </p>
      </section>

      <section className="px-6 md:px-10 max-w-6xl mx-auto pb-24 grid gap-16 md:grid-cols-2">
        <form onSubmit={onSubmit} className="space-y-8" noValidate>
          <Field label={tr("contact.name")} name="name" type="text" required />
          <Field label={tr("contact.email")} name="email" type="email" required />
          <Field label={tr("contact.message")} name="message" textarea required />
          <button
            type="submit"
            disabled={submitting}
            className="text-xs tracking-[0.22em] uppercase bg-foreground text-background px-8 py-4 hover:bg-accent transition-colors disabled:opacity-60"
          >
            {submitting ? tr("contact.sending") : tr("contact.send")}
          </button>
        </form>

        <aside className="space-y-10">
          <div>
            <p className="eyebrow mb-3">{tr("contact.visit")}</p>
            <p className="leading-relaxed">
              Victor Salon
              <br />
              Dodoma
              <br />
              Tanzania
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">{tr("contact.reach")}</p>
            <p className="leading-relaxed">
              <a href="tel:+255616524726" className="hover:text-accent">
                +255 616 524 726
              </a>
              <br />
              <a href="mailto:hello@victorsalon.co.tz" className="hover:text-accent">
                hello@victorsalon.co.tz
              </a>
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">{tr("contact.hours")}</p>
            <ul className="leading-relaxed">
              <li>{tr("footer.weekdays")}</li>
              <li>{tr("footer.sat")}</li>
              <li>{tr("footer.sun")}</li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto pb-32">
        <div className="aspect-[16/8] overflow-hidden border border-border">
          <iframe
            title="Map to Victor Salon, Dodoma"
            src="https://www.openstreetmap.org/export/embed.html?bbox=35.735%2C-6.180%2C35.755%2C-6.165&layer=mapnik&marker=-6.1722%2C35.7395"
            className="h-full w-full"
            loading="lazy"
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const cls =
    "w-full bg-transparent border-0 border-b border-border focus:border-accent focus:outline-none py-3 text-base text-foreground placeholder:text-muted-foreground transition-colors";
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
