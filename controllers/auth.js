const jwt = require("../services/jwt");
const moment = require("moment");
const User = require("../models/User");
const { model } = require("mongoose");

// se evalua token
function isEspiredToken(token) {
	const { exp } = jwt.decoded(token);
	const currentDate = moment().unix();

	if (currentDate > exp) {
		return true;
	}
	return false;
}
// se evalua refresToken
function refreshAccessToken(req, res) {
	const { refreshToken } = req.body;
	const isExpired = isEspiredToken(refreshToken);

	if (isExpired) {
		res.status(404).send({ message: "el refresh token ha expirado" });
	} else {
		const { id } = jwt.decoded(refreshToken);
		User.findOne({ user_id: id }, (err, Storage) => {
			if (err) {
				res.status(500).send({ message: "Error del servidor" });
			} else {
				if (!Storage) {
					res.status(404).send({ message: "Usuario no encontrado!! " });
				} else {
					res.status(200).send({
						accesstoken: jwt.accessToken(Storage),
						refreshToken: refreshToken,
					});
				}
			}
		});
	}
}

module.exports = {
	refreshAccessToken,
};
