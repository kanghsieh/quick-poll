import { MongoClient, ObjectId } from "mongodb";

const mongodb_uri = process.env.MONGO_DB_URI;
const mongodb_db = process.env.MONGO_DB_DB;
const options = {};

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

export async function getAllDocuments(client, collection) {
  const db = await client.db(mongodb_db);

  const documents = await db.collection(collection).find().toArray();

  return documents;
}

export async function findDocumentById(client, collection, id) {
  const db = await client.db(mongodb_db);

  const document = await db.collection(collection).find( { _id: ObjectId(id) } ).toArray();

  return document;
}
