import styles from './ExchangeRate.module.scss';
import { Paper } from '@mui/material';

const ExchangeRate = ({ exchangedData }) => {
  return (
    <Paper elevation={3} sx={{ borderRadius: '12px' }}>
      <div className={styles.mainGrid}>
        <h2>Exchange Rate</h2>
        <h3>{exchangedData.exchangeRate}</h3>
        <span>
          {exchangedData.chosenPrimaryCurrency} to{' '}
          {exchangedData.chosenSecondaryCurrency}
        </span>
      </div>
    </Paper>
  );
};

export default ExchangeRate;
