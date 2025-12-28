import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none;
        }
        input, button, a, textarea, select {
          cursor: none;
        }
      `}</style>
      
      {isVisible && (
        <>
          {/* Outer circle */}
          <motion.div
            animate={{ x: mousePosition.x, y: mousePosition.y }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            className="fixed w-8 h-8 border-2 border-cyan-500 rounded-full pointer-events-none z-[9999]"
            style={{ marginLeft: '-16px', marginTop: '-16px' }}
          />
          
          {/* Inner pointer dot */}
          <motion.div
            animate={{ x: mousePosition.x, y: mousePosition.y }}
            transition={{ type: 'spring', stiffness: 800, damping: 25 }}
            className="fixed w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full pointer-events-none z-[9999]"
            style={{ marginLeft: '-4px', marginTop: '-4px' }}
          />
        </>
      )}
    </>
  );
}
