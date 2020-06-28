const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  user_id: String,
  name: String,
  middlename: String,
  lastname: String,
  email: String,
  password: String,

  //birthdate: String,
  //userType: {
  // type: String,
  // enum: ["tasker", "giver"],
  // default: "user"},
});

module.exports = mongoose.model("User", UserSchema);
