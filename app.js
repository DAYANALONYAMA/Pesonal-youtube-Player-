const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Comment = require("./models/Comments");
const bodyParser = require("body-parser");
const Users = require("./models/users");
const jwt = require("./middlewares/jwt");
const authenticateToken = require("./middlewares/authentification");

mongoose
  .connect("mongodb+srv://carine:Carine1234@cluster0.wjrvhac.mongodb.net/ff", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.post("/comment/addcomment", (req, res, next) => {
  const comment = new Comment({
    comment: req.body.comment,
  });
  console.log(comment);
  comment
    .save()
    .then(() => res.status(201).json({ message: "commentaire enregistré" }))
    .catch((error) => res.status(400).json({ error }));
});

app.post("/users/addusers", (req, res, next) => {
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
});

app.get("/api/stuff", (req, res, next) => {
  Comment.find()
    .then((comment) => res.status(200).json(comment))
    .catch((error) => res.status(400).json({ error }));
});

app.put("/api/stuff/:id", (req, res, next) => {
  Comment.updateOne(
    { _id: req.params.id },
    { ...req, body, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "objet modifié" }))
    .catch();
});

app.get("/api/stuff/:id", (req, res, next) => {
  Comment.findOne({ _id: req.params.id })
    .then((comment) => res.status(200).json(comment))
    .catch((error) => res.status(400).json({ error }));
});

app.use(bodyParser.json());

app.listen(3002, () => {
  console.log("server running");
});
