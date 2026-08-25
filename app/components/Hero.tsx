"use client";

import { useEffect, useState } from "react";
import data from "../data.json";
import { ArrowUpRight } from "./icons";

function LocalTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Jakarta",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return <span>{time ? `${time} WIB` : "--:-- WIB"}</span>;
}

export default function Hero() {
  const { title } = data.profile;

  return (
    <section id="top" className="relative z-10 overflow-hidden">
      <div className="grid-texture" aria-hidden="true" />

      <div className="page-frame relative pt-36 md:pt-44 pb-14 md:pb-20">
        {/* System strip */}
        <div className="reveal flex items-center justify-between border-b border-line pb-5 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-mut">
          <span>
            <span className="text-accent">●</span> Available for freelance &amp; collaboration
          </span>
          <span className="hidden sm:inline">Portfolio — {new Date().getFullYear()}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10 pt-12 md:pt-16">
          {/* Name + statement */}
          <div className="lg:col-span-7">
            <h1 className="reveal font-display font-semibold uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.7rem,5.5vw,4.5rem)]">
              Samsul Maarif
            </h1>

            <p className="reveal mt-4 font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-soft" style={{ "--reveal-delay": "70ms" } as React.CSSProperties}>
              Software Engineer <span className="text-accent mx-1">/</span> Web · Mobile · Backend
            </p>

            <p className="reveal mt-8 max-w-lg text-lg md:text-xl leading-relaxed text-soft" style={{ "--reveal-delay": "140ms" } as React.CSSProperties}>
              I build practical digital products — from{" "}
              <em className="font-serif italic text-fg">interface</em> to{" "}
              <em className="font-serif italic text-fg">backend</em>. Web platforms,
              Flutter apps, and the systems underneath them.
            </p>

            <div className="reveal mt-9 flex flex-wrap items-center gap-4" style={{ "--reveal-delay": "210ms" } as React.CSSProperties}>
              <a href="#work" className="btn-solid">
                View my work <span className="arrow-shift inline-block">↓</span>
              </a>
              <a href="#contact" className="btn-ghost group">
                Contact me <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Spec panel */}
          <aside
            className="reveal lg:col-span-4 lg:col-start-8 self-center"
            style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          >
            <div className="border-l-2 border-line-2 pl-5 md:pl-6 space-y-4 font-mono text-xs leading-relaxed">
              <div className="flex justify-between gap-4">
                <span className="text-mut shrink-0 w-16">STATUS</span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Open to work
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-mut shrink-0 w-16">BASED IN</span>
                <span>Indonesia · UTC+7</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-mut shrink-0 w-16">LOCAL TIME</span>
                <LocalTime />
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-mut shrink-0 w-16">STACK</span>
                <span className="text-right">React · Flutter · Laravel · Node.js</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-mut shrink-0 w-16">FOCUS</span>
                <span className="text-right">{title.split(" & ").join(" · ")}</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom metadata row */}
        <div className="reveal mt-14 md:mt-20 flex flex-wrap gap-x-8 gap-y-2 justify-between border-t border-line pt-4 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-mut" style={{ "--reveal-delay": "260ms" } as React.CSSProperties}>
          <span>Based in Indonesia — open to remote</span>
          <span>6.34°S 106.72°E</span>
          <a href="#work" className="hidden md:inline hover:text-fg transition-colors">Scroll for projects ↓</a>
        </div>
      </div>
    </section>
  );
}
