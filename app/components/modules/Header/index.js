import styles from './Header.module.scss';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useContext } from 'react';
import { MainLayoutContext } from '../../../context';
import { motion } from 'framer-motion';
import { fallVariants } from '../../../utils/animationVariants';

const Header = () => {
  const { isDarkTheme, handleSwitchTheme } = useContext(MainLayoutContext);

  return (
    <motion.header
      className={styles.header}
      variants={fallVariants}
      initial='hidden'
      animate='visible'>
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
    </motion.header>
  );
};

export default Header;
