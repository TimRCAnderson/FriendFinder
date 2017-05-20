var express = require("express");
var router = express.Router();
var fs = require("fs");

router.get("/api/friends", function(req, res) {
  res.json(router.friendArray);
});

router.post("/api/friends", function(req, res) {
  friendArray.push(req.body);
  console.log(req.body);
  console.log(path.join(__dirname, "../data/friends.js"));
  fs.writeFile(path.join(__dirname, "../data/friends.js"), JSON.stringify(friendArray), function(err) {
    if(err) throw err;
  });
});

module.exports = router;
