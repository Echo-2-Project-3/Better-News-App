const router = require('express').Router();
const userRoutes = require('./user')
const avatarRoutes = require('./avatar');
const path = require('path');

router.use("/user", userRoutes);
router.use("/avatar", avatarRoutes);


router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
})

module.exports = router;


// https://ipadress:3000/api/user/