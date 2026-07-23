import data from "../data.json";

export default function Experience() {
  const experiences = data.experience.filter(e => e.type === "work");

  return (
    <section id="experience" className="py-24 relative z-10 bg-[var(--bg-2)] border-y border-[var(--border-strong)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="inline-flex items-center gap-2 mb-16 reveal">
          <span className="w-8 h-px bg-[var(--accent)]"></span>
          <span className="text-sm font-mono tracking-widest text-[var(--accent)] uppercase">Career Path</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4 reveal">
            <h2 className="text-4xl md:text-5xl font-bold font-sora sticky top-32">
              Work <br/>Experience
            </h2>
          </div>
          
          <div className="md:col-span-8">
            <div className="relative border-l border-[var(--border-strong)] pl-8 md:pl-12 space-y-16">
              {experiences.map((exp, index) => (
                <div key={index} className="relative reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="absolute -left-[37px] md:-left-[53px] top-1 w-4 h-4 rounded-full bg-[var(--bg)] border-2 border-[var(--accent)] z-10 shadow-[0_0_10px_rgba(255,184,0,0.5)]"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold font-sora">{exp.subtitle}</h3>
                    <span className="text-[var(--accent)] font-mono text-sm">{exp.year}</span>
                  </div>
                  <div className="text-[var(--fg)] font-medium mb-4">{exp.title}</div>
                  <p className="text-[var(--muted)] font-manrope leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}