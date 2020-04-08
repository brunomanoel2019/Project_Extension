const axios = require('axios');

const api = axios.create({
  baseURL: 'https://letterboxd.com/film'
});

module.exports = api;