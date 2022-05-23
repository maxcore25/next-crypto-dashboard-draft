import styles from './MainLayout.module.scss';
import CustomHead from '../../elements/CustomHead';
import NewsFeed from '../../elements/NewsFeed';
import CurrencyConverter from '../../elements/CurrencyConverter';

const MainLayout = () => {
  return (
    <>
      <CustomHead />
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
