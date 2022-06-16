import styles from './NewsCard.module.scss';
import { Paper } from '@mui/material';
import { motion } from 'framer-motion';
import {
  listVariants,
  scaleAnimationVariants,
} from '../../../utils/animationVariants';

const NewsCard = ({ article, index }) => {
  return (
    <motion.a
      href={article.url}
      className={styles.newsCardLink}
      whileHover={{ scale: 1.02 }}
      variants={scaleAnimationVariants}
      initial='hidden'
      animate='visible'>
      <Paper
        elevation={3}
        sx={{ borderRadius: '12px' }}
        className={styles.newsCard}>
        <h4 className={styles.cardTitle}>{article.title}</h4>
      </Paper>
    </motion.a>
  );
};

export default NewsCard;
