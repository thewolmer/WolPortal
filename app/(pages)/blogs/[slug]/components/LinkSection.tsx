'use client';
import { useState } from 'react';

const LinkSection = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const shareOnWhatsApp = () => {
    const currentURL = encodeURIComponent(window.location.href);
    const whatsappShareURL = `https://wa.me/?text=${currentURL}`;
    window.open(whatsappShareURL, '_blank');
  };

  const shareOnTwitter = () => {
    const currentURL = encodeURIComponent(window.location.href);
    const twitterShareURL = `https://twitter.com/intent/tweet?url=${currentURL}`;
    window.open(twitterShareURL, '_blank');
  };

  return (
    <div className="absolute h-full -left-36">
      <div className="sticky left-0 flex flex-col items-center justify-center px-2 py-6 my-10 space-y-5 rounded-full shadow-2xl top-10 bg-active">
        <div
          onClick={copyToClipboard}
          className="flex items-center justify-center px-2 py-2 transition rounded-full bg-wolblack drop-shadow-2xl active:ring-4 active:ring-cyan-500 "
        >
          <div className="flex items-center justify-center">
            {copied ? (
              <>
                <i className="text-2xl bx bx-check text-wolgray"></i>
              </>
            ) : (
              <>
                <i className="text-2xl bx bx-link text-wolgray"></i>{' '}
              </>
            )}
          </div>
        </div>
        <div
          onClick={shareOnWhatsApp}
          className="flex items-center justify-center px-2 py-2 transition rounded-full bg-wolblack drop-shadow-2xl active:ring-4 active:ring-cyan-500 "
        >
          <div className="flex items-center justify-center">
            <i className="text-2xl bx bxl-whatsapp text-wolgray"></i>
          </div>
        </div>
        <div
          onClick={shareOnTwitter}
          className="flex items-center justify-center px-2 py-2 transition rounded-full bg-wolblack drop-shadow-2xl active:ring-4 active:ring-cyan-500 "
        >
          <div className="flex items-center justify-center">
            <i className="text-2xl bx bxl-twitter text-wolgray"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkSection;
