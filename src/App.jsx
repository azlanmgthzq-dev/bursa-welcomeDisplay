import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
  const sigCanvas = useRef({});
  const certRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  // Auto-download after signature is completed
  const handleSignatureEnd = () => {
    // Wait for 1.5 seconds after they stop drawing before capturing
    setTimeout(async () => {
      if (certRef.current && !isDownloading) {
        setIsDownloading(true);
        const canvas = await html2canvas(certRef.current, {
          scale: 2, // High resolution
          useCORS: true,
        });
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `certificate_${new Date().getTime()}.png`;
        link.href = dataUrl;
        link.click();

        // Optional: remove the clear function so it stays visible
        setTimeout(() => {
          setIsDownloading(false);
        }, 1000);
      }
    }, 1500);
  };

  return (
    <div className="app-container">
      <div className="certificate-wrapper" ref={certRef}>
        <div className="certificate-bg" style={{ backgroundImage: "url('/Certificate.png')" }}>
          <img src="/gtabadge.png" alt="GTA Badge" className="gta-badge" />

          <div className="header-logos">
            <img src="/bursa-logo.png" alt="Bursa Logo" className="bursa-logo" />
            <img src="/GTA LOGO 2.png" alt="GTA Logo" className="gta-logo" />
          </div>

          <div className="certificate-content">
            <h1 className="welcome-text">Welcome</h1>
            <h2 className="subtitle">Bursa Sercurities Malaysia</h2>
            <p className="date-text">12 May 2026</p>
          </div>

          <div className="signature-section">
            <div className={`signature-pad-container ${isDownloading ? 'downloading' : ''}`}>
              <SignatureCanvas
                ref={sigCanvas}
                penColor="#000000"
                canvasProps={{ className: "sigCanvas" }}
                onEnd={handleSignatureEnd}
              />
            </div>
            <div className="signature-line"></div>
            <p className="signature-label">SIGNATURE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
