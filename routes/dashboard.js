const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/dashboard", (req, res) => {
  const isAuthenticated = authToken(req, res);
  console.log("token is here " + req.cookies.token);
  if (isAuthenticated)
    return res.status(200).send("The token is readable and exists");
  else {
    return res.status(403).send("No token. Access Denied");
  }
});

function authToken(req, res) {
  const token = req.cookies.token;
  if (token) return true;
}

module.exports = router;
