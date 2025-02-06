```javascript
const { MongoClient } = require('mongodb');

const uri = "<YOUR_MONGODB_URI>"; // Replace with your MongoDB connection string

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydb');
    const collection = database.collection('mycollection');

    // Corrected query: uses the same data types and handles case-sensitivity
    const query = { name: { $regex: '^John Doe$', $options: 'i' } }; //Example using regex for case-insensitivity
    const result = await collection.findOne(query);

    if (!result) {
      console.log('Document not found');
    } else {
      console.log('Document found:', result);
    }
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```