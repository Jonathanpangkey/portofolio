"use client";
import {useState, useEffect} from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {label: "About", href: "#about"},
    {label: "Experience", href: "#experience"},
    {label: "Skills", href: "#skills"},
    {label: "Projects", href: "#projects"},
    {label: "Contact", href: "#contact"},
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled ? "bg-black/60 backdrop-blur-md py-4" : "bg-transparent py-6"}
      `}>
      <div className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
        <a href='#home' className='flex items-center gap-3 group'>
          <div className='relative'>
            <div className='w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg transition-transform group-hover:scale-110'>
              JP
            </div>
            <div className='absolute -inset-1 bg-gradient-to-br from-accent to-primary rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity'></div>
          </div>
          <span className='text-white font-bold text-xl hidden sm:block'>Jonathan Pangkey</span>
        </a>

        <div className='flex items-center gap-8 text-sm font-medium'>
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                relative text-white
                hover:text-accent
                transition-colors duration-200
                after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5
                after:bg-accent after:transition-all after:duration-300 after:transform after:-translate-x-1/2
                hover:after:w-full
                py-2
              ">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
