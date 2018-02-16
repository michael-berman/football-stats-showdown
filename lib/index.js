let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs');

axios.get('http://www.espn.com/nfl/statistics/player/_/stat/passing/sort/passingYards/year/2017/seasontype/2')
  .then((response) => {
    if(response.status === 200) {
        const html = response.data;
        const $ = cheerio.load(html);
        let devtoList = [];
        $('.oddrow').each((i, el) => {
          if (i === 1) console.log(el.children[4].children[0].data);
        })
    }
  }, (error) => console.log(err) );
