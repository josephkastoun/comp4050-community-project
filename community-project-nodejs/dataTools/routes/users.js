var express = require('express');
var router = express.Router();
var fs = require("fs"), json;
var path = require('path');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://testuser:1234@communityproject.7gya3.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


/* GET users listing. */
router.get('/', function(req, res, next) {

  MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    var dbo = db.db("userData");
    dbo.collection("users").find({}).toArray(function(err, result) {
      if (err) throw err;
      file = JSON.parse(JSON.stringify(result))
      res.send(file)
      db.close();
    });

  });

  //res.send('respond with a resource');
});

module.exports = router;
