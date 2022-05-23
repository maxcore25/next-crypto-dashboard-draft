import styles from './CurrencyConverter.module.scss';
import {
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
    <Paper>
      <Box
        sx={{
          p: 2,
          display: 'grid',
          gridTemplateRows: { md: '1fr 1fr' },
          gap: 2,
        }}>
        <div className={styles.inputsGrid}>
          <div className={styles.inputContainer}>
            <TextField
              id='outlined-basic'
              label='Primary Currency'
              variant='outlined'
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select displayEmpty value={age} onChange={handleChange}>
                  <MenuItem value=''>BTC</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className={styles.inputContainer}>
            <TextField
              id='outlined-basic'
              label='Secondary Currency'
              variant='outlined'
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select displayEmpty value={age} onChange={handleChange}>
                  <MenuItem value=''>Empty</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <ExchangeRate />
      </Box>
    </Paper>
  );
};

export default CurrencyConverter;
