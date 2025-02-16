// JavaScript Assincrono
// await async
// FullFilled

import { MongoClient } from "mongodb";

const URI = "mongodb+srv://luizfatec2008:tCMb65iO4PqCG4NY@cluster0.g9ywf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0Z";

const client = new MongoClient(URI);

export const db = client.db("spotify");
// const songCollection = await db.collection('songs').find({}).toArray();

// console.log(songCollection);