import Link from "next/link";
import { connectDatabase, findDocumentById, filterDocuments } from "../../helpers/db-utils";

function pollShowPage(props) {
  const { poll, results } = props;
  return (
    <div>
      <h1>Poll question: {poll.question}</h1>
      <h2>Share this link to vote and view results.</h2>
      <ul>
        {poll?.options.map(option => (
          <li key={option.id}>
            {option.text}: {results[option.id]} votes
          </li>
        ))}
      </ul>
      <Link href={`/vote/${poll._id}/create-vote`}>
        <button>Submit vote</button>
      </Link>
    </div>
  )
}

// defining a helper function to count occurence of a value in an array
// needed for calculating poll results
const countOccurence = (array, value) => array.reduce((a, v) => (v === value ? a + 1 : a), 0);

export async function getServerSideProps(context) {
  const pollId = context.params.id;
  try {
    const client = await connectDatabase();
    let poll = await findDocumentById(client, 'polls', pollId);
    poll = JSON.parse(JSON.stringify(poll))[0];
    let votes = await filterDocuments(client, 'votes', { pollId: pollId });
    client.close();

    // generating an array containing all chosen options in all votes for this poll
    const voteArray = votes.reduce((previousValue, currentValue) => {
      return previousValue.concat(currentValue.votedOptions)
    }, []);

    // generating an object containing poll results with option ids as keys and number of votes as values
    const results = {};
    poll.options.forEach(option => {
      results[option.id] = countOccurence(voteArray, option.id)
    });

    return {
      props: {
        poll: poll,
        results: results,
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
