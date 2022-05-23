import styles from './ExchangeRate.module.scss';
import { Paper } from '@mui/material';

const ExchangeRate = () => {
  return (
    <Paper elevation={3} sx={{ borderRadius: '12px' }}>
      <div className={styles.mainGrid}>
        <h2>Exchange Rate</h2>
        <h3>123.989</h3>
        <span>BTC to USD</span>
      </div>
    </Paper>
  );
};

export default ExchangeRate;
