import { useState } from 'react';
import { MainLayoutContext } from '.';

const MainLayoutContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleSwitchTheme = () => {
    setIsDarkTheme(!isDarkTheme);

    if (isDarkTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      window.localStorage.setItem(
        LOCAL_STORAGE_VARIABLES.CRYPTO_DASHBOARD_THEME,
        'dark'
      );
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      window.localStorage.setItem(
        LOCAL_STORAGE_VARIABLES.CRYPTO_DASHBOARD_THEME,
        'light'
      );
    }
  };

  return (
    <MainLayoutContext.Provider value={{ isDarkTheme, handleSwitchTheme }}>
      {children}
    </MainLayoutContext.Provider>
  );
};

export default MainLayoutContextProvider;
