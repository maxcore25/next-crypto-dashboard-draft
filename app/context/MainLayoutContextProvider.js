import { useState } from 'react';
import { MainLayoutContext } from '.';
import { LOCAL_STORAGE_VARIABLES } from '../constants';
import { useLocalStorage } from '../hooks/useLocalStorage';

const MainLayoutContextProvider = ({ children }) => {
  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage(
    LOCAL_STORAGE_VARIABLES.CRYPTO_DASHBOARD_THEME,
    false
  );

  const handleSwitchTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <MainLayoutContext.Provider value={{ isDarkTheme, handleSwitchTheme }}>
      {children}
    </MainLayoutContext.Provider>
  );
};

export default MainLayoutContextProvider;
