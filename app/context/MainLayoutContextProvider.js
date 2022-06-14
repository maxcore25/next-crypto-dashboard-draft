import { useEffect, useState } from 'react';
import { MainLayoutContext } from '.';
import { LOCAL_STORAGE_VARIABLES } from '../constants';

const MainLayoutContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(undefined);

  const handleSwitchTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <MainLayoutContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        handleSwitchTheme,
      }}>
      {children}
    </MainLayoutContext.Provider>
  );
};

export default MainLayoutContextProvider;
