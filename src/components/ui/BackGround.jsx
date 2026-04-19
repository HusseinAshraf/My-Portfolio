import React from 'react';

function BackGround() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--grid-color) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Ambient orbs */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, var(--accent), transparent 70%)',
          filter: 'blur(120px)',
          opacity: 0.07,
          top: '-150px',
          right: '-100px',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, var(--accent2), transparent 70%)',
          filter: 'blur(120px)',
          opacity: 0.05,
          bottom: '10%',
          left: '-100px',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, var(--accent), transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.04,
          top: '50%',
          left: '40%',
        }}
      />
    </div>
  );
}

export default BackGround;
