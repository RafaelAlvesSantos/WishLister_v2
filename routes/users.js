const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const authMid = require("../middleware/auth");

// REGISTER USER
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email: email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    user = new User({
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    res.status(201).send(user);

    // gonna use jwt, still unsure whether the user will be automatically logged in
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error");
  }
});

// LOGIN USER
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email: email });
    if (!user) return res.status(400).send("Invalid Credentials");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid Credentials");

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 3600 },
      (err, token) => {
        console.log(token);
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/dashboard", authMid, (req, res) => {
  res.send({ msg: "You managed to get here" });
});

module.exports = router;
