const express = require('express');
require('dotenv').config()
const todoController = require('./controllers/todoController');

const app = express();

// Setup template engine
app.set('view engine', 'ejs');
// Setup static files load
app.use(express.static('./public'));

// Fire controllers
todoController(app);

// Port to listen on
app.listen(3000)

console.log('You dey on 3000')