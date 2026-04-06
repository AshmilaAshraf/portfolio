import { useTheme } from '@/contexts/ThemeContext';

const RECO_URL = 'https://www.linkedin.com/in/ashmila-ashraf/details/recommendations/?detailScreenTabIndex=0';

const recommendations = [
  {
    initials: 'GG',
    name: 'Glenis George',
    role: 'Principal Engineer at CDAC · AppSec Engineer',
    quote: 'It was a pleasure collaborating with Ashmila, and I was truly impressed by her positive attitude, professionalism, and strong sense of responsibility. She is highly responsive, open to feedback, and always willing to go the extra mile...',
  },
  {
    initials: 'PP',
    name: 'Prasanth Prabalan',
    role: 'Scientist E at CDAC',
    quote: 'Ashmila was an integral part of a national level project managed by C-DAC. She was a Full Stack Developer, with expertise in the design, development, and deployment of end-to-end secure web applications...',
  },
  {
    initials: 'AU',
    name: 'Adarsh U',
    role: 'Software Engineer · Full Stack Developer',
    quote: 'I had the opportunity to work with Ashmila at CDAC. She is hardworking, dedicated and works very well within a team. With her positive attitude and commitment, I am confident she has a bright future ahead and will excel in any opportunity she takes on.',
  },
];

const Recommendations = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const truncate = (text: string, limit: number = 200) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit).trim() + '...';
  };

  return (
    <section id="recommendations" className="relative z-[1] py-14 sm:py-24 px-4 sm:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
          <span className="text-primary flex items-center gap-3">
            <span className="w-[30px] h-px bg-primary inline-block" />
            Testimonials
          </span>
        </div>
        <h2 className="reveal mt-2 mb-8 sm:mb-10 font-bold text-foreground leading-tight" style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-text)' }}>Recommendations</span>
        </h2>

        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {recommendations.map((reco) => (
            <div
              key={reco.name}
              className={`p-6 sm:p-8 rounded-2xl border relative transition-all duration-300 flex flex-col ${
                isDark
                  ? 'bg-card border-border hover:border-primary/25 hover:shadow-[0_8px_30px_rgba(0,245,255,0.06)]'
                  : 'bg-card border-border hover:border-primary/25 hover:shadow-lg'
              }`}
            >
              <div className="absolute top-3 right-6 text-5xl text-primary/20 leading-none" style={{ fontFamily: 'var(--font-head)' }}>"</div>
              <blockquote className="text-[0.84rem] sm:text-[0.86rem] text-foreground/80 leading-[1.8] italic mb-4 flex-1">
                {truncate(reco.quote)}
              </blockquote>
              {reco.quote.length > 200 && (
                <a
                  href={RECO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-primary hover:text-secondary transition-colors mb-4"
                >
                  Read full recommendation →
                </a>
              )}
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-[0.75rem] font-bold"
                  style={{
                    background: isDark ? 'linear-gradient(135deg, #00f5ff, #7b61ff)' : 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                    color: isDark ? '#06080f' : '#ffffff',
                  }}
                >
                  {reco.initials}
                </div>
                <div>
                  <div className="text-[0.82rem] font-semibold text-foreground">{reco.name}</div>
                  <div className="text-[0.72rem] text-muted-foreground">{reco.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
