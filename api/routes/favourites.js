const User = require("../models/User");

const router = require("express").Router();

router.post("/add", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user.favoriteThemes.includes(req.body.theme)) {
        user.favoriteThemes.splice(user.favoriteThemes.indexOf(req.body.theme), 1);
        user.save();
        res.json({ error: null, data: user });
    } else {
        user.favoriteThemes.push(req.body.theme);
        user.save();
        res.json({ error: null, data: user });
    }
});


router.post("/", async (req, res) => {
    console.log('BODY', req.body);
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    favoriteThemes = user?.favoriteThemes;
    console.log(favoriteThemes)
    res.json({ error: null, data: favoriteThemes });
});

module.exports = router;