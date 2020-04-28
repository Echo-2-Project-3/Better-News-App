const db = require('../models');


module.exports = {
    findAll: function(req, res) {
        db.User.find(req.query)
          .then(users => res.json(users))
          .catch(err => res.status(422).json(err));
      }
}