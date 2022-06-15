import { useEffect, useState } from 'react';
import { MainLayoutContext } from '.';
import { LOCAL_STORAGE_VARIABLES } from '../constants';
import axios from 'axios';

const MainLayoutContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(undefined);
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

  const handleSwitchTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <MainLayoutContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        handleSwitchTheme,
        amount,
        setAmount,
        chosenPrimaryCurrency,
        setChosenPrimaryCurrency,
        result,
        chosenSecondaryCurrency,
        setChosenSecondaryCurrency,
        convert,
        exchangedData,
      }}>
      {children}
    </MainLayoutContext.Provider>
  );
};

export default MainLayoutContextProvider;
