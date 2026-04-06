import { useTheme } from '@/contexts/ThemeContext';

const profiles = [
  {
    name: 'LinkedIn',
    user: 'ashmila-ashraf',
    url: 'https://www.linkedin.com/in/ashmila-ashraf/',
    color: '#0a66c2',
    svg: <svg viewBox="0 0 24 24" fill="#0a66c2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    name: 'GitHub',
    user: 'AshmilaAshraf',
    url: 'https://github.com/AshmilaAshraf',
    color: '#ffffff',
    svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
  },
  {
    name: 'LeetCode',
    user: 'ashmila_ashraf',
    url: 'https://leetcode.com/u/ashmila_ashraf/',
    color: '#ffa116',
    svg: <svg viewBox="0 0 24 24" fill="#ffa116"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>,
  },
  {
    name: 'HackerRank',
    user: 'ashmilaashrafof1',
    url: 'https://www.hackerrank.com/profile/ashmilaashrafof1',
    color: '#00d082',
    svg: <svg viewBox="0 0 24 24" fill="#00d082"><path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V7.057c0-.143-.117-.258-.258-.258h-1.2c-.141 0-.258.115-.258.258v9.886c0 .143.117.258.258.258h1.2c.141 0 .258-.115.258-.258v-3.875h4.074v3.875c0 .143.117.258.258.258h1.2c.141 0 .258-.115.258-.258V7.057c0-.143-.117-.258-.258-.258z"/></svg>,
  },
  {
    name: 'HackerEarth',
    user: 'ashmilaashrafofficial',
    url: 'https://www.hackerearth.com/@ashmilaashrafofficial/',
    color: '#6e7dff',
    svg: <svg viewBox="0 0 24 24" fill="#6e7dff"><path d="M18.477 23.833H5.523a1.69 1.69 0 01-1.69-1.69V1.857A1.69 1.69 0 015.523.167h12.954a1.69 1.69 0 011.69 1.69v20.286a1.69 1.69 0 01-1.69 1.69zM9.81 7.637v8.727h1.335v-3.635h1.7v3.635h1.345V7.637H12.845v3.728h-1.7V7.637z"/></svg>,
  },
  // {
  //   name: 'Medium',
  //   user: '@ashmilaashrafofficial',
  //   url: 'https://medium.com/@ashmilaashrafofficial',
  //   color: '#ffffff',
  //   svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>,
  // },
];

const Profiles = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="profiles" className="relative z-[1] py-14 sm:py-24 px-4 sm:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
          <span className="text-primary flex items-center gap-3">
            <span className="w-[30px] h-px bg-primary inline-block" />
            Find Me
          </span>
        </div>
        <h2 className="reveal mt-2 mb-8 sm:mb-10 font-bold text-foreground leading-tight" style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>
          Online{' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-text)' }}>Profiles</span>
        </h2>

        <div className="reveal grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {profiles.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? 'bg-card border-border hover:border-primary hover:shadow-[0_8px_25px_rgba(0,245,255,0.1)]'
                  : 'bg-card border-border hover:border-primary/40 hover:shadow-lg'
              }`}
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${p.color}15` }}
              >
                <span className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px]">{p.svg}</span>
              </div>
              <div className="text-[0.78rem] sm:text-[0.82rem] font-semibold text-foreground">{p.name}</div>
              <div className="text-[0.65rem] sm:text-[0.72rem] text-muted-foreground text-center break-all">{p.user}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profiles;
