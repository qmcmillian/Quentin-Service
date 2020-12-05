const express = require('express');
// const db = require('./db');
const morgan = require('morgan');
// const db = require('./db/postgres/connection.js')

const app = express();
// Serve static index.html file
app.use(express.static('client/dist'));

// Middleware
app.use(express.json());
app.use(morgan('tiny'));

// // Add review to database
// app.post('/api/reviews/', (req, res) => {
//   let params = Object.values(req.body);
//   let queryStr = 'INSERT INTO reviews(product_id, user_id, overall_rating, review_date, headline, full_text, helpful, verified_purchase, product_photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

//   db.query(queryStr, params, (err,results) => {
//     if (err) {
//       res.status(404).send('There was an error in accessing the database');
//     } else {
//       res.status(200).send('Review has been added to you database')
//     }
//   });
// });

// // Get all reviews for product ID
// app.get('/api/reviews/:id', (req, res) => {
//   // console.log(req.params.id);
//   console.log('request was made here-------');

//   db.query(`SELECT reviews.product_id, reviews.user_id, reviews.overall_rating, reviews.review_date, reviews.headline, reviews.full_text, reviews.helpful, reviews.verified_purchase, reviews.product_photo, users.user_name, users.country, users.avatar FROM reviews INNER JOIN users ON reviews.user_id=users.id WHERE product_id=?`, [req.params.id], (err, results) => {
//     if (err) {
//       res.status(404).send('There was an error in accessing the database');
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });

// // Update a review for a product
// app.put('/api/reviews/', (req, res) => {
//   let params = Object.values(req.body);
//   let queryStr = 'UPDATE reviews SET overall_rating = ?, headline = ?, full_text = ? WHERE id = ?';

//   db.query(queryStr, params, (err ,results) => {
//     if (err) {
//       res.status(400).send('There was an error editing this review');
//     } else {
//       res.status(200).send('Review successfully updated');
//     }
//   });
// });

// // Delete a review of a product

// app.delete('/api/reviews/:id', (req, res) => {
//   let id = [req.params.id];
//   let queryStr = 'DELETE FROM reviews WHERE id = ?';

//   db.query(queryStr, id, (err, results) => {
//     if (err) {
//       res.status(400).send('There was an error deleting this review');
//     } else {
//       res.status(200).send('Review was successfully deleted');
//     }
//   });
// });

const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`The server is listening on port ${port}...`);
});

