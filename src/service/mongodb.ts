const { MongoClient } = require('mongodb');
const url = 'mongodb://root:root@localhost:27017';
const dbName = 'lecture-3';

export abstract class mongodb {
  
  static sendOne(db_collection: string, data: any) {
    const client = new MongoClient(url);

    async function openDbConn() {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(db_collection);
      const insertResult = await collection.insertOne(data);
    }

    openDbConn()
      .then()
      .catch(console.error)
      .finally(() => client.close());
  }

  static sendMany(db_collection: string, data: any[]) {
    const client = new MongoClient(url);

    console.log(data);

    async function openDbConn() {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(db_collection);
      const insertResult = await collection.insertMany(data);
    }

    openDbConn()
      .then()
      .catch(console.error)
      .finally(() => client.close());
  }

  static find(db_collection: string, data: any) {
    const client = new MongoClient(url);

    console.log(data);

    async function openDbConn() {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(db_collection);
      const findResult = await collection.find(data).toArray();
      return findResult;
    }

    openDbConn()
      .then()
      .catch(console.error)
      .finally(() => client.close());
  }

}