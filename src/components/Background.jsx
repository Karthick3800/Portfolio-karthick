import React from 'react';

const BackgroundStyled = () => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: -10,
      backgroundColor: '#FAFAF8',
      pointerEvents: 'none'
    }}>
      {/* Subtle dot grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(#0A0A0A 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        opacity: 0.04
      }} />
    </div>
  );
};

export default BackgroundStyled;
