const path = require('path')
const faker = require('faker');
const fs = require('fs');

const productsFile =  '/Users/quentinmcmillian/Desktop/SDC/Quentin-Service/server/db/postgres/CSV/files/products.csv'
const writeProducts= fs.createWriteStream(productsFile);
writeProducts.write('product_name\n', 'utf8');

const writeTenMillionProducts = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;

  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let randomProductName = faker.commerce.productName();
      const data = `${randomProductName}\n`;
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

  writeTenMillionProducts(writeProducts, 'utf-8', () => {
    writeProducts.end()
  })
