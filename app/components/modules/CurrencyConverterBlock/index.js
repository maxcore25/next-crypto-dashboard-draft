import styles from './CurrencyConverterBlock.module.scss';
import { Paper } from '@mui/material';
import { useState } from 'react';
import ExchangeRate from '../../elements/ExchangeRate';
import CurrencyConverter from '../../elements/CurrencyConverter';

const CurrencyConverterBlock = () => {
  return (
    <Paper
      className={styles.muiPaper}
      elevation={3}
      sx={{ borderRadius: '12px' }}>
      <div className={styles.mainGrid}>
        <h2 className={styles.title}>Currency Converter</h2>
        <CurrencyConverter />
        <ExchangeRate />
      </div>
    </Paper>
  );
};

export default CurrencyConverterBlock;
