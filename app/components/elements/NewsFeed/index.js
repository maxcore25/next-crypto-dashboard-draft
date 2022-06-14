import styles from './NewsFeed.module.scss';
import { Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

const NewsFeed = () => {
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
            <a key={index} href={article.url} className={styles.newsCardLink}>
              <Paper
                elevation={3}
                sx={{ borderRadius: '12px' }}
                className={styles.newsCard}>
                <h4 className={styles.cardTitle}>{article.title}</h4>
              </Paper>
            </a>
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default NewsFeed;
