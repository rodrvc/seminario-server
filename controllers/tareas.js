const saltRounds = 10;

const Tarea = require("../models2/Tareas");

const addTarea = (req, res) => {
    tarea = new Tarea();

    const {
        id,
        titulo,
        descripcion,
        fecha,
        autor
    } = req.body;
    tarea.id = id;
    tarea.titulo = titulo;
    tarea.descripcion = descripcion;
    tarea.fecha = fecha;
    tarea.autor = autor;
    let addtarea = tarea.save(function (err, tareaStorage) {
        if (err) 
            return console.log(err);
        
        // console.log("this is executed " + user);
        tareaStorage.id = tareaStorage._id;

        console.log(tareaStorage);
        res.status(200).send({messaje: "Se ha agregado una nueva tarea"});
    });
};

async function getTarea(req, res) {
    Tarea.find().select("-__v ").then((tareas) => {
        if (!tareas) {
            res.status(404).send({messaje: "There are not users"});
        } else {
            res.status(200).send({tareas});
        }
    });
}

async function getOneTask(req, res) {
    const {id} = req.params;
    console.log(id);
    // /https://mongoosejs.com/docs/queries.html
    var query = await Tarea.findOne({_id: id}) // https://mongoosejs.com/docs/api.html#query_Query-setQuery.limit(100);

    if (! query) {
        res(403).send({messaje: "Tarea no existe "});
    }
    console.log(query);
    res.send(query);
}

async function putOneTask(req, res) {
    const {titulo, descripcion, fecha} = req.body;
    const {id} = req.params;
    const update = {
        titulo: titulo,
        descripcion: descripcion,
        fecha: fecha
    };

    // `doc` is the document _after_ `update` was applied because of
    // `returnOriginal: false`
    let taskUpdate = await Tarea.findOneAndUpdate({
        _id: id
    }, update, {new: true});

    res.json(taskUpdate).status(200);
}

async function deleteOneTask(req, res) { // res.send({ messaje: "Se ha intentado borrar" });
    const {id} = req.params;
    console.log(id);
    const deletedItem = await Tarea.findByIdAndDelete(id) // This method is the nice method for deleting.catch((err) => res.status(400).send(err.message));
}

module.exports = {
    addTarea,
    getTarea,
    getOneTask,
    putOneTask,
    deleteOneTask
};
