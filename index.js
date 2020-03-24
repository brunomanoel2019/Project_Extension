
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
scraping(``); scraping(`page/2`); scraping(`page/3`); scraping(`page/4`); scraping(`page/5`); scraping(`page/6`); scraping(`page/7`); scraping(`page/8`); scraping(`page/9`); scraping(`page/10`); scraping(`page/11`); scraping(`page/12`); scraping(`page/13`); scraping(`page/14`); scraping(`page/15`); scraping(`page/16`); scraping(`page/17`); scraping(`page/18`); scraping(`page/19`); scraping(`page/20`); scraping(`page/21`); scraping(`page/22`); scraping(`page/23`); scraping(`page/24`); scraping(`page/25`); scraping(`page/26`); scraping(`page/27`); scraping(`page/28`); scraping(`page/29`); scraping(`page/30`); scraping(`page/31`); scraping(`page/32`); scraping(`page/33`); scraping(`page/34`); scraping(`page/35`); scraping(`page/36`); scraping(`page/37`); scraping(`page/38`); scraping(`page/39`); scraping(`page/40`); scraping(`page/41`); scraping(`page/42`); scraping(`page/43`); scraping(`page/44`); scraping(`page/45`); scraping(`page/46`); scraping(`page/47`); scraping(`page/48`); scraping(`page/49`); scraping(`page/50`); scraping(`page/51`); scraping(`page/52`); scraping(`page/53`); scraping(`page/54`); scraping(`page/55`); scraping(`page/56`); scraping(`page/57`); scraping(`page/58`); scraping(`page/59`); scraping(`page/60`); scraping(`page/61`); scraping(`page/62`); scraping(`page/63`); scraping(`page/64`); scraping(`page/65`);


