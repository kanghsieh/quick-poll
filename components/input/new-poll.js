import { useRef, useState } from 'react';
import styles from './new-poll.module.scss';

function NewPoll(props) {

  const questionInputRef = useRef();
  const numberOptionsInputRef = useRef();
  const option1InputRef = useRef();
  const option2InputRef = useRef();

  const createPollHandler = (event) => {
    event.preventDefault();

    const questionInput = questionInputRef.current.value;
    const numberOptionsInput = numberOptionsInputRef.current.value;
    const option1Input = option1InputRef.current.value;
    const option2Input = option2InputRef.current.value;

    fetch("/api/polls/new-poll", {
      method: 'POST',
      body: JSON.stringify({
        question: questionInput,
        numberOptions: numberOptionsInput,
        option1: option1Input,
        option2: option2Input,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <form onSubmit={createPollHandler}>
      <div className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="question">Your question</label>
          <input type="text" id="question" ref={questionInputRef} />
        </div>
        <div>
          <label htmlFor="numberOptions">Add option</label>
          <input type="number" id="numberOptions" ref={numberOptionsInputRef} />
        </div>
        <div className={styles.field}>
          <label htmlFor="option1">First option</label>
          <input type="text" id="option1" ref={option1InputRef} />
        </div>
        <div className={styles.field}>
          <label htmlFor="option2">Second option</label>
          <input type="text" id="option2" ref={option2InputRef} />
        </div>
        <div>
          <input type="submit" value="Create poll" />
        </div>
      </div>
    </form>
  )
}

export default NewPoll;
