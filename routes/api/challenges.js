var express = require("express");


var router = express.Router();

var challenge = require("../../controllers/ChallengeController.js")

router.route("/") // https://ipadress:3000/api/challenge/
    .get(challenge.findAll)
    // .get(challenge.findByName)
    //.get(challenge.findOne)
    .post(challenge.create);

router.route("/:challenge_name/user/:user_id")
  .get(challenge.findByName)
  .post(challenge.subscribeToUser)



// router.route('/optimism_challenge')
// .get(function(req, res) {
//     res.json({
//         message: "You made it to my end point at /api/challenges/:challenge_name"
  //  })
//})
module.exports = router;