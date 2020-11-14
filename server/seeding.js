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

// create 0-20 reviews per product
const insertReviews = async () => {
  // for each product_id
  for (let i = 1; i <= 100; i++) {
    // create a random number of reviews for each product
    let numberOfReviews = Math.floor(Math.random() * 21);
    for (let j = 0; j < numberOfReviews; j++) {
      let product_id = i;
      let user_id = Math.floor(Math.random() * 100) + 1;

      // Rougly mimics average distribution of Amazon reviews
      let one = new Array(14).fill(1);
      let two = new Array(6).fill(2);
      let three = new Array(8).fill(3);
      let four = new Array(18).fill(4);
      let five = new Array(54).fill(5);
      const merged = [...one, ...two, ...three, ...four, ...five];
      let overall_rating = merged[Math.floor(Math.random() * 100)];

      let review_date = faker.date.past(5, '2020-11-13');;
      let headline = faker.lorem.words();
      let full_text = faker.lorem.paragraph();
      let helpful = Math.floor(Math.random() * 40);
      let verified_purchase = (Math.random() <= 0.7) ? 1 : 0;

      let params = [product_id, user_id, overall_rating, review_date, headline, full_text, helpful, verified_purchase];

      let queryStr = 'INSERT INTO reviews(product_id, user_id, overall_rating, review_date, headline, full_text, helpful, verified_purchase) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

      await db.query(queryStr, params);
    }
  }
};

insertReviews();

