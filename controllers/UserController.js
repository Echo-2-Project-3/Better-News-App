const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.User.find(req.query)
          .then(users => res.json(users))
          .catch(err => res.status(422).json(err));
      },
    // findOne: function(req, res) {
    //     db.User.find(req.query)
    //     .then(user => res.json(user))
    //     .catch(err => res.err(422).json(err));
    // },
    create: function(req, res){
        let user = req.body;
    
        db.User.create(user)
        .then(user => res.json(user))
        .catch(err => res.status(422).json(err));
    },

    findByName: function(req, res) {
        db.User.findOne({where: {name: req.params.name}})
        .then(user => res.json(user))
        .catch(err => res.status(407).json(err));
    },

    findByDoppel: function(req, res) {
        db.User.findOne({where: {name: req.params.doppel}})
        .then(user => res.json(user))
        .catch(err => res.status(407).json(err));
    },


    login: function(req, res) {
        console.log("Login function", req.user);
        res.send(req.user);
              
    },

    signup: function(req, res) {

        db.User.create(req.body)
        .then(user=> {
            console.log(user);
           return res.json(user);
            


        })
        .catch((err) => {
            console.log(err);
           return res.status(404).json(err);
        })
    },

    findChallenge: function(req, res) {
        let {user_id, challenge_id} = req.params; 

        db.sequelize.query(`select * from SubscribedTos where UserId = ${user_id} and ChallengeId = ${challenge_id}`).spread((subs, metadata) => {

            let subscription = subs[0];
            db.sequelize.query(`select * from Challenges where id = ${challenge_id}`).spread((chal, md)=> {
           
                let challenge = chal[0]
                db.sequelize.query(`select * from Benchmarks where id=${challenge.BenchmarkId}`).spread((benchm, meta) => {
                    let benchmarks = benchm[0];
                    let data ={
                        subscription: subscription, 
                        benchmarks: benchmarks,
                        challenge: challenge
                    }
                    return res.json(data)
`   `
                })
                
            })
            
            // Results will be an empty array and metadata will contain the number of affected rows.
        })
        // db.User.findOne({
        //     include: {model: db.Challenge, where: {id: challenge_id}, through: {UserId: user_id}}, 

        // })
        // .then(data=> {
        //     res.send(data)
        // })
        
    }
}
