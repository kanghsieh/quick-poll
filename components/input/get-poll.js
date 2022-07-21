import { useRef } from "react";
import { useRouter } from "next/router";

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
      <label htmlFor="pollId">Poll ID</label>
      <input type="text" name="pollId" id="pollId" ref={pollIdRef} />
      <input type="submit" value="Go to poll" />
    </form>
  )
}

export default GetPoll
