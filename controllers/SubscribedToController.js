const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        res.send({
            message: "Subscribed"
        })
    },
    findByChallengeName: function(req, res) {
        let challengeName = req.params.challenge_name; 
        console.log("challenge name: ", challengeName);
        db.SubscribedTo.findOne({
           include: [db.Challenge],
           where: {
               challengeId: 2
           }
        })
        .then(data => {
            res.send(data);
        })
        .catch(err=> {
            return res.stats(404).json(err)
        })
    },
    findByUserAndChallengeId: function(req, res) {
        let {UserId, ChallengeId} = req.params;
        console.log("User and Challenge IDs: ", UserId, ChallengeId);
        db.SubscribedTo.findOne({
            where: {
                UserId, 
                ChallengeId
            }
        })
        .then(data => {
            res.send(data);
        })
        .catch(err=> {
            return res.status(404).json(err);
        })
    },
    create: function(req, res) {
        console.log("create sub", req.body)
        db.SubscribedTo.create(req.body)
        .then(function(subscription) {
            res.send(subscription);
        })
        .catch(err=> {
            console.log("err", err);
        })
    }
}