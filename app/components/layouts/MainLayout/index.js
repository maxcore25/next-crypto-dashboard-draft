import styles from './MainLayout.module.scss';
import CustomHead from '../../elements/CustomHead';
import NewsFeed from '../../elements/NewsFeed';
import CurrencyConverter from '../../elements/CurrencyConverter';
import Header from '../../modules/Header';
import { MainLayoutContext } from '../../../context';
import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_VARIABLES } from '../../../constants';

const MainLayout = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(MainLayoutContext);

  useEffect(() => {
    console.log('useEffect isDarkTheme:', isDarkTheme);
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

  // useEffect(() => {
  //   const storage = localStorage.getItem(
  //     LOCAL_STORAGE_VARIABLES.CRYPTO_DASHBOARD_THEME
  //   );

  //   console.log('localStorage:', storage);
  // }, []);

  // useEffect(() => {
  //   if (isDarkTheme) {
  //     document.documentElement.setAttribute('data-theme', 'dark');
  //     window.localStorage.setItem(
  //       LOCAL_STORAGE_VARIABLES.CRYPTO_DASHBOARD_THEME,
  //       'dark'
  //     );
  //   } else {
  //     document.documentElement.setAttribute('data-theme', 'light');
  //     window.localStorage.setItem(
  //       LOCAL_STORAGE_VARIABLES.CRYPTO_DASHBOARD_THEME,
  //       'light'
  //     );
  //   }
  // }, [isDarkTheme]);

  return (
    <>
      <CustomHead />
      <Header />
      <section className={styles.section}>
        <h1>Crypto Dashboard</h1>
        <main className={styles.content}>
          <CurrencyConverter />
          <NewsFeed />
        </main>
      </section>
    </>
  );
};

export default MainLayout;
