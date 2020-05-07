const express = require("express");
const router = express.Router(); 
const axios = require("axios");
const post = require("../../controllers/PostController.js");

router.route("/")
.post(post.create)

router.route("/:challenge_id")
.get(post.findByChallengeId)





module.exports = router;

