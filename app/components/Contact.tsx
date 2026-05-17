import data from "../data.json";

export default function Contact() {
  return (
    <section className="py-[120px] reveal border-t relative overflow-hidden" id="contact" role="region" aria-labelledby="contact-title" style={{ background: "rgba(12,14,18,0.8)", borderColor: "rgba(255,255,255,0.08)" }}>
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
          <h2 id="contact-title" className="text-display-hero text-[48px] md:text-[56px] text-on-surface mb-6">Let's Build Something Great.</h2>
          <p className="text-body-lg text-tertiary">Have a project in mind? I'm always open to discussing new opportunities, collaborations, or tech in general.</p>
        </div>
        <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-headline-md text-lg text-on-surface mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a className="flex items-center gap-3 text-tertiary hover:text-[#6c63ff] transition-colors group" href={`mailto:${data.profile.email}`}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[rgba(108,99,255,0.1)] transition-colors" style={{ background: "rgba(26,26,36,1)" }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <span className="text-body-md truncate">{data.profile.email}</span>
                </a>
                <div className="flex items-center gap-3 text-tertiary">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(26,26,36,1)" }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <span className="text-body-md">{data.profile.location}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-headline-md text-lg text-on-surface mb-4">Socials</h3>
              <div className="flex gap-4">
                {data.profile.github && (
                  <a className="w-12 h-12 rounded-lg flex items-center justify-center text-tertiary hover:text-white hover:border-[#6c63ff] hover:bg-[rgba(108,99,255,0.1)] transition-all" href={data.profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(26,26,36,1)" }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
                {data.profile.linkedin && (
                  <a className="w-12 h-12 rounded-lg flex items-center justify-center text-tertiary hover:text-white hover:border-[#00d4aa] hover:bg-[rgba(0,212,170,0.1)] transition-all" href={data.profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(26,26,36,1)" }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="bento-card p-8 rounded-xl">
              <form role="form" aria-label="Contact form">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-label-mono text-tertiary mb-2">Name</label>
                    <input id="name" className="w-full rounded-lg px-4 py-3 text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background" placeholder="John Doe" type="text" required aria-required="true" style={{ background: "rgba(18,18,26,1)", border: "1px solid rgba(255,255,255,0.08)" }} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-label-mono text-tertiary mb-2">Email</label>
                    <input id="email" className="w-full rounded-lg px-4 py-3 text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background" placeholder="john@example.com" type="email" required aria-required="true" style={{ background: "rgba(18,18,26,1)", border: "1px solid rgba(255,255,255,0.08)" }} />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-label-mono text-tertiary mb-2">Message</label>
                  <textarea id="message" className="w-full rounded-lg px-4 py-3 text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background" placeholder="Tell me about your project..." rows={4} required aria-required="true" style={{ background: "rgba(18,18,26,1)", border: "1px solid rgba(255,255,255,0.08)", resize: "vertical" }}></textarea>
                </div>
                <button className="w-full py-4 bg-[#6c63ff] hover:bg-[#5b54d6] text-white text-label-mono rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-offset-2 focus:ring-offset-background" type="button" aria-label="Send message">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}