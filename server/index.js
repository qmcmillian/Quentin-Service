const express = require('express');
const db = require('./db');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('tiny'));

app.get('/api/products/:id/reviews', (req, res) => {
  console.log(req.params.id);
  db.query(`SELECT reviews.product_id, reviews.user_id, reviews.overall_rating, reviews.review_date, reviews.headline, reviews.full_text, reviews.helpful, reviews.verified_purchase, users.user_name, users.country, users.avatar FROM reviews INNER JOIN users ON reviews.user_id=users.id WHERE product_id=?`, [req.params.id], (err, results) => {
    if (err) {
      res.status(404).send('There was an error in accessing the database');
    } else {
      res.status(200).json(results);
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`The server is listening on port ${port}...`);
});

