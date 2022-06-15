import styles from './MainLayout.module.scss';
import CustomHead from '../../elements/CustomHead';
import NewsFeed from '../../elements/NewsFeed';
import CurrencyConverter from '../../elements/CurrencyConverter';
import Header from '../../modules/Header';
import { MainLayoutContext } from '../../../context';
import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_VARIABLES } from '../../../constants';
import CurrencyConverterBlock from '../../modules/CurrencyConverterBlock';

const MainLayout = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(MainLayoutContext);

  useEffect(() => {
    if (isDarkTheme !== undefined) {
      if (isDarkTheme) {
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem(
          LOCAL_STORAGE_VARIABLES.CRYPTO_DASHBOARD_THEME,
          'dark'
        );
      } else {
        document.documentElement.removeAttribute('data-theme');
        window.localStorage.setItem(
          LOCAL_STORAGE_VARIABLES.CRYPTO_DASHBOARD_THEME,
          'light'
        );
      }
    }
  }, [isDarkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    // Set initial darkmode to light
    setIsDarkTheme(initialColorValue === 'dark');
  }, []);

  return (
    <>
      <CustomHead />
      <Header />
      <section className={styles.section}>
        <h1 className={styles.title}>Crypto Dashboard</h1>
        <main className={styles.content}>
          <CurrencyConverterBlock />
          <NewsFeed />
        </main>
      </section>
    </>
  );
};

export default MainLayout;
