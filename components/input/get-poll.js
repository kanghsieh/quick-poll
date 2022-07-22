import { useRef } from "react";
import { useRouter } from "next/router";
import styles from "./get-poll.module.scss";

function GetPoll(props) {
  const router = useRouter();
  const { allPollIds } = props;
  const pollIdRef = useRef();

  const submitPollIdHandler = (event) => {
    event.preventDefault();
    const pollIdInput = pollIdRef.current.value;
    if (allPollIds.includes(pollIdInput)) {
      // redirect to poll page
      router.push(`/polls/${pollIdInput}`);
    } else {
      throw new Error("poll id not found");
    }
  }

  return (
    <form onSubmit={submitPollIdHandler}>
      <div className={styles.searchForm}>
        <input className={styles.control}
          type="text"
          name="pollId"
          id="pollId"
          placeholder="Poll ID"
          ref={pollIdRef} />
        {/* <input type="submit" value="Go to poll" /> */}
        <button className={styles.btn} type="submit">Go to poll</button>
      </div>
    </form>
  )
}

export default GetPoll
