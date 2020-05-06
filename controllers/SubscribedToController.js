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