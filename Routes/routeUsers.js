const express = require("express");
const Users = require("../controllers/userCtrl");
const router = express.Router();

router.post("/addusers", Users.createUser);
module.exports = router;
