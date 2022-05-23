import CurrencyConverter from '../app/components/CurrencyConverter';
import CustomHead from '../app/components/CustomHead';
import NewsFeed from '../app/components/NewsFeed';

export default function Home() {
  return (
    <>
      <CustomHead />
      <CurrencyConverter />
      <NewsFeed />
    </>
  );
}
