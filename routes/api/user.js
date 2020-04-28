var express = require("express");

var router = express.Router();

var user = require("../../controllers/UserController.js")

router.route("/")
    .get(user.findAll);

module.exports = router;