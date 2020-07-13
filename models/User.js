const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// user_id, name, lastname, secondLastname, email, password

//Modelo de para usuarios de la aplicacion
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
	habilities: {
		nameHability: String,
		description: String,
	},
	phone: {
		type: String,
	},
});

module.exports = mongoose.model("User", UserSchema);
