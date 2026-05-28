import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import { useSite } from "@/lib/site-context";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { tr, theme, toggleTheme, lang, toggleLang } = useSite();

  const nav = [
    { to: "/", label: tr("nav.home") },
    { to: "/services", label: tr("nav.services") },
    { to: "/about", label: tr("nav.about") },
    { to: "/contact", label: tr("nav.contact") },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span
            className="font-display text-2xl tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Victor Salon
          </span>
          <span className="hidden sm:inline text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground">
            {tr("brand.tag")}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm tracking-wide text-foreground/80 hover:text-accent transition-colors"
              activeProps={{ className: "text-sm tracking-wide text-accent" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase text-foreground/80 hover:text-accent transition-colors"
          >
            <Languages size={14} />
            {lang === "en" ? "SW" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <Link
            to="/contact"
            className="text-xs tracking-[0.2em] uppercase border border-foreground/80 px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors"
          >
            {tr("nav.book")}
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="text-xs tracking-[0.2em] uppercase"
          >
            {lang === "en" ? "SW" : "EN"}
          </button>
          <button onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 -mr-2 text-foreground"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-6 flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-base tracking-wide text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-xs tracking-[0.2em] uppercase border border-foreground px-5 py-3 text-center"
            >
              {tr("nav.bookCta")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
