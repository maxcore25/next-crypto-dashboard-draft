import styles from './MainLayout.module.scss';
import CustomHead from '../../elements/CustomHead';
import Header from '../../modules/Header';
import { MainLayoutContext } from '../../../context';
import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_VARIABLES } from '../../../constants';
import CurrencyConverterBlock from '../../modules/CurrencyConverterBlock';
import NewsFeedBlock from '../../modules/NewsFeedBlock';
import { motion } from 'framer-motion';

const scaleAnimationVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

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
        <motion.h1
          className={styles.title}
          variants={scaleAnimationVariants}
          initial='hidden'
          animate='visible'>
          Crypto Dashboard
        </motion.h1>
        <main className={styles.content}>
          <CurrencyConverterBlock />
          <NewsFeedBlock />
        </main>
      </section>
    </>
  );
};

export default MainLayout;
