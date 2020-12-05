const path = require('path')
const faker = require('faker');
const fs = require('fs');

const reviewsFile =  path.join(__dirname, '../files/reviews.csv')
const headers = 'product_id,user_id,overall_rating,review_date,headline,full_text,helpful,verified_purchase,product_photo\n'
const writeReviews= fs.createWriteStream(reviewsFile);
writeReviews.write(headers, 'utf8');

const writeOneHundredReviews = (writer, encoding, callback) => {
  let i = 3;
  let id = 0;

  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let product_id = id
      let user_id = Math.floor(Math.random() * 100) + 1;
      let overall_rating = Math.floor(Math.random() * 5);
      let review_date = faker.date.past(5, '2020-11-13');
      let headline = faker.random.words(Math.floor(Math.random() * 4) + 2);
      let full_text = faker.random.words(Math.floor(Math.random() * (45 - 22) ) + 22);
      let helpful = Math.floor(Math.random() * 40);
      let verified_purchase = (Math.random() <= 0.7) ? 1 : 0;
      let product_photo = faker.image.imageUrl();
      const data = `${product_id}, ${user_id}, ${overall_rating}, ${review_date}, ${headline}, ${full_text}, ${helpful}, ${verified_purchase}, ${product_photo}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
      // see if we should continue, or wait
      // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
      if (i > 0) {
      // had to stop early!
      // write some more once it drains
        writer.once('drain', write);
      }
  }
  write()
};

  writeOneHundredReviews(writeReviews, 'utf-8', () => {
    writeReviews.end()
  })
