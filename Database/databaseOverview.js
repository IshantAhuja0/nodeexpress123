const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
//make a object of class MongoClient(provided by mongodb) and pass url to connect
const client = new MongoClient(url);
const dbName = 'students';
async function main() {
//this client or MongoClient provides function to connect to database
  await client.connect();
  console.log('Connected successfully to server');
  //we have to pass name of database in order to connect with it
  const db = client.db(dbName);
  //we have created a object named db throught which we can control our whole database and perform CRUD operations
  //we have returned this object so it can be used in any file to manipulate database
 return db;
}

module.exports={main}

//CRUD operations to be performed on other files according to use

//as the object from this file returns promise ,we have to use async - await 
    const database=await db.main();
    //we pass the of table ,in mongo its called collection
    const collection = database.collection('student');
    //this is a specific querry to retrive data form db
    //in this variable we now have final result array,we can return it in response or use it somewhere else.
    const findResult = await collection.find({}).toArray();
    //in this insert function we passed the body of request as data from user is recieved through this request
    const insertResult = await collection.insertOne(req.body);
    //we generally recieve delete from query directly so we have to sent req.query.name to match with attribute named first_name in database.
    const deleteResult = await collection.deleteOne({first_name:req.query.name});

    const updateResult = await collection.updateOne({ first_name: req.query.name }, { $set: req.body });

