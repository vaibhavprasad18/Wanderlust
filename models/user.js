const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);