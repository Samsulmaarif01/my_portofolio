"use client";

import data from "../data.json";
import { useLang } from "../i18n";
import { GithubMark, LinkedinMark } from "./icons";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative z-10 border-t border-line bg-bg">
      <div className="page-frame py-7 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-mut">
          © {new Date().getFullYear()} {data.profile.name}
        </div>

        <div className="font-mono text-[11px] tracking-[0.14em] text-mut select-none" aria-hidden="true">
          system <span className="text-line-2">▸</span> <span className="text-soft">build</span> <span className="text-line-2">▸</span> ship
        </div>

        <div className="flex items-center gap-6">
          <a href={data.profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-mut hover:text-fg transition-colors">
            <GithubMark className="w-[18px] h-[18px]" />
          </a>
          <a href={data.profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-mut hover:text-fg transition-colors">
            <LinkedinMark className="w-[18px] h-[18px]" />
          </a>
          <a href={`mailto:${data.profile.email}`} className="font-mono text-[11px] uppercase tracking-[0.14em] text-mut hover:text-fg transition-colors">
            {t("footer.email")}
          </a>
          <a href="#top" className="font-mono text-[11px] uppercase tracking-[0.14em] text-mut hover:text-accent transition-colors">
            {t("footer.top")}
          </a>
        </div>
      </div>
    </footer>
  );
}
