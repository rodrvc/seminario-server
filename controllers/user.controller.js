
const { modelNames } = require("mongoose");
const UserModel    = require("../models/User");


  //user controllers
  const getUsers = async (req , res) => {
   
      const a = new UserModel();
      const users = await a.getUser();
      res.status(200).send(users.rows);
    
  }


  module.exports = { getUsers }






  
  
