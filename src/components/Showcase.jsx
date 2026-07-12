import { useRef, useState } from 'react';

export default function Showcase() {
  const containerRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply for faster scrolling
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full h-screen bg-obsidian z-10 relative flex items-center justify-center overflow-hidden">
      <div 
        ref={containerRef}
        data-magnetic="true"
        className="flex w-full overflow-x-auto snap-x snap-mandatory px-8 md:px-[20vw] py-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        <style>{`
          /* Hide scrollbar natively */
          div::-webkit-scrollbar { display: none; }
        `}</style>
        
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="snap-center shrink-0 w-[85vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex flex-col justify-center mr-8 last:mr-0 md:last:mr-[20vw] relative group">
            <div className="w-full h-full overflow-hidden rounded-3xl relative pointer-events-none">
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
