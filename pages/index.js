import Link from "next/link";
import { connectDatabase, getAllDocuments } from "../helpers/db-utils";
import styles from '../styles/Home.module.scss'
import GetPoll from "../components/input/get-poll";

export default function Home(props) {
  const { allPollIds } = props;
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
      <GetPoll allPollIds={allPollIds} />
      <button>Retrieve existing poll</button>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const client = await connectDatabase();
  const allPolls = await getAllDocuments(client, 'polls');
  return {
    props: {
      allPollIds: JSON.parse(JSON.stringify(allPolls.map(poll => poll._id))),
    }
  }
}
