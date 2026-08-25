"use client";

import { useEffect } from "react";
import { LangProvider } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Experience from "./components/Experience";
import Capabilities from "./components/Capabilities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const SPY_IDS = ["work", "about", "experience", "contact"];

export default function Home() {
  useEffect(() => {
    /* One-way reveal: elements fade up once as they enter the viewport */
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    /* Scroll spy for desktop navigation */
    let ticking = false;
    const updateSpy = () => {
      ticking = false;
      let current = "";
      for (const id of SPY_IDS) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 180) current = id;
      }
      document.querySelectorAll<HTMLAnchorElement>(".nav-link").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateSpy);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateSpy();

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <LangProvider>
      <div className="page-rails" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
