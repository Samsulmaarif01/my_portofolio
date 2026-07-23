import data from "../data.json";

export default function Hero() {
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--border-strong)] bg-[var(--card)] backdrop-blur-md mb-8 reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-2)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent-2)]"></span>
            </div>
            <span className="text-[13px] font-mono font-medium text-[var(--fg)]">Available for freelance</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-sora leading-[1.1] tracking-tight mb-6 reveal" style={{ transitionDelay: "0.2s" }}>
            Building digital <br/><span className="text-[var(--accent)]">products, brands,</span> <br/>and experience.
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--muted)] font-manrope max-w-xl mb-10 reveal" style={{ transitionDelay: "0.3s" }}>
            {data.profile.tagline}. {data.profile.title} based in {data.profile.location}.
          </p>
          
          <div className="flex flex-wrap gap-4 reveal" style={{ transitionDelay: "0.4s" }}>
            <a href="#projects" className="px-8 py-4 bg-[var(--accent)] text-black font-semibold rounded-lg hover:bg-[#e6a600] transition-colors flex items-center gap-2">
              View Projects <i className="fa-solid fa-arrow-right text-sm"></i>
            </a>
            <a href={data.profile.cv} className="px-8 py-4 border border-[var(--border-strong)] bg-[var(--card)] hover:bg-[var(--card-hover)] text-[var(--fg)] font-semibold rounded-lg transition-colors flex items-center gap-2">
              Download CV <i className="fa-solid fa-download text-sm"></i>
            </a>
          </div>
          
          <div className="mt-16 flex items-center gap-8 reveal" style={{ transitionDelay: "0.5s" }}>
            <div>
              <div className="text-3xl font-bold font-sora text-[var(--fg)]">4+</div>
              <div className="text-sm font-mono text-[var(--muted)] mt-1">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-[var(--border-strong)]"></div>
            <div>
              <div className="text-3xl font-bold font-sora text-[var(--fg)]">10+</div>
              <div className="text-sm font-mono text-[var(--muted)] mt-1">Projects Completed</div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative w-full reveal" style={{ transitionDelay: "0.4s" }}>
          {/* Abstract code visual */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:ml-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-soft)] to-transparent rounded-full blur-3xl opacity-50 parallax-float"></div>
            <div className="absolute inset-10 border border-[var(--border-strong)] rounded-2xl bg-[var(--bg)] shadow-2xl overflow-hidden flex flex-col parallax-float" style={{ animationDelay: "-2s" }}>
              <div className="h-10 border-b border-[var(--border-strong)] bg-[var(--bg-2)] flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="p-6 font-mono text-sm sm:text-base md:text-sm lg:text-base leading-relaxed text-[var(--muted)]">
                <span className="text-[#f92672]">const</span> <span className="text-[#a6e22e]">developer</span> <span className="text-[#f8f8f2]">=</span> <span className="text-[#66d9ef]">new</span> <span className="text-[#e6db74]">Person</span><span className="text-[#f8f8f2]">({`{`}</span><br/>
                &nbsp;&nbsp;<span className="text-[#fd971f]">name</span><span className="text-[#f8f8f2]">:</span> <span className="text-[#e6db74]">'{data.profile.name}'</span><span className="text-[#f8f8f2]">,</span><br/>
                &nbsp;&nbsp;<span className="text-[#fd971f]">role</span><span className="text-[#f8f8f2]">:</span> <span className="text-[#e6db74]">'{data.profile.title}'</span><span className="text-[#f8f8f2]">,</span><br/>
                &nbsp;&nbsp;<span className="text-[#fd971f]">passions</span><span className="text-[#f8f8f2]">:</span> <span className="text-[#f8f8f2]">[</span><span className="text-[#e6db74]">'Coding'</span><span className="text-[#f8f8f2]">,</span> <span className="text-[#e6db74]">'Mobile'</span><span className="text-[#f8f8f2]">,</span> <span className="text-[#e6db74]">'Web'</span><span className="text-[#f8f8f2]">]</span><br/>
                <span className="text-[#f8f8f2]">{`}`});</span><br/><br/>
                <span className="text-[#a6e22e]">developer</span><span className="text-[#f8f8f2]">.</span><span className="text-[#a6e22e]">build</span><span className="text-[#f8f8f2]">();</span>
                <div className="mt-4 flex rotate-words">
                  <span className="text-[var(--accent)]">&gt; Compiling success...</span>
                  <span className="text-[var(--accent-2)]">&gt; Deploying to production...</span>
                  <span className="text-white">&gt; Ready for new challenges.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal" style={{ transitionDelay: "0.8s" }}>
        <span className="text-[10px] font-mono tracking-widest text-[var(--muted)] uppercase">Scroll</span>
        <div className="w-px h-12 bg-[var(--border-strong)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[var(--accent)]" style={{ animation: "scrollDown 2s cubic-bezier(0.77, 0, 0.175, 1) infinite" }}></div>
        </div>
      </div>
    </section>
  );
}