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

    Object.keys(obj).forEach(function(key) {
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

    let userID = req.query.userID; // User ID of the person adding
    let chosenUserID = req.query.chosenUserID; // User ID of the person selected to get the rating
    let jobID = req.query.jobID; // Job ID that is getting the rating
    let rating = req.query.rating; // Actual rating given between -1 - 1

    if(add){

        var obj = {
            userID : userID ? ObjectID(userID) : null, 
            chosenUserID : chosenUserID ? ObjectID(chosenUserID) : null, 
            jobID :  jobID ? ObjectID(jobID) : null
        }

        Object.keys(obj).forEach(function(key,index) {
            if((obj[key] == null || obj[key] == NaN) && key != "_id"){
                res.send("Missing parameter " + key)
                return;
            }
        });

        MongoClient.connect(uri, function(err, db) {
            if (err) throw err;
            var dbo = db.db("userData");

            dbo.collection("ratings").find(obj).toArray(function(err, result) {
                if (err) throw err;
                var obj2 = {    
                    userID : ObjectID(userID), 
                    chosenUserID : ObjectID(chosenUserID), 
                    jobID : ObjectID(jobID),
                    rating : rating
                }

                if(result.length > 0){
                    dbo.collection("ratings").findOneAndReplace(obj, obj2).then(() => {
                        console.log("replace");
                        res.send(obj2)
                        db.close()
                    }).catch(err => console.error(`Failed to find and replace document: ${err}`))
                } else {
                    dbo.collection("ratings").insertOne(obj2
                        , (err, result) => {
                            if (err) throw err;
                            console.log("added");
                            res.send("Data added successfully")
                            db.close();
                        })
                }
            });
        })
    } 
    else if(fetch){
        obj = {    
            userID : userID ? ObjectID(userID) : null, 
            chosenUserID : chosenUserID ? ObjectID(chosenUserID) : null, 
            jobID :  jobID ? ObjectID(jobID) : null,
            rating : rating
        }

        MongoClient.connect(uri, function(err, db) {
            if (err) throw err;
            var dbo = db.db("userData");


            dbo.collection("ratings").find(createDynamicObj(obj)).toArray(function(err, result) {
                if (err) throw err;
                file = JSON.parse(JSON.stringify(result))
                res.send(file)
                db.close();
              });
        });
    }


});

module.exports = router;
