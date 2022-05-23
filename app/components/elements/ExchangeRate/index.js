import styles from './ExchangeRate.module.scss';
import { Paper } from '@mui/material';

const ExchangeRate = () => {
  return (
    <Paper elevation={3}>
      <div className={styles.mainGrid}>
        <h2>ExchangeRate</h2>
      </div>
    </Paper>
  );
};

export default ExchangeRate;
