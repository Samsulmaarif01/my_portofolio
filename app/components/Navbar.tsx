"use client";

import data from "../data.json";

interface NavbarProps {
  isDarkMode: boolean;
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  toggleTheme: () => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  handleMobileNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

export default function Navbar({ 
  isDarkMode, 
  isScrolled, 
  isMobileMenuOpen, 
  toggleTheme, 
  toggleMobileMenu,
  closeMobileMenu,
  handleMobileNavClick 
 }: NavbarProps) {
  const name = data.profile.name.split(' ')[0] || 'Samsul';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 backdrop-blur-md bg-[var(--bg)]/80 border-b ${isScrolled ? 'border-[var(--border)]' : 'border-transparent'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#hero-section" className="font-sora font-bold text-xl tracking-tight text-[var(--fg)]">
            {name}<span className="text-[var(--accent)]">.</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 font-mono text-sm">
              <a href="#about" className="nav-link text-[var(--muted)] hover:text-[var(--fg)] transition-colors">About</a>
              <a href="#skills" className="nav-link text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Skills</a>
              <a href="#projects" className="nav-link text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Projects</a>
              <a href="#experience" className="nav-link text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Experience</a>
            </div>
            
            <div className="flex items-center gap-4 border-l border-[var(--border-strong)] pl-8">
              <button onClick={toggleTheme} className="w-10 h-10 rounded-full bg-[var(--bg-2)] hover:bg-[var(--bg-3)] border border-[var(--border)] flex items-center justify-center transition-colors text-[var(--fg)]" aria-label="Toggle Theme">
                <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
              <a href="#contact" className="px-6 py-2.5 bg-[var(--fg)] text-[var(--bg)] font-semibold rounded hover:bg-[var(--accent)] transition-colors">
                Let's Talk
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:hidden">
            <button onClick={toggleTheme} className="w-10 h-10 rounded-full bg-[var(--bg-2)] hover:bg-[var(--bg-3)] border border-[var(--border)] flex items-center justify-center transition-colors text-[var(--fg)]" aria-label="Toggle Theme">
              <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <button
              onClick={toggleMobileMenu}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--fg)] hover:bg-[var(--bg-2)] transition-colors focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 z-50 w-72 h-full md:hidden transition-transform duration-300 ease-out bg-[var(--bg)] border-l border-[var(--border-strong)] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex flex-col gap-2" role="menu">
            <a onClick={(e) => handleMobileNavClick(e, 'about')} className="text-sm font-mono py-4 px-4 text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-2)] rounded-lg transition-colors" href="#about" role="menuitem">About</a>
            <a onClick={(e) => handleMobileNavClick(e, 'skills')} className="text-sm font-mono py-4 px-4 text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-2)] rounded-lg transition-colors" href="#skills" role="menuitem">Skills</a>
            <a onClick={(e) => handleMobileNavClick(e, 'projects')} className="text-sm font-mono py-4 px-4 text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-2)] rounded-lg transition-colors" href="#projects" role="menuitem">Projects</a>
            <a onClick={(e) => handleMobileNavClick(e, 'experience')} className="text-sm font-mono py-4 px-4 text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-2)] rounded-lg transition-colors" href="#experience" role="menuitem">Experience</a>
            <a onClick={(e) => handleMobileNavClick(e, 'certifications')} className="text-sm font-mono py-4 px-4 text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-2)] rounded-lg transition-colors" href="#certifications" role="menuitem">Certifications</a>
            <a onClick={(e) => handleMobileNavClick(e, 'contact')} className="text-sm font-mono py-4 px-4 text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-2)] rounded-lg transition-colors" href="#contact" role="menuitem">Contact</a>
          </div>
          
          <div className="mt-auto pb-8">
            <div className="flex justify-center gap-6 pt-6 border-t border-[var(--border-strong)]">
              {data.profile.github && <a href={data.profile.github} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors" aria-label="GitHub"><i className="fa-brands fa-github text-2xl"></i></a>}
              {data.profile.linkedin && <a href={data.profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors" aria-label="LinkedIn"><i className="fa-brands fa-linkedin text-2xl"></i></a>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}