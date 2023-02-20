const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
    data: {},
  });
});

module.exports = app;
