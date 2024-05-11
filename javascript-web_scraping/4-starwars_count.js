#!/usr/bin/node

const request = require('request');

const url = process.argv[2];
const characterid = 18;

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  if (response.statusCode === 200) {
    const films = JSON.parse(body).results;
    let count = 0;
    for (const film of films) {
      if (film.characters.includes(`https://swapi-api.hbtn.io/api/films/${characterid}/`)) {
        count += 1;
      }
    }
    console.log(count);
  }
});
