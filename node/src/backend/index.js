const express = require('express')
const app = express()

const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/db';

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

app.use((req, res, next) => {
  req.db = client.db();
  next();
});

app.get("/CRUD", async (req, res) => {
  try {
    const result = await req.db.collection("teste").find().toArray();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/CRUD", async (req, res) => {
  try {
    const result = await req.db.collection("teste").insertOne({ nome: "renato" });
    console.log(`Document with ID: ${result.insertedId}`);
    res.status(201).json({ insertedId: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.patch("/CRUD", async (req, res) => {
  try {
    const result = await req.db.collection("teste").updateOne({ nome: "renato" }, { $set: { nome: "Hioji" } });
    res.json({ updatedCount: result.modifiedCount });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete("/CRUD", async (req, res) => {
  try {
    const result = await req.db.collection("teste").deleteOne({ nome: "Hioji" });
    res.json({ deletedCount: result.deletedCount });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000, async()=>{
  await connectToDB()
})
