const express = require('express')
const PORT = 3000
const pokemon = require('./models/pokemon.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package


const app = express();

app.get('/', function (req, res) {
    res.send(`<h1> Welcome to the Pokemon App</h1>`);
  });

  app.get('/pokemon', function (req, res) {
    res.send(pokemon);
  });



//listening
app.listen(3000, function () {
    console.log('Listening on port 3000');
  });