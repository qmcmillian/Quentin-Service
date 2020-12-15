const db = require('./connection');

const Review = {
  // Add review
  createReview: (review) => {
    let values = Object.values(review);
    console.log(values)
    let queryStr = 'INSERT INTO reviews(product_id, user_id, overall_rating, review_date, headline, full_text, helpful, verified_purchase, product_photo) VALUES($1, $2, $3, $4, $5, $6,$7, $8, $9  )'

    return db.query(queryStr, values);
  },
  // Get all reviews for a product
  getAllReviews: (productId) => {
    let value = [productId];
    let queryStr = "SELECT reviews.product_id, reviews.user_id, reviews.overall_rating, reviews.review_date, reviews.headline, reviews.full_text, reviews.helpful, reviews.verified_purchase, reviews.product_photo, users.user_name, users.country, users.avatar FROM reviews INNER JOIN users ON reviews.user_id=users.id WHERE product_id= $1";

    return db.query(queryStr, value);
  },
  // Update review
  updateReview: (review) => {
    let queryStr ='UPDATE reviews SET overall_rating = $1, headline = $2, full_text = $3 WHERE id = $4 AND product_id = $5';
    let values = [];
  },
  // Delete review
  deleteReview: (id) => {
    let queryStr = 'DELETE FROM reviews WHERE id = $1';
    let value = [productId];
    return db.query(queryStr, id);
  }
};

module.exports = Review;
