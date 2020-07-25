var express = require("express");
var axios = require("axios");
var request = require("request");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

app.get("/api/check", (req, res) => {
  request(
    "https://jsonplaceholder.typicode.com/todos/1",
    (err, body, response) => {
      //console.log(typeof body.headers.date);
      res.send(body.headers);
    }
  );
});

app.listen(5000, () => {
  console.log("Open for connection");
});
