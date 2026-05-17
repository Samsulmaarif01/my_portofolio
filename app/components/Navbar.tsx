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
  const initials = data.profile.name.split(' ').map(n => n[0]).join('');

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? 'py-3 backdrop-blur-xl shadow-lg border-b border-white/5'
          : 'py-5 backdrop-blur-sm'
          } group`}
        style={{
          background: isScrolled
            ? "rgba(18,18,26,0.8)"
            : "rgba(18,18,26,0.2)"
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(108,99,255,0.03), transparent)" }}></div>
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px] flex justify-between items-center h-16">
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#6c63ff] focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background">
            Skip to main content
          </a>
          <a href="#about" className="font-display-hero text-headline-md tracking-tighter nav-logo focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background rounded-lg" aria-label="Go to About section">
            {initials}
          </a>
          <div className="hidden md:flex gap-1 items-center nav-links" role="menubar">
            <a className="nav-link text-label-mono relative px-4 py-2 text-on-surface-variant hover:text-[#6c63ff] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background rounded-lg" href="#about" role="menuitem">About</a>
            <a className="nav-link text-label-mono relative px-4 py-2 text-on-surface-variant hover:text-[#6c63ff] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background rounded-lg" href="#skills" role="menuitem">Tech Stack</a>
            <a className="nav-link text-label-mono relative px-4 py-2 text-on-surface-variant hover:text-[#6c63ff] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background rounded-lg" href="#projects" role="menuitem">Projects</a>
            <a className="nav-link text-label-mono relative px-4 py-2 text-on-surface-variant hover:text-[#6c63ff] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background rounded-lg" href="#experience" role="menuitem">Background</a>
            <a className="nav-link text-label-mono relative px-4 py-2 text-on-surface-variant hover:text-[#6c63ff] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background rounded-lg" href="#certifications" role="menuitem">Certifications</a>
            <a className="nav-link text-label-mono relative px-4 py-2 text-on-surface-variant hover:text-[#6c63ff] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background rounded-lg" href="#contact" role="menuitem">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} className="w-10 h-10 rounded-full flex items-center justify-center text-[#6c63ff] hover:bg-[#6c63ff]/10 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background" aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                {isDarkMode ? 'dark_mode' : 'light_mode'}
              </span>
            </button>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#6c63ff] hover:bg-[#6c63ff]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background"
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
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
        className={`fixed top-0 right-0 z-50 w-72 h-full md:hidden transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: "rgba(18,18,26,0.98)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex flex-col gap-2" role="menu">
            <a onClick={(e) => handleMobileNavClick(e, 'about')} className="mobile-nav-link text-label-mono text-xl py-4 px-4 text-on-surface-variant hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background" href="#about" role="menuitem">About</a>
            <a onClick={(e) => handleMobileNavClick(e, 'skills')} className="mobile-nav-link text-label-mono text-xl py-4 px-4 text-on-surface-variant hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background" href="#skills" role="menuitem">Tech Stack</a>
            <a onClick={(e) => handleMobileNavClick(e, 'projects')} className="mobile-nav-link text-label-mono text-xl py-4 px-4 text-on-surface-variant hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background" href="#projects" role="menuitem">Projects</a>
            <a onClick={(e) => handleMobileNavClick(e, 'experience')} className="mobile-nav-link text-label-mono text-xl py-4 px-4 text-on-surface-variant hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background" href="#experience" role="menuitem">Background</a>
            <a onClick={(e) => handleMobileNavClick(e, 'certifications')} className="mobile-nav-link text-label-mono text-xl py-4 px-4 text-on-surface-variant hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background" href="#certifications" role="menuitem">Certifications</a>
            <a onClick={(e) => handleMobileNavClick(e, 'contact')} className="mobile-nav-link text-label-mono text-xl py-4 px-4 text-on-surface-variant hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background" href="#contact" role="menuitem">Contact</a>
          </div>
          <div className="mt-auto pb-8">
            <button onClick={() => { closeMobileMenu(); toggleTheme(); }} className="w-full py-4 rounded-lg flex items-center justify-center gap-2 text-[#6c63ff] hover:bg-[#6c63ff]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background" aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                {isDarkMode ? 'dark_mode' : 'light_mode'}
              </span>
              <span className="text-label-mono">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}