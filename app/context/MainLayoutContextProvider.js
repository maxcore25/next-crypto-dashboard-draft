import { useState } from 'react';
import { MainLayoutContext } from '.';

const MainLayoutContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

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
