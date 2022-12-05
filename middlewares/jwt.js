// const express = require("express");
// const jwt = require("jsonwebtoken");
// const crypto = require("crypto").randomBytes(64).toString("hex");
// const dotenv = require("dotenv");

// dotenv.config();

// process.env.TOKEN_SECRET;

// function generateAccessToken(username) {
//   return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
// }
// app.post("/api/createNewUser", (req, res) => {
//   // ...

//   const token = generateAccessToken({ username: req.body.username });
//   res.json(token);

// });

// module.exports = "generateAccessToken";
