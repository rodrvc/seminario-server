const TaskModel = require('../models/Task');


const createTask = async (req, res ) => {

    const task = req.body;

   

    const task_create = await TaskModel.createTask(task);
    res.status(200).send(task_create);
}

module.exports = {
    createTask
}

