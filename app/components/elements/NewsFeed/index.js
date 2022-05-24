import styles from './NewsFeed.module.scss';
import { Paper } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';

const NewsFeed = () => {
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
        'X-RapidAPI-Key': 'b37d95749fmsh35d40cd8dacf8e9p1560f4jsn5a6f578e52ac',
      },
    };

    axios
      .request(options)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Paper elevation={3} sx={{ borderRadius: '12px' }}>
      <div className={styles.mainGrid}>
        <h2>News Feed</h2>
        <div className={styles.newsGrid}>
          <a href='' className={styles.newsCardLink}>
            <Paper
              elevation={3}
              sx={{ borderRadius: '12px' }}
              className={styles.newsCard}>
              <h4>Hello</h4>
            </Paper>
          </a>
        </div>
      </div>
    </Paper>
  );
};

export default NewsFeed;
