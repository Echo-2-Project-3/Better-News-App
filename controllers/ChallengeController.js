const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Challenge.findAll()
      .then((Challenge) => res.json(Challenge))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    let challenge = req.body;

    db.Challenge.create(challenge)
      .then((challenge) => res.json(challenge))
      .catch((err) => res.status(422).json(err));
  },

  findByName: function (req, res) {
    db.Challenge.findOne({ where: { name: req.params.name } })
      .then((challenge) => res.json(challenge))
      .catch((err) => res.status(407).json(err));
  },

  subscribeToUser: function(req, res) {
    let {user_id, challenge_name} = req.params;
    db.Challenge.findOne({
      where: {
        name: challenge_name
      }
    })
    .then(challenge=> {
      db.User.findOne({
        where: {
          id: user_id
        }
      })
      .then(user => {
        user.addChallenge(challenge,{ through: { "point": 0, "trophy": 0, "percent_completed": 50 }})
        res.send(user);
      })
    })
  }
};
