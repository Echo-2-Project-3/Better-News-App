var express = require("express");
var unirest = require("unirest");
var router = express.Router();

router.route("/").get(function (req, res) {
  console.log("I made it");

  var request = unirest("GET", "https://doppelme-avatars.p.rapidapi.com/assets/1101/eye");
  request.headers({
    "x-rapidapi-host": "doppelme-avatars.p.rapidapi.com",
    "x-rapidapi-key": "dcb9caf21amsha9336412d958d3fp198f71jsncc4a36fcfbe7",
  });
  request.end(function (response) {
    if (response.error) throw new Error(response.error);
    
    res.json(response.body);
    // console.log(response.body);
  });

  
});

module.exports = router;
