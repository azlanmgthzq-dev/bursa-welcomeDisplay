import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div 
      className="animated-bg-container" 
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* GTA Badge (in case the background image doesn't already have it) */}
      <img src="/gtabadge.png" alt="GTA Badge" className="gta-badge-bg absolute-badge" />

      {/* Animated Radial Glows to keep the premium feeling */}
      <div className="bg-layer radial-glow-1"></div>
      <div className="bg-layer radial-glow-2"></div>

      {/* Vignette Edge Darkening */}
      <div className="bg-layer vignette"></div>
    </div>
  );
};

export default AnimatedBackground;
