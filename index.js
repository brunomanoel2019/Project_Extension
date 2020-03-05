const $ = require('cheerio');
const axios = require('axios');
const { writeFile } = require('fs');
const { promisify } = require('util');

const writeFileAsync = promisify(writeFile);

const URL = `https://letterboxd.com/film/birds-of-prey-and-the-fantabulous-emancipation-of-one-harley-quinn/reviews/by/activity/page/`;
const URL1 = `https://letterboxd.com/film/parasite-2019/reviews/by/activity/page/`;
let comments = [];
let comments1 = [];

async function scraping(pageNumber) {
  const request = await axios.get(`${URL}/${pageNumber}`);
  const requeste = await axios.get(`${URL1}/${pageNumber}`);

          const html = $('.collapsible-text p', request.data)
            .each(function() {
              comments.push("comentario: " + `${$(this).text()}\n`)
            });
                var virg = comments.join("");
            console.log(`filme 1:\n` + virg);

          const html1 = $('.collapsible-text p', requeste.data)
            .each(function() {
              comments1.push("comentario: " + `${$(this).text()}\n`)
            });
                var virg1 = comments1.join("");
            console.log(`filme 2:\n` + virg1);


  // saveFile();
}

async function saveFile() {
  await writeFileAsync('./text.txt', comments, comments1);
}
scraping(3)
