var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'amazonreviews'
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to MySQL database for Joe\'s Amazon Reviews service', err);
    return;
  }
  console.log('Connected to MySQL database for Joe\'s Amazon Reviews service!');
});

module.exports = connection;