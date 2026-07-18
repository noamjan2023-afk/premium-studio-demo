import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero({ isLoaded }) {
  const h1Ref = useRef();
  const pRef = useRef();
  const ctaRef = useRef();

  useEffect(() => {
    if (isLoaded) {
      const tl = gsap.timeline();
      tl.to('.hero-text', {
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.2
      })
        .fromTo(pRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
          "-=0.8"
        )
        .fromTo(ctaRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
          "-=0.6"
        );
    }
  }, [isLoaded]);

  const scrollToContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden mix-blend-difference z-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col space-y-6">
          <h1 ref={h1Ref} className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase text-white leading-none">
            <span className="block overflow-hidden pb-2"><span className="hero-text block translate-y-full">אלכס</span></span>
            <span className="block overflow-hidden pb-2"><span className="hero-text block translate-y-full text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">ידי זהב</span></span>
            <span className="block overflow-hidden pb-2"><span className="hero-text block translate-y-full">אינסטלציה</span></span>
          </h1>

          <p ref={pRef} className="text-xl md:text-2xl font-medium text-white max-w-md opacity-0 leading-relaxed">
            מחפשים אינסטלטור בראשון לציון? אלכס ידי זהב מציע פתרונות אינסטלציה מתקדמים, שירות חרום 24/7 והגעה אקספרס עד הבית.
          </p>

          {/* New Interactive Call To Action */}
          <div ref={ctaRef} className="opacity-0 pt-4 flex flex-col sm:flex-row gap-4 w-full max-w-lg">
            <button
              onClick={scrollToContact}
              data-magnetic="true"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white font-display font-bold tracking-widest uppercase text-sm rounded-full hover:bg-white hover:text-obsidian transition-all duration-300 shadow-lg hover:shadow-accent/20"
            >
              קבל הצעת מחיר
            </button>
            <a
              href="YOUR_DIRECT_WRITE_REVIEW_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-obsidian font-display font-bold tracking-widest uppercase text-sm rounded-full hover:bg-neutral-200 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <span>כתבו ביקורת</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hidden md:block">
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 animate-bounce">
        <span className="text-sm tracking-[0.3em] uppercase mb-2 font-light">גלול</span>
        <div className="w-[1px] h-12 bg-white/50"></div>
      </div>
    </section>
  );
}