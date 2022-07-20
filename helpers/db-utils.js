import { MongoClient } from "mongodb";

const mongodb_uri = process.env.MONGO_DB_URI;
const mongodb_db = process.env.MONGO_DB_DB;
const options = {};
let client;

export async function connectDatabase() {
  if (!mongodb_uri) {
    throw new Error('Please add your Mongo URI to .env.local');
  }
  const client = await MongoClient.connect(mongodb_uri, options);

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = await client.db(mongodb_db);
  const result = await db.collection(collection).insertOne(document);
  return result;
}
