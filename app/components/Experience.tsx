import data from "../data.json";

export default function Experience() {
  const work = data.experience;
  const education = data.education;

  /* Group certifications by year for a compact, scannable list */
  const certYears = [...new Set(data.certifications.map((c) => c.year))].sort((a, b) => Number(b) - Number(a));

  return (
    <section id="experience" className="relative z-10 band pt-24 md:pt-32 pb-20 md:pb-28 border-y border-line">
      <div className="page-frame">
        <header className="reveal border-t border-line pt-5 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-mut">
          <span><span className="text-accent">03</span> / Experience</span>
          <span className="hidden sm:inline">2021 → present</span>
        </header>

        {/* Work timeline */}
        <div className="mt-8 md:mt-10">
          {work.map((e) => (
            <article key={e.year} className="reveal grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-2 border-t border-line py-7 last:border-b relative">
              <span className="hidden md:block absolute left-0 top-9 w-[5px] h-[5px] bg-accent -translate-x-[calc(50%+3px)]" aria-hidden="true" />
              <p className="md:col-span-2 font-mono text-sm text-accent">{e.year}</p>
              <div className="md:col-span-4">
                <h3 className="font-display text-lg md:text-xl font-semibold tracking-tight">{e.subtitle}</h3>
                <p className="mt-0.5 text-sm text-soft">{e.title}</p>
              </div>
              <div className="md:col-span-6 mt-1.5 md:mt-0">
                <p className="text-soft leading-relaxed text-[15px] max-w-xl">{e.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Education + certifications */}
        <div className="mt-14 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10 pb-2">
          <div className="lg:col-span-5 reveal">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-mut mb-4">Education</h3>
            {education.map((ed) => (
              <div key={ed.title} className="border-t border-line py-3.5 last:border-b flex items-baseline justify-between gap-4">
                <div>
                  <p className="font-medium">{ed.title}</p>
                  <p className="text-sm text-mut">{ed.subtitle}</p>
                  {ed.description && (
                    <p className="mt-1 text-[13px] text-mut/90 leading-snug max-w-sm">{ed.description}</p>
                  )}
                </div>
                <p className="font-mono text-[11px] text-mut shrink-0">{ed.year}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-6 lg:col-start-7 reveal" style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-mut mb-4">Certifications &amp; courses</h3>
            {certYears.map((year) => {
              const certs = data.certifications.filter((c) => c.year === year);
              return (
                <div key={year} className="border-t border-line py-3 last:border-b flex gap-5">
                  <p className="font-mono text-[11px] text-accent shrink-0 pt-0.5 w-10">{year}</p>
                  <ul className="space-y-1">
                    {certs.map((c) => (
                      <li key={c.title} className="text-sm text-fg/85 leading-snug">
                        {c.title}
                        <span className="text-mut"> · {c.issuer}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
