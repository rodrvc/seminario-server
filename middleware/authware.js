const jwt = require("jwt-simple");
const moment = require("moment");

const SECRET_KEY = "PRTAoZbdrEq6yKaujvZLzgL6rEsX27pqTsREtjcSJWpeMM3KY3zc";

exports.secureAuth = (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).send({
             message: "Usuario no se ha autenticado", 
             error: true,
         });
	}

	const token = req.headers.authorization.replace(/['"]+/g, "");
	//console.log(token);
	let payload = jwt.decode(token, SECRET_KEY);

	try {
		if (payload.exp <= moment().unix()) {
			//console.log(moment().unix());
			return res.status(404).send({ message: "La autorizacion expiro" });
		}
	} catch (ex) {
		//console.log(ex);
		return res.status(500).send({ message: "Token no valido" });
	}

	req.user = payload;
	next();
};
