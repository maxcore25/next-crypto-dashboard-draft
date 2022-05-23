import styles from './MainLayout.module.scss';
import CustomHead from '../../elements/CustomHead';
import NewsFeed from '../../elements/NewsFeed';
import CurrencyConverter from '../../elements/CurrencyConverter';

const MainLayout = () => {
  return (
    <div className={styles.block}>
      <CustomHead />
      <CurrencyConverter />
      <NewsFeed />
    </div>
  );
};

export default MainLayout;
