import styles from './Header.module.scss';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useContext, useState } from 'react';
import { LOCAL_STORAGE_VARIABLES } from '../../../constants';
import { MainLayoutContext } from '../../../context';

const Header = () => {
  const { isDarkTheme, handleSwitchTheme } = useContext(MainLayoutContext);

  return (
    <header className={styles.header}>
      <div className={styles.contentContainer}>
        <a href='https://github.com/maxcore25/next-crypto-dashboard-draft'>
          GitHub
        </a>
        <IconButton
          onClick={() => handleSwitchTheme()}
          color='primary'
          aria-label='Switch Theme'
          component='span'>
          {isDarkTheme ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
