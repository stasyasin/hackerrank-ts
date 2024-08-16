'use strict'

async function getTeams(year, k) {
  // write your code here
  // API endpoint template: https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>
  const result = [];
  let totalPages = 0;
  const data = [];

  const first = await httpGet(getUrl(2015, 0));
  const firstObg = JSON.parse(first);
  totalPages = firstObg.total_pages;
  data.push(...firstObg.data);

  for (let i = 1; i <= totalPages; i++) {
    const response = await httpGet(getUrl(2015, i));
    const responseObj = JSON.parse(response);
    data.push(...responseObj.data);
  }

  const allTeams1 = data.map((value)=> value.team1);
  const allTeams2 = data.map((value)=> value.team2);
  const allTeams = [...allTeams1, ...allTeams2];

  const map = {}

  for (const val of allTeams) {
    map[val] = (map[val] || 0) + 1;
  }

  for (const key of Object.keys(map)) {
    if (map[key] > k) {
      result.push(key)
    }
  }

  return result.sort();

}

function getUrl(year, page) {
  return `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${page}`; }

async function httpGet(url) {
  return new Promise((resolve, reject) => {
    var http = require('https');
    http.get(url, res => {
      res.setEncoding('utf8');
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve(body));
    }).on('error', reject);
  });
};

// const result = getTeams(2015, 13);
// console.log(result);


getTeams(2015, 13).then(result => {
  console.log(result);
})


//
// var http = require('https');
// const first = await http.get(getUrl(year, 0), async (res) => {
//   res.setEncoding('utf8');
//   let body = '';
//   res.on('data', data => {
//     body+=data;
//   })
//   res.on('end', (resolve) => {
//     body = JSON.parse(body);
//     res.result = body;
//     //    console.log(body);
//     //    return body;
//     // return body;
//     totalPages = body.total_pages;
//     // return body;
//   })
// //    res();
// //    return res;
// // res.end();
// // return body;
// });
