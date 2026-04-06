import { useTheme } from '@/contexts/ThemeContext';

const interests = [
  { emoji: '🎵', label: 'Music' },
  { emoji: '💻', label: 'Building Applications' },
  { emoji: '📚', label: 'Reading' },
  { emoji: '⚡', label: 'Coding Challenges' },
  { emoji: '🥊', label: 'Boxing' },
  { emoji: '🧘', label: 'Breathing Exercises' },
  { emoji: '🏃', label: 'Jogging' },
  { emoji: '🎨', label: 'Wall Painting' },
  { emoji: '🎬', label: 'Watching Movies' },
  // { emoji: '✍️', label: 'Writing (Medium)', link: 'https://medium.com/@ashmilaashrafofficial' },
];

const Interests = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="interests" className="relative z-[1] py-14 sm:py-24 px-4 sm:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
          <span className="text-primary flex items-center gap-3">
            <span className="w-[30px] h-px bg-primary inline-block" />
            Beyond Code
          </span>
        </div>
        <h2 className="reveal mt-2 mb-8 sm:mb-10 font-bold text-foreground leading-tight" style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>
          Interests &{' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-text)' }}>Hobbies</span>
        </h2>

        <div className="reveal flex flex-wrap gap-3 sm:gap-4">
          {interests.map((item) => {
            const inner = (
              <>
                <span className="text-lg">{item.emoji}</span>
                {item.label}
              </>
            );
            const classes = `flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[0.82rem] sm:text-[0.85rem] text-foreground/80 transition-all duration-300 cursor-default hover:scale-[1.03] ${
              isDark
                ? 'bg-card border border-border hover:border-accent hover:bg-accent/5'
                : 'bg-card border border-border hover:border-primary/40 hover:bg-primary/5'
            }`;

            // return item.link ? (
            //   <a key={item.label} href={item.link} target="_blank" rel="noopener noreferrer" className={classes}>
            //     {inner}
            //   </a>
            // ) : (
            //   <div key={item.label} className={classes}>
            //     {inner}
            //   </div>
            // );
            return  (
              <div key={item.label} className={classes}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Interests;
