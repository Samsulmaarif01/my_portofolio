"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";

export type Lang = "en" | "id";

/* Single flat dictionary — every user-facing string lives here so the
   page never mixes languages. Data-driven facts (names, links, techs,
   years) stay in data.json; their descriptive text got paired *_en
   fields there. */
const DICT = {
  // Navigation
  "nav.work": { en: "Work", id: "Proyek" },
  "nav.about": { en: "About", id: "Tentang" },
  "nav.experience": { en: "Experience", id: "Pengalaman" },
  "nav.contact": { en: "Contact", id: "Kontak" },
  "nav.available": { en: "Open to work", id: "Terbuka untuk kerja" },

  // Hero
  "hero.strip_available": { en: "Available for freelance & collaboration", id: "Tersedia untuk freelance & kolaborasi" },
  "hero.portfolio": { en: "Portfolio", id: "Portofolio" },
  "hero.cta_work": { en: "View my work", id: "Lihat proyek saya" },
  "hero.cta_contact": { en: "Contact me", id: "Hubungi saya" },
  "hero.lbl_status": { en: "STATUS", id: "STATUS" },
  "hero.lbl_base": { en: "BASED IN", id: "LOKASI" },
  "hero.lbl_time": { en: "LOCAL TIME", id: "WAKTU SETEMPAT" },
  "hero.lbl_stack": { en: "STACK", id: "STACK" },
  "hero.lbl_focus": { en: "FOCUS", id: "FOKUS" },
  "hero.val_status": { en: "Open to work", id: "Terbuka untuk kerja" },
  "hero.meta_based": { en: "Based in Indonesia — open to remote", id: "Berdasar di Indonesia — terbuka untuk remote" },
  "hero.meta_scroll": { en: "Scroll for projects ↓", id: "Gulir ke proyek ↓" },

  // Work
  "work.header": { en: "Selected work", id: "Proyek terpilih" },
  "work.count": { en: "projects", id: "proyek" },
  "work.heading": { en: "Things I've built.", id: "Hal yang sudah saya bangun." },
  "work.stack_label": { en: "Stack", id: "Teknologi" },
  "work.view_live": { en: "View live", id: "Lihat live" },
  "work.github": { en: "GitHub", id: "GitHub" },
  "work.status_completed": { en: "Completed", id: "Selesai" },
  "work.status_live": { en: "Live", id: "Live" },
  "work.platform_mobile": { en: "Mobile", id: "Mobile" },
  "work.platform_web": { en: "Web", id: "Web" },

  // About
  "about.header": { en: "About", id: "Tentang" },
  "about.lbl_focus": { en: "Focus", id: "Fokus" },
  "about.lbl_stack": { en: "Stack", id: "Stack" },
  "about.lbl_base": { en: "Based in", id: "Lokasi" },
  "about.lbl_status": { en: "Status", id: "Status" },
  "about.val_focus": { en: "Web / Mobile / Backend", id: "Web / Mobile / Backend" },
  "about.val_base": { en: "Indonesia — UTC+7", id: "Indonesia — UTC+7" },
  "about.val_status": { en: "Open to work & collaboration", id: "Terbuka untuk kerja & kolaborasi" },

  // Experience
  "exp.header": { en: "Experience", id: "Pengalaman" },
  "exp.range": { en: "2021 → present", id: "2021 → sekarang" },
  "exp.education": { en: "Education", id: "Pendidikan" },
  "exp.certs": { en: "Certifications & courses", id: "Sertifikasi & kursus" },

  // Capabilities
  "cap.header": { en: "Technical capabilities", id: "Kapabilitas teknis" },
  "cap.heading": { en: "The toolbox.", id: "Perangkat saya." },

  // Contact
  "contact.header": { en: "Contact", id: "Kontak" },
  "contact.note": { en: "Response < 24h", id: "Respons < 24 jam" },
  "contact.heading": { en: "Let's build something.", id: "Mari membangun sesuatu." },
  "contact.sub": {
    en: "Have an idea, a project, or a role that needs an engineer who ships? Tell me about it.",
    id: "Punya ide, proyek, atau posisi yang butuh engineer yang mengeksekusi? Ceritakan kepada saya.",
  },
  "contact.f_name": { en: "Name", id: "Nama" },
  "contact.f_email": { en: "Email", id: "Email" },
  "contact.f_message": { en: "Message", id: "Pesan" },
  "contact.ph_name": { en: "Your name", id: "Namamu" },
  "contact.ph_message": { en: "What are we building?", id: "Apa yang ingin kita bangun?" },
  "contact.send": { en: "Send message", id: "Kirim pesan" },
  "contact.note_idle": {
    en: "Opens your mail client. Nothing is stored.",
    id: "Membuka aplikasi mail kamu. Tidak ada data yang disimpan.",
  },
  "contact.note_sent": {
    en: "Draft opened in your mail client — hit send there.",
    id: "Draft terbuka di aplikasi mail kamu — kirim dari sana.",
  },

  // Footer
  "footer.top": { en: "Top ↑", id: "Ke atas ↑" },
  "footer.email": { en: "Email", id: "Email" },
} as const;

export type TKey = keyof typeof DICT;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: TKey) => string;
};

const LangCtx = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => DICT[k].en,
});


/* ---- language store (localStorage-backed external store) ------------- */

type Listener = () => void;
const listeners = new Set<Listener>();

function subscribe(listener: Listener) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function getSnapshot(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "id" || saved === "en") return saved;
    return (navigator.language || "en").toLowerCase().startsWith("id") ? "id" : "en";
  } catch {
    return "en";
  }
}

const getServerSnapshot = (): Lang => "en";

function writeLang(lang: Lang) {
  try {
    localStorage.setItem("lang", lang);
  } catch {}
  document.documentElement.lang = lang;
  listeners.forEach((l) => l());
}

export function LangProvider({ children }: { children: ReactNode }) {
  /* Hydrates with "en" (matching prerendered HTML), then adopts the
     visitor's stored/browser preference without a mismatch. */
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const t = (k: TKey) => DICT[k][lang];
  return <LangCtx.Provider value={{ lang, setLang: writeLang, t }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);

/** Pick the matching variant of a paired data field, falling back gracefully. */
export function pick(lang: Lang, id: string | undefined, en: string | undefined): string {
  return (lang === "id" ? id : en) ?? id ?? en ?? "";
}
