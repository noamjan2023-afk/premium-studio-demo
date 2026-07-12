import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Showcase() {
  const containerRef = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    let sections = gsap.utils.toArray('.showcase-panel');
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + scrollRef.current.offsetWidth
      }
    });
  }, []);

  return (
    <section ref={containerRef} className="w-full h-screen overflow-hidden bg-obsidian z-10 relative flex items-center">
      <div ref={scrollRef} className="flex h-[70vh] w-[400vw]">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="showcase-panel w-screen h-full flex flex-col justify-center px-12 md:px-32">
            <div className="relative w-full md:w-3/4 h-[80%] overflow-hidden rounded-3xl group">
              <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
                <span className="font-display text-4xl text-neutral-600">Project {num}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-4xl font-display font-bold">The Monument {num}</h3>
                <p className="text-accent uppercase tracking-widest mt-2 text-sm">View Project</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
