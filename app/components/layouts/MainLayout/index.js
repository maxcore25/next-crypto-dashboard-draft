import styles from './MainLayout.module.scss';
import CustomHead from '../../elements/CustomHead';
import NewsFeed from '../../elements/NewsFeed';
import CurrencyConverter from '../../elements/CurrencyConverter';

const MainLayout = () => {
  return (
    <section className={styles.section}>
      <CustomHead />
      <CurrencyConverter />
      <NewsFeed />
    </section>
  );
};

export default MainLayout;
