import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import AnimatedBackground from './components/AnimatedBackground';
import HeaderLogos from './components/HeaderLogos';
import WelcomeContent from './components/WelcomeContent';
import SignatureSection from './components/SignatureSection';
import FloatingEffects from './components/FloatingEffects';
import './App.css';

function App() {
  const [isDownloading, setIsDownloading] = useState(false);
  const certRef = useRef(null);

  const handleSignatureEnd = () => {
    setTimeout(async () => {
      if (certRef.current && !isDownloading) {
        setIsDownloading(true);
        const canvas = await html2canvas(certRef.current, {
          scale: 2,
          useCORS: true,
          backgroundColor: null,
        });
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `certificate_${new Date().getTime()}.png`;
        link.href = dataUrl;
        link.click();

        setTimeout(() => {
          setIsDownloading(false);
        }, 1000);
      }
    }, 1500);
  };

  return (
    <div className="app-wrapper" ref={certRef}>
      <AnimatedBackground />
      <FloatingEffects />

      <div className="main-layout">
        <div className="top-section">
          <div className="top-left-container">
            {/* <img src="/gtaholding.png" alt="GTA Holding" className="gta-holding-logo" /> */}
          </div>
          <HeaderLogos />
        </div>

        <div className="middle-section">
          <WelcomeContent />
        </div>

        <div className="bottom-section">
          <SignatureSection onSignatureEnd={handleSignatureEnd} isDownloading={isDownloading} />
        </div>
      </div>
    </div>
  );
}

export default App;
