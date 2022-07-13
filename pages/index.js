import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to Quick Poll
      </h1>
      <h2>Create a simple poll quick and dirty without signups!</h2>
      <button>
        <Link href="/polls/new-poll">
          Create new poll
        </Link>
      </button>
      <button>Retrieve existing poll</button>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
