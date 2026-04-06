import { useState, useEffect, useCallback } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useActiveSection } from '@/hooks/useActiveSection';
import { Sun, Moon, X } from 'lucide-react';
import { NavLogoSvg } from './NavLogoSvg';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Testimonials', href: '#recommendations' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 border-b border-border backdrop-blur-[20px] ${
          theme === 'dark' ? 'bg-[rgba(6,8,15,0.85)]' : 'bg-[rgba(255,255,255,0.85)]'
        } ${scrolled ? (theme === 'dark' ? 'shadow-[0_4px_30px_rgba(0,245,255,0.08)]' : 'shadow-lg') : ''}`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center" onClick={closeMenu}>
            <NavLogoSvg />
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-[0.82rem] tracking-[1px] uppercase font-medium relative py-1 transition-all duration-300 
                    ${activeSection === item.href.slice(1)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
                      activeSection === item.href.slice(1) ? 'w-full' : 'w-0'
                    }`}
                    style={theme === 'dark' ? { boxShadow: '0 0 8px hsl(var(--primary))' } : {}}
                  />
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Ashmila_Ashraf_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-[0.78rem] font-semibold border border-primary text-primary hover:bg-primary/10 transition-all"
              >
                Resume ↓
              </a>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-primary" /> : <Moon className="w-4 h-4 text-primary" />}
              </button>
            </li>
          </ul>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2 relative z-[1010]">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-primary" /> : <Moon className="w-4 h-4 text-primary" />}
            </button>
            <button
              className="flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer relative"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className={`block w-6 h-[2px] bg-primary rounded transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-6 h-[2px] bg-primary rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-6 h-[2px] bg-primary rounded transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[1005] flex flex-col transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        } ${
          theme === 'dark'
            ? 'bg-[#06080f]'
            : 'bg-white'
        }`}
      >
        {/* Overlay header with close button */}
        <div className="flex items-center justify-between px-4 sm:px-8 h-16 shrink-0 border-b border-border">
          <a href="#hero" className="flex items-center" onClick={closeMenu}>
            <NavLogoSvg />
          </a>
          <button
            onClick={closeMenu}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-primary" />
          </button>
        </div>

        {/* Scrollable nav content */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center gap-5 px-6 py-8">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`text-lg tracking-[2px] uppercase font-medium transition-all duration-300 ${
                activeSection === item.href.slice(1) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: menuOpen ? 1 : 0,
                transition: `all 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.06}s`,
              }}
            >
              {item.label}
            </a>
          ))}

          <div
            className="mt-4 flex flex-col items-center gap-4"
            style={{
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: menuOpen ? 1 : 0,
              transition: `all 0.4s cubic-bezier(0.16,1,0.3,1) ${navItems.length * 0.06}s`,
            }}
          >
            <a
              href="/Ashmila_Ashraf_Resume.pdf"
              download
              onClick={closeMenu}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold border border-primary text-primary hover:bg-primary/10 transition-all"
            >
              Resume ↓
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
