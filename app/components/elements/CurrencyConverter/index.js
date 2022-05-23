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

const CurrencyConverter = () => {
  const [age, setAge] = useState('');

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <Paper elevation={3} sx={{ borderRadius: '12px' }}>
      <div className={styles.mainGrid}>
        <h2>Currency Converter</h2>
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
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  defaultValue={0}
                  // value={age}
                  onChange={handleChange}
                  inputProps={{
                    name: 'currency-option-1',
                  }}>
                  <MenuItem value={0}>BTC</MenuItem>
                  <MenuItem value={1}>Ten</MenuItem>
                  <MenuItem value={2}>Twenty</MenuItem>
                  <MenuItem value={3}>Thirty</MenuItem>
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
                name: 'currency-amount-1',
              }}
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  defaultValue={0}
                  // value={age}
                  onChange={handleChange}
                  inputProps={{
                    name: 'currency-option-2',
                  }}>
                  <MenuItem value={0}>Empty</MenuItem>
                  <MenuItem value={1}>Ten</MenuItem>
                  <MenuItem value={2}>Twenty</MenuItem>
                  <MenuItem value={3}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <Button variant='contained'>Convert</Button>
        </div>
        <ExchangeRate />
      </div>
    </Paper>
  );
};

export default CurrencyConverter;
