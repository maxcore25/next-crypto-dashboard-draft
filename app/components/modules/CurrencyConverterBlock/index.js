import styles from './CurrencyConverter.module.scss';
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
import ExchangeRate from '../ExchangeRate';
import { CURRENCIES } from '../../../constants';
import axios from 'axios';

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
        <Paper
          className={styles.muiPaperInputBlock}
          elevation={3}
          sx={{ borderRadius: '12px', p: '16px' }}>
          <div className={styles.inputsGrid}>
            <div className={styles.inputContainer}>
              <TextField
                className={styles.muiInput}
                value={amount}
                onChange={e => setAmount(e.target.value)}
                id='outlined-basic'
                label='Currency 1'
                variant='outlined'
                inputProps={{
                  name: 'currency-amount-1',
                }}
              />
              <Box sx={{ width: 85 }}>
                <FormControl fullWidth>
                  <Select
                    className={styles.muiSelect}
                    value={chosenPrimaryCurrency}
                    onChange={e => setChosenPrimaryCurrency(e.target.value)}
                    inputProps={{
                      name: 'currency-option-1',
                    }}>
                    {CURRENCIES.map(currency => (
                      <MenuItem key={currency} value={currency}>
                        {currency}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className={styles.inputContainer}>
              <TextField
                className={styles.muiInputDisabled}
                disabled
                value={result}
                id='outlined-basic'
                label='Currency 2'
                variant='outlined'
                inputProps={{
                  name: 'currency-amount-2',
                }}
              />
              <Box sx={{ width: 85 }}>
                <FormControl fullWidth>
                  <Select
                    className={styles.muiSelect}
                    value={chosenSecondaryCurrency}
                    onChange={e => setChosenSecondaryCurrency(e.target.value)}
                    inputProps={{
                      name: 'currency-option-2',
                    }}>
                    {CURRENCIES.map(currency => (
                      <MenuItem key={currency} value={currency}>
                        {currency}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <Button onClick={() => convert()} variant='contained'>
              Convert
            </Button>
          </div>
        </Paper>
        <ExchangeRate exchangedData={exchangedData} />
      </div>
    </Paper>
  );
};

export default CurrencyConverterBlock;
