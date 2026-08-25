"use client";

import { useState } from "react";
import data from "../data.json";
import { GithubMark, LinkedinMark, ArrowUpRight } from "./icons";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { email, github, linkedin } = data.profile;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio — ${form.get("name")}`);
    const body = encodeURIComponent(`${form.get("message")}\n\n— ${form.get("name")} (${form.get("email")})`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative z-10 band pt-24 md:pt-32 pb-20 md:pb-24 border-t border-line">
      <div className="page-frame">
        <header className="reveal border-t border-line pt-5 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-mut">
          <span><span className="text-accent">05</span> / Contact</span>
          <span className="hidden sm:inline">Response &lt; 24h</span>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 mt-8 md:mt-10">
          {/* Statement + channels */}
          <div className="lg:col-span-6">
            <h2 className="reveal font-display font-semibold uppercase tracking-[-0.02em] leading-[0.98] text-[clamp(2.4rem,5vw,4rem)]">
              Let&apos;s build<br />
              something<span className="text-accent">.</span>
            </h2>

            <p className="reveal mt-6 max-w-md text-soft leading-relaxed" style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
              Have an idea, a project, or a role that needs an engineer who
              ships? Tell me about it.
            </p>

            <a
              href={`mailto:${email}`}
              className="reveal group mt-8 inline-flex items-center gap-3 font-mono text-base md:text-lg hover:text-accent transition-colors"
              style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
            >
              <span className="u-link">{email}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="reveal mt-7 flex flex-wrap gap-3" style={{ "--reveal-delay": "210ms" } as React.CSSProperties}>
              <a href={github} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2.5 !px-4">
                <GithubMark className="w-4 h-4" /> GitHub
              </a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2.5 !px-4">
                <LinkedinMark className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Compact form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-4 lg:col-start-8 reveal flex flex-col gap-6"
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label htmlFor="c-name" className="font-mono text-[10px] uppercase tracking-[0.18em] text-mut">Name</label>
                <input id="c-name" name="name" type="text" required placeholder="Your name" className="field mt-1" />
              </div>
              <div>
                <label htmlFor="c-email" className="font-mono text-[10px] uppercase tracking-[0.18em] text-mut">Email</label>
                <input id="c-email" name="email" type="email" required placeholder="you@domain.com" className="field mt-1" />
              </div>
            </div>
            <div>
              <label htmlFor="c-msg" className="font-mono text-[10px] uppercase tracking-[0.18em] text-mut">Message</label>
              <textarea id="c-msg" name="message" required rows={4} placeholder="What are we building?" className="field mt-1 resize-none" />
            </div>
            <div className="flex items-center gap-5 flex-wrap">
              <button type="submit" className="btn-solid">
                Send message <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <p className="font-mono text-[10px] text-mut max-w-[16rem] leading-relaxed">
                {sent ? "Draft opened in your mail client — hit send there." : "Opens your mail client. Nothing is stored."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
