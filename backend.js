const fs = require("fs");
const { parse } = require("csv-parse");
let express = require('express');  
let app = express();  

let foodChart = [];

fs.createReadStream("./FinalFoodData.csv")
.pipe(parse({ delimiter: ",", from_line: 1 }))
.on("data", function (row) {
  foodChart.push(row);
})
.on("end", function () {
  console.log("finished");  
})
.on("error", function (error) {
  console.log(error.message);
});

app.get('/', function (req, res) {  
  res.send(foodChart);
})  

app.get('/:id', function (req, res) {  
  res.send(foodChart[req.params.id-1]);
})  

let server = app.listen(8000, function () {  
    let host = server.address().address  
    let port = server.address().port  
    console.log("Example app listening at http://%s:%s", host, port)  
 })  