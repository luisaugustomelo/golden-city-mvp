import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      // Primeiro verifica se já tem a classe no HTML (do script FOIT)
      const htmlClasses = document.documentElement.classList;
      if (htmlClasses.contains('dark')) return 'dark';
      if (htmlClasses.contains('light')) return 'light';

      // Depois verifica localStorage
      const stored = localStorage.getItem('theme');
      if (stored) return stored;

      // Por último verifica preferência do sistema
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
