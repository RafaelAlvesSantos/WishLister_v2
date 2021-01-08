const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Login page");
});

router.get("/register", (req, res) => {
  res.status(200).send("Register page");
});

module.exports = router;
