const express = require('express');
const  { createTask } = require('../../controllers/task.controller');
const router = express.Router();


router.post("/task" , createTask );

router.get("/task" , createTask);


module.exports = router; 


