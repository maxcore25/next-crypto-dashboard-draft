import styles from './Header.module.scss';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';
import { LOCAL_STORAGE_VARIABLES } from '../../../constants';

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleSwitchTheme = () => {
    setIsDarkTheme(!isDarkTheme);

    if (isDarkTheme) {
      // Set value of theme to dark
      document.documentElement.setAttribute('data-theme', 'dark');
      window.localStorage.setItem(
        LOCAL_STORAGE_VARIABLES.CRYPTO_DASHBOARD_THEME,
        'dark'
      );
    } else {
      // Set value of theme to light
      document.documentElement.removeAttribute('data-theme');
      window.localStorage.setItem(
        LOCAL_STORAGE_VARIABLES.CRYPTO_DASHBOARD_THEME,
        'light'
      );
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
