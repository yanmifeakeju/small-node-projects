const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

require('dotenv').config();
require('./config/db')();

const app = express();
const PORT = process.env.PORT || 5000;

//*static
app.use(express.static(path.join(__dirname, 'public')));

// * Handlebars
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

//* Logging
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

//* Routes
app.use('/', require('./routes'));

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode port on ${PORT}`)
);
