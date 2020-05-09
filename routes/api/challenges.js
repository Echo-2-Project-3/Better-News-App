var express = require("express");


var router = express.Router();

var challenge = require("../../controllers/ChallengeController.js")

router.route("/") // https://ipadress:3000/api/challenge/
    .get(challenge.findAll)
    // .get(challenge.findByName)
    //.get(challenge.findOne)
    .post(challenge.create);

router.route("/:challenge_name")
  .get(challenge.findByName)

router.route("/subscribe-to/:challenge_id/user/:user_id")
  .post(challenge.subscribeToUser)

router.route("/users/:challenge_id")
  .get(challenge.findAllUsersByChallengeID)




// router.route('/optimism_challenge')
// .get(function(req, res) {
//     res.json({
//         message: "You made it to my end point at /api/challenges/:challenge_name"
  //  })
//})
module.exports = router;