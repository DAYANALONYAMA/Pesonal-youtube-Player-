const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

const usersSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true, max: 200 },
  name: String,
  profileImg: String,
});

// usersSchema.plugin(uniqueValidator);

module.exports = mongoose.model("user", usersSchema);
