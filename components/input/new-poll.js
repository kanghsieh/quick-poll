import styles from './new-poll.module.scss';

function NewPoll(props) {
  return (
    <form>
      <div className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="question">Your question</label>
          <input type="text" id="question" />
        </div>
        <div className={styles.field}>
          <label htmlFor="option1">First option</label>
          <input type="text" id="option1" />
        </div>
        <div className={styles.field}>
          <label htmlFor="option2">Second option</label>
          <input type="text" id="option2" />
        </div>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default NewPoll;
