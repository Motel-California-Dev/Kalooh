const bcrypt = require('bcryptjs');

const getPasswordHash = password => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS))
      .then(salt => {
         bcrypt.hash(password, salt)
          .then(hash => {
            resolve(hash);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

const comparePassword = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log('Password compare went wrong, bcrypt');
        reject(err);
      });
  });
};

module.exports = {
  getPasswordHash,
  comparePassword
};

