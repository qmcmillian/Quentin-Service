const path = require('path')
const faker = require('faker');
const fs = require('fs');

const userFile =  '/Users/quentinmcmillian/Desktop/SDC/Quentin-Service/server/db/postgres/CSV/files/users.csv'
const writeUsers = fs.createWriteStream(userFile);
writeUsers.write('user_name| country| avatar\n', 'utf8');

const writeTenMillionUsers = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;

  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let randomUserName = faker.internet.userName();
      let randomCountry = (Math.random() <= .7) ? 'the United States' : faker.address.country();
      let randomAvatar = faker.image.imageUrl();

      const data = `${randomUserName}| ${randomCountry}| ${randomAvatar}\n`;
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

  writeTenMillionUsers(writeUsers, 'utf-8', () => {
    writeUsers.end()
  })
