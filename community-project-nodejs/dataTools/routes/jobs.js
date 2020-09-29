var express = require('express');
var router = express.Router();
var path = require('path');
const { finished } = require('stream');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://testuser:1234@communityproject.7gya3.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


function createDynamicObj(obj){
    var newObj = {}

    console.log(obj);

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

  
    let add = req.query.add;
    let fetch = req.query.fetch;
    let replace = req.query.replace;

    let replaceID = req.query.replaceID;
    let userID = req.query.userID;
    let jobID = req.query.jobID;
    let jobStatus = req.query.jobStatus;

    let title = req.query.title;
    let description = req.query.description;
    //Search before

    let price = req.query.price;
    let location = req.query.location;

    // example http://localhost:3200/jobs?add=true&userID=userid233&jobID=jobid23434&jobStatus=0&title=example%20job&description=descExample&price=10&location=North%20Parramatta

    var obj = {
        userID : userID,
        jobID: jobID,
        jobStatus: parseInt(jobStatus),
        title: title,
        description: description,
        price: parseInt(price),
        location: location
    };

    if(add){

        MongoClient.connect(uri, function(err, db) {
            if (err) throw err;
            var dbo = db.db("userData");


            dbo.collection("jobs").insertOne(obj
            , (err, resuly) => {
                if (err) throw err;
                res.send("Data added successfully")
                db.close();
            })
        });
    }

    if(fetch){
        MongoClient.connect(uri, function(err, db) {
            if (err) throw err;
            var dbo = db.db("userData");


            dbo.collection("jobs").find(createDynamicObj(obj)).toArray(function(err, result) {
                if (err) throw err;
                file = JSON.parse(JSON.stringify(result))
                res.send(file)
                db.close();
              });
        });
    }

    if(replace){
        if(replaceID == null){
            res.send("Missing parameter replaceID")
            return;
        }

        Object.keys(obj).forEach(function(key,index) {
            if(obj[key] == null || obj[key] == NaN){
                res.send("Missing parameter " + key)
                return;
            }
        });

        dbo.collection("jobs").findOneAndReplace({replaceID: replaceID}, obj).toArray(function(err, result) {
            if (err) throw err;
            file = JSON.parse(JSON.stringify(result))
            res.send(file)
            db.close();
          });
    }


});

module.exports = router;
