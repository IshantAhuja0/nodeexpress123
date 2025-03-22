const express=require('express')
const app=express();
const stlist=require('./studenlist')

app.get('/getdata',(req,res)=>
{
  res.send({
    status:200,
    message:"helloworld"
  })
})
app.get('/getstudenlist',(req,res)=>
  {
    res.send({
      status:200,
      message:stlist.list
    })
  })
app.listen(8080)