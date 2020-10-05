var express = require('express');
var router = express.Router();
var fs = require("fs"), json;
var path = require('path');
const ObjectID = require('mongodb').ObjectID

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

    let fetch = req.query.fetch;
    let add = req.query.add;

    let _id = req.query._id;
    let balance = req.query.balance;
    let picture = req.query.picture;
    let name = req.query.name;
    let email = req.query.email;
    let address = req.query.address;
    let about = req.query.about;

    var obj = {
      _id: ObjectID(_id),
      name: name,
      balance: balance,
      picture: picture,
      email: email,
      address: address,
      about: about
  };

  
  if(fetch){
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
  }

  if(add){
    Object.keys(obj).forEach(function(key,index) {
      if((obj[key] == null || obj[key] == NaN) && key != "_id"){
          res.send("Missing parameter " + key)
          return;
      }
    });

    MongoClient.connect(uri, function(err, db) {
      if (err) throw err;
      var dbo = db.db("userData");

      dbo.collection("users").insertOne(obj
        , (err, result) => {
            if (err) throw err;
            res.send("Added user" + obj.name + "successfully")
            db.close();
        })

    });
  }

  
});

module.exports = router;
