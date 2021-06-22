
const { modelNames } = require("mongoose");
const UserModel = require("../models/User");
// const UserModel    = require("../models/User");


  //user controllers
  const getUsers = async (req , res) => {
   
      const users = await UserModel.getUser()
      res.status(200).send(users.rows);
  }

  
  const signUp = async (req, res ) => {

    
    const user  = (req.body)
    
    const users = await UserModel.signup(user)

    if(users.error){
      console.log(users)
      res.status(500).send(users)
      return 
    }
    res.status(200).send(users)
  }


  const signIn = async (req , res) => {
    const {email , password } = req.body
    const user = await UserModel.signin(email, password)
    
    if(user.error){
      console.error(user)
      res.status(500).send(user)
      return
    }
    res.status(200).send(user)
  }


  module.exports = { 
    getUsers, 
    signUp,
    signIn 
  }






  
  
