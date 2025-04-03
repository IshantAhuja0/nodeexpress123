const stlist=require('../data')
const db=require('../Database/database')
const getStudent=async(req,res)=>
  {
    const database=await db.main();
    const collection = database.collection('student');
    const findResult = await collection.find({}).toArray();
    res.send({
      status:200,
      message:findResult
    })
  }
const postStudent=async(req,res)=>{
      console.log(req.body.Name)
      const database=await db.main();
      const collection = database.collection('student');
      const insertResult = await collection.insertOne(req.body);
      res.send({
        status:200,
        message:insertResult,        
        response:"data saved successfully"
        })
}
const deleteStudent=async(req,res)=>
  {
   // console.log(req.body.Name)
    const database=await db.main();
    const collection = database.collection('student');
    const Result = await collection.deleteOne({first_name:req.query.name});
    if(Result.deletedCount>0)
    {
    res.send({
      status:200,
      message:Result,
      response:"data deleted successfully"
    })
  }
  else
  {
    res.send({
      status:200,
      response:"record not available,please try with diffrent record(first_name)"
    })
  }
  }

  const updateStudent=async(req,res)=>
    {
      console.log(req.body)
      const database=await db.main();
    const collection = database.collection('student');
    const Result = await collection.updateOne({ first_name: req.query.name }, { $set: req.body });
      res.send({
        status:200,
        message:Result,
        response:"data updated successfully"
      })
    }
  module.exports={getStudent,postStudent,deleteStudent,updateStudent}