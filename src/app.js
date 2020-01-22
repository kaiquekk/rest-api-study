const express = require('express');
const app = express();
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
const bodyParser = require('body-parser');

app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', index);
app.use('/people', personRoute);

module.exports = app;