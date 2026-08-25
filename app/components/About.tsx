import data from "../data.json";

export default function About() {
  const meta = [
    { label: "Focus", value: "Web / Mobile / Backend" },
    { label: "Stack", value: "React · Flutter · Laravel · Node.js" },
    { label: "Based in", value: "Indonesia — UTC+7" },
    { label: "Status", value: "Open to work & collaboration" },
  ];

  return (
    <section id="about" className="relative z-10 pt-24 md:pt-32">
      <div className="page-frame">
        <header className="reveal border-t border-line pt-5 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-mut">
          <span><span className="text-accent">02</span> / About</span>
          <span className="hidden sm:inline">$ whoami</span>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:gap-x-16 gap-y-10 mt-8 md:mt-10 pb-4 items-start">
          <div>
            <h2 className="reveal font-display font-semibold tracking-[-0.02em] leading-[1.08] text-[clamp(1.9rem,3.8vw,3rem)] max-w-xl">
              I like turning ideas into{" "}
              <em className="font-serif italic">useful</em> software.
            </h2>

            <div className="reveal mt-7 space-y-4 text-soft leading-relaxed text-[15px] md:text-base max-w-xl" style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
              <p>{data.about.description}</p>
              <p>{data.about.secondaryDescription}</p>
            </div>
          </div>

          <aside className="space-y-6" style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
            <dl className="reveal">
              {meta.map((m) => (
                <div key={m.label} className="border-t border-line py-3 last:border-b flex justify-between gap-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mut shrink-0 pt-0.5">{m.label}</dt>
                  <dd className="text-sm text-right">{m.value}</dd>
                </div>
              ))}
            </dl>

            {/* Small terminal — a nod to the engineer behind the site */}
            <div className="reveal term" style={{ "--reveal-delay": "220ms" } as React.CSSProperties}>
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
                <i className="w-2 h-2 rounded-full bg-[#f56358]" />
                <i className="w-2 h-2 rounded-full bg-[#fbbd2e]" />
                <i className="w-2 h-2 rounded-full bg-[#57c353]" />
              </div>
              <div className="px-4 py-3">
                <p><span className="text-accent">$</span> <span className="text-soft">whoami</span></p>
                <p className="text-fg/80">samsul-maarif — web &amp; flutter engineer</p>
                <p className="mt-2"><span className="text-accent">$</span> <span className="text-soft">stack --primary</span></p>
                <p className="text-fg/80">react · flutter · laravel · node</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
