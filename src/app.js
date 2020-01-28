const express = require('express');
const app = express();
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', index);
app.use('/people', personRoute);

module.exports = app;
