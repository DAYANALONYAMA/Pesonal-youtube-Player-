const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    comment: String,
    idVideo: String,
    idUser: String,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("comment", commentSchema);
