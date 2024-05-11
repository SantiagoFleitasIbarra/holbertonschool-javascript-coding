#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  const films = JSON.parse(body).results;
  const movie = films.filter(function (film) {
    return film.characters.includes('https://swapi-api.hbtn.io/api/people/18/');
  });
  console.log(movie.length);
});
