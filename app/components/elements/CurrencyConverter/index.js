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

const CurrencyConverter = () => {
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('USD');
  const [amount, setAmount] = useState(1);

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
            <Button variant='contained'>Convert</Button>
          </div>
        </Paper>
        <ExchangeRate />
      </div>
    </Paper>
  );
};

export default CurrencyConverter;
