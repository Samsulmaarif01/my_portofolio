import data from "../data.json";
import { useLang, pick } from "../i18n";
import { ArrowUpRight } from "./icons";

type Project = (typeof data.projects)[number];
type Kind = "mobile-commerce" | "web-app" | "mobile-app" | "web-streaming" | "web-commerce" | "web-store";

/* Presentation-only: which mockup each project gets, derived from its real tech tags.
   Numbering is also derived from display order. No factual content lives here. */
const KIND_BY_ID: Record<string, Kind> = {
  "shamo": "mobile-commerce",
  "tugas-mahasiswa": "web-app",
  "coworkers": "mobile-app",
  "moonton": "web-streaming",
  "web-tiket": "web-commerce",
  "fashion-store": "web-store",
};
const PLATFORM_LABEL: Record<Kind, string> = {
  "mobile-commerce": "Mobile",
  "mobile-app": "Mobile",
  "web-app": "Web",
  "web-streaming": "Web",
  "web-commerce": "Web",
  "web-store": "Web",
};

/* ------------------------------------------------------------------ */
/*  Mockup palette — screens stay dark for contrast in both themes      */
/* ------------------------------------------------------------------ */

const S = {
  bezel: "#0b0a09",
  screen: "#1d1b18",
  block: "#282520",
  blockHi: "#312d27",
  soft: "rgba(234,230,221,0.30)",
  dim: "rgba(234,230,221,0.16)",
  faint: "rgba(234,230,221,0.08)",
  blue: "#5b7cfa",
  green: "#3baf7e",
  amber: "#e8a13a",
  violet: "#8b7cf6",
};
const ACCENT = "var(--accent)";

function repoPath(url: string) {
  return url.replace("https://github.com/", "");
}

/* ---------------------------- phone frame -------------------------- */

function Phone({ x, y, id, children }: { x: number; y: number; id: string; children: React.ReactNode }) {
  return (
    <g filter={`url(#ds-${id})`}>
      <rect x={x} y={y} width="212" height="430" rx="30" fill={S.bezel} />
      <rect x={x} y={y} width="212" height="430" rx="30" fill="none" stroke={S.faint} />
      <clipPath id={`clip-${id}`}>
        <rect x={x + 8} y={y + 8} width="196" height="414" rx="23" />
      </clipPath>
      <g clipPath={`url(#clip-${id})`}>
        <rect x={x + 8} y={y + 8} width="196" height="414" fill={S.screen} />
        {children}
      </g>
    </g>
  );
}

/* --------------------------- browser frame ------------------------- */

function Browser({ id, url, children }: { id: string; url: string; children: React.ReactNode }) {
  const shown = url.length > 46 ? url.slice(0, 44) + "…" : url;
  return (
    <g filter={`url(#ds-${id})`}>
      <rect x="60" y="42" width="680" height="436" rx="10" fill={S.bezel} />
      <path d="M60 92 h680 v378 a10 10 0 0 1 -10 10 H70 a10 10 0 0 1 -10 -10 Z" fill={S.screen} />
      {/* chrome bar */}
      <circle cx="86" cy="67" r="6" fill="#f56358" />
      <circle cx="108" cy="67" r="6" fill="#fbbd2e" />
      <circle cx="130" cy="67" r="6" fill="#57c353" />
      <rect x="156" y="54" width="480" height="26" rx="13" fill={S.block} />
      <text x="172" y="71" fontFamily="var(--font-mono)" fontSize="12" fill={S.soft}>{shown}</text>
      {children}
    </g>
  );
}

/* ------------------------------ screens ---------------------------- */

function ShamoScreen({ x, y }: { x: number; y: number }) {
  const px = x + 24;
  return (
    <>
      {/* status bar */}
      <text x={px} y={y + 30} fontFamily="var(--font-mono)" fontSize="11" fill={S.soft}>9:41</text>
      <rect x={px + 130} y={y + 20} width="18" height="10" rx="2" fill={S.soft} />
      {/* app bar */}
      <text x={px} y={y + 62} fontFamily="var(--font-mono)" fontSize="15" fontWeight="bold" fill="#eae6dd">SHAMO</text>
      <rect x={px + 148} y={y + 48} width="20" height="16" rx="3" fill="none" stroke={S.soft} strokeWidth="1.5" />
      {/* search */}
      <rect x={px} y={y + 76} width="164" height="26" rx="13" fill={S.block} />
      <text x={px + 12} y={y + 93} fontFamily="var(--font-mono)" fontSize="10" fill={S.dim}>Search sneakers…</text>
      {/* banner */}
      <rect x={px} y={y + 114} width="164" height="88" rx="8" fill={S.blue} opacity="0.85" />
      <path d={`M${px + 18} ${y + 168} q26 -34 52 -26 q26 6 48 -14 l0 26 q-50 18 -100 14 Z`} fill="none" stroke="#fff" strokeWidth="2" />
      <text x={px + 12} y={y + 132} fontFamily="var(--font-mono)" fontSize="9" fill="rgba(255,255,255,0.85)">NEW ARRIVAL</text>
      {/* product grid */}
      {[0, 1].map((i) => (
        <g key={i}>
          <rect x={px + i * 86} y={y + 214} width="78" height="96" rx="6" fill={S.block} />
          <rect x={px + i * 86 + 8} y={y + 222} width="62" height="44" rx="4" fill={i ? S.violet : S.green} opacity="0.55" />
          <rect x={px + i * 86 + 8} y={y + 274} width="48" height="7" rx="2" fill={S.soft} />
          <rect x={px + i * 86 + 8} y={y + 288} width="34" height="7" rx="2" fill={ACCENT} />
        </g>
      ))}
      {/* bottom nav */}
      <rect x={px} y={y + 372} width="164" height="1" fill={S.dim} />
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={px + 22 + i * 40} cy={y + 394} r="6" fill={i === 0 ? ACCENT : "transparent"} stroke={i === 0 ? "none" : S.dim} strokeWidth="1.5" />
      ))}
    </>
  );
}

function TugasScreen() {
  const rows = [0, 1, 2, 3];
  return (
    <>
      {/* sidebar */}
      <rect x="60" y="120" width="170" height="316" fill={S.block} opacity="0.45" />
      {rows.map((i) => (
        <rect key={i} x="80" y={146 + i * 34} width={104 - (i % 2) * 24} height="9" rx="2" fill={i === 0 ? ACCENT : S.dim} />
      ))}
      {/* header */}
      <rect x="254" y="122" width="190" height="13" rx="3" fill={S.soft} opacity="0.75" />
      <rect x="586" y="116" width="118" height="28" rx="4" fill={ACCENT} />
      <text x="616" y="135" fontFamily="var(--font-mono)" fontSize="11" fontWeight="bold" fill="#fff">+ UPLOAD</text>
      {/* table head */}
      <line x1="254" y1="166" x2="704" y2="166" stroke={S.dim} />
      <text x="254" y="184" fontFamily="var(--font-mono)" fontSize="9" fill={S.dim}>TUGAS</text>
      <text x="560" y="184" fontFamily="var(--font-mono)" fontSize="9" fill={S.dim}>DEADLINE</text>
      {rows.map((i) => (
        <g key={i}>
          <rect x="254" y={200 + i * 56} width="14" height="14" rx="3" fill={i === 1 ? ACCENT : "none"} stroke={i === 1 ? "none" : S.soft} strokeWidth="1.4" />
          <rect x="280" y={203 + i * 56} width={210 - i * 26} height="9" rx="2" fill={S.soft} opacity="0.55" />
          <rect x={540} y={199 + i * 56} width={110 - i * 12} height="16" rx="8" fill={i === 1 ? S.green : S.blockHi} opacity={i === 1 ? 0.85 : 1} />
        </g>
      ))}
    </>
  );
}

function CoworkersScreen({ x, y }: { x: number; y: number }) {
  const px = x + 24;
  return (
    <>
      {/* header / map hint */}
      <rect x={px} y={y + 18} width="164" height="74" rx="8" fill={S.blockHi} />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={px} y1={y + 38 + i * 20} x2={px + 164} y2={y + 32 + i * 24} stroke={S.dim} />
      ))}
      <path d={`M${px + 82} ${y + 40} l10 14 l-10 16 l-10 -16 Z`} fill={ACCENT} />
      {/* title */}
      <text x={px} y={y + 122} fontFamily="var(--font-mono)" fontSize="13" fontWeight="bold" fill="#eae6dd">Coworkers</text>
      {/* day chips */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={px + i * 34} y={y + 136} width="28" height="30" rx="6" fill={i === 2 ? ACCENT : S.block} />
      ))}
      {/* room cards */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={px} y={y + 186 + i * 66} width="164" height="54" rx="8" fill={S.block} />
          <rect x={px + 10} y={y + 198 + i * 66} width="64" height="8" rx="2" fill={S.soft} opacity="0.6" />
          <rect x={px + 10} y={y + 214 + i * 66} width="42" height="6" rx="2" fill={S.dim} />
          <rect x={px + 112} y={y + 198 + i * 66} width="42" height="20" rx="10" fill={i === 0 ? S.green : "none"} stroke={i === 0 ? "none" : S.soft} strokeWidth="1" />
        </g>
      ))}
      {/* FAB */}
      <circle cx={x + 178} cy={y + 392} r="17" fill={ACCENT} />
      <path d={`M${x + 172} ${y + 392} h12 M${x + 178} ${y + 386} v12`} stroke="#fff" strokeWidth="2" />
    </>
  );
}

function MoontonScreen() {
  return (
    <>
      {/* nav */}
      <rect x="84" y="116" width="72" height="11" rx="2" fill={ACCENT} />
      <rect x="500" y="118" width="34" height="7" rx="2" fill={S.dim} />
      <rect x="544" y="118" width="34" height="7" rx="2" fill={S.dim} />
      <rect x="588" y="118" width="34" height="7" rx="2" fill={S.dim} />
      {/* hero banner */}
      <rect x="84" y="144" width="632" height="150" rx="8" fill={S.violet} opacity="0.75" />
      <circle cx="152" cy="219" r="26" fill="none" stroke="#fff" strokeWidth="2.5" />
      <path d="M145 205 l22 14 l-22 14 Z" fill="#fff" />
      <rect x="200" y="192" width="170" height="12" rx="3" fill="#fff" opacity="0.9" />
      <rect x="200" y="216" width="250" height="8" rx="2" fill="#fff" opacity="0.4" />
      <rect x="200" y="232" width="90" height="18" rx="9" fill={S.bezel} opacity="0.55" />
      {/* thumbnails */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={84 + i * 162} y="318" width="146" height="82" rx="6" fill={[S.blue, S.green, S.amber, S.violet][i]} opacity="0.5" />
          <path d={`M${147 + i * 162} 350 l16 10 l-16 10 Z`} fill="#fff" opacity="0.9" />
          <rect x={84 + i * 162} y="408" width="100" height="7" rx="2" fill={S.soft} opacity="0.5" />
        </g>
      ))}
    </>
  );
}

function TiketScreen() {
  return (
    <>
      <rect x="84" y="116" width="140" height="11" rx="2" fill={S.soft} opacity="0.75" />
      {/* seat map */}
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3, 4, 5, 6].map((col) => {
          const taken = (row * 7 + col * 3) % 5 === 0;
          const picked = row === 1 && col === 3;
          return (
            <rect
              key={`${row}-${col}`}
              x={100 + col * 68}
              y={158 + row * 64}
              width="48"
              height="46"
              rx="6"
              fill={picked ? S.green : taken ? "transparent" : S.blockHi}
              stroke={taken ? S.dim : picked ? "none" : S.dim}
              strokeWidth="1"
            />
          );
        })
      )}
      {/* summary card */}
      <rect x="600" y="150" width="128" height="180" rx="8" fill={S.block} />
      <rect x="612" y="166" width="70" height="8" rx="2" fill={S.soft} opacity="0.6" />
      <text x="612" y="200" fontFamily="var(--font-mono)" fontSize="13" fontWeight="bold" fill={S.green}>B4</text>
      <rect x="612" y="290" width="104" height="24" rx="4" fill={ACCENT} />
      <text x="634" y="306" fontFamily="var(--font-mono)" fontSize="10" fontWeight="bold" fill="#fff">PAY</text>
      {/* legend */}
      <circle cx="102" cy="440" r="6" fill={S.blockHi} />
      <text x="116" y="444" fontFamily="var(--font-mono)" fontSize="9" fill={S.dim}>AVAILABLE</text>
      <circle cx="220" cy="440" r="6" fill={S.green} />
      <text x="234" y="444" fontFamily="var(--font-mono)" fontSize="9" fill={S.dim}>SELECTED</text>
    </>
  );
}

function FashionScreen() {
  return (
    <>
      {/* nav */}
      <text x="84" y="126" fontFamily="var(--font-mono)" fontSize="13" fontWeight="bold" fill="#eae6dd">FashionStore</text>
      <rect x="600" y="112" width="20" height="16" rx="3" fill="none" stroke={S.soft} strokeWidth="1.5" />
      <circle cx="700" cy="120" r="8" fill={ACCENT} />
      <text x="697" y="124" fontFamily="var(--font-mono)" fontSize="10" fontWeight="bold" fill="#fff">2</text>
      {/* hero split */}
      <rect x="84" y="150" width="300" height="160" rx="8" fill={S.amber} opacity="0.65" />
      <path d="M180 270 q40 -70 90 -52 l14 40 l-30 22 v40 h-60 v-36 Z" fill="none" stroke={S.bezel} strokeWidth="2.5" transform="rotate(-6 225 260)" />
      <rect x="410" y="168" width="220" height="16" rx="3" fill={S.soft} opacity="0.85" />
      <rect x="410" y="196" width="180" height="9" rx="2" fill={S.dim} />
      <rect x="410" y="214" width="200" height="9" rx="2" fill={S.dim} />
      <rect x="410" y="244" width="96" height="26" rx="4" fill={S.bezel} stroke={S.soft} strokeWidth="1" />
      <text x="430" y="261" fontFamily="var(--font-mono)" fontSize="10" fill={S.soft}>SHOP NOW</text>
      {/* product row */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={84 + i * 216} y="330" width="200" height="110" rx="8" fill={S.block} />
          <rect x={84 + i * 216 + 10} y="340" width="86" height="66" rx="5" fill={[S.violet, S.blue, S.green][i]} opacity="0.5" />
          <rect x={188 + i * 216} y="344" width="80" height="8" rx="2" fill={S.soft} opacity="0.6" />
          <rect x={188 + i * 216} y="360" width="52" height="8" rx="2" fill={ACCENT} />
        </g>
      ))}
    </>
  );
}

/* ------------------------------ dispatcher ------------------------- */

function PlateArt({ project, kind }: { project: Project; kind: Kind }) {
  const url = project.github ? repoPath(project.github) : "";
  switch (kind) {
    case "mobile-commerce":
      return (
        <svg viewBox="0 0 800 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <filter id={`ds-${project.id}`} x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#000" floodOpacity="0.5" />
            </filter>
          </defs>
          {/* backdrop accents */}
          <circle cx="640" cy="120" r="150" fill={S.blue} opacity="0.07" />
          <Phone x={294} y={45} id={project.id}>
            <ShamoScreen x={294} y={45} />
          </Phone>
          {/* floating cart chip */}
          <g filter={`url(#ds-${project.id})`}>
            <rect x="472" y="330" width="132" height="52" rx="12" fill={S.blockHi} />
            <circle cx="496" cy="356" r="10" fill={S.green} />
            <rect x="514" y="344" width="66" height="7" rx="2" fill={S.soft} opacity="0.7" />
            <rect x="514" y="360" width="42" height="7" rx="2" fill={ACCENT} />
          </g>
        </svg>
      );

    case "web-app":
      return (
        <svg viewBox="0 0 800 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <filter id={`ds-${project.id}`} x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#000" floodOpacity="0.5" />
            </filter>
          </defs>
          <circle cx="150" cy="420" r="160" fill={S.green} opacity="0.06" />
          <Browser id={project.id} url={url}>
            <TugasScreen />
          </Browser>
        </svg>
      );

    case "mobile-app":
      return (
        <svg viewBox="0 0 800 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <filter id={`ds-${project.id}`} x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#000" floodOpacity="0.5" />
            </filter>
          </defs>
          <circle cx="180" cy="140" r="150" fill={S.amber} opacity="0.07" />
          <Phone x={294} y={45} id={project.id}>
            <CoworkersScreen x={294} y={45} />
          </Phone>
          {/* booking confirmation chip */}
          <g filter={`url(#ds-${project.id})`}>
            <rect x="196" y="120" width="150" height="56" rx="12" fill={S.blockHi} />
            <circle cx="220" cy="148" r="10" fill={S.green} />
            <path d="M215 148 l4 4 l7 -8" stroke="#fff" strokeWidth="2" fill="none" />
            <rect x="238" y="134" width="80" height="7" rx="2" fill={S.soft} opacity="0.7" />
            <rect x="238" y="150" width="56" height="7" rx="2" fill={S.dim} />
          </g>
        </svg>
      );

    case "web-streaming":
      return (
        <svg viewBox="0 0 800 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <filter id={`ds-${project.id}`} x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#000" floodOpacity="0.5" />
            </filter>
          </defs>
          <circle cx="660" cy="400" r="170" fill={S.violet} opacity="0.08" />
          <Browser id={project.id} url={url}>
            <MoontonScreen />
          </Browser>
        </svg>
      );

    case "web-commerce":
      return (
        <svg viewBox="0 0 800 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <filter id={`ds-${project.id}`} x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#000" floodOpacity="0.5" />
            </filter>
          </defs>
          <Browser id={project.id} url={url}>
            <TiketScreen />
          </Browser>
        </svg>
      );

    case "web-store":
    default:
      return (
        <svg viewBox="0 0 800 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <filter id={`ds-${project.id}`} x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#000" floodOpacity="0.5" />
            </filter>
          </defs>
          <circle cx="680" cy="110" r="150" fill={S.amber} opacity="0.07" />
          <Browser id={project.id} url={url}>
            <FashionScreen />
          </Browser>
        </svg>
      );
  }
}

/* ------------------------------------------------------------------ */
/*  Entry                                                              */
/* ------------------------------------------------------------------ */

function MetaRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-t border-line py-2.5 font-mono text-[11px] uppercase tracking-[0.13em]">
      <span className="text-mut shrink-0">{label}</span>
      <span className="text-right text-soft">{value}</span>
    </div>
  );
}

function Entry({ project, index }: { project: Project; index: number }) {
  const no = String(index + 1).padStart(2, "0");
  const flip = index % 2 === 1; // odd projects: info left / image right
  const kind = KIND_BY_ID[project.id];
  const { t, lang } = useLang();
  const statusLabel = project.status === "Live" ? t("work.status_live") : t("work.status_completed");
  const platform = PLATFORM_LABEL[kind];
  const description = pick(lang, project.description, project.description_en);

  const figure = (
    <figure className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
      <div className="group">
        <a
          href={project.demo || project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label={`${project.title}${project.demo ? " — live demo" : " — source code"}`}
        >
          <div className="plate aspect-[16/10] md:aspect-[4/3]">
            <PlateArt project={project} kind={kind} />
          </div>
        </a>
      </div>
      <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-mut">
        <span>{platform}</span>
        <span className={project.status === "Live" ? "text-accent" : ""}>{statusLabel}</span>
      </figcaption>
    </figure>
  );

  const info = (
    <div className={`relative lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
      <span className="ghost-num hidden lg:block" aria-hidden="true">{no}</span>

      <div className="relative z-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mut mb-3 flex items-center gap-3">
          <span className="text-accent">{no}</span>
          <span className="w-5 h-px bg-line-2 inline-block" />
          {PLATFORM_LABEL[kind]}
        </p>
        <h3 className="font-display text-2xl md:text-[1.9rem] font-semibold tracking-tight leading-tight">
          <a href={project.demo || project.github} target="_blank" rel="noopener noreferrer" className="u-link hover:text-accent transition-colors">
            {project.title}
          </a>
        </h3>
      </div>

      <p className="relative z-10 mt-4 text-soft leading-relaxed text-[15px]">
        {description}
      </p>

      <p className="relative z-10 mt-4 font-mono text-[11px] uppercase tracking-[0.13em]">
        <span className="text-mut">{t("work.stack_label")} — </span>
        <span className="text-fg/80">{project.tags.join(" · ")}</span>
      </p>

      <div className="relative z-10 mt-6">
        <MetaRow label="Status" value={statusLabel} />
        <div className="border-t border-line pt-3 mt-1 flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.13em]">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-fg transition-colors inline-flex items-center gap-1.5">
              {t("work.view_live")} <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-soft hover:text-accent transition-colors">
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <article className="reveal grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8 items-center">
      {figure}
      {info}
    </article>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export default function Work() {
  const { t } = useLang();
  return (
    <section id="work" className="relative z-10 pt-24 md:pt-32">
      <div className="page-frame">
        <header className="reveal border-t border-line pt-5 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-mut">
          <span><span className="text-accent">01</span> / {t("work.header")}</span>
          <span>{String(data.projects.length).padStart(2, "0")} {t("work.count")}</span>
        </header>

        <h2 className="reveal mt-8 md:mt-10 mb-12 md:mb-16 font-display font-semibold tracking-[-0.02em] leading-none text-[clamp(2rem,4.5vw,3.25rem)]">
          {t("work.heading")}
        </h2>

        <div className="space-y-20 md:space-y-28 pb-4">
          {data.projects.map((p, i) => (
            <Entry key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
