```javascript
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydb');
    const collection = database.collection('mycollection');

    // Find one document
    const query = { name: 'John Doe' };
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