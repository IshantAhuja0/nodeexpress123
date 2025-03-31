var fs = require('fs');
// var http = require('http');
// http.createServer(function (req, res){
//   fs.readFile('demo1.json', function(err, data) {
//   //  res.writeHead(200, {'Content-Type': 'text/json'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);
function showfile()
{
  fs.writeFile('mynewfile3.txt', 'Hello content ishan!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

function update()
{
  fs.appendFile('mynewfile3.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
}
// showfile();
update();