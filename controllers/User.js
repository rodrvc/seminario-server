const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("../services/jwt");
const User = require("../models2/User.js");

const addUser = (req, res) => {
    user = new User();

    const validateStatus = validate(); // validate fields

    if (validateStatus !== "Ok") 
        return;
    
    console.log("user is validate");
    addDatabase();

    console.log("it was inserted!");
    res.status(200).send("Welcome to Dungu");

    // deeper //

    function validate() { // handlerErr
        if (req.body.password !== req.body.repeatPassword) {
            const pas1 = req.body.password;
            const pas2 = req.body.repeatPassword;
            console.log(pas1, pas2);
            console.log("Usuario se valida correctamente No se valida correctamente");
            res.status(500).send({messaje: "password dont match!"});
        } else {
            console.log("user is validated! correctly");
            return "Ok";
        }
    }
};

const addDatabase = (req, res) => {
    const saltRounds = 10;
    const {name, email, password} = req.body;

    const user = new User();

	function validate() {
		// handlerErr
		if (req.body.password !== req.body.repeatPassword) {
			const pas1 = req.body.password;
			const pas2 = req.body.repeatPassword;
			console.log(pas1, pas2);
			console.log("Usuario se valida correctamente No se valida correctamente");
			res.status(500).send({ 
                messaje: "password dont match!",
                error: true
            });
		} else {
			console.log("user is validated! successfully");
			return "Ok";
		}
	}

    // (user.user_id = user_id),
    (user.name = name),
    // (user.lastname = lastname),
    // (user.secondLastname = secondLastname),
    (user.email = email),
    // (user.userMode = "giver");
    (user.password = password); // encrypted!


    let adduser = user.save(function (err, userStorage) {
        if (err) 
            return console.log(err);
        
        // console.log("this is executed " + user);
        // userStorage.user_id = userStorage._id;
        console.log(userStorage);
        res.status(200).send({userStorage});
    });
};

async function signin(req, res) {
	const params = req.body;
	const email = params.email;
	const password = params.password;
	console.log("esto es un email " + email + " password " + password);

	await User.findOne({ email }, (err, userStorage) => {
		if (err) {
			res.status(500).send({ messaje: "Server error" });
		} else {
			if (!userStorage) {
				return res.status(404).send({
					messaje: "User not found!" + req.body.email,
                    error: true
				});
			}
			bcrypt.compare(password, userStorage.password, (err, validate) => {
				if (err) {
					res.status(500).send({
						messaje: "Server Error",
                        error: true
					});
				} else if (!validate) {
					res.status(400).send({
                        messaje: "password dont match",
						error: true,
					});
				} else {
					res.status(200).send({
						messaje: "ok",

						accessToken: jwt.accessToken(userStorage),
						refreshToken: jwt.refreshToken(userStorage),
					});
				}
			});
		}
	});
}

function getUsers(req, res) {
    User.find({}).select("-password -__v ").then((users) => {
        if (!users) {
            res.status(404).send({messaje: "There are not users"});
        } else {
            res.status(200).send({users});
        }
    });
}

async function getTaskers(req, res) { // /https://mongoosejs.com/docs/queries.html
    var query = await User.find({userMode: "tasker"}) // https://mongoosejs.com/docs/api.html#query_Query-setQuery.limit(100);
    if (! query) {
        res(403).send({messaje: "No existe usuario con esa habilidad!"});
    }
    res.send(query);
}

// https://mongoosejs.com/docs/queries.html
async function getTaskersByRequeriment(req, res) {
    const {skill} = req.query;
    console.log(skill);
    // /https://mongoosejs.com/docs/queries.html
    var query = await User.find({
        userMode: "tasker",
        skills: {
            $elemMatch: {
                skill: skill
            }
        }
    }).select({
        skills: {
            $elemMatch: {
                skill: skill
            }
        },
        name: 2,
        lastname: 2
    }).then((users) => {
        if (!users) {
            res.status(404).send({messaje: "No se ha encontrado"});
        } else {
            res.status(200).send({users});
        }
    });
    // https://mongoosejs.com/docs/api.html#query_Query-setQuery

    // if (!query) {
    // res(403).send({ messaje: "No existe usuario con esa habilidad!" });
    // }
    // res.send(query);
}

async function getUsuer(req, res) {
    const {skill} = req.query;
    console.log(skill);
    // /https://mongoosejs.com/docs/queries.html
    var query = await User.find({
        userMode: "tasker",
        skills: {
            $elemMatch: {
                skill: skill
            }
        }
    }).select({
        skills: {
            $elemMatch: {
                skill: skill
            }
        },
        name: 2,
        lastname: 2
    }).then((users) => {
        if (!users) {
            res.status(404).send({messaje: "No se ha encontrado"});
        } else {
            res.status(200).send({users});
        }
    });
    // https://mongoosejs.com/docs/api.html#query_Query-setQuery

    // if (!query) {
    // res(403).send({ messaje: "No existe usuario con esa habilidad!" });
    // }
    // res.send(query);
}

// User.find({ active: query.active }).then(users => {
//       if (!users) {
//         res.status(404).send({ message: "No se ha encontrado ningun usuario." });
//       } else {
//         res.status(200).send({ users });
//       }
//     });
// }

module.exports = {
    addUser,
    signin,
    getUsers,
    addDatabase,
    getTaskersByRequeriment
};
