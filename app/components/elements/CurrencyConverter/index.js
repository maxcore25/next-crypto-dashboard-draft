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
        <div>
          <table>
            <tbody>
              <tr>
                <td>Primary Currency:</td>
                <td>
                  <input
                    type='number'
                    name='currency-amount-1'
                    value={''}
                    onChange={e => console.log(e.target.value)}
                  />
                </td>
                <td>
                  <select
                    value={'chosenPrimaryCurrency'}
                    name='currency-option-1'
                    className='currency-options'
                    onChange={e => console.log(e.target.value)}>
                    <option>{'currency'}</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Secondary Currency:</td>
                <td>
                  <input
                    name='currency-amount-2'
                    value={'result'}
                    disabled={true}
                  />
                </td>
                <td>
                  <select
                    value={'chosenSecondaryCurrency'}
                    name='currency-option-2'
                    className='currency-options'
                    onChange={e => console.log(e.target.value)}>
                    <option>{'currency'}</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ExchangeRate />
      </Box>
    </Paper>
  );
};

export default CurrencyConverter;
