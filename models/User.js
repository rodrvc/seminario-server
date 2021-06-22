const pool = require("./config/database");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const getUser = async function () {
  try {
    return await pool.query(
      "SELECT id, firstname, lastname, email, gender from users where firstname = 'Dore'"
    );
    console.log(data.rows);
  } catch (error) {
    console.log(error);
    return error;
  }
};

const signup = async function (user) {
  result = {};

  const {
    username,
    firstname,
    lastname,
    birthday,
    identification,
    gender,
    usermode,
    phone,
    email,
    password,
    repeatPassword,
  } = user;

  if (password != repeatPassword) {
    const response = {
      error: true,
      message: "las constraseñas no coinciden",
    };
    return response;
  }

  const passwordhash = bcrypt.hashSync(password, saltRounds);

  query =
    "insert into users" +
    "(username, firstname, lastname, birthday, identification, gender, usermode, phone, email, password)" +
    "values ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *";

  fields = [
    username,
    firstname,
    lastname,
    birthday,
    identification,
    gender,
    usermode,
    phone,
    email,
    passwordhash,
  ];

  try {
    const stored_user = await pool.query(query , fields);

    console.log("New member with id: " + stored_user.id);
    return stored_user.rows[0];
  } catch (err) {
    //error
    if (err.constraint === "users_email_key") {
      return {
        error: true,
        message: "Ya existe un usuario con este email",
      };
    }

    if (err.constraint === "users_username_key") {
      return {
        error: true,
        message: "Ya existe un usuario con este nombre usuario",
      };
    }

    if (err.code == "23505") {
      return {
        error: true,
        message: "Ya existe un usuario con este email",
      };
    }

    return {
      error: true,
      menssaje: "it was an error on store the new user",
    };
  }
};

module.exports = {
  getUser,
  signup,
};
