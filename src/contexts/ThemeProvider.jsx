import { useState, useEffect, createContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const defaultTheme = 'light';
  const [theme, setTheme] = useState(localStorage.getItem('theme') || defaultTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const setThemeValue = (value) => {
    setTheme(value);
    localStorage.setItem('theme', value);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeValue }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
export default ThemeProvider;