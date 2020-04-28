const router = require('express').Router();
const userRoutes = require('./user')
const avatarRoutes = require('./avatar');


router.use("/user", userRoutes);
router.use("/avatar", avatarRoutes);


router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
})

module.exports = router;