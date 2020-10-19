var express = require('express');
var router = express.Router();
var fs = require("fs"), json;
var path = require('path');
const ObjectID = require('mongodb').ObjectID

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://testuser:1234@communityproject.7gya3.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
});