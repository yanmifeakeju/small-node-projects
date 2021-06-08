require('dotenv').config();
require('./config/db')();

const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 5000;

app.engine('.hbs', exphbs({ defaultLayout: 'layout', extname: '.hbs' }));
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode port on ${PORT}`)
);
