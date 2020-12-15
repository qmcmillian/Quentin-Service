const express = require('express');
// const db = require('./db/index.js') MYSQL DATABASE CONNECTION
const morgan = require('morgan');
// const cookie = require('cookie');
const db = require('./db/postgres/connection.js');
const newRelic = require('newrelic');
const {createReview ,getAllReviews, updateReview, deleteReview} = require('./db/postgres/controllers.js');

const app = express();
// Serve static index.html file
app.use(express.static('client/dist'));

// Middleware
app.use(express.json());
app.use(morgan('tiny'));

// Create Review
app.post('/api/reviews/', (req, res) => {
  const review = req.body;
  createReview(review)
  .then((results) => {
    res.status(200).send('Review has been created');
  })
  .catch((error) => {
    res.status(400).send(error);
  })
});
// Get all reviews for product ID
app.get('/api/reviews/:id', (req, res) => {
  const id = Number(req.params.id)
  getAllReviews(id)
    .then((results) => {
      const  info = results.rows
      info.forEach((item) => {
        item.product_photo = 'https://hr-fec.s3.us-east-2.amazonaws.com/random-product-photos/random-product-photos/charisse-kenion-dah-jZWgzx8-unsplash.jpg'
        item.avatar = 'https://hr-fec.s3.us-east-2.amazonaws.com/random-avatars/gabriel-salas-YnENabLdEKY-unsplash.jpg'
      })

      res.status(200).send(info);
    })
    .catch((error)=> {
      res.status(400).send(error);
    })
});
// Update a review for a product
app.put('/api/reviews/', (req, res) => {
  const review = req.body;
  createReview(review)
  .then((results) => {
    res.status(200).send('Review has been updated');
  })
  .catch((error) => {
    res.status(400).send(error);
  })
});
// Delete a review of a product
app.delete('/api/reviews/:id', (req, res) => {
  const id = Number(req.params.id);
  deleteReview(id)
  .then((results) => {
    res.status(200).send('Review has been deleted');
  })
  .catch((error) => {
    res.status(400).send(error);
  })
});

const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`The server is listening on port ${port}...`);
});

// httperf --server localhost  --port 3004 --uri /api/reviews/ --num-conns 6000 --rate 100 --timeout 1 STRESS TEST COMMAND