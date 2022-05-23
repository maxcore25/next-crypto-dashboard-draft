import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import ExchangeRate from '../ExchangeRate';

const CurrencyConverter = () => {
  return (
    <Paper>
      <Box
        sx={{
          p: 2,
          display: 'grid',
          gridTemplateRows: { md: '1fr 1fr' },
          gap: 2,
        }}>
        <div>CurrencyConverter</div>
        <ExchangeRate />
      </Box>
    </Paper>
  );
};

export default CurrencyConverter;
