import axios from 'axios';

module.exports = axios.create({
  baseURL: 'http://ec2-18-215-245-62.compute-1.amazonaws.com/'
});

