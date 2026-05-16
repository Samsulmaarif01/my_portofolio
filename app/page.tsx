"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Typing Animation - Loop every 5 seconds
    const typingElement = document.getElementById('typing-name');
    if (typingElement) {
      const text = 'Samsul Maarif';
      let index = 0;
      let isTyping = true;
      
      const typeEffect = () => {
        if (isTyping) {
          typingElement.textContent = text.substring(0, index + 1);
          index++;
          if (index >= text.length) {
            isTyping = false;
            setTimeout(() => {
              isTyping = true;
              index = 0;
              typeEffect();
            }, 2000); // Wait 2 seconds after typing complete
            return;
          }
        } else {
          typingElement.textContent = text.substring(0, index);
          index--;
          if (index < 0) {
            isTyping = true;
            setTimeout(typeEffect, 2000); // Wait 2 seconds before typing again
            return;
          }
        }
        setTimeout(typeEffect, 80); // Typing speed (faster for ~5s total)
      };
      
      // Start typing after 0.5 second
      setTimeout(typeEffect, 500);
    }

    // Scroll Spy - Active navbar link
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('#about, #skills, #experience, #contact');

    const updateActiveNav = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id') || '';
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial check

    // Stagger animation for elements
    const staggerItems = document.querySelectorAll('.stagger-item');
    staggerItems.forEach((item, index) => {
      (item as HTMLElement).style.transitionDelay = `${index * 0.2}s`;
    });

    // Enhanced reveal observer
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Add stagger effect to children
          const children = entry.target.querySelectorAll('.stagger-item');
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 150);
          });
        }
      });
    }, observerOptions);
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Add particles to hero
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 4}s`;
        particle.style.animationDuration = `${3 + Math.random() * 2}s`;
        heroSection.appendChild(particle);
      }
    }

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    const heroGradient = document.getElementById('hero-gradient');
    
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
      if (heroGradient) {
        heroGradient.style.background = 'radial-gradient(ellipse at center, rgba(108,99,255,0.15) 0%, rgba(248,249,252,0.95) 60%, #f8f9fc 100%)';
      }
    }

    return () => {
      window.removeEventListener('scroll', updateActiveNav);
      revealObserver.disconnect();
      if (heroSection) {
        const particles = heroSection.querySelectorAll('.particle');
        particles.forEach(p => p.remove());
      }
    };
  }, []);

  const toggleTheme = () => {
    const heroGradient = document.getElementById('hero-gradient');
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      setIsDarkMode(false);
      if (heroGradient) {
        heroGradient.style.background = 'radial-gradient(ellipse at center, rgba(108,99,255,0.15) 0%, rgba(248,249,252,0.95) 60%, #f8f9fc 100%)';
      }
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
      if (heroGradient) {
        heroGradient.style.background = 'radial-gradient(ellipse at center, rgba(108,99,255,0.1) 0%, rgba(10,10,15,0.8) 60%, #0a0a0f 100%)';
      }
      localStorage.setItem('theme', 'dark');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl shadow-lg" style={{ background: "rgba(18,18,26,0.85)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px] flex justify-between items-center h-16">
          <div className="font-display-hero text-headline-md tracking-tighter nav-logo">SM</div>
          <div className="hidden md:flex gap-1 items-center nav-links">
            <a className="nav-link text-label-mono relative px-4 py-2 text-on-surface-variant hover:text-[#6c63ff] transition-all duration-300" href="#about">About</a>
            <a className="nav-link text-label-mono relative px-4 py-2 text-on-surface-variant hover:text-[#6c63ff] transition-all duration-300" href="#skills">Tech Stack</a>
            <a className="nav-link text-label-mono relative px-4 py-2 text-on-surface-variant hover:text-[#6c63ff] transition-all duration-300" href="#experience">Background</a>
            <a className="nav-link text-label-mono relative px-4 py-2 text-on-surface-variant hover:text-[#6c63ff] transition-all duration-300" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} className="w-10 h-10 rounded-full flex items-center justify-center text-[#6c63ff] hover:bg-[#6c63ff]/10 hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                {isDarkMode ? 'dark_mode' : 'light_mode'}
              </span>
            </button>
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#6c63ff] hover:bg-[#6c63ff]/10 transition-all duration-300"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
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
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 z-50 w-72 h-full md:hidden transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: "rgba(18,18,26,0.98)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex flex-col gap-2">
            <a onClick={closeMobileMenu} className="mobile-nav-link text-label-mono text-xl py-4 px-4 text-on-surface-variant hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-lg transition-all duration-300" href="#about">About</a>
            <a onClick={closeMobileMenu} className="mobile-nav-link text-label-mono text-xl py-4 px-4 text-on-surface-variant hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-lg transition-all duration-300" href="#skills">Tech Stack</a>
            <a onClick={closeMobileMenu} className="mobile-nav-link text-label-mono text-xl py-4 px-4 text-on-surface-variant hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-lg transition-all duration-300" href="#experience">Background</a>
            <a onClick={closeMobileMenu} className="mobile-nav-link text-label-mono text-xl py-4 px-4 text-on-surface-variant hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-lg transition-all duration-300" href="#projects">Projects</a>
            <a onClick={closeMobileMenu} className="mobile-nav-link text-label-mono text-xl py-4 px-4 text-on-surface-variant hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-lg transition-all duration-300" href="#certifications">Certifications</a>
            <a onClick={closeMobileMenu} className="mobile-nav-link text-label-mono text-xl py-4 px-4 text-on-surface-variant hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-lg transition-all duration-300" href="#contact">Contact</a>
          </div>
          <div className="mt-auto pb-8">
            <button onClick={() => { closeMobileMenu(); toggleTheme(); }} className="w-full py-4 rounded-lg flex items-center justify-center gap-2 text-[#6c63ff] hover:bg-[#6c63ff]/10 transition-all duration-300">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                {isDarkMode ? 'dark_mode' : 'light_mode'}
              </span>
              <span className="text-label-mono">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section id="hero-section" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" id="hero-gradient" style={{ background: "radial-gradient(ellipse at center, rgba(108,99,255,0.1) 0%, rgba(10,10,15,0.8) 60%, #0a0a0f 100%)" }}></div>
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px] text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4aa] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00d4aa]"></span>
            </div>
            <span className="text-label-caps text-[#00d4aa]">Available for freelance</span>
          </div>
          <h1 className="text-display-hero text-on-surface mb-6 drop-shadow-md">
            <span id="typing-name" className="typing-wrapper text-on-surface">Samsul Maarif</span>
          </h1>
          <p className="text-headline-md text-on-surface mb-4 animate-reveal-up">Building digital products that matter.</p>
          <p className="text-body-lg text-tertiary mb-12 animate-reveal-up" style={{ animationDelay: "0.3s" }}>Web Developer & Flutter Engineer based in Indonesia</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a className="px-6 py-4 bg-[#6c63ff] hover:bg-[#5b54d6] text-white text-label-mono rounded transition-colors flex items-center justify-center gap-2 glow-pulse-hover w-full sm:w-auto" href="#projects" style={{ boxShadow: "0 0 20px rgba(108,99,255,0.15)" }} onMouseEnter={(e) => e.currentTarget.classList.add('glow-pulse')} onMouseLeave={(e) => e.currentTarget.classList.remove('glow-pulse')}>
              View My Work <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <a className="px-6 py-4 border border-[#6c63ff] text-[#6c63ff] hover:bg-[#6c63ff]/10 text-label-mono rounded transition-colors flex items-center justify-center gap-2 w-full sm:w-auto" href="#">
              Download CV <span className="material-symbols-outlined text-sm">download</span>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-[120px] relative overflow-hidden reveal active" id="about">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-64 h-64 gradient-border-avatar flex items-center justify-center">
                <span className="text-display-hero text-7xl text-[#6c63ff]">SM</span>
              </div>
            </div>
            <div>
              <h2 className="text-headline-lg text-on-surface mb-6"><span className="text-[#6c63ff]">/</span> About Me</h2>
              <p className="text-body-lg text-tertiary mb-6">Saya Samsul Maarif, mahasiswa S1 Teknik Informatika di Universitas Pamulang dan Lulusan SMK Letris Indonesia 2 Jurusan Rekayasa Perangkat Lunak. Memiliki minat besar di bidang Web Developer dan Mobile Developer, serta memiliki pengalaman dan pengetahuan yang kuat terkait pembuatan aplikasi berbasis web dan mobile.</p>
              <p className="text-body-lg text-tertiary mb-8">Berpengalaman mengerjakan berbagai proyek, dari website hingga aplikasi mobile, dengan fokus pada UI/UX yang modern dan performa yang optimal. Terbiasa menggunakan Flutter, Laravel, dan berbagai teknologi modern lainnya.</p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <span className="material-symbols-outlined text-[#00d4aa] text-3xl mb-2">code</span>
                  <h4 className="text-headline-md text-lg text-on-surface">5+ Years</h4>
                  <p className="text-sm text-text-muted">Coding Experience</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-[#6c63ff] text-3xl mb-2">rocket_launch</span>
                  <h4 className="text-headline-md text-lg text-on-surface">20+ Projects</h4>
                  <p className="text-sm text-text-muted">Successfully Delivered</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-[#00d4aa] text-3xl mb-2">public</span>
                  <h4 className="text-headline-md text-lg text-on-surface">Worldwide</h4>
                  <p className="text-sm text-text-muted">Clients Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-[120px] reveal active" id="skills" style={{ background: "rgba(12,14,18,0.5)" }}>
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px]">
          <h2 className="text-headline-lg text-on-surface mb-12 text-center"><span className="text-[#6c63ff]">/</span> Tech Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bento-card p-8 rounded-xl stagger-item">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#6c63ff]">web</span>
                <h3 className="text-headline-md text-xl text-on-surface">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>HTML</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>CSS</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>JavaScript</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>Tailwind CSS</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>Bootstrap</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>Blade Templating</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>Livewire</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>React.js</span>
              </div>
            </div>
            <div className="bento-card p-8 rounded-xl stagger-item">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#00d4aa]">smartphone</span>
                <h3 className="text-headline-md text-xl text-on-surface">Mobile</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#00d4aa] hover:shadow-[0_0_15px_rgba(0,212,170,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>Flutter</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#00d4aa] hover:shadow-[0_0_15px_rgba(0,212,170,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>Dart</span>
              </div>
            </div>
            <div className="bento-card p-8 rounded-xl stagger-item">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#6c63ff]">dns</span>
                <h3 className="text-headline-md text-xl text-on-surface">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>PHP</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>Laravel</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>Node.js (Dasar)</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#00d4aa] hover:shadow-[0_0_15px_rgba(0,212,170,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>Firebase</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#00d4aa] hover:shadow-[0_0_15px_rgba(0,212,170,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>Supabase</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#00d4aa] hover:shadow-[0_0_15px_rgba(0,212,170,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>AppWrite</span>
              </div>
            </div>
            <div className="bento-card p-8 rounded-xl stagger-item">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#00d4aa]">database</span>
                <h3 className="text-headline-md text-xl text-on-surface">Database</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#00d4aa] hover:shadow-[0_0_15px_rgba(0,212,170,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>MySQL</span>
              </div>
            </div>
            <div className="bento-card p-8 rounded-xl stagger-item">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#6c63ff]">smart_toy</span>
                <h3 className="text-headline-md text-xl text-on-surface">AI &amp; Tools</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>OpenCode</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>Antigravity</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>Claude</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>Gemini</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>ChatGPT</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>Qwen</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>DeepSeek</span>
              </div>
            </div>
            <div className="bento-card p-8 rounded-xl stagger-item">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#00d4aa]">cloud</span>
                <h3 className="text-headline-md text-xl text-on-surface">DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#00d4aa] hover:shadow-[0_0_15px_rgba(0,212,170,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>Git</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#00d4aa] hover:shadow-[0_0_15px_rgba(0,212,170,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>GitHub</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#00d4aa] hover:shadow-[0_0_15px_rgba(0,212,170,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>XAMPP</span>
                <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#00d4aa] hover:shadow-[0_0_15px_rgba(0,212,170,0.3)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-[120px] reveal active" id="projects">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px]">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-headline-lg text-on-surface"><span className="text-[#6c63ff]">/</span> Featured Work</h2>
            <a className="hidden md:flex items-center gap-2 text-label-mono text-[#00d4aa] hover:text-[#41eec2] transition-colors" href="https://github.com/Samsulmaarif01" target="_blank" rel="noreferrer">
              View All on GitHub <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          {/* Bento Grid: 2 columns desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* ① SHAMO — FEATURED LARGE */}
            <div className="bento-card rounded-xl overflow-hidden group md:row-span-2 flex flex-col">
              <div className="h-64 md:h-80 relative overflow-hidden flex-shrink-0" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #0d3b6e 50%, #16213e 100%)" }}>
                <div className="absolute" style={{ width: "220px", height: "220px", borderRadius: "50%", border: "2px solid rgba(0,212,170,0.2)", top: "-40px", left: "-40px" }}></div>
                <div className="absolute" style={{ width: "150px", height: "150px", borderRadius: "50%", border: "2px solid rgba(0,212,170,0.15)", top: "20px", right: "-30px" }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#00d4aa]" style={{ fontSize: "72px", opacity: 0.25 }}>smartphone</span>
                </div>
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-caps status-live">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa]"></span> FEATURED
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-caps status-done">Completed</span>
                </div>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-10">
                  <span className="px-3 py-1 rounded text-label-caps text-white" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>Flutter</span>
                  <span className="px-3 py-1 rounded text-label-caps text-white" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>Dart</span>
                  <span className="px-3 py-1 rounded text-label-caps text-white" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>REST API</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-headline-md text-2xl text-on-surface mb-2 group-hover:text-[#00d4aa] transition-colors">Shamo Flutter App</h3>
                <p className="text-body-md text-tertiary mb-4 flex-grow">Aplikasi e-commerce sepatu cross-platform berbasis Flutter. Fitur lengkap: product listing dengan kategori, cart management, autentikasi user, dan integrasi REST API backend. Dibangun dari kursus BWA dengan arsitektur clean code.</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <a className="inline-flex items-center gap-1.5 text-label-mono text-[#00d4aa] hover:text-[#41eec2] transition-colors" href="https://github.com/Samsulmaarif01/Shamo-Flutter-App" target="_blank" rel="noreferrer">
                    <span className="material-symbols-outlined text-base">code</span> GitHub
                    <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </a>
                  <span className="text-label-caps text-text-muted">Flutter · Mobile</span>
                </div>
              </div>
            </div>

            {/* ② WEB TIKET ONLINE */}
            <div className="bento-card rounded-xl overflow-hidden group">
              <div className="h-48 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)" }}>
                <div className="absolute" style={{ width: "160px", height: "160px", borderRadius: "50%", border: "1px solid rgba(108,99,255,0.25)", top: "-30px", right: "-30px" }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#6c63ff]" style={{ fontSize: "60px", opacity: 0.2 }}>confirmation_number</span>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-caps status-done">Completed</span>
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                  <span className="px-3 py-1 rounded text-label-caps text-white" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>Laravel</span>
                  <span className="px-3 py-1 rounded text-label-caps text-white" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>PHP</span>
                  <span className="px-3 py-1 rounded text-label-caps text-white" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>MySQL</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-headline-md text-xl text-on-surface mb-2 group-hover:text-[#6c63ff] transition-colors">Web Tiket Online</h3>
                <p className="text-body-md text-tertiary mb-4">Platform pemesanan tiket online berbasis web. Sistem manajemen tiket lengkap dengan autentikasi pengguna, pemilihan kursi, dan konfirmasi pemesanan.</p>
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <a className="inline-flex items-center gap-1 text-label-mono text-[#6c63ff] hover:text-[#c4c0ff] transition-colors" href="https://github.com/Samsulmaarif01/web-tiket-online" target="_blank" rel="noreferrer">
                    GitHub <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </a>
                  <span className="text-label-caps text-text-muted">Web · Laravel</span>
                </div>
              </div>
            </div>

            {/* ③ COWORKER */}
            <div className="bento-card rounded-xl overflow-hidden group">
              <div className="h-48 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #2d1b69 50%, #11998e 100%)" }}>
                <div className="absolute" style={{ width: "180px", height: "180px", borderRadius: "50%", border: "1px solid rgba(0,212,170,0.2)", bottom: "-40px", right: "-40px" }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#00d4aa]" style={{ fontSize: "60px", opacity: 0.2 }}>groups</span>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-caps status-done">Completed</span>
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                  <span className="px-3 py-1 rounded text-label-caps text-white" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>Flutter</span>
                  <span className="px-3 py-1 rounded text-label-caps text-white" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>Dart</span>
                  <span className="px-3 py-1 rounded text-label-caps text-white" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>AppWrite</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-headline-md text-xl text-on-surface mb-2 group-hover:text-[#00d4aa] transition-colors">Coworkers</h3>
                <p className="text-body-md text-tertiary mb-4">Aplikasi manajemen coworking space berbasis web. Booking ruang kerja, manajemen member, jadwal ruangan, dan dashboard admin terintegrasi.</p>
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <a className="inline-flex items-center gap-1 text-label-mono text-[#00d4aa] hover:text-[#41eec2] transition-colors" href="https://github.com/Samsulmaarif01/coworkers" target="_blank" rel="noreferrer">
                    GitHub <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </a>
                  <span className="text-label-caps text-text-muted">Flutter · Mobile</span>
                </div>
              </div>
            </div>

            {/* ④ WEB PENGUMPULAN TUGAS — FULL WIDTH */}
            <div className="bento-card rounded-xl overflow-hidden group md:col-span-2">
              <div className="flex flex-col md:flex-row">
                <div className="h-48 md:h-auto md:w-72 flex-shrink-0 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #3a1c71 40%, #d76d77 100%)" }}>
                  <div className="absolute" style={{ width: "200px", height: "200px", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.1)", top: "-60px", left: "-60px" }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: "72px", opacity: 0.2 }}>assignment</span>
                  </div>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-caps" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa]"></span> Live
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-10">
                    <span className="px-3 py-1 rounded text-label-caps text-white" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>JavaScript</span>
                    <span className="px-3 py-1 rounded text-label-caps text-white" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>CSS</span>
                    <span className="px-3 py-1 rounded text-label-caps text-white" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>HTML</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-headline-md text-2xl text-on-surface group-hover:text-[#6c63ff] transition-colors">Web Pengumpulan Tugas Mahasiswa</h3>
                  </div>
                  <p className="text-body-md text-tertiary mb-4">Sistem manajemen pengumpulan tugas kuliah berbasis browser. Upload file, tracking deadline per mata kuliah, notifikasi, dan manajemen data mahasiswa. Deployed di Vercel — fully functional tanpa backend.</p>
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                    <a className="inline-flex items-center gap-1.5 text-label-mono text-[#6c63ff] hover:text-[#c4c0ff] transition-colors" href="https://github.com/Samsulmaarif01/Web-Pengumpulan-Tugas-Mahasiswa" target="_blank" rel="noreferrer">
                      <span className="material-symbols-outlined text-base">code</span> GitHub <span className="material-symbols-outlined text-sm">arrow_outward</span>
                    </a>
                    <a className="inline-flex items-center gap-1.5 text-label-mono text-[#00d4aa] hover:text-[#41eec2] transition-colors" href="https://web-pengumpulan-tugas-mahasiswa.vercel.app" target="_blank" rel="noreferrer">
                      <span className="material-symbols-outlined text-base">open_in_new</span> Live Demo <span className="material-symbols-outlined text-sm">arrow_outward</span>
                    </a>
                    <span className="ml-auto text-label-caps text-text-muted">JavaScript · Vercel</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* More Projects */}
          <div className="mt-8 mb-4">
            <p className="text-center text-label-caps text-text-muted mb-4 tracking-widest">MORE PROJECTS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* FashionStore */}
              <div className="bento-card rounded-xl p-5 flex items-center gap-4 group hover:border-[#6c63ff]/50 transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg,#8e2de2,#4a00e0)" }}>
                  <span className="material-symbols-outlined text-white text-xl">shopping_bag</span>
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="text-headline-md text-base text-on-surface group-hover:text-[#6c63ff] transition-colors">FashionStore</h4>
                  <p className="text-body-md text-xs text-text-muted truncate">Platform e-commerce fashion berbasis web</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-label-caps px-2 py-1 rounded" style={{ background: "rgba(108,99,255,0.1)", color: "#c4c0ff" }}>Laravel</span>
                  <a className="text-[#6c63ff] hover:text-[#c4c0ff] transition-colors" href="https://github.com/Samsulmaarif01/FashionStore" target="_blank" rel="noreferrer">
                    <span className="material-symbols-outlined text-base">arrow_outward</span>
                  </a>
                </div>
              </div>
              {/* Moonton */}
              <div className="bento-card rounded-xl p-5 flex items-center gap-4 group hover:border-[#00d4aa]/50 transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg,#0f2027,#2c5364)" }}>
                  <span className="material-symbols-outlined text-white text-xl">play_circle</span>
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="text-headline-md text-base text-on-surface group-hover:text-[#00d4aa] transition-colors">Moonton</h4>
                  <p className="text-body-md text-xs text-text-muted truncate">Platform streaming film berbasis Laravel</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-label-caps px-2 py-1 rounded" style={{ background: "rgba(0,212,170,0.1)", color: "#00d4aa" }}>Laravel + React.js</span>
                  <a className="text-[#00d4aa] hover:text-[#41eec2] transition-colors" href="https://github.com/Samsulmaarif01/moonton" target="_blank" rel="noreferrer">
                    <span className="material-symbols-outlined text-base">arrow_outward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <a className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-label-mono text-on-surface-variant hover:text-white transition-all duration-300 hover:border-[#6c63ff] hover:shadow-[0_0_20px_rgba(108,99,255,0.2)]" href="https://github.com/Samsulmaarif01" target="_blank" rel="noreferrer" style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(26,26,36,0.6)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              See All 36 Repositories
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION */}
      <section className="py-[120px] reveal active" id="experience" style={{ background: "rgba(12,14,18,0.5)" }}>
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px]">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <h2 className="text-headline-md text-on-surface mb-10 flex items-center gap-3">
                <span className="text-3xl">💼</span> Experience
              </h2>
              <div className="relative pl-8">
                <div className="timeline-item relative pb-12">
                  <div className="timeline-dot absolute -left-8 top-1 w-4 h-4 rounded-full" style={{ background: "#6c63ff", boxShadow: "0 0 10px #6c63ff" }}></div>
                  <span className="text-label-mono text-[#00d4aa] mb-2 block">2025</span>
                  <h3 className="text-headline-md text-xl text-on-surface">PT Rhi Build</h3>
                  <h4 className="text-body-lg text-tertiary mb-3">Magang kerja Praktek</h4>
                  <p className="text-body-md text-sm text-text-muted">Membuat sebuah project management tools menggunakan React js dan website untuk membantu monitoring project </p>
                </div>
                <div className="timeline-item relative pb-12">
                  <div className="timeline-dot absolute -left-8 top-1 w-4 h-4 rounded-full" style={{ background: "rgba(26,26,36,1)", border: "2px solid #6c63ff" }}></div>
                  <span className="text-label-mono text-[#00d4aa] mb-2 block">2021</span>
                  <h3 className="text-headline-md text-xl text-on-surface">NICT UIN Jakarta</h3>
                  <h4 className="text-body-lg text-tertiary mb-3">Prakerin (Magang)</h4>
                  <p className="text-body-md text-sm text-text-muted">Instalasi OS pada komputer client, maintenance komputer dan jaringan lokal, dan merakit komputer PC/Desktop. membuat Frontend ui sebagai referensi</p>
                </div>
              </div>
            </div>
            {/* Education */}
            <div>
              <h2 className="text-headline-md text-on-surface mb-10 flex items-center gap-3">
                <span className="text-3xl">🎓</span> Education
              </h2>
              <div className="relative pl-8">
                <div className="timeline-item relative pb-12">
                  <div className="timeline-dot absolute -left-8 top-1 w-4 h-4 rounded-full" style={{ background: "#00d4aa", boxShadow: "0 0 10px #00d4aa" }}></div>
                  <span className="text-label-mono text-[#6c63ff] mb-2 block">2022 – 2026</span>
                  <h3 className="text-headline-md text-xl text-on-surface">Universitas Pamulang</h3>
                  <h4 className="text-body-lg text-tertiary mb-3">S1 Teknik Informatika</h4>
                  <p className="text-body-md text-sm text-text-muted">Fokus pada pengembangan perangkat lunak, algoritma, dan rekayasa data.</p>
                </div>
                <div className="timeline-item relative pb-12">
                  <div className="timeline-dot absolute -left-8 top-1 w-4 h-4 rounded-full" style={{ background: "rgba(26,26,36,1)", border: "2px solid #00d4aa" }}></div>
                  <span className="text-label-mono text-[#6c63ff] mb-2 block">2019 – 2022</span>
                  <h3 className="text-headline-md text-xl text-on-surface">SMK Letris Indonesia 2</h3>
                  <h4 className="text-body-lg text-tertiary mb-3">Rekayasa Perangkat Lunak</h4>
                  <p className="text-body-md text-sm text-text-muted">Mempelajari dasar-dasar pemrograman, basis data, dan pengembangan aplikasi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-[120px] reveal" id="certifications">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px]">
          <h2 className="text-headline-lg text-on-surface mb-12 text-center"><span className="text-[#00d4aa]">/</span> Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bento-card p-6 rounded-xl flex flex-col h-full" style={{ borderTop: "4px solid #6c63ff" }}>
              <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-1 rounded text-label-caps" style={{ background: "rgba(108,99,255,0.1)", color: "#6c63ff" }}>Mobile Dev</span>
                <span className="text-label-mono text-text-muted">2023</span>
              </div>
              <span className="text-label-caps text-text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">verified</span> Dicoding Academy
              </span>
              <h3 className="text-headline-md text-base text-on-surface flex-grow">Belajar Membuat Aplikasi Flutter untuk Pemula</h3>
              <a className="text-label-mono text-[#6c63ff] hover:text-[#5b54d6] transition-colors mt-4 inline-flex items-center gap-1 px-4 py-2 rounded hover:bg-[rgba(26,26,36,0.8)]" style={{ background: "rgba(26,26,36,1)" }} href="#">Verify <span className="material-symbols-outlined text-xs">arrow_outward</span></a>
            </div>
            <div className="bento-card p-6 rounded-xl flex flex-col h-full" style={{ borderTop: "4px solid #00d4aa" }}>
              <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-1 rounded text-label-caps" style={{ background: "rgba(0,212,170,0.1)", color: "#00d4aa" }}>Software Eng</span>
                <span className="text-label-mono text-text-muted">2023</span>
              </div>
              <span className="text-label-caps text-text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">verified</span> Dicoding Academy
              </span>
              <h3 className="text-headline-md text-base text-on-surface flex-grow">Belajar Prinsip Pemrograman SOLID</h3>
              <a className="text-label-mono text-[#00d4aa] hover:text-[#41eec2] transition-colors mt-4 inline-flex items-center gap-1 px-4 py-2 rounded" style={{ background: "rgba(26,26,36,1)" }} href="#">Verify <span className="material-symbols-outlined text-xs">arrow_outward</span></a>
            </div>
            <div className="bento-card p-6 rounded-xl flex flex-col h-full" style={{ borderTop: "4px solid #6c63ff" }}>
              <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-1 rounded text-label-caps" style={{ background: "rgba(108,99,255,0.1)", color: "#6c63ff" }}>Programming</span>
                <span className="text-label-mono text-text-muted">2023</span>
              </div>
              <span className="text-label-caps text-text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">verified</span> Dicoding Academy
              </span>
              <h3 className="text-headline-md text-base text-on-surface flex-grow">Memulai Pemrograman dengan Dart</h3>
              <a className="text-label-mono text-[#6c63ff] hover:text-[#5b54d6] transition-colors mt-4 inline-flex items-center gap-1 px-4 py-2 rounded" style={{ background: "rgba(26,26,36,1)" }} href="#">Verify <span className="material-symbols-outlined text-xs">arrow_outward</span></a>
            </div>
            <div className="bento-card p-6 rounded-xl flex flex-col h-full" style={{ borderTop: "4px solid #00d4aa" }}>
              <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-1 rounded text-label-caps" style={{ background: "rgba(0,212,170,0.1)", color: "#00d4aa" }}>Web Dev</span>
                <span className="text-label-mono text-text-muted">2023</span>
              </div>
              <span className="text-label-caps text-text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">verified</span> BWA
              </span>
              <h3 className="text-headline-md text-base text-on-surface flex-grow">Full-Stack Laravel Web Development</h3>
              <a className="text-label-mono text-[#00d4aa] hover:text-[#41eec2] transition-colors mt-4 inline-flex items-center gap-1 px-4 py-2 rounded" style={{ background: "rgba(26,26,36,1)" }} href="#">Verify <span className="material-symbols-outlined text-xs">arrow_outward</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-[120px] reveal border-t relative overflow-hidden" id="contact" style={{ background: "rgba(12,14,18,0.8)", borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 pointer-events-none" style={{ background: "radial-gradient(ellipse at bottom right, rgba(108,99,255,0.1) 0%, transparent 70%)" }}></div>
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px] relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4aa] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d4aa]"></span>
              </span>
              <span className="text-label-caps text-[#00d4aa]">Available for freelance</span>
            </div>
            <h2 className="text-display-hero text-[48px] md:text-[56px] text-on-surface mb-6">Let's Build Something Great.</h2>
            <p className="text-body-lg text-tertiary">Have a project in mind? I'm always open to discussing new opportunities, collaborations, or tech in general.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-headline-md text-lg text-on-surface mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a className="flex items-center gap-3 text-tertiary hover:text-[#6c63ff] transition-colors group" href="mailto:hello@samsul.com">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[rgba(108,99,255,0.1)] transition-colors" style={{ background: "rgba(26,26,36,1)" }}>
                      <span className="material-symbols-outlined text-sm">mail</span>
                    </div>
                    <span className="text-body-md">hello@samsul.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-tertiary">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(26,26,36,1)" }}>
                      <span className="material-symbols-outlined text-sm">location_on</span>
                    </div>
                    <span className="text-body-md">Indonesia</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-headline-md text-lg text-on-surface mb-4">Socials</h3>
                <div className="flex gap-4">
                  <a className="w-12 h-12 rounded-lg flex items-center justify-center text-tertiary hover:text-white hover:border-[#6c63ff] hover:bg-[rgba(108,99,255,0.1)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }} href="https://github.com/Samsulmaarif01" target="_blank" rel="noreferrer">
                    <span className="text-label-caps">GH</span>
                  </a>
                  <a className="w-12 h-12 rounded-lg flex items-center justify-center text-tertiary hover:text-white hover:border-[#00d4aa] hover:bg-[rgba(0,212,170,0.1)] transition-all" style={{ background: "rgba(26,26,36,1)", border: "1px solid rgba(255,255,255,0.08)" }} href="https://linkedin.com/in/samsul-maarif-me" target="_blank" rel="noreferrer">
                    <span className="text-label-caps">IN</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="bento-card p-8 rounded-xl">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-label-mono text-tertiary mb-2">Name</label>
                    <input className="w-full rounded-lg px-4 py-3 text-on-surface transition-colors" placeholder="John Doe" type="text" style={{ background: "rgba(18,18,26,1)", border: "1px solid rgba(255,255,255,0.08)", outline: "none" }} />
                  </div>
                  <div>
                    <label className="block text-label-mono text-tertiary mb-2">Email</label>
                    <input className="w-full rounded-lg px-4 py-3 text-on-surface transition-colors" placeholder="john@example.com" type="email" style={{ background: "rgba(18,18,26,1)", border: "1px solid rgba(255,255,255,0.08)", outline: "none" }} />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-label-mono text-tertiary mb-2">Message</label>
                  <textarea className="w-full rounded-lg px-4 py-3 text-on-surface transition-colors" placeholder="Tell me about your project..." rows={4} style={{ background: "rgba(18,18,26,1)", border: "1px solid rgba(255,255,255,0.08)", outline: "none", resize: "vertical" }}></textarea>
                </div>
                <button className="w-full py-4 bg-[#6c63ff] hover:bg-[#5b54d6] text-white text-label-mono rounded-lg transition-colors" type="button" style={{ boxShadow: "0 0 20px rgba(108,99,255,0.15)" }}>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "rgba(12,14,18,1)", borderTop: "1px solid rgba(255,255,255,0.08)" }} className="py-8 w-full">
        <div className="max-w-[1280px] mx-auto px-[48px] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-display-hero text-[18px] text-[#6c63ff]">SM</div>
          <p className="text-body-md text-sm text-tertiary">© 2026 Samsul Maarif. Built with Precision.</p>
          <div className="flex gap-4">
            <a className="text-label-caps text-text-muted hover:text-[#00d4aa] transition-colors" href="https://github.com/Samsulmaarif01" target="_blank" rel="noreferrer">GitHub</a>
            <a className="text-label-caps text-text-muted hover:text-[#00d4aa] transition-colors" href="https://linkedin.com/in/samsul-maarif-me" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}
