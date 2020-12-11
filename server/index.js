const express = require('express');
// const db = require('./db/index.js') MYSQL DATABASE CONNECTION
const morgan = require('morgan');
const db = require('./db/postgres/connection.js');
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
      res.status(200).send(results.rows);
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

