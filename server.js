const express = require('express');
const app = express();
const pokemon =  require("./models/pokemon");

app.use("/pokemon", require('./controllers/pokemon.js'));




app.listen(3000, () => {
	console.log("I am listening!");
});