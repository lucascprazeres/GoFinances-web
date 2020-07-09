import React, { useState, useCallback, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

interface ThemeContextData {
  themeToggler(): void;
}

export const ThemeTogglerContext = createContext<ThemeContextData>(
  {} as ThemeContextData,
);

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  const themeToggler = useCallback((): void => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeTogglerContext.Provider value={{ themeToggler }}>
        <GlobalStyle />
        <Router>
          <Routes />
        </Router>
      </ThemeTogglerContext.Provider>
    </ThemeProvider>
  );
};

export default App;
