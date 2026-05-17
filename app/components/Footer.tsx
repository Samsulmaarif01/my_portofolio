interface FooterProps {
  showScrollTop: boolean;
}

export default function Footer({ showScrollTop }: FooterProps) {
  return (
    <>
      <footer style={{ background: "rgba(12,14,18,1)", borderTop: "1px solid rgba(255,255,255,0.08)" }} className="py-8 w-full">
        <div className="max-w-[1280px] mx-auto px-[48px] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-display-hero text-[18px] text-[#6c63ff]">SM</div>
          <p className="text-body-md text-sm text-tertiary">© 2026 Samsul Maarif. Built with Precision.</p>
          <div className="flex gap-4">
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
    </>
  );
}