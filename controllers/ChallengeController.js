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

  findById: function (req, res) {
    db.Challenge.findOne({ where: { id: req.params.name } })
      .then((challenge) => res.json(challenge))
      .catch((err) => res.status(407).json(err));
  },

  findByName: function (req, res) {
    db.Challenge.findOne({ where: { name: req.params.name } })
      .then((challenge) => res.json(challenge))
      .catch((err) => res.status(407).json(err));
  },

  findAllUsersByChallengeID: function (req, res) {
    console.log("GET:/api/challenges/users/:challenge_id", req.params.challenge_id)
    db.Challenge.findOne({ where: { id: req.params.challenge_id } })
      .then((challenge) => challenge.getUsers())
      .then(data => res.json(data));
  },

  subscribeToUser: function (req, res) {
    let { user_id, challenge_id } = req.params;
    db.Challenge.findOne({
      where: {
        id: challenge_id
      }
    })
      .then(challenge => {
        db.User.findOne({
          where: {
            id: user_id
          }
        })
          .then(user => {
            user.addChallenge(challenge, { through: { "point": 0, "trophy": 0, "percent_completed": 0 } })
            res.send(user);
          })
      })
  },

  getFilteredChallenges: function (req, res) {
    let { user_id, challenge_id } = req.params;
    db.User.find({
      where: {
        id: user_id
      }
    })
      .then(user => {

        user.getChallenges({
          through:
          {
            where: {
              "percent_completed": { $lt: 100 }
            }
          }
        })
          .then(subscribed_not_completed => {
            // cleaned subscribed
            let subscribed = [];
            let filtered = [];
            for (let i = 0; i < subscribed_not_completed.length; i++) {
              let uncompleted_challenge = subscribed_not_completed[i];
              let { id, name, total, info, trophy, createdAt, updatedAt } = uncompleted_challenge;
              let ch = { id, name, total, info, trophy, createdAt, updatedAt };
              filtered.push(id);
              subscribed.push(ch)
            }


            user.getChallenges({
              through:
              {
                where: {
                  "percent_completed": 100
                }
              }
            }).then(subscribed_completed => {

              let completed = [];
              for (let i = 0; i < subscribed_completed.length; i++) {
                let completed_challenge = subscribed_completed[i];
                let { id, name, total, info, trophy, createdAt, updatedAt } = completed_challenge;
                let comp_ch = { id, name, total, info, trophy, createdAt, updatedAt };
                filtered.push(id);
                completed.push(comp_ch)
              }


              db.Challenge.findAll({
                where: {
                  id: { $notIn: filtered }
                }
              })
                .then(unsubscribed => {
                  let data = { subscribed, completed, unsubscribed }

                  return res.json(data);

                });

            });



          });

        // db.Challenges.find({
        //   where: {
        //     ChallengeId: {$notIn: []}
        //   }
        // })
      });


  },
  getChallengeNames: function (request, response) {
    console.log("I am here");
    db.Challenge.findAll({
      attributes: ["name"]
    })
    .then(challengeNames => {
      response.json(challengeNames)
    })
    .catch(err => {
      response.status(404).json(err)
    })

  }
};
