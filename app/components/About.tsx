export default function About() {
  return (
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
  );
}