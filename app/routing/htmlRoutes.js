var path = require("path");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  console.log(path.join(__dirname, "../public/home.html"));
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router;
