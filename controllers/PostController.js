const db = require("../models");


module.exports ={

    // go
    findByChallengeId: function(req, res) {
        // use db to grab posts
        let {challenge_id} = req.params; 
        db.Post.findAll({
            where: {
                ChallengeId: challenge_id
            }
        })
        .then(posts => {
            res.send(posts);
        })
        .catch(err=> {
            console.log(err);
        })
    
    },

    create: function(request, response) {
        let post = request.body;
        db.Post.create(post)
        .then(post => response.json(post))
        .catch(err => res.status(404).send(err))
    }
}

