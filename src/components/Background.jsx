import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-primary opacity-20 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-secondary opacity-20 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 80, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[10%] left-[20%] h-[400px] w-[400px] rounded-full bg-[#33ff00] opacity-10 blur-[100px]"
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
    </div>
  );
};

// Simplified styling for non-tailwind environment
const BackgroundStyled = () => {
  return (
    <div style={{
      fixed: 'inset-0',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -10,
      overflow: 'hidden',
      backgroundColor: '#050505'
    }}>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          height: '500px',
          width: '500px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary)',
          opacity: 0.15,
          filter: 'blur(120px)'
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          height: '600px',
          width: '600px',
          borderRadius: '50%',
          backgroundColor: 'var(--secondary)',
          opacity: 0.15,
          filter: 'blur(120px)'
        }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
        opacity: 0.3,
        pointerEvents: 'none'
      }}></div>
    </div>
  );
};

export default BackgroundStyled;
