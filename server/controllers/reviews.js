// import whatever needed!!!
const Review = require('../db/postgres/reviews');

const ReviewController = {
  create: (req, res) => {
    const review = req.body;
    Review.createReview(review)
    .then((results) => {
      res.status(200).send('Review has been created');
    })
    .catch((error) => {
      res.status(400).send(error);
    })
  },
  getAll: (req, res) => {
    const id = Number(req.params.id)
    Review.getAllReviews(id)
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
  },
  update:  (req, res) => {
    const review = req.body;
    updateReview(review)
    .then((results) => {
      res.status(200).send('Review has been updated');
    })
    .catch((error) => {
      res.status(400).send(error);
    })
  },
  delete: (req, res) => {
    const id = Number(req.params.id);
    deleteReview(id)
    .then((results) => {
      res.status(200).send('Review has been deleted');
    })
    .catch((error) => {
      res.status(400).send(error);
    })
  }
}

module.exports = ReviewController;