var express = require('express');
var router = express.Router();
var fs = require("fs"), json;
var path = require('path');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
// Load User model
const User = require("../models/User");

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
      _id: _id,
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


// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {

  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
      return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
          return res.status(400).json({ email: "Email already exists" });
      } else {
          const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
          });
          // Hash password before saving in database
          bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                  .save()
                  .then(user => res.json(user))
                  .catch(err => console.log(err));
              });
          });
      }
  });
});


// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {

  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
  return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
          return res.status(404).json({ emailnotfound: "Email not found" });
      }
      // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
          if (isMatch) {
              // User matched
              // Create JWT Payload
              const payload = {
                  id: user.id,
                  name: user.name
              };
              // Sign token
              jwt.sign(
                  payload,
                  keys.secretOrKey,
                  {
                  expiresIn: 31556926 // 1 year in seconds
                  },
                  (err, token) => {
                      res.json({
                          success: true,
                          token: "Bearer " + token
                      });
                  }
              );
          } else {
              return res
                  .status(400)
                  .json({ passwordincorrect: "Password incorrect" });
          }
      });
  });
});

module.exports = router;
