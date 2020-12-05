const path = require('path')
const faker = require('faker');
const fs = require('fs');

const productsFile =  path.join(__dirname, '../files/products.csv')
const writeProducts= fs.createWriteStream(productsFile);
writeProducts.write('product_name\n', 'utf8');

const writeOneHundredProducts = (writer, encoding, callback) => {
  let i = 10;
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

  writeOneHundredProducts(writeProducts, 'utf-8', () => {
    writeProducts.end()
  })
