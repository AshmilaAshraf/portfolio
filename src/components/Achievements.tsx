import { useTheme } from '@/contexts/ThemeContext';

const Achievements = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="achievements" className="relative z-[1] py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
          <span className="text-primary flex items-center gap-3">
            <span className="w-[30px] h-px bg-primary inline-block" />
            Recognition
          </span>
        </div>
        <h2 className="reveal mt-2 mb-10 font-bold text-foreground leading-tight" style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-text)' }}>Achievements</span>
        </h2>

        <div
          className={`reveal flex flex-col sm:flex-row items-center sm:items-start gap-8 p-8 rounded-2xl border relative overflow-hidden ${
            isDark
              ? 'bg-card border-[rgba(163,255,18,0.2)]'
              : 'bg-card border-green-200 shadow-sm'
          }`}
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full" style={{ background: isDark ? 'rgba(163,255,18,0.04)' : 'rgba(34,197,94,0.05)' }} />
          <div
            className="shrink-0 w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-3xl"
            style={{
              background: isDark ? 'rgba(163,255,18,0.1)' : 'rgba(34,197,94,0.1)',
              border: `1px solid ${isDark ? 'rgba(163,255,18,0.2)' : 'rgba(34,197,94,0.2)'}`,
            }}
          >
            📜
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-base font-bold mb-1" style={{ fontFamily: 'var(--font-head)', color: isDark ? '#a3ff12' : '#16a34a' }}>
              Copyright Registration - Indian Copyright Act, 1957
            </h3>
            <p className="text-[0.88rem] text-foreground/80 leading-[1.7]">
              ERSS Scenario Replay web application - a comprehensive timeline visualization platform for India's national emergency response system - was officially registered under copyright, recognizing the originality and significance of the work.
            </p>
            <div className="text-[0.78rem] text-muted-foreground mt-1" style={{ fontFamily: 'var(--font-mono)' }}>
              Certificate No. SW-2025020784
            </div>
            <a
              href="https://drive.google.com/file/d/1HE7HDdAWTSLkyYdg7-ZJ9nRb9csRrjXE/view"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 mt-2 text-[0.78rem] font-semibold transition-colors ${
                isDark ? 'text-[#a3ff12] hover:text-primary' : 'text-green-600 hover:text-primary'
              }`}
            >
              View Certificate ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
