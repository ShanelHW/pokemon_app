const express = require('express')
const PORT = 3000

const app = express();

app.get('/', function (req, res) {
    res.send('Welcome to the Pokemon App');
  });






app.listen(3000, function () {
    console.log('Listening on port 3000');
  });