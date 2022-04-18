// const express = require('express');
// const port = process.env.port || 5000;
// const app = express();
// const bodyParser = require('body-parser');

// // support parsing of application/json type post data
// app.use(bodyParser.json());

// //support parsing of application/x-www-form-urlencoded post data
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.json()); // this is to accept data in json format

// app.use(express.urlencoded()) //decode the data send through html form

// app.use(express.static('public'))

// app.get('/form', (req,res) => {


//     res.sendFile(__dirname + '/public/index.html')
// })

// app.post('formPost',(req,res) => {
//     console.log(req.body); // the data we get is in the body of the request
// })

// app.listen(port, () => {
//     console.log(`server started at ${port}`)
// })
require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.DB_PORT;

app.use(express.static("./views"));
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});