import { Paper } from '@mui/material';
import styles from './NewsFeed.module.scss';

const NewsFeed = () => {
  return (
    <Paper elevation={3} sx={{ borderRadius: '12px' }}>
      <div className={styles.mainGrid}>
        <h2>News Feed</h2>
        <div className={styles.newsGrid}>
          <Paper
            elevation={3}
            sx={{ borderRadius: '12px' }}
            className={styles.newsCard}>
            <h4>Hello</h4>
          </Paper>
        </div>
      </div>
    </Paper>
  );
};

export default NewsFeed;
