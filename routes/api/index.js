const router = require('express').Router();
const userRoutes = require('./user')

const path = require('path');

router.use("/user", userRoutes);



router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
})

module.exports = router;


// https://ipadress:3000/api/user/