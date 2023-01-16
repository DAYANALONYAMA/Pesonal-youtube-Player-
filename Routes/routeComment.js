const express = require("express");
const Comment = require("../controllers/Comment");
const router = express.Router();

router.post("/addcomment", Comment.createComment);
router.get("/stuff", Comment.createallcomment);

module.exports = router;
