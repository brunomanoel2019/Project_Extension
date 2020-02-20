const $ = require('cheerio');
const axios = require('axios');
const { writeFile } = require('fs');
const { promisify } = require('util');

const writeFileAsync = promisify(writeFile);

const URL = `https://letterboxd.com/film/birds-of-prey-and-the-fantabulous-emancipation-of-one-harley-quinn/reviews/by/activity/page/`;
let comments = [];

async function scraping(pageNumber) {
  const request = await axios.get(`${URL}/${pageNumber}`);
  const html = $('.collapsible-text p', request.data)
    .each(function(i, e) {
      comments.push(`${$(this).text()}\n`)
    });
    console.log(comments);
  // saveFile();
}

async function saveFile() {
  await writeFileAsync('./text.txt', comments);
}

scraping(2)
