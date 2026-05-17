"use client";

import React from "react";
import data from "../data.json";

const PROJECT_LAYOUTS: {
  [key: string]: {
    className: string;
    imageHeightClass: string;
    iconSvg: React.ReactNode;
    color: string;
    decorations: React.ReactNode;
    isLargeRow?: boolean;
    isWideCol?: boolean;
  };
} = {
  shamo: {
    className: "md:row-span-2 flex flex-col",
    imageHeightClass: "h-64 md:h-80 flex-shrink-0",
    color: "#00d4aa",
    isLargeRow: true,
    decorations: (
      <>
        <div className="absolute" style={{ width: "220px", height: "220px", borderRadius: "50%", border: "2px solid rgba(0,212,170,0.2)", top: "-40px", left: "-40px" }}></div>
        <div className="absolute" style={{ width: "150px", height: "150px", borderRadius: "50%", border: "2px solid rgba(0,212,170,0.15)", top: "20px", right: "-30px" }}></div>
      </>
    ),
    iconSvg: (
      <svg className="w-24 h-24 text-[#00d4aa] opacity-25" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    )
  },
  "web-tiket": {
    className: "",
    imageHeightClass: "h-48",
    color: "#6c63ff",
    decorations: (
      <div className="absolute" style={{ width: "160px", height: "160px", borderRadius: "50%", border: "1px solid rgba(108,99,255,0.25)", top: "-30px", right: "-30px" }}></div>
    ),
    iconSvg: (
      <svg className="w-20 h-20 text-[#6c63ff] opacity-20" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
      </svg>
    )
  },
  coworkers: {
    className: "",
    imageHeightClass: "h-48",
    color: "#00d4aa",
    decorations: (
      <div className="absolute" style={{ width: "180px", height: "180px", borderRadius: "50%", border: "1px solid rgba(0,212,170,0.2)", bottom: "-40px", right: "-40px" }}></div>
    ),
    iconSvg: (
      <svg className="w-20 h-20 text-[#00d4aa] opacity-20" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    )
  },
  "tugas-mahasiswa": {
    className: "md:col-span-2",
    imageHeightClass: "h-48 md:h-auto md:w-72 flex-shrink-0",
    color: "#6c63ff",
    isWideCol: true,
    decorations: (
      <div className="absolute" style={{ width: "200px", height: "200px", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.1)", top: "-60px", left: "-60px" }}></div>
    ),
    iconSvg: (
      <svg className="w-24 h-24 text-white opacity-20" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
      </svg>
    )
  }
};

const MINI_PROJECT_LAYERS: {
  [key: string]: {
    icon: string;
    iconBg: string;
    color: string;
    badgeStyle: React.CSSProperties;
    hoverBorderClass: string;
  };
} = {
  "fashion-store": {
    icon: "shopping_bag",
    iconBg: "linear-gradient(135deg,#8e2de2,#4a00e0)",
    color: "#6c63ff",
    badgeStyle: { background: "rgba(108,99,255,0.1)", color: "#c4c0ff" },
    hoverBorderClass: "hover:border-[#6c63ff]/50"
  },
  moonton: {
    icon: "play_circle",
    iconBg: "linear-gradient(135deg,#0f2027,#2c5364)",
    color: "#00d4aa",
    badgeStyle: { background: "rgba(0,212,170,0.1)", color: "#00d4aa" },
    hoverBorderClass: "hover:border-[#00d4aa]/50"
  }
};

export default function Projects() {
  const featuredIds = ['shamo', 'web-tiket', 'coworkers', 'tugas-mahasiswa'];
  const mainProjects = data.projects.filter(p => featuredIds.includes(p.id));
  const moreProjects = data.projects.filter(p => !featuredIds.includes(p.id));

  return (
    <section className="py-[120px] reveal" id="projects">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px]">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-headline-lg text-on-surface"><span className="text-[#6c63ff]">/</span> Featured Work</h2>
          <a className="hidden md:flex items-center gap-2 text-label-mono text-[#00d4aa] hover:text-[#41eec2] transition-colors" href={data.profile.github} target="_blank" rel="noreferrer">
            View All on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Bento Grid: 2 columns desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mainProjects.map(project => {
            const layout = PROJECT_LAYOUTS[project.id];
            if (!layout) return null;

            const isPurple = layout.color === "#6c63ff";
            const textHoverClass = isPurple ? "group-hover:text-[#6c63ff]" : "group-hover:text-[#00d4aa]";
            const linkTextClass = isPurple ? "text-[#6c63ff] hover:text-[#c4c0ff]" : "text-[#00d4aa] hover:text-[#41eec2]";

            if (layout.isWideCol) {
              return (
                <div key={project.id} className={`${layout.className} bento-card rounded-xl overflow-hidden group`}>
                  <div className="flex flex-col md:flex-row">
                    <div className={`${layout.imageHeightClass} relative overflow-hidden project-image-container`} style={{ background: project.gradient }}>
                      {layout.decorations}
                      <div className="absolute inset-0 flex items-center justify-center project-icon-placeholder">
                        {layout.iconSvg}
                      </div>
                      {project.status === "Live" ? (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-caps animate-pulse" style={{ background: "rgba(0,212,170,0.15)", border: "1px solid rgba(0,212,170,0.3)", color: "#00d4aa" }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa]"></span> Live
                          </span>
                        </div>
                      ) : (
                        <div className="absolute top-4 right-4 z-10">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-caps status-done">{project.status}</span>
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-10">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 rounded text-label-caps text-white" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col justify-center flex-grow">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className={`text-headline-md text-2xl text-on-surface ${textHoverClass} transition-colors`}>{project.title}</h3>
                      </div>
                      <p className="text-body-md text-tertiary mb-4">{project.description}</p>
                      <div className="flex flex-wrap items-center gap-4 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                        {project.github && (
                          <a className={`inline-flex items-center gap-1.5 text-label-mono ${linkTextClass} transition-colors`} href={project.github} target="_blank" rel="noreferrer">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> GitHub <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                          </a>
                        )}
                        {project.demo && (
                          <a className="inline-flex items-center gap-1.5 text-label-mono text-[#00d4aa] hover:text-[#41eec2] transition-colors" href={project.demo} target="_blank" rel="noreferrer">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg> Live Demo <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                          </a>
                        )}
                        <span className="ml-auto text-label-caps text-text-muted">{project.tags.slice(0, 2).join(' · ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={project.id} className={`${layout.className} bento-card rounded-xl overflow-hidden group`}>
                <div className={`${layout.imageHeightClass} relative overflow-hidden project-image-container`} style={{ background: project.gradient }}>
                  {layout.decorations}
                  <div className="absolute inset-0 flex items-center justify-center project-icon-placeholder">
                    {layout.iconSvg}
                  </div>
                  {project.id === "shamo" && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-caps status-live">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa]"></span> FEATURED
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-caps status-done">{project.status}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-10">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded text-label-caps text-white" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className={`text-headline-md text-xl ${layout.isLargeRow ? 'text-2xl' : ''} text-on-surface mb-2 ${textHoverClass} transition-colors`}>{project.title}</h3>
                  <p className="text-body-md text-tertiary mb-4 flex-grow">{project.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                    {project.github && (
                      <a className={`inline-flex items-center gap-1.5 text-label-mono ${linkTextClass} transition-colors`} href={project.github} target="_blank" rel="noreferrer">
                        {layout.isLargeRow ? (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                            </svg> GitHub
                          </>
                        ) : "GitHub"}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                    )}
                    <span className="text-label-caps text-text-muted">{project.tags.slice(0, 2).join(' · ')}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More Projects */}
        <div className="mt-8 mb-4">
          <p className="text-center text-label-caps text-text-muted mb-4 tracking-widest">MORE PROJECTS</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {moreProjects.map(project => {
              const layer = MINI_PROJECT_LAYERS[project.id] || {
                icon: "code",
                iconBg: "linear-gradient(135deg,#8e2de2,#4a00e0)",
                color: "#6c63ff",
                badgeStyle: { background: "rgba(108,99,255,0.1)", color: "#c4c0ff" },
                hoverBorderClass: "hover:border-[#6c63ff]/50"
              };
              const hoverTextClass = layer.color === "#6c63ff" ? "group-hover:text-[#6c63ff]" : "group-hover:text-[#00d4aa]";

              return (
                <div key={project.id} className={`bento-card rounded-xl p-5 flex items-center gap-4 group ${layer.hoverBorderClass} transition-all`}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: layer.iconBg }}>
                    <span className="material-symbols-outlined text-white text-xl">{layer.icon}</span>
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className={`text-headline-md text-base text-on-surface ${hoverTextClass} transition-colors`}>{project.title}</h4>
                    <p className="text-body-md text-xs text-text-muted truncate">{project.description}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-label-caps px-2 py-1 rounded" style={layer.badgeStyle}>{project.tags.join(' + ')}</span>
                    {project.github && (
                      <a className="transition-colors" style={{ color: layer.color }} href={project.github} target="_blank" rel="noreferrer">
                        <span className="material-symbols-outlined text-base">arrow_outward</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-label-mono text-on-surface-variant hover:text-white transition-all duration-300 hover:border-[#6c63ff] hover:shadow-[0_0_20px_rgba(108,99,255,0.2)]" href={data.profile.github} target="_blank" rel="noreferrer" style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(26,26,36,0.6)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            See All Repositories
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}