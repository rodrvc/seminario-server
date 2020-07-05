const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// user_id, name, lastname, secondLastname, email, password
const UserSchema = new Schema({
	user_id: String,
	name: String,
	lastname: String,
	secondLastname: String,
	email: String,
	password: String,
	userMode: {
		type: String,
		enum: ["tasker", "giver"],
		default: "giver",
	},
	//birthdate: String,
});

module.exports = mongoose.model("User", UserSchema);
