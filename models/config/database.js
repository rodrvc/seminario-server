const { Pool } = require("pg");



const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'postgres', 
    database: 'postgrest_test' 
  } 
  
  const pool = new Pool(config)
  

  module.exports = pool;
  