const pg = require('pg');
const conString = "postgres://quentinmcmillian:password@localhost:5432/amazonreviews";

const client = new pg.Client(conString);
client.connect(function(err) {
  if (err) {
    console.error('Error connecting to PostgreSQL database for Joe\'s Amazon Reviews service', err);
    return;
  }
  console.log('Connected to PostgreSQL database for Joe\'s Amazon Reviews service!');
});

module.exports = client