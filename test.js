import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://aakashatwestview:Aakash5122!@cluster0.jfw6ub0.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function testConnection() {
  try {
    await client.connect();
    console.log('Connected to the MongoDB database successfully');

    const db = client.db('material'); 
    const collection = db.collection('stories'); 

    const documents = await collection.find({}).toArray();
    console.log('Retrieved documents:', documents);

    // Close the connection
    await client.close();
    console.log('Connection closed');
  } catch (error) {
    console.error('Error connecting to the MongoDB database:', error);
  }
}

testConnection();