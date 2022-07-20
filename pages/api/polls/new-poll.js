import { connectDatabase, insertDocument } from '../../../helpers/db-utils';

async function handler(req, res) {
  let client;
  try {
    client = await connectDatabase();
    console.log("connected to database");
  } catch (error) {
    res.status(500).json({message: "Connection to database failed", error: error});
    return;
  }
  if (req.method === 'POST') {
    const { question, numberOptions, option1, option2 } = req.body;

    const newPoll = {
      question,
      numberOptions,
      option1,
      option2,
    }

    let result;

    try {
      result = await insertDocument(client, 'polls', newPoll);
      newPoll._id = result.insertedId;
      res.status(201).json({message: "Created new poll", newPoll: newPoll})
    } catch (error) {
      res.status(500).json({message: "Inserting new poll into database failed"});
    }
  }
  client.close();
  console.log("database connection closed");
}

export default handler;
