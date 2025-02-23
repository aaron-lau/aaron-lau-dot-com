// src/hooks/useDarkMode.js
import { useState, useEffect } from 'react';

const useDarkMode = (initialValue = false) => {
  // Initialize state with localStorage value if available, otherwise use initialValue
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue;
    
    try {
      const item = window.localStorage.getItem('darkMode');
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  // Update localStorage and apply classes/styles when value changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      // Update localStorage
      window.localStorage.setItem('darkMode', JSON.stringify(value));

      // Update body class
      if (value) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    } catch (error) {
      console.warn('Error writing to localStorage:', error);
    }
  }, [value]);

  // Toggle function
  const toggle = () => setValue(prevValue => !prevValue);

  // Enable function
  const enable = () => setValue(true);

  // Disable function
  const disable = () => setValue(false);

  return {
    value,
    enable,
    disable,
    toggle
  };
};

export default useDarkMode;