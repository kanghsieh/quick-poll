import { useRef } from 'react';
import styles from './new-vote.module.scss';

function NewVote(props) {
  const { poll } = props;

  const option1SelectRef = useRef();
  const option2SelectRef = useRef();

  const submitVoteHandler = (event) => {
    event.preventDefault();

    let votedOptions = [];
    option1SelectRef.current.checked && votedOptions.push(option1SelectRef.current.id);
    option2SelectRef.current.checked && votedOptions.push(option2SelectRef.current.id);
    // console.log(votedOptions);

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
        <div>
          <input type="checkbox" id="option1" name="option1" value="option1" ref={option1SelectRef} />
          <label htmlFor="option1">{poll.option1}</label>
        </div>
        <div>
          <input type="checkbox" id="option2" name="option2" value="option2" ref={option2SelectRef} />
          <label htmlFor="option2">{poll.option2}</label>
        </div>
        <div>
          <input type="submit" value="Submit vote" />
        </div>
      </div>
    </form>
  )
}

export default NewVote;
