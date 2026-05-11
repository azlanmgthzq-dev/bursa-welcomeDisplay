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
      <h2 className="subtitle">TO</h2>
      <img src="/GTA LOGO 2.png" alt="Global Turbine Asia" className="welcome-gta-logo" />
    </motion.div>
  );
};

export default WelcomeContent;
