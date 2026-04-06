import { useTheme } from '@/contexts/ThemeContext';

const professionalProjects = [
  {
    tag: '🏛️ National Project - CDAC',
    title: 'ERSS Scenario Replay',
    images: ['/erss-scenario-1.png', '/erss-scenario-2.png', '/erss-scenario-3.png'],
    period: 'Jul 2023 - Sep 2024  ·  Deployed across 23+ states/UTs',
    description: 'Comprehensive timeline visualization platform that reconstructs and replays the complete lifecycle of an emergency incident. Groups operational data by Event ID, presenting it as a chronological timeline with multimedia integration, nested multi-vehicle dispatch tracking, geospatial mapping with vehicle route visualization, and PDF report generation.',
    pills: ['React 18', 'Node.js', 'React Chrono', 'React Leaflet', 'Material UI', 'Keycloak', 'NGINX'],
    copyright: { number: 'SW-2025020784', link: 'https://drive.google.com/file/d/1HE7HDdAWTSLkyYdg7-ZJ9nRb9csRrjXE/view' },
  },
  {
    tag: '🏛️ National Project - CDAC',
    title: 'ERSS Alarms & Alerts',
    images: ['/erss-alarms-1.png', '/erss-alarms-2.png', '/erss-alarms-3.png'],
    period: 'May 2024 - Oct 2025 · State & Central Dashboard',
    description: 'Multi-state real-time log monitoring platform with centralized national dashboard featuring an interactive India map. Transformed a partially developed system into a production-ready platform. Built complete stack: React frontend, Spring Boot backend with RESTful APIs, Python scripts for log processing via Syslog-ng data pipeline. Implemented comprehensive security hardening post-audit.',
    pills: ['React 17', 'Spring Boot 2.6', 'Java 11', 'Python 3', 'PostgreSQL', 'Syslog-ng', 'WildFly 21'],
  },
  {
    tag: '🏛️ National Project - CDAC',
    title: 'ERSS Call Accounting',
    images: ['/erss-call-1.png', '/erss-call-2.png', '/erss-call-3.png'],
    period: 'Mar 2025 - Dec 2025',
    description: 'Real-time performance monitoring web application for tracking emergency call taker centers. Features live agent availability tracking, threshold-based alerts, real-time status indicators, and interactive analytics dashboards. Built multiple report generating pages with filters and exportable analytics. Integrated REST APIs and implemented Keycloak role-based authentication.',
    pills: ['React 19 (Vite)', 'Node.js', 'Keycloak', 'Material-UI', 'Radix UI', 'Shadcn UI', 'Recharts', 'Lucide React'],
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="projects" className="relative z-[1] py-14 sm:py-24 px-4 sm:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
          <span className="text-primary flex items-center gap-3">
            <span className="w-[30px] h-px bg-primary inline-block" />
            Portfolio
          </span>
        </div>
        <h2 className="reveal mt-2 mb-2 font-bold text-foreground leading-tight" style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>
          Professional{' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-text)' }}>Projects</span>
        </h2>
        <p className="reveal text-[0.88rem] text-muted-foreground mb-8">
          Built at C-DAC for India's ERSS 112 national emergency system. Screenshots are blurred due to organizational confidentiality.
        </p>

        <div className="grid gap-6">
          {professionalProjects.map((project) => (
            <div
              key={project.title}
              className={`reveal rounded-2xl border overflow-hidden transition-all duration-300 relative group ${
                isDark
                  ? 'bg-card border-border hover:border-primary hover:shadow-[0_12px_40px_rgba(0,245,255,0.1)] hover:-translate-y-1'
                  : 'bg-card border-border hover:border-primary/40 hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] relative z-[1]">
                {/* Screenshot collage */}
                <div
                  className="h-[200px] md:h-full md:min-h-[260px] relative overflow-hidden flex items-center justify-center"
                  style={{ background: isDark ? 'linear-gradient(135deg, #0a0e1e, #111633)' : 'transparent' }}
                >
                  <div className="relative w-[90%] h-[85%]">
                    {project.images.map((imgSrc, i) => (
                      <div key={i} className={`absolute rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-500 border border-white/5 ${
                        [
                          'top-[5%] left-[5%] w-[65%] h-[55%] z-[3] -rotate-2 group-hover:-rotate-1 group-hover:scale-[1.02]',
                          'top-[20%] right-[5%] w-[55%] h-[50%] z-[2] rotate-2 group-hover:rotate-1 group-hover:scale-[1.02]',
                          'bottom-[5%] left-[15%] w-[60%] h-[45%] z-[1] -rotate-1 group-hover:rotate-0 group-hover:scale-[1.02]'
                        ][i]
                      }`}>
                        <img 
                          src={imgSrc} 
                          alt={`${project.title} screenshot ${i + 1}`} 
                          className="w-full h-full object-cover" 
                          style={{ filter: isDark ? 'blur(2px) brightness(0.7) saturate(0.8)' : 'blur(2px) brightness(0.95) saturate(0.9)' }} 
                        />
                      </div>
                    ))}
                    <div className="absolute inset-0 z-[4] flex items-center justify-center pointer-events-none" style={{ background: isDark ? 'linear-gradient(135deg, rgba(0,245,255,.08) 0%, transparent 50%, rgba(123,97,255,.08) 100%)' : 'linear-gradient(135deg, rgba(79,70,229,.05) 0%, transparent 50%, rgba(249,115,22,.05) 100%)' }}>
                      <span className="text-[0.65rem] tracking-[2px] uppercase px-3 py-1 rounded backdrop-blur-sm" style={{ fontFamily: 'var(--font-mono)', color: isDark ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.3)', background: isDark ? 'rgba(0,0,0,.4)' : 'rgba(255,255,255,.6)' }}>
                        Confidential · 3 Views
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-5 sm:p-8">
                  <div className="text-[0.7rem] tracking-[1px] uppercase mb-2" style={{ fontFamily: 'var(--font-mono)', color: isDark ? '#ff006e' : '#f97316' }}>
                    {project.tag}
                  </div>
                  <h3 className="text-[1.05rem] font-bold text-foreground mb-1" style={{ fontFamily: 'var(--font-head)' }}>{project.title}</h3>
                  <div className="text-[0.8rem] text-muted-foreground mb-3">{project.period}</div>
                  <p className="text-[0.85rem] sm:text-[0.88rem] leading-[1.8] text-foreground/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.pills.map((pill) => (
                      <span key={pill} className={`px-2.5 py-1 rounded-full text-[0.72rem] font-medium ${isDark ? 'bg-primary/10 border border-primary/15 text-primary' : 'bg-primary/5 border border-primary/15 text-primary'}`}>
                        {pill}
                      </span>
                    ))}
                  </div>
                  {project.copyright && (
                    <a
                      href={project.copyright.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-md text-[0.75rem] font-semibold transition-all duration-300 ${
                        isDark
                          ? 'bg-[rgba(163,255,18,0.1)] border border-[rgba(163,255,18,0.25)] text-[#a3ff12] hover:bg-[rgba(163,255,18,0.18)]'
                          : 'bg-green-50 border border-green-200 text-green-700 hover:bg-green-100'
                      }`}
                    >
                      📜 Copyright Registered - {project.copyright.number} ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Projects */}
        <div className="mt-14">
          <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
            <span className="text-primary flex items-center gap-3">
              <span className="w-[30px] h-px bg-primary inline-block" />
              Side Builds
            </span>
          </div>
          <h2 className="reveal mt-2 mb-8 font-bold text-foreground leading-tight" style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>
            Personal{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-text)' }}>Projects</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* ShopPOS */}
            <div className={`reveal rounded-2xl border p-6 sm:p-8 text-center transition-all duration-300 ${isDark ? 'bg-card border-border hover:border-accent hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(123,97,255,0.12)]' : 'bg-card border-border hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl'}`}>
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl sm:text-3xl ${isDark ? 'bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/20' : 'bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20'}`}>
                🛒
              </div>
              <h4 className="text-[0.9rem] font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-head)' }}>ShopPOS</h4>
              <p className="text-[0.82rem] text-muted-foreground mb-4 leading-relaxed">Full-stack Point of Sale system for inventory management, billing, and sales tracking. Deployed on Vercel.</p>
              <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                {['React', 'Node.js', 'PostgreSQL', 'Vercel', 'Render', 'Neon'].map((p) => (
                  <span key={p} className={`px-2.5 py-1 rounded-full text-[0.72rem] font-medium ${isDark ? 'bg-primary/10 border border-primary/15 text-primary' : 'bg-primary/5 border border-primary/15 text-primary'}`}>{p}</span>
                ))}
              </div>
              <div className="flex justify-center gap-3">
                <a href="https://github.com/AshmilaAshraf/shop-pos" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[0.72rem] font-semibold tracking-wide uppercase transition-all duration-300 ${isDark ? 'bg-white/5 border border-white/10 text-foreground hover:bg-white/10' : 'bg-muted border border-border text-foreground hover:bg-muted/80'}`}>
                  <GithubIcon /> Code
                </a>
                <a href="https://shop-pos-app.vercel.app/" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[0.72rem] font-semibold tracking-wide uppercase transition-all duration-300 ${isDark ? 'bg-primary/10 border border-primary/20 text-primary hover:bg-primary/15' : 'bg-primary/5 border border-primary/20 text-primary hover:bg-primary/10'}`}>
                  <ExternalIcon /> Live
                </a>
              </div>
            </div>

            {/* Clinic Booking */}
            <div className={`reveal reveal-delay-1 rounded-2xl border p-6 sm:p-8 text-center transition-all duration-300 ${isDark ? 'bg-card border-border hover:border-accent hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(123,97,255,0.12)]' : 'bg-card border-border hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl'}`}>
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl sm:text-3xl ${isDark ? 'bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/20' : 'bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20'}`}>
                🏥
              </div>
              <h4 className="text-[0.9rem] font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-head)' }}>Clinic Booking Website</h4>
              <p className="text-[0.82rem] text-muted-foreground mb-4 leading-relaxed">Appointment booking system for a clinic. Patients fill details, and the system emails the clinic with appointment info.</p>
              <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                {['React', 'Email Integration', 'Vercel'].map((p) => (
                  <span key={p} className={`px-2.5 py-1 rounded-full text-[0.72rem] font-medium ${isDark ? 'bg-primary/10 border border-primary/15 text-primary' : 'bg-primary/5 border border-primary/15 text-primary'}`}>{p}</span>
                ))}
              </div>
              <div className="flex justify-center gap-3">
                <a href="https://github.com/AshmilaAshraf/clinic-site" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[0.72rem] font-semibold tracking-wide uppercase transition-all duration-300 ${isDark ? 'bg-white/5 border border-white/10 text-foreground hover:bg-white/10' : 'bg-muted border border-border text-foreground hover:bg-muted/80'}`}>
                  <GithubIcon /> Code
                </a>
                <a href="https://clinic-site-project.vercel.app/" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[0.72rem] font-semibold tracking-wide uppercase transition-all duration-300 ${isDark ? 'bg-primary/10 border border-primary/20 text-primary hover:bg-primary/15' : 'bg-primary/5 border border-primary/20 text-primary hover:bg-primary/10'}`}>
                  <ExternalIcon /> Live
                </a>
              </div>
            </div>

            {/* More Coming Soon */}
            <a href="https://github.com/AshmilaAshraf" target="_blank" rel="noopener noreferrer" className={`reveal reveal-delay-2 rounded-2xl border-dashed border-2 p-6 sm:p-8 text-center transition-all duration-300 opacity-60 hover:opacity-100 ${isDark ? 'border-border hover:border-accent' : 'border-border hover:border-primary/40'}`}>
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl sm:text-3xl ${isDark ? 'bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/20' : 'bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20'}`}>
                🚀
              </div>
              <h4 className="text-[0.9rem] font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-head)' }}>More Coming Soon...</h4>
              <p className="text-[0.82rem] text-muted-foreground mb-4 leading-relaxed">Building more projects to expand my portfolio. Stay tuned!</p>
              <span className="text-[0.78rem] font-semibold tracking-[1px] uppercase text-accent inline-flex items-center gap-1">View GitHub →</span>
            </a>
          </div>
        </div>

        {/* Academic Project */}
        <div className="mt-14">
          <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
            <span className="text-primary flex items-center gap-3">
              <span className="w-[30px] h-px bg-primary inline-block" />
              Academic
            </span>
          </div>
          <h2 className="reveal mt-2 mb-4 text-[1.3rem] font-bold text-foreground" style={{ fontFamily: 'var(--font-head)' }}>
            B.Tech Project{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-text)' }}>- SignQuiz</span>
          </h2>
          <div className={`reveal p-5 sm:p-6 rounded-xl border ${isDark ? 'bg-card border-border' : 'bg-card border-border shadow-sm'}`}>
            <p className="text-[0.85rem] sm:text-[0.88rem] text-foreground/80 leading-[1.8]">
              Python and Django-based quiz web application for learning Indian Sign Language fingerspelled signs using CNN for image classification. Implemented webcam-based image capture with OpenCV and trained a CNN model using TensorFlow/Keras.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {['Python', 'Django', 'TensorFlow', 'Keras', 'OpenCV', 'CNN'].map((p) => (
                <span key={p} className={`px-2.5 py-1 rounded-full text-[0.72rem] font-medium ${isDark ? 'bg-primary/10 border border-primary/15 text-primary' : 'bg-primary/5 border border-primary/15 text-primary'}`}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default Projects;
