const bcrypt = require("bcrypt");
const saltRounds = 10;
//const jwt = require('jwt');
const User = require("../models/User.js");

const addUser = async (req, res, next) => {
  user = new User();

  const validateStatus = validate(); //validate fields

  if (validateStatus !== "Ok") return;
  console.log("user is validate");
  addDatabase();

  console.log("it was inserted!");
  res.status(200).send("Welcome to Dungu");

  //deeper

  function validate() {
    // handlerErr
    if (req.body.password !== req.body.repeatPassword) {
      const pas1 = req.body.password;
      const pas2 = req.body.repeatPassword;
      console.log(pas1, pas2);
      console.log("Usuario se valida correctamente No se valida correctamente");
      res.status(500).send({ messaje: "I have and error here!" });
    } else {
      console.log("Usuario se valida correctamente Se valida correctamente");
      return "Ok";
    }
  }
  //prettier-ignore
  async function addDatabase() {

    const saltRounds = 10;
    const { user_id, name, lastname, email, password } = req.body;
    await bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) {
        console.log(err);
      } else {
        console.log("Se aplica un hash")
        {
          {
              (user.user_id = user_id),
              (user.name = name),
              (user.lastname = lastname),
              (user.email = email);
               user.password = hash; //encrypted!
          }
    
            let adduser =  user.save(function (err, userStorage) {
              if (err) return console.log(err);
              console.log("this is executed " + user);
            });
        }
      }
    });
  }

  //userAddToDatabase(); // end;

  // async function userAddToDatabase() {
  //   console.log(user);
  //   await user.save((err, result) => {
  //     if (err) {
  //       return res.status(400).json({
  //         error: err,
  //       });
  //     }
  //     console.log(user);
  //     res.status(200).json({
  //       message: user,
  //     });
  //     console.log(result);
  //   });
  // }
};

module.exports = {
  addUser,
};
