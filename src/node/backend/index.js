const express = require('express')
const app = express()

const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/pi-pais';

const client = new MongoClient(uri);

app.get("/", (req, res) => {
    res.send("Hello World")
})


async function connectToDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  }
}

app.use(express.json());

app.listen(3000)
