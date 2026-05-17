"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

import data from "./data.json";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Typing Animation - Loop every 5 seconds
    const typingElement = document.getElementById('typing-name');
    if (typingElement) {
      const text = data.profile.name;
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
            }, 2000);
            return;
          }
        } else {
          typingElement.textContent = text.substring(0, index);
          index--;
          if (index < 0) {
            isTyping = true;
            setTimeout(typeEffect, 2000);
            return;
          }
        }
        setTimeout(typeEffect, 80);
      };

      setTimeout(typeEffect, 500);
      setTimeout(() => setIsLoaded(true), 2000);
    } else {
      // Fallback if hero is not found immediately
      setTimeout(() => setIsLoaded(true), 1000);
    }

    // Initialize DOM-dependent effects
    const initEffects = () => {
      // Scroll Spy - Active navbar link
      const navLinks = document.querySelectorAll('.nav-link');
      const sections = document.querySelectorAll('#about, #skills, #projects, #experience, #certifications, #contact');

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
      updateActiveNav();

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
        (item as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
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
      if (heroSection && !heroSection.querySelector('.particle')) {
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

      // Tilt effect for bento-cards
      const cards = document.querySelectorAll('.bento-card');
      cards.forEach(card => {
        const cardEl = card as HTMLElement;
        // Remove existing listeners by cloning if necessary, or just avoid duplicate attaching
        if (!cardEl.dataset.tiltInitialized) {
          cardEl.dataset.tiltInitialized = "true";
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
        }
      });

      return { updateActiveNav, handleScroll, handleParallax, revealObserver, cards, heroSection };
    };

    // Run after a short delay to ensure all child components are fully rendered in the DOM
    const initTimer = setTimeout(() => {
      initEffects();
    }, 100);

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
      clearTimeout(initTimer);
      // Clean up event listeners on unmount
      window.removeEventListener('scroll', () => {});
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
      <LoadingScreen isLoaded={isLoaded} />

      <div className={`page-content ${isLoaded ? 'loaded' : ''}`}>
        <Navbar 
          isDarkMode={isDarkMode}
          isScrolled={isScrolled}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleTheme={toggleTheme}
          toggleMobileMenu={toggleMobileMenu}
          closeMobileMenu={closeMobileMenu}
          handleMobileNavClick={handleMobileNavClick}
        />

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        
        <Certifications 
          isDarkMode={isDarkMode}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
        
        <Contact />
        
        <Footer showScrollTop={showScrollTop} />
      </div>
    </>
  );
}