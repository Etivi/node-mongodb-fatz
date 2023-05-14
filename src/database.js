const mongoose = require("mongoose");

mongoose
	.connect('mongodb+srv://Deuhs:Sutil_k7157@cluster0.fjdg2yk.mongodb.net/',{
        dbName: "Fatz"
    })
	.then(() => console.log("Base conectada"))
	.catch((e) => console.error(e));
