import React from 'react';
import { motion } from 'framer-motion';

const WelcomeContent = () => {
  return (
    <motion.div 
      className="welcome-content"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
    >
      <h1 className="welcome-text shimmer-effect">Welcome</h1>
      <h2 className="subtitle">Bursa Securities Malaysia</h2>
      <p className="date-text">12 May 2026</p>
    </motion.div>
  );
};

export default WelcomeContent;
