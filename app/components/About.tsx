import data from "../data.json";

export default function About() {
  const initials = data.profile.name.split(' ').map(n => n[0]).join('');

  return (
    <section className="py-[120px] relative overflow-hidden reveal" id="about">
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-20 pointer-events-none parallax-float" style={{ background: "linear-gradient(135deg, #6c63ff, #00d4aa)" }}></div>
      <div className="absolute bottom-20 left-5 w-20 h-20 rounded-full opacity-15 pointer-events-none parallax-float-slow" style={{ background: "linear-gradient(135deg, #00d4aa, #6c63ff)" }}></div>
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 gradient-border-avatar flex items-center justify-center">
              <span className="text-display-hero text-7xl text-[#6c63ff]">{initials}</span>
            </div>
          </div>
          <div>
            <h2 className="text-headline-lg text-on-surface mb-6"><span className="text-[#6c63ff]">/</span> About Me</h2>
            <p className="text-body-lg text-tertiary mb-6">{data.about.description}</p>
            {data.about.secondaryDescription && (
              <p className="text-body-lg text-tertiary mb-8">{data.about.secondaryDescription}</p>
            )}
            <div className="grid grid-cols-3 gap-6">
              {data.about.stats.map((stat, i) => (
                <div key={i}>
                  <span className="material-symbols-outlined text-3xl mb-2" style={{ color: stat.color }}>{stat.icon}</span>
                  <h4 className="text-headline-md text-lg text-on-surface">{stat.value}</h4>
                  <p className="text-sm text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}