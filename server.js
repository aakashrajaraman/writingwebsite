import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 5000;
app.use(cors());
app.get('/data', async (req, res) => {
  console.log('GET request received at /data');
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = response.data;
    res.json(data);
    console.log(data)
    console.log('Data sent');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});



app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


// ...

