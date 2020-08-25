var express = require('express');
var router = express.Router();
var fs = require("fs"), json;
var path = require('path');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(path.join(__dirname, "../data/users.json")))
  res.send('respond with a resource');
});

module.exports = router;
