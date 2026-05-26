import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10000,
      }}
      animate={{
        scale: isHovering ? 4 : 1,
        backgroundColor: isHovering ? '#AAFF00' : '#AAFF00',
        mixBlendMode: isHovering ? 'difference' : 'normal',
        boxShadow: isHovering ? '0 0 20px rgba(170,255,0,0.8)' : '0 0 10px rgba(170,255,0,0.5)',
      }}
      className="w-3 h-3 rounded-full hidden md:block"
    />
  );
}
