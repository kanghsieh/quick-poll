import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quick Poll</title>
        <meta name="description" content="Generate a quick poll with friends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Quick Poll
        </h1>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
