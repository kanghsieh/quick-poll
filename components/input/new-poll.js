import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './new-poll.module.scss';

function NewPoll(props) {
  const [numberOptions, setNumberOptions] = useState(2);

  const router = useRouter();

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

    const options = [];
    optionRefs.current.forEach((ref, i) => options.push({id: i+1, text: ref.value}));

    fetch("/api/polls/new-poll", {
      method: 'POST',
      body: JSON.stringify({
        question: questionInput,
        options: options,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data && router.push(`/polls/${data.newPoll._id}`);
      });
  }

  return (
    <form>
      <div className={styles.form}>
        <div className={styles.field}>
          {/* <label htmlFor="question">Your question</label> */}
          <input type="text" id="question" placeholder="Your question" ref={questionInputRef} />
        </div>
        <div className={styles.toggler}>
          <button className={styles.btnToggler} onClick={increaseNumberOptions}>+</button>
          <button className={styles.btnToggler} onClick={decreaseNumberOptions}>-</button>
        </div>
        {[...Array(numberOptions).keys()].slice(0).map(n =>
          (<div className={styles.field} key={n+1}>
            {/* <label htmlFor={`option${n+1}`}>option {n+1}</label> */}
            <input type="text" id={`option${n+1}`} placeholder={`Option ${n+1}`} ref={(el) => (optionRefs.current[n] = el)} />
          </div>)
        )}
        <div>
          {/* <input type="submit" value="Create poll" onClick={createPollHandler} /> */}
          <button className={styles.btn} type='submit' onClick={createPollHandler}>Create poll</button>
        </div>
      </div>
    </form>
  )
}

export default NewPoll;
