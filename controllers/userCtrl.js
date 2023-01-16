const Users = require("../models/users");

exports.createUser = (req, res, next) => {
  const { name, email, profileImg } = req.body;

  Users.findOne({ email: email }).then((user) => {
    console.log(!user);
    if (!user) {
      const users = new Users({
        email: email,
        name: name,
        profileImg: profileImg,
      });

      users
        .save()
        .then((addUser) =>
          res.status(201).json({
            user: addUser,
            message: "utilisateur ajoutée",
          })
        )
        .catch((error) => res.status(400).json({ error }));
    } else {
      res.status(500).json({ message: "utilisateur existe déjà!" });
    }
  });
};
