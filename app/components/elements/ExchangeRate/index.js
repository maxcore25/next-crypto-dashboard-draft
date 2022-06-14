import styles from './ExchangeRate.module.scss';
import { Paper } from '@mui/material';

const ExchangeRate = ({ exchangedData }) => {
  return (
    <Paper
      className={styles.muiPaper}
      elevation={3}
      sx={{ borderRadius: '12px' }}>
      <div className={styles.mainGrid}>
        <h2 className={styles.title}>Exchange Rate</h2>
        <h3 className={styles.exchangeRate}>{exchangedData.exchangeRate}</h3>
        <span className={styles.exchangedData}>
          {exchangedData.chosenPrimaryCurrency} to{' '}
          {exchangedData.chosenSecondaryCurrency}
        </span>
      </div>
    </Paper>
  );
};

export default ExchangeRate;
