const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("..models/User");
const bcrypt = require("bcrypt");
const User = require("../models/User");

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

    // stopped here, need to decide whether gonna session or jwt, probably sessions are superior
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

router.post("/login", (req, res) => {});
