var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'hrstudent',
  password: '1234',
  database: 'amazonreviews'
});

connection.connect();

module.exports = connection;