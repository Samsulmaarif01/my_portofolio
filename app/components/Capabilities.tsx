import data from "../data.json";

export default function Capabilities() {
  return (
    <section id="stack" className="relative z-10 pt-24 md:pt-32 pb-20 md:pb-24">
      <div className="page-frame">
        <header className="reveal border-t border-line pt-5 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-mut">
          <span><span className="text-accent">04</span> / Technical capabilities</span>
          <span className="hidden sm:inline">spec v{new Date().getFullYear()}</span>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8 mt-8 md:mt-10">
          <h2 className="reveal lg:col-span-4 font-display font-semibold tracking-[-0.02em] leading-tight text-[clamp(1.7rem,3vw,2.4rem)]">
            The toolbox<span className="text-accent">.</span>
          </h2>

          {/* Specification list */}
          <dl className="lg:col-span-8 reveal" style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
            {data.skills.map((cat) => (
              <div
                key={cat.id}
                className="group grid grid-cols-[7.5rem_1fr] sm:grid-cols-[10rem_1fr] gap-x-6 items-baseline border-t border-line py-3.5 last:border-b hover:bg-panel/60 transition-colors"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-mut group-hover:text-accent transition-colors">
                  {cat.label}
                </dt>
                <dd className="text-[15px] leading-relaxed">{cat.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
