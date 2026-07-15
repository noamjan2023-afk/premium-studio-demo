import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '15+', label: 'שנות ניסיון' },
  { value: '24/7', label: 'שירות חירום' },
  { value: '100%', label: 'אחריות מלאה' },
  { value: '5K+', label: 'לקוחות מרוצים' },
];

export default function Trust() {
  const sectionRef = useRef();
  const statsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      statsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 w-full z-10 relative bg-obsidian/90 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center mb-24">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={el => statsRef.current[i] = el}
              className="flex flex-col items-center justify-center space-y-2 p-6"
            >
              <h4 className="text-5xl md:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500">
                {stat.value}
              </h4>
              <p className="text-sm md:text-base font-light text-neutral-400 uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Google Reviews Call to Action */}
        <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 backdrop-blur-md relative overflow-hidden">
          {/* Subtle glow effect in the background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 blur-[100px] pointer-events-none rounded-full"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2 rtl:space-x-reverse">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 md:w-10 md:h-10 text-yellow-500 fill-current drop-shadow-md" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              לקוחות ממליצים על אלכס ידי זהב
            </h3>

            <p className="text-neutral-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              השירות שלנו מדבר בעד עצמו. נשמח מאוד אם תקדישו דקה מזמנכם לדרג את השירות שקיבלתם ולשתף את החוויה שלכם בגוגל!
            </p>

            <div className="flex justify-center">
              <a
                href="YOUR_DIRECT_WRITE_REVIEW_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 rtl:space-x-reverse bg-white text-obsidian px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-neutral-100 hover:shadow-xl hover:shadow-white/20"
              >
                <span>כתבו ביקורת בגוגל</span>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
