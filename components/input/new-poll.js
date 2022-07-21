import { useRef, useState } from 'react';
import styles from './new-poll.module.scss';

function NewPoll(props) {
  const [numberOptions, setNumberOptions] = useState(2);

  const questionInputRef = useRef();
  const optionRefs = useRef([]);

  const increaseNumberOptions = (event) => {
    event.preventDefault();
    if (numberOptions < 20) {
      setNumberOptions(numberOptions + 1);
    }
  }
  const decreaseNumberOptions = (event) => {
    event.preventDefault();
    if (numberOptions > 2) {
      setNumberOptions(numberOptions - 1);
    }
  }

  const createPollHandler = (event) => {
    event.preventDefault();

    const questionInput = questionInputRef.current.value;
    const numberOptionsInput = numberOptions;

    const options = [];
    optionRefs.current.forEach((ref, i) => options.push({id: i+1, text: ref.value}));

    fetch("/api/polls/new-poll", {
      method: 'POST',
      body: JSON.stringify({
        question: questionInput,
        numberOptions: numberOptionsInput,
        options: options,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <form>
      <h1>{numberOptions}</h1>
      <div className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="question">Your question</label>
          <input type="text" id="question" ref={questionInputRef} />
        </div>
        <div>
          <button onClick={increaseNumberOptions}>+</button>
          <button onClick={decreaseNumberOptions}>-</button>
        </div>
        {[...Array(numberOptions).keys()].slice(0).map(n =>
          (<div className={styles.field} key={n+1}>
            <label htmlFor={`option${n+1}`}>option {n+1}</label>
            <input type="text" id={`option${n+1}`} ref={(el) => (optionRefs.current[n] = el)} />
          </div>)
        )}
        <div>
          <input type="submit" value="Create poll" onClick={createPollHandler} />
        </div>
      </div>
    </form>
  )
}

export default NewPoll;
