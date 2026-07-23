import data from "../data.json";

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-[var(--accent)]"></span>
              <span className="text-sm font-mono tracking-widest text-[var(--accent)] uppercase">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6">Engineering with purpose.</h2>
            <div className="text-lg text-[var(--muted)] font-manrope space-y-4">
              <p>{data.about.description}</p>
              <p>{data.about.secondaryDescription}</p>
            </div>
          </div>
          
          <div className="relative reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="aspect-[4/3] rounded-2xl border border-[var(--border-strong)] bg-[var(--card)] overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-3)] to-[var(--bg)] flex items-center justify-center">
                <i className="fa-solid fa-code text-6xl text-[var(--muted-2)]"></i>
              </div>
              
              <div className="absolute inset-0 bg-[var(--accent)] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl border border-[var(--border-strong)] bg-[var(--bg)]/80 backdrop-blur-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-sm font-mono text-[var(--fg)]">Currently exploring</div>
                <div className="text-[var(--accent)] font-semibold mt-1">Web Technologies & AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}