const express = require('express')
const app = express()

const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/db';

const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();

    console.log('Connected to the database');
    const db = client.db()
    const collection = db.collection("teste")
    const document = {
        "nome": "renato"
    }
    const result = await collection.insertOne(document);
    console.log(`Document with ID: ${result.insertedId}`)
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

connectToDatabase();



app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(3000, ()=>{
})
