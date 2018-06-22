const express        = require('express');
// const mustacheExpress = require('mustache-express');
// const bodyParser     = require('body-parser');
// const pgp = require('pg-promise')();

const app  = express();
const PORT = process.env.PORT || 8080;

// normal setup for express & mustache (if we want to go there)
// app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// This makes it so that it requires the file that holds all the routes. I guess this index.js
// file only serves to ser up the frameworks and overview everything.
app.use(require('./resources'));


// run on port 8080
app.listen(PORT, () => console.log('Listening on port ', PORT));
