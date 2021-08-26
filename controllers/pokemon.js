const express = require('express');
const router = express.Router();
const pokemon = require("../models/pokemon");

router.get('/new', (req, res) => {
  res.render("new.ejs")
});

router.get('/:index', (req, res) => {
  res.render("show.ejs", {
    pokemon: pokemon[req.params.index]
  })
});
router.delete("/index")

router.get('/', (req, res) => {
  console.log(pokemon);
  res.render("index.ejs", {
    pokemons: pokemon
  })

});


router.post("/", (req, res) =>{ 
  const newPokemon = {
    name: req.body.name,
    image: req.body.image
  }
  pokemon.push(newPokemon)
  res.redirect('/pokemon')
})

//edit
router.get("/:id/edit", (req, res) => {
  List.findByPk(req.params.id).then((pokemon) => {
    
      res.render(
        "/edit.ejs", //render views/edit.ejs
        {
         pokemon,

        }
      );
  });
});

//update
router.put("/:id",(req,res) => {
  pokemon.update(req.body, {
      where: {id: req.params.id },
      returning: true,
  }).then((resultSet => {
      let pokemon = resultSet[1][0];
      res.redirect("/pokemon");
  }))
})

//delete
router.delete("/:id", (req, res) => {
  pokemon.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/pokemon"); //redirect back to index route
  });
});
//app.get('/pokemon', function (req, res) {
//res.send(pokemon)
//})


module.exports = router;