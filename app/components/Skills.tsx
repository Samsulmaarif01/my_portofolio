import data from "../data.json";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-[var(--bg-2)] border-y border-[var(--border-strong)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="inline-flex items-center gap-2 mb-12 reveal">
          <span className="w-8 h-px bg-[var(--accent)]"></span>
          <span className="text-sm font-mono tracking-widest text-[var(--accent)] uppercase">Capabilities</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl border border-[var(--border-strong)] bg-[var(--bg)] group hover:border-[var(--accent)] transition-colors reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center mb-6 text-[var(--accent)] text-2xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">{skillGroup.icon}</span>
              </div>
              <h3 className="text-xl font-bold font-sora mb-4">{skillGroup.name}</h3>
              <ul className="space-y-3 font-mono text-sm text-[var(--muted)]">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-[var(--accent)] text-xs"></i> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}