'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendlyWidget = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget w-full h-full" 
      data-url="https://calendly.com/bkplus-call/intro-call"
      style={{
        height: '100%',
        width: '100%',
        border: 'none',
        borderRadius: '1rem',
        overflow: 'hidden',
        position: 'relative',
        minHeight: '500px'
      }}
    />
  );
};

export default CalendlyWidget;
