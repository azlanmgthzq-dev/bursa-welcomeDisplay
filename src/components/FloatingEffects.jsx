import React from 'react';
import { motion } from 'framer-motion';

const FloatingEffects = () => {
  return (
    <div className="floating-effects-container">
      {/* Drifting subtle orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="ambient-orb"
          animate={{
            y: [Math.random() * 50 - 25, Math.random() * -50 + 25],
            x: [Math.random() * 50 - 25, Math.random() * -50 + 25],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            width: `${100 + Math.random() * 200}px`,
            height: `${100 + Math.random() * 200}px`,
          }}
        />
      ))}

      {/* Slow light streak sweep */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: '-20%',
          width: '20%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
          transform: 'skewX(-20deg)',
          filter: 'blur(10px)'
        }}
        animate={{ left: ['-20%', '120%'] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
};

export default FloatingEffects;
