import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-obsidian/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-accent/5' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Call Now Button (Left side for RTL layout) */}
        <a 
          href="tel:052-6410042"
          className="flex items-center gap-2 px-5 py-2.5 bg-accent/10 border border-accent text-accent rounded-full font-bold transition-all hover:bg-accent hover:text-obsidian hover:shadow-lg hover:shadow-accent/20"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="tracking-wider">052-6410042</span>
        </a>

        {/* Logo / Brand Name (Right side for RTL) */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center shadow-lg shadow-accent/20">
            <svg className="w-6 h-6 text-obsidian" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="flex flex-col text-right hidden sm:flex">
            <span className="font-display font-black text-xl leading-none tracking-tight text-white">אלכס ידי זהב</span>
            <span className="text-xs font-light text-accent tracking-[0.2em] uppercase">אינסטלטור 24/7</span>
          </div>
        </div>
        
      </div>
    </nav>
  );
}
