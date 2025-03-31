const stlist=require('../data')
const getStudent=(req,res)=>
  {
    res.send({
      status:200,
      message:stlist.list
    })
  }
const postStudent=(req,res)=>{
      console.log(req.body.Name)
      res.send({
        status:200,
        message:reqbody,        
        response:"data saved successfully"
        })
}
const deleteStudent=(req,res)=>
  {
    console.log(req.body.Name)
    res.send({
      status:200,
      message:req.query.id,
      response:"data saved successfully"
    })
  }

  const updateStudent=(req,res)=>
    {
      console.log(req.body)
      res.send({
        status:200,
        message:req.query.id,
        response:"data saved successfully"
      })
    }
  module.exports={getStudent,postStudent,deleteStudent,updateStudent}