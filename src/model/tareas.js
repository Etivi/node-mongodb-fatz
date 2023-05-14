const { Schema, model } = require("mongoose");

const tareaSchema = new Schema({
	tarea: {
		type: String,
		required: true
	},

	descripcion: String,
});

module.exports = model("tarea", tareaSchema);
