import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3000;

app.get('/document', (req, res) => {
  const mongoUrl = "mongodb+srv://aakashatwestview:Aakash5122!@cluster0.jfw6ub0.mongodb.net/?retryWrites=true&w=majority";
  const dbName = "material";
  const collectionName = "stories";

  MongoClient.connect(mongoUrl, (err, client) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    collection.find({}).toArray((err, documents) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      res.json(documents);
      client.close();
    });
  });
});


app.use(cors());


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
