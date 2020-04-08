const $ = require('cheerio');

const { writeFile } = require('fs');
const { promisify } = require('util');
const writeFileAsync = promisify(writeFile);

const api = require('./api');

const comments = [];

const pushInArray = async function(index, element) {
  comments.push(`${$(this).text()}\n`);
  writeFileAsync('./text.txt', comments.join(''));
}

const scraping = async (filmName, pageNumber) => {
  const response = await api.get(`/${filmName}/reviews/page/${pageNumber}`);
  const html = $('.collapsible-text p', response.data).each(pushInArray);
}

for(let i = 1; i <= 50; i++) {
  scraping('joker-2019', `${i}`);
}