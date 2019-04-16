import axios from 'axios';
import { Constants } from 'expo';

const baseURL = Constants.manifest.extra.baseURL;

console.log(baseURL);

module.exports = axios.create({
  baseURL
});

