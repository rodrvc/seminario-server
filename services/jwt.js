const jwt = require("jwt-simple"); // https://www.npmjs.com/package/jwt-simple    https://medium.com/@asfo/autenticando-un-api-rest-con-nodejs-y-jwt-json-web-tokens-5f3674aba50e
const SECRET_KEY = "PRTAoZbdrEq6yKaujvZLzgL6rEsX27pqTsREtjcSJWpeMM3KY3zc"; // sera la llave que encryptara o desencryptara informacion
const moment = require("moment");

//  se crea token de acceso - para verificiar usuario registrado
exports.accessToken = function (user) {
	const payload = {
		id: user.user_id,
		name: user.name,
		lastname: user.lastname,
		email: user.email,
		userMode: "giver",
		createToken: moment().unix(), // fecha dd/mm/aaaa
		exp: moment().add(3, "hours").unix(),
	};
	return jwt.encode(payload, SECRET_KEY);
};

// se crea token para refrescar token
exports.refreshToken = function (user) {
	const playload = {
		user_id: user.user_id,
		exp: moment().add(30, "days").unix(),
	};
	return jwt.encode(playload, SECRET_KEY);
};

exports.decoded = function (token) {
	return jwt.decode(token, SECRET_KEY, true);
};
