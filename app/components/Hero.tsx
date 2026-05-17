import data from "../data.json";

export default function Hero() {
  return (
    <section id="hero-section" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" id="hero-gradient" style={{ background: "radial-gradient(ellipse at center, rgba(108,99,255,0.1) 0%, rgba(10,10,15,0.8) 60%, #0a0a0f 100%)" }}></div>
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px] text-center relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4aa] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00d4aa]"></span>
          </div>
          <span className="text-label-caps text-[#00d4aa]">Available for freelance</span>
        </div>
        <h1 className="text-display-hero text-on-surface mb-6 drop-shadow-md">
          <span id="typing-name" className="typing-wrapper text-on-surface">{data.profile.name}</span>
        </h1>
        <p className="text-headline-md text-on-surface mb-4 animate-reveal-up">{data.profile.tagline}</p>
        <p className="text-body-lg text-tertiary mb-12 animate-reveal-up" style={{ animationDelay: "0.3s" }}>{data.profile.title} based in {data.profile.location}</p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a className="hero-cta-btn px-6 py-4 bg-[#6c63ff] hover:bg-[#5b54d6] text-white text-label-mono rounded transition-colors flex items-center justify-center gap-2 glow-pulse-hover w-full sm:w-auto" href="#projects" style={{ boxShadow: "0 0 20px rgba(108,99,255,0.15)" }} onMouseEnter={(e) => e.currentTarget.classList.add('glow-pulse')} onMouseLeave={(e) => e.currentTarget.classList.remove('glow-pulse')}>
            View My Work <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
          <a className="px-6 py-4 border border-[#6c63ff] text-[#6c63ff] hover:bg-[#6c63ff]/10 text-label-mono rounded transition-colors flex items-center justify-center gap-2 w-full sm:w-auto" href={data.profile.cv}>
            Download CV <span className="material-symbols-outlined text-sm">download</span>
          </a>
        </div>
      </div>
    </section>
  );
}