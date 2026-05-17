export default function Skills() {
  return (
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
  );
}