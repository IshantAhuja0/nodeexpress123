// imported express to make a backend server. require is used to import
const express=require('express')
const app=express();
const cors=require('cors')
const path = require('path');
const swaggerUi = require("swagger-ui-express");
const  swaggerDoc = require("./swagger");
app.use(cors());
const indexRouter=require('./Router/index')
app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/gethome', (req, res) => {
  res.render('index', { userName: 'John Doe' });
});
app.use('/',indexRouter)


app.listen(8080,()=>{
  console.log("api is lisntening on port 8080")
})