const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
let alert = require("alert");
require("./db/config");

const Contact = require("./db/Contact");
const app = express();
app.use(express.json());
// Middleware to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/privacy-policy", (req, res) => {
  res.sendFile(__dirname + "/public/privacy.html");
});

app.post("/submit", async (req, res) => {
  let data = new Contact(req.body);
  let result = await data.save();
  result = result.toObject();
  res.redirect("/");
  alert("Our team will contact you shortly");
});
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}
app.listen(port, function () {
  console.log(`Server started successfully ${port}`);
});

// pass : x1eNxheWDOB487oI
// id : ganeshglobalsolution
