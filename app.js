const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Comment = require("./models/Comments");
const bodyParser = require("body-parser");
const commentRoute = require("./Routes/routeComment");
const likeRoute = require("./Routes/routeLike");
const userRoute = require("./Routes/routeUsers");
const allRouteComment = require("./Routes/routeComment");
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

mongoose
  .connect("mongodb+srv://carine:Carine1234@cluster0.wjrvhac.mongodb.net/ff", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.log("Connexion à MongoDB échouée ! ", err));

//établissement de la connexion
io.on("connection", (socket) => {
  console.log("Connecté au client");

  io.on("disconnect", () => {
    console.log("someone as left");
  });

  socket.on("chatmessage", (comment) => {
    const commentPost = new Comment({ comment: comment });
    commentPost.save().then(() => {
      io.emit("comment", comment);
    });
  });
});

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

app.use("/comment/", commentRoute);
app.use("/users/", userRoute);
app.use("api/", commentRoute);
app.use(likeRoute);

app.get("/api/stuff", (req, res, next) => {
  Comment.find()
    .then((comment) => res.status(200).json(comment))
    .catch((error) => res.status(400).json({ error }));
});

app.use(bodyParser.json());

http.listen(3002, () => {
  console.log("server running");
});
