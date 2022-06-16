import styles from './NewsFeedBlock.module.scss';
import { Button, Paper } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import NewsCard from '../../elements/NewsCard';
import { motion } from 'framer-motion';
import { scaleAnimationVariants } from '../../../utils/animationVariants';

const NewsFeedBlock = () => {
  const [articles, setArticles] = useState();
  const [isClicked, setIsClicked] = useState(false);

  const getNews = () => {
    setIsClicked(!isClicked);
    axios.get('/api/crypto-news').then(response => {
      console.log('NewsFeed api:', response.data);
      setArticles(response.data.slice(0, 7));
    });
  };

  return (
    <motion.div
      variants={scaleAnimationVariants}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 1.5,
      }}>
      <Paper
        className={styles.muiPaper}
        elevation={3}
        sx={{ borderRadius: '12px' }}>
        <div className={styles.mainGrid}>
          <h2 className={styles.title}>News Feed</h2>
          {isClicked ? (
            <div className={styles.newsGrid}>
              {articles?.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}
            </div>
          ) : (
            <div className={styles.buttonGrid}>
              <Button
                className={styles.muiButton}
                onClick={() => getNews()}
                variant='contained'>
                Get News
              </Button>
            </div>
          )}
        </div>
      </Paper>
    </motion.div>
  );
};

export default NewsFeedBlock;
