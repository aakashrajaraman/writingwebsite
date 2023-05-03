import express from 'express';
import cors from 'cors';
import { MyModel } from '../db/db.js';

const app = express();

app.use(cors());

app.get('/api/data', async (req, res) => {
  try {
    const data = await MyModel.find({});
    res.json(data);
    console.log("hello");
    console.log(data)
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));