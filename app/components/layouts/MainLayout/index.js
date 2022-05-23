import styles from './MainLayout.module.scss';
import CustomHead from '../../elements/CustomHead';
import NewsFeed from '../../elements/NewsFeed';
import CurrencyConverter from '../../elements/CurrencyConverter';

const MainLayout = () => {
  return (
    <>
      <CustomHead />
      <section className={styles.section}>
        <CurrencyConverter />
        <NewsFeed />
      </section>
    </>
  );
};

export default MainLayout;
