// const rp = require('request-promise');
// const cheerio = require('cheerio');
//
// const options = {
//   uri: `http://www.espn.com/nfl/statistics/player/_/stat/passing/sort/passingYards/year/2017/seasontype/2`,
//   transform: function (body) {
//     return cheerio.load(body);
//   }
// };
//
// rp(options)
//   .then((data) => {
//     const html = data.html();
//     let players = [];
//     $(".oddrow").each((i, el) => {
//       console.log(el);
//     })
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs');

axios.get('http://www.espn.com/nfl/statistics/player/_/stat/passing/sort/passingYards/year/2017/seasontype/2')
  .then((response) => {
    if(response.status === 200) {
        const html = response.data;
        const $ = cheerio.load(html);
        let devtoList = [];
        console.log($);
    }
  }, (error) => console.log(err) );
