"use client";

import { useEffect, useState } from "react";
import data from "../data.json";
import { SunIcon, MoonIcon } from "./icons";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function ThemeToggle({ className }: { className?: string }) {
  const toggle = () => {
    const el = document.documentElement;
    const isLight = el.classList.contains("light");
    el.classList.toggle("light", !isLight);
    el.classList.toggle("dark", isLight);
    try {
      localStorage.setItem("theme", isLight ? "dark" : "light");
    } catch {}
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className={`theme-toggle w-9 h-9 flex items-center justify-center border border-line hover:border-line-2 text-soft hover:text-fg transition-colors ${className ?? ""}`}
    >
      <SunIcon className="when-dark w-4 h-4" />
      <MoonIcon className="when-light w-4 h-4" />
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-bg/85 backdrop-blur-sm border-b border-line">
        <div className="page-frame h-16 flex items-center justify-between gap-6">
          <a href="#top" className="font-display font-semibold tracking-tight text-[15px]">
            SAMSUL<span className="text-accent">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-[0.14em]">
            {LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="nav-link">{l.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Availability indicator */}
            <span className="hidden lg:inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-mut mr-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Open to work
            </span>
            <ThemeToggle />
            <button
              className={`burger md:hidden w-9 h-9 flex flex-col items-end justify-center gap-[5px] ${open ? "open" : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-bg/97 backdrop-blur-sm md:hidden transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden={!open}
      >
        <div className="page-frame pt-24 pb-8 h-full flex flex-col">
          <nav className="flex flex-col">
            {LINKS.map((l, i) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`group flex items-baseline justify-between py-5 border-b border-line transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
              >
                <span className="font-display text-3xl font-medium tracking-tight group-hover:text-accent transition-colors">
                  {l.label}
                </span>
                <span className="font-mono text-xs text-mut">0{i + 1}</span>
              </a>
            ))}
          </nav>

          <div className="mt-auto font-mono text-xs text-mut space-y-2">
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Open to freelance &amp; collaboration
            </p>
            <p>{data.profile.location} — 6.34°S 106.72°E</p>
          </div>
        </div>
      </div>
    </>
  );
}
