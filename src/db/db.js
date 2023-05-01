import { MongoClient } from 'mongodb';
const url = "mongodb+srv://rajaramanaakash:Aakash5122@writingcluster.9r7ucj1.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });