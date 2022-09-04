import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI =
  process.env.NODE_ENV === 'test'
    ? 'mongodb://localhost:2717/todo-api'
    : (process.env.MONGO_URI as string);

console.log('MONGO', MONGO_URI);
export const client = new MongoClient(MONGO_URI);
export const db = client.db();
