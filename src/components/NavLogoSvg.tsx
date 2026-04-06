import { useTheme } from '@/contexts/ThemeContext';

export const NavLogoSvg = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <svg
      className="h-10 w-10 transition-all duration-400 hover:scale-[1.12] hover:-rotate-3"
      style={{
        filter: isDark
          ? 'drop-shadow(0 0 6px rgba(0,245,255,0.2))'
          : 'drop-shadow(0 0 6px rgba(79,70,229,0.2))',
      }}
      viewBox="0 0 48 48"
      fill="none"
    >
      <defs>
        <linearGradient id="navIG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={isDark ? '#00f5ff' : '#4f46e5'} />
          <stop offset="50%" stopColor={isDark ? '#7b61ff' : '#7c3aed'} />
          <stop offset="100%" stopColor={isDark ? '#ff006e' : '#f97316'} />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill={isDark ? '#0c1020' : '#ffffff'} stroke="url(#navIG)" strokeWidth="1.2" />
      <path d="M12 38L22 12L32 38" fill="none" stroke={isDark ? '#00f5ff' : '#4f46e5'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="16" y1="28" x2="28" y2="28" stroke={isDark ? '#00f5ff' : '#4f46e5'} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 38L30 12L40 38" fill="none" stroke={isDark ? '#ff006e' : '#f97316'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity=".85" />
      <line x1="24" y1="28" x2="36" y2="28" stroke={isDark ? '#ff006e' : '#f97316'} strokeWidth="1.8" strokeLinecap="round" opacity=".85" />
      <rect x="22" y="25" width="8" height="5" rx="2" fill={isDark ? '#7b61ff' : '#7c3aed'} opacity=".12" />
      <circle cx="26" cy="22" r="1.8" fill={isDark ? '#7b61ff' : '#7c3aed'} opacity=".6" />
      <circle cx="26" cy="22" r="3" fill="none" stroke={isDark ? '#7b61ff' : '#7c3aed'} strokeWidth=".5" opacity=".5">
        <animate attributeName="r" values="3;7;3" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values=".5;0;.5" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};
