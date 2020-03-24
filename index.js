
const $ = require('cheerio');
const axios = require('axios');
const { writeFile } = require('fs');
const { promisify } = require('util');

const writeFileAsync = promisify(writeFile);

const URL = `https://letterboxd.com/film/birds-of-prey-and-the-fantabulous-emancipation-of-one-harley-quinn/reviews/`;
let comments = [];

async function scraping(pageNumber) {
  const request = await axios.get(`${URL}/${pageNumber}`);

          const html = $('.collapsible-text p', request.data)
            .each(function() {
              comments.push("comentario: " + `${$(this).text()}\n`)
            });
                var virg = comments.join("");
            console.log(`filme 1:\n` + virg);

  // saveFile();
}
async function saveFile() {
  await writeFileAsync('./text.txt', comments);
}
scraping('');
for(let i = 2; i <= 150; i++) {
  scraping(`page/${i}`);
}



