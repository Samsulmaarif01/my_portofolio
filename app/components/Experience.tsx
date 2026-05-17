export default function Experience() {
  return (
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
  );
}