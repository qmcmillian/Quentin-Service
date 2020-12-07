const express = require('express');
const morgan = require('morgan');
const db = require('./db/postgres/connection.js')

// Serve static index.html file
// app.use(express.static('client/dist'));

// Middleware
app.use(express.json());
app.use(morgan('tiny'));



const port = process.env.PORT || 4040;
app.listen(port, () => {
  console.log(`The server is listening on port ${port}...`);
});

