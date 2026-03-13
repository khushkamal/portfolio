import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trailing, setTrailing] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let animFrame;
    let currentX = 0, currentY = 0;
    let targetX = 0, targetY = 0;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });

      // Detect if hovering over a link or button
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setHovering(
        el?.tagName === 'A' || el?.tagName === 'BUTTON' || el?.closest('a') || el?.closest('button')
      );
    };

    const onDown  = () => setClicking(true);
    const onUp    = () => setClicking(false);

    // Smooth trailing dot with lerp
    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      currentX = lerp(currentX, targetX, 0.1);
      currentY = lerp(currentY, targetY, 0.1);
      setTrailing({ x: currentX, y: currentY });
      animFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      {/* Inner dot — follows cursor exactly */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: pos.x - 6,
          y: pos.y - 6,
          width: clicking ? 8 : hovering ? 12 : 12,
          height: clicking ? 8 : hovering ? 12 : 12,
          backgroundColor: '#F13024',
          borderRadius: '50%',
          mixBlendMode: 'difference',
        }}
      />

      {/* Outer ring — lags behind (trailing) */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: trailing.x - 20,
          y: trailing.y - 20,
          width: clicking ? 28 : hovering ? 48 : 40,
          height: clicking ? 28 : hovering ? 48 : 40,
          border: '1.5px solid rgba(241, 48, 36, 0.5)',
          borderRadius: '50%',
          transition: 'width 0.2s, height 0.2s, border-color 0.2s',
          borderColor: hovering ? '#F13024' : 'rgba(241,48,36,0.4)',
        }}
      />
    </>
  );
};

export default CustomCursor;
