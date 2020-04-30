var express = require("express");

var router = express.Router();

var user = require("../../controllers/UserController.js")

router.route("/") // https://ipadress:3000/api/user/
    .get(user.findAll)
    //.get(user.findOne)
    .post(user.create);

// router.route('/jeff/chelsea')
// .get(function(req, res) {
//     res.json({
//         message: "You made it to my end point at /api/user/jeff/chelsea"
  //  })
//})
module.exports = router;