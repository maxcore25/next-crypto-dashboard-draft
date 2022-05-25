import styles from './Header.module.scss';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contentContainer}>
        <span>Lorem</span>
        <span>Lorem</span>
        <span>Lorem</span>
        <IconButton color='primary' aria-label='Switch Theme' component='span'>
          <LightModeIcon />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
