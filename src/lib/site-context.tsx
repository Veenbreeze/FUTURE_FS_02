import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";
type Lang = "en" | "sw";

type Dict = Record<string, { en: string; sw: string }>;

export const t: Dict = {
  // Nav
  "nav.home": { en: "Home", sw: "Mwanzo" },
  "nav.services": { en: "Services", sw: "Huduma" },
  "nav.about": { en: "About", sw: "Kuhusu" },
  "nav.contact": { en: "Contact", sw: "Wasiliana" },
  "nav.book": { en: "Book", sw: "Hifadhi" },
  "nav.bookCta": { en: "Book a treatment", sw: "Hifadhi huduma" },
  "brand.tag": { en: "Salon", sw: "Saluni" },

  // Footer
  "footer.tagline": {
    en: "A modern salon in the heart of Dodoma. Considered care for hair, skin, and confidence.",
    sw: "Saluni ya kisasa katikati ya Dodoma. Huduma makini kwa nywele, ngozi, na kujiamini.",
  },
  "footer.visit": { en: "Visit", sw: "Tutembelee" },
  "footer.hours": { en: "Hours", sw: "Saa za kazi" },
  "footer.weekdays": { en: "Mon – Fri · 9 – 19", sw: "Jtatu – Ijmaa · 9 – 19" },
  "footer.sat": { en: "Saturday · 9 – 18", sw: "Jumamosi · 9 – 18" },
  "footer.sun": { en: "Sunday · Closed", sw: "Jumapili · Imefungwa" },
  "footer.rights": { en: "All rights reserved.", sw: "Haki zote zimehifadhiwa." },

  // Home
  "home.eyebrow": { en: "Dodoma · Tanzania", sw: "Dodoma · Tanzania" },
  "home.h1.l1": { en: "Confidence, crafted", sw: "Kujiamini, kuumbwa" },
  "home.h1.l2": { en: "in a single visit.", sw: "kwa ziara moja." },
  "home.hero.lead": {
    en: "A modern salon in Dodoma offering considered hair, skin, and nail care for the way you live today.",
    sw: "Saluni ya kisasa Dodoma inayotoa huduma makini za nywele, ngozi na kucha kwa maisha ya leo.",
  },
  "home.cta.menu": { en: "View Services", sw: "Tazama Huduma" },
  "home.cta.reserve": { en: "Reserve", sw: "Hifadhi" },
  "home.intro.eyebrow": { en: "The Salon", sw: "Saluni Yetu" },
  "home.intro.h": {
    en: "We believe care is a ritual, not a transaction. Every appointment begins with a consultation and ends with intention.",
    sw: "Tunaamini huduma ni desturi, si biashara. Kila miadi huanza kwa ushauri na kuisha kwa nia.",
  },
  "home.featured.eyebrow": { en: "Selected Services", sw: "Huduma Teule" },
  "home.featured.h": { en: "A small, considered menu.", sw: "Orodha ndogo, iliyotayarishwa." },
  "home.featured.viewAll": { en: "View all", sw: "Ona zote" },
  "home.about.eyebrow": { en: "Our Philosophy", sw: "Falsafa Yetu" },
  "home.about.h": { en: "Modern care, rooted in Tanzania.", sw: "Huduma za kisasa, mizizi Tanzania." },
  "home.about.p1": {
    en: "Victor Salon was founded on a single idea: that beauty services should feel personal, not rushed. Our space is calm, our team is trained, our standards are high.",
    sw: "Victor Salon ilianzishwa kwa wazo moja: huduma za urembo zihisi za binafsi, si za haraka. Nafasi yetu ni tulivu, timu yetu imefundishwa, viwango vyetu ni juu.",
  },
  "home.about.p2": {
    en: "What remains is craft — the kind that takes years to learn and an hour to give.",
    sw: "Kinachobaki ni ufundi — ule unaohitaji miaka kujifunza na saa moja kutoa.",
  },
  "home.about.cta": { en: "Read our story", sw: "Soma habari yetu" },
  "home.testimonials.eyebrow": { en: "In Their Words", sw: "Kwa Maneno Yao" },
  "home.cta.h": { en: "Reserve your seat at Victor Salon.", sw: "Hifadhi nafasi yako Victor Salon." },
  "home.cta.sub": {
    en: "Bookings are taken by phone, email, or through the form.",
    sw: "Hifadhi zinafanyika kwa simu, barua pepe, au fomu.",
  },
  "home.cta.btn": { en: "Reserve a treatment", sw: "Hifadhi huduma" },

  // Services
  "svc.eyebrow": { en: "The Menu", sw: "Orodha" },
  "svc.h1": { en: "A small list, written carefully.", sw: "Orodha fupi, iliyoandikwa kwa uangalifu." },
  "svc.lead": {
    en: "We offer a focused selection of services. Each is the result of careful refinement. All prices are in Tanzanian Shillings (TZS).",
    sw: "Tunatoa huduma chache zilizochaguliwa kwa makini. Bei zote ni za Shilingi za Tanzania (TZS).",
  },
  "svc.chapter": { en: "Chapter", sw: "Sehemu" },
  "svc.cta.h": { en: "Unsure which to choose? We will help you decide.", sw: "Hujui ipi ichague? Tutakusaidia kuamua." },
  "svc.cta.btn": { en: "Speak with us", sw: "Zungumza nasi" },
  "svc.skin": { en: "Skin & Face", sw: "Ngozi na Uso" },
  "svc.hair": { en: "Hair", sw: "Nywele" },
  "svc.nails": { en: "Hands & Nails", sw: "Mikono na Kucha" },
  "svc.min": { en: "min", sw: "dakika" },
  "svc.from": { en: "from", sw: "kuanzia" },

  // About
  "about.eyebrow": { en: "About the Salon", sw: "Kuhusu Saluni" },
  "about.h1": { en: "A salon built on detail, trust, and time.", sw: "Saluni iliyojengwa kwa undani, imani, na muda." },
  "about.body1": {
    en: "Victor Salon opened in Dodoma with a simple mission: to bring modern, professional salon care to our city. What started as one chair has grown into a small team — but the principle has not changed: do fewer things, do them slowly, do them well.",
    sw: "Victor Salon ilifunguliwa Dodoma kwa lengo rahisi: kuleta huduma za kisasa za saluni jijini mwetu. Ilianza kama kiti kimoja na kukua kuwa timu ndogo — lakini msingi haujabadilika: fanya machache, polepole, vizuri.",
  },
  "about.body2": {
    en: "Our space is intentionally calm. Clean lines. Soft light. Time to talk before we begin.",
    sw: "Nafasi yetu ni tulivu kwa makusudi. Mistari safi. Mwanga laini. Muda wa kuzungumza kabla hatujaanza.",
  },
  "about.body3": {
    en: "We work with trusted product partners that meet two non-negotiable standards: clean composition and visible results.",
    sw: "Tunafanya kazi na washirika wa bidhaa wanaokidhi viwango viwili: viungo safi na matokeo yanayoonekana.",
  },
  "about.values.eyebrow": { en: "Values", sw: "Maadili" },
  "about.values.h": { en: "Three quiet commitments.", sw: "Ahadi tatu tulivu." },
  "about.value1.t": { en: "Care", sw: "Uangalifu" },
  "about.value1.d": { en: "No appointment is rushed. Time is the active ingredient.", sw: "Hakuna miadi inayoharakishwa. Muda ndio kiungo kikuu." },
  "about.value2.t": { en: "Craft", sw: "Ufundi" },
  "about.value2.d": { en: "Every stylist trains continuously. Education is part of the work.", sw: "Kila mtaalamu hujifunza daima. Elimu ni sehemu ya kazi." },
  "about.value3.t": { en: "Respect", sw: "Heshima" },
  "about.value3.d": { en: "Your visit is private. We listen first, then suggest.", sw: "Ziara yako ni ya faragha. Tunasikiliza kwanza, kisha tunashauri." },
  "about.team.eyebrow": { en: "The Team", sw: "Timu" },
  "about.team.h": { en: "Skilled hands. One philosophy.", sw: "Mikono ya ujuzi. Falsafa moja." },

  // Contact
  "contact.eyebrow": { en: "Reservations", sw: "Hifadhi" },
  "contact.h1": { en: "Write to us.", sw: "Tuandikie." },
  "contact.lead": {
    en: "We reply to every message within one business day. For same-day bookings, please call.",
    sw: "Tunajibu kila ujumbe ndani ya siku moja ya kazi. Kwa hifadhi ya siku hiyo hiyo, tafadhali piga simu.",
  },
  "contact.name": { en: "Name", sw: "Jina" },
  "contact.email": { en: "Email", sw: "Barua pepe" },
  "contact.message": { en: "Message", sw: "Ujumbe" },
  "contact.send": { en: "Send message", sw: "Tuma ujumbe" },
  "contact.sending": { en: "Sending…", sw: "Inatuma…" },
  "contact.visit": { en: "Visit", sw: "Tutembelee" },
  "contact.reach": { en: "Reach us", sw: "Wasiliana nasi" },
  "contact.hours": { en: "Hours", sw: "Saa za kazi" },
  "contact.success": { en: "Thank you. We will be in touch within 24 hours.", sw: "Asante. Tutawasiliana ndani ya saa 24." },
  "contact.error": { en: "Something went wrong. Please try again or call us.", sw: "Tatizo limetokea. Tafadhali jaribu tena au tupigie." },
  "contact.errName": { en: "Please enter your name", sw: "Tafadhali andika jina lako" },
  "contact.errEmail": { en: "Please enter a valid email", sw: "Tafadhali andika barua pepe sahihi" },
  "contact.errMsg": { en: "Tell us a little more", sw: "Tueleze zaidi kidogo" },
};

type Ctx = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  tr: (key: keyof typeof t) => string;
};

const SiteCtx = createContext<Ctx | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const savedTheme = (typeof window !== "undefined" && (localStorage.getItem("theme") as Theme)) || "light";
    const savedLang = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || "en";
    setThemeState(savedTheme);
    setLangState(savedLang);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);

  const tr = (key: keyof typeof t) => t[key]?.[lang] ?? String(key);

  return (
    <SiteCtx.Provider
      value={{
        theme,
        setTheme: setThemeState,
        toggleTheme: () => setThemeState((s) => (s === "dark" ? "light" : "dark")),
        lang,
        setLang: setLangState,
        toggleLang: () => setLangState((s) => (s === "en" ? "sw" : "en")),
        tr,
      }}
    >
      {children}
    </SiteCtx.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteCtx);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
