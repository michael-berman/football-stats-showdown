const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
  uri: `http://www.espn.com/nfl/statistics/player/_/stat/passing/sort/passingYards/year/2017/seasontype/2`,
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then((data) => {
    console.log(data.html());
  })
  .catch((err) => {
    console.log(err);
  });
