import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AR PhotoCard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to AR PhotoCard
        </h1>

        <p className={styles.description}>
          reviving your photo card to the next level
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Creator &rarr;</h3>
            <p>Let's create the next level photocard</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Viewer &rarr;</h3>
            <p>Get ready to bring your photo to life</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
