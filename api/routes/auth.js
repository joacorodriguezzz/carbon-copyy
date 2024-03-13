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
  });

  try {
    const savedUser = await user.save();
    res.json({
      error: null,
      data: savedUser,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("/login", async (req, res) => {
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

  res.header("auth-token", token).json({
    error: null,
    data: { token },
  });
  const express = require("express");
  const verifyToken = require("../middleware/verifyToken");
  const User = require("../models/User");

  const router = express.Router();

  // Get favorite topics
  router.get("/favorites", verifyToken, async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ favorites: user.favorites });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Add favorite topic
  router.post("/favorites/add", verifyToken, async (req, res) => {
    try {
      const { topic } = req.body;
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      if (!user.favorites.includes(topic)) {
        user.favorites.push(topic);
        await user.save();
        res.json({ message: "Favorite added successfully" });
      } else {
        res.status(400).json({ error: "Topic already exists in favorites" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
});

module.exports = router;
