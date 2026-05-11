import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { motion } from 'framer-motion';

const SignatureSection = ({ onSignatureEnd, isDownloading }) => {
  const sigCanvas = useRef({});

  return (
    <motion.div 
      className="signature-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <div className={`signature-pad-container glass-effect ${isDownloading ? 'downloading' : ''}`}>
        <SignatureCanvas
          ref={sigCanvas}
          penColor="#000000"
          canvasProps={{ className: "sigCanvas" }}
          onEnd={onSignatureEnd}
        />
      </div>
      <div className="signature-line glow-line"></div>
      <p className="signature-label">BURSA SECURITIES</p>
    </motion.div>
  );
};

export default SignatureSection;
