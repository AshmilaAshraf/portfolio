import { useTheme } from '@/contexts/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const cards = [
    { icon: '📧', label: 'Email', value: 'ashmilaashrafofficial@gmail.com', href: 'mailto:ashmilaashrafofficial@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+91 907 428 3539', href: 'tel:+919074283539' },
    { icon: '📍', label: 'Location', value: 'Kannur, Kerala, India' },
  ];

  return (
    <section
      id="contact"
      className="relative z-[1] py-14 sm:py-24 px-4 sm:px-8"
      style={{ background: isDark ? 'linear-gradient(to bottom, hsl(228 78% 3%), #0a0f1e)' : undefined }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
          <span className="text-primary flex items-center gap-3">
            <span className="w-[30px] h-px bg-primary inline-block" />
            Get in Touch
          </span>
        </div>
        <h2 className="reveal mt-2 mb-8 sm:mb-10 font-bold text-foreground leading-tight" style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>
          Let's{' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-text)' }}>Connect</span>
        </h2>

        <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card) => {
            const Comp = card.href ? 'a' : 'div';
            return (
              <Comp
                key={card.label}
                {...(card.href ? { href: card.href } : {})}
                className={`p-5 sm:p-6 rounded-xl border text-center transition-all duration-300 no-underline ${
                  isDark
                    ? 'bg-card border-border hover:border-primary hover:shadow-[0_0_20px_rgba(0,245,255,0.08)]'
                    : 'bg-card border-border hover:border-primary/40 hover:shadow-lg'
                }`}
              >
                <div className="text-2xl mb-3">{card.icon}</div>
                <div className="text-[0.72rem] uppercase tracking-[2px] text-muted-foreground mb-1">{card.label}</div>
                <div className="text-[0.85rem] sm:text-[0.9rem] text-foreground font-medium break-all">{card.value}</div>
              </Comp>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
