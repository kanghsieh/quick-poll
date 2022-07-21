import styles from './new-vote.module.scss';

function NewVote(props) {
  const { poll } = props;
  return (
    <form>
      <div className={styles.form}>
        <div>
          <input type="checkbox" id="option1" name="option1" />
          <label htmlFor="option1">{poll.option1}</label>
        </div>
        <div>
          <input type="checkbox" id="option2" name="option2" />
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
