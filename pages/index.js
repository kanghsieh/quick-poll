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
      <div className={styles.box}>
        <button>
          <Link href="/polls/new-poll">
            Create new poll
          </Link>
        </button>
        <h3>View an existing poll by entering its ID.</h3>
        <GetPoll allPollIds={allPollIds} />
      </div>
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
