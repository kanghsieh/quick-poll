import { useRef } from 'react';
import styles from './new-vote.module.scss';

function NewVote(props) {
  const { poll } = props;

  const optionSelectRefs = useRef([]);

  const submitVoteHandler = (event) => {
    event.preventDefault();

    let votedOptions = [];
    votedOptions = optionSelectRefs.current
      .filter(ref => ref.checked)
      .map(el => parseInt(el.id, 10));

    fetch("/api/votes/new-vote", {
      method: "POST",
      body: JSON.stringify({
        pollId: poll._id,
        votedOptions: votedOptions,
      }),
      header: {
        "Content-Type": "application/json",
      }
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <form onSubmit={submitVoteHandler}>
      <div className={styles.form}>
        {poll.options.map(option => (
          <div key={option.id}>
            <input
              type="checkbox"
              name={`option${option.id}`}
              id={option.id}
              ref={(el) => (optionSelectRefs.current[option.id - 1] = el)} />
            <label htmlFor={`option${option.id}`}>{option.text}</label>
          </div>
        ))}
        <div>
          <input type="submit" value="Submit vote" />
        </div>
      </div>
    </form>
  )
}

export default NewVote;
