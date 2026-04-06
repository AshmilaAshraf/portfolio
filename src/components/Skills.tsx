import { useTheme } from '@/contexts/ThemeContext';

interface SkillItem {
  name: string;
  icon?: string; // devicon class
  svg?: JSX.Element;
}

interface SkillCategory {
  title: string;
  items: SkillItem[];
}

const categories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      // { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React.js (v17-19)', icon: 'devicon-react-original colored' },
      { name: 'Vite', icon: 'devicon-vitejs-plain colored' },
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
      { name: 'Material-UI', icon: 'devicon-materialui-plain colored' },
      { name: 'React Redux', icon: 'devicon-redux-original colored' },
      { name: 'React Chrono', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4m-7.07-15.07l2.83 2.83m8.49 8.49l2.83 2.83M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.49 8.49l2.83 2.83"/></svg> },
      { name: 'React Leaflet', icon: 'devicon-leaflet-plain colored' },
      { name: 'React Bootstrap', icon: 'devicon-bootstrap-plain colored' },
      { name: 'Shadcn UI', svg: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5"/><rect x="7" y="7" width="4" height="4" rx="1" fill="currentColor"/><rect x="13" y="13" width="4" height="4" rx="1" fill="currentColor" opacity=".6"/></svg> },
      { name: 'Radix UI', svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" fill="currentColor" opacity=".4"/></svg> },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
      { name: 'RESTful APIs', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="1.5" fill="currentColor"/><circle cx="16" cy="12" r="1.5" fill="currentColor"/><circle cx="10" cy="18" r="1.5" fill="currentColor"/></svg> },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    ],
  },
  {
    title: 'Security & Testing',
    items: [
      { name: 'Keycloak SSO', svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7L12 2z" stroke="currentColor" strokeWidth="1.5"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/></svg> },
      { name: 'AES / RSA Encryption', svg: <svg viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 11V7a4 4 0 118 0v4" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="16" r="1.5" fill="currentColor"/></svg> },
      { name: 'Burp Suite', svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> },
      { name: 'Snyk (SAST/SCA)', svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.5"/><path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2"/></svg> },
      { name: 'Postman', icon: 'devicon-postman-plain colored' },
      { name: 'Bandit', svg: <svg viewBox="0 0 24 24" fill="none"><path d="M3 3l18 18M21 3L3 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/></svg> },
      { name: 'OWASP WSTG', svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7L12 2z" stroke="currentColor" strokeWidth="1.5"/><text x="12" y="16" textAnchor="middle" fontSize="7" fill="currentColor" fontWeight="bold">10</text></svg> },
      { name: 'HttpOnly Cookies', svg: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="8" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="14" r="2" fill="currentColor"/><path d="M7 8V6a5 5 0 0110 0v2" stroke="currentColor" strokeWidth="1.5"/></svg> },
      { name: 'RBAC', svg: <svg viewBox="0 0 24 24" fill="none"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5"/><circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M20 8v6m3-3h-6" stroke="currentColor" strokeWidth="2"/></svg> },
    ],
  },
  {
    title: 'DevOps & Infrastructure',
    items: [
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'NGINX', icon: 'devicon-nginx-original colored' },
      { name: 'WildFly', svg: <svg viewBox="0 0 24 24" fill="none"><path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.5" rx="2"/><path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5"/></svg> },
      { name: 'RHEL 9.4', icon: 'devicon-redhat-plain colored' },
      { name: 'Syslog-ng', svg: <svg viewBox="0 0 24 24" fill="none"><path d="M4 12h16" stroke="currentColor" strokeWidth="1.5"/><path d="M4 6h10" stroke="currentColor" strokeWidth="1.5"/><path d="M4 18h12" stroke="currentColor" strokeWidth="1.5"/><circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="20" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/></svg> },
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
      { name: 'PgAdmin', svg: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/></svg> },
      // { name: 'Shell Scripting', icon: 'devicon-bash-plain' },
    ],
  },
  {
    title: 'AI Tools',
    items: [
      { name: 'Claude AI', svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.5"/><path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/></svg> },
      { name: 'v0 by Vercel', svg: <svg viewBox="0 0 24 24" fill="none"><polygon points="12,2 22,22 2,22" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg> },
      { name: 'ChatGPT', svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M12 7v5l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
      { name: 'Gemini', svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-6.5 4.5 2-7L2 9h7l3-7z" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg> },
      { name: 'DeepSeek', svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M8 12h8" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8" stroke="currentColor" strokeWidth="2"/></svg> },
      { name: 'Grok', svg: <svg viewBox="0 0 24 24" fill="none"><path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg> },
      // {name: 'Anti-gravity', svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M8 12h8" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8" stroke="currentColor" strokeWidth="2"/></svg> },
    ],
  },
];

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="skills" className="relative z-[1] py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
          <span className="text-primary flex items-center gap-3">
            <span className="w-[30px] h-px bg-primary inline-block" />
            Tech Arsenal
          </span>
        </div>
        <h2 className="reveal mt-2 mb-10 font-bold text-foreground leading-tight" style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>
          Skills &{' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-text)' }}>Technologies</span>
        </h2>

        {categories.map((cat) => (
          <div key={cat.title} className="reveal mb-10">
            <div className="text-[0.8rem] tracking-[2px] uppercase text-muted-foreground pb-2 border-b border-border mb-4" style={{ fontFamily: 'var(--font-head)' }}>
              {cat.title}
            </div>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-[10px] text-[0.85rem] font-medium text-foreground transition-all duration-300 cursor-default relative overflow-hidden hover:-translate-y-0.5 ${
                    isDark
                      ? 'bg-gradient-to-br from-card to-[rgba(20,26,52,0.95)] border border-primary/12 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-primary hover:shadow-[0_4px_20px_rgba(0,245,255,0.12)]'
                      : 'bg-card border border-border shadow-sm hover:border-primary/40 hover:shadow-md'
                  }`}
                >
                  {item.icon ? (
                    <i className={`${item.icon} text-xl`} />
                  ) : item.svg ? (
                    <span className="w-[22px] h-[22px] flex items-center justify-center shrink-0 text-primary">{item.svg}</span>
                  ) : null}
                  <span className="relative z-[1]">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
