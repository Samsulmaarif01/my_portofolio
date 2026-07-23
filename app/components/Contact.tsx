import data from "../data.json";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 bg-[var(--bg-3)] border-t border-[var(--border-strong)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-[var(--accent)]"></span>
              <span className="text-sm font-mono tracking-widest text-[var(--accent)] uppercase">Get in touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6">Let's build something great together.</h2>
            <p className="text-lg text-[var(--muted)] font-manrope mb-12">
              Have a project in mind, a question, or just want to say hi? I'm always open to discussing new opportunities and ideas.
            </p>
            
            <div className="space-y-6 font-mono">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[var(--border-strong)] bg-[var(--card)] flex items-center justify-center text-[var(--accent)]">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <div className="text-[10px] text-[var(--muted)] uppercase tracking-widest mb-1">Email</div>
                  <a href={`mailto:${data.profile.email}`} className="text-[var(--fg)] hover:text-[var(--accent)] transition-colors">{data.profile.email}</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[var(--border-strong)] bg-[var(--card)] flex items-center justify-center text-[var(--accent)]">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <div className="text-[10px] text-[var(--muted)] uppercase tracking-widest mb-1">Location</div>
                  <span className="text-[var(--fg)]">{data.profile.location}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <form className="p-8 rounded-2xl border border-[var(--border-strong)] bg-[var(--bg)] flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-[var(--muted)] uppercase">Name</label>
                  <input type="text" className="w-full bg-[var(--bg-2)] border border-[var(--border-strong)] rounded-lg px-4 py-3 text-[var(--fg)] font-manrope focus:outline-none focus:border-[var(--accent)] transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-[var(--muted)] uppercase">Email</label>
                  <input type="email" className="w-full bg-[var(--bg-2)] border border-[var(--border-strong)] rounded-lg px-4 py-3 text-[var(--fg)] font-manrope focus:outline-none focus:border-[var(--accent)] transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono text-[var(--muted)] uppercase">Subject</label>
                <input type="text" className="w-full bg-[var(--bg-2)] border border-[var(--border-strong)] rounded-lg px-4 py-3 text-[var(--fg)] font-manrope focus:outline-none focus:border-[var(--accent)] transition-colors" placeholder="Project Inquiry" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono text-[var(--muted)] uppercase">Message</label>
                <textarea rows={4} className="w-full bg-[var(--bg-2)] border border-[var(--border-strong)] rounded-lg px-4 py-3 text-[var(--fg)] font-manrope focus:outline-none focus:border-[var(--accent)] transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              
              <button type="submit" onClick={(e) => e.preventDefault()} className="w-full py-4 bg-[var(--accent)] text-black font-semibold rounded-lg hover:bg-[#e6a600] transition-colors mt-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}