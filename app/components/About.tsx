"use client";

import { useRef, useEffect, useState } from "react";
import data from "../data.json";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  const initials = data.profile.name.split(' ').map(n => n[0]).join('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      
      // Target rotation in degrees (max 8 degrees for an elegant 3D tilt)
      targetX.current = x * 8;
      targetY.current = -y * 8;
    };

    const handleMouseLeave = () => {
      // Smoothly return to center on mouse leave
      targetX.current = 0;
      targetY.current = 0;
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseleave", handleMouseLeave);
    }

    const updateTilt = () => {
      // Linear interpolation (lerp) for ultra-smooth movement (0.08 interpolation factor)
      currentX.current += (targetX.current - currentX.current) * 0.08;
      currentY.current += (targetY.current - currentY.current) * 0.08;

      if (tiltRef.current) {
        tiltRef.current.style.transform = `rotateX(${currentY.current}deg) rotateY(${currentX.current}deg)`;
      }

      animationFrameId.current = requestAnimationFrame(updateTilt);
    };

    animationFrameId.current = requestAnimationFrame(updateTilt);

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-[120px] relative overflow-hidden reveal"
      id="about"
    >
      <div className="about-particles">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="about-particle"
            style={{
              left: `${10 + i * 8}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      <div className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-20 pointer-events-none parallax-float" style={{ background: "linear-gradient(135deg, #6c63ff, #00d4aa)" }}></div>
      <div className="absolute bottom-20 left-5 w-20 h-20 rounded-full opacity-15 pointer-events-none parallax-float-slow" style={{ background: "linear-gradient(135deg, #00d4aa, #6c63ff)" }}></div>
      
      <div 
        ref={containerRef} 
        className="max-w-[1280px] mx-auto px-[16px] md:px-[48px]"
        style={{ perspective: "1500px" }}
      >
        <div 
          ref={tiltRef}
          className="grid md:grid-cols-2 gap-12 items-center"
          style={{
            transformStyle: 'preserve-3d',
            willChange: 'transform'
          }}
        >
          <div className="flex justify-center">
            <div 
              ref={avatarRef}
              className="about-avatar-container"
            >
              <div className="about-avatar-glow" />
              <div className="about-avatar-ring">
                <div className="about-avatar-ring-inner" />
              </div>
              <div className="about-avatar-inner gradient-border-avatar">
                <div className="about-logo-wrapper">
                  <div className="about-logo-hologram" />
                  <div className="about-logo-grid" />
                  <span className="about-logo-sm">SM</span>
                  <div className="about-logo-orbit about-logo-orbit-1">
                    <div className="about-logo-satellite" />
                  </div>
                  <div className="about-logo-orbit about-logo-orbit-2">
                    <div className="about-logo-satellite about-logo-satellite-2" />
                  </div>
                  <div className="about-logo-ring-glow" />
                </div>
              </div>
              <div className="about-avatar-floating about-avatar-floating-1">
                <span className="material-symbols-outlined text-2xl" style={{ color: "#6c63ff" }}>code</span>
              </div>
              <div className="about-avatar-floating about-avatar-floating-2">
                <span className="material-symbols-outlined text-2xl" style={{ color: "#00d4aa" }}>flutter_dash</span>
              </div>
              <div className="about-avatar-floating about-avatar-floating-3">
                <span className="material-symbols-outlined text-2xl" style={{ color: "#6c63ff" }}>web</span>
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <h2 className="text-headline-lg text-on-surface mb-6 about-title" style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
            }}>
              <span className="text-[#6c63ff]">/</span> About Me
            </h2>
            <p 
              className="text-body-lg text-tertiary mb-6 about-description"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '0.1s'
              }}
            >
              {data.about.description}
            </p>
            {data.about.secondaryDescription && (
              <p 
                className="text-body-lg text-tertiary mb-8 about-description"
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: '0.2s'
                }}
              >
                {data.about.secondaryDescription}
              </p>
            )}
            <div className="grid grid-cols-3 gap-6">
              {data.about.stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="about-stat-card"
                  style={{ 
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.8)',
                    transitionDelay: `${0.3 + i * 0.1}s`
                  }}
                >
                  <div className="about-stat-icon">
                    <span className="material-symbols-outlined text-3xl mb-2" style={{ color: stat.color }}>{stat.icon}</span>
                  </div>
                  <h4 className="text-headline-md text-lg text-on-surface">{stat.value}</h4>
                  <p className="text-sm text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="about-grid-lines" />
    </section>
  );
}