var express = require('express');
var router = express.Router();
var fs = require("fs"), json;
var path = require('path');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://testuser:1234@communityproject.7gya3.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

function createDynamicObj(obj){
  var newObj = {}

  Object.keys(obj).forEach(function(key,index) {
      if(obj[key]){
          newObj[key] = obj[key]
      }
  });

  return newObj;
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');

    let _id = req.query._id;
    let balance = req.query.balance;
    let picture = req.query.picture;
    let name = req.query.name;
    let email = req.query.email;
    let address = req.query.address;
    let about = req.query.about;
    let registered = req.query.registered;

    var obj = {
      _id: _id,
      name: name,
      balance: parseInt(balance),
      picture: picture,
      email: email,
      address: address,
      about: about,
      registered : registered
  };

  

  MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    var dbo = db.db("userData");

    dbo.collection("users").find(createDynamicObj(obj)).toArray(function(err, result) {
      if (err) throw err;
      file = JSON.parse(JSON.stringify(result))
      res.send(file)
      db.close();
    });

  });

  //res.send('respond with a resource');
});

module.exports = router;
