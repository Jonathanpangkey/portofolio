"use client";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled || isMenuOpen
            ? "bg-black/80 backdrop-blur-md py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-6"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center font-bold text-white text-lg sm:text-xl shadow-lg transition-transform group-hover:scale-110">
                JP
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-accent to-primary rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity" />
            </div>
            <span className="text-white font-bold text-lg sm:text-xl hidden sm:block">
              Jonathan Pangkey
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  relative text-white/80
                  hover:text-accent
                  transition-colors duration-200
                  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5
                  after:bg-accent after:transition-all after:duration-300 after:transform after:-translate-x-1/2
                  hover:after:w-full
                  py-2
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile: Name + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <span className="text-white font-semibold text-sm sm:hidden">
              Jonathan Pangkey
            </span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
            >
              {/* Hamburger lines with animated transform */}
              <span
                className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center
                  ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300
                  ${isMenuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center
                  ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay Menu */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          flex flex-col justify-center items-center
          bg-black/95 backdrop-blur-xl
          transition-all duration-500 ease-in-out
          ${isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Decorative gradient blob */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl pointer-events-none" />

        <nav className="relative flex flex-col items-center gap-2 w-full px-8">
          {menuItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                transitionDelay: isMenuOpen ? `${index * 60 + 100}ms` : "0ms",
              }}
              className={`
                group w-full max-w-xs text-center
                py-4 px-6 rounded-xl
                text-2xl font-bold tracking-wide
                text-white/70 hover:text-white
                hover:bg-white/5
                border border-transparent hover:border-white/10
                transition-all duration-300
                ${isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                }
              `}
            >
              <span className="text-accent/60 text-sm font-mono mr-2 group-hover:text-accent transition-colors">
                0{index + 1}.
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bottom brand */}
        <div
          style={{ transitionDelay: isMenuOpen ? "420ms" : "0ms" }}
          className={`
            absolute bottom-10 text-white/20 text-xs tracking-widest uppercase font-mono
            transition-all duration-300
            ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Jonathan Pangkey — Portfolio
        </div>
      </div>
    </>
  );
};