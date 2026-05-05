import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-bone">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl" style={{ fontFamily: "var(--font-display)" }}>
            Maison Lutea
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A quiet sanctuary in the heart of Copenhagen. Considered rituals
            for skin, hair, and the senses.
          </p>
          <div className="mt-6 flex gap-5 text-foreground/70">
            <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors"><Facebook size={18} /></a>
            <a href="mailto:hello@maisonlutea.com" aria-label="Email" className="hover:text-accent transition-colors"><Mail size={18} /></a>
          </div>
        </div>

        <div>
          <div className="eyebrow mb-4">Visit</div>
          <p className="text-sm leading-relaxed text-foreground/80">
            Bredgade 14<br />
            1260 København K<br />
            Denmark
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Hours</div>
          <ul className="text-sm leading-relaxed text-foreground/80 space-y-1">
            <li>Tue – Fri · 10 – 19</li>
            <li>Saturday · 10 – 17</li>
            <li>Sun – Mon · Closed</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground tracking-wide">
          <p>© {new Date().getFullYear()} Maison Lutea. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-accent">About</Link>
            <Link to="/services" className="hover:text-accent">Services</Link>
            <Link to="/contact" className="hover:text-accent">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
