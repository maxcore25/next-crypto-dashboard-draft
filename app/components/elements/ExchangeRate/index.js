import styles from './ExchangeRate.module.scss';
import { Paper } from '@mui/material';

const ExchangeRate = ({
  exchangeRate,
  chosenPrimaryCurrency,
  chosenSecondaryCurrency,
}) => {
  return (
    <Paper elevation={3} sx={{ borderRadius: '12px' }}>
      <div className={styles.mainGrid}>
        <h2>Exchange Rate</h2>
        <h3>{exchangeRate}</h3>
        <span>
          {chosenPrimaryCurrency} to {chosenSecondaryCurrency}
        </span>
      </div>
    </Paper>
  );
};

export default ExchangeRate;
