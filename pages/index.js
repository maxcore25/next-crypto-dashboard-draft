import Head from 'next/head';
import NewFeed from '../app/components/NewsFeed';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Dashboard</title>
        <meta
          name='description'
          content='Pet Project "Crypto Dashboard" Using Next.js'
        />
      </Head>
      <NewFeed />
    </div>
  );
}
