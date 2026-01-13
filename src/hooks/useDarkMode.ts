import { useState, useEffect } from 'react';

interface UseDarkModeReturn {
  value: boolean;
  enable: () => void;
  disable: () => void;
  toggle: () => void;
}

const useDarkMode = (initialValue: boolean = false): UseDarkModeReturn => {
  const [value, setValue] = useState<boolean>(() => {
    if (typeof window === 'undefined') return initialValue;

    try {
      const item = window.localStorage.getItem('darkMode');
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      window.localStorage.setItem('darkMode', JSON.stringify(value));

      if (value) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    } catch (error) {
      console.warn('Error writing to localStorage:', error);
    }
  }, [value]);

  const toggle = () => setValue(prevValue => !prevValue);
  const enable = () => setValue(true);
  const disable = () => setValue(false);

  return {
    value,
    enable,
    disable,
    toggle
  };
};

export default useDarkMode;
