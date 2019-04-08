const { camelize } = require('pg-promise').utils;
const snakeCase = require('snake-case');

const camelizeColumns = (data, result, e) => {
  const template = data[0];
  for (let prop in template) {
    const camel = camelize(prop);
    if (!(camel in template)) {
      for (let i = 0; i < data.length; i++) {
        let d = data[i];
        d[camel] = d[prop];
        delete d[prop];
      }
    }
  }
};

const snakifyColumns = obj => {
  const snakyBoi = {};
  for (let key in obj) {
    const snakeKey = snakeCase(key.toString());
    snakyBoi[snakeKey] = obj[key]; 
  };

  return snakyBoi;
};

module.exports = {
  camelizeColumns,
  snakifyColumns
};

