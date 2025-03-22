const st=require('./app')
const list=require('./list')
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, false);
console.log(q); 

