#!/usr/bin/node

const request = require('request');

const movie_id = process.argv[2]
const url = `https://swapi-api.hbtn.io/api/films/${movie_id}`;

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  if (response.statusCode === 200) {
    const moviedata = JSON.parse(body).title;
    console.log(moviedata);
  }
});
