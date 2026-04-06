import { useTheme } from '@/contexts/ThemeContext';

interface Props {
  idPrefix?: string;
}

const HeroLogoSvg = ({ idPrefix = 'hero' }: Props) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const cyan = isDark ? '#00f5ff' : '#4f46e5';
  const magenta = isDark ? '#ff006e' : '#f97316';
  const purple = isDark ? '#7b61ff' : '#7c3aed';
  const lime = isDark ? '#a3ff12' : '#22c55e';
  const bg = isDark ? '#0c1020' : '#ffffff';
  const dimText = isDark ? '#6b7394' : '#94a3b8';

  const gId = `${idPrefix}Grad`;
  const bId = `${idPrefix}Border`;
  const cId = `${idPrefix}Clip`;
  const g2Id = `${idPrefix}Grad2`;

  return (
    <>
      {/* Front face */}
      <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}>
        <svg className="hero-logo-svg w-full h-full" style={{ filter: `drop-shadow(0 0 20px ${cyan}22)` }} viewBox="0 0 260 260" fill="none">
          <defs>
            <linearGradient id={gId} x1="0" y1="0" x2="1" y2="1">
              <stop className="grad-stop-1" offset="0%" stopColor={cyan} />
              <stop offset="50%" stopColor={purple} />
              <stop className="grad-stop-2" offset="100%" stopColor={magenta} />
            </linearGradient>
            <linearGradient id={bId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={cyan} />
              <stop offset="50%" stopColor={purple} />
              <stop offset="100%" stopColor={magenta} />
            </linearGradient>
            <clipPath id={cId}><rect x="16" y="16" width="228" height="228" rx="36" /></clipPath>
          </defs>
          <rect x="16" y="16" width="228" height="228" rx="36" fill={bg} />
          <rect x="16" y="16" width="228" height="228" rx="36" fill="none" stroke={`url(#${bId})`} strokeWidth="2" strokeDasharray="600" style={{ animation: 'borderDraw 2s ease-out forwards' }} />
          <g clipPath={`url(#${cId})`}>
            <rect x="16" y="16" width="228" height="4" fill={`url(#${gId})`} opacity=".08" style={{ animation: 'scanLine 3s 2.5s linear infinite' }} />
          </g>
          {/* Particles */}
          <circle cx="50" cy="60" r="1.5" fill={cyan} opacity="0" style={{ '--dx': '20px', '--dy': '-30px', animation: 'particleDrift 3s ease-out infinite 0s' } as any} />
          <circle cx="210" cy="80" r="1" fill={magenta} opacity="0" style={{ '--dx': '-15px', '--dy': '-25px', animation: 'particleDrift 3s ease-out infinite 1s' } as any} />
          <circle cx="70" cy="200" r="1.2" fill={purple} opacity="0" style={{ '--dx': '25px', '--dy': '-20px', animation: 'particleDrift 3s ease-out infinite 2s' } as any} />
          <circle cx="190" cy="190" r="1" fill={lime} opacity="0" style={{ '--dx': '-20px', '--dy': '-35px', animation: 'particleDrift 3s ease-out infinite 0.5s' } as any} />
          <circle cx="130" cy="50" r="1.3" fill={cyan} opacity="0" style={{ '--dx': '10px', '--dy': '20px', animation: 'particleDrift 3s ease-out infinite 1.5s' } as any} />
          {/* Terminal header */}
          <text x="50" y="72" fontFamily="'JetBrains Mono',monospace" fontSize="20" fill={lime} opacity=".8" style={{ animation: 'fadeSlideUp .8s .3s both' }}>$ run</text>
          <line x1="50" y1="88" x2="210" y2="88" stroke={dimText} strokeWidth=".5" strokeDasharray="4 3" opacity=".5" style={{ animation: 'fadeSlideUp .6s .6s both' }} />
          {/* Brackets + Monogram */}
          <text x="42" y="142" fontFamily="'JetBrains Mono',monospace" fontSize="40" fontWeight="700" fill={cyan} opacity=".55" style={{ animation: 'bracketLeft .7s .9s both' }}>&lt;</text>
          <text x="130" y="148" textAnchor="middle" fontFamily="monospace" fontSize="72" fontWeight="900" fill={`url(#${gId})`} letterSpacing="-5" style={{ animation: 'fadeSlideUp .8s 1s both' }}>AA</text>
          <text x="182" y="142" fontFamily="'JetBrains Mono',monospace" fontSize="40" fontWeight="700" fill={magenta} opacity=".55" style={{ animation: 'bracketRight .7s .9s both' }}>/&gt;</text>
          {/* Cursor */}
          <rect x="128" y="160" width="3" height="22" rx="1.5" fill={cyan} opacity=".7" style={{ animation: 'typeCursor 1s step-end infinite' }} />
          {/* Role text */}
          <text x="130" y="198" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontSize="14" fill={purple} opacity=".8" style={{ animation: 'fadeSlideUp .6s 1.4s both' }}>software.engineer</text>
          <text x="130" y="222" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontSize="13" fill={dimText} style={{ animation: 'fadeSlideUp .5s 1.7s both' }}>.dev</text>
        </svg>
      </div>

      {/* Back face */}
      <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
        <svg className="hero-logo-svg w-full h-full" viewBox="0 0 260 260" fill="none">
          <defs>
            <linearGradient id={g2Id} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={magenta} />
              <stop offset="50%" stopColor={purple} />
              <stop offset="100%" stopColor={cyan} />
            </linearGradient>
          </defs>
          <rect x="16" y="16" width="228" height="228" rx="36" fill={bg} />
          <rect x="16" y="16" width="228" height="228" rx="36" fill="none" stroke={`url(#${g2Id})`} strokeWidth="2" />
          <text x="130" y="110" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontSize="14" fill={lime} opacity=".7">{'const dev = {'}</text>
          <text x="130" y="140" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontSize="13" fill={cyan} opacity=".8">{'  name: "Ashmila",'}</text>
          <text x="130" y="165" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontSize="13" fill={magenta} opacity=".8">{'  role: "Full-Stack",'}</text>
          <text x="130" y="190" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontSize="13" fill={purple} opacity=".8">{'  focus: "Frontend"'}</text>
          <text x="130" y="215" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontSize="14" fill={lime} opacity=".7">{'};'}</text>
        </svg>
      </div>
    </>
  );
};

export default HeroLogoSvg;
