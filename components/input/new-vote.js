import { useRef } from 'react';
import { useRouter } from "next/router";
import styles from './new-vote.module.scss';

function NewVote(props) {
  const { poll } = props;
  const router = useRouter();

  const nameInputRef = useRef();
  const optionSelectRefs = useRef([]);

  const submitVoteHandler = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    let votedOptions = [];
    votedOptions = optionSelectRefs.current
      .filter(ref => ref.checked)
      .map(el => parseInt(el.id, 10));

    fetch("/api/votes/new-vote", {
      method: "POST",
      body: JSON.stringify({
        pollId: poll._id,
        name: name,
        votedOptions: votedOptions,
      }),
      header: {
        "Content-Type": "application/json",
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data && router.push(`/polls/${poll._id}`);
      });
  }

  return (
    <form onSubmit={submitVoteHandler}>
      <div className={styles.form}>
        <div>
          {/* <label htmlFor="name">Name</label> */}
          <input type="text" name="name" id="name" placeholder="Name" ref={nameInputRef} />
        </div>
        {poll.options.map(option => (
          <div className={styles.option} key={option.id}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name={`option${option.id}`}
              id={option.id}
              ref={(el) => (optionSelectRefs.current[option.id - 1] = el)} />
            <label className={styles.label} htmlFor={`option${option.id}`}>{option.text}</label>
          </div>
        ))}
        <div>
          {/* <input type="submit" value="Submit vote" /> */}
          <button className={styles.btn} type='submit'>Submit vote</button>
        </div>
      </div>
    </form>
  )
}

export default NewVote;
