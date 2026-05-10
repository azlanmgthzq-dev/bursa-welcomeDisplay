import React from 'react';
import { motion } from 'framer-motion';

const HeaderLogos = () => {
  return (
    <motion.div
      className="header-logos"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <img src="/bursa-logo.png" alt="Bursa Logo" className="bursa-logo" />
      <img src="/GTA LOGO 2.png" alt="GTA Logo" className="gta-logo" />
    </motion.div>
  );
};

export default HeaderLogos;
