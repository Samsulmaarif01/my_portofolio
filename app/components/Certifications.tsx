"use client";

import data from "../data.json";

interface CertificationsProps {
  isDarkMode?: boolean;
  selectedCategory?: string;
  setSelectedCategory?: (category: string) => void;
  isDropdownOpen?: boolean;
  setIsDropdownOpen?: (open: boolean) => void;
}

export default function Certifications({ 
  isDarkMode, 
  selectedCategory, 
  setSelectedCategory, 
  isDropdownOpen, 
  setIsDropdownOpen 
}: CertificationsProps) {
  const education = data.education;
  const certifications = data.certifications;

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <div className="inline-flex items-center gap-2 mb-12 reveal">
              <span className="w-8 h-px bg-[var(--accent)]"></span>
              <span className="text-sm font-mono tracking-widest text-[var(--accent)] uppercase">Education</span>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="p-8 rounded-2xl border border-[var(--border-strong)] bg-[var(--card)] hover:border-[var(--accent)] transition-colors reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="text-[var(--accent)] font-mono text-sm mb-2">{edu.year}</div>
                  <h3 className="text-xl font-bold font-sora mb-2">{edu.subtitle}</h3>
                  <div className="text-[var(--fg)] font-medium mb-4">{edu.title}</div>
                  <p className="text-[var(--muted)] font-manrope text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <div className="inline-flex items-center gap-2 mb-12 reveal" style={{ transitionDelay: "0.2s" }}>
              <span className="w-8 h-px bg-[var(--accent)]"></span>
              <span className="text-sm font-mono tracking-widest text-[var(--accent)] uppercase">Certifications</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal" style={{ transitionDelay: "0.3s" }}>
              {certifications.map((cert) => (
                <div key={cert.id} className="p-6 rounded-2xl border border-[var(--border-strong)] bg-[var(--card)] hover:border-[var(--accent)] transition-colors group">
                  <div className="w-10 h-10 rounded bg-[var(--accent-soft)] flex items-center justify-center mb-4 text-[var(--accent)] group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <div className="cert-info">
                    <div className="font-bold font-sora text-sm mb-1">{cert.title}</div>
                    <div className="font-mono text-xs text-[var(--muted)]">{cert.issuer} &middot; {cert.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}