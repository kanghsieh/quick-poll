import { connectDatabase, findDocumentById } from "../../../helpers/db-utils";
import NewVote from "../../../components/input/new-vote";

function CreateVote(props) {
  const { poll } = props;
  return (
    <div>
      <h1>Vote for poll ID {poll.id}</h1>
      <h2>Question: {poll.question}</h2>
      <NewVote poll={poll} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const pollId = context.params.pId;
  try {
    const client = await connectDatabase();
    const poll = await findDocumentById(client, 'polls', pollId);
    client.close();
    return {
      props: {
        poll: JSON.parse(JSON.stringify(poll))[0],
      }
    }
  } catch (error) {
    // throw new Error("Poll id invalid");
    return {
      props: {
        poll: { question: "poll id invalid"},
      }
    }
  }
}

export default CreateVote;
