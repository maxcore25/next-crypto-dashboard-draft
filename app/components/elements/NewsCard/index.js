import styles from './NewsCard.module.scss';
import { Paper } from '@mui/material';

const NewsCard = ({ article }) => {
  return (
    <a href={article.url} className={styles.newsCardLink}>
      <Paper
        elevation={3}
        sx={{ borderRadius: '12px' }}
        className={styles.newsCard}>
        <h4 className={styles.cardTitle}>{article.title}</h4>
      </Paper>
    </a>
  );
};

export default NewsCard;
