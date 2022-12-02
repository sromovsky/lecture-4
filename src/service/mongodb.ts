const { MongoClient } = require('mongodb');
const url = 'mongodb://root:root@localhost:27017';
const client = new MongoClient(url);
const dbName = 'lecture-3';

export abstract class mongodb {

  static send(db_collection: string, data: any) {
    async function openDbConn() {
      await client.connect();
      console.log('Connected successfully to server');
      const db = client.db(dbName);
      const collection = db.collection(db_collection);

      const insertResult = await collection.insertOne({ a: 1 });
      console.log('Inserted documents =>', insertResult);


      return 'done.';
    }

    openDbConn()
      .then(console.log)
      .catch(console.error)
      .finally(() => client.close());
  }

}