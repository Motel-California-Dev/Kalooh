const bcrypt = require('bcryptjs');

const getPasswordHash = password => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS))
      .then(salt => {
         bcrypt.hash(password, salt)
          .then(hash => {
            console.log(hash);
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
  bcrypt.compare(password, hash)
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.log('Password compare went wrong, bcrypt');
      console.log(err);
    });
};

module.exports = {
  getPasswordHash,
  comparePassword
};

