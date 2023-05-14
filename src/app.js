const express = require("express");
const app = express();

const tarea = require("./model/tareas");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));




//  Crear una nueva tarea
app.post("/crear", async (req, res) => {
	const nuevaTarea = new tarea({
		tarea: req.body.tarea,
		descripcion: req.body.descripcion,
	});

    console.log(nuevaTarea)

	await nuevaTarea.save()

	res.send("Recibido");
});

// STATIC FILES
// app.get("/", (req, res) => {
// 	res.send("hello world");
// });

app.use(express.static(__dirname + "/public"));

module.exports = app;
