import styles from './Header.module.scss';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleSwitchTheme = () => {
    setIsDarkTheme(!isDarkTheme);

    if (isDarkTheme) {
      // Set value of theme to dark
      document.documentElement.setAttribute('data-theme', 'dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      // Set value of theme to light
      document.documentElement.removeAttribute('data-theme');
      window.localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.contentContainer}>
        <span>Lorem</span>
        <span>Lorem</span>
        <span>Lorem</span>
        <IconButton
          onClick={() => handleSwitchTheme()}
          color='primary'
          aria-label='Switch Theme'
          component='span'>
          {isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
