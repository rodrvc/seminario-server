const pool = require("./config/database");


const createTask = async function (Task){
    const result = {};


    const { 
        name, 
        description, 
        user_id, 
    } = Task; 


    

    let query = "INSERT INTO task" +
        "( name , description, user_id )" + 
        "values ($1, $2 , $3  ) RETURNING *";

    fields = [
        name,
        description, 
        user_id, 
    ];

    

    const stored_task = await pool.query(query , fields).then(res => res ).catch( err => err);



    



   
    return stored_task;
}


module.exports = {
    createTask
}

