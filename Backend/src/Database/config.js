const mongoose = require('mongoose');

let connection = mongoose.connect("mongodb+srv://nihas:1234@cluster0.sg7moq4.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(connection => {
    console.log("Mongo Db Connected Successfully");
  }).catch(error => {
    console.log(error.message);
  }).catch(err => {
    console.log(err.message);
  })