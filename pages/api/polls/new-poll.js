import { connectDatabase } from '../../../helpers/db-utils';

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
    res.status(201).json({ message: "New poll form works", newPoll: newPoll });
  }
  client.close();
  console.log("database connection closed");
}

export default handler;
