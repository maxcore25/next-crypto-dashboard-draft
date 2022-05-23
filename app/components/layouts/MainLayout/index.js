import CustomHead from '../../elements/CustomHead';
import NewsFeed from '../../elements/NewsFeed';
import CurrencyConverter from '../../elements/CurrencyConverter';

const MainLayout = () => {
  return (
    <>
      <CustomHead />
      <CurrencyConverter />
      <NewsFeed />
    </>
  );
};

export default MainLayout;
