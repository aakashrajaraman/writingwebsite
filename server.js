import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
const port = 5000;

app.use(cors());

// MongoDB connection URL
const mongoUrl = "mongodb+srv://aakashatwestview:Aakash5122!@cluster0.jfw6ub0.mongodb.net/?retryWrites=true&w=majority";

app.get('/document', async (req, res) => {
  console.log('GET /document');

  try {
    const client = new MongoClient(mongoUrl);
    await client.connect();

    const dbName = "material";
    const collectionName = "stories";

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const documents = await collection.find({}).toArray();
    console.log('Retrieved documents:', documents);

    res.json(documents);

    await client.close();
    console.log('Connection closed');
  } catch (error) {
    console.error('Error connecting to the MongoDB database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
