import styles from './CurrencyConverter.module.scss';
import {
  Button,
  FormControl,
  InputLabel,
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
  const [age, setAge] = useState('');

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <Paper elevation={3} sx={{ borderRadius: '12px' }}>
      <div className={styles.mainGrid}>
        <h2>Currency Converter</h2>
        <Paper elevation={3} sx={{ borderRadius: '12px', p: '16px' }}>
          <div className={styles.inputsGrid}>
            <div className={styles.inputContainer}>
              <TextField
                id='outlined-basic'
                label='Primary Currency'
                variant='outlined'
                inputProps={{
                  name: 'currency-amount-1',
                }}
              />
              <Box sx={{ width: 85 }}>
                <FormControl fullWidth>
                  <Select
                    defaultValue={0}
                    // value={age}
                    onChange={handleChange}
                    inputProps={{
                      name: 'currency-option-1',
                    }}>
                    {CURRENCIES.map((currency, index) => (
                      <MenuItem key={currency} value={index}>
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
                label='Secondary Currency'
                variant='outlined'
                inputProps={{
                  name: 'currency-amount-2',
                }}
              />
              <Box sx={{ width: 85 }}>
                <FormControl fullWidth>
                  <Select
                    defaultValue={2}
                    // value={age}
                    onChange={handleChange}
                    inputProps={{
                      name: 'currency-option-2',
                    }}>
                    {CURRENCIES.map((currency, index) => (
                      <MenuItem key={currency} value={index}>
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
