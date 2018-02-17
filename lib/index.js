let axios = require('axios');
let cheerio = require('cheerio');
const EspnFF = require('espn-ff');

document.addEventListener("DOMContentLoaded", () => {

  console.log(EspnFF)

  // axios.get('http://www.espn.com/nfl/statistics/player/_/stat/passing/sort/passingYards/year/2017/seasontype/2')
  //   .then((response) => {
  //     if(response.status === 200) {
  //       debugger
  //         const html = response.data;
  //         const $ = cheerio.load(html);
  //         let devtoList = [];
  //         let list = document.getElementById("football-stats");
  //         $('.oddrow').each((i, el) => {
  //           if (i === 0 ) console.log(el)
  //           console.log(el.children[1])
  //           // if (i === 0) console.log(el.children[4].children[0].data);
  //         })
  //     }
  //   }, (error) => console.log(err) );

});
