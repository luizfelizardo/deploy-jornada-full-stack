// JavaScript Assincrono
// await async
// FullFilled

import { MongoClient } from "mongodb";

const URI = "mongodb+srv:// "; //chave mongodb

const client = new MongoClient(URI);

export const db = client.db("spotify");
// const songCollection = await db.collection('songs').find({}).toArray();

// console.log(songCollection);
