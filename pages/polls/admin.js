import Link from "next/link";
import { connectDatabase, getAllDocuments } from "../../helpers/db-utils";

function PollsAdminView(props) {
  const { allPolls } = props;
  // console.log(allPolls);
  return (
    <ul>
      {allPolls.map(poll => (
          <li key={poll._id}>
            <Link href={`/polls/${poll._id}`}>
              {poll.question}
            </Link>
          </li>
      ) )}
    </ul>
  )
}

export async function getServerSideProps(context) {
  const client = await connectDatabase();
  const allPolls = await getAllDocuments(client, 'polls');
  return {
    props: {
      allPolls: JSON.parse(JSON.stringify(allPolls)),
    }
  }
}

export default PollsAdminView;
