const express = require("express");
const like = require("../controllers/likeComment");
const router = express.Router();

router.put("/comment/addlike", like.addlike);
module.exports = router;
