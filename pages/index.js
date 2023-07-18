import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>✩ ♱ ✩</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}> 
          Welcome to <a href="https://gothicos.github.io/">Gothic&nbsp;OS</a>!
        </h1>
        <p>Accompany us in this realm of ceaseless darkness.</p>
        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>What is Gothic OS?</h3>
            <p>Gothic OS is a Linux Operating System created especially for people who fancy Goth culture.</p>
          </a>
          <a href="#" className={styles.card}>
            <h3>Download &mdash; Beta</h3>
            <p>Beta release of Gothic OS will be provided shortly.</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://2hexed.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proudly by{' '}
          <p style={{ fontSize: 20, fontWeight: `bold` }}>&nbsp;2hexed</p>
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
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-image: url('/bg.jpg');
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          overflow: hidden;
          padding: 0;
          margin: 0;
        } 
        a:hover {
          color: whitesmoke
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
