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
    }
}