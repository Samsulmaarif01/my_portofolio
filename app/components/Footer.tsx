import data from "../data.json";

interface FooterProps {
  showScrollTop: boolean;
}

export default function Footer({ showScrollTop }: FooterProps) {
  const name = data.profile.name.split(' ')[0] || 'Samsul';

  return (
    <>
      <footer className="py-12 border-t border-[var(--border)] bg-[var(--bg)] text-center relative z-10 w-full">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-sora font-bold text-xl tracking-tight text-[var(--fg)]">
            {name}<span className="text-[var(--accent)]">.</span>
          </div>
          
          <p className="text-[var(--muted)] font-mono text-sm">
            &copy; {new Date().getFullYear()} {data.profile.name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {data.profile.github && (
              <a href={data.profile.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[var(--border-strong)] bg-[var(--card)] flex items-center justify-center text-[var(--fg)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all">
                <i className="fa-brands fa-github"></i>
              </a>
            )}
            {data.profile.linkedin && (
              <a href={data.profile.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[var(--border-strong)] bg-[var(--card)] flex items-center justify-center text-[var(--fg)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            )}
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-[var(--bg)] bg-[var(--accent)] hover:bg-[#e6a600] transition-all duration-300 z-50 scroll-to-top focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-background ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </>
  );
}