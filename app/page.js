import Head from 'next/head';
import styles from './page.module.css';
import Search from '../components/Search/Search.jsx';
import '../styles/global.css';
import Footer from '../components/Footer/Footer.jsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sirakukal Amaiyam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          <a href="https://www.sirakukal.live/">Sirakukal Amaiyam</a>
        </h1>
        <h2>Volunteer Database</h2>

        <p className={styles.description}>
          Search our database for volunteer details.
        </p>
        
        <Search />

        <Footer />
      </main>
    </div>
  );
}
