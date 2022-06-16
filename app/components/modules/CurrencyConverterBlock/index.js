import styles from './CurrencyConverterBlock.module.scss';
import { Paper } from '@mui/material';
import ExchangeRate from '../../elements/ExchangeRate';
import CurrencyConverter from '../../elements/CurrencyConverter';
import { motion } from 'framer-motion';
import { scaleAnimationVariants } from '../../../utils/animationVariants';

const CurrencyConverterBlock = () => {
  return (
    <motion.div
      variants={scaleAnimationVariants}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 1,
      }}>
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
    </motion.div>
  );
};

export default CurrencyConverterBlock;
