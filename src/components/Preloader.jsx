import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    let current = { val: 0 };
    gsap.to(current, {
      val: 100,
      duration: 2,
      ease: 'power2.inOut',
      onUpdate: () => {
        setProgress(Math.round(current.val));
      },
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: 'power4.inOut',
          onComplete: () => {
            onComplete();
          }
        });
      }
    });
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian text-white"
    >
      <div className="overflow-hidden">
        <span className="text-8xl md:text-9xl font-display font-black tracking-tighter">
          {progress}%
        </span>
      </div>
    </div>
  );
}
