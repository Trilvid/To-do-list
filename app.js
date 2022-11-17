const express = require('express');
const morgan = require('morgan');
const task = require("./routes/toDoRoute");

const app = express();

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
  });
 

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

  app.use(express.json());
  app.use('/api/v1/task', task);

  module.exports = app;
