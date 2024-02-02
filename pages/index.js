import Head from 'next/head';
import styles from '../components/styles/Home.module.css';
import Searchbar from '../components/Searchbar.js';
import { useState } from 'react';
import react from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    // You can perform your search logic here using the entered term
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Sirakukal Amaiyam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.sirakukal.live/">Sirakukal Amaiyam</a>
        </h1>

        <p className={styles.description}>
        Welcome to our Volunteer Database! To initiate the registration process and identify your volunteer ID.
        </p>
       
       <div>
        <Searchbar onSearch={handleSearch} />
       </div>

       <div>
          <h2>Search Results</h2>
          <p>{searchTerm ? `Showing results for: ${searchTerm}` : 'No search term entered'}</p>
        </div>
        
      </main>

      <footer>
        <a
          href="https://menakanvijayanathan.blogspot.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by{' '} 𝔇𝔢𝔱𝔞𝔠𝔥
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
