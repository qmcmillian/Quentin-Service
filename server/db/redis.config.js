// const Promise = require('bluebird');
// let redis = Promise.promisify(require('redis'));
const redis = require('redis');
const client = redis.createClient({
  port: 6379,
  host: '13.56.182.80'
});



client.on('error', function(error) {
  console.log('error');
});

client.get('eee', function(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  console.log('result: ', result);
});

client.set('aaron', 'jojo', function(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  console.log('result: ', result);
});

// client.quit();

module.exports = client;