const comments = require("../models/Comments");

exports.addlike = (req, res) => {
  comments
    .findOneAndUpdate(
      { idUser: req.body.idUser },
      {
        $push: {
          likes: {
            $each: [{ id: req.body.idUser }],
          },
        },
      }
    )
    .then(() => res.status(200).json({ message: "like rajouté" }))
    .catch((error) => res.status(400).json({ error }));
};

// exports.addlike = (req, res) => {

//   const newLike = new likes({
//     idUser: req.body.idComment,
//   });

//   console.log(newLike);
//   newLike
//     .save()
//     .then((result) => res.status(201).json({ message: result }))
//     .catch((error) => res.status(400).json({ error }));
// };
