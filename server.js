var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var fs = require("fs");

var PORT = 8080;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

//read in the friends file. There may be a better way to handle it, but using friends.js as a json literal store is a passable shortcut to permanently store the data
var friendArray;
fs.readFile(path.join(__dirname, "./app/data/friends.js"), "utf8", function(err, data) {
  if(err) throw err;
  else
  {
    friendArray = JSON.parse(data);
    apiRoutes.friendArray = friendArray;
  }
});

//initialize API routes on the app, and set them up to write to the friends.js file
app.use("/", apiRoutes);

//initialize HTML routes
app.use("/", htmlRoutes);

//start the server listening
app.listen(PORT, function() {
  console.log("server listening on " + PORT);
});
