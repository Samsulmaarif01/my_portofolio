"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

      // Page load animation - Give it a bit more time for the spinner to be seen
      setTimeout(() => setIsLoaded(true), 2000);
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

    // Scroll handling for navbar and scroll-to-top
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Stagger animation for elements
    const staggerItems = document.querySelectorAll('.stagger-item');
    staggerItems.forEach((item, index) => {
      (item as HTMLElement).style.transitionDelay = `${index * 0.2}s`;
    });

    // Enhanced reveal observer with lazy loading
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
          const children = entry.target.querySelectorAll('.stagger-item');
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 150);
          });
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
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

    // Parallax effect for hero gradient
    const handleParallax = () => {
      const heroGradient = document.getElementById('hero-gradient');
      if (heroGradient) {
        const scrolled = window.scrollY;
        heroGradient.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleParallax);

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

    // Tilt effect for bento-cards
    const cards = document.querySelectorAll('.bento-card');
    cards.forEach(card => {
      const cardEl = card as HTMLElement;
      cardEl.addEventListener('mousemove', (e) => {
        const rect = cardEl.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (centerY - y) / 10;
        const rotateY = (x - centerX) / 10;
        cardEl.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
      });
      cardEl.addEventListener('mouseleave', () => {
        cardEl.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
      });
    });

    return () => {
      window.removeEventListener('scroll', updateActiveNav);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleParallax);
      revealObserver.disconnect();
      if (heroSection) {
        const particles = heroSection.querySelectorAll('.particle');
        particles.forEach(p => p.remove());
      }
      cards.forEach(card => {
        const cardEl = card as HTMLElement;
        cardEl.replaceWith(cardEl.cloneNode(true)); // Clean listeners
      });
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

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      {/* Loading Screen */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-700 bg-[#0a0a0f] ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        <div className="relative">
          {/* Logo Animation */}
          <div className="text-display-hero text-6xl text-[#6c63ff] mb-8 animate-pulse nav-logo">SM</div>

          {/* Advanced Spinner */}
          <div className="absolute inset-x-0 -bottom-4 flex justify-center">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#6c63ff] animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 rounded-full bg-[#00d4aa] animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 rounded-full bg-[#6c63ff] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>

        {/* Loading Progress Text */}
        <div className="mt-12 overflow-hidden w-48 h-0.5 bg-white/5 rounded-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6c63ff] to-[#00d4aa] origin-left animate-loading-bar"></div>
        </div>
        <p className="mt-4 text-label-mono text-xs text-tertiary/50 tracking-[0.2em] uppercase">Initializing Portfolio</p>
      </div>

      <div className={`page-content ${isLoaded ? 'loaded' : ''}`}>
        {/* NAV */}
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
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(108,99,255,0.03), transparent)" }}></div>
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
              <a onClick={(e) => handleMobileNavClick(e, 'about')} className="mobile-nav-link text-label-mono text-xl py-4 px-4 text-on-surface-variant hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-lg transition-all duration-300" href="#about">About</a>
              <a onClick={(e) => handleMobileNavClick(e, 'skills')} className="mobile-nav-link text-label-mono text-xl py-4 px-4 text-on-surface-variant hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-lg transition-all duration-300" href="#skills">Tech Stack</a>
              <a onClick={(e) => handleMobileNavClick(e, 'experience')} className="mobile-nav-link text-label-mono text-xl py-4 px-4 text-on-surface-variant hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-lg transition-all duration-300" href="#experience">Background</a>
              <a onClick={(e) => handleMobileNavClick(e, 'projects')} className="mobile-nav-link text-label-mono text-xl py-4 px-4 text-on-surface-variant hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-lg transition-all duration-300" href="#projects">Projects</a>
              <a onClick={(e) => handleMobileNavClick(e, 'certifications')} className="mobile-nav-link text-label-mono text-xl py-4 px-4 text-on-surface-variant hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-lg transition-all duration-300" href="#certifications">Certifications</a>
              <a onClick={(e) => handleMobileNavClick(e, 'contact')} className="mobile-nav-link text-label-mono text-xl py-4 px-4 text-on-surface-variant hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-lg transition-all duration-300" href="#contact">Contact</a>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8">
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
        <section className="py-[120px] relative overflow-hidden reveal" id="about">
          <div className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-20 pointer-events-none parallax-float" style={{ background: "linear-gradient(135deg, #6c63ff, #00d4aa)" }}></div>
          <div className="absolute bottom-20 left-5 w-20 h-20 rounded-full opacity-15 pointer-events-none parallax-float-slow" style={{ background: "linear-gradient(135deg, #00d4aa, #6c63ff)" }}></div>
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
        <section className="py-[120px] reveal" id="skills" style={{ background: "rgba(12,14,18,0.5)" }}>
          <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px]">
            <h2 className="text-headline-lg text-on-surface mb-12 text-center"><span className="text-[#6c63ff]">/</span> Tech Stack</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bento-card p-8 rounded-xl stagger-item">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-6 h-6 text-[#6c63ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                  <h3 className="text-headline-md text-xl text-on-surface">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] transition-all">HTML</span>
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] transition-all">CSS</span>
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] transition-all">JavaScript</span>
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] transition-all">Tailwind CSS</span>
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] transition-all">Bootstrap</span>
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] transition-all">Blade PHP</span>
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] transition-all">Livewire </span>
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] transition-all">React.js</span>
                </div>
              </div>
              <div className="bento-card p-8 rounded-xl stagger-item">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-6 h-6 text-[#00d4aa]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                  <h3 className="text-headline-md text-xl text-on-surface">Mobile</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#00d4aa] transition-all">Flutter</span>
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#00d4aa] transition-all">Dart</span>
                </div>
              </div>
              <div className="bento-card p-8 rounded-xl stagger-item">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-6 h-6 text-[#6c63ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V3a3 3 0 013-3h13.5a3 3 0 013 3v8.25a3 3 0 01-3 3m-13.5 0a3 3 0 00-3 3v3.75a3 3 0 003 3h13.5a3 3 0 003-3v-3.75a3 3 0 00-3-3M6 4.5h.008v.008H6V4.5zm.008 4.5H6v.008h.008V9zm12-4.5h.008v.008H18V4.5zm.008 4.5H18v.008h.008V9z" />
                  </svg>
                  <h3 className="text-headline-md text-xl text-on-surface">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] transition-all">Laravel</span>
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] transition-all">Node.js</span>
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] transition-all">Firebase</span>
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] transition-all">Supabase</span>
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] transition-all">AppWrite</span>
                </div>
              </div>
              <div className="bento-card p-8 rounded-xl stagger-item">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-6 h-6 text-[#00d4aa]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.25-3.694 4.066-8.25 4.066S3.75 8.625 3.75 6.375m16.5 0c0-2.25-3.694-4.065-8.25-4.065S3.75 4.125 3.75 6.375m16.5 0v11.25c0 2.25-3.694 4.065-8.25 4.065s-8.25-1.815-8.25-4.065V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75m-16.5-3.75v3.75" />
                  </svg>
                  <h3 className="text-headline-md text-xl text-on-surface">Database</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#00d4aa] transition-all">MySQL</span>
                </div>
              </div>
              <div className="bento-card p-8 rounded-xl stagger-item">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-6 h-6 text-[#6c63ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.456-2.454L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                  <h3 className="text-headline-md text-xl text-on-surface">AI &amp; Tools</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] transition-all">Antigravity</span>
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] transition-all">Opencode</span>
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] transition-all">Claude</span>
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#6c63ff] transition-all">Gemini</span>
                </div>
              </div>
              <div className="bento-card p-8 rounded-xl stagger-item">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-6 h-6 text-[#00d4aa]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  <h3 className="text-headline-md text-xl text-on-surface">DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#00d4aa] transition-all">Git</span>
                  <span className="px-4 py-2 rounded-full text-label-mono text-tertiary hover:border-[#00d4aa] transition-all">GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="py-[120px] reveal" id="projects">
          <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px]">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-headline-lg text-on-surface"><span className="text-[#6c63ff]">/</span> Featured Work</h2>
              <a className="hidden md:flex items-center gap-2 text-label-mono text-[#00d4aa] hover:text-[#41eec2] transition-colors" href="https://github.com/Samsulmaarif01" target="_blank" rel="noreferrer">
                View All on GitHub
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            {/* Bento Grid: 2 columns desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* ① SHAMO — FEATURED LARGE */}
              <div className="bento-card rounded-xl overflow-hidden group md:row-span-2 flex flex-col">
                <div className="h-64 md:h-80 relative overflow-hidden flex-shrink-0 project-image-container" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #0d3b6e 50%, #16213e 100%)" }}>
                  <div className="absolute" style={{ width: "220px", height: "220px", borderRadius: "50%", border: "2px solid rgba(0,212,170,0.2)", top: "-40px", left: "-40px" }}></div>
                  <div className="absolute" style={{ width: "150px", height: "150px", borderRadius: "50%", border: "2px solid rgba(0,212,170,0.15)", top: "20px", right: "-30px" }}></div>
                  <div className="absolute inset-0 flex items-center justify-center project-icon-placeholder">
                    <svg className="w-24 h-24 text-[#00d4aa] opacity-25" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
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
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      </svg> GitHub
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                    <span className="text-label-caps text-text-muted">Flutter · Mobile</span>
                  </div>
                </div>
              </div>

              {/* ② WEB TIKET ONLINE */}
              <div className="bento-card rounded-xl overflow-hidden group">
                <div className="h-48 relative overflow-hidden project-image-container" style={{ background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)" }}>
                  <div className="absolute" style={{ width: "160px", height: "160px", borderRadius: "50%", border: "1px solid rgba(108,99,255,0.25)", top: "-30px", right: "-30px" }}></div>
                  <div className="absolute inset-0 flex items-center justify-center project-icon-placeholder">
                    <svg className="w-20 h-20 text-[#6c63ff] opacity-20" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                    </svg>
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
                      GitHub <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                    </a>
                    <span className="text-label-caps text-text-muted">Web · Laravel</span>
                  </div>
                </div>
              </div>

              {/* ③ COWORKER */}
              <div className="bento-card rounded-xl overflow-hidden group">
                <div className="h-48 relative overflow-hidden project-image-container" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #2d1b69 50%, #11998e 100%)" }}>
                  <div className="absolute" style={{ width: "180px", height: "180px", borderRadius: "50%", border: "1px solid rgba(0,212,170,0.2)", bottom: "-40px", right: "-40px" }}></div>
                  <div className="absolute inset-0 flex items-center justify-center project-icon-placeholder">
                    <svg className="w-20 h-20 text-[#00d4aa] opacity-20" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
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
                      GitHub <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                    </a>
                    <span className="text-label-caps text-text-muted">Flutter · Mobile</span>
                  </div>
                </div>
              </div>

              {/* ④ WEB PENGUMPULAN TUGAS — FULL WIDTH */}
              <div className="bento-card rounded-xl overflow-hidden group md:col-span-2">
                <div className="flex flex-col md:flex-row">
                  <div className="h-48 md:h-auto md:w-72 flex-shrink-0 relative overflow-hidden project-image-container" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #3a1c71 40%, #d76d77 100%)" }}>
                    <div className="absolute" style={{ width: "200px", height: "200px", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.1)", top: "-60px", left: "-60px" }}></div>
                    <div className="absolute inset-0 flex items-center justify-center project-icon-placeholder">
                      <svg className="w-24 h-24 text-white opacity-20" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
                      </svg>
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
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> GitHub <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                      </a>
                      <a className="inline-flex items-center gap-1.5 text-label-mono text-[#00d4aa] hover:text-[#41eec2] transition-colors" href="https://web-pengumpulan-tugas-mahasiswa-t5km.vercel.app/" target="_blank" rel="noreferrer">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg> Live Demo <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                See All 36 Repositories
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section className="py-[120px] reveal" id="experience" style={{ background: "rgba(12,14,18,0.5)" }}>
          <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px]">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Experience */}
              <div>
                <h2 className="text-headline-md text-on-surface mb-10 flex items-center gap-3">
                  <svg className="w-8 h-8 text-[#6c63ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.052-.882 1.9-1.97 1.9L5.72 20.3c-1.088 0-1.97-.848-1.97-1.9v-4.25m16.5 0a2.25 2.25 0 00-2.25-2.25H5.72a2.25 2.25 0 00-2.25 2.25m16.5 0V12a3 3 0 00-3-3H6.72a3 3 0 00-3 3v2.15M12 12a3 3 0 100-6 3 3 0 000 6z" />
                  </svg> Experience
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
                  <svg className="w-8 h-8 text-[#00d4aa]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147L12 15l7.74-4.853a4.5 4.5 0 00-4.897-7.37L12 4.5l-2.843-1.723a4.5 4.5 0 00-4.897 7.37z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.89V15a3 3 0 01-3 3h-1.5a3 3 0 01-3-3v-4.11M3 10.89V15a3 3 0 003 3h1.5a3 3 0 003-3v-4.11" />
                  </svg> Education
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
                  <svg className="w-4 h-4 text-[#00d4aa]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg> Dicoding Academy
                </span>
                <h3 className="text-headline-md text-base text-on-surface flex-grow">Belajar Membuat Aplikasi Flutter untuk Pemula</h3>
                <a className="text-label-mono text-[#6c63ff] hover:text-[#5b54d6] transition-colors mt-4 inline-flex items-center gap-1 px-4 py-2 rounded hover:bg-[rgba(26,26,36,0.8)]" style={{ background: "rgba(26,26,36,1)" }} href="#">Verify <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg></a>
              </div>
              <div className="bento-card p-6 rounded-xl flex flex-col h-full" style={{ borderTop: "4px solid #00d4aa" }}>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2 py-1 rounded text-label-caps" style={{ background: "rgba(0,212,170,0.1)", color: "#00d4aa" }}>Software Eng</span>
                  <span className="text-label-mono text-text-muted">2023</span>
                </div>
                <span className="text-label-caps text-text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#00d4aa]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg> Dicoding Academy
                </span>
                <h3 className="text-headline-md text-base text-on-surface flex-grow">Belajar Prinsip Pemrograman SOLID</h3>
                <a className="text-label-mono text-[#00d4aa] hover:text-[#41eec2] transition-colors mt-4 inline-flex items-center gap-1 px-4 py-2 rounded" style={{ background: "rgba(26,26,36,1)" }} href="#">Verify <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg></a>
              </div>
              <div className="bento-card p-6 rounded-xl flex flex-col h-full" style={{ borderTop: "4px solid #6c63ff" }}>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2 py-1 rounded text-label-caps" style={{ background: "rgba(108,99,255,0.1)", color: "#6c63ff" }}>Programming</span>
                  <span className="text-label-mono text-text-muted">2023</span>
                </div>
                <span className="text-label-caps text-text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#00d4aa]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg> Dicoding Academy
                </span>
                <h3 className="text-headline-md text-base text-on-surface flex-grow">Memulai Pemrograman dengan Dart</h3>
                <a className="text-label-mono text-[#6c63ff] hover:text-[#5b54d6] transition-colors mt-4 inline-flex items-center gap-1 px-4 py-2 rounded" style={{ background: "rgba(26,26,36,1)" }} href="#">Verify <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg></a>
              </div>
              <div className="bento-card p-6 rounded-xl flex flex-col h-full" style={{ borderTop: "4px solid #00d4aa" }}>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2 py-1 rounded text-label-caps" style={{ background: "rgba(0,212,170,0.1)", color: "#00d4aa" }}>Web Dev</span>
                  <span className="text-label-mono text-text-muted">2023</span>
                </div>
                <span className="text-label-caps text-text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#00d4aa]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg> BWA
                </span>
                <h3 className="text-headline-md text-base text-on-surface flex-grow">Full-Stack Laravel Web Development</h3>
                <a className="text-label-mono text-[#00d4aa] hover:text-[#41eec2] transition-colors mt-4 inline-flex items-center gap-1 px-4 py-2 rounded" style={{ background: "rgba(26,26,36,1)" }} href="#">Verify <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg></a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-[120px] reveal border-t relative overflow-hidden" id="contact" style={{ background: "rgba(12,14,18,0.8)", borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="absolute top-10 left-1/4 w-24 h-24 rounded-full opacity-10 pointer-events-none parallax-float" style={{ background: "linear-gradient(135deg, #6c63ff, #00d4aa)" }}></div>
          <div className="absolute bottom-10 right-1/3 w-16 h-16 rounded-full opacity-15 pointer-events-none parallax-float-slow" style={{ background: "linear-gradient(135deg, #00d4aa, #6c63ff)" }}></div>
          <div className="absolute right-0 bottom-0 w-1/2 h-1/2 pointer-events-none" style={{ background: "radial-gradient(ellipse at bottom right, rgba(108,99,255,0.1) 0%, transparent 70%)" }}></div>
          <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px] relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
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
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <span className="text-body-md">hello@samsul.com</span>
                    </a>
                    <div className="flex items-center gap-3 text-tertiary">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(26,26,36,1)" }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <span className="text-body-md">Indonesia</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-headline-md text-lg text-on-surface mb-4">Socials</h3>
                  <div className="flex gap-4">
                    <a className="w-12 h-12 rounded-lg flex items-center justify-center text-tertiary hover:text-white hover:border-[#6c63ff] hover:bg-[rgba(108,99,255,0.1)] transition-all" href="https://github.com/Samsulmaarif01" target="_blank" rel="noreferrer" aria-label="GitHub">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="w-12 h-12 rounded-lg flex items-center justify-center text-tertiary hover:text-white hover:border-[#00d4aa] hover:bg-[rgba(0,212,170,0.1)] transition-all" href="https://linkedin.com/in/samsul-maarif-me" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
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
              {/* Social links removed as they are already in the social section */}
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-[#6c63ff] transition-all duration-300 z-50 scroll-to-top ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
          style={{ background: "rgba(18,18,26,0.9)", border: "1px solid rgba(108,99,255,0.3)", boxShadow: "0 4px 20px rgba(108,99,255,0.2)" }}
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </div>
    </>
  );
}
