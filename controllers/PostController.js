const db = require("../models");


module.exports ={

    // go
    findByChallengeId: function(req, res) {
        // use db to grab posts
        let {challenge_id} = req.params; 
        db.Post.findAll({
            where: {
                ChallengeId: challenge_id
            },
            order: [['createdAt', 'DESC']]
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
        let {UserId, ChallengeId, content, percent} = request.body
        console.log({ChallengeId, content});

        db.Post.create(post)
        .then(post => {
            console.log("post is:", post)
            db.SubscribedTo.update({
                point: db.sequelize.literal('point + 1'),
                percent_completed: db.sequelize.literal(`percent_completed + ${percent}`)
            }, {
                where: {
                UserId: UserId, 
                ChallengeId: ChallengeId
            }})
            .then(re => {
                response.json(post)
            })
            .catch(err=> {
                console.log("err", err)
            })
            
        })
        .catch(err => {
            console.log("err",err)
            response.status(404).json(err)
        
        })
    }
}

