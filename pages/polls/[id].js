function pollShowPage(props) {
  const { id } = props;

  return (
    <div>
      <h1>Poll ID: {id}</h1>
    </div>
  )
}

export async function getServerSideProps(context) {
  const pollId = context.params.id;

  return {
    props: {
      id: pollId,
    }
  }
}

export default pollShowPage;
