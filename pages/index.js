import CurrencyConverter from '../app/components/CurrencyConverter';
import CustomHead from '../app/components/CustomHead';
import NewsFeed from '../app/components/NewsFeed';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <CustomHead />
      <NewsFeed />
      <CurrencyConverter />
    </div>
  );
}
