const db = require("../models");


module.exports ={

    // go
    findAll: function(req, res) {
        // use db to grab posts
       
    
    },

    create: function(request, response) {
        let post = request.body;
        let {UserId, ChallengeId, content} = request.body
        console.log({ChallengeId, content});
       db.Benchmark.create(req.body)
       .then(benchmark=> {
           console.log("ben", benchmark)
           return res.json(benchmark);
       })
       .then(err => {
           console.log("err", err)
           return res.status(404).json(err);
       })
    }
}

