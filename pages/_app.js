import React, { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Set dark mode as default before component mounts to prevent flash
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      // Default to dark if no saved preference
      const theme = savedTheme || 'dark';
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
