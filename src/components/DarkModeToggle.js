import { useState, useEffect } from 'react';
import styles from './DarkModeToggle.module.css';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Default to dark mode, but check for saved theme preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      // Default to dark if no saved preference, otherwise use saved preference
      const shouldBeDark = savedTheme ? savedTheme === 'dark' : true;

      setIsDark(shouldBeDark);
      document.documentElement.setAttribute('data-theme', shouldBeDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      const newTheme = !isDark;
      setIsDark(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className={styles.icon}>{isDark ? '☀️' : '🌙'}</span>
    </button>
  );
};

export default DarkModeToggle;
