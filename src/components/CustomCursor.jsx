import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power2.out'
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [data-magnetic="true"]');
      if (target) {
        gsap.to(cursor, {
          scale: 2.5,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          mixBlendMode: 'difference',
          borderWidth: 0,
          duration: 0.3,
        });
      } else {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: 'transparent',
          mixBlendMode: 'normal',
          borderWidth: 2,
          duration: 0.3,
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 border-2 border-white rounded-full pointer-events-none z-[100]"
      style={{
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}
