import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail } from "lucide-react";
import { useSite } from "@/lib/site-context";

export function SiteFooter() {
  const { tr } = useSite();
  return (
    <footer className="mt-32 border-t border-border bg-bone">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl" style={{ fontFamily: "var(--font-display)" }}>
            Victor Salon
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {tr("footer.tagline")}
          </p>
          <div className="mt-6 flex gap-5 text-foreground/70">
            <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
              <Facebook size={18} />
            </a>
            <a
              href="mailto:hello@victorsalon.co.tz"
              aria-label="Email"
              className="hover:text-accent transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <div className="eyebrow mb-4">{tr("footer.visit")}</div>
          <p className="text-sm leading-relaxed text-foreground/80">
            Victor Salon
            <br />
            Dodoma
            <br />
            Tanzania
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">{tr("footer.hours")}</div>
          <ul className="text-sm leading-relaxed text-foreground/80 space-y-1">
            <li>{tr("footer.weekdays")}</li>
            <li>{tr("footer.sat")}</li>
            <li>{tr("footer.sun")}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground tracking-wide">
          <p>
            © {new Date().getFullYear()} Victor Salon. {tr("footer.rights")}
          </p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-accent">
              {tr("nav.about")}
            </Link>
            <Link to="/services" className="hover:text-accent">
              {tr("nav.services")}
            </Link>
            <Link to="/contact" className="hover:text-accent">
              {tr("nav.contact")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
