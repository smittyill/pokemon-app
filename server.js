const express = require('express');
const app = express();
const pokemon = [
    {
      name: "Bulbasaur",
      img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"
    },
    {
      name: "Ivysaur",
      img: "http://img.pokemondb.net/artwork/ivysaur.jpg"
    },
    {
      name: "Venusaur",
      img: "http://img.pokemondb.net/artwork/venusaur.jpg"
    },
    {
      name: "Charmander",
      img: "http://img.pokemondb.net/artwork/charmander.jpg"
    },
    {
      name: "Charizard",
      img: "http://img.pokemondb.net/artwork/charizard.jpg"
    },
    {
      name: "Squirtle",
      img: "http://img.pokemondb.net/artwork/squirtle.jpg"
    },
    {
      name: "Wartortle",
      img: "http://img.pokemondb.net/artwork/wartortle.jpg"
    }
  ];
  app.get('/pokemon', (req, res) => {
    res.send(pokemon);
});

app.get('/pokemon/:index', (req, res) => {
    res.send(pokemon[req.params.index]);
});
app.get('/greeting', (req, res) => {
    res.send("Hello, stranger");
});
app.get('/greeting/:name', (req, res) => {
    res.send(pokemon[req.params.name]+ "!It's so great to see you!");
});
app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(pokemon[req.params.name]+ "!It's so great to see you!");
});

app.listen(3000, () => {
	console.log("I am listening!");
});