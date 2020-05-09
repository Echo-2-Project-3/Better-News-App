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

    findChallenge: function(req, res) {
        console.log("finding challenge", req.params);
        let {user_id, challenge_id} = req.params; 
        db.User.findOne({
            include: [{model: db.Challenge, where: {id: challenge_id}, through: {'UserId': user_id}}], 

        })
        .then(data=> {
            res.send(data)
        })
        
    }
}
