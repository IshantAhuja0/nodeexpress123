// imported express to make a backend server. require is used to import
const express=require('express')
const app=express();
const cors=require('cors')
app.use(cors());
const indexRouter=require('./Router/index')
app.use(express.json())

app.use('/',indexRouter)

app.listen(8080,()=>{
  console.log("api is lisntening on port 8080")
})