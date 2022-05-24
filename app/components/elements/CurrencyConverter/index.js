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

const CurrencyConverter = () => {
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('USD');
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);

  const convert = () => {
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {
        from_currency: chosenPrimaryCurrency,
        function: 'CURRENCY_EXCHANGE_RATE',
        to_currency: chosenSecondaryCurrency,
      },
      headers: {
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
        'X-RapidAPI-Key': 'b37d95749fmsh35d40cd8dacf8e9p1560f4jsn5a6f578e52ac',
      },
    };

    axios
      .request(options)
      .then(response => {
        console.log(response.data);
        setExchangeRate(
          response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']
        );
        setResult(
          response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] *
            amount
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Paper elevation={3} sx={{ borderRadius: '12px' }}>
      <div className={styles.mainGrid}>
        <h2>Currency Converter</h2>
        <Paper elevation={3} sx={{ borderRadius: '12px', p: '16px' }}>
          <div className={styles.inputsGrid}>
            <div className={styles.inputContainer}>
              <TextField
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
        <ExchangeRate
          exchangeRate={exchangeRate}
          chosenPrimaryCurrency={chosenPrimaryCurrency}
          chosenSecondaryCurrency={chosenSecondaryCurrency}
        />
      </div>
    </Paper>
  );
};

export default CurrencyConverter;
