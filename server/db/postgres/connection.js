const pg = require('pg');

const client = new pg.Client({
  user: 'quentinmcmillian',
  host: 'localhost',
  database: 'amazonreviews',
  password: 'password',
  port: 5432,
})

client.connect(function(err) {
  if (err) {
    console.error('Error connecting to PostgreSQL database for Joe\'s Amazon Reviews service', err);
    return;
  }
  console.log('Connected to PostgreSQL database for Joe\'s Amazon Reviews service!');
});

module.exports = client;