import { useTheme } from '@/contexts/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className="relative z-[1] py-14 sm:py-24 px-4 sm:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
          <span className="text-primary flex items-center gap-3">
            <span className="w-[30px] h-px bg-primary inline-block" />
            About Me
          </span>
        </div>
        {/* <h2 className="reveal mt-2 mb-8 sm:mb-10 font-bold text-foreground leading-tight" style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>
          Built for{' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-text)' }}>National Impact</span>
        </h2> */}
        <h2 className="reveal mt-2 mb-8 sm:mb-10 font-bold text-foreground leading-tight" style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>
          From Concept to Deployment - {' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-text)' }}>End to End Developer</span>
        </h2>
        {/* <h2 className="reveal mt-2 mb-8 sm:mb-10 font-bold text-foreground leading-tight" style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>
          Engineering Impactful{' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-text)' }}>Web Experiences</span>
        </h2> */}
        {/* <h2 className="reveal mt-2 mb-8 sm:mb-10 font-bold text-foreground leading-tight" style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>
          Ready to Build{' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-text)' }}>The Next Big Thing</span>
        </h2> */}
         

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="reveal">
            <p className="text-[0.9rem] sm:text-[0.95rem] leading-[1.9] text-foreground/80">
              I'm a Full-Stack Developer who spent <strong className="text-primary">2.5+ years at C-DAC</strong> independently designing, developing, and deploying secure web applications for the <span className="text-foreground font-semibold">Emergency Response Support System (ERSS 112)</span> - India's national emergency helpline.
              <br /><br />
              My work spanned the entire stack - from crafting responsive React UIs and building secure REST APIs, to configuring Keycloak authentication, setting up Syslog-ng logging pipelines, and deploying on RHEL servers across multiple states. I also contributed to application security through OWASP-aligned vulnerability assessments using Burp Suite, Snyk, and Postman.
              <br /><br />
              I hold a <span className="text-foreground font-semibold">B.Tech in Computer Science</span> from Malabar Institute of Technology (CGPA: 8.79). Now seeking my next challenge - primarily in frontend or full-stack development - where I can bring my end-to-end engineering mindset to building products that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { label: 'Name', value: 'Ashmila Ashraf' },
              { label: 'Location', value: '📍 Kannur, Kerala, India' },
              { label: 'Email', value: 'ashmilaashrafofficial@gmail.com', link: 'mailto:ashmilaashrafofficial@gmail.com' },
              { label: 'Phone', value: '+91 907 428 3539' },
              { label: 'Languages', value: 'English, Malayalam' },
              { label: 'Status', value: '✦ Actively seeking roles', isStatus: true },
            ].map((item, idx) => (
              <div
                key={item.label}
                className={`reveal ${idx % 2 === 0 ? 'reveal-delay-1' : 'reveal-delay-2'} p-4 sm:p-5 rounded-xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-card border-border hover:border-primary hover:shadow-[0_0_20px_rgba(0,245,255,0.08)]'
                    : 'bg-card border-border hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                <div className="text-[0.7rem] uppercase tracking-[2px] text-muted-foreground mb-1">{item.label}</div>
                {item.link ? (
                  <a href={item.link} className="text-[0.85rem] sm:text-[0.9rem] text-primary font-medium break-all">{item.value}</a>
                ) : (
                  <div className={`text-[0.85rem] sm:text-[0.9rem] font-medium ${item.isStatus ? 'text-[hsl(var(--lime))]' : 'text-foreground'}`}>
                    {item.value}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
