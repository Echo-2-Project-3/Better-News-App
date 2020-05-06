var express = require("express");
const passport = require("passport");

var router = express.Router();

var user = require("../../controllers/UserController.js")

router.route("/") // https://ipadress:3000/api/user/
    // .get(user.findAll)
    // .get(user.findByName)
    //.get(user.findOne)
    .post(user.create);

router.route("/get-challenge/:user_id/:challenge_name")
.get(user.findChallenge)

router.route("/:name")
  .get(user.findByName)

  router.use("/login", passport.authenticate("local"));

  router.route("/login")
  .post(user.login)

// router.route('/jeff/chelsea')
// .get(function(req, res) {
//     res.json({
//         message: "You made it to my end point at /api/user/jeff/chelsea"
  //  })
//})
module.exports = router;