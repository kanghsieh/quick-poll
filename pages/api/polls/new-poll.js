async function handler(req, res) {
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
}

export default handler;
