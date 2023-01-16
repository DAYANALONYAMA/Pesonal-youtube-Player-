const comment = require("./models/Comments");
const express = require("express");
const { Router } = require("express");
const app = express();

Router.put("/comment/addlike", (req, res) => {
  // comment
  //   .findByIdAndUpdate(
  //     req.body.commentId,
  //     {
  //       $push: { likes: req.user._id },
  //     },
  //     {
  //       new: true,
  //     }
  //   )
  //   .exec((err, result) => {
  //     if (err) {
  //       return res.status(422).json({ error: err });
  //     } else {
  //       res.json(result);
  //     }
  //   });

  console.log(res);
});
