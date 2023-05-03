import { connect, Schema as _Schema, model } from 'mongoose';
const url =
    "mongodb+srv://rajaramanaakash:Aakash5122@writingcluster.9r7ucj1.mongodb.net/?retryWrites=true&w=majority";
connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.error(err);
});

const Schema = _Schema;
const mySchema = new Schema({
    // Define the schema fields here
    _id: String,
    title: String,
    date: String,
    content: String,
});

export const MyModel = model('Documents.shortstories', mySchema);

