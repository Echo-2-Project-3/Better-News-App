var express = require("express");
var router = express.Router();

var BenchmarkController = require("../../controllers/BenchmarkController"); 
router.route("/")
.get(BenchmarkController.findAll)
.post(BenchmarkController.create)

router.route("/challenges/:challengeId/")


module.exports = router;