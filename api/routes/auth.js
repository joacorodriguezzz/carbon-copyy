const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  console.log(req.body);
  const isEmailExist = await User.findOne({ email: req.body.email });
  if (isEmailExist) {
    return res.status(400).json({ error: "Email ya registrado" });
  }
  
  // hash contraseña
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);
  
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: password,
    lastName: req.body.lastName,
    favoriteThemes: [1],
  });
  
  try {
    const savedUser = await user.save();
    console.log('holaaa')
    res.json({
      error: null,
      data: savedUser,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("/login", async (req, res) => {
  console.log('hola')
  console.log(User)
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ error: "Usuario no encontrado" });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).json({ error: "contraseña no válida" });

  // create token
  const token = jwt.sign(
    {
      name: user.name,
      id: user._id,
    },
    "secreto"
  );

  console.log(token);
  res.header("auth-token", token).json({
    error: null,
    data: { token },
  });
});

module.exports = router;
