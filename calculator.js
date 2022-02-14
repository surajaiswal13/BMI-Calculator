const express = require("express");
const bodyParser = require("body-parser")

const app = express();

// Now we specify the package to use with express
app.use(bodyParser.urlencoded({extended: true}))

// methods of body parser
//   .text, .json, .urlencoded

app.get("/", function(req, res) {
  // res.sendFile(__dirname + "/index.html")
  res.send('please go to <a href="/bmiCalculator">BMI Calculator</a>')
})

// app.post("/", function(req, res) {
//   console.log("Yoo")
//   console.log(req.body)
//   var num1 = Number(req.body.num1)
//   var num2 = Number(req.body.num2)
//
//   var result = num1 + num2;
//
//   res.send("The result is " + result)
// })

// BMI Calculator

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator", function(req, res) {
  var weight = parseFloat(req.body.weight)
  var height = parseFloat(req.body.height)

  var result = weight / (height * height)

  res.send("Your BMI is " + result)
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
