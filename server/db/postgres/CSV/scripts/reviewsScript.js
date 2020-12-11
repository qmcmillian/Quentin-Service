const path = require('path')
const faker = require('faker');
const fs = require('fs');
const moment = require('moment');

const reviewsFile =  '/Users/quentinmcmillian/Desktop/SDC/Quentin-Service/server/db/postgres/CSV/files/reviews.csv';
const headers = 'product_id,user_id| overall_rating| review_date| headline |full_text |helpful| verified_purchase| product_photo\n';
const writeReviews= fs.createWriteStream(reviewsFile, {flags: 'a'});
writeReviews.write(headers, 'utf8');

const getRandomDate = () => {
  let randomMonth = Math.floor(Math.random() * 12) + 1;
  let randomDay = Math.floor(Math.random() * 28) + 1;
  let dateString = `${randomMonth}-${randomDay}-2020`;
  return dateString;
}


const generateData = (id) => {
  let data = '';
  let numberOfReviews = Math.floor(Math.random() * 4) + 1;
  for (let j = 0; j <= numberOfReviews; j++) {
    let product_id = id
    let user_id = Math.floor(Math.random() * 10000000) + 1;
    let overall_rating = Math.floor(Math.random() * 5);
    let review_date = getRandomDate();
    let headline = faker.random.words(Math.floor(Math.random() * 4) + 2);
    let full_text = faker.random.words(Math.floor(Math.random() * (45 - 22) ) + 22);
    let helpful = Math.floor(Math.random() * 40);
    let verified_purchase = (Math.random() <= 0.7) ? 1 : 0;
    let product_photo = faker.image.imageUrl();
    data += `${product_id}| ${user_id}| ${overall_rating}| ${review_date}| ${headline}| ${full_text}| ${helpful}| ${verified_purchase}| ${product_photo}\n`;
  }
  return data;
}

const writeTenMillionReviews = (writer, encoding, callback) => {
  let amountOfProducts = 10000000;
  const write = () => {
    let ok = true;
    do {
      ok = writer.write(generateData(amountOfProducts), 'utf-8')
      amountOfProducts--;

      if (amountOfProducts % 10000 === 0) {
        console.log('wrote another 10,000 records', amountOfProducts)
      }


    } while (amountOfProducts > 0 && ok);
        if (amountOfProducts > 0) {
        // had to stop early!
        // write some more once it drains
          writer.once('drain', write);
        }
  }
  write()
}


  writeTenMillionReviews(writeReviews, 'utf-8', () => {
    writeReviews.end()
  })
