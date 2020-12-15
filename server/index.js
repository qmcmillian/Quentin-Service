const express = require('express');
// const db = require('./db/index.js') MYSQL DATABASE CONNECTION
const morgan = require('morgan');
// const cookie = require('cookie');
const db = require('./db/postgres/connection.js');
const newRelic = require('newrelic');
const {createReview ,getAllReviews, updateReview, deleteReview} = require('./db/postgres/reviews.js');
const ReviewController = require('./controllers/reviews');

const app = express();
// Serve static index.html file
app.use(express.static('client/dist'));

// Middleware
app.use(express.json());
app.use(morgan('tiny'));

// Create Review
app.post('/api/reviews/', ReviewController.create);
// Get all reviews for product ID
app.get('/api/reviews/:id', ReviewController.getAll);
// Update a review for a product
app.put('/api/reviews/',ReviewController.update);
// Delete a review of a product
app.delete('/api/reviews/:id', ReviewController.delete);

const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`The server is listening on port ${port}...`);
});

// httperf --server localhost  --port 3004 --uri /api/reviews/ --num-conns 6000 --rate 100 --timeout 1 STRESS TEST COMMAND