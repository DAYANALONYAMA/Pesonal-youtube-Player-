const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const commentSchema = mongoose.Schema(
  {
    comment: String,
    idVideo: { type: Object },
    idUser: { type: Object },
    likes: [{ type: Object }],
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("comment", commentSchema);
