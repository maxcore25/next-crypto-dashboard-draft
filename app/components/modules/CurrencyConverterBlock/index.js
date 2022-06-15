import styles from './CurrencyConverterBlock.module.scss';
import { Paper } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import ExchangeRate from '../../elements/ExchangeRate';
import CurrencyConverter from '../../elements/CurrencyConverter';

const CurrencyConverterBlock = () => {
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('USD');
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);

  const [exchangedData, setExchangedData] = useState({
    chosenPrimaryCurrency: 'BTC',
    chosenSecondaryCurrency: 'USD',
    exchangeRate: 0,
  });

  return (
    <Paper
      className={styles.muiPaper}
      elevation={3}
      sx={{ borderRadius: '12px' }}>
      <div className={styles.mainGrid}>
        <h2 className={styles.title}>Currency Converter</h2>
        <CurrencyConverter />
        <ExchangeRate exchangedData={exchangedData} />
      </div>
    </Paper>
  );
};

export default CurrencyConverterBlock;
