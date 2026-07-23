import data from "../data.json";

export default function Projects() {
  const featuredProjects = data.projects.filter(p => p.featured);
  
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-[var(--accent)]"></span>
              <span className="text-sm font-mono tracking-widest text-[var(--accent)] uppercase">Selected Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-sora">Featured projects.</h2>
          </div>
          <a href={data.profile.github} target="_blank" rel="noopener noreferrer" className="text-[var(--fg)] hover:text-[var(--accent)] font-mono text-sm transition-colors flex items-center gap-2">
            View all on GitHub <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        
        <div className="space-y-24">
          {featuredProjects.map((project, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div key={project.id} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center reveal">
                <div className={`lg:col-span-7 relative z-10 project-card rounded-2xl overflow-hidden border border-[var(--border-strong)] bg-[var(--card)] aspect-[16/10] ${isReversed ? 'order-1 lg:order-2' : ''}`}>
                  <a href={project.demo || project.github} target="_blank" rel="noopener noreferrer" className="block w-full h-full project-img-wrapper">
                    <div 
                      className="w-full h-full opacity-70 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center"
                      style={{ background: project.gradient }}
                    >
                      <i className="fa-solid fa-laptop-code text-6xl text-white/50 group-hover:text-white/80 transition-colors"></i>
                    </div>
                  </a>
                </div>
                <div className={`lg:col-span-5 relative z-20 flex flex-col ${isReversed ? 'lg:-mr-12 lg:items-start lg:text-left order-2 lg:order-1' : 'lg:-ml-12 lg:items-end lg:text-right'}`}>
                  <div className="text-[var(--accent)] font-mono text-sm mb-2">{project.status === 'Live' ? 'Live Project' : 'Featured Project'}</div>
                  <h3 className="text-3xl font-bold font-sora mb-6 hover:text-[var(--accent)] transition-colors">
                    <a href={project.demo || project.github} target="_blank" rel="noopener noreferrer">{project.title}</a>
                  </h3>
                  <div className="p-6 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-3)]/90 backdrop-blur-md mb-6 shadow-xl">
                    <p className="text-[var(--muted)] font-manrope">
                      {project.description}
                    </p>
                  </div>
                  <ul className={`flex flex-wrap gap-3 font-mono text-xs text-[var(--muted-2)] mb-8 ${isReversed ? 'justify-start' : 'lg:justify-end'}`}>
                    {project.tags.map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[var(--fg)] hover:text-[var(--accent)] transition-colors">
                        <i className="fa-brands fa-github text-xl"></i>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[var(--fg)] hover:text-[var(--accent)] transition-colors">
                        <i className="fa-solid fa-arrow-up-right-from-square text-xl"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}