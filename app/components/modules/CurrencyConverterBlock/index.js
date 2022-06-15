import styles from './CurrencyConverterBlock.module.scss';
import {
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { CURRENCIES } from '../../../constants';
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

  const convert = () => {
    axios
      .post('/api/exchange-rate', {
        from_currency: chosenPrimaryCurrency,
        to_currency: chosenSecondaryCurrency,
      })
      .then(response => {
        setExchangeRate(response.data.exchangeRate);
        setResult(response.data.exchangeRate * amount);
        setExchangedData({
          chosenPrimaryCurrency,
          chosenSecondaryCurrency,
          exchangeRate: response.data.exchangeRate,
        });
      });
  };

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
