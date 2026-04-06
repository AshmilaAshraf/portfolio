import { useRef, useCallback, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import HeroLogoSvg from "./HeroLogoSvg";

const HeroLogo = ({ size }: { size: string }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current || !innerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    innerRef.current.style.transform = `rotateX(${y * -20}deg) rotateY(${x * 20}deg)`;
  }, []);

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    if (innerRef.current) {
      innerRef.current.style.transform = "";
    }
  }, []);

  const handleClick = useCallback(() => {
    if (!containerRef.current) return;
    const svg = containerRef.current.querySelector(
      ".hero-logo-svg",
    ) as SVGElement;
    if (!svg) return;
    const glitchFrames = [
      "hue-rotate(90deg) saturate(2)",
      "hue-rotate(-90deg) saturate(3)",
      "hue-rotate(180deg) saturate(1.5)",
      "hue-rotate(0deg) drop-shadow(0 0 25px rgba(0,245,255,.4))",
    ];
    let i = 0;
    const glitch = setInterval(() => {
      svg.style.filter = glitchFrames[i];
      i++;
      if (i >= glitchFrames.length) {
        clearInterval(glitch);
        setTimeout(() => {
          svg.style.filter = "";
        }, 150);
      }
    }, 80);

    for (let p = 0; p < 8; p++) {
      const particle = document.createElement("div");
      const angle = (p / 8) * Math.PI * 2;
      const dist = 60 + Math.random() * 40;
      const colors = ["#00f5ff", "#ff006e", "#7b61ff", "#a3ff12"];
      particle.style.cssText = `
        position:absolute;width:4px;height:4px;border-radius:50%;
        background:${colors[p % 4]};top:50%;left:50%;
        pointer-events:none;z-index:10;
        animation:burstParticle .7s ease-out forwards;
        --bx:${Math.cos(angle) * dist}px;--by:${Math.sin(angle) * dist}px;
      `;
      containerRef.current.appendChild(particle);
      setTimeout(() => particle.remove(), 700);
    }
  }, []);

  const id = size === "220px" ? "mobile" : "desktop";

  return (
    <div
      ref={containerRef}
      className={`${size === "220px" ? "w-[180px] h-[180px] sm:w-[220px] sm:h-[220px]" : "w-[280px] h-[280px]"} relative flex items-center justify-center cursor-pointer overflow-visible`}
      style={{ perspective: "800px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        className="absolute inset-[10px] rounded-[28px] z-[-1]"
        style={{
          background: isDark
            ? "linear-gradient(135deg, #00f5ff, #7b61ff, #ff006e)"
            : "linear-gradient(135deg, #4f46e5, #7c3aed, #f97316)",
          filter: "blur(35px)",
          animation: "glowPulse 4s ease-in-out infinite",
        }}
      />
      <div
        ref={innerRef}
        className="w-full h-full relative"
        style={{
          transformStyle: "preserve-3d",
          animation: "logoSpin 12s linear infinite",
          animationPlayState: hovered ? "paused" : "running",
        }}
      >
        <HeroLogoSvg idPrefix={id} />
      </div>
    </div>
  );
};

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden z-[1] px-4 sm:px-8"
    >
      <div className="max-w-[1100px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-16 items-center">
          {/* Logo for mobile */}
          <div className="flex justify-center md:hidden order-first pt-4">
            <HeroLogo size="220px" />
          </div>

          <div className="text-center md:text-left">
            {/* <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.78rem] font-semibold mb-5 ${
                isDark
                  ? "bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.2)] text-primary"
                  : "bg-emerald-100 border border-emerald-400 text-emerald-800"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: isDark ? "hsl(var(--lime))" : "#16a34a",
                  animation: "pulse 2s infinite",
                  boxShadow: isDark
                    ? "0 0 6px hsl(var(--lime))"
                    : "0 0 6px #16a34a",
                }}
              />
              Open to opportunities
            </div> */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.78rem] font-medium mb-6 ${
                isDark
                  ? "bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.2)] text-primary"
                  : "bg-primary/5 border border-primary/20 text-primary"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: isDark ? "hsl(var(--lime))" : "#16a34a",
                  animation: "pulse 2s infinite",
                  boxShadow: "0 0 6px hsl(var(--lime))",
                }}
              />
              Open to opportunities
            </div>
            <h1
              className="font-bold leading-[1.15] mb-3 text-foreground"
              style={{
                fontFamily: "var(--font-head)",
                fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
              }}
            >
              Ashmila
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-text)" }}
              >
                Ashraf
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-2">
              Full-Stack Developer · Frontend Focused
            </p>
            <p className="text-[0.9rem] sm:text-[0.95rem] text-foreground/80 max-w-[560px] mb-6 leading-[1.8] mx-auto md:mx-0">
              2.5+ years building secure web applications for
              India's national emergency response system (ERSS 112). From React
              UIs to backend APIs, infrastructure to deployment - I ship
              end-to-end, with a passion for crafting compelling frontend
              experiences.
            </p>
            <div className="flex gap-3 flex-wrap justify-center md:justify-start">
              <a
                href="/Ashmila_Ashraf_Resume.pdf"
                download
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[0.82rem] font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark
                    ? "bg-gradient-to-r from-primary to-[#00b8d4] text-[#06080f] shadow-[0_4px_20px_rgba(0,245,255,0.25)] hover:shadow-[0_8px_30px_rgba(0,245,255,0.4)]"
                    : "bg-gradient-to-r from-primary to-[hsl(var(--secondary))] text-white shadow-lg hover:shadow-xl"
                }`}
              >
                ⬇ Download Resume
              </a>
              <a
                href="/Experience_Certificate.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[0.82rem] font-semibold border border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                📄 Experience Certificate
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[0.82rem] font-semibold border border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Say Hello →
              </a>
            </div>
          </div>

          {/* Logo for desktop */}
          <div className="hidden md:flex justify-center">
            <HeroLogo size="280px" />
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile to avoid overlap */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground text-[0.72rem] tracking-[2px] uppercase">
        <div
          className="w-px h-10 bg-gradient-to-b from-primary to-transparent"
          style={{ animation: "scrollAnim 2s infinite" }}
        />
        scroll
      </div>
    </section>
  );
};

export default Hero;
