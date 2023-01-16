const Comment = require("../models/Comments");

exports.createComment = (req, res, next) => {
  const comment = new Comment({
    // userId: req.body.
    comment: req.body.comment,
  });
  console.log(comment);
  comment
    .save()
    .then(() => res.status(201).json({ message: "commentaire enregistré" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.createallcomment = (req, res, next) => {
  Comment.find()
    .then((comment) => res.status(200).json(comment))
    .catch((error) => res.status(400).json({ error }));
};
