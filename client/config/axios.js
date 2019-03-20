import axios from 'axios';

module.exports = axios.create({
  baseURL: 'http://10.0.2.2:3001/'
});

