interface Certification {
  id: number;
  title: string;
  issuer: string;
  category: string;
  year: string;
  color: string;
}

interface CertificationsProps {
  isDarkMode: boolean;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (open: boolean) => void;
}

const certifications: Certification[] = [
  { id: 1, title: "Belajar Membuat Aplikasi Flutter untuk Pemula", issuer: "Dicoding Academy", category: "Mobile Dev", year: "2023", color: "#6c63ff" },
  { id: 2, title: "Belajar Prinsip Pemrograman SOLID", issuer: "Dicoding Academy", category: "Software Eng", year: "2023", color: "#00d4aa" },
  { id: 3, title: "Memulai Pemrograman dengan Dart", issuer: "Dicoding Academy", category: "Programming", year: "2023", color: "#6c63ff" },
  { id: 4, title: "Full-Stack Laravel Web Development", issuer: "BWA", category: "Web Dev", year: "2023", color: "#00d4aa" },
  { id: 5, title: "Belajar Dasar Git with GitHub", issuer: "Dicoding Academy", category: "DevOps", year: "2024", color: "#6c63ff" },
  { id: 6, title: "Belajar Fundamental Front-End Web", issuer: "Dicoding Academy", category: "Web Dev", year: "2024", color: "#00d4aa" },
  { id: 7, title: "Cloud Practitioner Essentials", issuer: "Dicoding Academy", category: "Cloud", year: "2024", color: "#6c63ff" },
  { id: 8, title: "Menjadi Flutter Developer", issuer: "BWA", category: "Mobile Dev", year: "2024", color: "#00d4aa" },
  { id: 9, title: "Belajar Database MySQL", issuer: "Dicoding Academy", category: "Database", year: "2024", color: "#6c63ff" },
  { id: 10, title: "UI/UX Design Fundamental", issuer: "Dicoding Academy", category: "Design", year: "2024", color: "#00d4aa" },
  { id: 11, title: "Machine Learning Terapan", issuer: "Dicoding Academy", category: "AI", year: "2025", color: "#6c63ff" },
  { id: 12, title: "AWS Cloud Fundamentals", issuer: "AWS", category: "Cloud", year: "2025", color: "#00d4aa" },
];

const categories = ["All", "Mobile Dev", "Web Dev", "Programming", "Software Eng", "DevOps", "Cloud", "Database", "Design", "AI"];

export default function Certifications({ isDarkMode, selectedCategory, setSelectedCategory, isDropdownOpen, setIsDropdownOpen }: CertificationsProps) {
  return (
    <section className="py-[120px] reveal" id="certifications">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px]">
        <h2 className="text-headline-lg text-on-surface mb-8 text-center"><span className="text-[#00d4aa]">/</span> Certifications</h2>
        
        {/* Dropdown Filter */}
        <div className="flex justify-center mb-8 relative z-30">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 px-5 py-3 rounded-lg text-label-mono transition-all"
              style={{ 
                background: isDarkMode ? "rgba(26,26,36,1)" : "rgba(255,255,255,0.8)", 
                border: "1px solid rgba(108,99,255,0.3)" 
              }}
            >
              <span className="text-on-surface">{selectedCategory === "All" ? "All Certifications" : selectedCategory}</span>
              <svg className={`w-5 h-5 text-tertiary transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 left-0 w-full min-w-[200px] rounded-lg overflow-hidden z-50" style={{ 
                background: isDarkMode ? "rgba(26,26,36,0.98)" : "rgba(255,255,255,0.98)", 
                border: "1px solid rgba(108,99,255,0.3)" 
              }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); setIsDropdownOpen(false); }}
                    className={`w-full text-left px-4 py-3 text-label-mono transition-colors ${selectedCategory === cat ? 'text-[#6c63ff]' : 'text-tertiary hover:bg-white/5'}`}
                  >
                    {cat === "All" ? "All Certifications" : cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Scrollable Certifications Grid */}
        <div className="max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications
              .filter(cert => selectedCategory === "All" || cert.category === selectedCategory)
              .map((cert) => (
                <div key={cert.id} className="bento-card p-6 rounded-xl flex flex-col h-full" style={{ borderTop: `4px solid ${cert.color}` }}>
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-2 py-1 rounded text-label-caps" style={{ background: `${cert.color}20`, color: cert.color }}>{cert.category}</span>
                    <span className="text-label-mono text-text-muted">{cert.year}</span>
                  </div>
                  <span className="text-label-caps text-text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#00d4aa]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg> {cert.issuer}
                  </span>
                  <h3 className="text-headline-md text-base text-on-surface flex-grow">{cert.title}</h3>
                  <a className="text-label-mono mt-4 inline-flex items-center gap-1 px-4 py-2 rounded transition-colors hover:bg-[rgba(26,26,36,0.8)]" style={{ background: "rgba(26,26,36,1)", color: cert.color }} href="#">Verify <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg></a>
                </div>
              ))}
          </div>
        </div>
        
        <p className="text-center text-label-caps text-text-muted mt-4">
          Showing {certifications.filter(cert => selectedCategory === "All" || cert.category === selectedCategory).length} of {certifications.length} certifications
        </p>
      </div>
    </section>
  );
}