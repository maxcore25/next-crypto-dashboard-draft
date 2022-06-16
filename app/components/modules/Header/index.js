import styles from './Header.module.scss';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useContext } from 'react';
import { MainLayoutContext } from '../../../context';
import { motion } from 'framer-motion';

const pVariants = {
  hidden: { y: '-100%' },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Header = () => {
  const { isDarkTheme, handleSwitchTheme } = useContext(MainLayoutContext);

  return (
    <motion.header
      className={styles.header}
      variants={pVariants}
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
