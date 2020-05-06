const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Challenge.find(req.query)
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
};
