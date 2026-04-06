import { useTheme } from '@/contexts/ThemeContext';

const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const highlights = [
    'Remediated critical vulnerabilities post-audit: authentication, encryption, session management, rate limiting, XSS/SQL injection prevention',
    'Implemented Keycloak SSO, RSA/AES encryption, HttpOnly cookies, RBAC, API-key authentication',
    'Built RESTful APIs, real-time updates, and geospatial mapping with React Leaflet',
    'Configured NGINX, WildFly, Syslog-ng centralized logging on RHEL 9.4',
    'Performed security testing using Burp Suite, Snyk (SAST/SCA), Postman per OWASP WSTG',
  ];

  return (
    <section id="experience" className="relative z-[1] py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
          <span className="text-primary flex items-center gap-3">
            <span className="w-[30px] h-px bg-primary inline-block" />
            Career
          </span>
        </div>
        <h2 className="reveal mt-2 mb-10 font-bold text-foreground leading-tight" style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>
          Work{' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-text)' }}>Experience</span>
        </h2>

        {/* Timeline */}
        <div className="reveal relative pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ background: isDark ? 'linear-gradient(to bottom, #00f5ff, #7b61ff, #ff006e)' : 'linear-gradient(to bottom, #4f46e5, #7c3aed, #f97316)' }} />
          <div className="relative pb-10">
            <div
              className="absolute -left-8 top-[0.35rem] w-3 h-3 rounded-full border-2 border-primary bg-background"
              style={{
                transform: 'translateX(-5px)',
                boxShadow: isDark ? '0 0 12px hsl(var(--primary))' : '0 0 8px hsl(var(--primary) / 0.4)',
              }}
            />
            <div className="text-[0.78rem] text-primary mb-1" style={{ fontFamily: 'var(--font-mono)' }}>Jun 2023 - Feb 2026</div>
            <h3 className="text-base font-bold text-foreground mb-1" style={{ fontFamily: 'var(--font-head)' }}>Project Engineer (Full-Stack Developer)</h3>
            <div className="text-[0.88rem] text-muted-foreground mb-2">Centre for Development of Advanced Computing (C-DAC), Thiruvananthapuram</div>
            <p className="text-[0.88rem] leading-[1.8] text-foreground/80">
              Independently architected, developed, and deployed full-stack web applications for ERSS 1.0 and ERSS 2.0 - India's national emergency response support system, managing complete lifecycle from requirements to production deployment across multiple Indian states.
            </p>
            <ul className="mt-3 space-y-1.5">
              {highlights.map((h, i) => (
                <li key={i} className="pl-5 relative text-[0.85rem] text-foreground/80">
                  <span className="absolute left-0 text-primary">▹</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mt-12">
          <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
            <span className="text-primary flex items-center gap-3">
              <span className="w-[30px] h-px bg-primary inline-block" />
              Education
            </span>
          </div>
          <div
            className={`reveal mt-4 p-8 rounded-2xl border flex flex-col sm:flex-row items-center sm:items-start gap-8 transition-all ${
              isDark ? 'bg-card border-border' : 'bg-card border-border shadow-sm'
            }`}
          >
            <div
              className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{
                background: isDark ? 'rgba(123,97,255,0.1)' : 'rgba(124,58,237,0.1)',
                border: `1px solid ${isDark ? 'rgba(123,97,255,0.2)' : 'rgba(124,58,237,0.2)'}`,
              }}
            >
              🎓
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-[0.95rem] font-bold text-foreground mb-1" style={{ fontFamily: 'var(--font-head)' }}>
                B.Tech in Computer Science & Engineering
              </h3>
              <div className="text-[0.85rem] text-primary mb-1">Malabar Institute of Technology - APJ Abdul Kalam Technological University</div>
              <div className="text-[0.8rem] text-muted-foreground">2016 - 2020</div>
              <div className="inline-flex items-center gap-1 mt-2 px-2.5 py-1 rounded text-[0.78rem] font-semibold bg-primary/10 text-primary">
                CGPA: 8.79
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
