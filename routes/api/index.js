const router = require('express').Router();
const userRoutes = require('./user');
const challengeRoutes = require('./challenges');
const singleChallenge = require('./challenge.js');
const subscribedToRoutes = require("./subscribedTo");
const postRoutes = require("./post");
const benchmarkRoutes = require("./benchmark");

const path = require('path');

router.use("/user", userRoutes);
router.use("/challenges", challengeRoutes);
router.use("/challenge", singleChallenge);
router.use("/subscribed-to", subscribedToRoutes);
router.use("/posts", postRoutes);
router.use("/bnenchmark", benchmarkRoutes);
//router.use("/avatar", avatar)

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
})

module.exports = router;


// https://ipadress:3000/api/user/