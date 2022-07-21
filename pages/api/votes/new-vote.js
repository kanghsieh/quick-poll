import { connectDatabase, insertDocument } from "../../../helpers/db-utils";

async function handler(req, res) {
  let client;

  try {
    client = await connectDatabase();
    console.log("connected to database");
  } catch (error) {
    res.status(500).json({message: "connection to database failed", error: error});
    return;
  }

  if (req.method === "POST") {
    const { pollId, name, votedOptions } = JSON.parse(req.body);

    const newVote = {
      pollId,
      name,
      votedOptions,
    };
    // console.log("newVote FROM HANDLER", newVote);

    let result;

    try {
      result = await insertDocument(client, 'votes', newVote);
      newVote._id = result.insertedId;
      res.status(201).json({message: "Submitted new vote", newVote: newVote});
    } catch (error) {
      res.status(500).json({message: "Insertion of new vote into database failed", error: error});
    }
  }

  client.close();
  console.log("database connection closed");
}

export default handler;
