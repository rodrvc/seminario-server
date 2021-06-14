const pool = require("./config/database");



 class UserModel {

    async getUser(){
        try {
            return await pool.query("SELECT user_id, first_name, last_name, email, gender from users where first_name = 'Jeanette'")
            console.log(data.rows); 
            return data; 
          } catch (error) {
            return error; 
          }

    }

}


module.exports = UserModel;






  