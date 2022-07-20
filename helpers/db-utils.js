import { MongoClient } from "mongodb";

const mongodb_uri = process.env.MONGO_DB_URI;
const options = {};
let client;

export async function connectDatabase() {
  if (!mongodb_uri) {
    throw new Error('Please add your Mongo URI to .env.local');
  }
  const client = await MongoClient.connect(mongodb_uri);

  return client;
}
