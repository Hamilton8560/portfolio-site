import { useState, useEffect } from 'react';
import { Theme } from '../types';

export function useTheme(): Theme {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark));
  }, [isDark]);

  const toggle = () => setIsDark(!isDark);

  return { isDark, toggle };
}