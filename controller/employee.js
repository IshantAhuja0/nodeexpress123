const stlist=require('../data')
var fs = require('fs');
function writeInFile(req){

  fs.appendFile('EmployeeDataFile.txt',req,(err)=>{
  if(err)console.log(err);
  else console.log("saved data in employee file ")
  })

}
const getEmployee=(req,res)=>
  {
    res.send({
      status:200,
      message:stlist.list
    })
  }
const postEmployee=(req,res)=>{
  const jsonString = JSON.stringify(req.body, null, 12);
  writeInFile(jsonString);
      console.log(req.body.Name)
      res.send({
        status:200,
        message:req.body,
        response:"data saved successfully"
      })
}
const deleteEmployee=(req,res)=>
  {
    console.log(req.body.name)
    res.send({
      status:200,
      message:req.query.id,
      response:"data saved successfully"
    })
  }

  const updateEmployee=(req,res)=>
    {
      console.log(req.body)
      res.send({
        status:200,
        message:req.query.id,
        response:"data saved successfully"
      })
    }
  module.exports={getEmployee,postEmployee,deleteEmployee,updateEmployee}