/*** Seeding script for database ***/

const db = require('./db');
const faker = require('faker');

// create 100 products
const insertProducts = async () => {
  for (let i = 0; i < 100; i++) {
    let randomProductName = faker.commerce.productName();
    let queryStr = 'INSERT INTO products(product_name) VALUES (?)';
    await db.query(queryStr, [randomProductName]);
  }
};

insertProducts();

// create 100 users
const insertUsers = async () => {
  for (let i = 0; i < 100; i++) {
    let randomUserName = faker.internet.userName();
    let randomCountry = (Math.random() <= .7) ? 'the United States' : faker.address.country();
    let randomAvatar = faker.image.avatar();
    let params = [randomUserName, randomCountry, randomAvatar];
    let queryStr = 'INSERT INTO users(user_name, country, avatar) VALUES (?, ?, ?)';
    await db.query(queryStr, params);
  }
};

insertUsers();

let s3domain = 'https://hr-fec.s3.us-east-2.amazonaws.com/random-product-photos/random-product-photos/';

let s3Urls = ['alejandro-luengo--c1-ZT-hLzM-unsplash.jpg', 'alexander-andrews-lMpoDibrEmY-unsplash.jpg', 'andrew-mantarro-swrVjn4M-_o-unsplash.jpg', 'angelina-litvin-YL7Y9uZ5O98-unsplash.jpg', 'avery-evans-RkCvkHgfiqc-unsplash.jpg', 'charisse-kenion-dah-jZWgzx8-unsplash.jpg', 'curology-DGH1u80sZik-unsplash.jpg', 'edi-libedinsky-AS49431lESE-unsplash.jpg', 'fabian-blank-pElSkGRA2NU-unsplash.jpg', 'jeremy-alford-68_PLKkF_ww-unsplash.jpg', 'laura-chouette--qNr1_q7k6Y-unsplash.jpg', 'laura-chouette-b0AfTrYs9_M-unsplash.jpg', 'laura-chouette-jLl2yh2qS9w-unsplash.jpg', 'laura-chouette-qTgtjpkM7r4-unsplash.jpg', 'lum3n--RBuQ2PK_L8-unsplash.jpg', 'mike-dorner-sf_1ZDA1YFw-unsplash.jpg', 'namroud-gorguis-FZWivbri0Xk-unsplash.jpg', 'priscilla-du-preez-5NQkmZyT03s-unsplash.jpg', 'rachmaddian-shotz-XhIsZKX3Jjc-unsplash.jpg', 'sebastian-dc-YoVP5FYUXIA-unsplash.jpg'];

// Rougly mimics average distribution of Amazon reviews
let one = new Array(14).fill(1);
let two = new Array(6).fill(2);
let three = new Array(8).fill(3);
let four = new Array(18).fill(4);
let five = new Array(54).fill(5);
const merged = [...one, ...two, ...three, ...four, ...five];

// create 0-20 reviews per product
const insertReviews = async () => {
  // for each product_id
  for (let i = 1; i <= 100; i++) {
    // create a random number of reviews for each product
    let numberOfReviews = Math.floor(Math.random() * 21);
    for (let j = 0; j < numberOfReviews; j++) {
      let product_id = i;
      let user_id = Math.floor(Math.random() * 100) + 1;
      let overall_rating = merged[Math.floor(Math.random() * 100)];
      let review_date = faker.date.past(5, '2020-11-13');;
      let headline = faker.lorem.words();
      let full_text = faker.lorem.paragraph();
      let helpful = Math.floor(Math.random() * 40);
      let verified_purchase = (Math.random() <= 0.7) ? 1 : 0;
      let product_photo = null;
      if (Math.random() >= 0.75) {
        product_photo = s3domain + s3Urls[Math.floor(Math.random() * 20)];
      }

      let params = [product_id, user_id, overall_rating, review_date, headline, full_text, helpful, verified_purchase, product_photo];

      let queryStr = 'INSERT INTO reviews(product_id, user_id, overall_rating, review_date, headline, full_text, helpful, verified_purchase, product_photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

      await db.query(queryStr, params);
    }
  }
};

insertReviews();




