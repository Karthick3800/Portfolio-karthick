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
      position: 'fixed',
      inset: 0,
      zIndex: -10,
      overflow: 'hidden',
      backgroundColor: '#060608'
    }}>
      {/* Dot-grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none'
      }} />

      {/* Top-left red glow */}
      <div
        className="blob-1"
        style={{
          position: 'absolute',
          top: '-8%',
          left: '-8%',
          height: '550px',
          width: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #ef4444 0%, transparent 70%)',
          opacity: 0.18,
          filter: 'blur(80px)'
        }}
      />

      {/* Right crimson glow */}
      <div
        className="blob-2"
        style={{
          position: 'absolute',
          top: '15%',
          right: '-12%',
          height: '650px',
          width: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #9f1239 0%, transparent 70%)',
          opacity: 0.2,
          filter: 'blur(100px)'
        }}
      />

      {/* Bottom center subtle glow */}
      <div
        className="blob-3"
        style={{
          position: 'absolute',
          bottom: '-5%',
          left: '30%',
          height: '450px',
          width: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #ef4444 0%, transparent 70%)',
          opacity: 0.1,
          filter: 'blur(90px)'
        }}
      />

      {/* Vignette — darkens edges so content pops */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%)',
        pointerEvents: 'none'
      }} />
    </div>
  );
};

export default BackgroundStyled;
