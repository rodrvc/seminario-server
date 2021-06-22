const { Pool } = require("pg");



const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'postgres', 
    database: 'task_sem' 
  } 
  
  const pool = new Pool(config)
  

  module.exports = pool;
  