import styles from './NewsFeedBlock.module.scss';
import { Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../../elements/NewsCard';

const NewsFeedBlock = () => {
  const [articles, setArticles] = useState();

  // useEffect(() => {
  //   axios.get('/api/crypto-news').then(response => {
  //     console.log('NewsFeed api:', response.data);
  //     setArticles(response.data.slice(0, 7));
  //   });
  // }, []);

  return (
    <Paper
      className={styles.muiPaper}
      elevation={3}
      sx={{ borderRadius: '12px' }}>
      <div className={styles.mainGrid}>
        <h2 className={styles.title}>News Feed</h2>
        <div className={styles.newsGrid}>
          {articles?.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default NewsFeedBlock;
