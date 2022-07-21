import { connectDatabase, findDocumentById } from "../../helpers/db-utils";

function pollShowPage(props) {
  const { poll } = props;
  return (
    <div>
      <h1>Poll question: {poll.question}</h1>
      <h2>Poll ID: {poll._id}</h2>
      <ul>
        {poll.options.map(option => (
          <li key={option.id}>{option.text}</li>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps(context) {
  const pollId = context.params.id;
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

export default pollShowPage;
