var express = require("express");
var router = express.Router();
var path = require("path");
var fs = require("fs");

router.get("/api/friends", function(req, res) {
  res.json(router.friendArray);
});

router.post("/api/friends", function(req, res) {
  var newbie = req.body;
  var bestFriend = {};
  var bestCompatibility = 50;
  console.log(router.friendArray);
  for(var i = 0; i < router.friendArray.length; i++)
  {
    var compat = 0;
    for(var j = 0; j < 10; i++)
    {
      compat += Math.abs(router.friendArray[i].scores[j] - newbie.scores[j]);
    }
    if(compat < bestCompatibility)
    {
      bestFriend = router.friendArray[i];
      bestCompatibility = compat;
    }
  }
  res.json(bestFriend);
  router.friendArray.push(newbie);
  console.log(newbie);
  console.log(path.join(__dirname, "../data/friends.js"));
  fs.writeFile(path.join(__dirname, "../data/friends.js"), JSON.stringify(router.friendArray), function(err) {
    if(err) throw err;
  });
});

module.exports = router;
