const router = require('express').Router();
const userRoutes = require('./user');
const challengeRoutes = require('./challenges');
const singleChallenge = require('./challenge.js');

const path = require('path');

router.use("/user", userRoutes);
router.use("/challenges", challengeRoutes);
router.use("/challenge", singleChallenge);
//router.use("/avatar", avatar)

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
})

module.exports = router;


// https://ipadress:3000/api/user/